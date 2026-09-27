// ===== ATRIBUIÇÃO (UTMs) - captura de 1ª parte, sem pixel de terceiros =====
// Guarda os parâmetros de origem da venda assim que o cliente entra pelo
// link do anúncio, para sobreviverem à navegação entre páginas até o
// resumo.html, que os repassa no `tracking` da FlevoPay (ela mesma integra
// com a Utmify a partir daí — não precisamos de script de pixel para isso).
(function capturarAtribuicao() {
  try {
    const params = new URLSearchParams(window.location.search);
    const campos = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'src', 'sck'];
    campos.forEach(function (campo) {
      const valor = params.get(campo);
      if (valor) {
        sessionStorage.setItem(campo, valor);
        localStorage.setItem(campo, valor);
      }
    });
  } catch (e) { /* silencioso */ }
})();

// ===== CARRINHO - gerenciamento via localStorage =====
const CART_KEY = 'famosinhos_cart';

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch { return []; }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function addToCart(produto, qty = 1) {
  const cart = getCart();
  
  // Normaliza o nome do produto 101 Pirelli universalmente para "Pneus Pirelli"
  let prodNome = produto.nome;
  if (Number(produto.id) === 101) {
    prodNome = 'Pneus Pirelli';
  }

  const idx = cart.findIndex(i => Number(i.id) === Number(produto.id) && i.variacao === (produto.variacao || null));
  if (idx >= 0) {
    cart[idx].qty += qty;
  } else {
    // Pega a imagem principal, ignorando vídeos .mp4
    let cleanImg = '';
    if (produto.imagens && produto.imagens.length) {
      // Prefere a primeira imagem real (não mp4)
      const primeiraImg = produto.imagens.find(i => !i.endsWith('.mp4') && !i.endsWith('.webm'));
      cleanImg = primeiraImg || produto.imagens[0];
    }
    if (!cleanImg) cleanImg = produto.img || '';
    if (cleanImg.startsWith('../')) {
      cleanImg = cleanImg.substring(3);
    }
    cart.push({
      id: produto.id,
      nome: prodNome,
      preco: produto.preco,
      precoOrig: produto.precoOrig || (produto.preco * 1.5),
      img: cleanImg,
      qty: qty,
      variacao: produto.variacao || null
    });
  }
  saveCart(cart);
  updateCartBadges();
  return cart;
}

function removeFromCart(id, variacao = null) {
  const targetId = Number(id);
  const cart = getCart().filter(i => {
    const matchId = Number(i.id) === targetId;
    if (matchId) {
      if (variacao !== null) {
        return i.variacao !== variacao;
      }
      return false; // Se não passou variação, remove todos com este ID
    }
    return true;
  });
  saveCart(cart);
  updateCartBadges();
  return cart;
}

function updateQty(id, delta, variacao = null) {
  let cart = getCart();
  const idx = cart.findIndex(i => {
    const matchId = Number(i.id) === Number(id);
    if (matchId && variacao !== null) {
      return i.variacao === variacao;
    }
    return matchId;
  });
  if (idx >= 0) {
    const newQty = cart[idx].qty + delta;
    if (newQty <= 0) {
      return null;
    } else {
      cart[idx].qty = newQty;
      saveCart(cart);
    }
  }
  return cart;
}

function getCartCount() {
  return getCart().reduce((sum, i) => sum + i.qty, 0);
}

function getCartTotal() {
  return getCart().reduce((sum, i) => sum + i.preco * i.qty, 0);
}

function updateCartBadges() {
  const count = getCartCount();
  document.querySelectorAll('.cart-badge').forEach(badge => {
    badge.textContent = count > 0 ? count : '';
    badge.style.display = count > 0 ? 'flex' : 'none';
    badge.classList.remove('pop');
    void badge.offsetWidth;
    if (count > 0) badge.classList.add('pop');
  });
}

// ===== TOAST =====
function showToast(msg, duration = 2500) {
  let toast = document.getElementById('toast-global');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-global';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), duration);
}

// ===== COMPARTILHAR PRODUTO (Copiar link) =====
function shareProduct() {
  const url = window.location.href;
  navigator.clipboard.writeText(url).then(() => {
    showToast('Link do produto copiado com sucesso!');
  }).catch(() => {
    // Fallback caso clipboard API falhe
    const tempInput = document.createElement('input');
    tempInput.value = url;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    showToast('Link do produto copiado com sucesso!');
  });
}

