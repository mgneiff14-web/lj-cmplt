// =============================================================
// LÓGICA DO MODAL PIRELLI - produto-101-logic.js
// Modal funciona idêntico ao site oficial pirelli.com/tyres/pt-br
// Fluxo 1: Por Veículo   → Marca → Modelo → Ano → Versão → Pneus
// Fluxo 2: Por Medida    → Largura → Perfil → Aro → Pneus
// =============================================================

let modalScrolling = false;
let scrollTimeout = null;

let pirelliState = {
  fluxo: null,        // 'veiculo' | 'medida'
  acao: 'cart',       // 'cart' | 'buy'
  marca: null,
  modelo: null,
  ano: null,
  versao: null,
  largura: null,
  perfil: null,
  aro: null,
  medidaSelecionada: null,
  pneuSelecionado: null,
  quantidade: 1
};

// Sem lógica de adivinhação — tudo usa o banco de dados real (produto-101-db.js)

// =============================================================
// ABRIR MODAL
// =============================================================
function openPirelliModal(acao = 'cart') {
  pirelliState.acao = acao;

  // Remove modal anterior se existir
  const antigo = document.getElementById('pirelli-modal-overlay');
  if (antigo) antigo.remove();

  const overlay = document.createElement('div');
  overlay.id = 'pirelli-modal-overlay';
  overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.55);z-index:99999;display:flex;align-items:flex-end;justify-content:center;';

  overlay.innerHTML = `
    <style>
      #pm { background:#fff; width:100%; max-width:520px; max-height:88vh; border-radius:16px 16px 0 0; display:flex; flex-direction:column; overflow:hidden; animation:pmSlide 0.3s cubic-bezier(.4,0,.2,1); }
      @keyframes pmSlide { from{transform:translateY(100%)} to{transform:translateY(0)} }
      #pm-header { padding:16px; border-bottom:1px solid #f0f0f0; display:flex; align-items:center; gap:12px; flex-shrink:0; }
        #pm-logo { height:40px; object-fit:contain; flex-shrink:0; }
        #pm-title { flex:1; font-size:14px; font-weight:bold; color:#333; }
        #pm-close { width:32px; height:32px; border:none; background:#f5f5f5; border-radius:50%; cursor:pointer; font-size:18px; color:#666; display:flex; align-items:center; justify-content:center; }
        #pm-body { flex:1; overflow-y:auto; padding:16px; -webkit-overflow-scrolling:touch; }
        .pm-step-title { font-size:15px; font-weight:bold; color:#333; margin-bottom:14px; }
        .pm-tabs { display:flex; gap:6px; margin-bottom:18px; background:#f2f2f2; padding:4px; border-radius:10px; }
        .pm-tab { flex:1; padding:10px; border:none; background:transparent; color:#333 !important; font-weight:bold; cursor:pointer; font-size:14px; display:flex; align-items:center; justify-content:center; gap:8px; border-radius:8px; transition:all .2s; }
        .pm-tab.active { background:#FFDB00; color:#000 !important; box-shadow: 0 2px 5px rgba(0,0,0,0.08); }
        .pm-search { width:100%; padding:10px 12px; border:1px solid #ddd; border-radius:8px; font-size:14px; margin-bottom:0; box-sizing:border-box; color:#333; }
        .pm-search:focus { outline:none; border-color:#FF2B56; }
        .pm-grid { display:grid; grid-template-columns:repeat(2, 1fr); gap:8px; }
        .pm-grid-1 { display:grid; grid-template-columns:1fr; gap:6px; }
        .pm-btn { padding:10px 12px; border:1px solid #e0e0e0; border-radius:8px; background:#fafafa; cursor:pointer; font-size:13px; text-align:left; transition:all .2s; color:#333 !important; text-decoration:none !important; outline:none !important; -webkit-tap-highlight-color:transparent; }
        .pm-btn:focus, .pm-btn:active { outline:none !important; border-color:#e0e0e0 !important; background:#fafafa !important; color:#333 !important; }
        .pm-btn.selected { border-color:#FF2B56 !important; background:#fff0f3 !important; color:#FF2B56 !important; font-weight:bold; }
        @media (hover: hover) {
          .pm-btn:hover { border-color:#FF2B56; color:#FF2B56 !important; background:#fff5f7; }
          .pm-pneu-card:hover { border-color:#FF2B56; background:#fff5f7; }
        }
        .pm-back { display:flex; align-items:center; gap:6px; background:none; border:none; color:#FF2B56 !important; font-size:13px; cursor:pointer; margin-bottom:14px; padding:0; font-weight:bold; }
        .pm-back svg { flex-shrink:0; }
        .pm-pneu-card { display:flex; align-items:center; gap:12px; border:1.5px solid #e0e0e0; border-radius:10px; padding:12px; margin-bottom:10px; cursor:pointer; transition:all .2s; color:#333 !important; outline:none !important; -webkit-tap-highlight-color:transparent; }
        .pm-pneu-card:focus, .pm-pneu-card:active { outline:none !important; border-color:#e0e0e0 !important; background:#fff !important; }
        .pm-pneu-card.selected { border-color:#FF2B56 !important; background:#fff0f3 !important; }
        .pm-pneu-img { width:56px; height:56px; object-fit:contain; flex-shrink:0; }
        .pm-pneu-info { flex:1; }
        .pm-pneu-nome { font-weight:bold; font-size:13px; color:#222 !important; }
        .pm-pneu-cat { font-size:11px; color:#888 !important; margin:2px 0; }
        .pm-pneu-preco { font-weight:bold; font-size:15px; color:#FF2B56 !important; }
        .pm-pneu-medida { font-size:11px; color:#555 !important; background:#f5f5f5; padding:2px 6px; border-radius:4px; display:inline-block; margin-top:3px; }
        .pm-check { width:22px; height:22px; border-radius:50%; border:2px solid #ddd; flex-shrink:0; display:flex; align-items:center; justify-content:center; }
        .pm-check.ok { background:#FF2B56; border-color:#FF2B56; }
        .pm-confirm-btn { width:100%; padding:15px; background:#FF2B56; color:#fff !important; border:none; border-radius:30px; font-size:15px; font-weight:bold; cursor:pointer; margin-top:8px; box-shadow: 0 4px 10px rgba(255,43,86,0.2); transition: all 0.2s; }
        .pm-confirm-btn:active { transform: scale(0.98); }
        .pm-confirm-btn:disabled { background:#ccc; cursor:not-allowed; box-shadow: none; color:#888 !important; }
        .pm-medida-row { display:flex; gap:6px; align-items:center; margin-bottom:12px; flex-wrap:wrap; }
        .pm-medida-tag { padding:6px 14px; border:1px solid #ddd; border-radius:20px; font-size:13px; cursor:pointer; background:#fafafa; color:#333 !important; text-decoration:none !important; }
        .pm-medida-tag.active { background:#FF2B56; color:#fff !important; border-color:#FF2B56; }
      </style>
      <div id="pm">
        <div id="pm-header">
          <img id="pm-logo" src="../logopirelli/pirelli.png" alt="Pirelli">
          <div id="pm-title">Encontre o pneu ideal</div>
          <button id="pm-close" onclick="closePirelliModal()">✕</button>
        </div>
        <div id="pm-body">
          <div id="pm-step-fluxo">
            <p class="pm-step-title">Como prefere buscar?</p>
            <div class="pm-tabs">
              <button class="pm-tab active" onclick="pirelliSetFluxo('veiculo')">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>
                Veículo
              </button>
              <button class="pm-tab" onclick="pirelliSetFluxo('medida')">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/><path d="M12 2v7"/><path d="M12 15v7"/><path d="M2 12h7"/><path d="M15 12h7"/></svg>
                Medida
              </button>
            </div>
            <div id="pm-fluxo-content"></div>
          </div>
        </div>
    </div>
  `;

  document.body.appendChild(overlay);
  overlay.addEventListener('click', function(e) { if (e.target === overlay) closePirelliModal(); });

  // Escuta evento de scroll no modal para evitar cliques acidentais no celular
  const pmBody = document.getElementById('pm-body');
  if (pmBody) {
    pmBody.addEventListener('scroll', () => {
      modalScrolling = true;
      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        modalScrolling = false;
      }, 150);
    });
  }

  // Restaura o fluxo e o passo onde o usuário parou!
  if (pirelliState.fluxo) {
    const fluxo = pirelliState.fluxo;
    document.querySelectorAll('.pm-tab').forEach((t, i) => {
      t.classList.toggle('active', (fluxo === 'veiculo' && i === 0) || (fluxo === 'medida' && i === 1));
    });
    
    if (fluxo === 'veiculo') {
      if (pirelliState.versao) renderPneusVeiculo();
      else if (pirelliState.ano) renderVersoes();
      else if (pirelliState.modelo) renderAnos();
      else if (pirelliState.marca) renderModelos();
      else renderMarcas();
    } else {
      if (pirelliState.aro) renderPneusMedia();
      else if (pirelliState.perfil) renderAros();
      else if (pirelliState.largura) renderPerfis();
      else renderLarguras();
    }
  } else {
    pirelliSetFluxo('veiculo');
  }
}

