// Helper de servidor para a TikTok Events API (Conversions API).
// Arquivos dentro de api/_lib/ começam com "_" de propósito: a Vercel NÃO
// os expõe como rota HTTP, só permite importar via require() nos outros
// arquivos de api/.
//
// Dispara os mesmos eventos que o pixel do navegador (PlaceAnOrder,
// CompletePayment), com o MESMO event_id usado lá. O TikTok deduplica os
// dois automaticamente e usa o que tiver melhor qualidade de
// correspondência — por isso aqui NÃO precisa se preocupar em ter IP/user
// agent/ttclid completos: o que faltar aqui, o disparo do navegador cobre.
//
// IMPORTANTE (não confirmado na doc oficial, que é uma SPA que não consegui
// ler programaticamente): a normalização de e-mail/telefone abaixo segue o
// padrão comum a APIs de conversão server-side (Meta, Google, TikTok) —
// e-mail em minúsculo sem espaços, telefone só dígitos com código do país,
// depois SHA-256. Se o "Test Events" do TikTok Events Manager mostrar baixa
// qualidade de correspondência nesses campos, é o primeiro lugar a revisar.

const crypto = require('crypto');

const TIKTOK_EVENTS_URL = 'https://business-api.tiktok.com/open_api/v1.3/event/track/';

function sha256(value) {
  return crypto.createHash('sha256').update(String(value), 'utf8').digest('hex');
}

function hashEmail(email) {
  const v = String(email || '').trim().toLowerCase();
  return v ? sha256(v) : undefined;
}

function hashPhone(phone) {
  let p = String(phone || '').replace(/\D/g, '');
  if (!p) return undefined;
  if (p.length <= 11) p = '55' + p; // assume Brasil quando vem sem DDI
  return sha256(p);
}

function contentsFromItems(itens) {
  return (Array.isArray(itens) ? itens : []).map((i) => ({
    content_id: String(i.id ?? i.content_id ?? ''),
    content_name: i.nome || i.content_name || '',
    content_type: 'product',
    price: parseFloat(i.preco ?? i.price) || 0,
    quantity: parseInt(i.qty ?? i.quantity, 10) || 1
  }));
}

/**
 * Envia um evento para a TikTok Events API.
 * @param {object} p
 * @param {string} p.event - Nome do evento (PlaceAnOrder, CompletePayment, etc).
 * @param {string} p.eventId - Mesmo event_id usado no disparo do navegador (dedup).
 * @param {number} p.value - Valor em reais (não em centavos).
 * @param {Array}  p.itens - Itens do pedido.
 * @param {string} [p.email] - E-mail em texto puro (é hasheado aqui dentro).
 * @param {string} [p.phone] - Telefone em texto puro (é hasheado aqui dentro).
 * @param {string} [p.ttclid]
 * @param {string} [p.ttp]
 * @param {string} [p.ip]
 * @param {string} [p.userAgent]
 * @param {string} [p.pageUrl]
 */
async function sendTikTokEvent(p) {
  const pixelId = process.env.TIKTOK_PIXEL_ID;
  const accessToken = process.env.TIKTOK_ACCESS_TOKEN;
  if (!pixelId || !accessToken) {
    console.error('[tiktok] TIKTOK_PIXEL_ID / TIKTOK_ACCESS_TOKEN não configurados — evento não enviado:', p.event);
    return { skipped: true };
  }

  const user = {};
  const email = hashEmail(p.email);
  const phone = hashPhone(p.phone);
  if (email) user.email = email;
  if (phone) user.phone = phone;
  if (p.ttclid) user.ttclid = p.ttclid;
  if (p.ttp) user.ttp = p.ttp;
  if (p.ip) user.ip = p.ip;
  if (p.userAgent) user.user_agent = p.userAgent;

  const payload = {
    event_source: 'web',
    event_source_id: pixelId,
    data: [
      {
        event: p.event,
        event_time: Math.floor(Date.now() / 1000),
        event_id: String(p.eventId),
        user,
        properties: {
          currency: 'BRL',
          value: Number(p.value) || 0,
          content_type: 'product',
          contents: contentsFromItems(p.itens)
        },
        page: p.pageUrl ? { url: p.pageUrl } : undefined
      }
    ]
  };

  try {
    const resp = await fetch(TIKTOK_EVENTS_URL, {
      method: 'POST',
      headers: {
        'Access-Token': accessToken,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    const data = await resp.json().catch(() => ({}));
    if (!resp.ok || data.code !== 0) {
      console.error('[tiktok] Evento rejeitado:', p.event, resp.status, JSON.stringify(data));
    } else {
      console.log('[tiktok] Evento enviado:', p.event, p.eventId);
    }
    return data;
  } catch (err) {
    console.error('[tiktok] Erro de rede ao enviar evento:', p.event, err);
    return { error: true };
  }
}

module.exports = { sendTikTokEvent };
