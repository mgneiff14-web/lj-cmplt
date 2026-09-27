// =============================================================
// AVALIAÇÕES DO PRODUTO SCOOTER ELÉTRICA — produto-102.html
// Sistema com paginação: 10 iniciais + 15 a cada "ver mais"
// =============================================================

const SCOOTER_REVIEWS = [
  {
    "avatar": "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.11 (1).jpeg",
    "user": "biancafs",
    "stars": 5,
    "date": "2026-08-05 19:59",
    "comment": "Sensacional. Vale a pena.",
    "photos": [
      "../fotosavaliacaoscooter/D_NQ_NP_2X_602450-MLA95567107365_102025-F.webp"
    ]
  },
  {
    "avatar": "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.11 (2).jpeg",
    "user": "caroline_mendes",
    "stars": 5,
    "date": "2026-08-05 19:47",
    "comment": "Veio com nota fiscal, tudo em meu nome. Burocracia zero.",
    "photos": [
      "../fotosavaliacaoscooter/D_NQ_NP_2X_602927-MLA92708210548_092025-F.webp",
      "../fotosavaliacaoscooter/D_NQ_NP_2X_656631-MLA92708248406_092025-F.webp",
      "../fotosavaliacaoscooter/D_NQ_NP_2X_637490-MLA93119933911_092025-F.webp"
    ]
  },
  {
    "avatar": "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.11.jpeg",
    "user": "93gabriel",
    "stars": 5,
    "date": "2026-08-04 13:31",
    "comment": "a motoquinha é bruta!! n imaginava q era tao confortavel com esse banco, recomendo sem duvidas!!!",
    "photos": [
      "../fotosavaliacaoscooter/D_NQ_NP_2X_616709-MLA105179513850_012026-F.webp"
    ]
  },
  {
    "avatar": "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.12 (1).jpeg",
    "user": "leoviana",
    "stars": 5,
    "date": "2026-08-03 12:27",
    "comment": "perfeito, sem nenhum arranhão.",
    "photos": [
      "../fotosavaliacaoscooter/D_NQ_NP_2X_630516-MLA113006755166_072026-F.webp"
    ]
  },
  {
    "avatar": "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.12 (3).jpeg",
    "user": "thiago.souza",
    "stars": 5,
    "date": "2026-08-02 11:48",
    "comment": "O alarme é alto e funciona bem, gostei da chave reserva tb",
    "photos": [
      "../fotosavaliacaoscooter/D_NQ_NP_2X_640462-MLA110415337890_052026-F.webp",
      "../fotosavaliacaoscooter/D_NQ_NP_2X_689224-MLA110415537886_052026-F.webp"
    ]
  },
  {
    "avatar": "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.12 (4).jpeg",
    "user": "andersonfz",
    "stars": 5,
    "date": "2026-08-02 11:17",
    "comment": "simplesmente perfeita. 0 arrependimentos",
    "photos": [
      "../fotosavaliacaoscooter/D_NQ_NP_2X_665536-MLA94448028365_102025-F.webp"
    ]
  },
  {
    "avatar": "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.12.jpeg",
    "user": "vitor.rm",
    "stars": 5,
    "date": "2026-08-02 19:13",
    "comment": "Fácil de pilotar, até minha esposa que não sabe andar de moto aprendeu no primeiro dia.",
    "photos": [
      "../fotosavaliacaoscooter/D_NQ_NP_2X_710959-MLA106944873727_022026-F.webp"
    ]
  },
  {
    "avatar": "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.13 (1).jpeg",
    "user": "renatoag55",
    "stars": 5,
    "date": "2026-08-01 08:57",
    "comment": "Muito boa a scooter, comprei pra ir pro trabalho e não me arrependo, econômica demais.",
    "photos": [
      "../fotosavaliacaoscooter/D_NQ_NP_2X_719869-MLA85819074810_062025-F.webp"
    ]
  },
  {
    "avatar": "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.13 (2).jpeg",
    "user": "fabio_otavio",
    "stars": 5,
    "date": "2026-07-31 18:32",
    "comment": "Top demais, ando na rua e o pessoal fica olhando kkkk muito style",
    "photos": [
      "../fotosavaliacaoscooter/D_NQ_NP_2X_736167-MLA95195326408_102025-F.webp",
      "../fotosavaliacaoscooter/D_NQ_NP_2X_754640-MLA95195395912_102025-F.webp",
      "../fotosavaliacaoscooter/D_NQ_NP_2X_955511-MLA95195356328_102025-F.webp"
    ]
  },
  {
    "avatar": "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.13 (3).jpeg",
    "user": "rodrigomoraes",
    "stars": 5,
    "date": "2026-07-31 09:13",
    "comment": "O carregador esquenta um pouco mas carrega super rápido, recomendo",
    "photos": [
      "../fotosavaliacaoscooter/D_NQ_NP_2X_741227-MLA95124711686_102025-F.webp"
    ]
  },
  {
    "avatar": "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.13 (4).jpeg",
    "user": "cristian_nb38",
    "stars": 4,
    "date": "2026-07-30 20:46",
    "comment": "Chegou rápido e veio muito bem embalada. A potência surpreende nas subidas da minha rua.",
    "photos": [
      "../fotosavaliacaoscooter/D_NQ_NP_2X_745516-MLA111225387283_052026-F.webp",
      "../fotosavaliacaoscooter/D_NQ_NP_2X_894233-MLA111225445695_052026-F.webp"
    ]
  },
  {
    "avatar": "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.13 (5).jpeg",
    "user": "rafael_jc14",
    "stars": 5,
    "date": "2026-07-30 13:18",
    "comment": "Excelente custo-benefício. Uso todo dia pra ir na padaria e no mercado.",
    "photos": [
      "../fotosavaliacaoscooter/D_NQ_NP_2X_746228-MLA87516041182_072025-F.webp",
      "../fotosavaliacaoscooter/D_NQ_NP_2X_942138-MLA87516060910_072025-F.webp"
    ]
  },
  {
    "avatar": "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.13.jpeg",
    "user": "mateus_gv",
    "stars": 5,
    "date": "2026-07-30 22:39",
    "comment": "A bateria dura bastante se souber usar, ando uns 25km fácil na cidade",
    "photos": [
      "../fotosavaliacaoscooter/D_NQ_NP_2X_772611-MLA95631939127_102025-F.webp"
    ]
  },
  {
    "avatar": "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.14 (1).jpeg",
    "user": "edsonpr47",
    "stars": 5,
    "date": "2026-07-29 13:23",
    "comment": "chegou com caixa intacta, já andei uns 30km nela hoje.",
    "photos": [
      "../fotosavaliacaoscooter/D_NQ_NP_2X_782716-MLA87846906699_072025-F.webp"
    ]
  },
  {
    "avatar": "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.14 (2).jpeg",
    "user": "igornf",
    "stars": 5,
    "date": "2026-07-28 12:07",
    "comment": "chegou com caixa intacta, já andei uns 30km nela hoje.",
    "photos": [
      "../fotosavaliacaoscooter/D_NQ_NP_2X_786620-MLA89727531376_082025-F.webp"
    ]
  },
  {
    "avatar": "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.14 (3).jpeg",
    "user": "lucas_werner",
    "stars": 5,
    "date": "2026-07-27 17:29",
    "comment": "chegou antes do prazo, a scooter é braba demais pra subir ladeira, gostei mt",
    "photos": [
      "../fotosavaliacaoscooter/D_NQ_NP_2X_787224-MLA95130885108_102025-F.webp"
    ]
  },
  {
    "avatar": "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.14 (4).jpeg",
    "user": "samuelde71",
    "stars": 5,
    "date": "2026-07-27 09:04",
    "comment": "produto mt bom, o único problema foi a transportadora q demorou 1 dia a mais da previsao",
    "photos": [
      "../fotosavaliacaoscooter/D_NQ_NP_2X_789878-MLA87846886871_072025-F.webp",
      "../fotosavaliacaoscooter/D_NQ_NP_2X_864172-MLA87846857547_072025-F.webp",
      "../fotosavaliacaoscooter/D_NQ_NP_2X_942965-MLA87846896827_072025-F.webp"
    ]
  },
  {
    "avatar": "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.14 (5).jpeg",
    "user": "henrique.alves",
    "stars": 5,
    "date": "2026-07-27 21:36",
    "comment": "Melhor investimento q fiz esse ano. Economia de gasolina ta gigante.",
    "photos": [
      "../fotosavaliacaoscooter/D_NQ_NP_2X_805917-MLA111449300124_052026-F.webp"
    ]
  },
  {
    "avatar": "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.14.jpeg",
    "user": "diogo_cm",
    "stars": 5,
    "date": "2026-07-27 21:50",
    "comment": "Melhor investimento q fiz esse ano. Economia de gasolina ta gigante.",
    "photos": [
      "../fotosavaliacaoscooter/D_NQ_NP_2X_817037-MLA115449761551_082026-F.webp"
    ]
  },
  {
    "avatar": "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.15 (1).jpeg",
    "user": "alex.junior",
    "stars": 5,
    "date": "2026-07-26 16:44",
    "comment": "Top demais, ando na rua e o pessoal fica olhando kkkk muito style",
    "photos": [
      "../fotosavaliacaoscooter/D_NQ_NP_2X_818588-MLA114122043908_082026-F.webp"
    ]
  },
  {
    "avatar": "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.15 (2).jpeg",
    "user": "gustavomn84",
    "stars": 4,
    "date": "2026-07-26 17:13",
    "comment": "O carregador esquenta um pouco mas carrega super rápido, recomendo",
    "photos": [
      "../fotosavaliacaoscooter/D_NQ_NP_2X_828789-MLA110353727751_042026-F.webp"
    ]
  },
  {
    "avatar": "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.15 (3).jpeg",
    "user": "pedro.sv",
    "stars": 5,
    "date": "2026-07-26 22:59",
    "comment": "Otima para o dia a dia, coloco a bolsa na cestinha e vou",
    "photos": [
      "../fotosavaliacaoscooter/D_NQ_NP_2X_854229-MLA112217206258_062026-F.webp"
    ]
  },
  {
    "avatar": "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.15 (4).jpeg",
    "user": "joaocb50",
    "stars": 5,
    "date": "2026-07-26 17:12",
    "comment": "bateria removivel ajuda bastante pra eu subir e carregar no AP",
    "photos": [
      "../fotosavaliacaoscooter/D_NQ_NP_2X_858966-MLA95396114750_102025-F.webp"
    ]
  },
  {
    "avatar": "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.15.jpeg",
    "user": "caiolf",
    "stars": 5,
    "date": "2026-07-25 11:31",
    "comment": "Melhor investimento q fiz esse ano. Economia de gasolina ta gigante.",
    "photos": [
      "../fotosavaliacaoscooter/D_NQ_NP_2X_862504-MLA110919100781_042026-F.webp"
    ]
  },
  {
    "avatar": "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.16 (1).jpeg",
    "user": "felipe.td",
    "stars": 5,
    "date": "2026-07-24 14:46",
    "comment": "O alarme é alto e funciona bem, gostei da chave reserva tb",
    "photos": [
      "../fotosavaliacaoscooter/D_NQ_NP_2X_870203-MLA88570091960_072025-F.webp"
    ]
  },
  {
    "avatar": "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.16 (2).jpeg",
    "user": "tuliok",
    "stars": 5,
    "date": "2026-07-23 11:14",
    "comment": "chegou antes do prazo, a scooter é braba demais pra subir ladeira, gostei mt",
    "photos": [
      "../fotosavaliacaoscooter/D_NQ_NP_2X_873086-MLA109485722052_042026-F.webp"
    ]
  },
  {
    "avatar": "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.16 (3).jpeg",
    "user": "brunosa",
    "stars": 5,
    "date": "2026-07-22 08:03",
    "comment": "Recomendo, veio tudo original certinho.",
    "photos": [
      "../fotosavaliacaoscooter/D_NQ_NP_2X_877072-MLA105400943332_012026-F.webp"
    ]
  },
  {
    "avatar": "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.16 (4).jpeg",
    "user": "william_nc",
    "stars": 5,
    "date": "2026-07-21 17:51",
    "comment": "A bateria dura bastante se souber usar, ando uns 25km fácil na cidade",
    "photos": [
      "../fotosavaliacaoscooter/D_NQ_NP_2X_879068-MLA105993527603_012026-F.webp"
    ]
  },
  {
    "avatar": "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.16.jpeg",
    "user": "danilo_rv",
    "stars": 5,
    "date": "2026-07-21 09:23",
    "comment": "produto mt bom, o único problema foi a transportadora q demorou 1 dia a mais da previsao",
    "photos": [
      "../fotosavaliacaoscooter/D_NQ_NP_2X_911844-MLA105401354826_012026-F.webp"
    ]
  },
  {
    "avatar": "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.17 (1).jpeg",
    "user": "renan_gv",
    "stars": 5,
    "date": "2026-07-21 10:50",
    "comment": "comprei p minha filha ir pra faculdade, ela amou, super prática",
    "photos": [
      "../fotosavaliacaoscooter/D_NQ_NP_2X_921206-MLA108820542893_032026-F.webp"
    ]
  },
  {
    "avatar": "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.17 (2).jpeg",
    "user": "juliano_ks",
    "stars": 5,
    "date": "2026-07-20 12:55",
    "comment": "simplesmente perfeita. 0 arrependimentos",
    "photos": [
      "../fotosavaliacaoscooter/D_NQ_NP_2X_928233-MLA84224501060_052025-F.webp"
    ]
  },
  {
    "avatar": "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.17 (3).jpeg",
    "user": "adrianope",
    "stars": 5,
    "date": "2026-07-20 15:31",
    "comment": "Recomendo, veio tudo original certinho.",
    "photos": [
      "../fotosavaliacaoscooter/D_NQ_NP_2X_961306-MLA111569864062_062026-F.webp"
    ]
  },
  {
    "avatar": "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.17 (4).jpeg",
    "user": "cleison_bt",
    "stars": 5,
    "date": "2026-07-19 11:06",
    "comment": "simplesmente perfeita. 0 arrependimentos",
    "photos": [
      "../fotosavaliacaoscooter/D_NQ_NP_2X_965474-MLA114224110701_072026-F.webp"
    ]
  },
  {
    "avatar": "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.12 (2).jpeg",
    "user": "marcosantonio_bh",
    "stars": 5,
    "date": "2026-07-19 21:43",
    "comment": "Acelera bem. O painel é super legal de noite. Vale cada centavo."
  },
  {
    "avatar": "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.17 (5).jpeg",
    "user": "leandro_cm",
    "stars": 5,
    "date": "2026-07-19 15:02",
    "comment": "chegou antes do prazo, a scooter é braba demais pra subir ladeira, gostei mt"
  },
  {
    "avatar": "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.17.jpeg",
    "user": "marcelo_fv",
    "stars": 5,
    "date": "2026-07-18 15:38",
    "comment": "muito forte o motor, sobe os morros daqui do meu bairro sem chorar"
  },
  {
    "avatar": "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.18 (1).jpeg",
    "user": "paulo_costa",
    "stars": 5,
    "date": "2026-07-17 12:46",
    "comment": "Gostei muito, mas faltou um retrovisor esquerdo kkk mentira veio os dois certinho"
  },
  {
    "avatar": "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.18 (2).jpeg",
    "user": "patrick_rn",
    "stars": 5,
    "date": "2026-07-17 15:17",
    "comment": "comprei preta mto bonita!! a lanterna ilumina bem de noite tb"
  },
  {
    "avatar": "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.18 (3).jpeg",
    "user": "otaviosg",
    "stars": 5,
    "date": "2026-07-16 11:47",
    "comment": "bateria removivel ajuda bastante pra eu subir e carregar no AP"
  },
  {
    "avatar": "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.18 (4).jpeg",
    "user": "rogerio_ba",
    "stars": 4,
    "date": "2026-07-15 18:22",
    "comment": "Fácil de pilotar, até minha esposa que não sabe andar de moto aprendeu no primeiro dia."
  },
  {
    "avatar": "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.18 (5).jpeg",
    "user": "cezar_ml",
    "stars": 5,
    "date": "2026-07-14 08:30",
    "comment": "Acelera bem. O painel é super legal de noite. Vale cada centavo."
  },
  {
    "avatar": "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.18.jpeg",
    "user": "ezequiel.fn",
    "stars": 5,
    "date": "2026-07-13 11:52",
    "comment": "simplesmente perfeita. 0 arrependimentos"
  },
  {
    "avatar": "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.19 (1).jpeg",
    "user": "natanwp",
    "stars": 5,
    "date": "2026-07-12 11:41",
    "comment": "Bicicleta maravilhosa, super recomendo!!"
  },
  {
    "avatar": "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.19 (2).jpeg",
    "user": "davirs",
    "stars": 5,
    "date": "2026-07-11 11:10",
    "comment": "Acelera bem. O painel é super legal de noite. Vale cada centavo."
  },
  {
    "avatar": "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.19 (3).jpeg",
    "user": "michael_ao",
    "stars": 5,
    "date": "2026-07-10 10:08",
    "comment": "bom custo beneficio... montei rapido em casa msm, tava td certinho"
  },
  {
    "avatar": "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.19 (4).jpeg",
    "user": "yagobf32",
    "stars": 5,
    "date": "2026-07-10 16:23",
    "comment": "Perfeita para fugir do trânsito. pego ela todo dia pro serviço"
  },
  {
    "avatar": "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.19.jpeg",
    "user": "larissa.oliveira224",
    "stars": 5,
    "date": "2026-07-09 11:25",
    "comment": "O carregador esquenta um pouco mas carrega super rápido, recomendo"
  },
  {
    "avatar": "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.20 (1).jpeg",
    "user": "fernandacarvalho8",
    "stars": 5,
    "date": "2026-07-09 14:53",
    "comment": "Perfeita para fugir do trânsito. pego ela todo dia pro serviço"
  },
  {
    "avatar": "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.20 (2).jpeg",
    "user": "joselinevito224",
    "stars": 4,
    "date": "2026-07-09 15:33",
    "comment": "Veio com nota fiscal, tudo em meu nome. Burocracia zero."
  },
  {
    "avatar": "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.20 (3).jpeg",
    "user": "eltonfw",
    "stars": 5,
    "date": "2026-07-09 13:54",
    "comment": "O alarme é alto e funciona bem, gostei da chave reserva tb"
  },
  {
    "avatar": "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.20 (4).jpeg",
    "user": "filipegouvea30",
    "stars": 5,
    "date": "2026-07-08 19:42",
    "comment": "tinha um barulhinho na roda dianteira, joguei um wd40 e sumiu, agora tá parecendo um fantasma de silenciosa kkkk"
  },
  {
    "avatar": "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.20 (5).jpeg",
    "user": "nelsoncjr",
    "stars": 5,
    "date": "2026-07-07 15:09",
    "comment": "Recomendo, veio tudo original certinho."
  },
  {
    "avatar": "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.20.jpeg",
    "user": "ruana.tv",
    "stars": 5,
    "date": "2026-07-06 13:48",
    "comment": "Gente, eu to apaixonada!! A minha scooter chegou e é a coisa mais linda"
  },
  {
    "avatar": "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.21 (1).jpeg",
    "user": "wagner_dm",
    "stars": 5,
    "date": "2026-07-05 08:50",
    "comment": "Bicicleta maravilhosa, super recomendo!!"
  },
  {
    "avatar": "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.21 (2).jpeg",
    "user": "kaioel4193",
    "stars": 5,
    "date": "2026-07-05 09:41",
    "comment": "Melhor investimento q fiz esse ano. Economia de gasolina ta gigante."
  },
  {
    "avatar": "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.21 (3).jpeg",
    "user": "heitoryn",
    "stars": 5,
    "date": "2026-07-04 20:24",
    "comment": "bom custo beneficio... montei rapido em casa msm, tava td certinho"
  },
  {
    "avatar": "../FOTOSDEPERFIL/WhatsApp Image 2026-06-29 at 23.31.21.jpeg",
    "user": "iagobm",
    "stars": 4,
    "date": "2026-07-03 12:46",
    "comment": "Veio com nota fiscal, tudo em meu nome. Burocracia zero."
  },
  {
    "avatar": null,
    "avatarInitial": "J",
    "user": "jean_kr",
    "stars": 5,
    "date": "2026-07-02 19:54",
    "comment": "tinha um barulhinho na roda dianteira, joguei um wd40 e sumiu, agora tá parecendo um fantasma de silenciosa kkkk"
  },
  {
    "avatar": null,
    "avatarInitial": "M",
    "user": "muriloap",
    "stars": 5,
    "date": "2026-07-02 08:56",
    "comment": "chegou antes do prazo, a scooter é braba demais pra subir ladeira, gostei mt"
  },
  {
    "avatar": null,
    "avatarInitial": "D",
    "user": "diegosz",
    "stars": 5,
    "date": "2026-07-01 20:54",
    "comment": "Perfeita para fugir do trânsito. pego ela todo dia pro serviço"
  },
  {
    "avatar": null,
    "avatarInitial": "S",
    "user": "sergioldt",
    "stars": 5,
    "date": "2026-07-01 20:13",
    "comment": "chegou lacrada, manual meio dificil mas a montagem é logica"
  },
  {
    "avatar": null,
    "avatarInitial": "V",
    "user": "vinicius_hw",
    "stars": 5,
    "date": "2026-06-30 17:26",
    "comment": "a motoquinha é bruta!! n imaginava q era tao confortavel com esse banco, recomendo sem duvidas!!!"
  },
  {
    "avatar": null,
    "avatarInitial": "P",
    "user": "pedroat",
    "stars": 5,
    "date": "2026-06-30 19:33",
    "comment": "Recomendo, veio tudo original certinho."
  },
  {
    "avatar": null,
    "avatarInitial": "G",
    "user": "guilherme_fn",
    "stars": 5,
    "date": "2026-06-30 12:04",
    "comment": "A bateria dura bastante se souber usar, ando uns 25km fácil na cidade"
  },
  {
    "avatar": null,
    "avatarInitial": "L",
    "user": "lucianovt",
    "stars": 5,
    "date": "2026-06-29 16:54",
    "comment": "comprei p minha filha ir pra faculdade, ela amou, super prática"
  },
  {
    "avatar": null,
    "avatarInitial": "B",
    "user": "beto_cs",
    "stars": 4,
    "date": "2026-06-28 14:11",
    "comment": "bateria removivel ajuda bastante pra eu subir e carregar no AP"
  },
  {
    "avatar": null,
    "avatarInitial": "A",
    "user": "ariel_pb",
    "stars": 5,
    "date": "2026-06-28 20:37",
    "comment": "chegou lacrada, manual meio dificil mas a montagem é logica"
  },
  {
    "avatar": null,
    "avatarInitial": "Z",
    "user": "zachfm",
    "stars": 5,
    "date": "2026-06-27 09:05",
    "comment": "bateria removivel ajuda bastante pra eu subir e carregar no AP"
  },
  {
    "avatar": null,
    "avatarInitial": "O",
    "user": "osmar_rj",
    "stars": 5,
    "date": "2026-06-26 17:50",
    "comment": "bom custo beneficio... montei rapido em casa msm, tava td certinho"
  },
  {
    "avatar": null,
    "avatarInitial": "N",
    "user": "nikolasdev",
    "stars": 5,
    "date": "2026-06-25 12:05",
    "comment": "chegou com caixa intacta, já andei uns 30km nela hoje."
  },
  {
    "avatar": null,
    "avatarInitial": "Q",
    "user": "quentinsr",
    "stars": 5,
    "date": "2026-06-24 22:03",
    "comment": "chegou com caixa intacta, já andei uns 30km nela hoje."
  },
  {
    "avatar": null,
    "avatarInitial": "X",
    "user": "xande_lp",
    "stars": 5,
    "date": "2026-06-24 16:12",
    "comment": "Muito top, os freios a disco sao excelentes."
  },
  {
    "avatar": null,
    "avatarInitial": "U",
    "user": "ulissescarvalho",
    "stars": 5,
    "date": "2026-06-24 13:25",
    "comment": "Otima para o dia a dia, coloco a bolsa na cestinha e vou"
  },
  {
    "avatar": null,
    "avatarInitial": "T",
    "user": "thaleskw",
    "stars": 4,
    "date": "2026-06-24 11:45",
    "comment": "show de bola, superou as expectativas."
  },
  {
    "avatar": null,
    "avatarInitial": "R",
    "user": "rafael_go",
    "stars": 5,
    "date": "2026-06-23 17:32",
    "comment": "Sensacional. Vale a pena."
  },
  {
    "avatar": null,
    "avatarInitial": "P",
    "user": "paulo_hr",
    "stars": 5,
    "date": "2026-06-22 21:21",
    "comment": "muito forte o motor, sobe os morros daqui do meu bairro sem chorar"
  },
  {
    "avatar": null,
    "avatarInitial": "M",
    "user": "miguel_ts",
    "stars": 5,
    "date": "2026-06-21 08:24",
    "comment": "Bicicleta maravilhosa, super recomendo!!"
  },
  {
    "avatar": null,
    "avatarInitial": "K",
    "user": "kevinborges",
    "stars": 5,
    "date": "2026-06-21 18:39",
    "comment": "Melhor investimento q fiz esse ano. Economia de gasolina ta gigante."
  },
  {
    "avatar": null,
    "avatarInitial": "J",
    "user": "julio_cv",
    "stars": 5,
    "date": "2026-06-21 10:42",
    "comment": "Gostei muito, mas faltou um retrovisor esquerdo kkk mentira veio os dois certinho"
  },
  {
    "avatar": null,
    "avatarInitial": "I",
    "user": "ivan_ws",
    "stars": 5,
    "date": "2026-06-20 09:33",
    "comment": "comprei p minha filha ir pra faculdade, ela amou, super prática"
  },
  {
    "avatar": null,
    "avatarInitial": "H",
    "user": "hudson_mn",
    "stars": 5,
    "date": "2026-06-19 21:45",
    "comment": "comprei p minha filha ir pra faculdade, ela amou, super prática"
  },
  {
    "avatar": null,
    "avatarInitial": "G",
    "user": "giovani_af",
    "stars": 4,
    "date": "2026-06-19 12:59",
    "comment": "Muito top, os freios a disco sao excelentes."
  },
  {
    "avatar": null,
    "avatarInitial": "F",
    "user": "felicio_bz",
    "stars": 5,
    "date": "2026-06-19 16:32",
    "comment": "Otima para o dia a dia, coloco a bolsa na cestinha e vou"
  },
  {
    "avatar": null,
    "avatarInitial": "E",
    "user": "evandro_st",
    "stars": 5,
    "date": "2026-06-18 12:47",
    "comment": "tive q apertar uns parafusos q vieram meio soltos, mas dps q ajeitei ficou um avião"
  },
  {
    "avatar": null,
    "avatarInitial": "D",
    "user": "denilson_rq",
    "stars": 5,
    "date": "2026-06-17 18:07",
    "comment": "Recomendo, veio tudo original certinho."
  },
  {
    "avatar": null,
    "avatarInitial": "C",
    "user": "ciromv",
    "stars": 5,
    "date": "2026-06-16 09:27",
    "comment": "tive q apertar uns parafusos q vieram meio soltos, mas dps q ajeitei ficou um avião"
  },
  {
    "avatar": null,
    "avatarInitial": "B",
    "user": "braianok",
    "stars": 5,
    "date": "2026-06-16 21:42",
    "comment": "tinha um barulhinho na roda dianteira, joguei um wd40 e sumiu, agora tá parecendo um fantasma de silenciosa kkkk"
  },
  {
    "avatar": null,
    "avatarInitial": "A",
    "user": "anderson_vf",
    "stars": 5,
    "date": "2026-06-15 13:10",
    "comment": "tinha um barulhinho na roda dianteira, joguei um wd40 e sumiu, agora tá parecendo um fantasma de silenciosa kkkk"
  },
  {
    "avatar": null,
    "avatarInitial": "Z",
    "user": "zeca_lm",
    "stars": 5,
    "date": "2026-06-15 16:58",
    "comment": "simplesmente perfeita. 0 arrependimentos"
  },
  {
    "avatar": null,
    "avatarInitial": "Y",
    "user": "yuriab",
    "stars": 5,
    "date": "2026-06-14 22:21",
    "comment": "tinha um barulhinho na roda dianteira, joguei um wd40 e sumiu, agora tá parecendo um fantasma de silenciosa kkkk"
  },
  {
    "avatar": null,
    "avatarInitial": "W",
    "user": "waldircn",
    "stars": 4,
    "date": "2026-06-14 09:10",
    "comment": "Recomendo, veio tudo original certinho."
  },
  {
    "avatar": null,
    "avatarInitial": "V",
    "user": "valdeci_ot",
    "stars": 5,
    "date": "2026-06-13 08:21",
    "comment": "produto mt bom, o único problema foi a transportadora q demorou 1 dia a mais da previsao"
  },
  {
    "avatar": null,
    "avatarInitial": "U",
    "user": "ubiratan_js",
    "stars": 5,
    "date": "2026-06-13 17:57",
    "comment": "tive q apertar uns parafusos q vieram meio soltos, mas dps q ajeitei ficou um avião"
  },
  {
    "avatar": null,
    "avatarInitial": "T",
    "user": "tadeurl",
    "stars": 5,
    "date": "2026-06-13 19:23",
    "comment": "A bateria dura bastante se souber usar, ando uns 25km fácil na cidade"
  },
  {
    "avatar": null,
    "avatarInitial": "S",
    "user": "silvio_cf",
    "stars": 5,
    "date": "2026-06-12 15:05",
    "comment": "bom custo beneficio... montei rapido em casa msm, tava td certinho"
  },
  {
    "avatar": null,
    "avatarInitial": "R",
    "user": "romulo_dk",
    "stars": 5,
    "date": "2026-06-11 14:13",
    "comment": "Otima para o dia a dia, coloco a bolsa na cestinha e vou"
  },
  {
    "avatar": null,
    "avatarInitial": "Q",
    "user": "quirinoav",
    "stars": 5,
    "date": "2026-06-10 13:04",
    "comment": "bateria removivel ajuda bastante pra eu subir e carregar no AP"
  },
  {
    "avatar": null,
    "avatarInitial": "P",
    "user": "pericles_uw",
    "stars": 5,
    "date": "2026-06-09 11:29",
    "comment": "comprei preta mto bonita!! a lanterna ilumina bem de noite tb"
  },
  {
    "avatar": null,
    "avatarInitial": "O",
    "user": "olimpio_bh",
    "stars": 5,
    "date": "2026-06-09 20:05",
    "comment": "Acelera bem. O painel é super legal de noite. Vale cada centavo."
  },
  {
    "avatar": null,
    "avatarInitial": "N",
    "user": "novaes_ct",
    "stars": 4,
    "date": "2026-06-09 12:59",
    "comment": "show de bola, superou as expectativas."
  },
  {
    "avatar": null,
    "avatarInitial": "M",
    "user": "mozartef",
    "stars": 5,
    "date": "2026-06-08 19:21",
    "comment": "comprei com medo de n vir ou cair num golpe mas graças a Deus a loja é top e entregou 100%"
  },
  {
    "avatar": null,
    "avatarInitial": "L",
    "user": "lorival_mg",
    "stars": 5,
    "date": "2026-06-08 11:17",
    "comment": "tinha um barulhinho na roda dianteira, joguei um wd40 e sumiu, agora tá parecendo um fantasma de silenciosa kkkk"
  },
  {
    "avatar": null,
    "avatarInitial": "K",
    "user": "kleber_rs",
    "stars": 5,
    "date": "2026-06-07 13:28",
    "comment": "comprei preta mto bonita!! a lanterna ilumina bem de noite tb"
  },
  {
    "avatar": null,
    "avatarInitial": "J",
    "user": "joasvp",
    "stars": 5,
    "date": "2026-06-06 20:02",
    "comment": "a motoquinha é bruta!! n imaginava q era tao confortavel com esse banco, recomendo sem duvidas!!!"
  },
  {
    "avatar": null,
    "avatarInitial": "I",
    "user": "ismaelrj",
    "stars": 5,
    "date": "2026-06-05 15:41",
    "comment": "bateria removivel ajuda bastante pra eu subir e carregar no AP"
  },
  {
    "avatar": null,
    "avatarInitial": "H",
    "user": "herculano_fx",
    "stars": 5,
    "date": "2026-06-05 11:31",
    "comment": "Bicicleta maravilhosa, super recomendo!!"
  },
  {
    "avatar": null,
    "avatarInitial": "G",
    "user": "geraldo_qt",
    "stars": 5,
    "date": "2026-06-04 21:14",
    "comment": "Otima para o dia a dia, coloco a bolsa na cestinha e vou"
  },
  {
    "avatar": null,
    "avatarInitial": "F",
    "user": "flavio_nk",
    "stars": 5,
    "date": "2026-06-04 10:05",
    "comment": "É minha segunda elétrica, essa de 1000w faz toda a diferença."
  },
  {
    "avatar": null,
    "avatarInitial": "E",
    "user": "ewerton_cs",
    "stars": 5,
    "date": "2026-06-03 14:31",
    "comment": "Veio com nota fiscal, tudo em meu nome. Burocracia zero."
  },
  {
    "avatar": null,
    "avatarInitial": "D",
    "user": "donatopage",
    "stars": 4,
    "date": "2026-06-03 14:20",
    "comment": "Top demais, ando na rua e o pessoal fica olhando kkkk muito style"
  },
  {
    "avatar": null,
    "avatarInitial": "C",
    "user": "colombo_ej",
    "stars": 5,
    "date": "2026-06-02 10:52",
    "comment": "chegou com caixa intacta, já andei uns 30km nela hoje."
  },
  {
    "avatar": null,
    "avatarInitial": "B",
    "user": "baltazar_rm",
    "stars": 5,
    "date": "2026-06-02 19:04",
    "comment": "Top demais, ando na rua e o pessoal fica olhando kkkk muito style"
  },
  {
    "avatar": null,
    "avatarInitial": "A",
    "user": "abilioneto",
    "stars": 5,
    "date": "2026-06-02 17:38",
    "comment": "tinha um barulhinho na roda dianteira, joguei um wd40 e sumiu, agora tá parecendo um fantasma de silenciosa kkkk"
  },
  {
    "avatar": null,
    "avatarInitial": "Z",
    "user": "zito_bs",
    "stars": 5,
    "date": "2026-06-02 22:38",
    "comment": "O carregador esquenta um pouco mas carrega super rápido, recomendo"
  },
  {
    "avatar": null,
    "avatarInitial": "Y",
    "user": "yansql",
    "stars": 5,
    "date": "2026-06-02 12:57",
    "comment": "perfeito, sem nenhum arranhão."
  },
  {
    "avatar": null,
    "avatarInitial": "X",
    "user": "xerxes_dn",
    "stars": 5,
    "date": "2026-06-02 20:13",
    "comment": "Bicicleta maravilhosa, super recomendo!!"
  },
  {
    "avatar": null,
    "avatarInitial": "W",
    "user": "wendelop",
    "stars": 5,
    "date": "2026-06-02 12:43",
    "comment": "muito forte o motor, sobe os morros daqui do meu bairro sem chorar"
  },
  {
    "avatar": null,
    "avatarInitial": "V",
    "user": "venancio_rb",
    "stars": 5,
    "date": "2026-06-02 09:29",
    "comment": "comprei preta mto bonita!! a lanterna ilumina bem de noite tb"
  },
  {
    "avatar": null,
    "avatarInitial": "U",
    "user": "ubaldo_fw",
    "stars": 4,
    "date": "2026-06-02 22:29",
    "comment": "tive q apertar uns parafusos q vieram meio soltos, mas dps q ajeitei ficou um avião"
  },
  {
    "avatar": null,
    "avatarInitial": "T",
    "user": "toninhocs",
    "stars": 5,
    "date": "2026-06-02 14:06",
    "comment": "show de bola, superou as expectativas."
  },
  {
    "avatar": null,
    "avatarInitial": "S",
    "user": "salomao_vt",
    "stars": 5,
    "date": "2026-06-01 19:24",
    "comment": "chegou com caixa intacta, já andei uns 30km nela hoje."
  },
  {
    "avatar": null,
    "avatarInitial": "R",
    "user": "renilton_bg",
    "stars": 5,
    "date": "2026-05-31 17:16",
    "comment": "Gente, eu to apaixonada!! A minha scooter chegou e é a coisa mais linda"
  },
  {
    "avatar": null,
    "avatarInitial": "Q",
    "user": "queops_nj",
    "stars": 5,
    "date": "2026-05-31 15:27",
    "comment": "simplesmente perfeita. 0 arrependimentos"
  },
  {
    "avatar": null,
    "avatarInitial": "P",
    "user": "polido_aw",
    "stars": 5,
    "date": "2026-05-31 20:13",
    "comment": "perfeito, sem nenhum arranhão."
  },
  {
    "avatar": null,
    "avatarInitial": "O",
    "user": "orlandinhosv",
    "stars": 5,
    "date": "2026-05-31 15:41",
    "comment": "Acelera bem. O painel é super legal de noite. Vale cada centavo."
  },
  {
    "avatar": null,
    "avatarInitial": "N",
    "user": "newton_pk",
    "stars": 5,
    "date": "2026-05-31 18:25",
    "comment": "comprei p minha filha ir pra faculdade, ela amou, super prática"
  },
  {
    "avatar": null,
    "avatarInitial": "M",
    "user": "maneco_uc",
    "stars": 5,
    "date": "2026-05-30 09:50",
    "comment": "Gostei muito, mas faltou um retrovisor esquerdo kkk mentira veio os dois certinho"
  },
  {
    "avatar": null,
    "avatarInitial": "L",
    "user": "leoarte_dm",
    "stars": 4,
    "date": "2026-05-29 14:50",
    "comment": "show de bola, superou as expectativas."
  },
  {
    "avatar": null,
    "avatarInitial": "K",
    "user": "kamaufn",
    "stars": 5,
    "date": "2026-05-29 14:20",
    "comment": "O alarme é alto e funciona bem, gostei da chave reserva tb"
  }
];
;

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
    const slice = SCOOTER_REVIEWS.slice(currentIndex, currentIndex + count);
    slice.forEach(r => {
      reviewsContainer.insertAdjacentHTML('beforeend', renderReviewCard(r));
    });
    currentIndex += slice.length;
    if (currentIndex >= SCOOTER_REVIEWS.length && loadMoreBtn) {
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