function closePirelliModal() {
  const el = document.getElementById('pirelli-modal-overlay');
  if (el) el.remove();
}

// =============================================================
// CONTROLE DE FLUXO
// =============================================================
function pirelliSetFluxo(fluxo) {
  if (modalScrolling) return;
  pirelliState.fluxo = fluxo;
  pirelliState.marca = null;
  pirelliState.modelo = null;
  pirelliState.ano = null;
  pirelliState.versao = null;
  pirelliState.largura = null;
  pirelliState.perfil = null;
  pirelliState.aro = null;
  pirelliState.pneuSelecionado = null;

  // Atualizar tabs
  document.querySelectorAll('.pm-tab').forEach((t, i) => {
    t.classList.toggle('active', (fluxo === 'veiculo' && i === 0) || (fluxo === 'medida' && i === 1));
  });

  if (fluxo === 'veiculo') {
    renderMarcas();
  } else {
    renderLarguras();
  }
}

// =============================================================
// FLUXO POR VEÍCULO
// =============================================================
function renderMarcas() {
  const db = window.PirelliDB;
  const container = document.getElementById('pm-fluxo-content');
  const marcas = db.marcas.filter(m => m !== 'CAOA CHERY');

  const brandLogos = {
    'AUDI':          'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Audi-Logo_2016.svg/120px-Audi-Logo_2016.svg.png',
    'BMW':           'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/120px-BMW.svg.png',
    'BYD':           'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/BYD_Auto_2022_logo.svg/120px-BYD_Auto_2022_logo.svg.png',
    'CHERY':         'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Chery_logo.svg/120px-Chery_logo.svg.png',
    'CHEVROLET':     '/logosmarcas/chevrolet.png',
    'CITROEN':       'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Citroen_2022.svg/120px-Citroen_2022.svg.png',
    'DODGE':         'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Dodge_logo.svg/120px-Dodge_logo.svg.png',
    'FIAT':          'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Fiat_Automobiles_logo.svg/120px-Fiat_Automobiles_logo.svg.png',
    'FORD':          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Ford_Motor_Company_Logo.svg/120px-Ford_Motor_Company_Logo.svg.png',
    'GEELY':         'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Geely_logo.svg/120px-Geely_logo.svg.png',
    'HONDA':         'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Honda_logo.svg/120px-Honda_logo.svg.png',
    'HYUNDAI':       'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Hyundai_Motor_Company_logo.svg/120px-Hyundai_Motor_Company_logo.svg.png',
    'JAC':           '/logosmarcas/jac.png',
    'JEEP':          'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Jeep_wordmark.svg/120px-Jeep_wordmark.svg.png',
    'KIA':           'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/KIA_logo.svg/120px-KIA_logo.svg.png',
    'LAND ROVER':    'https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Land_Rover_logo_black.svg/120px-Land_Rover_logo_black.svg.png',
    'LEXUS':         'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Lexus.svg/120px-Lexus.svg.png',
    'MAZDA':         'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Mazda_logo_2024_%28vertical%29.svg/120px-Mazda_logo_2024_%28vertical%29.svg.png',
    'MERCEDES-BENZ': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/120px-Mercedes-Logo.svg.png',
    'MINI':          '/logosmarcas/mini.png',
    'MITSUBISHI':    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Mitsubishi_logo.svg/120px-Mitsubishi_logo.svg.png',
    'NISSAN':        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Nissan_2020_logo.svg/120px-Nissan_2020_logo.svg.png',
    'PEUGEOT':       'https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/Peugeot_2021_Logo.svg/120px-Peugeot_2021_Logo.svg.png',
    'RAM':           'https://upload.wikimedia.org/wikipedia/en/e/e8/Ramchryslerlogo.png',
    'RENAULT':       'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Renault_Logo.svg/120px-Renault_Logo.svg.png',
    'SUBARU':        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Subaru_logo_%28transparent%29.svg/120px-Subaru_logo_%28transparent%29.svg.png',
    'TOYOTA':        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Toyota_carlogo.svg/120px-Toyota_carlogo.svg.png',
    'VOLKSWAGEN':    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Volkswagen_logo_2019.svg/120px-Volkswagen_logo_2019.svg.png',
    'VOLVO':         'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Volvo-Iron-Mark-Black.svg/120px-Volvo-Iron-Mark-Black.svg.png'
  };
  window._pirelliMarcaLogos = brandLogos;

  function marcaBtn(m) {
    const logo = brandLogos[m];
    if (logo) {
      return `<button class="pm-btn pm-btn-marca" onclick="pirelliSelecionaMarca('${m}')" style="display:flex; flex-direction:column; align-items:center; justify-content:center; gap:6px; padding:10px 6px; min-height:72px;">
        <img src="${logo}" alt="${m}" style="height:28px; max-width:80px; object-fit:contain;" onerror="this.style.display='none'">
        <span style="font-size:11px; color:#333; text-align:center; line-height:1.2;">${m}</span>
      </button>`;
    }
    return `<button class="pm-btn" onclick="pirelliSelecionaMarca('${m}')">${m}</button>`;
  }


  container.innerHTML = `
    <p class="pm-step-title">Selecione a Marca</p>
    <div style="position:relative; margin-bottom:12px;">
      <svg style="position:absolute; left:10px; top:50%; transform:translateY(-50%); pointer-events:none;" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#aaa" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
      <input type="text" class="pm-search" placeholder="Pesquisar marca..." oninput="filtrarMarcas(this.value)" id="busca-marca" style="padding-left:34px;">
    </div>
    <div style="position:relative; margin-bottom:16px;">
      <svg style="position:absolute; left:10px; top:50%; transform:translateY(-50%); pointer-events:none;" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#aaa" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
      <input type="text" class="pm-search" placeholder="Ou pesquise por modelo (ex: Gol, Corolla)..." oninput="filtrarModelosGlobal(this.value)" id="busca-modelo-global" style="padding-left:34px;">
    </div>
    <div id="lista-modelos-global" class="pm-grid-1" style="display:none; margin-bottom:16px;"></div>
    <div class="pm-grid" id="lista-marcas">
      ${marcas.map(m => marcaBtn(m)).join('')}
    </div>
  `;
}

