// =============================================================
// AVALIAÇÕES DO PRODUTO IPHONE 15 — produto-100.html
// Sistema com paginação: 10 iniciais + 15 a cada "ver mais"
// =============================================================

const IPHONE_REVIEWS = [

  // ===== COM FOTO =====

  // GRUPO 1 — iPhone branco capa transparente em fundo tecido cinza
  {
    avatar: "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.11 (1).jpeg",
    user: "biancafs",
    stars: 5, date: "2025-12-03 14:42",
    comment: "Gente eu tô APAIXONADA nesse iPhone. comprei o 15 branco e quando chegou eu quase chorei de feliz. a caixa lacrada, tudo igualzinho ao original, câmera incrível, não travou nenhuma vez. entrega super rápida também, veio antes do previsto",
    photos: ["../fotosavaliacoesiphone/IMG_5705.PNG", "../fotosavaliacoesiphone/IMG_5706.PNG"]
  },

  // GRUPO 2 — iPhone branco em fundo tecido cinza (sem capa)
  {
    avatar: "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.11 (2).jpeg",
    user: "caroline_mendes",
    stars: 5, date: "2025-11-28 20:15",
    comment: "chegou com capa protetora já, super cuidado no embalamento. tela perfeita, sem arranhão nenhum. câmera então nem falar, fotos profissionais no dia a dia",
    photos: ["../fotosavaliacoesiphone/IMG_5707.PNG"]
  },

  // GRUPO 3 — iPhone Pro sobre mesa de madeira com teclado
  {
    avatar: "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.11.jpeg",
    user: "93gabriel",
    stars: 5, date: "2025-11-20 09:30",
    comment: "Comprei o Pro Max e ficou melhor do que eu esperava. ficou do lado do meu setup inteiro e combinou demais. produto original, nota fiscal inclusa. recomendo 100%",
    photos: ["../fotosavaliacoesiphone/IMG_5708.PNG", "../fotosavaliacoesiphone/IMG_5709.PNG"]
  },

  // GRUPO 4 — iPhone tela ligada (lockscreen azul noturno) na mão
  {
    avatar: "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.12 (1).jpeg",
    user: "leoviana",
    stars: 5, date: "2025-11-18 22:07",
    comment: "cara simplesmente perfeito. chegou rapidão, fiz o pedido e em menos de uma semana já tava aqui. a tela desse 15 pro é absurda, 120hz voando suave demais. valeu demais a pena",
    photos: ["../fotosavaliacoesiphone/IMG_5710.PNG"]
  },

  // GRUPO 5 — iPhone bege/dourado em fundo vermelho
  {
    avatar: "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.12 (2).jpeg",
    user: "marcosantonio_bh",
    stars: 5, date: "2025-11-15 11:20",
    comment: "meu primeiro iPhone e não me arrependo nem um pouco. a qualidade é diferente de qualquer android que já tive. chegou lacrado, com todas as peças e ainda antes do prazo",
    photos: ["../fotosavaliacoesiphone/IMG_5711.PNG"]
  },

  // GRUPO 6 — iPhone preto grafite em fundo escuro (dois ângulos)
  {
    avatar: "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.12 (3).jpeg",
    user: "thiago.souza",
    stars: 5, date: "2025-11-12 16:45",
    comment: "Produto chegou exatamente como anunciado. Titânio preto com 256gb, zero arranhão, bateria de 100%. A câmera principal é absurda mesmo",
    photos: ["../fotosavaliacoesiphone/IMG_5712.PNG", "../fotosavaliacoesiphone/IMG_5713.PNG"]
  },

  // GRUPO 7 — iPhone 15 azul titânio (dois ângulos)
  {
    avatar: "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.12 (4).jpeg",
    user: "andersonfz",
    stars: 5, date: "2025-11-09 13:55",
    comment: "Peguei o titânio azul e tô apaixonado. Cor linda demais, parece que foi feito pra mim. Processador A17 Pro não trava nada, jogo pesado, edito vídeo, tudo suave",
    photos: ["../fotosavaliacoesiphone/IMG_5714.PNG", "../fotosavaliacoesiphone/IMG_5715.PNG"]
  },

  // GRUPO 8 — Unboxing iPhone (caixa aberta, 3 ângulos)
  {
    avatar: "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.12.jpeg",
    user: "vitor.rm",
    stars: 5, date: "2025-11-05 08:10",
    comment: "veio na caixa original, lacrado com plástico, nota fiscal, manual... tudo certinho. fiz o unboxing e parecia produto novo de loja física. muito satisfeito",
    photos: ["../fotosavaliacoesiphone/IMG_5716.PNG", "../fotosavaliacoesiphone/IMG_5717.PNG", "../fotosavaliacoesiphone/IMG_5718.PNG"]
  },

  // GRUPO 9 — iPhone rosa/creme sobre fundo claro
  {
    avatar: "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.13 (1).jpeg",
    user: "renatoag55",
    stars: 5, date: "2025-10-31 17:40",
    comment: "Produto impecável! Chegou bem antes do prazo previsto e estava em perfeito estado. A câmera é simplesmente outra dimensão comparado ao meu android antigo",
    photos: ["../fotosavaliacoesiphone/IMG_5719.PNG", "../fotosavaliacoesiphone/IMG_5720.PNG"]
  },

  // GRUPO 10 — iPhone em mesa (3 fotos diferentes)
  {
    avatar: "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.13 (2).jpeg",
    user: "fabio_otavio",
    stars: 5, date: "2025-10-28 10:05",
    comment: "super recomendo essa loja. ja comprei varias vezes e sempre chega tudo perfeito. o iphone 15 pro max é o melhor celular que ja tive na vida, sem exagero",
    photos: ["../fotosavaliacoesiphone/IMG_5721.PNG", "../fotosavaliacoesiphone/IMG_5722.PNG", "../fotosavaliacoesiphone/IMG_5723.PNG"]
  },

  // GRUPO 11 — iPhone titânio natural sobre fundo neutro
  {
    avatar: "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.13 (3).jpeg",
    user: "rodrigomoraes",
    stars: 5, date: "2025-10-25 21:30",
    comment: "Chegou super bem embalado, celular 0km, lacrado direto da fábrica. comprei o 512gb e a memória tá voando. sem lag, sem travamento, nada",
    photos: [
      "../fotosavaliacoesiphone/IMG_5724.PNG", 
      "../fotosavaliacoesiphone/IMG_5725.PNG",
      "../fotosavaliacoesiphone/IMG_5726.PNG",
      "../fotosavaliacoesiphone/IMG_5727.PNG"
    ]
  },

  // GRUPO 12 — iPhone Pro Max titânio branco em mãos (3 fotos)
  {
    avatar: "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.13 (4).jpeg",
    user: "cristian_nb38",
    stars: 4, date: "2025-10-22 19:15",
    comment: "muito bom o produto. so achei que demorou uns 2 dias a mais que o previsto pra chegar mas veio perfeito, sem nenhuma avaria. câmera então é show de bola",
    photos: ["../fotosavaliacoesiphone/IMG_5728.PNG"]
  },

  // GRUPO 13 — iPhone em estojo preto elegante
  {
    avatar: "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.13 (5).jpeg",
    user: "rafael_jc14",
    stars: 5, date: "2025-10-18 15:50",
    comment: "Entrega rápida e produto original! Comprei pro meu irmão de aniversário e ele adorou. veio com todos os acessórios, carregador, cabo, tudo",
    photos: ["../fotosavaliacoesiphone/IMG_5729.PNG", "../fotosavaliacoesiphone/IMG_5730.PNG"]
  },

  // GRUPO 14 — iPhone 15 tela desbloqueada mostrando wallpaper
  {
    avatar: "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.13.jpeg",
    user: "mateus_gv",
    stars: 5, date: "2025-10-15 11:25",
    comment: "produto 10/10. tela linda, ios super fluido, câmera profissional. entregou antes do prazo e bem embalado. quinta compra nessa loja e sempre assim",
    photos: ["../fotosavaliacoesiphone/IMG_5731.PNG", "../fotosavaliacoesiphone/IMG_5732.PNG"]
  },

  // GRUPO 15 — iPhone em mesa de escritório com teclado
  {
    avatar: "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.14 (1).jpeg",
    user: "edsonpr47",
    stars: 5, date: "2025-10-12 14:00",
    comment: "Comprei o iPhone 15 pra usar no trabalho e simplesmente revolucionou minha produtividade. bateria dura o dia inteiro mesmo com uso intenso. câmera do pro captura qualquer coisa com qualidade absurda",
    photos: ["../fotosavaliacoesiphone/IMG_5734.PNG", "../fotosavaliacoesiphone/IMG_5735.PNG"]
  },

  // GRUPO 16 — iPhone azul titânio em superfície escura
  {
    avatar: "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.14 (2).jpeg",
    user: "igornf",
    stars: 5, date: "2025-10-08 09:45",
    comment: "simplesmente o melhor celular que já tive. a câmera captura foto absurda mesmo no escuro. chegou lacrado, original, nota fiscal inclusa. muito feliz com a compra",
    photos: ["../fotosavaliacoesiphone/IMG_5736.PNG", "../fotosavaliacoesiphone/IMG_5737.PNG"]
  },

  // GRUPO 17 — Embalagem iPhone 15 completa (3 fotos)
  {
    avatar: "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.14 (3).jpeg",
    user: "lucas_werner",
    stars: 5, date: "2025-10-04 18:30",
    comment: "Chegou perfeito. Caixa lacrada, produto intacto, exatamente como mostrado nas fotos. Recomendo sem hesitar essa loja, confiança total",
    photos: ["../fotosavaliacoesiphone/IMG_5739.PNG", "../fotosavaliacoesiphone/IMG_5740.PNG"]
  },

  // GRUPO 18 — iPhone natural/branco em fundo claro
  {
    avatar: "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.14 (4).jpeg",
    user: "samuelde71",
    stars: 5, date: "2025-09-30 20:20",
    comment: "Produto original e entrega rápida. celular impecável, tela linda, câmera incrível. bateria então é outra história comparada ao meu antigo. recomendo demais",
    photos: ["../fotosavaliacoesiphone/IMG_5745.PNG", "../fotosavaliacoesiphone/IMG_5746.PNG"]
  },

  // GRUPO 19 — iPhone 15 Pro em mãos ao ar livre
  {
    avatar: "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.14 (5).jpeg",
    user: "henrique.alves",
    stars: 5, date: "2025-09-26 16:10",
    comment: "Comprei pra mim mesmo de presente e não me arrependi. a experiência com o iPhone 15 Pro é totalmente diferente. o zoom 5x sozinho já vale o valor do produto",
    photos: ["../fotosavaliacoesiphone/IMG_5747.PNG", "../fotosavaliacoesiphone/IMG_5748.PNG"]
  },

  // GRUPO 20 — iPhone em cima de cama branca (3 ângulos)
  {
    avatar: "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.14.jpeg",
    user: "diogo_cm",
    stars: 5, date: "2025-09-22 11:55",
    comment: "Recebido antes do prazo, caixa lacrada, produto original. câmera principal é impressionante mesmo, qualidade de foto muito acima do esperado. muito feliz",
    photos: ["../fotosavaliacoesiphone/IMG_5749.PNG", "../fotosavaliacoesiphone/IMG_5750.PNG", "../fotosavaliacoesiphone/IMG_5751.PNG"]
  },

  // GRUPO 21 — iPhone preto titânio em fundo escuro (closeup)
  {
    avatar: "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.15 (1).jpeg",
    user: "alex.junior",
    stars: 5, date: "2025-09-18 08:30",
    comment: "Chegou em 4 dias úteis. produto impecável. o titânio preto é sério demais, parece um artefato de luxo na mão. iOS 17 voando nele. Muito contente com a compra",
    photos: ["../fotosavaliacoesiphone/IMG_5752.PNG", "../fotosavaliacoesiphone/IMG_5753.PNG"]
  },

  // GRUPO 22 — iPhone 15 branco creme em cima de mesa de madeira
  {
    avatar: "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.15 (2).jpeg",
    user: "gustavomn84",
    stars: 4, date: "2025-09-14 20:45",
    comment: "Produto chegou bem, mas demorou uns dias a mais. Mesmo assim, vale muito a pena. O iPhone 15 é top demais. Câmera profissional, tela linda",
    photos: ["../fotosavaliacoesiphone/IMG_5754.PNG", "../fotosavaliacoesiphone/IMG_5755.PNG"]
  },

  // GRUPO 23 — iPhone tela ligada wallpaper bonito
  {
    avatar: "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.15 (3).jpeg",
    user: "pedro.sv",
    stars: 5, date: "2025-09-10 15:20",
    comment: "Meu iPhone chegou perfeito, tela zerada, sem nenhum pixel morto. o sistema é muito mais fluido do que qualquer android que eu já tive. Compra 100% segura",
    photos: ["../fotosavaliacoesiphone/IMG_5756.PNG", "../fotosavaliacoesiphone/IMG_5757.PNG"]
  },

  // GRUPO 24 — iPhone em cenário urbano / na rua
  {
    avatar: "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.15 (4).jpeg",
    user: "joaocb50",
    stars: 5, date: "2025-09-06 12:00",
    comment: "Comprei o Pro Max 512gb e simplesmente mudou minha vida. câmera do nível de câmera profissional. entrega rápida e produto original. muito obrigado",
    photos: ["../fotosavaliacoesiphone/IMG_5759.PNG", "../fotosavaliacoesiphone/IMG_5760.PNG"]
  },

  // GRUPO 25 — iPhone 15 em cima de sofá / almofada (3 fotos)
  {
    avatar: "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.15.jpeg",
    user: "caiolf",
    stars: 5, date: "2025-09-02 19:30",
    comment: "Veio super rápido e embalado direitinho. iPhone lacrado, original com nota fiscal. É simplesmente o melhor produto que já comprei online",
    photos: ["../fotosavaliacoesiphone/IMG_5761.PNG", "../fotosavaliacoesiphone/IMG_5762.PNG", "../fotosavaliacoesiphone/IMG_5763.PNG"]
  },

  // GRUPO 26 — iPhone 15 em closeup câmera traseira
  {
    avatar: "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.16 (1).jpeg",
    user: "felipe.td",
    stars: 5, date: "2025-08-29 10:15",
    comment: "A câmera do iPhone 15 Pro é surreal. Fiz fotos na praia e as cores ficaram absurdas. produto chegou certinho, rápido e embalagem intacta",
    photos: ["../fotosavaliacoesiphone/IMG_5764.PNG", "../fotosavaliacoesiphone/IMG_5765.PNG"]
  },

  // GRUPO 27 — iPhone Pro Max titânio azul sobre papel branco
  {
    avatar: "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.16 (2).jpeg",
    user: "tuliok",
    stars: 5, date: "2025-08-25 14:50",
    comment: "simplesmente perfeito. peguei o azul 256gb e estou impressionado com a qualidade. a câmera capta cada detalhe, a tela é MUITO bonita. entrega rápida",
    photos: ["../fotosavaliacoesiphone/IMG_5766.PNG", "../fotosavaliacoesiphone/IMG_5767.PNG"]
  },

  // GRUPO 28 — iPhone com capa em fundo textura (3 fotos)
  {
    avatar: "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.16 (3).jpeg",
    user: "brunosa",
    stars: 5, date: "2025-08-21 17:35",
    comment: "Ótima loja, produto original, embalagem perfeita. veio com todos os acessórios originais. Muito satisfeito com a minha escolha",
    photos: ["../fotosavaliacoesiphone/IMG_5768.PNG", "../fotosavaliacoesiphone/IMG_5769.PNG", "../fotosavaliacoesiphone/IMG_5770.PNG"]
  },

  // GRUPO 29 — iPhone 15 novo na caixa
  {
    avatar: "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.16 (4).jpeg",
    user: "william_nc",
    stars: 5, date: "2025-08-17 09:00",
    comment: "produto top demais. chegou tudo lacrado e original. a câmera do 15 pro tem zoom absurdo, o 5x me deixou boquiaberto. já indiquei pra vários amigos",
    photos: ["../fotosavaliacoesiphone/IMG_5771.PNG", "../fotosavaliacoesiphone/IMG_5772.PNG"]
  },

  // GRUPO 30 — iPhone sobre cama com lençol claro
  {
    avatar: "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.16.jpeg",
    user: "danilo_rv",
    stars: 5, date: "2025-08-13 21:20",
    comment: "Minha esposa pediu esse iPhone de aniversário e chegou antes da data. ela ficou louca de feliz. produto impecável, original, nota inclusa. muito obrigado",
    photos: ["../fotosavaliacoesiphone/IMG_5773.PNG", "../fotosavaliacoesiphone/IMG_5774.PNG"]
  },

  // GRUPO 31 — iPhone 15 em cima de mesa com livros (3 fotos)
  {
    avatar: "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.17 (1).jpeg",
    user: "renan_gv",
    stars: 5, date: "2025-08-09 13:45",
    comment: "comprei pra estudar e trabalhar. o desempenho do A17 Pro é outro nível. abre qualquer app em segundos, sem lag nenhum. chegou antes do prazo",
    photos: ["../fotosavaliacoesiphone/IMG_5775.PNG", "../fotosavaliacoesiphone/IMG_5776.PNG", "../fotosavaliacoesiphone/IMG_5777.PNG"]
  },

  // GRUPO 32 — iPhone em embalagem de envio (isopor)
  {
    avatar: "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.17 (2).jpeg",
    user: "juliano_ks",
    stars: 5, date: "2025-08-05 11:10",
    comment: "Veio muito bem embalado, produto zerado. o iPhone 15 tem acabamento premium demais, parece diferente de tudo que já segurei na mão. nota fiscal, manual, tudo junto",
    photos: ["../fotosavaliacoesiphone/IMG_5778.PNG", "../fotosavaliacoesiphone/IMG_5779.PNG"]
  },

  // GRUPO 33 — iPhone 15 Pro cinza titânio natural em mãos
  {
    avatar: "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.17 (3).jpeg",
    user: "adrianope",
    stars: 5, date: "2025-08-01 16:00",
    comment: "Entregou em 3 dias úteis, mais rápido que o esperado. iPhone zerado, caixa lacrada, exatamente como descrito. câmera principal 48mp fotografa qualquer coisa",
    photos: ["../fotosavaliacoesiphone/IMG_5781.PNG", "../fotosavaliacoesiphone/IMG_5782.PNG"]
  },

  // GRUPO 34 — iPhone tela ligada interface iOS 17 (3 fotos)
  {
    avatar: "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.17 (4).jpeg",
    user: "cleison_bt",
    stars: 5, date: "2025-07-28 19:25",
    comment: "iOS 17 nesse aparelho é show. interface muito mais bonita que qualquer android. chegou tudo certo, lacrado, produto original. compra segura, indico muito",
    photos: ["../fotosavaliacoesiphone/IMG_5783.PNG", "../fotosavaliacoesiphone/IMG_5784.PNG", "../fotosavaliacoesiphone/IMG_5785.PNG"]
  },

  // GRUPO 35 — iPhone 15 preto titânio em fundo escuro (closeup duplo)
  {
    avatar: "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.17 (5).jpeg",
    user: "leandro_cm",
    stars: 5, date: "2025-07-24 08:55",
    comment: "Titânio preto é o mais bonito de todos. Produto chegou perfeito, lacrado, original. a câmera é outro nível, uso pro trabalho e ficou ótimo",
    photos: ["../fotosavaliacoesiphone/IMG_5786.PNG", "../fotosavaliacoesiphone/IMG_5788.PNG"]
  },

  // GRUPO 36 — iPhone 15 em dois ângulos frente e verso
  {
    avatar: "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.17.jpeg",
    user: "marcelo_fv",
    stars: 5, date: "2025-07-20 15:40",
    comment: "Comprei o 15 e 15 Pro pra mim e minha escolha. os dois chegaram perfeitos no mesmo pacote. entrega rápida, embalados separadamente, zero avaria. muito feliz",
    photos: ["../fotosavaliacoesiphone/IMG_5789.PNG", "../fotosavaliacoesiphone/IMG_5790.PNG"]
  },

  // GRUPO 37 — iPhone 15 dourado/natural em cenário de café
  {
    avatar: "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.18 (1).jpeg",
    user: "paulo_costa",
    stars: 5, date: "2025-07-16 12:20",
    comment: "Chegou em 5 dias, bem embalado e produto novinho. câmera principal do 15 pro é simplesmente impressionante. tira foto melhor que câmera profissional amadora",
    photos: ["../fotosavaliacoesiphone/IMG_5792.PNG", "../fotosavaliacoesiphone/IMG_5793.PNG"]
  },

  // GRUPO 38 — iPhone em sacola com nota fiscal (3 fotos)
  {
    avatar: "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.18 (2).jpeg",
    user: "patrick_rn",
    stars: 5, date: "2025-07-12 09:10",
    comment: "produto veio com nota fiscal, manual em português, carregador. tudo original. iPhone 15 Pro está sendo incrível no dia a dia. valeu muito a compra",
    photos: ["../fotosavaliacoesiphone/IMG_5794.PNG", "../fotosavaliacoesiphone/IMG_5795.PNG", "../fotosavaliacoesiphone/IMG_5796.PNG"]
  },

  // GRUPO 39 — iPhone em cima de notebook/tablet
  {
    avatar: "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.18 (3).jpeg",
    user: "otaviosg",
    stars: 5, date: "2025-07-08 18:00",
    comment: "Comprei o 15 pro max pra usar no trabalho com edição de vídeo. o desempenho é absurdo. vídeo em 4k 60fps sem travar nada. produto original entregue certinho",
    photos: ["../fotosavaliacoesiphone/IMG_5797.PNG", "../fotosavaliacoesiphone/IMG_5799.PNG"]
  },

  // GRUPO 40 — iPhone em fundo texturizado bege
  {
    avatar: "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.18 (4).jpeg",
    user: "rogerio_ba",
    stars: 4, date: "2025-07-04 14:30",
    comment: "Produto excelente, só achei que a capa que veio não era muito boa. mas o iPhone em si é perfeito. câmera absurda, tela linda, sistema muito fluido",
    photos: ["../fotosavaliacoesiphone/IMG_5800.PNG", "../fotosavaliacoesiphone/IMG_5801.PNG"]
  },

  // GRUPO 41 — iPhone 15 em cenário ao ar livre
  {
    avatar: "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.18 (5).jpeg",
    user: "cezar_ml",
    stars: 5, date: "2025-06-30 10:45",
    comment: "Produto chegou em 4 dias úteis. lacrado, original, nota fiscal. o iPhone 15 é sensacional. câmera então é de outro planeta. super recomendo essa loja",
    photos: ["../fotosavaliacoesiphone/IMG_5802.PNG", "../fotosavaliacoesiphone/IMG_5803.PNG"]
  },

  // GRUPO 42 — iPhone 15 branco em fundo neutro (dois ângulos)
  {
    avatar: "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.18.jpeg",
    user: "ezequiel.fn",
    stars: 5, date: "2025-06-26 17:15",
    comment: "Primeiro iPhone da minha vida e me surpreendi muito. Sistema iOS é muito mais intuitivo do que imaginava. câmera então é de cair o queixo. chegou lacrado e rápido",
    photos: ["../fotosavaliacoesiphone/IMG_5804.PNG", "../fotosavaliacoesiphone/IMG_5806.PNG"]
  },

  // GRUPO 43 — iPhone 15 Pro natural em cenário profissional
  {
    avatar: "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.19 (1).jpeg",
    user: "natanwp",
    stars: 5, date: "2025-06-22 13:00",
    comment: "Comprei o Pro pra usar na empresa e simplesmente virou minha ferramenta de trabalho principal. bateria boa demais, câmera profissional, desempenho absurdo",
    photos: ["../fotosavaliacoesiphone/IMG_5807.PNG", "../fotosavaliacoesiphone/IMG_5808.PNG"]
  },

  // GRUPO 44 — Unboxing completo vários ângulos (3 fotos)
  {
    avatar: "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.19 (2).jpeg",
    user: "davirs",
    stars: 5, date: "2025-06-18 20:30",
    comment: "Fiz um unboxing completo e filmei tudo. produto impecável, caixa original, lacrado. o iPhone 15 Pro é impressionante no world real. muito feliz com a loja",
    photos: ["../fotosavaliacoesiphone/IMG_5809.PNG", "../fotosavaliacoesiphone/IMG_5810.PNG", "../fotosavaliacoesiphone/IMG_5811.PNG"]
  },

  // GRUPO 45 — iPhone 15 Pro Max tela ligada azul noturno
  {
    avatar: "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.19 (3).jpeg",
    user: "michael_ao",
    stars: 5, date: "2025-06-14 09:50",
    comment: "produto chegou muito antes do previsto. o iPhone 15 Pro Max é excepcional demais. a tela always on é um diferencial absurdo. câmera de madrugada então é irreal",
    photos: ["../fotosavaliacoesiphone/IMG_5812.PNG", "../fotosavaliacoesiphone/IMG_5813.PNG"]
  },

  // GRUPO 46 — iPhone sobre mesa com acessórios Apple
  {
    avatar: "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.19 (4).jpeg",
    user: "yagobf32",
    stars: 5, date: "2025-06-10 16:25",
    comment: "Montei um setup completo Apple com esse iPhone. produto original, chegou certinho e antes do prazo. A integração com o MacBook e iPad é incrível. muito satisfeito",
    photos: ["../fotosavaliacoesiphone/IMG_5814.PNG", "../fotosavaliacoesiphone/IMG_5815.PNG"]
  },

  // ===== SEM FOTO — com foto de perfil (12 fotos de perfil restantes) =====

  // perfil 23.31.19.jpeg = Mulher
  {
    avatar: "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.19.jpeg",
    user: "larissa.oliveira224",
    stars: 5, date: "2025-05-28 11:30",
    comment: "entrega super rápida, produto lacrado e original. muito satisfeita com a compra, recomendo sem duvida pra todo mundo",
    photos: ["../fotosavaliacoesiphone/IMG_5738.PNG"]
  },

  // perfil 23.31.20(1).jpeg = Mulher
  {
    avatar: "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.20 (1).jpeg",
    user: "fernandacarvalho8",
    stars: 5, date: "2025-05-24 08:15",
    comment: "Produto incrível. o iPhone 15 Pro é outro nível de smartphone. câmera, tela, desempenho. simplesmente o melhor que já tive"
  },

  // perfil 23.31.20(2).jpeg = Mulher
  {
    avatar: "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.20 (2).jpeg",
    user: "joselinevito224",
    stars: 4, date: "2025-05-20 19:40",
    comment: "chegou uns dias a mais que o prazo, porém produto perfeito. zero avaria, lacrado, nota fiscal. vale muito a pena"
  },

  // perfil 23.31.20(3).jpeg = Homem
  {
    avatar: "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.20 (3).jpeg",
    user: "eltonfw",
    stars: 5, date: "2025-05-16 14:20",
    comment: "Excelente produto e excelente loja. já é a terceira vez que compro aqui e sempre chega tudo certinho. iPhone 15 é show de bola"
  },

  // perfil 23.31.20(4).jpeg = Homem
  {
    avatar: "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.20 (4).jpeg",
    user: "filipegouvea30",
    stars: 5, date: "2025-05-12 10:05",
    comment: "Produto chegou lacrado, original com nota fiscal em mãos. o iPhone 15 Pro Max é simplesmente perfeito. muito feliz com a minha compra"
  },

  // perfil 23.31.20(5).jpeg = Homem
  {
    avatar: "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.20 (5).jpeg",
    user: "nelsoncjr",
    stars: 5, date: "2025-05-08 17:55",
    comment: "super satisfeito com a compra. produto original, entrega rápida, sem nenhum problema. câmera é absurda demais, foto com qualidade de câmera profissional"
  },

  // perfil 23.31.20.jpeg = Mulher
  {
    avatar: "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.20.jpeg",
    user: "ruana.tv",
    stars: 5, date: "2025-05-04 12:35",
    comment: "Comprei o 256gb e chegou in perfeito estado. iOS 17 muito mais fluido, câmera incrível, bateria que dura o dia todo. Indico muito essa loja"
  },

  // perfil 23.31.21(1).jpeg = Homem
  {
    avatar: "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.21 (1).jpeg",
    user: "wagner_dm",
    stars: 5, date: "2025-04-30 09:20",
    comment: "Produto chegou antes do previsto. Tudo lacrado e original. o iPhone 15 superou minhas expectativas em todos os sentidos. câmera então é absurda"
  },

  // perfil 23.31.21(2).jpeg = Homem
  {
    avatar: "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.21 (2).jpeg",
    user: "kaioel4193",
    stars: 5, date: "2025-04-26 21:10",
    comment: "primeiro iphone da vida. simplesmente não existe outra experiência igual. sistema fluido, câmera profissional. me arrependo de ter demorado tanto pra migrar"
  },

  // perfil 23.31.21(3).jpeg = Homem
  {
    avatar: "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.21 (3).jpeg",
    user: "heitoryn",
    stars: 5, date: "2025-04-22 15:50",
    comment: "produto original e entrega rápida. o iPhone 15 é sensacional. câmera captura cada detalhe com qualidade absurda. muito satisfeito com a compra"
  },

  // perfil 23.31.21.jpeg = Homem
  {
    avatar: "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.21.jpeg",
    user: "iagobm",
    stars: 4, date: "2025-04-18 13:30",
    comment: "muito bom o produto. so demorou um pouquinho mais pra chegar. mas veio lacrado, original, nota inclusa. câmera do pro é outra dimensão"
  },

  // ===== SEM FOTO — apenas texto (sem foto de perfil) =====

  { avatar: null, avatarInitial: "J", user: "jean_kr", stars: 5, date: "2025-04-14 11:00",
    comment: "Excelente compra. Produto 100% original, entregou em 4 dias úteis e veio embalado com muita proteção. muito feliz com o iPhone 15" },

  { avatar: null, avatarInitial: "M", user: "muriloap", stars: 5, date: "2025-04-10 18:45",
    comment: "top demais. câmera do iPhone 15 Pro é simplesmente incrível. fiz fotos em show de música e ficou profissional. produto chegou perfeito e rápido" },

  { avatar: null, avatarInitial: "D", user: "diegosz", stars: 5, date: "2025-04-06 08:00",
    comment: "Comprei pra dar de presente pra minha mãe e ela amou. chegou super bem embalado, com nota fiscal, produto original. obrigado pela atenção toda" },

  { avatar: null, avatarInitial: "S", user: "sergioldt", stars: 5, date: "2025-04-02 16:15",
    comment: "Produto 10/10. entregou rápido. iPhone 15 Pro Max com 1TB é a melhor escolha que já fiz. câmera, bateria, desempenho. tudo no máximo" },

  { avatar: null, avatarInitial: "V", user: "vinicius_hw", stars: 5, date: "2025-03-28 20:40",
    comment: "entrega antes do prazo, produto lacrado e original. o iPhone 15 é simplesmente o melhor celular que já tive. recomendo demais essa loja" },

  { avatar: null, avatarInitial: "P", user: "pedroat", stars: 5, date: "2025-03-24 14:10",
    comment: "Já comprei três vezes nessa loja e nunca me decepcionou. o iPhone 15 Pro Max é absurdo. câmera, tela, iOS. tudo perfeito sempre" },

  { avatar: null, avatarInitial: "G", user: "guilherme_fn", stars: 5, date: "2025-03-20 10:30",
    comment: "Produto chegou lacrado, original, nota fiscal inclusa. iPhone 15 Pro é simplesmente o celular dos sonhos. câmera de nível profissional" },

  { avatar: null, avatarInitial: "L", user: "lucianovt", stars: 5, date: "2025-03-16 19:00",
    comment: "recebido perfeito. o iphone 15 foi um salto enorme do meu celular anterior. camera, bateria, tela. tudo muito melhor. muito contente com a compra" },

  { avatar: null, avatarInitial: "B", user: "beto_cs", stars: 4, date: "2025-03-12 12:20",
    comment: "produto muito bom. chegou um dia atrasado mas veio impecável. lacrado, original, sem avaria. o iPhone 15 é excelente no dia a dia" },

  { avatar: null, avatarInitial: "A", user: "ariel_pb", stars: 5, date: "2025-03-08 09:45",
    comment: "comprei o 512gb e o espaço é incrível pra guardar minhas fotos de viagem. câmera do pro max é absurda demais. produto veio perfeito" },

  { avatar: null, avatarInitial: "Z", user: "zachfm", stars: 5, date: "2025-03-04 17:30",
    comment: "Impressionante demais. produto original, entrega rápida. o iPhone 15 Pro transformou minha rotina de trabalho e lazer. melhor compra do ano" },

  { avatar: null, avatarInitial: "O", user: "osmar_rj", stars: 5, date: "2025-02-28 11:00",
    comment: "Excelente produto, excelente vendedor. tudo chegou certinho, lacrado e original. câmera do iPhone 15 pro é outro nível mesmo" },

  { avatar: null, avatarInitial: "N", user: "nikolasdev", stars: 5, date: "2025-02-24 15:55",
    comment: "produto chegou antes do prazo. embalagem muito bem feita, produto zerado. o iPhone 15 é uma obra de arte na mão. recomendo muito" },

  { avatar: null, avatarInitial: "Q", user: "quentinsr", stars: 5, date: "2025-02-20 08:20",
    comment: "Incrível mesmo. câmera 48mp captura tudo com qualidade absurda. iOS 17 voando, sem lag, sem trava. produto original chegou certinho" },

  { avatar: null, avatarInitial: "X", user: "xande_lp", stars: 5, date: "2025-02-16 21:35",
    comment: "meu setup ficou completo com esse iPhone. câmera incrível, tela absurda, processador voando. produto chegou lacrado e bem embalado. 10/10" },

  { avatar: null, avatarInitial: "U", user: "ulissescarvalho", stars: 5, date: "2025-02-12 13:40",
    comment: "Produto top! câmera do iPhone 15 Pro capta qualquer cenário com qualidade. chegou certinho, lacrado, produto original. muito satisfeito" },

  { avatar: null, avatarInitial: "T", user: "thaleskw", stars: 4, date: "2025-02-08 10:15",
    comment: "produto muito bom, demorou mais que o prazo porém veio perfeito. iPhone 15 é sensacional, câmera incrível, bateria muito boa" },

  { avatar: null, avatarInitial: "R", user: "rafael_go", stars: 5, date: "2025-02-04 17:00",
    comment: "comprei o Pro Max 1TB e estou muito feliz. produto chegou lacrado, original, nota fiscal. câmera e desempenho são incomparáveis" },

  { avatar: null, avatarInitial: "P", user: "paulo_hr", stars: 5, date: "2025-01-30 14:25",
    comment: "produto 100% original, entrega antes do prazo, embalagem perfeita. iPhone 15 Pro é simplesmente o melhor smartphone do mundo" },

  { avatar: null, avatarInitial: "M", user: "miguel_ts", stars: 5, date: "2025-01-26 09:50",
    comment: "Recebido em perfeito estado. iOS 17 nesse iPhone voando suave. câmera principal 48MP é de cair o queixo. muito contente com a compra" },

  { avatar: null, avatarInitial: "K", user: "kevinborges", stars: 5, date: "2025-01-22 20:10",
    comment: "Entregou rápido e produto original. o iPhone 15 Pro é um salto enorme de qualidade. câmera, tela, desempenho, bateria. tudo perfeito" },

  { avatar: null, avatarInitial: "J", user: "julio_cv", stars: 5, date: "2025-01-18 12:35",
    comment: "PERFEITO! esse é o único jeito de descrever o iPhone 15. produto chegou lacrado, original, nota inclusa. câmera é de nível profissional" },

  { avatar: null, avatarInitial: "I", user: "ivan_ws", stars: 5, date: "2025-01-14 16:00",
    comment: "produto original chegou rápido e bem embalado. iPhone 15 Pro Max é absurdo de bom. tela, câmera, bateria. tudo no máximo da qualidade" },

  { avatar: null, avatarInitial: "H", user: "hudson_mn", stars: 5, date: "2025-01-10 11:20",
    comment: "Incrível demais. comprei o titânio natural e é lindo demais pessoalmente. câmera principal é show, zoom 5x então é absurdo. chegou lacrado e rápido" },

  { avatar: null, avatarInitial: "G", user: "giovani_af", stars: 4, date: "2025-01-06 08:40",
    comment: "Produto chegou em dia, lacrado e original. apenas o cabo veio numa embalagem um pouco amassada mas o iPhone em si está perfeito" },

  { avatar: null, avatarInitial: "F", user: "felicio_bz", stars: 5, date: "2024-12-30 19:15",
    comment: "melhor presente de natal que pude comprar. iPhone 15 Pro Max chegou antes do natal, lacrado, original. minha filha ficou feliz demais" },

  { avatar: null, avatarInitial: "E", user: "evandro_st", stars: 5, date: "2024-12-26 14:50",
    comment: "Produto excelente. câmera do 15 Pro captura fotos de nível profissional. entrega rápida, produto lacrado e com nota fiscal. muito satisfeito" },

  { avatar: null, avatarInitial: "D", user: "denilson_rq", stars: 5, date: "2024-12-22 10:05",
    comment: "simplesmente o melhor produto que já comprei online. iPhone 15 Pro é incrível. produto chegou lacrado, original, bem antes do prazo" },

  { avatar: null, avatarInitial: "C", user: "ciromv", stars: 5, date: "2024-12-18 21:30",
    comment: "Comprei pra presentear meu irmão de aniversário. chegou no dia certo, lacrado, original. ele ficou louco de feliz com o iPhone 15 Pro" },

  { avatar: null, avatarInitial: "B", user: "braianok", stars: 5, date: "2024-12-14 17:45",
    comment: "produto 10/10. entrega rápida. iPhone 15 Pro Max é o top de linha que eu esperava. câmera absurda, desempenho excelente, bateria ótima" },

  { avatar: null, avatarInitial: "A", user: "anderson_vf", stars: 5, date: "2024-12-10 13:20",
    comment: "recebido perfeito. produto original, lacrado, nota fiscal inclusa. iPhone 15 Pro é o melhor smartphone que já tive nas mãos. recomendo muito" },

  { avatar: null, avatarInitial: "Z", user: "zeca_lm", stars: 5, date: "2024-12-06 09:00",
    comment: "Produto chegou antes do prazo, embalado com muito cuidado. o iPhone 15 é simplesmente perfeito. câmera, tela, iOS. nada a reclamar" },

  { avatar: null, avatarInitial: "Y", user: "yuriab", stars: 5, date: "2024-12-02 15:35",
    comment: "iPhone 15 Pro Max é sensacional. câmera capta tudo em ultra resolução, zoom 5x absurdo. produto chegou lacrado e bem antes do prazo" },

  { avatar: null, avatarInitial: "W", user: "waldircn", stars: 4, date: "2024-11-28 12:00",
    comment: "muito bom, produto original e entrega ok. câmera do 15 pro é de outro nível. so achei que demorou um pouco mas chegou tudo perfeito" },

  { avatar: null, avatarInitial: "V", user: "valdeci_ot", stars: 5, date: "2024-11-24 19:50",
    comment: "Excelente loja e produto. iPhone 15 Pro é incrível. câmera profissional, desempenho absurdo. entrega rápida e produto lacrado" },

  { avatar: null, avatarInitial: "U", user: "ubiratan_js", stars: 5, date: "2024-11-20 10:25",
    comment: "produto chegou certinho, lacrado, original com nota. o iPhone 15 é uma revolução. câmera absurda, iOS 17 muito fluido. recomendo" },

  { avatar: null, avatarInitial: "T", user: "tadeurl", stars: 5, date: "2024-11-16 16:40",
    comment: "Incrível demais. produto original, chegou antes do prazo, embalagem perfeita. iPhone 15 Pro é show. câmera é incomparável com qualquer android" },

  { avatar: null, avatarInitial: "S", user: "silvio_cf", stars: 5, date: "2024-11-12 08:30",
    comment: "Produto 10/10. entregou rápido. iPhone 15 Pro Max com 1TB é a melhor escolha que já fiz. câmera, bateria, desempenho. tudo no máximo" },

  { avatar: null, avatarInitial: "R", user: "romulo_dk", stars: 5, date: "2024-11-08 21:15",
    comment: "produto chegou lacrado, original, nota inclusa. iPhone 15 Pro é sensacional. câmera principal 48MP captura tudo com qualidade absurda" },

  { avatar: null, avatarInitial: "Q", user: "quirinoav", stars: 5, date: "2024-11-04 14:00",
    comment: "recebido em perfeito estado. iPhone 15 Pro Max é o melhor celular que já tive. câmera incrível, tela linda, iOS 17 fluido. recomendo" },

  { avatar: null, avatarInitial: "P", user: "pericles_uw", stars: 5, date: "2024-10-30 11:45",
    comment: "Produto original chegou rápido. iPhone 15 Pro é excelente in tudo. câmera, tela, desempenho. minha produtividade aumentou muito" },

  { avatar: null, avatarInitial: "O", user: "olimpio_bh", stars: 5, date: "2024-10-26 17:20",
    comment: "Entregou 2 dias antes do prazo. produto lacrado, original. o iPhone 15 Pro Max é sensacional. câmera absurda, iOS 17 muito fluido" },

  { avatar: null, avatarInitial: "N", user: "novaes_ct", stars: 4, date: "2024-10-22 13:55",
    comment: "produto muito bom. iPhone 15 Pro é ótimo. so a caixa chegou um pouco amassada mas o celular dentro estava lacrado e perfeito" },

  { avatar: null, avatarInitial: "M", user: "mozartef", stars: 5, date: "2024-10-18 09:30",
    comment: "Excelente compra. produto original, entrega rápida. iPhone 15 Pro Max é outro nível. câmera profissional, bateria excelente, iOS 17 fluido" },

  { avatar: null, avatarInitial: "L", user: "lorival_mg", stars: 5, date: "2024-10-14 20:05",
    comment: "produto chegou em perfeito estado, lacrado, original com nota fiscal. o iPhone 15 é uma experiência completamente diferente. muito satisfeito" },

  { avatar: null, avatarInitial: "K", user: "kleber_rs", stars: 5, date: "2024-10-10 15:40",
    comment: "Incrível mesmo. iPhone 15 Pro chegou lacrado, original, entregou rápido. câmera de qualidade absurda. estou usando no trabalho e é show" },

  { avatar: null, avatarInitial: "J", user: "joasvp", stars: 5, date: "2024-10-06 12:15",
    comment: "produto excelente. entrega antes do prazo. iPhone 15 Pro Max é o topo de linha que eu precisava. câmera, tela, desempenho. tudo perfeito" },

  { avatar: null, avatarInitial: "I", user: "ismaelrj", stars: 5, date: "2024-10-02 08:50",
    comment: "Produto 100% original, chegou lacrado e rápido. o iPhone 15 Pro é simplesmente incrível. câmera principal 48mp é de outro planeta" },

  { avatar: null, avatarInitial: "H", user: "herculano_fx", stars: 5, date: "2024-09-28 19:25",
    comment: "recebido perfeito. produto original. iPhone 15 Pro Max é show. câmera incrível, bateria ótima, iOS 17 muito fluido. recomendo muito" },

  { avatar: null, avatarInitial: "G", user: "geraldo_qt", stars: 5, date: "2024-09-24 14:00",
    comment: "produto chegou antes do prazo, lacrado, original. o iPhone 15 Pro é uma obra de arte. câmera, tela, desempenho. nada a reclamar" },

  { avatar: null, avatarInitial: "F", user: "flavio_nk", stars: 5, date: "2024-09-20 10:35",
    comment: "Excelente loja. produto original, entrega rápida. iPhone 15 Pro Max é absurdo de bom. câmera 5x então é irreal. muito feliz com a compra" },

  { avatar: null, avatarInitial: "E", user: "ewerton_cs", stars: 5, date: "2024-09-16 21:10",
    comment: "produto chegou lacrado, original, nota fiscal. o iPhone 15 Pro é excelente em tudo. câmera, tela, iOS 17. minha vida mudou com esse celular" },

  { avatar: null, avatarInitial: "D", user: "donatopage", stars: 4, date: "2024-09-12 17:45",
    comment: "Produto chegou um pouco depois do prazo, mas veio perfeito. lacrado, original. iPhone 15 é muito bom. câmera excelente, tela linda" },

  { avatar: null, avatarInitial: "C", user: "colombo_ej", stars: 5, date: "2024-09-08 13:20",
    comment: "produto incrível. entrega rápida, lacrado, original. iPhone 15 Pro Max é simplesmente o melhor celular do mundo. câmera absurda" },

  { avatar: null, avatarInitial: "B", user: "baltazar_rm", stars: 5, date: "2024-09-04 09:55",
    comment: "recebido antes do prazo. produto 100% original, lacrado, nota fiscal inclusa. iPhone 15 Pro é excelente. câmera profissional, iOS fluido" },

  { avatar: null, avatarInitial: "A", user: "abilioneto", stars: 5, date: "2024-08-30 16:30",
    comment: "Primeiro iPhone da minha vida e estou impressionado. câmera é de outro nível, iOS 17 muito intuitivo. produto chegou lacrado e rápido" },

  { avatar: null, avatarInitial: "Z", user: "zito_bs", stars: 5, date: "2024-08-26 11:05",
    comment: "produto top demais. entregou rápido, lacrado, original. o iPhone 15 Pro é show. câmera incrível, tela linda, iOS 17 muito fluido" },

  { avatar: null, avatarInitial: "Y", user: "yansql", stars: 5, date: "2024-08-22 20:40",
    comment: "Produto chegou em perfeito estado. lacrado, original, nota fiscal. iPhone 15 Pro Max é absurdo de bom. câmera, tela, desempenho. top" },

  { avatar: null, avatarInitial: "X", user: "xerxes_dn", stars: 5, date: "2024-08-18 15:15",
    comment: "excelente compra. produto original, entrega antes do prazo. iPhone 15 Pro é sensacional. câmera 48MP e zoom 5x são de outro planeta" },

  { avatar: null, avatarInitial: "W", user: "wendelop", stars: 5, date: "2024-08-14 12:50",
    comment: "Produto 100% original chegou lacrado e rápido. o iPhone 15 Pro Max é incrível demais. câmera, bateria, desempenho. tudo no máximo" },

  { avatar: null, avatarInitial: "V", user: "venancio_rb", stars: 5, date: "2024-08-10 09:25",
    comment: "produto chegou antes do prazo, lacrado, original. iPhone 15 Pro é show. câmera profissional, tela linda, iOS 17 muito fluido. recomendo" },

  { avatar: null, avatarInitial: "U", user: "ubaldo_fw", stars: 4, date: "2024-08-06 19:00",
    comment: "muito bom. produto original, chegou um dia atrasado mas veio lacrado e sem avaria. iPhone 15 Pro é excelente. câmera incrível" },

  { avatar: null, avatarInitial: "T", user: "toninhocs", stars: 5, date: "2024-08-02 14:35",
    comment: "produto incrível. entrega rápida, lacrado, original, nota fiscal. iPhone 15 Pro Max é o melhor celular que já tive. câmera é de cair o queixo" },

  { avatar: null, avatarInitial: "S", user: "salomao_vt", stars: 5, date: "2024-07-28 11:10",
    comment: "recebido em perfeito estado. produto original, lacrado. iPhone 15 Pro é excelente. câmera 48MP, zoom 5x, iOS 17 fluido. muito feliz" },

  { avatar: null, avatarInitial: "R", user: "renilton_bg", stars: 5, date: "2024-07-24 08:45",
    comment: "Produto original chegou rápido. iPhone 15 Pro Max é show. câmera profissional, tela linda, iOS 17 muito fluido. nada a reclamar" },

  { avatar: null, avatarInitial: "Q", user: "queops_nj", stars: 5, date: "2024-07-20 21:20",
    comment: "excelente loja e produto. entregou antes do prazo, lacrado, original. iPhone 15 Pro é incrível. câmera, tela, desempenho. top demais" },

  { avatar: null, avatarInitial: "P", user: "polido_aw", stars: 5, date: "2024-07-16 17:55",
    comment: "Produto chegou lacrado, original, nota fiscal. iPhone 15 Pro Max é sensacional. câmera absurda, bateria excelente, iOS 17 fluido" },

  { avatar: null, avatarInitial: "O", user: "orlandinhosv", stars: 5, date: "2024-07-12 13:30",
    comment: "produto 100% original, entrega rápida. o iPhone 15 Pro é simplesmente o melhor smartphone. câmera de nivel profissional mesmo" },

  { avatar: null, avatarInitial: "N", user: "newton_pk", stars: 5, date: "2024-07-08 10:05",
    comment: "Incrível demais. produto chegou lacrado, original, nota inclusa. iPhone 15 Pro Max é show. câmera, tela, iOS 17. nada a reclamar" },

  { avatar: null, avatarInitial: "M", user: "maneco_uc", stars: 5, date: "2024-07-04 20:40",
    comment: "produto chegou antes do prazo. lacrado, original. iPhone 15 Pro é excelente. câmera 48MP absurda, zoom 5x irreal. muito satisfeito" },

  { avatar: null, avatarInitial: "L", user: "leoarte_dm", stars: 4, date: "2024-06-30 15:15",
    comment: "muito bom o produto. so chegou um pouquinho depois do prazo. mas veio lacrado, original, sem nenhuma avaria. iPhone 15 é excelente" },

  { avatar: null, avatarInitial: "K", user: "kamaufn", stars: 5, date: "2024-06-26 11:50",
    comment: "produto incrível. entrega rápida, lacrado, original. iPhone 15 Pro Max é o topo. câmera, bateria, desempenho. simplesmente perfeito" }
];

