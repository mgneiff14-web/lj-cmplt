// =============================================================
// LÓGICA E UI DOS VÍDEOS DOS CRIADORES — js/videos-criadores.js
// =============================================================

(function() {
  // Lista de criadores e seus vídeos/fotos de perfil correspondentes (com nomes reais baseados nas fotos)
  const CREATORS_DATA = [
    {
      name: "Império Neumáticos",
      username: "imperioneumaticos",
      avatar: "../fotodeperfildoscriadores/WhatsApp Image 2026-07-27 at 19.37.32.jpeg",
      video: "../videosdoscriadorespneu/WhatsApp Video 2026-07-27 at 19.36.22.mp4",
      likes: 4402,
      commentsCount: 28,
      saves: 915,
      shares: 175,
      description: "Pneu Pirelli é bom? Mostramos os principais pontos técnicos que influenciam na escolha do pneu ideal para o seu veículo! #pirelli #pneus"
    },
    {
      name: "Auto Soft",
      username: "autosoft",
      avatar: "../fotodeperfildoscriadores/WhatsApp Image 2026-07-27 at 19.37.33 (1).jpeg",
      video: "../videosdoscriadorespneu/WhatsApp Video 2026-07-27 at 19.36.26.mp4",
      likes: 8912,
      commentsCount: 21,
      saves: 456,
      shares: 89,
      description: "Super dica de calibragem dos pneus Pirelli! Economiza combustível e aumenta a vida útil da borracha. Confere aí! 🚗🔥"
    },
    {
      name: "Gerardo Bastos",
      username: "gerardobastos",
      avatar: "../fotodeperfildoscriadores/WhatsApp Image 2026-07-27 at 19.37.33 (2).jpeg",
      video: "../videosdoscriadorespneu/WhatsApp Video 2026-07-27 at 19.36.27.mp4",
      likes: 12304,
      commentsCount: 25,
      saves: 812,
      shares: 230,
      description: "Mostrando a incrível tecnologia Seal Inside do Pirelli Cinturato P7. Fura e não perde o ar na hora! Sensacional!"
    },
    {
      name: "Alpha Centro Automotivo",
      username: "alphacentro",
      avatar: "../fotodeperfildoscriadores/WhatsApp Image 2026-07-27 at 19.37.33 (3).jpeg",
      video: "../videosdoscriadorespneu/WhatsApp Video 2026-07-27 at 19.36.32.mp4",
      likes: 5120,
      commentsCount: 19,
      saves: 310,
      shares: 64,
      description: "Por que escolher o Pirelli P Zero para o seu esportivo? Aderência absurda nas curvas e resposta imediata. 🏁⚡"
    },
    {
      name: "Etika Pneus",
      username: "etikapneus",
      avatar: "../fotodeperfildoscriadores/WhatsApp Image 2026-07-27 at 19.37.33 (4).jpeg",
      video: "../videosdoscriadorespneu/WhatsApp Video 2026-07-27 at 19.36.35.mp4",
      likes: 3840,
      commentsCount: 18,
      saves: 220,
      shares: 45,
      description: "Testando o Pirelli Scorpion ATR no off-road e na terra. Aguentou todos os buracos sem derrapar. Muito seguro!"
    },
    {
      name: "U Pneus",
      username: "upneus",
      avatar: "../fotodeperfildoscriadores/WhatsApp Image 2026-07-27 at 19.37.33.jpeg",
      video: "../videosdoscriadorespneu/WhatsApp Video 2026-07-27 at 19.36.40.mp4",
      likes: 9721,
      commentsCount: 27,
      saves: 742,
      shares: 180,
      description: "Diferença técnica do Cinturato P1 pro Cinturato P7. Qual vale mais a pena pro seu bolso no dia a dia? Veja o comparativo."
    },
    {
      name: "SuperSim Pneus",
      username: "supersimpneus",
      avatar: "../fotodeperfildoscriadores/WhatsApp Image 2026-07-27 at 19.37.34 (1).jpeg",
      video: "../videosdoscriadorespneu/WhatsApp Video 2026-07-27 at 19.36.41.mp4",
      likes: 6540,
      commentsCount: 20,
      saves: 412,
      shares: 98,
      description: "Instalei os pneus Pirelli no meu hatch de uso diário. Silencioso e macio demais. Custo benefício aprovado!"
    },
    {
      name: "Gu Pneus Usados",
      username: "gupneus",
      avatar: "../fotodeperfildoscriadores/WhatsApp Image 2026-07-27 at 19.37.34 (2).jpeg",
      video: "../videosdoscriadorespneu/WhatsApp Video 2026-07-27 at 19.36.43.mp4",
      likes: 11200,
      commentsCount: 24,
      saves: 680,
      shares: 154,
      description: "Dicas de segurança: como conferir as marcações oficiais do pneu Pirelli e a garantia oficial. Fique ligado!"
    },
    {
      name: "Pavlikanidis Tyres",
      username: "pavlikanidistyres",
      avatar: "../fotodeperfildoscriadores/WhatsApp Image 2026-07-27 at 19.37.34 (3).jpeg",
      video: "../videosdoscriadorespneu/WhatsApp Video 2026-07-27 at 19.36.48.mp4",
      likes: 7820,
      commentsCount: 22,
      saves: 530,
      shares: 110,
      description: "Pneu Scorpion Verde no Jeep Compass. Rodando macio e com consumo de combustível excelente. Aprovadíssimo! 👍"
    },
    {
      name: "Adão Auto Center",
      username: "adaoautocenter",
      avatar: "../fotodeperfildoscriadores/WhatsApp Image 2026-07-27 at 19.37.34 (4).jpeg",
      video: "../videosdoscriadorespneu/WhatsApp Video 2026-07-27 at 19.36.52.mp4",
      likes: 4980,
      commentsCount: 17,
      saves: 280,
      shares: 50,
      description: "Testando a frenagem do Pirelli Powergy no asfalto molhado. A frenagem ficou extremamente curta. Seguro demais!"
    },
    {
      name: "T Pneus",
      username: "tpneus",
      avatar: "../fotodeperfildoscriadores/WhatsApp Image 2026-07-27 at 19.37.34 (5).jpeg",
      video: "../videosdoscriadorespneu/WhatsApp Video 2026-07-27 at 19.36.53.mp4",
      likes: 14150,
      commentsCount: 29,
      saves: 980,
      shares: 290,
      description: "Comprei os novos pneus Pirelli pelo site com frete grátis e chegou super bem embalado em 3 dias úteis! Recomendo!"
    },
    {
      name: "Du Marcelo Pneus",
      username: "dumarcelopneus",
      avatar: "../fotodeperfildoscriadores/WhatsApp Image 2026-07-27 at 19.37.34.jpeg",
      video: "../videosdoscriadorespneu/WhatsApp Video 2026-07-27 at 19.37.01.mp4",
      likes: 2940,
      commentsCount: 23,
      saves: 180,
      shares: 35,
      description: "Pneu P400 EVO Pirelli: máxima durabilidade. Rodando há mais de 30 mil km e os sulcos ainda estão perfeitos. Veja!"
    },
    {
      name: "Freguesia Pneus",
      username: "freguesiapneus",
      avatar: "../fotodeperfildoscriadores/WhatsApp Image 2026-07-27 at 19.37.35.jpeg",
      video: "../videosdoscriadorespneu/WhatsApp Video 2026-07-27 at 19.37.04.mp4",
      likes: 6902,
      commentsCount: 26,
      saves: 440,
      shares: 102,
      description: "Pneu Pirelli balanceado e instalado. O visual do carro mudou completamente. Rodagem silenciosa garantida."
    }
  ];

  // Avatares FEMININOS reais mapeados do diretório FOTOSDEPERFIL
  const AVATARS_FEMININOS = [
    "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.18.jpeg",
    "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.18 (2).jpeg",
    "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.18 (4).jpeg",
    "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.20 (2).jpeg",
    "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.19 (3).jpeg",
    "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.18 (3).jpeg",
    "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.17.jpeg",
    "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.19 (4).jpeg",
    "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.18 (5).jpeg",
    "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.17 (5).jpeg",
    "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.11 (2).jpeg",
    "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.20 (1).jpeg",
    "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.17 (2).jpeg",
    "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.19.jpeg",
    "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.16.jpeg",
    "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.17 (4).jpeg",
    "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.17 (1).jpeg"
  ];

  // Avatares MASCULINOS reais mapeados do diretório FOTOSDEPERFIL
  const AVATARS_MASCULINOS = [
    "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.13 (2).jpeg",
    "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.11.jpeg",
    "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.13 (5).jpeg",
    "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.20 (3).jpeg",
    "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.14 (3).jpeg",
    "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.14 (2).jpeg",
    "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.14 (4).jpeg",
    "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.12 (1).jpeg",
    "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.20.jpeg",
    "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.19 (1).jpeg",
    "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.13.jpeg",
    "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.15 (3).jpeg",
    "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.15 (2).jpeg",
    "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.18 (1).jpeg",
    "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.12 (2).jpeg",
    "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.15.jpeg",
    "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.16 (1).jpeg",
    "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.15 (1).jpeg",
    "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.21 (1).jpeg",
    "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.13 (4).jpeg",
    "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.13 (1).jpeg",
    "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.12 (3).jpeg",
    "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.21.jpeg",
    "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.19 (2).jpeg",
    "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.14.jpeg",
    "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.12 (4).jpeg",
    "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.14 (5).jpeg",
    "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.11 (1).jpeg",
    "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.14 (1).jpeg",
    "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.16 (4).jpeg",
    "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.13 (3).jpeg",
    "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.12.jpeg",
    "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.20 (5).jpeg",
    "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.21 (2).jpeg",
    "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.15 (4).jpeg",
    "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.15 (5).jpeg",
    "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.16 (3).jpeg",
    "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.16 (2).jpeg",
    "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.17 (3).jpeg",
    "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.20 (4).jpeg",
    "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.21 (3).jpeg"
  ];

  // Nomes femininos para separação de gênero
  const NOMES_FEMININOS = ["camila", "larissa", "aninha", "gabi"];

  function getAvatarByGender(username) {
    const nameLower = username.toLowerCase();
    const isFem = NOMES_FEMININOS.some(n => nameLower.startsWith(n));
    
    // Calcula um hash numérico simples a partir da string do nome do usuário
    let hash = 0;
    for (let i = 0; i < username.length; i++) {
      hash = (hash << 5) - hash + username.charCodeAt(i);
      hash |= 0; // Converte para inteiro de 32 bits
    }
    const idx = Math.abs(hash);

    if (isFem) {
      return AVATARS_FEMININOS[idx % AVATARS_FEMININOS.length];
    } else {
      return AVATARS_MASCULINOS[idx % AVATARS_MASCULINOS.length];
    }
  }

  // Comentários realistas em português
  const SAMPLE_COMMENTS = [
    "pneu excelente, recomendo demais!",
    "coloquei o cinturato p7 e achei muito macio no asfalto",
    "a entrega foi rápida mesmo? to precisando pro final de semana",
    "Pirelli original de verdade, vale cada centavo",
    "estava na dúvida se era bom, mas o vídeo tirou todas as dúvidas",
    "coloquei no meu civic e a estabilidade melhorou muito",
    "preço show de bola aqui no site",
    "a tecnologia seal inside funciona mesmo? mt top",
    "melhor custo benefício pra quem roda no dia a dia",
    "acabou o barulho de rolagem que tinha no meu carro antigo",
    "comprei 4 pneus e chegou tudo perfeito e rápido",
    "Pirelli é outro nível, durabilidade excelente",
    "já rodei 15 mil km e o pneu tá novinho ainda",
    "comprei pelo seletor de veículo e deu certinho no meu onix",
    "borracha muito fresca, DOT de fabricação recente",
    "esse frete grátis ajudou demais na compra",
    "uso o scorpion atr e aguenta muito no barro",
    "muito bom o vídeo explicativo!",
    "fiz o balanceamento hoje e ficou 100% alinhado",
    "sempre uso Pirelli, confio de olhos fechados",
    "entrega rápida, comprei no pix e enviaram na hora",
    "esse p zero é monstro demais, instalei e ficou show",
    "excelente vídeo, bem direto ao ponto",
    "Pirelli original por esse preço tá de graça",
    "Chegou super bem embalado",
    "O melhor pneu pra chuva sem dúvidas"
  ];

  const USERNAME_PREFIXES = ["marcos_", "carlos.", "felipe_", "camila_", "larissa.", "rod_", "gabi_", "lucas.", "diogo_", "aninha_"];

  function generateRandomComment(idx) {
    const prefix = USERNAME_PREFIXES[idx % USERNAME_PREFIXES.length];
    const suffix = idx * 17 % 100;
    const user = `${prefix}${suffix}`;
    // Usa avatar baseado no gênero do nome para evitar duplicação e inconsistência
    const avatar = getAvatarByGender(user);
    const text = SAMPLE_COMMENTS[idx % SAMPLE_COMMENTS.length];
    
    // data do tiktok no estilo 5-7, 2025-11-7, 2025-10-13 como na foto
    const dates = ["5-7", "2025-11-7", "2025-10-13", "4-17", "2025-09-21"];
    const date = dates[idx % dates.length];
    
    // curtidas do comentário - garante que todos tenham curtidas iniciais e exibam o coração
    const likes = Math.floor(((idx * 7) % 85) + 15);

    return { avatar, user, text, date, likes, liked: false };
  }

  // Elementos globais do modal TikTok
  let ttModal = null;
  let ttVideo = null;
  let ttLoader = null;
  let currentVideoIndex = 0;
  let videoList = [];

  // Injeta estilos CSS necessários para o layout
  function injectStyles() {
    if (document.getElementById('tt-styles')) return;
    const style = document.createElement('style');
    style.id = 'tt-styles';
    style.innerHTML = `
      /* Estilos do Carrossel */
      .creators-section {
        padding: 16px;
        background: #ffffff;
        margin-bottom: 8px;
        border-bottom: 8px solid #f5f5f5;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      }
      .creators-title {
        font-size: 16px;
        font-weight: bold;
        color: #000;
        margin-bottom: 12px;
      }
      .creators-carousel {
        display: flex;
        gap: 8px;
        overflow-x: auto;
        padding: 0 4px 8px 4px;
        scroll-behavior: smooth;
        -webkit-overflow-scrolling: touch;
      }
      .creators-carousel::-webkit-scrollbar {
        display: none;
      }
      .creators-carousel {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
      
      .creator-card {
        position: relative;
        flex: 0 0 92px;
        height: 150px;
        border-radius: 8px;
        overflow: hidden;
        background: #000;
        cursor: pointer;
        user-select: none;
      }
      .creator-card video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.85;
      }
      .creator-card-play-btn {
        position: absolute;
        top: 8px;
        left: 8px;
        width: 22px;
        height: 22px;
        background: rgba(255, 255, 255, 0.25);
        backdrop-filter: blur(4px);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2;
      }
      .creator-card-play-btn svg {
        fill: #fff;
        width: 10px;
        height: 10px;
        margin-left: 1px;
      }
      .creator-card-info {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 6px;
        background: linear-gradient(transparent, rgba(0,0,0,0.85));
        display: flex;
        align-items: center;
        gap: 5px;
        z-index: 2;
        box-sizing: border-box;
      }
      .creator-card-avatar {
        width: 18px;
        height: 18px;
        border-radius: 50%;
        object-fit: cover;
        border: 1px solid #fff;
        flex-shrink: 0;
      }
      .creator-card-name {
        font-size: 10px;
        font-weight: bold;
        color: #fff;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        flex: 1;
        text-shadow: 0 1px 2px rgba(0,0,0,0.6);
      }

      /* TikTok Modal */
      .tt-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #000;
        z-index: 999999;
        display: none;
        align-items: center;
        justify-content: center;
      }
      .tt-container {
        width: 100%;
        height: 100%;
        max-width: 480px;
        position: relative;
        background: #000;
        display: flex;
        flex-direction: column;
        justify-content: center;
        overflow: hidden;
      }
      .tt-video-wrapper {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #000;
      }
      .tt-video {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      /* Loader TikTok Bouncing/Orbiting */
      .tt-loader {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #000;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10;
      }
      .tt-loader-dots {
        position: relative;
        width: 32px;
        height: 16px;
      }
      .tt-loader-dot {
        position: absolute;
        width: 14px;
        height: 14px;
        border-radius: 50%;
      }
      .tt-loader-dot.cyan {
        background: #00f2fe;
        animation: ttMoveCyan 0.8s infinite ease-in-out;
      }
      .tt-loader-dot.pink {
        background: #fe2c55;
        animation: ttMovePink 0.8s infinite ease-in-out;
      }
      @keyframes ttMoveCyan {
        0%, 100% { transform: translateX(-10px) scale(1); z-index: 2; }
        50% { transform: translateX(10px) scale(0.85); z-index: 1; }
      }
      @keyframes ttMovePink {
        0%, 100% { transform: translateX(10px) scale(0.85); z-index: 1; }
        50% { transform: translateX(-10px) scale(1); z-index: 2; }
      }

      /* Top Header Overlays - Igualzinho ao print */
      .tt-top-bar {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        padding: 12px;
        background: linear-gradient(rgba(0,0,0,0.6), transparent);
        display: flex;
        align-items: center;
        gap: 8px;
        z-index: 5;
        box-sizing: border-box;
      }
      .tt-back-btn {
        background: none;
        border: none;
        color: #fff;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 4px;
      }
      .tt-search-container {
        flex: 1;
        background: rgba(255, 255, 255, 0.15);
        border: 1px solid rgba(255, 255, 255, 0.5);
        border-radius: 20px;
        display: flex;
        align-items: center;
        padding: 6px 14px;
        gap: 8px;
      }
      .tt-search-input {
        flex: 1;
        background: none;
        border: none;
        color: #fff;
        font-size: 14px;
        outline: none;
        font-family: inherit;
      }
      .tt-search-input::placeholder {
        color: rgba(255,255,255,0.85);
      }
      .tt-search-btn {
        background: none;
        border: none;
        color: #fff;
        font-weight: bold;
        font-size: 14px;
        cursor: pointer;
        border-left: 1px solid rgba(255,255,255,0.3);
        padding-left: 10px;
        font-family: inherit;
      }

      /* Right Sidebar Action Icons */
      .tt-right-actions {
        position: absolute;
        right: 12px;
        bottom: 80px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
        z-index: 5;
      }
      .tt-creator-wrapper {
        position: relative;
        margin-bottom: 4px;
      }
      .tt-creator-avatar {
        width: 44px;
        height: 44px;
        border-radius: 50%;
        border: 1.5px solid #fff;
        object-fit: cover;
      }
      .tt-follow-btn {
        position: absolute;
        bottom: -6px;
        left: 50%;
        transform: translateX(-50%);
        width: 18px;
        height: 18px;
        background: #fe2c55;
        border: none;
        border-radius: 50%;
        color: #fff;
        font-size: 12px;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        outline: none;
      }
      .tt-follow-btn.followed {
        background: #25D366 !important;
        transform: translateX(-50%) scale(0);
        opacity: 0;
      }
      .tt-action-btn {
        background: none;
        border: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #fff;
        cursor: pointer;
        gap: 4px;
        outline: none;
        padding: 0;
      }
      .tt-action-btn svg {
        filter: drop-shadow(0 1px 2px rgba(0,0,0,0.5));
        transition: transform 0.15s ease;
      }
      .tt-action-btn:active svg {
        transform: scale(0.9);
      }
      .tt-action-btn.active svg {
        fill: #fe2c55;
      }
      .tt-action-btn.active.save svg {
        fill: #face15;
      }
      .tt-action-label {
        font-size: 12px;
        font-weight: 600;
        text-shadow: 0 1px 2px rgba(0,0,0,0.8);
      }
      
      /* Spinning Music Record */
      .tt-music-record {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background: radial-gradient(circle, #333 30%, #111 80%);
        border: 4px solid #222;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: ttSpin 3s linear infinite;
        margin-top: 6px;
      }
      .tt-music-record img {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        object-fit: cover;
      }
      @keyframes ttSpin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }

      /* Left Description Text overlay */
      .tt-left-info {
        position: absolute;
        left: 12px;
        bottom: 12px;
        right: 80px;
        z-index: 5;
        color: #fff;
        text-shadow: 0 1px 3px rgba(0,0,0,0.8);
        font-family: inherit;
      }
      .tt-creator-name {
        font-size: 15px;
        font-weight: bold;
        margin-bottom: 6px;
        display: flex;
        align-items: center;
        gap: 4px;
      }
      .tt-video-desc {
        font-size: 13px;
        line-height: 1.4;
        max-height: 54px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }

      /* Drawer de Comentários TikTok - Idêntico ao print */
      .tt-comments-drawer {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 65%;
        background: #ffffff;
        border-radius: 12px 12px 0 0;
        z-index: 100;
        transform: translateY(100%);
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        display: flex;
        flex-direction: column;
        color: #000;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      }
      .tt-comments-drawer.open {
        transform: translateY(0);
      }
      .tt-comments-header {
        padding: 14px 16px;
        border-bottom: 1px solid #f2f2f2;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 13px;
        font-weight: bold;
        flex-shrink: 0;
        gap: 4px;
      }
      .tt-comments-header-title {
        display: flex;
        align-items: center;
        gap: 4px;
      }
      .tt-comments-close {
        position: absolute;
        right: 16px;
        background: none;
        border: none;
        font-size: 20px;
        color: #161823;
        cursor: pointer;
        outline: none;
        padding: 0;
      }
      .tt-comments-list {
        flex: 1;
        overflow-y: auto;
        padding: 12px 16px;
      }
      .tt-comment-item {
        display: flex;
        gap: 12px;
        margin-bottom: 18px;
        align-items: flex-start;
      }
      .tt-comment-avatar {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        object-fit: cover;
        flex-shrink: 0;
      }
      .tt-comment-content {
        flex: 1;
      }
      .tt-comment-user {
        font-size: 13px;
        font-weight: 600;
        color: #8a8a8f;
        margin-bottom: 2px;
      }
      .tt-comment-text {
        font-size: 14px;
        color: #161823;
        line-height: 1.35;
      }
      .tt-comment-meta {
        font-size: 12px;
        color: #8a8a8f;
        margin-top: 4px;
        display: flex;
        gap: 14px;
        align-items: center;
      }
      .tt-comment-meta-reply {
        font-weight: bold;
        cursor: pointer;
      }
      .tt-comment-actions {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        color: #8a8a8f;
        flex-shrink: 0;
        align-self: center;
      }
      .tt-comment-like-btn, .tt-comment-dislike-btn {
        background: none;
        border: none;
        color: #8a8a8f;
        cursor: pointer;
        padding: 0;
        outline: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2px;
      }
      .tt-comment-like-btn svg {
        width: 20px !important;
        height: 20px !important;
        flex-shrink: 0;
      }
      .tt-comment-like-btn.active {
        color: #fe2c55;
      }
      .tt-comment-like-count {
        font-size: 11px;
      }
      .tt-comment-badge {
        font-size: 10px;
        background: #f1f1f2;
        color: #8a8a8f;
        padding: 2px 6px;
        border-radius: 4px;
        display: inline-block;
        margin-top: 4px;
        font-weight: 600;
      }

      /* Input inferior do drawer de comentários - Sem foto à esquerda conforme pedido */
      .tt-comments-input-bar {
        padding: 10px 16px;
        border-top: 1px solid #f2f2f2;
        background: #fff;
        flex-shrink: 0;
      }
      .tt-comment-input-wrapper {
        position: relative;
        width: 100%;
        display: flex;
        align-items: center;
      }
      .tt-comment-input {
        width: 100%;
        background: #f1f1f2;
        border: none;
        border-radius: 22px;
        padding: 10px 100px 10px 16px;
        font-size: 14px;
        outline: none;
        color: #000;
        box-sizing: border-box;
      }
      .tt-comment-input::placeholder {
        color: #8a8a8f;
      }
      .tt-input-icons {
        position: absolute;
        right: 12px;
        display: flex;
        align-items: center;
        gap: 10px;
      }
      .tt-input-icon {
        cursor: pointer;
        display: flex;
        align-items: center;
        color: #161823;
      }
    `;
    document.head.appendChild(style);
  }

  // Formata o número (ex: 4402 -> 4.402)
  function formatNumber(num) {
    return num.toLocaleString('pt-BR');
  }

  // Gera poster via canvas (captura real do primeiro frame do video) para cada card do carrossel
  function generatePosterForCard(card, videoSrc) {
    const posterDiv = card.querySelector('.creator-card-poster');
    if (!posterDiv) return;

    const vid = document.createElement('video');
    vid.src = videoSrc;
    vid.muted = true;
    vid.playsInline = true;
    vid.preload = 'metadata';
    vid.crossOrigin = 'anonymous';

    const tryCapture = function() {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = 180;
        canvas.height = 320;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(vid, 0, 0, canvas.width, canvas.height);
        const dataUrl = canvas.toDataURL('image/jpeg', 0.7);
        // Verifica se o canvas nao gerou uma imagem vazia
        if (dataUrl && dataUrl.length > 2000) {
          posterDiv.style.backgroundImage = `url('${dataUrl}')`;
          posterDiv.style.backgroundSize = 'cover';
          posterDiv.style.backgroundPosition = 'center';
        }
      } catch(e) {
        // Silently fail if cross-origin or other issue
      }
      vid.remove();
    };

    vid.addEventListener('loadeddata', function() {
      vid.currentTime = 0.5;
    });
    vid.addEventListener('seeked', function() {
      tryCapture();
    });
    vid.addEventListener('error', function() {
      vid.remove();
    });
    vid.load();
  }

  function initAllPosters() {
    const cards = document.querySelectorAll('.creator-card');
    cards.forEach(card => {
      const videoId = parseInt(card.getAttribute('data-video-id'), 10);
      if (!isNaN(videoId) && videoList[videoId]) {
        const originalIdx = videoId % CREATORS_DATA.length;
        generatePosterForCard(card, CREATORS_DATA[originalIdx].video);
      }
    });
  }

  // Gera o HTML do carrossel na página do produto
  function initCarousel() {
    const targetContainer = document.getElementById('creators-section');
    if (!targetContainer) return;

    // Criamos a estrutura interna do carrossel
    targetContainer.innerHTML = `
      <h3 class="creators-title">Vídeos de criadores (30+)</h3>
      <div class="creators-carousel" id="creators-carousel-list"></div>
    `;

    const listElement = document.getElementById('creators-carousel-list');

    // Multiplicamos os dados para parecer "30+" (13 vídeos originais x 3 = 39 cards no total)
    const totalCardsCount = 39;
    videoList = [];

    for (let i = 0; i < totalCardsCount; i++) {
      const originalItem = CREATORS_DATA[i % CREATORS_DATA.length];
      const videoId = i;
      
      // Duplicamos com variações leves de curtidas para parecer real
      const likesOffset = (i * 123) % 1500 - 750;
      const finalLikes = Math.max(2000, Math.min(16000, originalItem.likes + likesOffset));
      const commentsOffset = (i * 3) % 8 - 4;
      const finalComments = Math.max(17, Math.min(29, originalItem.commentsCount + commentsOffset));

      const item = {
        id: videoId,
        name: originalItem.name,
        username: originalItem.username,
        avatar: originalItem.avatar,
        video: originalItem.video,
        likes: finalLikes,
        commentsCount: finalComments,
        saves: originalItem.saves + (i * 11) % 150,
        shares: originalItem.shares + (i * 7) % 50,
        description: originalItem.description,
        liked: false,
        saved: false,
        followed: false,
        commentsList: []
      };

      // Gerar a lista de comentários para este vídeo específico
      for (let j = 0; j < item.commentsCount; j++) {
        item.commentsList.push(generateRandomComment(j + i * 2));
      }

      videoList.push(item);

      // Card HTML — usa um div com background (poster) em vez do elemento video
      const cardHtml = `
        <div class="creator-card" data-video-id="${videoId}">
          <div class="creator-card-play-btn">
            <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
          </div>
          <div class="creator-card-poster" style="width:100%;height:100%;position:absolute;top:0;left:0;background:#111;opacity:0.88;"></div>
          <div class="creator-card-info">
            <img class="creator-card-avatar" src="${item.avatar}" alt="${item.name}">
            <span class="creator-card-name">${item.name}</span>
          </div>
        </div>
      `;
      listElement.insertAdjacentHTML('beforeend', cardHtml);
    }

    // Vincula clique nos cards
    const cards = listElement.querySelectorAll('.creator-card');
    cards.forEach(card => {
      card.addEventListener('click', function() {
        const id = parseInt(this.getAttribute('data-video-id'), 10);
        openTikTokVideo(id);
      });
    });

    // Gera os posters via canvas após um pequeno delay para o DOM estar pronto
    setTimeout(() => initAllPosters(), 100);
  }

  // Cria e abre o Modal TikTok
  function openTikTokVideo(id) {
    currentVideoIndex = id;
    const item = videoList[id];

    if (!ttModal) {
      createTikTokModalMarkup();
    }

    ttModal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // trava scroll de fundo

    loadVideoData(item);
  }

  function closeTikTokModal() {
    if (ttModal) {
      ttModal.style.display = 'none';
      document.body.style.overflow = '';
      if (ttVideo) {
        ttVideo.pause();
        ttVideo.src = "";
      }
    }
  }

  // Monta estrutura básica do Modal no Body
  function createTikTokModalMarkup() {
    ttModal = document.createElement('div');
    ttModal.className = 'tt-modal';
    ttModal.id = 'tiktok-modal';

    ttModal.innerHTML = `
      <div class="tt-container">
        <!-- Top bar com barra de pesquisa - Exatamente como no print -->
        <div class="tt-top-bar">
          <button class="tt-back-btn" id="tt-close-btn">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
          </button>
          <div class="tt-search-container">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="rgba(255,255,255,0.8)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input class="tt-search-input" type="text" value="Encontrar conteúdo relacionado" readonly>
            <button class="tt-search-btn">Procurar</button>
          </div>
        </div>

        <!-- Video Wrapper -->
        <div class="tt-video-wrapper">
          <!-- Loader Bouncing Dots -->
          <div class="tt-loader" id="tt-video-loader">
            <div class="tt-loader-dots">
              <div class="tt-loader-dot cyan"></div>
              <div class="tt-loader-dot pink"></div>
            </div>
          </div>
          
          <video class="tt-video" id="tt-modal-player" loop playsinline></video>

          <!-- Right Action Sidebar Overlay - Ícones do Print -->
          <div class="tt-right-actions">
            <!-- Creator Avatar com botão de Follow + -->
            <div class="tt-creator-wrapper">
              <img class="tt-creator-avatar" id="tt-action-avatar" src="" alt="avatar">
              <button class="tt-follow-btn" id="tt-action-follow">+</button>
            </div>

            <!-- Like (Coração) -->
            <button class="tt-action-btn" id="tt-action-like">
              <svg viewBox="0 0 24 24" width="38" height="38" fill="#fff" stroke="none"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
              <span class="tt-action-label" id="tt-like-count">0</span>
            </button>

            <!-- Comentário (Balão de diálogo redondo com três pontinhos) -->
            <button class="tt-action-btn" id="tt-action-comment">
              <svg viewBox="0 0 42 42" width="38" height="38" fill="#fff">
                <path d="M21 2C10.5 2 2 9.2 2 18c0 4.8 2.5 9.1 6.5 12l-1.5 7.5c-.2 1 .8 1.8 1.7 1.3l8.8-4.4c1.1.2 2.3.3 3.5.3 10.5 0 19-7.2 19-16S31.5 2 21 2z"/>
                <circle cx="13" cy="18" r="2.5" fill="#000"/>
                <circle cx="21" cy="18" r="2.5" fill="#000"/>
                <circle cx="29" cy="18" r="2.5" fill="#000"/>
              </svg>
              <span class="tt-action-label" id="tt-comment-count">0</span>
            </button>

            <!-- Salvar (Bookmark) -->
            <button class="tt-action-btn" id="tt-action-save">
              <svg viewBox="0 0 24 24" width="38" height="38" fill="#fff"><path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"/></svg>
              <span class="tt-action-label" id="tt-save-count">0</span>
            </button>

            <!-- Compartilhar (Seta) -->
            <button class="tt-action-btn" id="tt-action-share">
              <svg viewBox="0 0 24 24" width="38" height="38" fill="#fff"><path d="M14 9V5l7 7-7 7v-4.1c-5 0-8.5 1.6-11 5.1 1-5 4-10 11-11z"/></svg>
              <span class="tt-action-label" id="tt-share-count">0</span>
            </button>

            <!-- Disco de Música Rodando -->
            <div class="tt-music-record">
              <img id="tt-music-avatar" src="" alt="music icon">
            </div>
          </div>

          <!-- Info Esquerda overlay -->
          <div class="tt-left-info">
            <div class="tt-creator-name" id="tt-display-name">@Étika Pneus</div>
            <p class="tt-video-desc" id="tt-display-desc">Pneu Pirelli é bom? Mostramos...</p>
          </div>
        </div>

        <!-- Drawer de Comentários -->
        <div class="tt-comments-drawer" id="tt-comments-drawer">
          <div class="tt-comments-header">
            <div class="tt-comments-header-title">
              <span id="tt-drawer-title">0 comentários</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="15" y2="18"/></svg>
            </div>
            <button class="tt-comments-close" id="tt-drawer-close">✕</button>
          </div>
          <div class="tt-comments-list" id="tt-drawer-list">
            <!-- comentários inseridos aqui -->
          </div>
          <!-- Input inferior - Sem foto do usuário à esquerda conforme pedido -->
          <div class="tt-comments-input-bar">
            <div class="tt-comment-input-wrapper">
              <input class="tt-comment-input" type="text" placeholder="Adicionar comentário..." id="tt-new-comment-input">
              <div class="tt-input-icons">
                <span class="tt-input-icon">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                </span>
                <span class="tt-input-icon">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/><path d="M12 22a10 10 0 0 0 10-10"/></svg>
                </span>
                <span class="tt-input-icon">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"/></svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(ttModal);

    // Seletores de elementos
    ttVideo = document.getElementById('tt-modal-player');
    ttLoader = document.getElementById('tt-video-loader');

    // Event Listeners
    document.getElementById('tt-close-btn').addEventListener('click', closeTikTokModal);
    
    // Clique no centro do vídeo para pausar/retomar
    const videoWrapper = ttModal.querySelector('.tt-video-wrapper');
    videoWrapper.addEventListener('click', function(e) {
      // Ignora cliques nos botões de ação laterais e no top bar
      if (e.target.closest('.tt-right-actions') || e.target.closest('.tt-left-info') || e.target.closest('.tt-top-bar') || e.target.closest('.tt-comments-drawer') || e.target.closest('.tt-loader')) return;
      if (ttVideo.paused) {
        ttVideo.play();
        // Feedback visual de play
        showPlayPauseIndicator('play');
      } else {
        ttVideo.pause();
        showPlayPauseIndicator('pause');
      }
    });

    // Feedback visual de play/pause (ícone no centro)
    function showPlayPauseIndicator(type) {
      const existing = document.getElementById('tt-play-indicator');
      if (existing) existing.remove();
      const indicator = document.createElement('div');
      indicator.id = 'tt-play-indicator';
      indicator.style.cssText = 'position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:64px;height:64px;background:rgba(0,0,0,0.5);border-radius:50%;display:flex;align-items:center;justify-content:center;z-index:20;pointer-events:none;animation:ttIndicatorFade 0.6s ease forwards;';
      indicator.innerHTML = type === 'pause'
        ? '<svg viewBox="0 0 24 24" width="32" height="32" fill="#fff"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>'
        : '<svg viewBox="0 0 24 24" width="32" height="32" fill="#fff"><path d="M8 5v14l11-7z"/></svg>';
      videoWrapper.appendChild(indicator);
      setTimeout(() => { if (indicator.parentNode) indicator.remove(); }, 600);
    }

    // Animação do indicador
    if (!document.getElementById('tt-indicator-style')) {
      const s = document.createElement('style');
      s.id = 'tt-indicator-style';
      s.textContent = '@keyframes ttIndicatorFade { 0%{opacity:1;transform:translate(-50%,-50%) scale(1)} 100%{opacity:0;transform:translate(-50%,-50%) scale(1.4)} }';
      document.head.appendChild(s);
    }

    // Ações: Curtir
    const likeBtn = document.getElementById('tt-action-like');
    likeBtn.addEventListener('click', function() {
      const item = videoList[currentVideoIndex];
      item.liked = !item.liked;
      if (item.liked) {
        this.classList.add('active');
        item.likes += 1;
        this.querySelector('svg').style.fill = '#fe2c55';
      } else {
        this.classList.remove('active');
        item.likes -= 1;
        this.querySelector('svg').style.fill = '#fff';
      }
      document.getElementById('tt-like-count').textContent = formatNumber(item.likes);
    });

    // Ações: Salvar
    const saveBtn = document.getElementById('tt-action-save');
    saveBtn.addEventListener('click', function() {
      const item = videoList[currentVideoIndex];
      item.saved = !item.saved;
      if (item.saved) {
        this.classList.add('active');
        item.saves += 1;
        this.querySelector('svg').style.fill = '#face15';
      } else {
        this.classList.remove('active');
        item.saves -= 1;
        this.querySelector('svg').style.fill = '#fff';
      }
      document.getElementById('tt-save-count').textContent = formatNumber(item.saves);
    });

    // Ações: Seguir com animação de check ✓
    const followBtn = document.getElementById('tt-action-follow');
    followBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      const item = videoList[currentVideoIndex];
      item.followed = true;
      
      this.textContent = '✓';
      this.style.background = '#25D366'; // Green follow check
      this.style.transform = 'translateX(-50%) scale(1.1)';
      
      setTimeout(() => {
        this.classList.add('followed'); // scale(0) and opacity 0
      }, 600);
    });

    // Ações: Abrir Comentários
    document.getElementById('tt-action-comment').addEventListener('click', function() {
      document.getElementById('tt-comments-drawer').classList.add('open');
    });

    // Ações: Fechar Comentários
    document.getElementById('tt-drawer-close').addEventListener('click', function() {
      document.getElementById('tt-comments-drawer').classList.remove('open');
    });

    // Ações: Compartilhar
    document.getElementById('tt-action-share').addEventListener('click', function() {
      const item = videoList[currentVideoIndex];
      item.shares += 1;
      document.getElementById('tt-share-count').textContent = formatNumber(item.shares);
      
      // Feedback visual rápido
      const toast = document.createElement('div');
      toast.style.cssText = 'position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); background:rgba(0,0,0,0.85); color:#fff; padding:10px 20px; border-radius:20px; font-size:13px; font-weight:bold; z-index:9999999;';
      toast.textContent = "Link copiado com sucesso!";
      document.querySelector('.tt-container').appendChild(toast);
      setTimeout(() => toast.remove(), 1500);
    });

    // Adicionar Comentário do Usuário
    const newCommentInput = document.getElementById('tt-new-comment-input');
    newCommentInput.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' && this.value.trim() !== '') {
        const item = videoList[currentVideoIndex];
        const val = this.value.trim();
        
        // Criar novo comentário
        const newComment = {
          avatar: "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.11.jpeg", // Avatar genérico
          user: "voce",
          text: val,
          date: "agora",
          likes: 0,
          liked: false
        };

        item.commentsList.unshift(newComment);
        item.commentsCount += 1;
        this.value = '';

        // Atualiza interface do drawer e contadores
        document.getElementById('tt-comment-count').textContent = formatNumber(item.commentsCount);
        document.getElementById('tt-drawer-title').textContent = `${formatNumber(item.commentsCount)} comentários`;
        renderCommentsList(item.commentsList);
      }
    });
  }

  // Carrega e exibe os dados do vídeo selecionado
  function loadVideoData(item) {
    // 1. Mostrar o Loader TikTok
    ttLoader.style.display = 'flex';
    ttVideo.style.opacity = '0';

    // 2. Parar vídeo anterior se houver
    ttVideo.pause();

    // 3. Atualizar fontes e elementos
    ttVideo.src = item.video;
    ttVideo.load();

    document.getElementById('tt-action-avatar').src = item.avatar;
    document.getElementById('tt-music-avatar').src = item.avatar;
    
    // Atualiza botão Follow
    const followBtn = document.getElementById('tt-action-follow');
    followBtn.style.transform = '';
    followBtn.style.background = '';
    followBtn.textContent = '+';
    if (item.followed) {
      followBtn.classList.add('followed');
    } else {
      followBtn.classList.remove('followed');
    }

    // Atualiza curtidas
    const likeBtn = document.getElementById('tt-action-like');
    if (item.liked) {
      likeBtn.classList.add('active');
      likeBtn.querySelector('svg').style.fill = '#fe2c55';
    } else {
      likeBtn.classList.remove('active');
      likeBtn.querySelector('svg').style.fill = '#fff';
    }
    document.getElementById('tt-like-count').textContent = formatNumber(item.likes);

    // Atualiza salvos
    const saveBtn = document.getElementById('tt-action-save');
    if (item.saved) {
      saveBtn.classList.add('active');
      saveBtn.querySelector('svg').style.fill = '#face15';
    } else {
      saveBtn.classList.remove('active');
      saveBtn.querySelector('svg').style.fill = '#fff';
    }
    document.getElementById('tt-save-count').textContent = formatNumber(item.saves);

    // Compartilhamentos
    document.getElementById('tt-share-count').textContent = formatNumber(item.shares);

    // Comentários
    document.getElementById('tt-comment-count').textContent = formatNumber(item.commentsCount);
    document.getElementById('tt-drawer-title').textContent = `${formatNumber(item.commentsCount)} comentários`;

    // Texto de descrição inferior
    document.getElementById('tt-display-name').textContent = `@${item.username}`;
    document.getElementById('tt-display-desc').textContent = item.description;

    // Renderiza lista de comentários no Drawer
    renderCommentsList(item.commentsList);

    // Fechar drawer se estiver aberto ao carregar novo vídeo
    document.getElementById('tt-comments-drawer').classList.remove('open');

    // 4. Iniciar playback e esconder loader após delay realista de buffering
    ttVideo.oncanplay = function() {
      setTimeout(() => {
        ttLoader.style.display = 'none';
        ttVideo.style.opacity = '1';
        ttVideo.play().catch(e => console.log("Erro de autoplay:", e));
      }, 1000); // 1 segundo de carregamento fixo
      ttVideo.oncanplay = null; // evitar múltiplas execuções
    };
  }

  function renderCommentsList(comments) {
    const listContainer = document.getElementById('tt-drawer-list');
    listContainer.innerHTML = '';

    comments.forEach((c, idx) => {
      const isFirstBadge = (idx === comments.length - 1) ? '<div class="tt-comment-badge">Primeiro comentário</div>' : '';
      const commentHtml = `
        <div class="tt-comment-item">
          <img class="tt-comment-avatar" src="${c.avatar}" alt="${c.user}" onerror="this.src='../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.11.jpeg'">
          <div class="tt-comment-content">
            <div class="tt-comment-user">${c.user}</div>
            <div class="tt-comment-text">${c.text}</div>
            ${isFirstBadge}
            <div class="tt-comment-meta">
              <span>${c.date}</span>
              <span class="tt-comment-meta-reply">Responder</span>
            </div>
          </div>
          <div class="tt-comment-actions">
            <button class="tt-comment-like-btn ${c.liked ? 'active' : ''}" data-idx="${idx}">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              <span class="tt-comment-like-count">${c.likes || ''}</span>
            </button>
          </div>
        </div>
      `;
      listContainer.insertAdjacentHTML('beforeend', commentHtml);
    });

    // Eventos de curtir nos comentários
    const likeButtons = listContainer.querySelectorAll('.tt-comment-like-btn');
    likeButtons.forEach(btn => {
      btn.addEventListener('click', function() {
        const commentIdx = parseInt(this.getAttribute('data-idx'), 10);
        const comment = comments[commentIdx];
        comment.liked = !comment.liked;
        if (comment.liked) {
          this.classList.add('active');
          this.querySelector('svg').style.fill = '#fe2c55';
          this.querySelector('svg').style.stroke = '#fe2c55';
          comment.likes += 1;
        } else {
          this.classList.remove('active');
          this.querySelector('svg').style.fill = 'none';
          this.querySelector('svg').style.stroke = 'currentColor';
          comment.likes = Math.max(0, comment.likes - 1);
        }
        this.querySelector('.tt-comment-like-count').textContent = comment.likes || '';
      });
    });
  }

  // Inicialização principal
  function init() {
    injectStyles();
    initCarousel();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