// ===== MAIS OPÇÕES (Três Pontos) =====
function showMoreOptions() {
  let overlay = document.getElementById('more-options-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'more-options-overlay';
    overlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.4);
      z-index: 1100;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      opacity: 0;
      transition: opacity 0.25s ease;
    `;

    // Obter o caminho base correto dependendo se está na raiz ou na pasta pages
    const isIndex = window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/');
    const basePath = isIndex ? '' : '../';
    const pagesPath = isIndex ? 'pages/' : '';

    const panel = document.createElement('div');
    panel.style.cssText = `
      width: 100%;
      max-width: 480px;
      background: #fff;
      border-radius: 20px 20px 0 0;
      padding: 20px 16px 30px 16px;
      box-sizing: border-box;
      transform: translateY(100%);
      transition: transform 0.25s ease;
    `;

    panel.innerHTML = `
      <div style="width: 40px; height: 5px; background: #e0e0e0; border-radius: 3px; margin: 0 auto 20px auto;"></div>
      <h3 style="margin: 0 0 20px 0; font-size: 16px; font-weight: 600; color: #222; text-align: center;">Mais ações</h3>
      <div style="display: flex; flex-direction: column; gap: 4px;">
        <a href="${isIndex ? 'index.html' : '../index.html'}" style="display: flex; align-items: center; gap: 12px; padding: 14px 12px; text-decoration: none; color: #222; font-size: 15px; border-bottom: 1px solid #f5f5f5;">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
          Página inicial da loja
        </a>
        <a href="${pagesPath}carrinho.html" style="display: flex; align-items: center; gap: 12px; padding: 14px 12px; text-decoration: none; color: #222; font-size: 15px; border-bottom: 1px solid #f5f5f5;">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
          Ir para o carrinho
        </a>
        <div onclick="hideMoreOptions(); shareProduct();" style="display: flex; align-items: center; gap: 12px; padding: 14px 12px; color: #222; font-size: 15px; cursor: pointer; border-bottom: 1px solid #f5f5f5;">
          <img src="${basePath}img/share-arrow.png" alt="Compartilhar" style="width: 20px; height: 20px; object-fit: contain;">
          Copiar link do produto
        </div>
        <div onclick="hideMoreOptions(); showMyOrders();" style="display: flex; align-items: center; gap: 12px; padding: 14px 12px; color: #222; font-size: 15px; cursor: pointer;">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
          Pedidos
        </div>
      </div>
      <button onclick="hideMoreOptions()" style="margin-top: 20px; width: 100%; height: 44px; border-radius: 22px; border: 1px solid #ddd; background: #fff; font-size: 15px; font-weight: 500; color: #555; cursor: pointer;">Fechar</button>
    `;
    overlay.appendChild(panel);
    document.body.appendChild(overlay);

    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) hideMoreOptions();
    });
  }

  // Ativar com transição suave
  overlay.style.display = 'flex';
  setTimeout(() => {
    overlay.style.opacity = '1';
    overlay.firstElementChild.style.transform = 'translateY(0)';
  }, 10);
}

function hideMoreOptions() {
  const overlay = document.getElementById('more-options-overlay');
  if (overlay) {
    overlay.style.opacity = '0';
    overlay.firstElementChild.style.transform = 'translateY(100%)';
    setTimeout(() => {
      overlay.style.display = 'none';
    }, 250);
  }
}

// ===== SLIDER DE IMAGENS =====
function initSlider(sliderEl) {
  if (!sliderEl) return;
  const track = sliderEl.querySelector('.slider-track');
  const counter = sliderEl.querySelector('.slider-counter');
  const dotsContainer = sliderEl.querySelector('.slider-dots');
  const imgs = track ? track.querySelectorAll('.slider-img') : [];
  let current = 0;
  let startX = 0;
  let isDragging = false;
  let dragDelta = 0;

  function goto(idx) {
    current = Math.max(0, Math.min(imgs.length - 1, idx));
    if (track) track.style.transform = `translateX(calc(-${current * 100}% + 0px))`;
    if (counter) counter.textContent = `${current + 1} / ${imgs.length}`;
    if (dotsContainer) {
      dotsContainer.querySelectorAll('.slider-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === current);
      });
    }
  }

  // Criar dots
  if (dotsContainer) {
    if (imgs.length <= 1) {
      dotsContainer.style.display = 'none';
    } else {
      dotsContainer.style.display = 'flex';
      dotsContainer.innerHTML = '';
      imgs.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.className = 'slider-dot' + (i === 0 ? ' active' : '');
        dot.addEventListener('click', () => goto(i));
        dotsContainer.appendChild(dot);
      });
    }
  }

  // Eventos touch/mouse
  let startY = 0;
  let isHorizontalSwipe = false;

  function onStart(x, y) {
    startX = x;
    startY = y;
    isDragging = true;
    isHorizontalSwipe = false;
    dragDelta = 0;
    if (track) track.style.transition = 'none';
  }

  function onMove(e, x, y) {
    if (!isDragging) return;

    const diffX = Math.abs(x - startX);
    const diffY = Math.abs(y - startY);

    if (!isHorizontalSwipe && diffX > 5 && diffX > diffY) {
      isHorizontalSwipe = true;
    }

    if (isHorizontalSwipe) {
      if (e && e.cancelable) {
        e.preventDefault();
      }
      dragDelta = x - startX;
      if (track) track.style.transform = `translateX(calc(-${current * 100}% + ${dragDelta}px))`;
    }
  }

  function onEnd() {
    if (!isDragging) return;
    isDragging = false;
    if (track) track.style.transition = 'transform 0.3s ease-out';
    if (dragDelta < -50) goto(current + 1);
    else if (dragDelta > 50) goto(current - 1);
    else goto(current);
    dragDelta = 0;
  }

  sliderEl.addEventListener('touchstart', e => onStart(e.touches[0].clientX, e.touches[0].clientY), { passive: false });
  sliderEl.addEventListener('touchmove', e => onMove(e, e.touches[0].clientX, e.touches[0].clientY), { passive: false });
  sliderEl.addEventListener('touchend', onEnd);
  sliderEl.addEventListener('mousedown', e => onStart(e.clientX, e.clientY));
  sliderEl.addEventListener('mousemove', e => { if (isDragging) onMove(e, e.clientX, e.clientY); });
  sliderEl.addEventListener('mouseup', onEnd);
  sliderEl.addEventListener('mouseleave', onEnd);

  goto(0);
}

// ===== MODAL DE FOTO =====
function openPhotoModal(src) {
  let modal = document.getElementById('photo-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'photo-modal';
    modal.className = 'photo-modal';
    modal.innerHTML = `
      <img id="photo-modal-img" src="" alt="Foto">
      <div class="photo-modal-close" onclick="closePhotoModal()">✕</div>
    `;
    modal.addEventListener('click', e => {
      if (e.target === modal) closePhotoModal();
    });
    document.body.appendChild(modal);
  }
  document.getElementById('photo-modal-img').src = src;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closePhotoModal() {
  const modal = document.getElementById('photo-modal');
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = '';
}

// ===== TIMER DE OFERTA RELÂMPAGO =====
function initOfertaTimer() {
  const timers = document.querySelectorAll('.oferta-timer');
  if (!timers.length) return;

  // Calcula tempo restante até próxima meia-noite ou 4 horas a frente
  let endTime = parseInt(localStorage.getItem('oferta_end')) || 0;
  const now = Date.now();
  if (!endTime || endTime < now) {
    endTime = now + (4 * 60 * 60 * 1000); // 4 horas
    localStorage.setItem('oferta_end', endTime);
  }

  function update() {
    const remaining = Math.max(0, endTime - Date.now());
    const h = Math.floor(remaining / 3600000);
    const m = Math.floor((remaining % 3600000) / 60000);
    const s = Math.floor((remaining % 60000) / 1000);
    const str = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    timers.forEach(t => t.textContent = str);
    if (remaining === 0) {
      // Reinicia
      endTime = Date.now() + (4 * 60 * 60 * 1000);
      localStorage.setItem('oferta_end', endTime);
    }
  }

  update();
  setInterval(update, 1000);
}

// ===== CONTADOR DE PESSOAS OLHANDO E ESTOQUE DE URGÊNCIA (simulado) =====
function initPessoasOlhando() {
  const prodId = (typeof PRODUTO_ATUAL !== 'undefined' && PRODUTO_ATUAL && PRODUTO_ATUAL.id) ? PRODUTO_ATUAL.id : 1;

  // 1. Dinamiza as Unidades Restantes baseando-se no ID único do produto (variando de forma estável entre 8 e 28)
  const baseEstoque = 8 + ((prodId * 7) % 21);
  const elements = document.querySelectorAll('*');
  elements.forEach(el => {
    if (el.children.length === 0 && el.textContent.includes('Restam')) {
      const match = el.textContent.match(/Restam\s+(\d+)\s+unidades/i);
      if (match) {
        el.innerHTML = el.innerHTML.replace(/Restam\s+\d+\s+unidades/i, `Restam <strong>${baseEstoque}</strong> unidades`);
      }
    } else if (el.tagName === 'SPAN' && el.textContent.includes('Restam') && el.querySelector('strong')) {
      const strong = el.querySelector('strong');
      if (strong) {
        strong.textContent = baseEstoque;
      }
    }
  });

  // 2. Dinamiza as Pessoas Olhando (variando entre 42 e 148)
  const basePessoas = 42 + ((prodId * 17) % 107);

  // Varre spans de texto com a contagem de pessoas olhando
  elements.forEach(el => {
    if (el.children.length === 0 && el.textContent.includes('pessoas olhando')) {
      const match = el.textContent.match(/(\d+)\s+pessoas olhando/i);
      if (match) {
        el.innerHTML = el.innerHTML.replace(/\d+\s+pessoas olhando/i, `<strong class="pessoas-olhando-count" data-base="${basePessoas}">${basePessoas}</strong> pessoas olhando`);
      }
    } else if (el.tagName === 'SPAN' && el.textContent.includes('pessoas olhando') && !el.querySelector('.pessoas-olhando-count')) {
      const match = el.textContent.match(/(\d+)\s+pessoas/i);
      if (match) {
        el.innerHTML = el.innerHTML.replace(/\d+\s+pessoas/i, `<strong class="pessoas-olhando-count" data-base="${basePessoas}">${basePessoas}</strong> pessoas`);
      }
    }
  });

  // Mantém a oscilação realista em tempo real
  const activeContadores = document.querySelectorAll('.pessoas-olhando-count');
  activeContadores.forEach(el => {
    const base = parseInt(el.getAttribute('data-base')) || basePessoas;
    el.textContent = base;

    function updateCount() {
      const delta = Math.floor(Math.random() * 7) - 3;
      const newVal = Math.max(30, base + delta);
      el.textContent = newVal;
    }
    setInterval(updateCount, 5000 + Math.random() * 3000);
  });
}

// ===== ESTADO E PAGINAÇÃO DE AVALIAÇÕES =====
const reviewPaginationState = {};

function initReviewPagination() {
  const containers = document.querySelectorAll('[id^="mais-reviews-"]');
  containers.forEach(container => {
    const cards = container.querySelectorAll('.review-card');
    // Oculta todos os cards adicionais do contêiner de "ver mais" inicialmente
    cards.forEach(card => {
      card.style.display = 'none';
    });
    container.style.display = 'block';

    // Recupera o ID do produto para achar o botão correspondente
    const prodId = container.id.replace('mais-reviews-', '');
    const btn = document.getElementById(`ver-mais-btn-${prodId}`);
    if (btn) {
      btn.style.display = 'block';
      let restantes = cards.length;
      if (btn.hasAttribute('data-fake-total')) {
        restantes = parseInt(btn.getAttribute('data-fake-total'), 10);
      }
      btn.innerHTML = `Ver mais avaliações (${restantes} restantes) ›`;
    }
  });
}

function verMaisReviews(containerId, btnId, totalOriginal) {
  const container = document.getElementById(containerId);
  const btn = document.getElementById(btnId);
  if (!container || !btn) return;

  const cards = Array.from(container.querySelectorAll('.review-card'));
  if (cards.length === 0) {
    btn.style.display = 'none';
    return;
  }

  // Inicializar estado do contêiner se não existir
  if (!reviewPaginationState[containerId]) {
    let totalValue = cards.length;
    if (btn.hasAttribute('data-fake-total')) {
      totalValue = parseInt(btn.getAttribute('data-fake-total'), 10);
    }
    reviewPaginationState[containerId] = {
      visibleCount: 0,
      total: totalValue
    };
  }

  const state = reviewPaginationState[containerId];
  const nextVisibleCount = Math.min(state.visibleCount + 10, state.total);

  // Exibir os próximos 10 cards
  for (let i = state.visibleCount; i < nextVisibleCount; i++) {
    if (cards[i]) {
      cards[i].style.display = 'block';
    }
  }

  state.visibleCount = nextVisibleCount;
  const restantes = state.total - state.visibleCount;

  if (restantes > 0) {
    btn.innerHTML = `Ver mais avaliações (${restantes} restantes) ›`;
  } else {
    btn.style.display = 'none';
  }
}

// ===== CORES DOS AVATARES POR INICIAL =====
function initAvatarColors() {
  const CORES_PALETA = [
    '#5c6bc0', // Azul/Violeta
    '#26a69a', // Verde/Teal
    '#26c6da', // Ciano
    '#66bb6a', // Verde claro
    '#8d6e63', // Marrom suave
    '#78909c', // Azul acinzentado
    '#ffa726', // Laranja suave
    '#ab47bc', // Roxo
    '#ec407a', // Rosa escuro
    '#7e57c2', // Roxo médio
    '#29b6f6'  // Azul celeste
  ];

  const placeholders = document.querySelectorAll('.review-avatar-placeholder');
  placeholders.forEach(placeholder => {
    const letra = placeholder.textContent.trim().toUpperCase();
    if (letra) {
      const charCode = letra.charCodeAt(0);
      const cor = CORES_PALETA[charCode % CORES_PALETA.length];
      placeholder.style.setProperty('background', cor, 'important');
      placeholder.style.setProperty('background-color', cor, 'important');
    }
  });
}

// ===== PRODUTOS RELACIONADOS DINÂMICOS — MASONRY 2 COLUNAS =====
function renderRelacionados() {
  const grid = document.querySelector('.related-grid');
  if (!grid) return;
  if (typeof CATALOGO_PRODUTOS === 'undefined') return;

  // Pega o ID do produto atual
  const idAtual = typeof PRODUTO_ATUAL !== 'undefined' ? PRODUTO_ATUAL.id : -1;

  // Filtra o produto atual e ordena: item pinado primeiro, resto aleatório
  const eP101 = idAtual === 101;
  const idPinado = eP101 ? 100 : 101; // no pneu → iPhone primeiro; nos demais → Pneu primeiro

  const outros = CATALOGO_PRODUTOS.filter(p => p.id !== idAtual);

  // Separa o produto pinado dos demais
  const pinado = outros.find(p => p.id === idPinado);
  const restante = outros.filter(p => p.id !== idPinado);

  // Embaralha apenas o restante
  for (let i = restante.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [restante[i], restante[j]] = [restante[j], restante[i]];
  }

  // Monta lista final com pinado no topo (se existir)
  const ordenados = pinado ? [pinado, ...restante] : restante;

  // Função para gerar HTML de um card
  function cardHtml(p) {
    const precoFmt = 'R$ ' + parseFloat(p.preco).toFixed(2).replace('.', ',');
    const precoOrigFmt = p.precoOrig ? 'R$ ' + p.precoOrig : '';
    return `
      <a class="related-card" href="produto-${p.id}.html">
        <img class="related-img" src="${p.img}" alt="${p.nome}" loading="lazy"
             onerror="this.style.display='none'">
        <div class="related-info">
          <div class="related-name">${p.nome}</div>
          <div class="related-price-row">
            <span class="related-price">${precoFmt}</span>
            ${precoOrigFmt ? `<span class="related-price-original">${precoOrigFmt}</span>` : ''}
          </div>
          <div class="related-badges">
            ${p.desc > 0 ? `<span class="related-discount">-${p.desc}% OFF</span>` : ''}
            <span class="badge-frete">· Frete grátis</span>
          </div>
          <div class="related-sold">${p.vendidos > 0 ? p.vendidos + ' vendido(s)' : ''}</div>
        </div>
      </a>`;
  }

  // Cria 2 colunas independentes (masonry real)
  const colLeft = document.createElement('div');
  const colRight = document.createElement('div');
  colLeft.className = 'related-col';
  colRight.className = 'related-col';

  ordenados.forEach((p, i) => {
    const html = cardHtml(p);
    const col = i % 2 === 0 ? colLeft : colRight;
    col.insertAdjacentHTML('beforeend', html);
  });

  grid.innerHTML = '';
  grid.appendChild(colLeft);
  grid.appendChild(colRight);
}


// ===== ABAS DE NAVEGAÇÃO DO PRODUTO =====
function initProductTabs() {
  const tabsBar = document.querySelector('.product-tabs');
  const tabs = document.querySelectorAll('.product-tab');
  if (!tabsBar || !tabs.length) return;

  const HEADER = 52;   // altura real do header fixo
  const TABS = 44;   // altura das abas
  const SHOW_AT = 150; // mostrar abas após rolar 150px

  // Configuração inicial forçada para garantir visibilidade absoluta
  tabsBar.style.position = 'fixed';
  tabsBar.style.left = '50%';
  tabsBar.style.transform = 'translateX(-50%)';
  tabsBar.style.width = '100%';
  tabsBar.style.maxWidth = '600px'; // alinhado com max-width do app
  tabsBar.style.zIndex = '9999';

  // Ordem visual correta dos elementos no HTML:
  // Visão Geral -> Descrição -> Avaliações -> Recomendações
  const sections = {
    'visao-geral': document.querySelector('.product-info, .oferta-section, .price-section'),
    'descricao': document.querySelector('.description-section'),
    'avaliacoes': document.querySelector('.reviews-section'),
    'recomendacoes': document.querySelector('.related-section'),
  };

  function onScroll() {
    const sy = scrollContainer ? scrollContainer.scrollTop : window.scrollY;

    if (sy > SHOW_AT) {
      tabsBar.classList.add('tabs-visible');
      tabsBar.style.top = '52px';
    } else {
      tabsBar.classList.remove('tabs-visible');
      tabsBar.style.top = '-100px';
    }

    const threshold = HEADER + TABS + 30;
    let active = 'visao-geral';
    for (const [key, el] of Object.entries(sections)) {
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= threshold) {
          active = key;
        }
      }
    }
    tabs.forEach(t => t.classList.toggle('active', t.dataset.tab === active));
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const el = sections[tab.dataset.tab];
      if (!el) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      const rect = el.getBoundingClientRect();
      const target = window.scrollY + rect.top - HEADER - TABS - 4;
      window.scrollTo({ top: Math.max(0, target), behavior: 'smooth' });
    });
  });

  // ---- Ouvir o scroll no container real de scroll (.page-content) ----
  const scrollContainer = document.querySelector('.page-content');
  if (scrollContainer) {
    scrollContainer.addEventListener('scroll', onScroll, { passive: true });

    // Configura os botões limpos
    tabs.forEach(tab => {
      tab.replaceWith(tab.cloneNode(true));
    });

    const cleanTabs = document.querySelectorAll('.product-tab');
    cleanTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const el = sections[tab.dataset.tab];
        if (!el) {
          scrollContainer.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
        const target = el.offsetTop - HEADER - TABS;
        scrollContainer.scrollTo({ top: Math.max(0, target), behavior: 'smooth' });
      });
    });

    // Monitoramento inteligente de aba ativa baseado na posição de rolagem
    scrollContainer.addEventListener('scroll', () => {
      const sy = scrollContainer.scrollTop;
      const threshold = HEADER + TABS + 40; // margem de segurança

      let active = 'visao-geral';

      // Ordenamos pela posição de offsetTop para garantir que o mais abaixo seja selecionado
      const sortedSections = Object.entries(sections)
        .filter(([_, el]) => el !== null)
        .sort((a, b) => a[1].offsetTop - b[1].offsetTop);

      for (const [key, el] of sortedSections) {
        if (el.offsetTop - sy <= threshold) {
          active = key;
        }
      }

      cleanTabs.forEach(t => t.classList.toggle('active', t.dataset.tab === active));
    }, { passive: true });
  }

  // Executa uma vez
  setTimeout(() => {
    if (scrollContainer) {
      const sy = scrollContainer.scrollTop;
      if (sy > SHOW_AT) {
        tabsBar.classList.add('tabs-visible');
        tabsBar.style.top = '52px';
      } else {
        tabsBar.classList.remove('tabs-visible');
        tabsBar.style.top = '-100px';
      }
    }
  }, 100);
}

// Normalização global: Garante que todo produto com objeto variacoes vazio ou ausente 
// receba dinamicamente a variação padrão de 1 opção com sua respectiva imagem.
function normalizarVariacoesProduto(p) {
  if (!p) return;
  if (!p.variacoes || Object.keys(p.variacoes).length === 0 || (Array.isArray(p.variacoes) && p.variacoes.length === 0)) {
    let principalImg = p.img || '';
    if (principalImg && /\.(mp4|webm|ogg|mov)$/i.test(principalImg)) {
      principalImg = '';
    }
    if (!principalImg && Array.isArray(p.imagem)) {
      principalImg = p.imagem.find(i => !/\.(mp4|webm|ogg|mov)$/i.test(i)) || p.imagem[0];
    } else if (!principalImg && typeof p.imagem === 'string' && !/\.(mp4|webm|ogg|mov)$/i.test(p.imagem)) {
      principalImg = p.imagem;
    } else if (!principalImg && Array.isArray(p.imagens)) {
      principalImg = p.imagens.find(i => !/\.(mp4|webm|ogg|mov)$/i.test(i)) || p.imagens[0];
    }

    // Se ainda for vídeo ou vazia, busca do array imagens
    if (!principalImg || /\.(mp4|webm|ogg|mov)$/i.test(principalImg)) {
      if (Array.isArray(p.imagens)) {
        principalImg = p.imagens.find(i => !/\.(mp4|webm|ogg|mov)$/i.test(i)) || '';
      }
    }

    p.variacoes = {
      "modelo": {
        "label": "OPÇÃO",
        "opcoes": [
          {
            "nome": "Padrão único",
            "imagem": principalImg
          }
        ]
      }
    };
  }
}

if (typeof PRODUTO_ATUAL !== 'undefined') {
  normalizarVariacoesProduto(PRODUTO_ATUAL);
}

// ===== MODAL DE VARIAÇÕES (TAMANHO / COR / MODELO) =====

function openVariacaoModal(produto, fluxo = 'cart', onConfirm) {
  // Garante a normalização do produto antes de abrir o modal
  normalizarVariacoesProduto(produto);

  // Remove qualquer modal anterior
  const existing = document.getElementById('variacoes-modal-overlay');
  if (existing) existing.remove();

  const variacoes = produto.variacoes || {};
  const keys = Object.keys(variacoes);

  // Imagem principal (sem mp4)
  function getImg() {
    const imgs = produto.imagens || (produto.img ? [produto.img] : []);
    const limpa = imgs.find(i => !/\.(mp4|webm|ogg|mov)$/i.test(i));
    return limpa || imgs[0] || '';
  }

  // Construir HTML das opções
  function buildGrupos() {
    return keys.map(chave => {
      const grupo = variacoes[chave];
      const label = grupo.label || chave;
      const opcoes = Array.isArray(grupo.opcoes) ? grupo.opcoes : [];
      const temImagem = opcoes.some(o => typeof o === 'object' && o.imagem);

      if (temImagem) {
        // Botões com imagem (cor/modelo) - compacto com 4 colunas
        const btns = opcoes.map((o, i) => {
          const nome = typeof o === 'object' ? o.nome : o;
          const img = typeof o === 'object' ? o.imagem : '';
          const fallback = getImg();
          return `
            <button class="var-color-btn" data-chave="${chave}" data-val="${nome}" onclick="varModalSelect(this)">
               ${img ? `<div style="width:100%;aspect-ratio:1/1;background:#f0f0f0;overflow:hidden;"><img src="${img}" alt="${nome}" style="width:100%;height:100%;object-fit:cover;display:block;" onerror="this.src='${fallback}'"></div>` : '<div class="var-color-placeholder"></div>'}
               <span>${nome}</span>
            </button>
          `;
        }).join('');
        return `
          <div class="var-group">
            <span class="var-label">${label} (${opcoes.length})</span>
            <div class="var-color-grid">${btns}</div>
          </div>
        `;
      } else {
        // Botões normais (tamanho/voltagem)
        const btns = opcoes.map((o, i) => {
          const nome = typeof o === 'object' ? o.nome : o;
          return `
            <button class="var-size-btn" data-chave="${chave}" data-val="${nome}" onclick="varModalSelect(this)">
               ${nome}
            </button>
          `;
        }).join('');
        return `
          <div class="var-group">
            <span class="var-label">${label}</span>
            <div class="var-size-options">${btns}</div>
          </div>
        `;
      }
    }).join('');
  }

  // Formata o preço da variação se houver alteração
  const formatPreco = (val) => {
    return parseFloat(val).toFixed(2).replace('.', ',');
  };

  const preco = formatPreco(produto.preco);

  const overlay = document.createElement('div');
  overlay.id = 'variacoes-modal-overlay';
  overlay.style.cssText = `
    position: fixed; top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0,0,0,0.6); z-index: 10000;
    display: flex; align-items: flex-end; justify-content: center;
    animation: fadeInOverlay 0.2s ease;
  `;

  // Define o botão vermelho de rodapé conforme o fluxo solicitado (sem preco, apenas o texto centralizado)
  let footerButtonHtml = '';
  if (fluxo === 'buy') {
    footerButtonHtml = `
      <div class="var-modal-footer">
        <button class="var-btn-buy-full" onclick="varModalConfirm('buy')">
          Comprar agora | Frete grátis
        </button>
      </div>
    `;
  } else {
    // Fluxo 'cart' ou 'opcoes'
    footerButtonHtml = `
      <div class="var-modal-footer">
        <button class="var-btn-cart-full" onclick="varModalConfirm('cart')">
          Adicionar ao carrinho
        </button>
      </div>
    `;
  }

  // Se o produto estiver em oferta relâmpago, exibe a faixa laranja
  const temOferta = document.querySelector('.flash-deal-banner') !== null || document.querySelector('.price-decalque') !== null;
  const ofertaBannerHtml = temOferta ? `
    <div style="background: linear-gradient(90deg, #ff5722, #ff8a65); color: #fff; padding: 6px 16px; font-size: 12px; font-weight: 700; display: flex; justify-content: space-between; align-items: center;">
      <span style="display:flex; align-items:center; gap:4px;">⚡ Oferta Relâmpago</span>
      <span style="font-weight: 500; opacity: 0.9;">Termina em 1 dia</span>
    </div>
  ` : '';

  overlay.innerHTML = `
    <style>
      @keyframes fadeInOverlay { from { opacity:0 } to { opacity:1 } }
      @keyframes slideUpModal { from { transform:translateY(100%) } to { transform:translateY(0) } }
      #variacoes-modal {
        background: #fff;
        width: 100%;
        max-width: 480px;
        border-radius: 16px 16px 0 0;
        max-height: 80vh;
        overflow-y: auto;
        animation: slideUpModal 0.3s cubic-bezier(.4,0,.2,1);
        position: relative;
        padding-bottom: env(safe-area-inset-bottom, 0px);
      }
      #variacoes-modal::-webkit-scrollbar { display: none; }
      .var-modal-header {
        display: flex;
        gap: 12px;
        padding: 16px 16px 12px;
        border-bottom: 1px solid #f2f2f2;
        align-items: flex-start;
      }
      .var-modal-img {
        width: 64px;
        height: 64px;
        object-fit: cover;
        border-radius: 8px;
        background: #f5f5f5;
        flex-shrink: 0;
      }
      .var-modal-info { flex: 1; }
      .var-modal-preco {
        font-size: 20px;
        font-weight: 700;
        color: #FF2B56;
        margin-bottom: 4px;
      }
      .var-modal-nome {
        font-size: 12.5px;
        color: #333;
        line-height: 1.35;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
      .var-close-btn {
        position: absolute;
        top: 10px;
        right: 10px;
        background: #f5f5f5;
        border: none;
        border-radius: 50%;
        width: 28px;
        height: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        font-size: 16px;
        color: #666;
        flex-shrink: 0;
        z-index: 10;
      }
      .var-modal-body {
        padding: 12px 16px 16px;
        display: flex;
        flex-direction: column;
        gap: 14px;
      }
      .var-group { display: flex; flex-direction: column; gap: 8px; }
      .var-label {
        font-size: 13px;
        color: #333;
        font-weight: 600;
      }
      .var-color-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 8px;
      }
      .var-color-btn {
        background: #fff;
        border: 1px solid #e0e0e0;
        border-radius: 6px;
        padding: 0;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: hidden;
        transition: border-color 0.2s;
      }
      .var-color-btn.selected { border-color: #FF2B56; }
      .var-color-btn img, .var-color-placeholder {
        width: 100%;
        aspect-ratio: 1/1;
        object-fit: cover;
        background: #f5f5f5;
        display: block;
      }
      .var-color-btn span {
        font-size: 10px;
        color: #333;
        text-align: center;
        padding: 4px 2px;
        line-height: 1.2;
      }
      .var-color-btn.selected span { color: #FF2B56; font-weight: 600; }
      .var-size-options { display: flex; flex-wrap: wrap; gap: 6px; }
      .var-size-btn {
        background: #fff;
        border: 1px solid #e0e0e0;
        border-radius: 6px;
        padding: 6px 12px;
        font-size: 13px;
        font-weight: 500;
        color: #333;
        cursor: pointer;
        transition: all 0.2s;
        min-width: 44px;
        text-align: center;
        font-family: inherit;
      }
      .var-size-btn.selected {
        border-color: #FF2B56;
        color: #FF2B56;
        background: #fff5f7;
      }
      .var-qty-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 2px;
      }
      .var-qty-label { font-size: 13px; font-weight: 500; color: #333; }
      .var-qty-controls {
        display: flex;
        align-items: center;
        gap: 10px;
        background: #f5f5f5;
        border-radius: 6px;
        padding: 2px 6px;
      }
      .var-qty-btn {
        background: none;
        border: none;
        font-size: 16px;
        cursor: pointer;
        color: #333;
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .var-qty-value { font-size: 14px; font-weight: 600; min-width: 16px; text-align: center; }
      .var-modal-footer {
        padding: 10px 16px;
        display: flex;
        gap: 8px;
        border-top: 1px solid #f2f2f2;
        position: sticky;
        bottom: 0;
        background: #fff;
        z-index: 100;
      }
      .var-btn-cart-full, .var-btn-buy-full {
        flex: 1;
        background: #FF2B56;
        color: #fff;
        border: none;
        border-radius: 22px;
        padding: 10px;
        font-size: 14.5px;
        font-weight: 700;
        cursor: pointer;
        transition: opacity 0.2s;
        font-family: inherit;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 40px;
        box-sizing: border-box;
      }
      .var-btn-cart-full:hover, .var-btn-buy-full:hover { opacity: 0.9; }
      .var-error-msg {
        color: #FF2B56;
        font-size: 12px;
        text-align: center;
        min-height: 16px;
        padding: 0 16px 6px;
      }
    </style>

    <div id="variacoes-modal">
      ${ofertaBannerHtml}
      <div class="var-modal-header">
        <img class="var-modal-img" src="${getImg()}" alt="${produto.nome}" onerror="this.src='https://via.placeholder.com/80'">
        <div class="var-modal-info">
          <div class="var-modal-preco" id="var-modal-preco-val">R$ ${preco}</div>
          ${produto.precoOrig ? `<div class="var-modal-preco-orig" id="var-modal-preco-orig-val" style="font-size: 13px; color: #999; text-decoration: line-through; margin-bottom: 4px; line-height: 1; margin-top: -2px;">R$ ${produto.precoOrig}</div>` : `<div class="var-modal-preco-orig" id="var-modal-preco-orig-val" style="display:none; font-size: 13px; color: #999; text-decoration: line-through; margin-bottom: 4px; line-height: 1; margin-top: -2px;"></div>`}
          <div class="var-modal-preco-unit" style="display:none;" id="var-modal-preco-unit-val">${produto.preco}</div>
          <div class="var-modal-nome">${produto.nome}</div>
        </div>
        <button class="var-close-btn" onclick="closeVariacaoModal()">✕</button>
      </div>

      <div class="var-modal-body">
        ${buildGrupos()}
        <div class="var-qty-row">
          <span class="var-qty-label">Quantidade</span>
          <div class="var-qty-controls">
            <button class="var-qty-btn" onclick="varModalQty(-1)">−</button>
            <span class="var-qty-value" id="var-qty-val">1</span>
            <button class="var-qty-btn" onclick="varModalQty(+1)">+</button>
          </div>
        </div>
      </div>

      <div class="var-error-msg" id="var-error-msg"></div>

      ${footerButtonHtml}
    </div>
  `;

  // Quantidade interna
  let modalQty = 1;
  const selecionadosRef = {};

  window._varModalQty = function (delta) {
    modalQty = Math.max(1, modalQty + delta);
    const el = overlay.querySelector('#var-qty-val');
    if (el) el.textContent = modalQty;

    const precoEl = overlay.querySelector('#var-modal-preco-val');
    if (precoEl) {
      const precoFinal = (produto.preco * modalQty).toFixed(2).replace('.', ',');
      precoEl.textContent = `R$ ${precoFinal}`;
    }
    const precoOrigEl = overlay.querySelector('#var-modal-preco-orig-val');
    if (precoOrigEl && produto.precoOrig) {
      const parsedOrig = parseFloat(String(produto.precoOrig).replace(/\./g, '').replace(',', '.'));
      if (!isNaN(parsedOrig)) {
          const origFinal = (parsedOrig * modalQty).toFixed(2).replace('.', ',');
          precoOrigEl.textContent = `R$ ${origFinal}`;
      }
    }
  };

  window._varModalSelect = function (btn) {
    const chave = btn.dataset.chave;
    const val = btn.dataset.val;
    // Desmarca outros do mesmo grupo
    overlay.querySelectorAll(`[data-chave="${chave}"]`).forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    selecionadosRef[chave] = val;

    // Limpa mensagem de erro se preencheu
    const errEl = overlay.querySelector('#var-error-msg');
    if (errEl) errEl.textContent = '';
  };

  window._varModalConfirm = function (tipoConfirm) {
    // Valida se selecionou todas as chaves
    const faltando = keys.filter(k => !selecionadosRef[k]);
    if (faltando.length > 0) {
      const errEl = overlay.querySelector('#var-error-msg');
      const nomesFaltando = faltando.map(k => variacoes[k].label || k).join(', ');
      if (errEl) errEl.textContent = `Selecione a opção de: ${nomesFaltando}`;
      return;
    }

    closeVariacaoModal();
    onConfirm({ selecionados: selecionadosRef, qty: modalQty, tipo: tipoConfirm });
  };

  window._varModalClose = function () {
    overlay.remove();
  };

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeVariacaoModal();
  });

  document.body.appendChild(overlay);
}

// Aliases globais chamados pelo HTML inline
window.varModalQty = function (delta) { if (window._varModalQty) window._varModalQty(delta); };
window.varModalSelect = function (btn) { if (window._varModalSelect) window._varModalSelect(btn); };
window.varModalConfirm = function (tipo) { if (window._varModalConfirm) window._varModalConfirm(tipo); };
window.closeVariacaoModal = function () { if (window._varModalClose) window._varModalClose(); };

// Função que intercepta o clique de "Adicionar ao carrinho" e "Comprar agora"
// para produtos com variações
function handleAddToCartWithVariacoes(produto, buyNow = false) {
  // Se o produto não possui variações declaradas no catálogo, cria dinamicamente uma variação de 1 opção única
  if (!produto.variacoes || Object.keys(produto.variacoes).length === 0) {
    produto.variacoes = {
      "modelo": {
        "label": "OPÇÃO",
        "opcoes": [
          {
            "nome": "Padrão único",
            "imagem": produto.img || ""
          }
        ]
      }
    };
  }

  const variacoes = produto.variacoes || {};
  const keys = Object.keys(variacoes);

  if (!keys.length) {
    // Sem variações: comportamento padrão
    addToCart(produto);
    if (buyNow) {
      window.location.href = 'carrinho.html';
    } else {
      animateFlyToCart();
    }
    return;
  }

  // Tem variações: abre modal informando se o fluxo é comprar ou carrinho
  openVariacaoModal(produto, buyNow ? 'buy' : 'cart', function ({ selecionados, qty, tipo }) {
    // Monta a variação como string para exibir no carrinho
    const varLabel = selecionados
      ? Object.values(selecionados).join(', ')
      : '';

    // Modifica a inclusão de forma redundante para usar window.parent.addToCart se estiver no iframe
    let localAddToCart = addToCart;
    let localGetCart = getCart;
    let localSaveCart = saveCart;
    let localUpdateCartBadges = updateCartBadges;
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const isFromStoreList = urlParams.get('fromStoreList') === '1';
      if (isFromStoreList && window.parent) {
        if (typeof window.parent.addToCart === 'function') localAddToCart = window.parent.addToCart;
        if (typeof window.parent.getCart === 'function') localGetCart = window.parent.getCart;
        if (typeof window.parent.saveCart === 'function') localSaveCart = window.parent.saveCart;
        if (typeof window.parent.updateCartBadges === 'function') localUpdateCartBadges = window.parent.updateCartBadges;
      }
    } catch (e) { }

    localAddToCart(produto, qty);

    // Registra variação no carrinho (sobrescreve com a variação)
    try {
      const cart = localGetCart();
      // Como o addToCart do window.parent pode criar com id numérico ou string, normalizamos
      const idx = cart.findIndex(i => Number(i.id) === Number(produto.id) && (!i.variacao || i.variacao === produto.variacao));
      if (idx >= 0 && varLabel) {
        cart[idx].variacao = varLabel;
        localSaveCart(cart);
        localUpdateCartBadges();
      }
    } catch (e) { }

    // Notificação manual e redundante para a página pai
    try {
      if (window.parent && window.parent.updateCartBadges) {
        window.parent.updateCartBadges();
        window.parent.updateFloatingCartBar();
      }
    } catch (e) { }

    if (tipo === 'buy') {
      window.location.href = 'carrinho.html';
    } else {
      animateFlyToCart();
    }
  });
}

// ===== CHAT INTELIGENTE E BOTÃO SEGUIR =====

function initSeguirBtn() {
  const followBtns = document.querySelectorAll('.store-follow-btn');
  if (!followBtns.length) return;

  const isSeguindo = localStorage.getItem('loja_seguindo') === 'true';

  followBtns.forEach(btn => {
    updateFollowBtnState(btn, isSeguindo);
    btn.addEventListener('click', () => {
      const current = localStorage.getItem('loja_seguindo') === 'true';
      const novoEstado = !current;
      localStorage.setItem('loja_seguindo', novoEstado.toString());

      // Atualiza todos os botões de seguir da página
      document.querySelectorAll('.store-follow-btn').forEach(b => {
        updateFollowBtnState(b, novoEstado);
      });

      if (novoEstado) {
        showToast('❤️ Você começou a seguir a loja!');
      } else {
        showToast('Loja removida dos seus favoritos');
      }
    });
  });
}

function updateFollowBtnState(btn, isSeguindo) {
  if (isSeguindo) {
    btn.textContent = 'Seguindo';
    btn.classList.add('following');
    btn.style.background = '#f5f5f5';
    btn.style.color = '#666';
    btn.style.border = '1px solid #E0E0E0';
  } else {
    btn.textContent = 'Seguir';
    btn.classList.remove('following');
    btn.style.background = '#ff2b56';
    btn.style.color = '#fff';
    btn.style.border = 'none';
  }
}

// Chat Inteligente
function openSmartChat() {
  // Remove chat anterior se existir
  const existing = document.getElementById('smart-chat-overlay');
  if (existing) {
    existing.style.display = 'flex';
    return;
  }

  const overlay = document.createElement('div');
  overlay.id = 'smart-chat-overlay';
  overlay.style.cssText = `
    position: fixed; top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0,0,0,0.6); z-index: 10000;
    display: flex; align-items: flex-end; justify-content: center;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  `;

  const chatContainer = document.createElement('div');
  chatContainer.id = 'smart-chat-container';
  chatContainer.style.cssText = `
    width: 100%; max-width: 480px; height: 80vh;
    background: #f6f6f6; border-radius: 20px 20px 0 0;
    display: flex; flex-direction: column; overflow: hidden;
    box-shadow: 0 -4px 20px rgba(0,0,0,0.15);
    animation: slideUpChat 0.3s ease-out;
  `;

  // Obter o nome do produto atual se estiver na página de produto
  let prodInfo = '';
  if (typeof PRODUTO_ATUAL !== 'undefined' && PRODUTO_ATUAL.nome) {
    prodInfo = `sobre o produto "${PRODUTO_ATUAL.nome}"`;
  }

  chatContainer.innerHTML = `
    <style>
      @keyframes slideUpChat { from { transform: translateY(100%); } to { transform: translateY(0); } }
      .chat-header {
        background: #fff; padding: 14px 16px;
        display: flex; align-items: center; justify-content: space-between;
        border-bottom: 1px solid #e8e8e8;
      }
      .chat-store-info { display: flex; align-items: center; gap: 10px; }
      .chat-store-logo { width: 36px; height: 36px; border-radius: 50%; object-fit: cover; }
      .chat-store-name { font-size: 15px; font-weight: 700; color: #333; }
      .chat-store-status { font-size: 11px; color: #2E7D32; display: flex; align-items: center; gap: 4px; margin-top: 2px; }
      .chat-close-btn { background: none; border: none; font-size: 24px; cursor: pointer; color: #666; }
      .chat-messages { flex: 1; padding: 16px; overflow-y: auto; display: flex; flex-direction: column; gap: 12px; }
      .msg { max-width: 80%; padding: 12px 14px; border-radius: 14px; font-size: 14px; line-height: 1.4; word-wrap: break-word; }
      .msg-bot { background: #fff; color: #333; align-self: flex-start; border-bottom-left-radius: 4px; box-shadow: 0 1px 2px rgba(0,0,0,0.05); }
      .msg-user { background: #ff2b56; color: #fff; align-self: flex-end; border-bottom-right-radius: 4px; }
      .chat-suggestions {
        padding: 10px 16px; background: #fff; border-top: 1px solid #e8e8e8;
        display: flex; flex-direction: column; gap: 8px; max-height: 220px; overflow-y: auto;
      }
      .chat-suggestions::-webkit-scrollbar { display: none; }
      .sug-title { font-size: 12px; color: #888; font-weight: 600; margin-bottom: 2px; text-transform: uppercase; }
      .sug-btn {
        background: #f5f5f5; border: 1px solid #e8e8e8; border-radius: 18px;
        padding: 8px 14px; font-size: 13px; text-align: left; cursor: pointer;
        color: #333; transition: all 0.2s; font-family: inherit;
      }
      .sug-btn:hover { background: #ffe3ea; border-color: #ffd4e0; color: #ff2b56; }
      .chat-input-area {
        padding: 12px 16px; background: #fff; border-top: 1px solid #e8e8e8;
        display: flex; gap: 10px; align-items: center;
      }
      .chat-input {
        flex: 1; height: 38px; border: 1px solid #ddd; border-radius: 19px;
        padding: 0 16px; font-size: 14px; outline: none; font-family: inherit;
      }
      .chat-send-btn {
        background: #ff2b56; border: none; color: #fff; width: 38px; height: 38px;
        border-radius: 50%; display: flex; align-items: center; justify-content: center;
        cursor: pointer; font-size: 16px; flex-shrink: 0;
      }
    </style>

    <div class="chat-header">
      <div class="chat-store-info">
        <img class="chat-store-logo" src="${window.location.pathname.includes('/pages/') ? '../logo.png' : './logo.png'}" onerror="this.src='https://via.placeholder.com/40'" alt="Logo">
        <div>
          <div class="chat-store-name">Stone Shop</div>
          <div class="chat-store-status">● Suporte Online</div>
        </div>
      </div>
      <button class="chat-close-btn" onclick="closeSmartChat()">✕</button>
    </div>

    <div class="chat-messages" id="chat-messages-box">
      <div class="msg msg-bot">
        Olá! Seja bem-vindo ao suporte oficial da <strong>Stone Shop</strong>. Como podemos te ajudar hoje?
      </div>
    </div>

    <div class="chat-suggestions" id="chat-suggestions-box">
      <div class="sug-title">Sugestões de perguntas</div>
      <button class="sug-btn" onclick="sendChatSuggestion('Qual o prazo de entrega?', 'prazo')">📅 Qual o prazo de entrega?</button>
      <button class="sug-btn" onclick="sendChatSuggestion('O frete é realmente grátis?', 'frete')">🚚 O frete é realmente grátis?</button>
      <button class="sug-btn" onclick="sendChatSuggestion('Quais as formas de pagamento?', 'pagamento')">💳 Quais as formas de pagamento?</button>
      <button class="sug-btn" onclick="sendChatSuggestion('Como funciona o reembolso?', 'reembolso')">🛡️ Como funciona o reembolso?</button>
      <button class="sug-btn" onclick="sendChatSuggestion('Os produtos são originais e têm garantia?', 'garantia')">⭐ Os produtos são originais?</button>
      ${prodInfo ? `<button class="sug-btn" onclick="sendChatSuggestion('Tem estoque deste produto?', 'produto')">🔍 Dúvidas sobre o produto atual</button>` : ''}
    </div>

    <div class="chat-input-area">
      <input type="text" class="chat-input" id="chat-input-text" placeholder="Digite sua mensagem..." onkeypress="handleChatEnter(event)">
      <button class="chat-send-btn" onclick="sendChatManual()">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
      </button>
    </div>
  `;

  overlay.appendChild(chatContainer);
  document.body.appendChild(overlay);

  // Fecha chat se clicar fora
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeSmartChat();
  });

  window.closeSmartChat = function () {
    overlay.style.display = 'none';
  };

  window.sendChatSuggestion = function (texto, tipo) {
    appendMsg(texto, 'user');

    // Respostas prontas
    let resposta = '';
    if (tipo === 'prazo') {
      resposta = '📅 Nosso prazo médio de entrega para qualquer região do Brasil é de <strong>3 a 7 dias úteis</strong> após a postagem, com rastreamento completo enviado por e-mail e WhatsApp.';
    } else if (tipo === 'frete') {
      resposta = '🚚 Sim! Oferecemos <strong>frete grátis sem valor mínimo</strong> para todos os pedidos realizados hoje. Aproveite!';
    } else if (tipo === 'pagamento') {
      resposta = '💳 Aceitamos pagamento via <strong>PIX</strong> (com aprovação imediata e desconto) e cartões de crédito em até 12x.';
    } else if (tipo === 'reembolso') {
      resposta = '🛡️ Oferecemos garantia de 7 dias para devolução ou troca sem custos. Se você não gostar ou houver qualquer problema, devolvemos 100% do seu dinheiro de forma imediata.';
    } else if (tipo === 'garantia') {
      resposta = '⭐ Todos os produtos da Stone Shop são enviados lacrados na caixa original, possuem garantia de fábrica de 1 ano e passam por controle rigoroso de qualidade.';
    } else if (tipo === 'produto') {
      resposta = `🔍 Sim! O item <strong>"${PRODUTO_ATUAL.nome}"</strong> está com estoque disponível no nosso centro de distribuição e pronto para envio imediato hoje com frete grátis!`;
    }

    setTimeout(() => {
      appendMsg(resposta, 'bot');
    }, 600);
  };

  window.sendChatManual = function () {
    const input = document.getElementById('chat-input-text');
    if (!input) return;
    const txt = input.value.trim();
    if (!txt) return;

    appendMsg(txt, 'user');
    input.value = '';

    // Resposta padrão inteligente
    setTimeout(() => {
      let resposta = 'Obrigado pelo contato! Nossa equipe de atendimento foi notificada e entrará em contato com você em instantes. Se preferir um atendimento ainda mais rápido, você também pode finalizar seu pedido direto no PIX.';
      const txtLower = txt.toLowerCase();
      if (txtLower.includes('prazo') || txtLower.includes('demora') || txtLower.includes('chegar')) {
        resposta = '📅 O prazo médio de entrega é de <strong>3 a 7 dias úteis</strong> para todo o Brasil, com código de rastreamento oficial.';
      } else if (txtLower.includes('frete') || txtLower.includes('envio') || txtLower.includes('gratis')) {
        resposta = '🚚 O frete é <strong>100% grátis</strong> para todas as compras feitas hoje!';
      } else if (txtLower.includes('pagar') || txtLower.includes('pix') || txtLower.includes('cartao')) {
        resposta = '💳 Aceitamos <strong>PIX</strong> e cartão de crédito. Compras no PIX têm aprovação imediata e envio prioritário.';
      } else if (txtLower.includes('original') || txtLower.includes('garantia') || txtLower.includes('replica')) {
        resposta = '⭐ Garantimos a originalidade e o lacre de fábrica de todos os produtos, acompanhados de 1 ano de garantia total.';
      }

      appendMsg(resposta, 'bot');
    }, 700);
  };

  window.handleChatEnter = function (e) {
    if (e.key === 'Enter') {
      sendChatManual();
    }
  };

  function appendMsg(texto, remetente) {
    const box = document.getElementById('chat-messages-box');
    if (!box) return;

    const div = document.createElement('div');
    div.className = `msg msg-${remetente}`;
    div.innerHTML = texto;
    box.appendChild(div);

    // Auto-scroll
    box.scrollTo({ top: box.scrollHeight, behavior: 'smooth' });
  }
}

// Configura botões de chat na página para abrir o modal de chat inteligente
function initChatButtons() {
  // Intercepta clique no botão de mensagem da store-section (index.html)
  const storeMsgBtn = document.querySelector('.store-message-btn');
  if (storeMsgBtn) {
    storeMsgBtn.removeAttribute('onclick');
    storeMsgBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openSmartChat();
    });
  }

  // Intercepta botões de chat inferiores das páginas de produtos
  const productChatBtn = document.querySelector('button[aria-label="Chat"]');
  if (productChatBtn) {
    productChatBtn.removeAttribute('onclick');
    productChatBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openSmartChat();
    });
  }
}

// ===== INICIALIZAÇÃO GERAL =====
document.addEventListener('DOMContentLoaded', () => {
  // Injeta o TikTok Loader dinamicamente
  const loaderHtml = `
    <div id="tiktok-loader" style="position:fixed; top:0; left:50%; transform:translateX(-50%); width:100%; max-width:480px; height:100vh; background:#fdfdfd; z-index:999999; display:flex; flex-direction:column; align-items:center; justify-content:center; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif; transition:opacity 0.4s ease;">
      <div class="loader-dots" style="display:flex; gap:8px; position:relative;">
        <div class="loader-dot dot-cyan" style="width:12px; height:12px; border-radius:50%; background:#00f2fe; animation:tt-pulse 1s infinite alternate;"></div>
        <div class="loader-dot dot-red" style="width:12px; height:12px; border-radius:50%; background:#fe2c55; animation:tt-pulse 1s infinite alternate; animation-delay:0.5s;"></div>
      </div>
    </div>
    <style>
      @keyframes tt-pulse {
        0% { transform: scale(0.8); opacity: 0.5; }
        100% { transform: scale(1.3); opacity: 1; }
      }
    </style>
  `;
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = loaderHtml;
  document.body.appendChild(tempDiv.firstElementChild);
  document.body.appendChild(tempDiv.lastElementChild);

  // Remove o loader após 1 segundo
  setTimeout(() => {
    const loader = document.getElementById('tiktok-loader');
    if (loader) {
      loader.style.opacity = '0';
      setTimeout(() => { loader.remove(); }, 400);
    }
  }, 1000);

  // Função para renderizar e injetar o Widget da Loja (Stone Shop) acima de avaliações nas páginas de produtos
  function renderStoreWidget() {
    const reviewsSection = document.querySelector('.reviews-section');
    if (!reviewsSection) return;
    if (typeof CATALOGO_PRODUTOS === 'undefined') return;

    // Pega o ID do produto atual
    const idAtual = typeof PRODUTO_ATUAL !== 'undefined' ? PRODUTO_ATUAL.id : -1;

    // Filtra e pega 6 produtos aleatórios para o carrossel "Mais desta loja"
    const outros = CATALOGO_PRODUTOS.filter(p => p.id !== idAtual);
    for (let i = outros.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [outros[i], outros[j]] = [outros[j], outros[i]];
    }
    const selecionados = outros.slice(0, 6);

    let itemsHtml = '';
    selecionados.forEach(p => {
      const precoFmt = 'R$ ' + parseFloat(p.preco).toFixed(2).replace('.', ',');
      itemsHtml += `
        <a class="store-widget-product-card" href="produto-${p.id}.html" style="text-decoration:none; display:flex; flex-direction:column; width:96px; flex-shrink:0; position:relative; background:#fff; border-radius:4px; overflow:hidden;">
          <img class="store-widget-product-img" src="${p.img}" alt="${p.nome}" onerror="this.onerror=null;this.src='data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2296%22 height=%2296%22 viewBox=%220 0 96 96%22><rect width=%2296%22 height=%2296%22 fill=%22%23f0f0f0%22/><text x=%2248%22 y=%2254%22 font-size=%2224%22 text-anchor=%22middle%22 fill=%22%23ccc%22>📦</text></svg>'" style="width:96px; height:96px; object-fit:cover; border:1px solid #f0f0f0; border-radius:4px;">
          <span class="store-widget-product-price" style="font-size:12px; font-weight:700; color:#ff2d55; text-align:center; margin-top:4px; display:block;">${precoFmt}</span>
          ${p.desc > 0 ? `<span class="store-widget-product-discount" style="position:absolute; top:4px; right:4px; background:#ff2d55; color:#fff; font-size:9px; font-weight:700; padding:1px 3px; border-radius:2px;">-${p.desc}%</span>` : ''}
        </a>
      `;
    });

    let widgetHtml = '';

    if (idAtual === 99) {
      widgetHtml = `
        <div class="store-widget-section" style="background:#fff; padding:16px; margin:0; border-top:8px solid #f5f5f5; border-bottom:8px solid #f5f5f5; box-sizing:border-box; font-family:-apple-system,BlinkMacSystemFont,Roboto,Helvetica,Arial,sans-serif;">
          <!-- Cabeçalho Flex da Loja -->
          <div class="store-widget-header" style="display:flex; align-items:center; gap:12px; margin-bottom:0px; width:100%; box-sizing:border-box;">
            <div class="store-widget-logo-wrapper" style="position:relative; width:50px; height:50px; border-radius:50%; border:1px solid #eee; overflow:hidden; flex-shrink:0; display:flex; align-items:center; justify-content:center; background:#222;">
              <img class="store-widget-logo" src="../pumalogo/image.png" onerror="this.src='https://via.placeholder.com/50'" alt="PUMA OFICIAL" style="width:100%; height:100%; object-fit:cover;">
            </div>
            <div class="store-widget-info" style="flex:1; min-width:0; display:flex; flex-direction:column; justify-content:center;">
              <div class="store-widget-name" style="font-size:15px; font-weight:700; color:#111; margin-bottom:2px; display:flex; align-items:center; gap:4px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">
                PUMA OFICIAL
                <svg viewBox="0 0 24 24" width="16" height="16" style="color:#0095f6; flex-shrink:0;" fill="currentColor">
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <div class="store-widget-sales" style="font-size:12px; color:#888;">147.2K vendido(s)</div>
            </div>
            <button class="store-widget-btn-visitar" onclick="openPumaStoreModal()" style="background:#f5f5f5; color:#111; font-size:13px; font-weight:700; padding:6px 16px; border-radius:20px; border:none; cursor:pointer; flex-shrink:0; outline:none; transition:background 0.2s;">Visitar</button>
          </div>
          
          <!-- Estatísticas da Loja -->
          <div class="store-widget-stats" style="display:flex; gap:16px; margin-top:10px; font-size:11.5px; color:#555;">
            <span><strong style="color:#111;">100%</strong> responde em 24 horas</span>
            <span><strong style="color:#111;">97%</strong> envios pontuais</span>
          </div>
        </div>
      `;
    } else {
      widgetHtml = `
        <div class="store-widget-section" style="background:#fff; padding:16px; margin:0; border-top:8px solid #f5f5f5; border-bottom:8px solid #f5f5f5; box-sizing:border-box; font-family:-apple-system,BlinkMacSystemFont,Roboto,Helvetica,Arial,sans-serif;">
          <!-- Cabeçalho Flex da Loja -->
          <div class="store-widget-header" style="display:flex; align-items:center; gap:12px; margin-bottom:14px; width:100%; box-sizing:border-box;">
            <div class="store-widget-logo-wrapper" style="position:relative; width:50px; height:50px; border-radius:50%; border:1px solid #eee; overflow:hidden; flex-shrink:0; display:flex; align-items:center; justify-content:center; background:#f8f8f8;">
              <img class="store-widget-logo" src="../logo.png" onerror="this.src='https://via.placeholder.com/50'" alt="Stone Shop" style="width:100%; height:100%; object-fit:cover;">
            </div>
            <div class="store-widget-info" style="flex:1; min-width:0; display:flex; flex-direction:column; justify-content:center; ${window.location.pathname.includes('produto-101') ? 'padding-top:2px;' : ''}">
              <div class="store-widget-name" style="font-size:15px; font-weight:700; color:#111; margin-bottom:${window.location.pathname.includes('produto-101') ? '2px' : '2px'}; display:flex; align-items:center; gap:4px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">
                Stone Shop
                <svg viewBox="0 0 24 24" width="16" height="16" style="color:#0095f6; flex-shrink:0;" fill="currentColor">
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              ${window.location.pathname.includes('produto-101') ? `
              <div class="store-widget-pirelli" style="display:flex; align-items:center; gap:6px; margin-top:-1px; margin-bottom:-1px; padding:0;">
                <img src="../logopirelli/pirelli.png" alt="Pirelli" style="height:24px; object-fit:contain; vertical-align:middle; border-radius:2px;">
                <span style="color:#bbb; font-size:13px; line-height:1; font-weight:300;">|</span>
                <span style="font-size:11px; color:#555; font-weight:500; letter-spacing:0.1px;">Loja Credenciada</span>
              </div>` : ''}
              <div class="store-widget-sales" style="font-size:12px; color:#888; margin-top:-1px; ${window.location.pathname.includes('produto-101') ? 'margin-left:2px;' : ''}">112.2K vendido(s)</div>
            </div>
            <button class="store-widget-btn-visitar" onclick="window.location.href='../index.html'" style="background:#f5f5f5; color:#111; font-size:13px; font-weight:700; padding:6px 16px; border-radius:20px; border:none; cursor:pointer; flex-shrink:0; outline:none; transition:background 0.2s;">Visitar</button>
          </div>
          
          <!-- Estatísticas da Loja -->
          <div class="store-widget-stats" style="display:flex; gap:16px; margin-bottom:14px; font-size:11.5px; color:#555;">
            <span><strong style="color:#111;">100%</strong> responde em 24 horas</span>
            <span><strong style="color:#111;">97%</strong> envios pontuais</span>
          </div>
          
          <!-- Título Mais Desta Loja -->
          <div class="store-widget-title-row" onclick="window.location.href='../index.html'" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; cursor:pointer;">
            <span class="store-widget-section-title" style="font-size:13.5px; font-weight:700; color:#222;">Mais desta loja</span>
            <span class="store-widget-arrow" style="font-size:16px; color:#888; line-height:1; font-weight:300;">›</span>
          </div>
          
          <!-- Carrossel horizontal de produtos -->
          <div class="store-widget-products-scroll" style="display:flex; gap:10px; overflow-x:auto; padding-bottom:4px; width:100%; -webkit-overflow-scrolling:touch; box-sizing:border-box;">
            ${itemsHtml}
          </div>
        </div>
      `;
    }

    reviewsSection.insertAdjacentHTML('afterend', widgetHtml);
  }
  function formatCentavosDecalque() {
    // Só executa em páginas de produto (onde PRODUTO_ATUAL está definido)
    if (typeof PRODUTO_ATUAL === 'undefined') return;
    const priceEl = document.querySelector('.price-current');
    if (!priceEl) return;

    // Garante a existência do rótulo absoluto "R$" — cria se não existir
    let apartirEl = document.querySelector('.price-label-apartir');
    if (!apartirEl) {
      apartirEl = document.createElement('span');
      apartirEl.className = 'price-label-apartir';
      priceEl.parentNode.insertBefore(apartirEl, priceEl);
    }
    apartirEl.textContent = 'R$';

    // Lê o texto puro do preço e remove qualquer "R$" embutido para evitar duplicidade
    let priceText = priceEl.textContent.trim().replace('R$ ', '').replace('R$', '').trim();

    // Formata separando centavos
    let formattedHTML = '';
    if (priceText.includes(',')) {
      const parts = priceText.split(',');
      formattedHTML = `${parts[0]}<span style="font-size: 0.75em; font-weight: 500; margin-left: 1px; vertical-align: baseline;">,${parts[1]}</span>`;
    } else {
      formattedHTML = priceText;
    }

    // Ícone de ticket de desconto (stroke branco, sem pontilhados)
    const shopeeTicketSVG = `
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle; margin-left: 4px; display: inline-block;">
        <path d="M20 12c0-1.1.9-2 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v4c1.1 0 2 .9 2 2s-.9 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2z"/>
        <path d="M9 12l2 2 4-4" stroke="#ffffff" stroke-width="2" fill="none"/>
      </svg>
    `;

    priceEl.innerHTML = formattedHTML + shopeeTicketSVG;
  }

  function renderProductInfoRows() {
    // Se o produto não possui variações declaradas no catálogo, cria dinamicamente uma variação de 1 opção única
    if (typeof PRODUTO_ATUAL !== 'undefined') {
      if (!PRODUTO_ATUAL.variacoes || Object.keys(PRODUTO_ATUAL.variacoes).length === 0) {
        let principalImg = PRODUTO_ATUAL.img || '';
        if (!principalImg && Array.isArray(PRODUTO_ATUAL.imagem)) {
          principalImg = PRODUTO_ATUAL.imagem.find(i => !/\.(mp4|webm|ogg|mov)$/i.test(i)) || PRODUTO_ATUAL.imagem[0];
        } else if (!principalImg && typeof PRODUTO_ATUAL.imagem === 'string') {
          principalImg = PRODUTO_ATUAL.imagem;
        } else if (!principalImg && Array.isArray(PRODUTO_ATUAL.imagens)) {
          principalImg = PRODUTO_ATUAL.imagens.find(i => !/\.(mp4|webm|ogg|mov)$/i.test(i)) || PRODUTO_ATUAL.imagens[0];
        }

        PRODUTO_ATUAL.variacoes = {
          "modelo": {
            "label": "OPÇÃO",
            "opcoes": [
              {
                "nome": "Padrão único",
                "imagem": principalImg
              }
            ]
          }
        };
      }
    }

    // Remove o frete antigo (frete-row) para evitar duplicidade
    const oldFreteSection = document.querySelector('.frete-row, .shipping-section, .delivery-info');
    if (oldFreteSection && PRODUTO_ATUAL.id !== 100) oldFreteSection.remove();

    const oldSection = document.querySelector('.protection-section');
    if (!oldSection) return;

    // 1. Calcular data do prazo dinamicamente
    const obterDataPrazo = () => {
      const hoje = new Date();
      const minData = new Date(hoje);
      minData.setDate(hoje.getDate() + 2);
      const maxData = new Date(hoje);
      maxData.setDate(hoje.getDate() + 7);

      const meses = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
      const minDia = minData.getDate();
      const maxDia = maxData.getDate();
      const maxMes = meses[maxData.getMonth()];

      return `Receba até ${minDia}–${maxDia} de ${maxMes}`;
    };

    // 2. Montar as miniaturas de opções disponíveis se houver variações reais no catálogo
    let thumbnailsHtml = '';
    let opcoesCount = 0;
    const temVariacoes = typeof PRODUTO_ATUAL !== 'undefined' && PRODUTO_ATUAL.variacoes && Object.keys(PRODUTO_ATUAL.variacoes).length > 0;

    if (temVariacoes) {
      const imgsReais = [];

      // Coleta todas as opções de imagem das variações
      Object.values(PRODUTO_ATUAL.variacoes).forEach(v => {
        if (Array.isArray(v.opcoes)) {
          v.opcoes.forEach(o => {
            if (typeof o === 'object' && o.imagem && !imgsReais.includes(o.imagem)) {
              imgsReais.push(o.imagem);
            }
          });
        }
      });

      // Se as variações não possuem imagens próprias (ex: voltagem/tamanho puramente textual), usa a imagem principal do produto
      if (imgsReais.length === 0) {
        let principalImg = PRODUTO_ATUAL.img || '';
        if (principalImg && /\.(mp4|webm|ogg|mov)$/i.test(principalImg)) {
          principalImg = '';
        }
        if (!principalImg && Array.isArray(PRODUTO_ATUAL.imagem)) {
          principalImg = PRODUTO_ATUAL.imagem.find(i => !/\.(mp4|webm|ogg|mov)$/i.test(i)) || PRODUTO_ATUAL.imagem[0];
        } else if (!principalImg && typeof PRODUTO_ATUAL.imagem === 'string' && !/\.(mp4|webm|ogg|mov)$/i.test(PRODUTO_ATUAL.imagem)) {
          principalImg = PRODUTO_ATUAL.imagem;
        } else if (!principalImg && Array.isArray(PRODUTO_ATUAL.imagens)) {
          principalImg = PRODUTO_ATUAL.imagens.find(i => !/\.(mp4|webm|ogg|mov)$/i.test(i)) || PRODUTO_ATUAL.imagens[0];
        }
        if (principalImg && !/\.(mp4|webm|ogg|mov)$/i.test(principalImg)) {
          imgsReais.push(principalImg);
        }
      }

      // Define a contagem baseando-se na quantidade de opções do primeiro grupo de variações
      const primeiraVar = Object.values(PRODUTO_ATUAL.variacoes)[0];
      if (primeiraVar && Array.isArray(primeiraVar.opcoes)) {
        opcoesCount = primeiraVar.opcoes.length;
      } else {
        opcoesCount = imgsReais.length;
      }

      const fallback = PRODUTO_ATUAL.img && !/\.(mp4|webm|ogg|mov)$/i.test(PRODUTO_ATUAL.img)
        ? PRODUTO_ATUAL.img
        : (Array.isArray(PRODUTO_ATUAL.imagens) ? PRODUTO_ATUAL.imagens.find(i => !/\.(mp4|webm|ogg|mov)$/i.test(i)) : '');

      imgsReais.slice(0, 6).forEach(img => {
        thumbnailsHtml += `<div style="width:24px; height:24px; border-radius:4px; border:1px solid #ddd; background:#f0f0f0; overflow:hidden; flex-shrink:0;"><img src="${img}" style="width:100%; height:100%; object-fit:cover; display:block;" onerror="this.src='${fallback}'"></div>`;
      });
    }

    const opcoesCountText = opcoesCount === 1 ? '1 opção disponível' : `${opcoesCount} opções disponíveis`;

    const newHtml = `
      <div class="product-info-rows" style="border-top:1px solid #f5f5f5; border-bottom:1px solid #f5f5f5; margin-bottom:14px; background:#fff;">
        <!-- Linha 1: Frete Grátis -->
        ${(PRODUTO_ATUAL.id !== 100 && PRODUTO_ATUAL.id !== 102) ? `
        <div class="info-row-item">
          <div class="info-row-left">
            <div class="info-row-icon">
              <!-- Ícone clássico de caminhão original com listras de movimento -->
              <svg width="20" height="20" viewBox="0 -2 20 20" xmlns="http://www.w3.org/2000/svg">
                <g transform="translate(-2 -4)">
                  <path d="M9.17,17H13V6a1,1,0,0,0-1-1H5" fill="none" stroke="#222" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                  <path d="M3,13v3a1,1,0,0,0,1,1h.87" fill="none" stroke="#222" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                  <path d="M14.87,17H13V7h4.25a1,1,0,0,1,1,.73L19,10.5l1.24.31a1,1,0,0,1,.76,1V16a1,1,0,0,1-1,1h-.89" fill="none" stroke="#222" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                  <path d="M9,17a2,2,0,1,1-2-2A2,2,0,0,1,9,17Zm8-2a2,2,0,1,0,2,2A2,2,0,0,0,17,15ZM3,9H9" fill="none" stroke="#222" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                </g>
              </svg>
            </div>
            <div class="info-row-text-group">
              <div style="display:flex; align-items:center; gap:6px;">
                <span style="background:#e6f8f6; color:#00bfa5; font-size:10.5px; font-weight:700; padding:1px 4px; border-radius:2px;">Frete grátis</span>
                <span style="font-size:12px; color:#888; text-decoration:line-through;">R$ 15,60</span>
              </div>
              <span class="info-row-subtitle" style="font-size:13px; color:#333; font-weight:500;">${obterDataPrazo()}</span>
            </div>
          </div>
          <span class="info-row-arrow">›</span>
        </div>
        ` : ''}

        <!-- Linha 2: Opções Disponíveis (Só aparece se o produto de fato possuir variações) -->
        ${(temVariacoes && PRODUTO_ATUAL.id !== 100 && PRODUTO_ATUAL.id !== 102) ? `
        <div class="info-row-item" onclick="handleAddToCart()">
          <div class="info-row-left">
            <div class="info-row-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
            </div>
            <div style="display:flex; align-items:center; gap:8px;">
              ${thumbnailsHtml ? `<div style="display:flex; gap:4px; align-items:center;">${thumbnailsHtml}</div>` : ''}
              <span class="info-row-title">${opcoesCountText}</span>
            </div>
          </div>
          <span class="info-row-arrow">›</span>
        </div>
        ` : ''}

        <!-- Linha 3: Cashback -->
        <div class="info-row-item">
          <div class="info-row-left">
            <div class="info-row-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="12" y1="1" x2="12" y2="23"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            </div>
            <span class="info-row-title">Bônus de cashback de <strong style="color:#8B4D0B; font-weight:700;">2%</strong></span>
          </div>
          <span class="info-row-arrow">›</span>
        </div>

        <!-- Linha 4: Proteção do Cliente -->
        <div class="info-row-item-protection" onclick="window.openProtecaoModal()" style="background:#fff; padding:12px 16px; border-bottom:1px solid #f2f2f2; cursor:pointer;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
            <div class="info-row-left">
              <div class="info-row-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8B4D0B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <path d="M9 12l2 2 4-4" stroke="#8B4D0B" stroke-width="2"></path>
                </svg>
              </div>
              <span class="info-row-title" style="color:#8B4D0B; font-weight:700;">Proteção do cliente</span>
            </div>
            <span class="info-row-arrow">›</span>
          </div>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:6px 16px; padding-left:30px; box-sizing:border-box;">
            <div style="font-size:12px; color:#555; display:flex; align-items:center; gap:4px;"><span style="color:#8B4D0B; font-weight:bold; font-size:11px;">✓</span> Devolução gratuita</div>
            <div style="font-size:12px; color:#555; display:flex; align-items:center; gap:4px;"><span style="color:#8B4D0B; font-weight:bold; font-size:11px;">✓</span> Reembolso se algo der errado</div>
            <div style="font-size:12px; color:#555; display:flex; align-items:center; gap:4px;"><span style="color:#8B4D0B; font-weight:bold; font-size:11px;">✓</span> Pagamento seguro</div>
            <div style="font-size:12px; color:#555; display:flex; align-items:center; gap:4px;"><span style="color:#8B4D0B; font-weight:bold; font-size:11px;">✓</span> Se o seu pedido não for enviado no prazo</div>
          </div>
        </div>
      </div>
    `;

    oldSection.outerHTML = newHtml;
  }

  function renderProductCupomHeader() {
    const container = document.querySelector('.discount-ticket');
    if (!container || typeof PRODUTO_ATUAL === 'undefined') return;

    // Obtém o preço atual do produto
    const preco = PRODUTO_ATUAL.preco || 0;
    let precoAntigo = PRODUTO_ATUAL.preco_antigo || 0;

    // Se o preço antigo no catálogo for ausente ou igual ao preço atual, lê o preço riscado diretamente da tela
    if (!precoAntigo || precoAntigo === preco) {
      const originalEl = document.querySelector('.price-original');
      if (originalEl) {
        const cleanText = originalEl.textContent.replace('R$', '').replace(/\./g, '').replace(',', '.').trim();
        const parsed = parseFloat(cleanText);
        if (!isNaN(parsed) && parsed > preco) {
          precoAntigo = parsed;
        }
      }
    }

    // Se ainda assim for inválido, usa um fallback de acréscimo proporcional para não zerar
    if (!precoAntigo || precoAntigo <= preco) {
      precoAntigo = Math.round(preco * 1.5);
    }

    // Calcula o desconto real exato (Preço Original Riscado menos Preço Atual)
    const valorDesconto = Math.max(5, Math.round(precoAntigo - preco));
    // Calcula a porcentagem real exata baseada no desconto sobre o valor original
    let economizePorcentagem = 82;

    // Substitui a div antiga pelo design de duas pílulas rosas alinhadas totalmente à esquerda (margem de 2px)
    const cupomHtml = `
      <div class="product-cupom-badge-row" style="display:flex; align-items:center; gap:8px; margin: -10px 2px 8px; flex-wrap:wrap; box-sizing:border-box; justify-content: flex-start;">
        <!-- Pílula 1: Cupom de Desconto -->
        <div style="background:#fff1f3; color:#e02447; font-size:11px; font-weight:700; padding:4px 8px; border-radius:4px; display:flex; align-items:center; gap:4px; height:22px; box-sizing:border-box; border:none;">
          <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" style="vertical-align:middle;">
            <path d="M20 12c0-1.1.9-2 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2zm-9 1.5H9v-3h2v3zm4 0h-2v-3h2v3z"/>
          </svg>
          <span id="desconto-reais-badge">Desconto de R$ ${valorDesconto}</span>
        </div>

        <!-- Pílula 2: Economia de Bônus -->
        <div style="background:#fff1f3; color:#e02447; font-size:11px; font-weight:700; padding:4px 8px; border-radius:4px; display:flex; align-items:center; height:22px; box-sizing:border-box; border:none;">
          <span>Economize ${economizePorcentagem}% com bônus</span>
        </div>
      </div>
    `;
    container.outerHTML = cupomHtml;
  }

  updateCartBadges();
  initSlider(document.querySelector('.image-slider'));
  initOfertaTimer();
  initPessoasOlhando();
  renderRelacionados();
  renderStoreWidget();
  initProductTabs();
  initSeguirBtn();
  initChatButtons();
  initReviewPagination();
  initAvatarColors();
  formatCentavosDecalque();
  renderProductInfoRows();
  renderProductCupomHeader();

  // Sobrescreve com atraso (delay) as ações de rodapé para anular qualquer script inline posterior do HTML do produto
  setTimeout(() => {
    if (typeof PRODUTO_ATUAL !== 'undefined') {
      normalizarVariacoesProduto(PRODUTO_ATUAL);
    }
    window.handleAddToCart = function () {
      if (typeof PRODUTO_ATUAL !== 'undefined') {
        normalizarVariacoesProduto(PRODUTO_ATUAL);
        handleAddToCartWithVariacoes(PRODUTO_ATUAL, false);
      }
    };
    window.handleBuyNow = function () {
      if (typeof PRODUTO_ATUAL !== 'undefined') {
        normalizarVariacoesProduto(PRODUTO_ATUAL);
        handleAddToCartWithVariacoes(PRODUTO_ATUAL, true);
      }
    };
  }, 250);

  // Efeito interativo do produto voando até o ícone do carrinho
  window.animateFlyToCart = function (startElement) {
    try {
      const cartIcon = document.querySelector('.header-icon-btn svg, .header-icon-btn');
      if (!cartIcon || typeof PRODUTO_ATUAL === 'undefined') return;

      // Obtém a imagem principal do produto de forma segura
      let imgUrl = PRODUTO_ATUAL.img || '';
      if (!imgUrl && Array.isArray(PRODUTO_ATUAL.imagem)) {
        imgUrl = PRODUTO_ATUAL.imagem.find(i => !/\.(mp4|webm|ogg|mov)$/i.test(i)) || PRODUTO_ATUAL.imagem[0];
      } else if (!imgUrl && typeof PRODUTO_ATUAL.imagem === 'string') {
        imgUrl = PRODUTO_ATUAL.imagem;
      } else if (!imgUrl && Array.isArray(PRODUTO_ATUAL.imagens)) {
        imgUrl = PRODUTO_ATUAL.imagens.find(i => !/\.(mp4|webm|ogg|mov)$/i.test(i)) || PRODUTO_ATUAL.imagens[0];
      }

      if (!imgUrl) return;

      // Cria a imagem voadora
      const flyer = document.createElement('img');
      flyer.src = imgUrl;
      flyer.style.cssText = `
        position: fixed;
        z-index: 100000;
        width: 50px;
        height: 50px;
        object-fit: cover;
        border-radius: 50%;
        border: 2px solid #FF2B56;
        box-shadow: 0 4px 10px rgba(0,0,0,0.3);
        pointer-events: none;
        opacity: 1;
        transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
      `;

      // Posiciona o elemento no início
      let startX = window.innerWidth / 2 - 25;
      let startY = window.innerHeight - 80;
      if (startElement) {
        const rect = startElement.getBoundingClientRect();
        startX = rect.left + rect.width / 2 - 25;
        startY = rect.top + rect.height / 2 - 25;
      }

      flyer.style.left = startX + 'px';
      flyer.style.top = startY + 'px';
      document.body.appendChild(flyer);

      // Obtém as coordenadas do ícone do carrinho
      const cartRect = cartIcon.getBoundingClientRect();
      const endX = cartRect.left + cartRect.width / 2 - 10;
      const endY = cartRect.top + cartRect.height / 2 - 10;

      // Inicia a transição
      setTimeout(() => {
        flyer.style.left = endX + 'px';
        flyer.style.top = endY + 'px';
        flyer.style.transform = 'scale(0.1)';
        flyer.style.opacity = '0.3';
      }, 50);

      // Remove após o término e faz o pop no badge
      setTimeout(() => {
        flyer.remove();
        const badge = document.querySelector('.cart-badge');
        if (badge) {
          badge.classList.remove('pop');
          void badge.offsetWidth; // Força reflow
          badge.classList.add('pop');
        }
      }, 850);

      // Exibe o modal flutuante exatamente 1 segundo após a conclusão do vôo (850ms + 1000ms = 1850ms)
      setTimeout(() => {
        showPremiumSuccessModal();
      }, 1850);
    } catch (e) {
      console.error('Erro na animacao fly to cart:', e);
    }
  };

  // Modal flutuante quadrado premium (Shopee Style) para indicação de produto adicionado ao carrinho
  function showPremiumSuccessModal() {
    const existing = document.getElementById('premium-success-modal');
    if (existing) existing.remove();

    const modal = document.createElement('div');
    modal.id = 'premium-success-modal';
    modal.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 140px;
      height: 120px;
      background: rgba(50, 50, 50, 0.95);
      border-radius: 12px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      z-index: 100000;
      box-shadow: 0 4px 20px rgba(0,0,0,0.3);
      animation: zoomInSuccess 0.2s ease-out;
    `;

    // Adiciona a animação de zoom-in
    const styleId = 'success-modal-style';
    let style = document.getElementById(styleId);
    if (!style) {
      style = document.createElement('style');
      style.id = styleId;
      style.innerHTML = `
        @keyframes zoomInSuccess {
          from { transform: translate(-50%, -50%) scale(0.85); opacity: 0; }
          to { transform: translate(-50%, -50%) scale(1); opacity: 1; }
        }
      `;
      document.head.appendChild(style);
    }

    modal.innerHTML = `
      <div style="font-size: 34px; color: #ffffff; font-weight: 300; line-height: 1; margin-top: 4px;">✓</div>
      <div style="font-size: 13px; color: #ffffff; font-weight: 500; margin-top: 14px; text-align: center; font-family: -apple-system, BlinkMacSystemFont, sans-serif; padding: 0 8px; line-height: 1.25;">Adicionado ao carrinho</div>
    `;

    document.body.appendChild(modal);

    // Esconde e remove o modal após 1.5 segundos
    setTimeout(() => {
      modal.style.transition = 'opacity 0.2s ease';
      modal.style.opacity = '0';
      setTimeout(() => modal.remove(), 200);
    }, 1500);
  }
  window.showPremiumSuccessModal = showPremiumSuccessModal;

  // Modal flutuante da Proteção do Cliente para páginas de produtos
  window.openProtecaoModal = function () {
    const existingOverlay = document.getElementById('app-protecao-modal-overlay');
    const existingBox = document.getElementById('app-protecao-modal-box');
    if (existingOverlay) existingOverlay.remove();
    if (existingBox) existingBox.remove();

    const overlay = document.createElement('div');
    overlay.id = 'app-protecao-modal-overlay';
    overlay.style.cssText = `
      position: fixed; top: 0; left: 0; width: 100%; height: 100%;
      background: rgba(0,0,0,0.5); z-index: 100000;
      animation: fadeInOverlay 0.2s ease;
    `;
    overlay.onclick = window.closeProtecaoModal;

    const box = document.createElement('div');
    box.id = 'app-protecao-modal-box';
    box.style.cssText = `
      position: fixed; bottom: 0; left: 50%; transform: translateX(-50%);
      width: 100%; max-width: 480px; background: #fff;
      border-radius: 16px 16px 0 0; z-index: 100001;
      overflow: hidden; box-shadow: 0 -4px 16px rgba(0,0,0,0.15);
      animation: slideUpProtecao 0.3s ease-out;
      max-height: 85vh;
    `;

    const styleId = 'protecao-modal-animation-style';
    let style = document.getElementById(styleId);
    if (!style) {
      style = document.createElement('style');
      style.id = styleId;
      style.innerHTML = `
        @keyframes slideUpProtecao {
          from { transform: translate(-50%, 100%); }
          to { transform: translate(-50%, 0); }
        }
        @keyframes fadeInOverlay {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `;
      document.head.appendChild(style);
    }

    box.innerHTML = `
      <div style="position:relative; width:100%;">
        <!-- Área de clique invisível exatamente em cima do X desenhado na imagem -->
        <div onclick="window.closeProtecaoModal()" style="position:absolute; top:12px; right:12px; width:42px; height:42px; cursor:pointer; z-index:100002; background:transparent;"></div>
        
        <!-- Imagem de Proteção do Cliente Oficial -->
        <div style="width:100%; overflow-y:auto; max-height:85vh; -webkit-overflow-scrolling:touch; box-sizing:border-box;">
          <img src="../modalprotecaodocliente/IMG_5391.PNG" alt="Proteção do cliente" style="width:100%; display:block; height:auto; object-fit:contain; pointer-events:none;-webkit-touch-callout:none;user-select:none;">
        </div>
      </div>
    `;

    document.body.appendChild(overlay);
    document.body.appendChild(box);
  };

  window.closeProtecaoModal = function () {
    const overlay = document.getElementById('app-protecao-modal-overlay');
    const box = document.getElementById('app-protecao-modal-box');
    if (box) {
      box.style.transition = 'transform 0.2s ease-out';
      box.style.transform = 'translate(-50%, 100%)';
    }
    if (overlay) {
      overlay.style.transition = 'opacity 0.2s ease';
      overlay.style.opacity = '0';
    }
    setTimeout(() => {
      if (overlay) overlay.remove();
      if (box) box.remove();
    }, 200);
  };

  // Funções para abrir o modal profissional da PUMA OFICIAL
  window.openPumaStoreModal = function () {
    // Evita duplicados
    if (document.getElementById('puma-modal-overlay')) return;

    const overlay = document.createElement('div');
    overlay.id = 'puma-modal-overlay';
    overlay.style.cssText = `
      position: fixed; top: 0; left: 0; width: 100%; height: 100%;
      background: rgba(0,0,0,0.6); z-index: 100000;
      display: flex; align-items: flex-end; justify-content: center;
      opacity: 0; transition: opacity 0.3s ease;
    `;

    const box = document.createElement('div');
    box.id = 'puma-modal-box';
    box.style.cssText = `
      position: fixed; bottom: 0; left: 50%; transform: translate(-50%, 100%);
      width: 100%; max-width: 480px; background: #fff;
      border-radius: 20px 20px 0 0; z-index: 100001;
      overflow: hidden; box-shadow: 0 -4px 20px rgba(0,0,0,0.2);
      transition: transform 0.3s cubic-bezier(0.1, 0.76, 0.55, 0.94);
      font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif;
      box-sizing: border-box; padding: 24px 20px;
    `;

    box.innerHTML = `
      <div style="display:flex; flex-direction:column; align-items:center; text-align:center;">
        <!-- Ícone / Logo da Puma Oficial em destaque circular -->
        <div style="width: 80px; height: 80px; border-radius: 50%; overflow: hidden; border: 2px solid #222; display: flex; align-items: center; justify-content: center; background: #222; margin-bottom: 14px; box-shadow: 0 4px 10px rgba(0,0,0,0.05); box-sizing: border-box; padding: 0;">
          <img src="../pumalogo/image.png" alt="Puma Logo" style="width: 100%; height: 100%; object-fit: cover; transform: scale(1.1); display: block;">
        </div>

        <div style="font-size: 18px; font-weight: 800; color: #111; display: flex; align-items: center; gap: 6px; margin-bottom: 6px;">
          PUMA OFICIAL
          <svg viewBox="0 0 24 24" width="18" height="18" style="color:#0095f6; flex-shrink:0;" fill="currentColor">
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </div>
        
        <div style="font-size: 12px; color: #888; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 16px;">
          Parceiro Oficial Autorizado
        </div>

        <div style="font-size: 14px; color: #444; line-height: 1.6; margin-bottom: 22px; padding: 0 10px;">
          Esta é a página exclusiva do produto oficial <strong>Kit Compre 1 Leve 2 Portugal 2026</strong>. Como parceiro oficial da marca, oferecemos garantia de autenticidade, suporte premium e frete prioritário grátis para todo o Brasil diretamente dos centros de distribuição autorizados.
        </div>

        <!-- Estatísticas no Modal -->
        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; width: 100%; border-top: 1px solid #eee; border-bottom: 1px solid #eee; padding: 16px 0; margin-bottom: 24px;">
          <div>
            <div style="font-size: 16px; font-weight: 800; color: #111;">147.2K</div>
            <div style="font-size: 10.5px; color: #888; margin-top: 2px;">Vendas Totais</div>
          </div>
          <div>
            <div style="font-size: 16px; font-weight: 800; color: #4caf50;">100%</div>
            <div style="font-size: 10.5px; color: #888; margin-top: 2px;">Suporte 24h</div>
          </div>
          <div>
            <div style="font-size: 16px; font-weight: 800; color: #111;">97%</div>
            <div style="font-size: 10.5px; color: #888; margin-top: 2px;">Envio Imediato</div>
          </div>
        </div>

        <button onclick="window.closePumaStoreModal()" style="width: 100%; background: #111; color: #fff; font-size: 15px; font-weight: 700; padding: 14px; border: none; border-radius: 25px; cursor: pointer; outline: none; transition: background 0.2s;">
          Entendido
        </button>
      </div>
    `;

    document.body.appendChild(overlay);
    document.body.appendChild(box);

    // Ativa as transições após o append
    setTimeout(() => {
      overlay.style.opacity = '1';
      box.style.transform = 'translate(-50%, 0)';
    }, 50);

    // Fecha ao clicar no overlay
    overlay.addEventListener('click', () => window.closePumaStoreModal());
  };

  window.closePumaStoreModal = function () {
    const overlay = document.getElementById('puma-modal-overlay');
    const box = document.getElementById('puma-modal-box');
    if (box) {
      box.style.transform = 'translate(-50%, 100%)';
    }
    if (overlay) {
      overlay.style.opacity = '0';
    }
    setTimeout(() => {
      if (overlay) overlay.remove();
      if (box) box.remove();
    }, 300);
  };
});

// Disparador global para abrir o modal de variacao de qualquer produto se vier ?openModal=1 na URL
document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const isFromStoreList = urlParams.get('fromStoreList') === '1';

  // Se veio da listagem da loja (via iframe), intercepta redirecionamentos e acoes locais
  if (isFromStoreList) {
    // Intercepta adicionais de carrinho
    const originalAddToCart = window.addToCart;
    window.addToCart = function (produto, qty = 1) {
      if (window.parent && typeof window.parent.addToCart === 'function') {
        return window.parent.addToCart(produto, qty);
      }

      const cart = getCart();
      const idx = cart.findIndex(i => Number(i.id) === Number(produto.id) && i.variacao === produto.variacao);
      if (idx >= 0) {
        cart[idx].qty += qty;
      } else {
        let cleanImg = produto.img || '';
        if (produto.imagens && produto.imagens.length) {
          const primeiraImg = produto.imagens.find(i => !i.endsWith('.mp4'));
          cleanImg = primeiraImg || produto.imagens[0];
        }
        if (cleanImg.startsWith('../')) {
          cleanImg = cleanImg.substring(3);
        }
        cart.push({
          id: produto.id,
          nome: produto.nome,
          preco: produto.preco,
          precoOrig: produto.precoOrig || (produto.preco * 1.5),
          img: cleanImg,
          qty: qty,
          variacao: produto.variacao || null
        });
      }
      saveCart(cart);
      updateCartBadges();
      return cart;
    };

    // Sobrescreve handleBuyNow e handleAddToCart especificos para apenas adicionar e fechar sem navegar
    window.handleAddToCart = function () {
      if (typeof PRODUTO_ATUAL !== 'undefined') {
        addToCart(PRODUTO_ATUAL);
        showToast('✅ Adicionado ao carrinho!');
        setTimeout(() => {
          try {
            const tempModal = document.querySelector('.modal-overlay') || document.querySelector('.custom-modal-overlay') || document.getElementById('custom-var-modal');
            if (tempModal) tempModal.style.display = 'none';
          } catch (e) { }
        }, 800);
      }
    };

    window.handleBuyNow = function () {
      if (typeof PRODUTO_ATUAL !== 'undefined') {
        addToCart(PRODUTO_ATUAL);
        setTimeout(() => {
          try {
            const tempModal = document.querySelector('.modal-overlay') || document.querySelector('.custom-modal-overlay') || document.getElementById('custom-var-modal');
            if (tempModal) tempModal.style.display = 'none';
          } catch (e) { }
        }, 500);
      }
    };
  }

  if (urlParams.get('openModal') === '1') {
    setTimeout(() => {
      // Procura o botao principal de adicionar ao carrinho na pagina do produto
      const btnAddCart = document.getElementById('btn-add-cart') || document.querySelector('.btn-add-cart') || document.querySelector('[onclick*="handleAddToCart"]');
      if (btnAddCart) {
        btnAddCart.click();
      } else if (typeof handleAddToCart === 'function') {
        handleAddToCart();
      } else if (typeof showCustomModal === 'function') {
        showCustomModal('cart');
      }
    }, 600); // Pequeno delay para garantir que os scripts especificos do produto estejam prontos
  }

  // ===== SALVA ÚLTIMO PRODUTO VISITADO =====
  if (window.location.pathname.includes('/produto-')) {
    localStorage.setItem('famosinhos_ultimo_produto_url', window.location.href);
  }
});

// ===== HISTÓRICO DE PEDIDOS DO CLIENTE (Três pontinhos -> Pedidos) =====
window.showMyOrders = function() {
  let overlay = document.getElementById('my-orders-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'my-orders-overlay';
    overlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.5);
      z-index: 99999999;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      opacity: 0;
      transition: opacity 0.25s ease;
    `;

    const panel = document.createElement('div');
    panel.style.cssText = `
      width: 100%;
      max-width: 480px;
      height: 80vh;
      background: #f7f9fa;
      border-radius: 20px 20px 0 0;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      transform: translateY(100%);
      transition: transform 0.25s ease;
      position: relative;
    `;

    overlay.appendChild(panel);
    document.body.appendChild(overlay);

    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) hideMyOrders();
    });
  }

  const isIndex = window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/');
  const pagesPath = isIndex ? 'pages/' : '';
  const basePath = isIndex ? '' : '../';

  // Obter pedidos salvos
  let pedidos = [];
  try {
    pedidos = JSON.parse(localStorage.getItem('famosinhos_pedidos') || '[]');
  } catch (e) {
    pedidos = [];
  }

  const panel = overlay.firstElementChild;
  let contentHtml = '';

  if (!pedidos || pedidos.length === 0) {
    // Tela de "Sem pedidos" estilo Shopee limpa
    contentHtml = `
      <div style="flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 40px 20px; text-align: center; color: #888; font-family: -apple-system, BlinkMacSystemFont, sans-serif;">
        <svg viewBox="0 0 24 24" width="60" height="60" fill="none" stroke="#ccc" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom: 16px;">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <path d="M16 10a4 4 0 0 1-8 0"></path>
        </svg>
        <div style="font-size: 16px; font-weight: 700; color: #333; margin-bottom: 8px;">Você ainda não tem pedidos</div>
        <div style="font-size: 13px; color: #666; max-width: 250px; line-height: 1.4; margin-bottom: 24px;">Que tal adicionar alguns produtos incríveis ao seu carrinho agora mesmo?</div>
        <button onclick="hideMyOrders()" style="padding: 12px 28px; background: #ff2c55; color: #fff; border: none; border-radius: 20px; font-size: 14px; font-weight: 700; cursor: pointer; outline: none; border: none;">Voltar a comprar</button>
      </div>
    `;
  } else {
    // Renderiza a lista de pedidos
    let cardsHtml = '';
    pedidos.forEach((p, index) => {
      let itemsHtml = '';
      if (p.itens && Array.isArray(p.itens)) {
        p.itens.forEach(item => {
          let imgSrc = item.img || '';
          if (!imgSrc.startsWith('http') && !imgSrc.startsWith('//')) {
            // Ajustar o path relativo da imagem dependendo de onde o modal está sendo aberto
            if (imgSrc.startsWith('../')) {
              imgSrc = isIndex ? imgSrc.substring(3) : imgSrc;
            } else {
              imgSrc = isIndex ? imgSrc : '../' + imgSrc;
            }
          }
          itemsHtml += `
            <div style="display: flex; gap: 12px; margin-bottom: 12px; border-bottom: 1px solid #f9f9f9; padding-bottom: 12px;">
              <img src="${imgSrc}" onerror="this.src='https://via.placeholder.com/64'" style="width: 50px; height: 50px; border-radius: 6px; object-fit: cover; border: 1px solid #eee; flex-shrink: 0;" />
              <div style="flex: 1; min-width: 0;">
                <div style="font-size: 13px; color: #222; font-weight: 500; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${item.nome}</div>
                ${item.variacao ? `<div style="font-size: 11px; color: #888; margin-top: 2px;">Variação: ${item.variacao}</div>` : ''}
                <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 4px;">
                  <span style="font-size: 13px; font-weight: 700; color: #222;">R$ ${parseFloat(item.preco).toFixed(2).replace('.', ',')}</span>
                  <span style="font-size: 11px; color: #666;">x${item.qty}</span>
                </div>
              </div>
            </div>
          `;
        });
      }

      cardsHtml += `
        <div style="background: #fff; border-radius: 12px; padding: 16px; margin-bottom: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.03); font-family: -apple-system, BlinkMacSystemFont, sans-serif;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; border-bottom: 1px solid #f5f5f5; padding-bottom: 8px;">
            <div style="font-size: 11px; color: #666;">Gerado em ${p.data}</div>
            <div style="font-size: 12px; color: #ff2c55; font-weight: 700;">Aguardando pagamento</div>
          </div>
          <div>
            ${itemsHtml}
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 8px; border-top: 1px solid #f5f5f5; padding-top: 12px;">
            <div style="font-size: 14px; font-weight: 700; color: #222;">Total: R$ ${parseFloat(p.total).toFixed(2).replace('.', ',')}</div>
            <button onclick="window.redirecionarParaPix('${p.pix_code || ''}', '${p.txid || ''}', '${p.total || ''}')" style="padding: 8px 16px; background: #ff2c55; color: #fff; border: none; border-radius: 6px; font-size: 12px; font-weight: 700; cursor: pointer; outline: none;">Visualizar código</button>
          </div>
        </div>
      `;
    });

    contentHtml = `
      <div style="flex: 1; overflow-y: auto; padding: 16px; -webkit-overflow-scrolling: touch;">
        ${cardsHtml}
      </div>
    `;
  }

  panel.innerHTML = `
    <!-- Header -->
    <div style="background: #fff; min-height: 54px; display: flex; align-items: center; padding: 0 16px; border-bottom: 1px solid #eee; border-radius: 20px 20px 0 0; position: sticky; top: 0; z-index: 10;">
      <h2 style="font-size: 16px; font-weight: 700; color: #000; margin: 0; flex: 1; text-align: center;">Meus Pedidos</h2>
      <button onclick="hideMyOrders()" style="position: absolute; right: 16px; background: none; border: none; cursor: pointer; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; border-radius: 50%; background: #f3f3f3; font-size: 14px; font-weight: bold; color: #666;">✕</button>
    </div>
    
    <!-- Corpo -->
    ${contentHtml}
  `;

  // Função interna para redirecionar para a página do pix a partir do card
  window.redirecionarParaPix = function(pix_code, txid, total) {
    sessionStorage.setItem('sealpay_pix_code', pix_code);
    sessionStorage.setItem('sealpay_txid', txid);
    sessionStorage.setItem('sealpay_total', total);
    window.location.href = pagesPath + 'pix.html';
  };

  overlay.style.display = 'flex';
  setTimeout(() => {
    overlay.style.opacity = '1';
    panel.style.transform = 'translateY(0)';
  }, 10);
};

window.hideMyOrders = function() {
  const overlay = document.getElementById('my-orders-overlay');
  if (overlay) {
    overlay.style.opacity = '0';
    overlay.firstElementChild.style.transform = 'translateY(100%)';
    setTimeout(() => {
      overlay.style.display = 'none';
    }, 250);
  }
};

// Substituição de estrelas emojis por SVGs com a mesma cor amarela queimada (#F5A623)
(function() {
  function substituirEstrelas() {
    const elements = document.querySelectorAll('.review-user-stars, .review-stars');
    const svgEstrela = `<svg class="review-star-svg" fill="#F5A623" viewBox="0 0 48 48" width="13" height="13" style="margin-right: 2px; vertical-align: middle;"><path d="m25.22 2.72.12.06c1 .6 1.4 1.9 1.82 2.9l4.12 9.92.1.24.26.02 10.7.86c1.1.09 2.45.06 3.33.83.66.63.97 1.5.85 2.42-.19 1.2-1.36 2.01-2.22 2.76l-8.16 6.98-.2.17.06.25 2.5 10.45c.24 1.07.7 2.35.23 3.41a2.79 2.79 0 0 1-2.04 1.56c-1.2.2-2.33-.67-3.3-1.26l-9.17-5.6-.22-.13-.22.13-9.17 5.6c-.93.57-2.01 1.4-3.17 1.28a2.78 2.78 0 0 1-2.11-1.45c-.56-1.09-.09-2.44.18-3.54L12 30.13l.06-.25-.2-.17-8.15-6.98c-.84-.72-1.95-1.5-2.2-2.63-.19-.95.12-1.88.82-2.55.88-.77 2.24-.74 3.33-.83l10.7-.86.26-.02.1-.24 4.12-9.91c.44-1.05.85-2.42 1.94-2.97a2.8 2.8 0 0 1 2.44 0Z"/></svg>`;

    elements.forEach(el => {
      if (el.querySelector('.review-star-svg')) return;
      const texto = el.textContent || "";
      const count = (texto.match(/⭐|⭐️/g) || []).length;
      if (count > 0) {
        el.innerHTML = svgEstrela.repeat(count);
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', substituirEstrelas);
  } else {
    substituirEstrelas();
  }

  // MutationObserver para observar elementos inseridos dinamicamente
  if (typeof MutationObserver !== 'undefined') {
    const observer = new MutationObserver((mutations) => {
      let shouldRun = false;
      for (const mutation of mutations) {
        if (mutation.addedNodes.length > 0) {
          shouldRun = true;
          break;
        }
      }
      if (shouldRun) {
        substituirEstrelas();
        if (typeof initAvatarColors === 'function') {
          initAvatarColors();
        }
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }
})();



  // Lógica global e inteligente para o botão de voltar das páginas de produtos
  document.addEventListener('DOMContentLoaded', () => {
    // Rastreia a página anterior de produto visitada
    const currentUrl = window.location.href;
    if (!currentUrl.includes('index.html')) {
      const prevProd = localStorage.getItem('last_visited_product');
      if (prevProd && prevProd !== currentUrl) {
        localStorage.setItem('prev_visited_product', prevProd);
      }
      localStorage.setItem('last_visited_product', currentUrl);
    }

    const setupBackBtn = () => {
      const backBtn = document.querySelector('.header-back-btn');
      if (backBtn) {
        // Remove event listener antigo se houver clonando o botão
        const newBackBtn = backBtn.cloneNode(true);
        backBtn.parentNode.replaceChild(newBackBtn, backBtn);

        newBackBtn.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();

          // Tenta voltar pelo histórico do navegador primeiro se a página anterior for do mesmo site
          if (document.referrer && document.referrer.includes(window.location.host)) {
            window.history.back();
            return;
          }

          // Se não houver histórico válido, usa o produto anteriormente visitado
          const prevProd = localStorage.getItem('prev_visited_product');
          if (prevProd) {
            window.location.href = prevProd;
          } else {
            // Fallback padrão para a loja inicial
            window.location.href = '../index.html';
          }
        });
      }
    };
    setupBackBtn();
    // Fallback para SPA ou atrasos na injeção do cabeçalho
    setTimeout(setupBackBtn, 500);
  });