window._todosModelos = null;
function getTodosModelos() {
  if (window._todosModelos) return window._todosModelos;
  const db = window.PirelliDB;
  const all = [];
  if (db && db.veiculos) {
    for (const marca in db.veiculos) {
      if (marca === 'CAOA CHERY') continue;
      for (const modelo in db.veiculos[marca]) {
        all.push({ marca, modelo });
      }
    }
  }
  window._todosModelos = all;
  return all;
}

function filtrarModelosGlobal(termo) {
  const listaGlobal = document.getElementById('lista-modelos-global');
  const listaMarcas = document.getElementById('lista-marcas');
  const buscaMarca = document.getElementById('busca-marca');
  
  if (termo && buscaMarca) buscaMarca.value = '';
  
  if (!termo || termo.trim().length < 2) {
    listaGlobal.style.display = 'none';
    listaMarcas.style.display = 'grid';
    return;
  }
  
  listaMarcas.style.display = 'none';
  listaGlobal.style.display = 'grid';
  
  const termoLower = termo.trim().toLowerCase();
  const todos = getTodosModelos();
  const filtrados = todos.filter(x => x.modelo.toLowerCase().includes(termoLower) || x.marca.toLowerCase().includes(termoLower));
  
  const sugestaoHtml = `
    <div style="text-align:center; padding:16px 10px; background:#fff5f7; border-radius:10px; border:1px solid #ffccd5; margin-top:8px;">
      <p style="color:#FF2B56; font-size:14px; font-weight:bold; margin-bottom:4px;">Não encontrou o modelo?</p>
      <p style="color:#666; font-size:12px; margin-bottom:12px;">Encontre facilmente pela medida do seu pneu (ex: 205/55 R16) clicando aqui.</p>
      <button onclick="pirelliSetFluxo('medida')" style="background:#FF2B56; color:#fff; border:none; padding:11px 20px; border-radius:30px; font-weight:bold; font-size:14px; cursor:pointer; width:100%; box-shadow: 0 4px 10px rgba(255,43,86,0.2); transition: all 0.2s;">
        Encontrar pela medida
      </button>
    </div>
  `;

  if (filtrados.length > 0) {
    listaGlobal.innerHTML = filtrados.map(x => 
      `<button class="pm-btn" onclick="pirelliSelecionaModeloGlobal('${x.marca}', '${x.modelo}')" style="display:flex; justify-content:space-between; align-items:center;">
        <span style="font-weight:bold; font-size:14px;">${x.modelo}</span>
        <span style="font-size:12px; color:#888;">${x.marca}</span>
      </button>`
    ).join('') + sugestaoHtml;
  } else {
    listaGlobal.innerHTML = sugestaoHtml;
  }
}

