// GET /api/payment-status/:txid
//
// Consulta na FlevoPay o status de uma transação já criada (chamado a cada
// 4s pelo pix.html enquanto o cliente não paga). Nunca expõe a chave da
// API para o navegador — a requisição para a FlevoPay é sempre feita
// daqui, com FLEVOPAY_API_KEY.

module.exports = async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ message: 'Método não permitido.' });
  }

  const apiKey = process.env.FLEVOPAY_API_KEY;
  if (!apiKey) {
    console.error('[payment-status] FLEVOPAY_API_KEY não configurada nas variáveis de ambiente.');
    return res.status(500).json({ message: 'Gateway de pagamento não configurado.' });
  }

  const { txid } = req.query;
  if (!txid) return res.status(400).json({ message: 'txid é obrigatório.' });

  const url = `https://app.flevopay.com.br/api/v1/query?action=get_transaction&id=${encodeURIComponent(txid)}`;

  let flevoRes;
  let data;
  try {
    flevoRes = await fetch(url, { headers: { 'X-API-Key': apiKey } });
    data = await flevoRes.json().catch(() => ({}));
  } catch (err) {
    console.error('[payment-status] Erro de rede ao consultar FlevoPay:', err);
    return res.status(502).json({ message: 'Erro ao consultar status do pagamento.' });
  }

  if (!flevoRes.ok) {
    return res.status(flevoRes.status).json({ message: data.message || 'Transação não encontrada.' });
  }

  // status possíveis: pending, approved, processing, under_review, failed,
  // refunded, chargeback. pix.html já checa === 'approved', então basta
  // repassar o valor da FlevoPay sem tradução.
  return res.status(200).json({
    status: data.status,
    amount: data.amount,
    amount_in_reais: data.amount_in_reais,
    updated_at: data.updated_at,
    paid: data.status === 'approved'
  });
};
