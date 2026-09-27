// POST /api/webhooks/flevopay
//
// Recebe os postbacks da FlevoPay (o postback_url vai por transação, já
// enviado por api/create-pix.js — não precisa cadastrar nada no painel).
//
// A documentação da FlevoPay não descreve nenhuma assinatura/HMAC para
// provar que o POST realmente veio dela. Por isso este handler NUNCA confia
// direto no campo "status" do corpo recebido — ele usa só o transaction_id
// pra reconsultar a transação na própria API (com a nossa chave secreta) e
// SÓ then decide o que fazer.
//
// LIMITAÇÃO CONHECIDA: este projeto não tem banco de dados. A lista de
// itens do carrinho (contents/products item a item) só existe no momento
// do checkout (api/create-pix.js) — aqui no webhook só temos o que a
// própria FlevoPay guardou da transação (customer, tracking, amount,
// description), não uma lista de produtos. Por isso o evento de pagamento
// confirmado abaixo manda o valor total certo, mas um "product" só —
// com base na description. Pra ter o detalhamento completo também na
// confirmação, precisa de uma persistência (Vercel KV/Postgres): gravar os
// itens em api/create-pix.js e reler aqui pelo `reference`.

const { sendTikTokEvent } = require('../_lib/tiktok');
const { upsertUtmifyOrder } = require('../_lib/utmify');

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).send('Método não permitido.');
  }

  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch { body = {}; }
  }
  body = body || {};

  // Preferimos a NOSSA `reference` (external_id/store_reference) como chave
  // de consulta e como base do event_id — é o valor que api/create-pix.js
  // já usou como txid ao responder pro navegador, então bate exatamente com
  // o event_id que o pixel do cliente já disparou. O transaction_id da
  // FlevoPay fica só como fallback (a doc mostra formatos inconsistentes
  // dele entre a criação e o webhook, então não dá pra confiar nele pra
  // casar com o lado do cliente).
  const reference = body.external_id || body.store_reference || body.transaction_id;
  console.log('[webhook flevopay] recebido:', {
    transaction_id: body.transaction_id,
    external_id: body.external_id,
    status_informado: body.status
  });

  const apiKey = process.env.FLEVOPAY_API_KEY;
  if (!apiKey) {
    console.error('[webhook flevopay] FLEVOPAY_API_KEY não configurada — não foi possível reconfirmar.');
    return res.status(200).json({ received: true });
  }
  if (!reference) {
    return res.status(200).json({ received: true });
  }

  let confirmado;
  try {
    const url = `https://app.flevopay.com.br/api/v1/query?action=get_transaction&id=${encodeURIComponent(reference)}`;
    const r = await fetch(url, { headers: { 'X-API-Key': apiKey } });
    confirmado = await r.json().catch(() => ({}));
    console.log('[webhook flevopay] status confirmado via API:', confirmado.status);
  } catch (err) {
    console.error('[webhook flevopay] falha ao reconfirmar status na API:', err);
    // A FlevoPay reenvia o webhook depois se não responder 200 — mas aqui a
    // falha foi nossa em consultar, então respondemos 200 mesmo assim (não
    // adianta pedir reenvio de algo que nosso lado não conseguiu processar
    // desta vez; o polling do pix.html continua tentando de qualquer forma).
    return res.status(200).json({ received: true });
  }

  const status = confirmado.status;
  const customerData = confirmado.customer_data || {};
  const customer = customerData.customer || {};
  const amountCents = confirmado.amount ?? body.amount;
  const description = customerData.description || 'Pedido Stone Shop';

  const tasks = [
    upsertUtmifyOrder({
      orderId: reference,
      flevopayStatus: status,
      createdAtRaw: confirmado.created_at,
      customer: {
        name: customer.name,
        email: customer.email,
        phone: customer.phone,
        document: customer.document
      },
      items: [{ id: 'pedido', nome: description, qty: 1, preco: (amountCents || 0) / 100 }],
      amountCents,
      tracking: customerData.tracking || {}
    })
  ];

  if (status === 'approved') {
    tasks.push(sendTikTokEvent({
      event: 'CompletePayment',
      eventId: 'purchase_' + reference,
      value: (amountCents || 0) / 100,
      itens: [{ id: 'pedido', nome: description, qty: 1, preco: (amountCents || 0) / 100 }],
      email: customer.email,
      phone: customer.phone
      // Sem ttclid/ttp/ip/user_agent aqui de propósito: quem completa esse
      // sinal é o disparo do navegador em pix.html, com o MESMO event_id
      // ("purchase_<txid>") — o TikTok deduplica e junta os dois.
    }));
  }

  await Promise.allSettled(tasks);

  // A FlevoPay espera 200 OK para não ficar reenviando o mesmo webhook.
  return res.status(200).json({ received: true });
};