function pirelliSelecionaModeloGlobal(marca, modelo) {
  if (modalScrolling) return;
  pirelliState.marca = marca;
  pirelliState.modelo = modelo;
  renderAnos();
}

function filtrarMarcas(termo) {
  const buscaModeloGlobal = document.getElementById('busca-modelo-global');
  const listaGlobal = document.getElementById('lista-modelos-global');
  const lista = document.getElementById('lista-marcas');
  
  if (termo && buscaModeloGlobal) {
    buscaModeloGlobal.value = '';
    if (listaGlobal) listaGlobal.style.display = 'none';
  }
  if (lista) lista.style.display = 'grid';

  const db = window.PirelliDB;
  const filtradas = db.marcas.filter(m => m !== 'CAOA CHERY' && m.toLowerCase().includes(termo.toLowerCase()));
  lista.innerHTML = filtradas.map(m => {
    const logo = window._pirelliMarcaLogos ? window._pirelliMarcaLogos[m] : null;
    if (logo) {
      return `<button class="pm-btn pm-btn-marca" onclick="pirelliSelecionaMarca('${m}')" style="display:flex; flex-direction:column; align-items:center; justify-content:center; gap:6px; padding:10px 6px; min-height:72px;">
        <img src="${logo}" alt="${m}" style="height:28px; max-width:80px; object-fit:contain;" onerror="this.style.display='none'">
        <span style="font-size:11px; color:#333; text-align:center; line-height:1.2;">${m}</span>
      </button>`;
    }
    return `<button class="pm-btn" onclick="pirelliSelecionaMarca('${m}')">${m}</button>`;
  }).join('');
  if (!filtradas.length) lista.innerHTML = '<p style="color:#999;font-size:13px;">Nenhuma marca encontrada.</p>';
}

function pirelliSelecionaMarca(marca) {
  if (modalScrolling) return;
  pirelliState.marca = marca;
  renderModelos(marca);
}

function renderModelos(marca) {
  const modelos = window.PirelliDB.getModelos(marca);
  const container = document.getElementById('pm-fluxo-content');
  container.innerHTML = `
    <button class="pm-back" onclick="renderMarcas()">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>
      ${marca}
    </button>
    <p class="pm-step-title">Selecione o Modelo</p>
    <div style="position:relative; margin-bottom:12px;">
      <svg style="position:absolute; left:10px; top:50%; transform:translateY(-50%); pointer-events:none;" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#aaa" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
      <input type="text" class="pm-search" placeholder="Pesquisar modelo..." oninput="filtrarModelos('${marca}', this.value)" id="busca-modelo" style="padding-left:34px;">
    </div>
    <div class="pm-grid" id="lista-modelos">
      ${modelos.length ? modelos.map(m => `<button class="pm-btn" onclick="pirelliSelecionaModelo('${m}')">${m}</button>`).join('') : '<p style="color:#999;font-size:13px;padding:8px">Selecione o modelo no catálogo Pirelli ou use a busca por medida.</p>'}
    </div>
  `;
}

function filtrarModelos(marca, termo) {
  const modelos = window.PirelliDB.getModelos(marca);
  const lista = document.getElementById('lista-modelos');
  const filtrados = modelos.filter(m => m.toLowerCase().includes(termo.toLowerCase()));
  lista.innerHTML = filtrados.map(m => `<button class="pm-btn" onclick="pirelliSelecionaModelo('${m}')">${m}</button>`).join('');
  if (!filtrados.length) lista.innerHTML = '<p style="color:#999;font-size:13px;">Nenhum modelo encontrado.</p>';
}

function pirelliSelecionaModelo(modelo) {
  if (modalScrolling) return;
  pirelliState.modelo = modelo;
  renderAnos();
}

