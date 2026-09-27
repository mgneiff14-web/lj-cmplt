// POST /api/create-pix
//
// Recebe os dados do checkout (pages/resumo.html) e cria uma transação PIX
// na FlevoPay. A chave secreta nunca chega ao navegador: fica só aqui,
// lida da variável de ambiente FLEVOPAY_API_KEY (configurada no painel da
// Vercel, nunca commitada no repositório).
//
// Contrato com o front-end (mantido igual ao backend anterior para não
// precisar mexer no restante do checkout):
//   entrada:  { amount, name, email, cellphone, taxId, items[], utm_*, sck, src, address }
//   sucesso:  { pix_code, txid, pix_qr_base64, reference, expires_at }
//   erro:     { message }

const { sendTikTokEvent } = require('./_lib/tiktok');
const { upsertUtmifyOrder } = require('./_lib/utmify');

const FLEVOPAY_URL = 'https://app.flevopay.com.br/api/v1/transaction';

function onlyDigits(s) {
  return String(s || '').replace(/\D/g, '');
}

function gerarReferencia() {
  const rand = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `SS-${Date.now()}-${rand}`;
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ message: 'Método não permitido.' });
  }

  const apiKey = process.env.FLEVOPAY_API_KEY;
  if (!apiKey) {
    console.error('[create-pix] FLEVOPAY_API_KEY não configurada nas variáveis de ambiente.');
    return res.status(500).json({ message: 'Gateway de pagamento não configurado.' });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch { body = {}; }
  }
  body = body || {};

  const amount = parseInt(body.amount, 10);
  const name = String(body.name || '').trim();
  const email = String(body.email || '').trim();
  const document_ = onlyDigits(body.taxId);
  const phone = onlyDigits(body.cellphone);

  // Validações mínimas — a FlevoPay também valida, mas falhar cedo evita
  // gastar uma chamada de API com dado claramente incompleto.
  if (!Number.isFinite(amount) || amount <= 0) {
    return res.status(400).json({ message: 'Valor do pedido inválido.' });
  }
  if (!name) return res.status(400).json({ message: 'Nome é obrigatório.' });
  if (!/^\S+@\S+\.\S+$/.test(email)) return res.status(400).json({ message: 'E-mail inválido.' });
  if (document_.length !== 11 && document_.length !== 14) {
    return res.status(400).json({ message: 'CPF/CNPJ inválido.' });
  }
  if (phone.length < 10) return res.status(400).json({ message: 'Telefone inválido.' });

  // NOTA: o valor (amount) vem calculado pelo carrinho no navegador. Isso
  // significa que, hoje, um cliente que abrir o devtools pode alterá-lo
  // antes de enviar. Para fechar essa brecha, o certo é recalcular o total
  // aqui no servidor a partir do catálogo (js/catalogo.js) antes de confiar
  // no valor — ainda não fiz isso, é a próxima melhoria de segurança.

  const items = Array.isArray(body.items) ? body.items : [];
  const description = items.length === 0
    ? 'Pedido Stone Shop'
    : items.length === 1
      ? String(items[0].nome || 'Produto').slice(0, 120)
      : `${String(items[0].nome || 'Produto').slice(0, 90)} + ${items.length - 1} item(ns)`;

  const reference = gerarReferencia();

  const proto = req.headers['x-forwarded-proto'] || 'https';
  const host = req.headers['x-forwarded-host'] || req.headers.host;
  const postbackUrl = host ? `${proto}://${host}/api/webhooks/flevopay` : undefined;

  const payload = {
    amount,
    description,
    reference,
    source: 'api_externa', // catálogo não é cadastrado como "produto" na FlevoPay
    customer: { name, email, document: document_, phone },
    tracking: {
      utm_source: body.utm_source || '',
      utm_medium: body.utm_medium || '',
      utm_campaign: body.utm_campaign || '',
      utm_term: body.utm_term || '',
      utm_content: body.utm_content || '',
      src: body.src || '',
      sck: body.sck || ''
    }
  };

  if (postbackUrl) payload.postback_url = postbackUrl;

  const addr = body.address || {};
  const zipcodeDigits = onlyDigits(addr.zipcode);
  if (zipcodeDigits || addr.street) {
    payload.address = {
      street: addr.street || '',
      number: addr.number || '',
      complement: addr.complement || '',
      neighborhood: addr.neighborhood || '',
      city: addr.city || '',
      state: addr.state || '',
      zipcode: zipcodeDigits
    };
  }

  let flevoRes;
  let data;
  try {
    flevoRes = await fetch(FLEVOPAY_URL, {
      method: 'POST',
      headers: {
        'X-API-Key': apiKey,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    data = await flevoRes.json().catch(() => ({}));
  } catch (err) {
    console.error('[create-pix] Erro de rede ao chamar FlevoPay:', err);
    return res.status(502).json({ message: 'Erro ao comunicar com o gateway de pagamento.' });
  }

  if (!flevoRes.ok || data.status !== 'success' || !data.qr_code) {
    console.error('[create-pix] FlevoPay respondeu com erro:', flevoRes.status, data);
    return res.status(502).json({ message: data.message || 'Não foi possível gerar o PIX. Tente novamente.' });
  }

  // Usamos a NOSSA `reference` como txid — não o transaction_id numérico da
  // FlevoPay. A doc da FlevoPay dá exemplos inconsistentes de formato do
  // transaction_id entre a criação e o webhook (238 vs "FLEVOPAY_9X2A1B8C"),
  // mas confirma que "id" no retorno da criação é um espelho da nossa
  // reference, e que a consulta aceita "qualquer um deles". Como reference
  // é um valor que nós mesmos geramos, ele é garantidamente idêntico em
  // toda parte (polling, webhook, event_id do pixel) sem depender desse
  // formato.
  const txid = reference;
  const eventId = 'order_' + txid;
  const clientIp = (req.headers['x-forwarded-for'] || '').split(',')[0].trim() || undefined;

  // TikTok Events API (server) + Utmify (pedido "waiting_payment"). Precisa
  // de "await" aqui mesmo — numa função serverless da Vercel, se a resposta
  // for devolvida antes, o runtime pode congelar a execução e essas
  // chamadas nunca chegam a sair. Promise.allSettled garante que uma falha
  // numa delas não derruba a resposta do PIX pro cliente.
  await Promise.allSettled([
    sendTikTokEvent({
      event: 'PlaceAnOrder',
      eventId,
      value: amount / 100,
      itens: items,
      email,
      phone,
      ttclid: body.ttclid,
      ttp: body.ttp,
      ip: clientIp,
      userAgent: req.headers['user-agent'],
      pageUrl: body.src
    }),
    upsertUtmifyOrder({
      orderId: reference,
      flevopayStatus: 'pending',
      customer: { name, email, phone, document: document_ },
      items,
      amountCents: amount,
      tracking: body
    })
  ]);

  return res.status(200).json({
    pix_code: data.qr_code,
    pix_qr_base64: data.qr_code_base64 || null,
    txid,
    reference,
    expires_at: data.expires_at || null
  });
};
