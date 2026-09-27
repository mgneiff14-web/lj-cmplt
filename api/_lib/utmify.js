// Helper de servidor para a API de Pedidos da Utmify.
// https://docs.utmify.com.br/envio-de-vendas — POST com header x-api-token.
// Fica em api/_lib/ (prefixo "_") pra Vercel não expor isso como rota HTTP.

const UTMIFY_ORDERS_URL = 'https://api.utmify.com.br/api-credentials/orders';

// FlevoPay usa: pending, approved, processing, under_review, failed, refunded, chargeback.
// Utmify aceita:  waiting_payment, paid, refused, refunded, chargedback.
const STATUS_MAP = {
  pending: 'waiting_payment',
  processing: 'waiting_payment',
  under_review: 'waiting_payment',
  approved: 'paid',
  failed: 'refused',
  refunded: 'refunded',
  chargeback: 'chargedback'
};

function formatUtcDate(date) {
  const d = date || new Date();
  const pad = (n) => String(n).padStart(2, '0');
  return `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())} ${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}:${pad(d.getUTCSeconds())}`;
}

/**
 * Cria ou atualiza um pedido na Utmify. Chame de novo com o MESMO orderId e
 * createdAt quando o status mudar (ex.: waiting_payment -> paid) — é assim
 * que a doc da Utmify pede pra atualizar em vez de duplicar o pedido.
 *
 * @param {object} p
 * @param {string} p.orderId - Nossa referência única (a mesma da FlevoPay).
 * @param {string} p.flevopayStatus - Status cru vindo da FlevoPay.
 * @param {string} [p.createdAtRaw] - created_at já formatado "YYYY-MM-DD HH:MM:SS"
 *   (é o que a consulta GET da FlevoPay devolve — usar isso quando disponível
 *   garante o MESMO valor entre a chamada de criação e a de confirmação,
 *   já que não há banco próprio guardando esse dado entre as duas).
 * @param {string} [p.createdAtIso] - Alternativa quando não há createdAtRaw ainda (na criação do PIX).
 * @param {object} p.customer - { name, email, phone, document }
 * @param {Array}  p.items - [{ id, nome, preco, qty }]
 * @param {number} p.amountCents - Valor total em centavos.
 * @param {object} [p.tracking] - { utm_source, utm_medium, utm_campaign, utm_content, utm_term, src, sck }
 */
async function upsertUtmifyOrder(p) {
  const token = process.env.UTMIFY_API_TOKEN;
  if (!token) {
    console.error('[utmify] UTMIFY_API_TOKEN não configurado — pedido não enviado:', p.orderId);
    return { skipped: true };
  }

  const status = STATUS_MAP[p.flevopayStatus] || 'waiting_payment';
  const createdAt = p.createdAtRaw || (p.createdAtIso ? formatUtcDate(new Date(p.createdAtIso)) : formatUtcDate());

  const payload = {
    orderId: p.orderId,
    platform: 'StoneShop',
    paymentMethod: 'pix',
    status,
    createdAt,
    approvedDate: status === 'paid' ? formatUtcDate() : null,
    refundedAt: status === 'refunded' ? formatUtcDate() : null,
    customer: {
      name: p.customer?.name || '',
      email: p.customer?.email || '',
      phone: p.customer?.phone || undefined,
      document: p.customer?.document || undefined
    },
    products: (p.items || []).map((i) => ({
      id: String(i.id ?? ''),
      name: i.nome || i.name || 'Produto',
      quantity: parseInt(i.qty, 10) || 1,
      priceInCents: Math.round((typeof i.preco === 'number' ? i.preco : parseFloat(String(i.preco).replace(',', '.'))) * 100) || 0
    })),
    trackingParameters: {
      src: p.tracking?.src || null,
      sck: p.tracking?.sck || null,
      utm_source: p.tracking?.utm_source || null,
      utm_campaign: p.tracking?.utm_campaign || null,
      utm_medium: p.tracking?.utm_medium || null,
      utm_content: p.tracking?.utm_content || null,
      utm_term: p.tracking?.utm_term || null
    },
    commission: {
      // A FlevoPay não documenta um percentual fixo de taxa, então por ora
      // consideramos a taxa como 0 aqui (fica só como referência de
      // faturamento bruto). Ajustar se/quando soubermos o valor real da taxa.
      totalPriceInCents: p.amountCents,
      gatewayFeeInCents: 0,
      userCommissionInCents: p.amountCents,
      currency: 'BRL'
    },
    isTest: false
  };

  try {
    const resp = await fetch(UTMIFY_ORDERS_URL, {
      method: 'POST',
      headers: {
        'x-api-token': token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    const data = await resp.json().catch(() => ({}));
    if (!resp.ok) {
      console.error('[utmify] Pedido rejeitado:', p.orderId, resp.status, JSON.stringify(data));
    } else {
      console.log('[utmify] Pedido enviado:', p.orderId, status);
    }
    return data;
  } catch (err) {
    console.error('[utmify] Erro de rede ao enviar pedido:', p.orderId, err);
    return { error: true };
  }
}

module.exports = { upsertUtmifyOrder };