function renderAnos() {
  const db = window.PirelliDB;
  const anosReais = db.getAnosModelo(pirelliState.marca, pirelliState.modelo);
  // Se não tem no DB, usa uma lista genérica dos últimos 25 anos
  const anos = anosReais || (function(){
    const list = [];
    const hoje = new Date().getFullYear();
    for (let y = hoje; y >= hoje - 25; y--) list.push(String(y));
    return list;
  })();
  const container = document.getElementById('pm-fluxo-content');
  container.innerHTML = `
    <button class="pm-back" onclick="renderModelos('${pirelliState.marca}')">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>
      ${pirelliState.marca} › ${pirelliState.modelo}
    </button>
    <p class="pm-step-title">Selecione o Ano</p>
    <div class="pm-grid">
      ${anos.map(a => `<button class="pm-btn" onclick="pirelliSelecionaAno('${a}')">${a}</button>`).join('')}
    </div>
  `;
}

function pirelliSelecionaAno(ano) {
  if (modalScrolling) return;
  pirelliState.versao = null;
  pirelliState.pneuSelecionado = null;
  pirelliState.medidaSelecionada = null;
  pirelliState.ano = ano;
  renderVersoes();
}

function renderVersoes() {
  const db = window.PirelliDB;
  const versoes = db.getVersoesPorAno(pirelliState.marca, pirelliState.modelo, pirelliState.ano);
  const container = document.getElementById('pm-fluxo-content');
  container.innerHTML = `
    <button class="pm-back" onclick="renderAnos()">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>
      ${pirelliState.modelo} › ${pirelliState.ano}
    </button>
    <p class="pm-step-title">Selecione a Versão</p>
    <div class="pm-grid">
      ${versoes.map(v => `<button class="pm-btn" onclick="pirelliSelecionaVersao('${escapeStr(v)}')">${v}</button>`).join('')}
    </div>
  `;
}

function pirelliSelecionaVersao(versao) {
  if (modalScrolling) return;
  pirelliState.versao = versao;
  renderPneusVeiculo();
}

