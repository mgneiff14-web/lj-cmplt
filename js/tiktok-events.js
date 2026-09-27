// =======================================================================
// TIKTOK PIXEL — Navegador
// -----------------------------------------------------------------------
// Funil (nomes PADRAO do TikTok — evento fora desta lista entra como
// "custom" e nao alimenta otimizacao de conversao):
//   ViewContent -> AddToCart -> InitiateCheckout -> PlaceAnOrder -> CompletePayment
//
// PlaceAnOrder e CompletePayment TAMBÉM são disparados no servidor
// (api/create-pix.js e api/webhooks/flevopay.js) via TikTok Events API, com
// o MESMO event_id (3o argumento de ttq.track()). É assim que o TikTok casa
// o evento do navegador com o mesmo evento vindo do servidor e conta UMA
// conversao em vez de duas — e ainda por cima combina os melhores sinais de
// cada lado (o navegador manda ip/user-agent/ttclid/ttp reais; o servidor
// manda e-mail/telefone com mais confiança, sem depender de bloqueador de
// anúncio).
// =======================================================================
(function () {
  const PIXEL_ID = 'DASICQRC77UA02BT4NB0';

  // ---------------------------------------------------------------
  // Identificadores de atribuicao
  // ---------------------------------------------------------------

  // ttclid: vem na URL do anúncio. Guardado para sobreviver à navegação.
  try {
    const urlP = new URLSearchParams(window.location.search);
    const ttclid = urlP.get('ttclid') || urlP.get('tt_click_id');
    if (ttclid) {
      sessionStorage.setItem('ttclid', ttclid);
      localStorage.setItem('ttclid', ttclid);
    }
  } catch (e) { /* silencioso */ }

  // _ttp: cookie que o proprio pixel grava. E o segundo identificador de
  // match do TikTok.
  function getTtp() {
    try {
      const m = document.cookie.match(/(?:^|;\s*)_ttp=([^;]+)/);
      return m ? decodeURIComponent(m[1]) : '';
    } catch (e) { return ''; }
  }

  window.ttqGetTtclid = function () {
    try { return sessionStorage.getItem('ttclid') || localStorage.getItem('ttclid') || ''; } catch (e) { return ''; }
  };
  window.ttqGetTtp = getTtp;

  // ---------------------------------------------------------------
  // Disparo base
  // ---------------------------------------------------------------
  function identifyUser() {
    try {
      if (!window.ttq || typeof window.ttq.identify !== 'function') return;
      const email = localStorage.getItem('user_email') || '';
      const phone = localStorage.getItem('user_tel') || '';
      if (email || phone) {
        let params = {};
        if (email) params.email = email.trim().toLowerCase();
        if (phone) {
          let p = phone.replace(/\D/g, '');
          if (p && p.length <= 11) p = '+55' + p;
          else if (p) p = '+' + p;
          params.phone_number = p;
        }
        window.ttq.identify(params);
      }
    } catch (e) { /* silencioso */ }
  }

  function track(evento, props, eventId) {
    try {
      if (!window.ttq || typeof window.ttq.track !== 'function') return;
      // Injeta email e telefone para Advanced Matching aumentar o match rate
      identifyUser();

      // 3o argumento = { event_id }. Esta e a assinatura que o TikTok usa
      // para deduplicar contra o evento server-side.
      if (eventId) {
        window.ttq.track(evento, props, { event_id: String(eventId) });
      } else {
        window.ttq.track(evento, props);
      }
      console.log('[TikTok Pixel] ' + evento + ' disparado.', props, eventId ? '| event_id: ' + eventId : '');
    } catch (e) {
      console.error('[TikTok Pixel] Erro ao disparar ' + evento + ':', e);
    }
  }

  function contents(lista) {
    return (lista || []).map(function (i) {
      return {
        content_id: String(i.id != null ? i.id : (i.content_id || '')),
        content_type: 'product',
        content_name: i.nome || i.content_name || '',
        price: parseFloat(i.preco != null ? i.preco : i.price) || 0,
        quantity: parseInt(i.qty || i.quantity, 10) || 1
      };
    });
  }

  // ---------------------------------------------------------------
  // Eventos do funil
  // ---------------------------------------------------------------

  window.ttqViewContent = function (produto) {
    if (!produto) return;
    track('ViewContent', {
      value: parseFloat(produto.preco) || 0,
      currency: 'BRL',
      content_type: 'product',
      contents: contents([produto])
    });
  };

  window.ttqAddToCart = function (produto, qty) {
    if (!produto) return;
    const q = parseInt(qty, 10) || 1;
    track('AddToCart', {
      value: (parseFloat(produto.preco) || 0) * q,
      currency: 'BRL',
      content_type: 'product',
      contents: contents([Object.assign({}, produto, { qty: q })])
    });
  };

  window.ttqInitiateCheckout = function (valor, itens) {
    track('InitiateCheckout', {
      value: parseFloat(valor) || 0,
      currency: 'BRL',
      content_type: 'product',
      contents: contents(itens || [])
    });
  };

  // PIX gerado / pedido feito, pagamento ainda pendente.
  // event_id = "order_<txid>" — igual ao que api/create-pix.js usa no
  // disparo server-side.
  window.ttqPlaceAnOrder = function (valor, txid, itens) {
    track('PlaceAnOrder', {
      value: parseFloat(valor) || 0,
      currency: 'BRL',
      content_type: 'product',
      contents: contents(itens || [])
    }, 'order_' + (txid || Date.now()));
  };

  // PIX pago. event_id = "purchase_<txid>" — igual ao que
  // api/webhooks/flevopay.js usa no disparo server-side.
  window.ttqCompletePayment = function (valor, txid, itens) {
    track('CompletePayment', {
      value: parseFloat(valor) || 0,
      currency: 'BRL',
      content_type: 'product',
      contents: contents(itens || [])
    }, 'purchase_' + (txid || Date.now()));
  };

  // ---------------------------------------------------------------
  // Ganchos automaticos
  // ---------------------------------------------------------------

  // AddToCart: envolve a funcao global addToCart, entao vale para todos os
  // botoes de compra do site sem tocar em nenhuma pagina.
  // Roda no DOMContentLoaded porque este arquivo carrega no <head>, antes do app.js.
  function hookAddToCart() {
    try {
      if (typeof window.addToCart === 'function' && !window.addToCart.__ttqHooked) {
        const originalAdd = window.addToCart;
        const wrapped = function (produto, qty) {
          const r = originalAdd.apply(this, arguments);
          try { window.ttqAddToCart(produto, qty); } catch (e) {}
          return r;
        };
        wrapped.__ttqHooked = true;
        window.addToCart = wrapped;
      }
    } catch (e) { /* silencioso */ }
  }

  // ViewContent: PRODUTO_ATUAL so existe depois que o script inline da pagina
  // de produto roda, entao le no DOMContentLoaded.
  document.addEventListener('DOMContentLoaded', function () {
    hookAddToCart();
    try {
      if (typeof PRODUTO_ATUAL !== 'undefined' && PRODUTO_ATUAL && PRODUTO_ATUAL.id) {
        window.ttqViewContent(PRODUTO_ATUAL);
      }
    } catch (e) { /* silencioso */ }
  });

})();