// ==========================================
// SISTEMA DE RENDERIZAÇÃO COM PAGINAÇÃO
// ==========================================
(function() {
  const INITIAL_COUNT = 10;
  const LOAD_MORE_COUNT = 15;
  let currentIndex = 0;
  let reviewsContainer = null;
  let loadMoreBtn = null;
  let totalReviewsCount = 4217;

  function renderStars(count) {
    const full = Math.floor(count);
    const half = count % 1 >= 0.5;
    let html = '';
    for (let i = 0; i < full; i++) html += '⭐';
    if (half) html += '✨';
    return html;
  }

  function renderReviewCard(review) {
    const initial = review.avatarInitial || review.user.charAt(0).toUpperCase();
    const avatarHtml = review.avatar
      ? `<img src="${review.avatar}" alt="${review.user}" onerror="this.outerHTML='<div class=\\'review-avatar-placeholder\\'>${initial}</div>'">`
      : `<div class="review-avatar-placeholder">${initial}</div>`;

    const photosHtml = (review.photos && review.photos.length > 0)
      ? `<div class="review-photos">
           ${review.photos.map(p => `<img class="review-photo" src="${p}" alt="Foto da avaliação" onerror="this.style.display='none'" onclick="openPhotoModal(this.src)">`).join('')}
         </div>`
      : '';

    return `<div class="review-card">
      <div class="review-header">
        <div class="review-user">
          <div class="review-avatar">${avatarHtml}</div>
          <div class="review-user-info">
            <div class="review-user-name">${review.user}</div>
            <div class="review-user-stars">${renderStars(review.stars)}</div>
            <div class="review-date">${review.date}</div>
          </div>
        </div>
      </div>
      <p class="review-comment">${review.comment}</p>
      ${photosHtml}
    </div>`;
  }

  function loadReviews(count) {
    const slice = IPHONE_REVIEWS.slice(currentIndex, currentIndex + count);
    slice.forEach(r => {
      reviewsContainer.insertAdjacentHTML('beforeend', renderReviewCard(r));
    });
    currentIndex += slice.length;
    if (currentIndex >= IPHONE_REVIEWS.length && loadMoreBtn) {
      loadMoreBtn.style.display = 'none';
    }
  }

  function initReviews() {
    const section = document.querySelector('.reviews-section');
    if (!section) return;

    const existingCards = section.querySelectorAll('.review-card');
    existingCards.forEach(c => c.remove());
    const existingBtn = section.querySelector('.load-more-btn');
    if (existingBtn) existingBtn.remove();
    const existingList = section.querySelector('#reviews-list');
    if (existingList) existingList.remove();

    reviewsContainer = document.createElement('div');
    reviewsContainer.id = 'reviews-list';
    section.appendChild(reviewsContainer);

    loadMoreBtn = document.createElement('button');
    loadMoreBtn.className = 'load-more-btn';
    loadMoreBtn.style.cssText = 'display:block; width:100%; margin-top:16px; padding:11px 12px; background:#ffffff; border:1.5px solid #fe2c55 !important; border-radius:6px; font-size:14px; color:#fe2c55 !important; font-weight:700 !important; cursor:pointer; text-align:center; outline:none; transition: background-color 0.2s;';
    loadMoreBtn.textContent = `Ver mais avaliações (${totalReviewsCount.toLocaleString('pt-BR')}) ›`;
    loadMoreBtn.onclick = function() {
      loadReviews(LOAD_MORE_COUNT);
      totalReviewsCount = Math.max(0, totalReviewsCount - 15);
      loadMoreBtn.textContent = `Ver mais avaliações (${totalReviewsCount.toLocaleString('pt-BR')}) ›`;
    };
    loadMoreBtn.onmouseenter = () => loadMoreBtn.style.backgroundColor = 'rgba(254, 44, 85, 0.05)';
    loadMoreBtn.onmouseleave = () => loadMoreBtn.style.backgroundColor = '#ffffff';
    section.appendChild(loadMoreBtn);

    loadReviews(INITIAL_COUNT);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initReviews);
  } else {
    initReviews();
  }
})();