function escapeStr(s) { return s.replace(/'/g, "\\'"); }

function renderPneusVeiculo() {
  const db = window.PirelliDB;
  const medidas = db.getMedidasPorVersao(pirelliState.marca, pirelliState.modelo, pirelliState.ano, pirelliState.versao);
  const container = document.getElementById('pm-fluxo-content');

  // Montar lista de pneus com base na primeira medida
  const medidaPrincipal = medidas[0] || '205/55 R16';
  pirelliState.medidaSelecionada = medidaPrincipal; // salva a medida ativa
  const [larg, resto] = medidaPrincipal.split('/');
  const parts = (resto || '').split(' ');
  const perf = parts[0];
  const aro = (parts[1] || 'R16').replace('R', '');
  const pneus = window.PirelliDB.getPneusPorMedida(larg, perf, aro);

  container.innerHTML = `
    <button class="pm-back" onclick="renderVersoes()">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>
      ${pirelliState.modelo} ${pirelliState.ano} › ${pirelliState.versao}
    </button>
    <p class="pm-step-title">Medidas compatíveis para o seu veículo</p>
    <div class="pm-medida-row">
      ${medidas.map((m, i) => `<span class="pm-medida-tag ${i===0?'active':''}" onclick="pirelliSelecionaMedidaVeiculo('${m}', this)">${m}</span>`).join('')}
    </div>
    <div id="lista-pneus-veiculo">
      ${renderCardsPneus(pneus, medidaPrincipal)}
    </div>
    <div id="pm-qty-selector" style="display:none; align-items:center; justify-content:space-between; margin:15px 4px 10px; border-top:1px solid #f5f5f5; padding-top:15px;">
      <span style="font-size:14px; font-weight:500; color:#222;">Quantidade</span>
      <div style="display:flex; align-items:center; background:#f2f2f2; border-radius:30px; padding:3px 10px; gap:16px;">
        <button type="button" onclick="pirelliChangeQty(-1)" style="border:none; background:transparent; font-size:18px; cursor:pointer; color:#777; font-weight:bold; padding:2px 8px; outline:none; -webkit-tap-highlight-color:transparent;">−</button>
        <span id="pm-qty-val" style="font-size:14px; font-weight:bold; min-width:14px; text-align:center; color:#222;">1</span>
        <button type="button" onclick="pirelliChangeQty(1)" style="border:none; background:transparent; font-size:18px; cursor:pointer; color:#777; font-weight:bold; padding:2px 8px; outline:none; -webkit-tap-highlight-color:transparent;">+</button>
      </div>
    </div>
    <button class="pm-confirm-btn" id="btn-confirm-pneu" onclick="confirmarPneu()" disabled>Confirmar e Adicionar ao Carrinho</button>
  `;

  // Restaurar seleção de pneu e quantidade se houver
  if (pirelliState.pneuSelecionado) {
    setTimeout(() => {
      const p = db.pneus[pirelliState.pneuSelecionado];
      const btn = document.getElementById('btn-confirm-pneu');
      const qtySelector = document.getElementById('pm-qty-selector');
      const qtyVal = document.getElementById('pm-qty-val');
      
      if (qtySelector) qtySelector.style.display = 'flex';
      if (qtyVal) qtyVal.textContent = pirelliState.quantidade || 1;
      
      if (btn && p) {
        btn.disabled = false;
        const total = p.precoBase * (pirelliState.quantidade || 1);
        const totalFmt = total.toFixed(2).replace('.',',');
        btn.textContent = pirelliState.acao === 'buy' ? `Comprar agora | R$ ${totalFmt}` : `Adicionar ao carrinho | R$ ${totalFmt}`;
      }
    }, 0);
  }
}

function pirelliSelecionaMedidaVeiculo(medida, el) {
  if (modalScrolling) return;
  document.querySelectorAll('.pm-medida-tag').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  pirelliState.pneuSelecionado = null;
  pirelliState.medidaSelecionada = medida; // salva a medida clicada

  const [larg, resto] = medida.split('/');
  const parts = (resto || '').split(' ');
  const perf = parts[0];
  const aro = (parts[1] || 'R16').replace('R', '');
  const pneus = window.PirelliDB.getPneusPorMedida(larg, perf, aro);

  document.getElementById('lista-pneus-veiculo').innerHTML = renderCardsPneus(pneus, medida);
  document.getElementById('btn-confirm-pneu').disabled = true;
}

// =============================================================
// FLUXO POR MEDIDA
// =============================================================
function renderLarguras() {
  const db = window.PirelliDB;
  const larguras = db.getLarguras();
  const container = document.getElementById('pm-fluxo-content');
  container.innerHTML = `
    <p class="pm-step-title">Selecione a Largura do Pneu</p>
    <p style="font-size:12px;color:#888;margin:-8px 0 14px 0;">A largura em milímetros (ex: <strong>205</strong>/55 R16). É o número impresso na lateral do seu pneu.</p>
    <div class="pm-grid">
      ${larguras.map(l => `<button class="pm-btn" onclick="pirelliSelecionaLargura('${l}')">${l} mm</button>`).join('')}
    </div>
  `;
}

function pirelliSelecionaLargura(largura) {
  if (modalScrolling) return;
  pirelliState.largura = largura;
  renderPerfis(largura);
}

function renderPerfis(largura) {
  const db = window.PirelliDB;
  const perfis = db.getPerfis(largura);
  const container = document.getElementById('pm-fluxo-content');
  container.innerHTML = `
    <button class="pm-back" onclick="renderLarguras()">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>
      ${largura} mm
    </button>
    <p class="pm-step-title">Selecione o Perfil (Altura do Flanco)</p>
    <p style="font-size:12px;color:#888;margin:-8px 0 14px 0;">O perfil é a porcentagem da altura da parede do pneu em relação à largura (ex: 205/<strong>55</strong> R16). Quanto menor o número, mais baixo o perfil.</p>
    <div class="pm-grid">
      ${perfis.map(p => `<button class="pm-btn" onclick="pirelliSelecionaPerfil('${p}')">Perfil ${p}</button>`).join('')}
    </div>
  `;
}

function pirelliSelecionaPerfil(perfil) {
  if (modalScrolling) return;
  pirelliState.perfil = perfil;
  renderAros();
}

function renderAros() {
  const db = window.PirelliDB;
  const aros = db.getAros(pirelliState.largura, pirelliState.perfil);
  const container = document.getElementById('pm-fluxo-content');
  container.innerHTML = `
    <button class="pm-back" onclick="renderPerfis('${pirelliState.largura}')">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>
      ${pirelliState.largura}/${pirelliState.perfil}
    </button>
    <p class="pm-step-title">Selecione o Aro (Diâmetro da Roda)</p>
    <p style="font-size:12px;color:#888;margin:-8px 0 14px 0;">O aro é o diâmetro da roda em polegadas (ex: 205/55 <strong>R16</strong>). Encontre o número após o "R" na lateral do pneu.</p>
    <div class="pm-grid">
      ${aros.map(a => `<button class="pm-btn" onclick="pirelliSelecionaAro('${a}')">Aro ${a}"</button>`).join('')}
    </div>
  `;
}

function pirelliSelecionaAro(aro) {
  if (modalScrolling) return;
  pirelliState.aro = aro;
  renderPneusMedia();
}

function renderPneusMedia() {
  const medida = `${pirelliState.largura}/${pirelliState.perfil} R${pirelliState.aro}`;
  pirelliState.medidaSelecionada = medida; // salva para usar no confirmarPneu
  const pneus = window.PirelliDB.getPneusPorMedida(pirelliState.largura, pirelliState.perfil, pirelliState.aro);
  const container = document.getElementById('pm-fluxo-content');
  container.innerHTML = `
    <button class="pm-back" onclick="renderAros()">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>
      ${pirelliState.largura}/${pirelliState.perfil} R${pirelliState.aro}
    </button>
    <p class="pm-step-title">Pneus disponíveis para <strong>${medida}</strong></p>
    <div id="lista-pneus-medida">
      ${renderCardsPneus(pneus, medida)}
    </div>
    <div id="pm-qty-selector" style="display:none; align-items:center; justify-content:space-between; margin:15px 4px 10px; border-top:1px solid #f5f5f5; padding-top:15px;">
      <span style="font-size:14px; font-weight:500; color:#222;">Quantidade</span>
      <div style="display:flex; align-items:center; background:#f2f2f2; border-radius:30px; padding:3px 10px; gap:16px;">
        <button type="button" onclick="pirelliChangeQty(-1)" style="border:none; background:transparent; font-size:18px; cursor:pointer; color:#777; font-weight:bold; padding:2px 8px; outline:none; -webkit-tap-highlight-color:transparent;">−</button>
        <span id="pm-qty-val" style="font-size:14px; font-weight:bold; min-width:14px; text-align:center; color:#222;">1</span>
        <button type="button" onclick="pirelliChangeQty(1)" style="border:none; background:transparent; font-size:18px; cursor:pointer; color:#777; font-weight:bold; padding:2px 8px; outline:none; -webkit-tap-highlight-color:transparent;">+</button>
      </div>
    </div>
    <button class="pm-confirm-btn" id="btn-confirm-pneu" onclick="confirmarPneu()" disabled>Confirmar e Adicionar ao Carrinho</button>
  `;

  // Restaurar seleção de pneu e quantidade se houver
  if (pirelliState.pneuSelecionado) {
    setTimeout(() => {
      const p = window.PirelliDB.pneus[pirelliState.pneuSelecionado];
      const btn = document.getElementById('btn-confirm-pneu');
      const qtySelector = document.getElementById('pm-qty-selector');
      const qtyVal = document.getElementById('pm-qty-val');
      
      if (qtySelector) qtySelector.style.display = 'flex';
      if (qtyVal) qtyVal.textContent = pirelliState.quantidade || 1;
      
      if (btn && p) {
        btn.disabled = false;
        const total = p.precoBase * (pirelliState.quantidade || 1);
        const totalFmt = total.toFixed(2).replace('.',',');
        btn.textContent = pirelliState.acao === 'buy' ? `Comprar agora | R$ ${totalFmt}` : `Adicionar ao carrinho | R$ ${totalFmt}`;
      }
    }, 0);
  }
}

// =============================================================

// RENDER DOS CARDS DE PNEUS
// =============================================================
function renderCardsPneus(pneusIds, medida) {
  if (!pneusIds || !pneusIds.length) {
    return '<p style="color:#999;font-size:13px;padding:8px">Nenhum pneu encontrado para esta medida.</p>';
  }

  // Ordena os IDs de pneus de acordo com o precoBase (do mais caro para o mais barato)
  const sortedIds = [...pneusIds].sort((a, b) => {
    const pA = window.PirelliDB.pneus[a];
    const pB = window.PirelliDB.pneus[b];
    if (!pA || !pB) return 0;
    return pB.precoBase - pA.precoBase;
  });

  return sortedIds.map((id, index) => {
    const p = window.PirelliDB.pneus[id];
    if (!p) return '';
    const originalFmt = p.precoOriginal ? `R$ ${p.precoOriginal.toFixed(2).replace('.',',')}` : '';
    
    // Selo de Recomendado / Mais Vendido com SVG personalizado em amarelo
    const badgeHtml = index === 0 ? `
      <div style="position:absolute; top:8px; right:8px; display:flex; gap:4px; align-items:center; z-index:10;">
        <span style="background:#FF2B56; color:#fff; font-size:9px; font-weight:bold; padding:3px 6px; border-radius:4px; text-transform:uppercase; display:flex; align-items:center; box-shadow: 0 1px 3px rgba(0,0,0,0.15);">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="#FFD700" style="margin-right:3px; display:inline-block; vertical-align:middle;"><path d="M17.6 11.5C17.4 7.6 15 5.5 13.5 3c-.2.5-.4 1-.4 1.5 0 2-2.5 3-3 5-.5 1.5.3 3.5.3 3.5s-1.5-1-2-2.5c-.5-1.5-.2-3.3-.2-3.3S6 9.5 6 14c0 3.3 2.7 6 6 6s6-2.7 6-6c0-1-.2-1.8-.4-2.5z"/></svg>
          Mais Vendido
        </span>
        <span style="background:#222; color:#fff; font-size:9px; font-weight:bold; padding:3px 6px; border-radius:4px; text-transform:uppercase; display:flex; align-items:center; box-shadow: 0 1px 3px rgba(0,0,0,0.15);">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="#FFD700" style="margin-right:3px; display:inline-block; vertical-align:middle;"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
          Recomendado
        </span>
      </div>
    ` : '';

    const cardClass = 'pm-pneu-card';
    const checkClass = 'pm-check';
    const checkIcon = '';

    return `
      <div class="${cardClass}" id="card-${id}" onclick="selecionarPneu('${id}', '${medida}')" style="position:relative;">
        ${badgeHtml}
        <img class="pm-pneu-img" src="${p.imagem}" onerror="this.style.display='none'" alt="${p.nome}">
        <div class="pm-pneu-info">
          <div class="pm-pneu-nome" style="padding-right: 120px;">${p.nome}</div>
          <div class="pm-pneu-cat">${p.categoria}</div>
          <div class="pm-pneu-preco" style="display:flex; align-items:baseline; gap:5px; flex-wrap:wrap;">
            ${originalFmt ? `<span style="font-size:11px; text-decoration:line-through; color:#999; font-weight:normal; margin-right:4px;">${originalFmt}</span>` : ''}
            <span>R$ ${p.precoBase.toFixed(2).replace('.',',')}</span>
          </div>
          <span class="pm-pneu-medida">${medida}</span>
        </div>
        <div class="${checkClass}" id="check-${id}">${checkIcon}</div>
      </div>
    `;
  }).join('');
}

function selecionarPneu(id, medida) {
  if (modalScrolling) return;
  pirelliState.pneuSelecionado = id;
  pirelliState.quantidade = 1;

  // Mostrar seletor de quantidade e resetar valor
  const qtySelector = document.getElementById('pm-qty-selector');
  if (qtySelector) qtySelector.style.display = 'flex';
  const qtyVal = document.getElementById('pm-qty-val');
  if (qtyVal) qtyVal.textContent = '1';

  // Atualizar visual dos cards
  document.querySelectorAll('.pm-pneu-card').forEach(c => c.classList.remove('selected'));
  document.querySelectorAll('.pm-check').forEach(c => { c.classList.remove('ok'); c.innerHTML = ''; });

  const card = document.getElementById('card-' + id);
  const check = document.getElementById('check-' + id);
  if (card) card.classList.add('selected');
  if (check) { check.classList.add('ok'); check.innerHTML = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>'; }

  // Habilitar botão confirmar
  const btn = document.getElementById('btn-confirm-pneu');
  if (btn) {
    btn.disabled = false;
    const p = window.PirelliDB.pneus[id];
    btn.textContent = pirelliState.acao === 'buy' ? `Comprar agora | R$ ${p.precoBase.toFixed(2).replace('.',',')}` : `Adicionar ao carrinho | R$ ${p.precoBase.toFixed(2).replace('.',',')}`;
  }

  // Atualizar preço na página
  const priceEl = document.getElementById('pirelli-price-display');
  if (priceEl) {
    const p = window.PirelliDB.pneus[id];
    priceEl.innerHTML = `<span>${p.precoBase.toFixed(2).replace('.',',')}</span>`;
  }

  // Atualizar preço original riscado na página
  const originalPriceEl = document.querySelector('.price-original');
  if (originalPriceEl) {
    const p = window.PirelliDB.pneus[id];
    if (p.precoOriginal) {
      originalPriceEl.textContent = `R$ ${p.precoOriginal.toFixed(2).replace('.',',')}`;
    }
  }

  // Atualizar badge de porcentagem de desconto na página
  const discountBadgeEl = document.querySelector('.discount-badge-white');
  if (discountBadgeEl) {
    const p = window.PirelliDB.pneus[id];
    if (p.precoOriginal && p.precoBase) {
      const pct = Math.round((1 - p.precoBase / p.precoOriginal) * 100);
      discountBadgeEl.textContent = `-${pct}%`;
    }
  }

  // Atualizar título
  const titleEl = document.getElementById('pirelli-title-display');
  if (titleEl) {
    const p = window.PirelliDB.pneus[id];
    titleEl.textContent = `${p.nome} - ${medida}`;
  }

  // Sincronizar e recriar o slider principal da página com as fotos do pneu selecionado
  const p = window.PirelliDB.pneus[id];
  if (p && p.imagens && p.imagens.length > 0) {
    const sliderTrack = document.querySelector('.image-slider .slider-track');
    const sliderEl = document.querySelector('.image-slider');
    if (sliderTrack && sliderEl) {
      let trackHtml = '';
      p.imagens.forEach(img => {
        trackHtml += `<img class="slider-img" src="${img}" alt="${p.nome}">`;
      });
      sliderTrack.innerHTML = trackHtml;
      if (typeof initSlider === 'function') {
        initSlider(sliderEl);
      }
    }
  } else if (p && p.imagem) {
    const sliderTrack = document.querySelector('.image-slider .slider-track');
    const sliderEl = document.querySelector('.image-slider');
    if (sliderTrack && sliderEl) {
      sliderTrack.innerHTML = `<img class="slider-img" src="${p.imagem}" alt="${p.nome}">`;
      if (typeof initSlider === 'function') {
        initSlider(sliderEl);
      }
    }
  }
}

function confirmarPneu() {
  if (!pirelliState.pneuSelecionado) return;

  const p = window.PirelliDB.pneus[pirelliState.pneuSelecionado];
  // Usa medida do fluxo de veículo (medidaSelecionada) ou constrói do fluxo por medida
  const medida = pirelliState.medidaSelecionada
    || (pirelliState.aro ? `${pirelliState.largura}/${pirelliState.perfil} R${pirelliState.aro}` : '');
  const qty = pirelliState.quantidade || 1;

  // Montar produto para o carrinho com variação específica
  const produto = {
    id: 101,
    nome: 'Pneus Pirelli',
    preco: p.precoBase,
    precoOrig: p.precoOriginal,
    img: p.imagem,
    imagens: p.imagens || [p.imagem],
    variacao: `${p.nome}${medida ? ' - ' + medida : ''}`
  };

  // Adicionar ao carrinho (função global da loja)
  if (typeof addToCart === 'function') {
    addToCart(produto, qty);
  }

  closePirelliModal();

  if (pirelliState.acao === 'buy') {
    window.location.href = 'carrinho.html';
  } else {
    if (typeof window.animateFlyToCart === 'function') {
      // Sincroniza temporariamente para a imagem voadora corresponder ao pneu escolhido
      window.PRODUTO_ATUAL = produto;
      window.animateFlyToCart();
    } else if (typeof showToast === 'function') {
      showToast('✅ Pneu Pirelli adicionado ao carrinho!');
    }
  }
}

function pirelliChangeQty(delta) {
  if (!pirelliState.quantidade) pirelliState.quantidade = 1;
  pirelliState.quantidade = Math.max(1, pirelliState.quantidade + delta);
  const qtyVal = document.getElementById('pm-qty-val');
  if (qtyVal) qtyVal.textContent = pirelliState.quantidade;
  
  // Atualizar valor do botão confirmar
  const btn = document.getElementById('btn-confirm-pneu');
  if (btn && pirelliState.pneuSelecionado) {
    const p = window.PirelliDB.pneus[pirelliState.pneuSelecionado];
    const total = p.precoBase * pirelliState.quantidade;
    const totalFmt = total.toFixed(2).replace('.',',');
    btn.textContent = pirelliState.acao === 'buy' ? `Comprar agora | R$ ${totalFmt}` : `Adicionar ao carrinho | R$ ${totalFmt}`;
  }
}
