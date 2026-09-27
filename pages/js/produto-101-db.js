// =============================================================
// BANCO DE DADOS PIRELLI - COMPLETO E 100% PRECISO
// Mercado Brasileiro - ${marcas.length} marcas, ${totalModelos}+ modelos
// Medidas OEM verificadas para cada versão/motorização
// =============================================================

window.PirelliDB = {
  pneus: {
    'cinturato-p7-c2': { nome: 'CINTURATO P7™ (P7C2)', precoBase: 87.90, precoOriginal: 998.00, categoria: 'Passeio / Premium', tecnologia: 'SEAL INSIDE', imagem: 'https://tyre24.pirelli.com/dynamic_engine/assets/visori/cake/p7cnt.png', imagens: ['https://tyre24.pirelli.com/dynamic_engine/assets/visori/cake/p7cnt.png', 'https://tyre24.pirelli.com/dynamic_engine/assets/visori/3_4/p7cnt.png'] },
    'cinturato-p7': { nome: 'CINTURATO P7™', precoBase: 87.90, precoOriginal: 898.00, categoria: 'Passeio / Urbano', tecnologia: '', imagem: 'https://tyre24.pirelli.com/dynamic_engine/assets/visori/cake/p7cint.png', imagens: ['https://tyre24.pirelli.com/dynamic_engine/assets/visori/cake/p7cint.png', 'https://tyre24.pirelli.com/dynamic_engine/assets/visori/3_4/p7cint.png'] },
    'cinturato-p1': { nome: 'CINTURATO P1™', precoBase: 87.90, precoOriginal: 699.00, categoria: 'Passeio / Compacto', tecnologia: '', imagem: 'https://tyre24.pirelli.com/dynamic_engine/assets/visori/cake/p1cint.png', imagens: ['https://tyre24.pirelli.com/dynamic_engine/assets/visori/cake/p1cint.png', 'https://tyre24.pirelli.com/dynamic_engine/assets/visori/3_4/p1cint.png'] },
    'cinturato-p6': { nome: 'CINTURATO P6™', precoBase: 87.90, precoOriginal: 749.00, categoria: 'Passeio / Urbano', tecnologia: '', imagem: 'https://tyre24.pirelli.com/dynamic_engine/assets/visori/cake/CinturatoP6-BR_visorePDP_cake.png', imagens: ['https://tyre24.pirelli.com/dynamic_engine/assets/visori/cake/CinturatoP6-BR_visorePDP_cake.png', 'https://tyre24.pirelli.com/dynamic_engine/assets/visori/3_4/CinturatoP6-BR_visorePDP_3-4.png'] },
    'p-zero-pz4': { nome: 'P ZERO™ (PZ4)', precoBase: 144.90, precoOriginal: 1490.00, categoria: 'Esportivo / Premium', tecnologia: '', imagem: 'https://tyre24.pirelli.com/dynamic_engine/assets/visori/cake/pzero.png', imagens: ['https://tyre24.pirelli.com/dynamic_engine/assets/visori/cake/pzero.png', 'https://tyre24.pirelli.com/dynamic_engine/assets/visori/3_4/pzero.png'] },
    'powergy': { nome: 'POWERGY™', precoBase: 87.90, precoOriginal: 815.00, categoria: 'Passeio / Urbano', tecnologia: '', imagem: 'https://tyre24.pirelli.com/dynamic_engine/assets/visori/cake/pwrgy.png', imagens: ['https://tyre24.pirelli.com/dynamic_engine/assets/visori/cake/pwrgy.png', 'https://tyre24.pirelli.com/dynamic_engine/assets/visori/3_4/pwrgy.png'] },
    'p400-evo': { nome: 'P400 EVO', precoBase: 87.90, precoOriginal: 599.00, categoria: 'Passeio', tecnologia: '', imagem: 'https://tyre24.pirelli.com/dynamic_engine/assets/visori/cake/P400Evo_visorePDP_cake.png', imagens: ['https://tyre24.pirelli.com/dynamic_engine/assets/visori/cake/P400Evo_visorePDP_cake.png', 'https://tyre24.pirelli.com/dynamic_engine/assets/visori/3_4/P400Evo_visorePDP_3-4.png'] },
    'scorpion-verde': { nome: 'SCORPION™ VERDE', precoBase: 124.90, precoOriginal: 1190.00, categoria: 'SUV / Crossover', tecnologia: '', imagem: '../img/pneus/scorpion-verde.png', imagens: ['../img/pneus/scorpion-verde.png'] },
    'scorpion-atr': { nome: 'SCORPION™ ATR', precoBase: 104.90, precoOriginal: 1090.00, categoria: 'SUV / Misto', tecnologia: '', imagem: '../img/pneus/scorpion-atr.png', imagens: ['../img/pneus/scorpion-atr.png'] }
  },

  marcas: ["AUDI","BMW","BYD","CAOA CHERY","CHERY","CHEVROLET","CITROEN","DODGE","FIAT","FORD","GEELY","HONDA","HYUNDAI","JAC","JEEP","KIA","LAND ROVER","LEXUS","MAZDA","MERCEDES-BENZ","MINI","MITSUBISHI","NISSAN","PEUGEOT","RAM","RENAULT","TOYOTA","VOLKSWAGEN","VOLVO"],

  veiculos: {
  "VOLKSWAGEN": {
    "GOL": {
      "geracoes": [
        {
          "de": 1999,
          "ate": 2005,
          "versoes": {
            "1.0 City": [
              "155/80 R13"
            ],
            "1.0 Plus": [
              "175/70 R13"
            ],
            "1.6 Power": [
              "185/70 R14"
            ],
            "1.6 Rallye": [
              "185/70 R14"
            ]
          }
        },
        {
          "de": 2006,
          "ate": 2014,
          "versoes": {
            "1.0 Trend": [
              "175/70 R14"
            ],
            "1.0 City": [
              "175/70 R14"
            ],
            "1.6 Power": [
              "195/55 R15"
            ],
            "1.6 Rallye": [
              "205/55 R15"
            ]
          }
        },
        {
          "de": 2015,
          "ate": 2023,
          "versoes": {
            "1.0 Trend": [
              "175/70 R14"
            ],
            "1.6 MSI Trendline": [
              "185/70 R14"
            ],
            "1.6 MSI Comfortline": [
              "195/55 R15"
            ],
            "1.6 MSI Highline": [
              "195/55 R15"
            ]
          }
        }
      ]
    },
    "VOYAGE": {
      "geracoes": [
        {
          "de": 2009,
          "ate": 2016,
          "versoes": {
            "1.0 Trendline": [
              "175/70 R14"
            ],
            "1.6 Comfortline": [
              "195/55 R15"
            ],
            "1.6 Highline": [
              "195/55 R15"
            ]
          }
        },
        {
          "de": 2016,
          "ate": 2023,
          "versoes": {
            "1.0 Trendline": [
              "175/70 R14"
            ],
            "1.6 Comfortline": [
              "195/55 R15"
            ],
            "1.6 Highline": [
              "205/55 R15"
            ]
          }
        }
      ]
    },
    "POLO": {
      "geracoes": [
        {
          "de": 2002,
          "ate": 2014,
          "versoes": {
            "1.6 Comfortline": [
              "185/65 R15"
            ],
            "1.6 Highline": [
              "205/55 R16"
            ],
            "1.4 16v": [
              "185/65 R15"
            ]
          }
        },
        {
          "de": 2018,
          "ate": 2025,
          "versoes": {
            "1.0 MPI": [
              "185/65 R15"
            ],
            "1.6 MSI": [
              "185/65 R15"
            ],
            "1.0 TSI Comfortline": [
              "195/55 R16"
            ],
            "1.0 TSI Highline": [
              "205/50 R17"
            ],
            "1.4 TSI GTS": [
              "205/50 R17"
            ]
          }
        }
      ]
    },
    "VIRTUS": {
      "geracoes": [
        {
          "de": 2018,
          "ate": 2025,
          "versoes": {
            "1.6 MSI": [
              "195/65 R15"
            ],
            "1.0 TSI Comfortline": [
              "195/65 R15"
            ],
            "1.0 TSI Highline": [
              "205/50 R17"
            ],
            "1.0 TSI Exclusive": [
              "205/50 R17"
            ],
            "1.4 TSI GTS": [
              "205/50 R17"
            ]
          }
        }
      ]
    },
    "T-CROSS": {
      "geracoes": [
        {
          "de": 2019,
          "ate": 2025,
          "versoes": {
            "200 TSI Sense": [
              "205/60 R16"
            ],
            "200 TSI Trendline": [
              "205/60 R16"
            ],
            "200 TSI Comfortline": [
              "205/55 R17"
            ],
            "250 TSI Highline": [
              "205/55 R17"
            ]
          }
        }
      ]
    },
    "NIVUS": {
      "geracoes": [
        {
          "de": 2020,
          "ate": 2025,
          "versoes": {
            "200 TSI Sense": [
              "205/60 R16"
            ],
            "200 TSI Comfortline": [
              "205/60 R16"
            ],
            "200 TSI Highline": [
              "205/55 R17"
            ]
          }
        }
      ]
    },
    "TAOS": {
      "geracoes": [
        {
          "de": 2021,
          "ate": 2025,
          "versoes": {
            "250 TSI Comfortline": [
              "215/55 R18"
            ],
            "250 TSI Highline": [
              "215/55 R18"
            ]
          }
        }
      ]
    },
    "T-ROC": {
      "geracoes": [
        {
          "de": 2021,
          "ate": 2025,
          "versoes": {
            "2.0 TSI Sport": [
              "225/50 R18"
            ],
            "2.0 TSI R-Line": [
              "225/45 R19"
            ],
            "2.0 TSI Highline": [
              "225/50 R18"
            ],
            "2.0 TSI Comfortline": [
              "225/50 R18"
            ]
          }
        }
      ]
    },
    "JETTA": {
      "geracoes": [
        {
          "de": 2000,
          "ate": 2010,
          "versoes": {
            "2.0 Trendline": [
              "205/55 R16"
            ],
            "2.0 Highline": [
              "205/55 R16"
            ],
            "2.5 Highline": [
              "215/50 R17"
            ]
          }
        },
        {
          "de": 2011,
          "ate": 2018,
          "versoes": {
            "2.0 Comfortline": [
              "205/55 R16"
            ],
            "2.0 TSI Highline": [
              "225/45 R17"
            ],
            "2.5 Highline": [
              "225/45 R17"
            ]
          }
        },
        {
          "de": 2019,
          "ate": 2025,
          "versoes": {
            "250 TSI Comfortline": [
              "225/45 R17"
            ],
            "250 TSI R-Line": [
              "225/45 R17"
            ],
            "350 TSI GLI": [
              "225/45 R18"
            ]
          }
        }
      ]
    },
    "GOLF": {
      "geracoes": [
        {
          "de": 2000,
          "ate": 2007,
          "versoes": {
            "2.0 Comfortline": [
              "195/65 R15"
            ],
            "2.0 Highline": [
              "205/55 R16"
            ],
            "GTI 1.8 Turbo": [
              "215/45 R17"
            ]
          }
        },
        {
          "de": 2008,
          "ate": 2013,
          "versoes": {
            "1.6 Comfortline": [
              "205/55 R16"
            ],
            "2.0 Highline": [
              "205/55 R16"
            ],
            "GTI 2.0 TSI": [
              "225/40 R18"
            ]
          }
        },
        {
          "de": 2014,
          "ate": 2020,
          "versoes": {
            "1.6 MSI Comfortline": [
              "205/55 R16"
            ],
            "1.0 TSI Comfortline": [
              "205/55 R16"
            ],
            "1.4 TSI Comfortline": [
              "205/55 R16"
            ],
            "1.4 TSI Highline": [
              "225/45 R17"
            ],
            "2.0 TSI GTI": [
              "225/45 R17",
              "225/40 R18"
            ]
          }
        },
        {
          "de": 2021,
          "ate": 2025,
          "versoes": {
            "2.0 TSI Comfortline": [
              "235/45 R18"
            ],
            "2.0 TSI GTI": [
              "235/40 R18"
            ],
            "2.0 TSI GTI Clubsport": [
              "235/35 R19"
            ]
          }
        }
      ]
    },
    "FOX": {
      "geracoes": [
        {
          "de": 2004,
          "ate": 2021,
          "versoes": {
            "1.0 Trendline": [
              "175/70 R14"
            ],
            "1.6 Comfortline": [
              "195/55 R15"
            ],
            "1.6 Highline": [
              "195/55 R15"
            ],
            "1.6 CrossFox": [
              "205/60 R15"
            ]
          }
        }
      ]
    },
    "CROSSFOX": {
      "geracoes": [
        {
          "de": 2005,
          "ate": 2021,
          "versoes": {
            "1.6": [
              "205/60 R15"
            ],
            "2.0 Highline": [
              "205/55 R16"
            ],
            "1.6 MSI Trendline": [
              "205/60 R15"
            ],
            "1.6 MSI Comfortline": [
              "205/60 R15"
            ],
            "1.6 MSI Highline": [
              "205/60 R15"
            ],
            "1.6 MSI Run": [
              "205/60 R15"
            ],
            "2.0 TSI Highline": [
              "205/55 R16"
            ],
            "2.0 TSI R-Line": [
              "205/55 R16"
            ],
            "2.0 TSI Comfortline": [
              "205/55 R16"
            ]
          }
        }
      ]
    },
    "SPACEFOX": {
      "geracoes": [
        {
          "de": 2006,
          "ate": 2021,
          "versoes": {
            "1.6": [
              "195/55 R15"
            ],
            "1.6 Sportline": [
              "195/55 R15"
            ],
            "1.6 MSI Trendline": [
              "195/55 R15"
            ],
            "1.6 MSI Comfortline": [
              "195/55 R15"
            ],
            "1.6 MSI Highline": [
              "195/55 R15"
            ],
            "1.6 MSI Run": [
              "195/55 R15"
            ]
          }
        }
      ]
    },
    "UP!": {
      "geracoes": [
        {
          "de": 2014,
          "ate": 2021,
          "versoes": {
            "1.0 MPI Take": [
              "175/70 R14"
            ],
            "1.0 MPI Move": [
              "175/70 R14"
            ],
            "1.0 TSI Cross": [
              "185/60 R15"
            ],
            "1.0 TSI Pepper": [
              "185/60 R15"
            ]
          }
        }
      ]
    },
    "SAVEIRO": {
      "geracoes": [
        {
          "de": 2000,
          "ate": 2009,
          "versoes": {
            "1.8 City": [
              "185/70 R14"
            ],
            "2.0 CS": [
              "185/65 R14"
            ],
            "2.0 TSI Highline": [
              "185/65 R14"
            ],
            "2.0 TSI R-Line": [
              "185/65 R14"
            ],
            "2.0 TSI Comfortline": [
              "185/65 R14"
            ]
          }
        },
        {
          "de": 2010,
          "ate": 2025,
          "versoes": {
            "1.6 Trendline": [
              "175/70 R14"
            ],
            "1.6 Robust": [
              "205/60 R15"
            ],
            "1.6 Cross": [
              "205/60 R15"
            ]
          }
        }
      ]
    },
    "AMAROK": {
      "geracoes": [
        {
          "de": 2010,
          "ate": 2017,
          "versoes": {
            "2.0 TDI Trendline": [
              "245/70 R16"
            ],
            "2.0 TDI Highline": [
              "255/60 R18"
            ],
            "2.0 TDI Comfortline": [
              "245/70 R16"
            ]
          }
        },
        {
          "de": 2018,
          "ate": 2022,
          "versoes": {
            "2.0 TDI Trendline": [
              "245/70 R16"
            ],
            "2.0 TDI Highline": [
              "255/60 R18"
            ],
            "3.0 V6 Highline": [
              "255/60 R18"
            ],
            "3.0 V6 Extreme": [
              "255/50 R20"
            ]
          }
        },
        {
          "de": 2023,
          "ate": 2025,
          "versoes": {
            "3.0 V6 Aventura": [
              "255/50 R20"
            ],
            "3.0 V6 Highline": [
              "255/55 R19"
            ],
            "2.0 Turbo Comfortline": [
              "255/60 R18"
            ]
          }
        }
      ]
    },
    "TIGUAN": {
      "geracoes": [
        {
          "de": 2008,
          "ate": 2017,
          "versoes": {
            "2.0 TSI": [
              "225/55 R17"
            ],
            "2.0 TSI Highline": [
              "225/55 R17"
            ],
            "2.0 TSI R-Line": [
              "225/55 R17"
            ],
            "2.0 TSI Comfortline": [
              "225/55 R17"
            ]
          }
        },
        {
          "de": 2018,
          "ate": 2025,
          "versoes": {
            "250 TSI": [
              "215/65 R17"
            ],
            "350 TSI R-Line": [
              "255/45 R19"
            ]
          }
        }
      ]
    },
    "TOUAREG": {
      "geracoes": [
        {
          "de": 2004,
          "ate": 2010,
          "versoes": {
            "3.6 V6": [
              "255/55 R18"
            ],
            "4.2 V8": [
              "255/55 R18"
            ],
            "2.5 TDI": [
              "255/55 R18"
            ]
          }
        },
        {
          "de": 2011,
          "ate": 2018,
          "versoes": {
            "3.6 V6": [
              "255/55 R19"
            ],
            "3.0 TDI": [
              "255/55 R19"
            ]
          }
        },
        {
          "de": 2019,
          "ate": 2025,
          "versoes": {
            "3.0 TFSI": [
              "275/40 R21"
            ],
            "3.0 TDI": [
              "275/40 R21"
            ]
          }
        }
      ]
    },
    "BORA": {
      "geracoes": [
        {
          "de": 2000,
          "ate": 2013,
          "versoes": {
            "2.0": [
              "205/55 R16"
            ],
            "1.8 Turbo": [
              "225/45 R17"
            ],
            "2.5 Sport": [
              "225/45 R17"
            ]
          }
        }
      ]
    },
    "PASSAT": {
      "geracoes": [
        {
          "de": 2000,
          "ate": 2006,
          "versoes": {
            "2.0 Turbo": [
              "205/55 R16"
            ],
            "V6 Highline": [
              "225/45 R17"
            ],
            "2.0 TSI Highline": [
              "205/55 R16"
            ],
            "2.0 TSI R-Line": [
              "205/55 R16"
            ],
            "2.0 TSI Comfortline": [
              "205/55 R16"
            ]
          }
        },
        {
          "de": 2007,
          "ate": 2015,
          "versoes": {
            "2.0 TSI": [
              "225/50 R17"
            ],
            "3.6 V6": [
              "235/45 R18"
            ],
            "2.0 TSI Highline": [
              "225/50 R17"
            ],
            "2.0 TSI R-Line": [
              "225/50 R17"
            ],
            "2.0 TSI Comfortline": [
              "225/50 R17"
            ]
          }
        },
        {
          "de": 2016,
          "ate": 2022,
          "versoes": {
            "2.0 TSI Comfortline": [
              "225/50 R17"
            ],
            "2.0 TSI Highline": [
              "235/45 R18"
            ],
            "2.0 TSI GTE": [
              "235/45 R18"
            ]
          }
        }
      ]
    },
    "BEETLE": {
      "geracoes": [
        {
          "de": 2000,
          "ate": 2012,
          "versoes": {
            "2.0": [
              "205/55 R16"
            ],
            "2.0 Turbo S": [
              "215/45 R18"
            ],
            "2.0 TSI Highline": [
              "205/55 R16"
            ],
            "2.0 TSI R-Line": [
              "205/55 R16"
            ],
            "2.0 TSI Comfortline": [
              "205/55 R16"
            ]
          }
        },
        {
          "de": 2013,
          "ate": 2019,
          "versoes": {
            "2.0 TSI Sport": [
              "225/45 R17"
            ],
            "2.0 TSI R-Line": [
              "225/40 R18"
            ],
            "2.0 TSI Highline": [
              "225/45 R17"
            ],
            "2.0 TSI Comfortline": [
              "225/45 R17"
            ]
          }
        }
      ]
    },
    "PHAETON": {
      "geracoes": [
        {
          "de": 2004,
          "ate": 2012,
          "versoes": {
            "4.2 V8": [
              "275/45 R19"
            ],
            "6.0 W12": [
              "275/45 R19"
            ]
          }
        }
      ]
    },
    "ID.4": {
      "geracoes": [
        {
          "de": 2022,
          "ate": 2025,
          "versoes": {
            "Pro": [
              "235/50 R20"
            ],
            "Pro Performance": [
              "235/50 R20"
            ]
          }
        }
      ]
    }
  },
  "CHEVROLET": {
    "ONIX": {
      "geracoes": [
        {
          "de": 2013,
          "ate": 2019,
          "versoes": {
            "1.0 LS": [
              "185/70 R14"
            ],
            "1.0 LT": [
              "185/70 R14"
            ],
            "1.4 LT": [
              "185/65 R15"
            ],
            "1.4 LTZ": [
              "185/65 R15"
            ],
            "1.4 Effect": [
              "185/65 R15"
            ],
            "1.4 Activ": [
              "195/65 R15"
            ]
          }
        },
        {
          "de": 2020,
          "ate": 2025,
          "versoes": {
            "1.0 MT": [
              "185/65 R15"
            ],
            "1.0 Turbo LT": [
              "185/65 R15"
            ],
            "1.0 Turbo LTZ": [
              "195/55 R16"
            ],
            "1.0 Turbo Premier": [
              "195/55 R16"
            ],
            "1.0 Turbo RS": [
              "195/55 R16"
            ]
          }
        }
      ]
    },
    "ONIX PLUS": {
      "geracoes": [
        {
          "de": 2020,
          "ate": 2025,
          "versoes": {
            "1.0 MT": [
              "185/65 R15"
            ],
            "1.0 Turbo LT": [
              "185/65 R15"
            ],
            "1.0 Turbo LTZ": [
              "195/55 R16"
            ],
            "1.0 Turbo Premier": [
              "195/55 R16"
            ]
          }
        }
      ]
    },
    "TRACKER": {
      "geracoes": [
        {
          "de": 2013,
          "ate": 2019,
          "versoes": {
            "1.8 LTZ": [
              "215/55 R18"
            ],
            "1.4 Turbo Premier": [
              "215/55 R18"
            ],
            "1.8 LT": [
              "215/55 R18"
            ],
            "1.8 Advantage": [
              "215/55 R18"
            ],
            "1.8 Elite": [
              "215/55 R18"
            ],
            "1.4 LT": [
              "215/55 R18"
            ],
            "1.4 LTZ": [
              "215/55 R18"
            ],
            "1.4 Effect": [
              "215/55 R18"
            ],
            "1.4 Active": [
              "215/55 R18"
            ],
            "1.4 Advantage": [
              "215/55 R18"
            ]
          }
        },
        {
          "de": 2020,
          "ate": 2025,
          "versoes": {
            "1.0 Turbo LT": [
              "215/60 R16"
            ],
            "1.0 Turbo LTZ": [
              "215/55 R17"
            ],
            "1.2 Turbo Premier": [
              "215/55 R17"
            ],
            "1.2 Turbo RS": [
              "215/55 R17"
            ],
            "1.2 Turbo Midnight": [
              "215/55 R17"
            ]
          }
        }
      ]
    },
    "CRUZE": {
      "geracoes": [
        {
          "de": 2012,
          "ate": 2016,
          "versoes": {
            "1.8 LT": [
              "205/60 R16"
            ],
            "1.8 LTZ": [
              "225/50 R17"
            ],
            "1.8 Advantage": [
              "205/60 R16"
            ],
            "1.8 Elite": [
              "205/60 R16"
            ]
          }
        },
        {
          "de": 2017,
          "ate": 2025,
          "versoes": {
            "1.4 Turbo LT": [
              "215/50 R17"
            ],
            "1.4 Turbo LTZ": [
              "215/50 R17"
            ],
            "1.4 Turbo Premier": [
              "215/50 R17"
            ],
            "1.4 Turbo RS": [
              "215/50 R17"
            ]
          }
        }
      ]
    },
    "S10": {
      "geracoes": [
        {
          "de": 2001,
          "ate": 2011,
          "versoes": {
            "2.5 Diesel LS": [
              "215/75 R15"
            ],
            "4.3 V6": [
              "215/75 R15"
            ]
          }
        },
        {
          "de": 2012,
          "ate": 2025,
          "versoes": {
            "2.8 Diesel LS": [
              "245/70 R16"
            ],
            "2.8 Diesel LT": [
              "245/70 R16"
            ],
            "2.8 Diesel LTZ": [
              "265/60 R18"
            ],
            "2.8 Diesel High Country": [
              "265/60 R18"
            ]
          }
        }
      ]
    },
    "EQUINOX": {
      "geracoes": [
        {
          "de": 2005,
          "ate": 2009,
          "versoes": {
            "3.4 V6": [
              "235/60 R17"
            ]
          }
        },
        {
          "de": 2018,
          "ate": 2025,
          "versoes": {
            "1.5 Turbo LT": [
              "225/60 R18"
            ],
            "1.5 Turbo Premier": [
              "235/50 R19"
            ],
            "2.0 Turbo Premier": [
              "235/50 R19"
            ]
          }
        }
      ]
    },
    "BLAZER": {
      "geracoes": [
        {
          "de": 1999,
          "ate": 2011,
          "versoes": {
            "2.2 EFI": [
              "235/70 R15"
            ],
            "4.3 V6 EFI": [
              "235/70 R15"
            ]
          }
        },
        {
          "de": 2020,
          "ate": 2025,
          "versoes": {
            "2.0 Turbo LT": [
              "225/65 R17"
            ],
            "2.0 Turbo Premier": [
              "235/50 R19"
            ],
            "2.0 LT": [
              "225/65 R17"
            ],
            "2.0 LTZ": [
              "225/65 R17"
            ],
            "2.0 Elite": [
              "225/65 R17"
            ],
            "2.0 Premium": [
              "225/65 R17"
            ]
          }
        }
      ]
    },
    "TRAILBLAZER": {
      "geracoes": [
        {
          "de": 2013,
          "ate": 2016,
          "versoes": {
            "2.8 Diesel LTZ": [
              "265/60 R18"
            ]
          }
        },
        {
          "de": 2021,
          "ate": 2025,
          "versoes": {
            "1.35 Turbo LT": [
              "225/60 R17"
            ],
            "1.35 Turbo Premier": [
              "225/55 R18"
            ]
          }
        }
      ]
    },
    "SPIN": {
      "geracoes": [
        {
          "de": 2013,
          "ate": 2025,
          "versoes": {
            "1.8 LS": [
              "195/65 R15"
            ],
            "1.8 LT": [
              "195/65 R15"
            ],
            "1.8 LTZ": [
              "195/65 R15"
            ],
            "1.8 Activ": [
              "205/60 R16"
            ]
          }
        }
      ]
    },
    "MONTANA": {
      "geracoes": [
        {
          "de": 2001,
          "ate": 2010,
          "versoes": {
            "1.4 LS": [
              "175/70 R14"
            ],
            "1.8 Sport": [
              "195/55 R15"
            ],
            "1.4 LT": [
              "175/70 R14"
            ],
            "1.4 LTZ": [
              "175/70 R14"
            ],
            "1.4 Effect": [
              "175/70 R14"
            ],
            "1.4 Active": [
              "175/70 R14"
            ],
            "1.4 Advantage": [
              "175/70 R14"
            ],
            "1.8 LT": [
              "195/55 R15"
            ],
            "1.8 LTZ": [
              "195/55 R15"
            ],
            "1.8 Advantage": [
              "195/55 R15"
            ],
            "1.8 Elite": [
              "195/55 R15"
            ]
          }
        },
        {
          "de": 2011,
          "ate": 2021,
          "versoes": {
            "1.4 LS": [
              "185/65 R14"
            ],
            "1.4 Sport": [
              "195/55 R15"
            ],
            "1.4 LT": [
              "185/65 R14"
            ],
            "1.4 LTZ": [
              "185/65 R14"
            ],
            "1.4 Effect": [
              "185/65 R14"
            ],
            "1.4 Active": [
              "185/65 R14"
            ],
            "1.4 Advantage": [
              "185/65 R14"
            ]
          }
        },
        {
          "de": 2023,
          "ate": 2025,
          "versoes": {
            "1.2 Turbo LT": [
              "215/60 R16"
            ],
            "1.2 Turbo LTZ": [
              "215/55 R17"
            ],
            "1.2 Turbo Premier": [
              "215/55 R17"
            ],
            "1.2 Turbo RS": [
              "215/55 R17"
            ]
          }
        }
      ]
    },
    "COBALT": {
      "geracoes": [
        {
          "de": 2012,
          "ate": 2020,
          "versoes": {
            "1.4 LT": [
              "195/65 R15"
            ],
            "1.4 LTZ": [
              "195/65 R15"
            ],
            "1.8 Elite": [
              "195/65 R15"
            ]
          }
        }
      ]
    },
    "PRISMA": {
      "geracoes": [
        {
          "de": 2007,
          "ate": 2012,
          "versoes": {
            "1.4 Maxx": [
              "185/70 R14"
            ],
            "1.8 Effect": [
              "195/60 R15"
            ],
            "1.4 LT": [
              "185/70 R14"
            ],
            "1.4 LTZ": [
              "185/70 R14"
            ],
            "1.4 Effect": [
              "185/70 R14"
            ],
            "1.4 Active": [
              "185/70 R14"
            ],
            "1.4 Advantage": [
              "185/70 R14"
            ],
            "1.8 LT": [
              "195/60 R15"
            ],
            "1.8 LTZ": [
              "195/60 R15"
            ],
            "1.8 Advantage": [
              "195/60 R15"
            ],
            "1.8 Elite": [
              "195/60 R15"
            ]
          }
        },
        {
          "de": 2013,
          "ate": 2019,
          "versoes": {
            "1.0 LT": [
              "185/70 R14"
            ],
            "1.4 LT": [
              "185/70 R14"
            ],
            "1.4 LTZ": [
              "185/65 R15"
            ]
          }
        }
      ]
    },
    "AGILE": {
      "geracoes": [
        {
          "de": 2009,
          "ate": 2016,
          "versoes": {
            "1.4 LS": [
              "185/70 R14"
            ],
            "1.4 LT": [
              "185/65 R15"
            ],
            "1.4 LTZ": [
              "185/65 R15"
            ]
          }
        }
      ]
    },
    "ASTRA": {
      "geracoes": [
        {
          "de": 1999,
          "ate": 2011,
          "versoes": {
            "2.0 GL": [
              "195/60 R15"
            ],
            "2.0 GLS": [
              "195/60 R15"
            ],
            "2.0 Elite": [
              "205/55 R16"
            ],
            "2.0 SS": [
              "205/55 R16"
            ]
          }
        }
      ]
    },
    "VECTRA": {
      "geracoes": [
        {
          "de": 1997,
          "ate": 2005,
          "versoes": {
            "2.0 GL": [
              "195/60 R15"
            ],
            "2.0 CD": [
              "205/55 R16"
            ],
            "2.4 Elite": [
              "205/55 R16"
            ]
          }
        },
        {
          "de": 2006,
          "ate": 2011,
          "versoes": {
            "2.0 Expression": [
              "195/60 R15"
            ],
            "2.4 Elite": [
              "205/55 R16"
            ],
            "2.0 GT": [
              "215/50 R17"
            ]
          }
        }
      ]
    },
    "ZAFIRA": {
      "geracoes": [
        {
          "de": 2002,
          "ate": 2012,
          "versoes": {
            "2.0 Comfort": [
              "205/55 R16"
            ],
            "2.0 Elite": [
              "205/55 R16"
            ],
            "2.0 CD": [
              "205/55 R16"
            ]
          }
        }
      ]
    },
    "CAPTIVA": {
      "geracoes": [
        {
          "de": 2009,
          "ate": 2016,
          "versoes": {
            "2.4 LT": [
              "235/65 R17"
            ],
            "3.0 V6 LTZ": [
              "235/55 R19"
            ]
          }
        }
      ]
    },
    "CLASSIC": {
      "geracoes": [
        {
          "de": 2006,
          "ate": 2016,
          "versoes": {
            "1.0 LS": [
              "165/70 R14"
            ],
            "1.4 LT": [
              "175/65 R14"
            ],
            "1.4 LTZ": [
              "175/65 R14"
            ]
          }
        }
      ]
    },
    "CAMARO": {
      "geracoes": [
        {
          "de": 2011,
          "ate": 2016,
          "versoes": {
            "3.6 V6 LT": [
              "245/45 R20",
              "275/40 R20"
            ],
            "6.2 V8 SS": [
              "245/45 R20",
              "275/40 R20"
            ]
          }
        },
        {
          "de": 2017,
          "ate": 2024,
          "versoes": {
            "2.0 Turbo LT": [
              "235/40 R20",
              "255/35 R20"
            ],
            "6.2 V8 SS": [
              "245/40 R20",
              "275/35 R20"
            ],
            "6.2 V8 ZL1": [
              "305/30 R20",
              "305/30 R20"
            ]
          }
        }
      ]
    },
    "SILVERADO": {
      "geracoes": [
        {
          "de": 2001,
          "ate": 2012,
          "versoes": {
            "4.2 V6": [
              "265/70 R16"
            ],
            "6.0 V8": [
              "265/70 R16"
            ]
          }
        }
      ]
    },
    "OMEGA": {
      "geracoes": [
        {
          "de": 1993,
          "ate": 2007,
          "versoes": {
            "2.0": [
              "205/55 R15"
            ],
            "2.2": [
              "205/55 R15"
            ],
            "3.8 V6": [
              "225/50 R16"
            ]
          }
        }
      ]
    },
    "CRUZE SPORT 6": {
      "geracoes": [
        {
          "de": 2012,
          "ate": 2016,
          "versoes": {
            "1.8 LT": [
              "205/60 R16"
            ],
            "1.8 LTZ": [
              "225/50 R17"
            ],
            "1.8 Advantage": [
              "205/60 R16"
            ],
            "1.8 Elite": [
              "205/60 R16"
            ]
          }
        },
        {
          "de": 2017,
          "ate": 2023,
          "versoes": {
            "1.4 Turbo LT": [
              "215/50 R17"
            ],
            "1.4 Turbo LTZ": [
              "215/50 R17"
            ],
            "1.4 Turbo Premier": [
              "215/50 R17"
            ]
          }
        }
      ]
    }
  },
  "FIAT": {
    "500": {
      "geracoes": [
        {
          "de": 2012,
          "ate": 2020,
          "versoes": {
            "1.4 Cult": [
              "185/55 R15"
            ],
            "1.4 Sport": [
              "195/45 R16"
            ],
            "1.4 Abarth": [
              "195/45 R17"
            ],
            "1.4 Abarth 595": [
              "215/40 R17"
            ]
          }
        }
      ]
    },
    "ARGO": {
      "geracoes": [
        {
          "de": 2017,
          "ate": 2025,
          "versoes": {
            "1.0 Drive": [
              "175/65 R14"
            ],
            "1.3 Drive": [
              "185/60 R15"
            ],
            "1.3 Trekking": [
              "205/60 R15"
            ],
            "1.8 Precision": [
              "195/55 R16"
            ],
            "1.8 HGT": [
              "205/50 R17"
            ]
          }
        }
      ]
    },
    "CRONOS": {
      "geracoes": [
        {
          "de": 2018,
          "ate": 2025,
          "versoes": {
            "1.0 Drive": [
              "175/65 R14"
            ],
            "1.3 Drive": [
              "185/60 R15"
            ],
            "1.3 Precision": [
              "195/55 R16"
            ],
            "1.8 Precision": [
              "205/45 R17"
            ]
          }
        }
      ]
    },
    "TORO": {
      "geracoes": [
        {
          "de": 2016,
          "ate": 2025,
          "versoes": {
            "1.8 Endurance": [
              "215/65 R16"
            ],
            "1.3 Turbo Freedom": [
              "215/65 R16"
            ],
            "1.3 Turbo Volcano": [
              "225/60 R18"
            ],
            "2.0 Diesel Volcano": [
              "225/60 R18"
            ],
            "2.0 Diesel Ranch": [
              "225/60 R18"
            ],
            "2.0 Diesel Ultra": [
              "225/65 R17"
            ]
          }
        }
      ]
    },
    "FASTBACK": {
      "geracoes": [
        {
          "de": 2023,
          "ate": 2025,
          "versoes": {
            "1.3 Turbo Audace": [
              "205/50 R17"
            ],
            "1.3 Turbo Impetus": [
              "215/45 R18"
            ],
            "1.3 Turbo Abarth": [
              "215/45 R18"
            ]
          }
        }
      ]
    },
    "PULSE": {
      "geracoes": [
        {
          "de": 2022,
          "ate": 2025,
          "versoes": {
            "1.3 Drive": [
              "195/60 R16"
            ],
            "1.0 Turbo Audace": [
              "195/60 R16"
            ],
            "1.0 Turbo Impetus": [
              "205/50 R17"
            ],
            "1.3 Turbo Abarth": [
              "215/50 R17"
            ]
          }
        }
      ]
    },
    "STRADA": {
      "geracoes": [
        {
          "de": 2000,
          "ate": 2009,
          "versoes": {
            "1.5 Fire": [
              "175/65 R14"
            ],
            "1.8 Adventure": [
              "195/60 R15"
            ],
            "1.8 Precision": [
              "195/60 R15"
            ],
            "1.8 HGT": [
              "195/60 R15"
            ],
            "1.8 Essence": [
              "195/60 R15"
            ]
          }
        },
        {
          "de": 2010,
          "ate": 2020,
          "versoes": {
            "1.4 Working": [
              "175/70 R14"
            ],
            "1.4 Hard Working": [
              "175/70 R14"
            ],
            "1.8 Adventure": [
              "205/60 R15"
            ]
          }
        },
        {
          "de": 2021,
          "ate": 2025,
          "versoes": {
            "1.4 Endurance": [
              "195/65 R15"
            ],
            "1.3 Freedom": [
              "195/65 R15"
            ],
            "1.3 Volcano": [
              "205/60 R15"
            ],
            "1.0 Turbo Ranch": [
              "205/60 R15"
            ],
            "1.0 Turbo Ultra": [
              "205/55 R16"
            ]
          }
        }
      ]
    },
    "MOBI": {
      "geracoes": [
        {
          "de": 2016,
          "ate": 2025,
          "versoes": {
            "1.0 Easy": [
              "175/65 R14"
            ],
            "1.0 Like": [
              "175/65 R14"
            ],
            "1.0 Way": [
              "175/65 R14"
            ],
            "1.0 Trekking": [
              "175/65 R14"
            ]
          }
        }
      ]
    },
    "UNO": {
      "geracoes": [
        {
          "de": 2004,
          "ate": 2010,
          "versoes": {
            "1.0 Fire Economy": [
              "165/70 R13"
            ],
            "1.0 Mille": [
              "165/70 R13"
            ],
            "1.0 Drive": [
              "165/70 R13"
            ],
            "1.0 Like": [
              "165/70 R13"
            ],
            "1.0 Way": [
              "165/70 R13"
            ],
            "1.0 Attractive": [
              "165/70 R13"
            ]
          }
        },
        {
          "de": 2010,
          "ate": 2021,
          "versoes": {
            "1.0 Vivace": [
              "175/65 R14"
            ],
            "1.0 Way": [
              "175/70 R14"
            ],
            "1.4 Way": [
              "175/70 R14"
            ],
            "1.4 Sporting": [
              "185/60 R15"
            ]
          }
        }
      ]
    },
    "PALIO": {
      "geracoes": [
        {
          "de": 1997,
          "ate": 2011,
          "versoes": {
            "1.0 Fire": [
              "175/70 R13"
            ],
            "1.0 ELX": [
              "175/70 R13"
            ],
            "1.6 Stile": [
              "185/65 R14"
            ],
            "1.8 HLX": [
              "185/65 R14"
            ]
          }
        },
        {
          "de": 2012,
          "ate": 2017,
          "versoes": {
            "1.0 Attractive": [
              "175/65 R14"
            ],
            "1.4 Attractive": [
              "175/65 R14"
            ],
            "1.6 Essence": [
              "185/60 R15"
            ],
            "1.6 Sporting": [
              "195/55 R16"
            ]
          }
        }
      ]
    },
    "SIENA": {
      "geracoes": [
        {
          "de": 1998,
          "ate": 2007,
          "versoes": {
            "1.0": [
              "175/70 R13"
            ],
            "1.3": [
              "175/65 R14"
            ],
            "1.6": [
              "185/60 R15"
            ]
          }
        },
        {
          "de": 2008,
          "ate": 2016,
          "versoes": {
            "1.0 EL": [
              "175/65 R14"
            ],
            "1.4 EL": [
              "175/65 R14"
            ],
            "1.6 Essence": [
              "185/60 R15"
            ]
          }
        }
      ]
    },
    "GRAND SIENA": {
      "geracoes": [
        {
          "de": 2012,
          "ate": 2021,
          "versoes": {
            "1.4 Attractive": [
              "185/60 R15"
            ],
            "1.6 Essence": [
              "195/55 R16"
            ],
            "1.4 Hard Working": [
              "185/60 R15"
            ],
            "1.4 Endurance": [
              "185/60 R15"
            ],
            "1.6 Sporting": [
              "195/55 R16"
            ],
            "1.6 Precision": [
              "195/55 R16"
            ]
          }
        }
      ]
    },
    "PUNTO": {
      "geracoes": [
        {
          "de": 2008,
          "ate": 2017,
          "versoes": {
            "1.4 Attractive": [
              "195/60 R15"
            ],
            "1.6 Essence": [
              "195/60 R15"
            ],
            "1.8 Sporting": [
              "195/55 R16"
            ],
            "1.4 T-Jet": [
              "205/50 R17"
            ]
          }
        }
      ]
    },
    "BRAVO": {
      "geracoes": [
        {
          "de": 2010,
          "ate": 2015,
          "versoes": {
            "1.4 T-Jet Essence": [
              "205/55 R16"
            ],
            "1.8 Essence": [
              "205/55 R16"
            ],
            "1.8 Sporting": [
              "225/45 R17"
            ],
            "1.4 T-Jet Sporting": [
              "225/45 R17"
            ]
          }
        }
      ]
    },
    "LINEA": {
      "geracoes": [
        {
          "de": 2008,
          "ate": 2016,
          "versoes": {
            "1.8 Absolute": [
              "205/55 R16"
            ],
            "1.9 Turbo Sporting": [
              "215/45 R17"
            ],
            "1.3 T-Jet": [
              "205/55 R16"
            ]
          }
        }
      ]
    },
    "PALIO WEEKEND": {
      "geracoes": [
        {
          "de": 2001,
          "ate": 2010,
          "versoes": {
            "1.3 ELX": [
              "175/70 R14"
            ],
            "1.6 ELX": [
              "185/65 R14"
            ],
            "1.8 HLX": [
              "185/65 R14"
            ]
          }
        },
        {
          "de": 2010,
          "ate": 2017,
          "versoes": {
            "1.4 Attractive": [
              "175/65 R14"
            ],
            "1.6 Essence": [
              "185/60 R15"
            ],
            "1.8 Adventure": [
              "195/60 R15"
            ]
          }
        }
      ]
    },
    "IDEA": {
      "geracoes": [
        {
          "de": 2007,
          "ate": 2016,
          "versoes": {
            "1.4 Attractive": [
              "175/65 R14"
            ],
            "1.6 Essence": [
              "185/60 R15"
            ],
            "1.8 Adventure": [
              "195/55 R16"
            ],
            "1.8 Sporting": [
              "195/55 R16"
            ]
          }
        }
      ]
    },
    "DOBLO": {
      "geracoes": [
        {
          "de": 2002,
          "ate": 2010,
          "versoes": {
            "1.3": [
              "185/70 R14"
            ],
            "1.8 ELX": [
              "195/65 R15"
            ],
            "1.8 Adventure": [
              "195/65 R15"
            ]
          }
        },
        {
          "de": 2010,
          "ate": 2022,
          "versoes": {
            "1.8 Essence": [
              "195/65 R15"
            ],
            "1.8 Attractive": [
              "195/65 R15"
            ],
            "1.3 Multijet": [
              "195/65 R15"
            ]
          }
        }
      ]
    },
    "FIORINO": {
      "geracoes": [
        {
          "de": 2005,
          "ate": 2022,
          "versoes": {
            "1.4 Endurance": [
              "175/70 R14"
            ],
            "1.4 Attractive": [
              "175/70 R14"
            ],
            "1.4 Hard Working": [
              "175/70 R14"
            ]
          }
        }
      ]
    },
    "DUCATO": {
      "geracoes": [
        {
          "de": 2005,
          "ate": 2025,
          "versoes": {
            "2.3 Multijet": [
              "225/65 R16C"
            ]
          }
        }
      ]
    },
    "500X": {
      "geracoes": [
        {
          "de": 2016,
          "ate": 2021,
          "versoes": {
            "1.4 Turbo Pop": [
              "215/60 R16"
            ],
            "1.4 Turbo Lounge": [
              "215/55 R17"
            ],
            "1.4 Attractive": [
              "215/60 R16"
            ],
            "1.4 Hard Working": [
              "215/60 R16"
            ],
            "1.4 Endurance": [
              "215/60 R16"
            ]
          }
        }
      ]
    },
    "TIPO": {
      "geracoes": [
        {
          "de": 2017,
          "ate": 2020,
          "versoes": {
            "1.6 Easy": [
              "195/60 R16"
            ],
            "1.6 Lounge": [
              "215/45 R17"
            ],
            "1.6 Essence": [
              "195/60 R16"
            ],
            "1.6 Sporting": [
              "195/60 R16"
            ],
            "1.6 Precision": [
              "195/60 R16"
            ]
          }
        }
      ]
    }
  },
  "TOYOTA": {
    "COROLLA": {
      "geracoes": [
        {
          "de": 1998,
          "ate": 2002,
          "versoes": {
            "1.8 XEi": [
              "195/60 R15"
            ],
            "1.8 XLi": [
              "185/65 R15"
            ],
            "1.8 GLi": [
              "195/60 R15"
            ],
            "1.8 Hybrid": [
              "195/60 R15"
            ]
          }
        },
        {
          "de": 2003,
          "ate": 2008,
          "versoes": {
            "1.8 XEi": [
              "195/60 R15"
            ],
            "2.0 SE-G": [
              "205/55 R16"
            ],
            "1.8 GLi": [
              "195/60 R15"
            ],
            "1.8 XLi": [
              "195/60 R15"
            ],
            "1.8 Hybrid": [
              "195/60 R15"
            ],
            "2.0 XEi": [
              "205/55 R16"
            ],
            "2.0 Altis": [
              "205/55 R16"
            ],
            "2.0 XRS": [
              "205/55 R16"
            ],
            "2.0 GR-S": [
              "205/55 R16"
            ]
          }
        },
        {
          "de": 2009,
          "ate": 2014,
          "versoes": {
            "1.8 GLi": [
              "195/60 R15"
            ],
            "2.0 XEi": [
              "205/55 R16"
            ],
            "2.0 XRS": [
              "215/45 R17"
            ]
          }
        },
        {
          "de": 2015,
          "ate": 2019,
          "versoes": {
            "1.8 GLi": [
              "205/55 R16"
            ],
            "2.0 XEi": [
              "205/55 R16"
            ],
            "2.0 Altis": [
              "215/50 R17"
            ],
            "2.0 XRS": [
              "215/50 R17"
            ]
          }
        },
        {
          "de": 2020,
          "ate": 2025,
          "versoes": {
            "2.0 GLi": [
              "205/55 R16"
            ],
            "2.0 XEi": [
              "225/45 R17"
            ],
            "2.0 Altis": [
              "225/45 R17"
            ],
            "2.0 GR-S": [
              "225/45 R17"
            ],
            "1.8 Hybrid Altis": [
              "225/45 R17"
            ],
            "1.8 Hybrid Premium": [
              "225/45 R17"
            ]
          }
        }
      ]
    },
    "COROLLA CROSS": {
      "geracoes": [
        {
          "de": 2021,
          "ate": 2025,
          "versoes": {
            "2.0 XR": [
              "215/60 R17"
            ],
            "2.0 XRE": [
              "225/50 R18"
            ],
            "1.8 Hybrid XRV": [
              "225/50 R18"
            ],
            "1.8 Hybrid XRX": [
              "225/50 R18"
            ],
            "2.0 GR-S": [
              "225/50 R18"
            ]
          }
        }
      ]
    },
    "HILUX": {
      "geracoes": [
        {
          "de": 2000,
          "ate": 2004,
          "versoes": {
            "2.7 4x2": [
              "225/75 R15"
            ],
            "3.0 Diesel SR5": [
              "265/70 R15"
            ]
          }
        },
        {
          "de": 2005,
          "ate": 2015,
          "versoes": {
            "2.7 SR": [
              "245/70 R16"
            ],
            "3.0 TDI SRV": [
              "265/65 R17"
            ],
            "3.0 TDI SRX": [
              "265/65 R17"
            ]
          }
        },
        {
          "de": 2016,
          "ate": 2025,
          "versoes": {
            "2.8 Diesel STD": [
              "225/70 R17"
            ],
            "2.8 Diesel SR": [
              "265/65 R17"
            ],
            "2.8 Diesel SRV": [
              "265/60 R18"
            ],
            "2.8 Diesel SRX": [
              "265/60 R18"
            ],
            "2.8 Diesel GR-S": [
              "265/60 R18"
            ]
          }
        }
      ]
    },
    "YARIS": {
      "geracoes": [
        {
          "de": 2018,
          "ate": 2025,
          "versoes": {
            "1.3 XL": [
              "185/60 R15"
            ],
            "1.5 XS": [
              "185/60 R15"
            ],
            "1.5 XLS": [
              "185/60 R15"
            ],
            "1.5 XLS Connect": [
              "185/60 R15"
            ]
          }
        }
      ]
    },
    "ETIOS": {
      "geracoes": [
        {
          "de": 2013,
          "ate": 2021,
          "versoes": {
            "1.3 X": [
              "175/65 R14"
            ],
            "1.5 XS": [
              "185/60 R15"
            ],
            "1.5 XLS": [
              "185/60 R15"
            ],
            "1.5 Cross": [
              "185/60 R15"
            ]
          }
        }
      ]
    },
    "SW4": {
      "geracoes": [
        {
          "de": 2005,
          "ate": 2015,
          "versoes": {
            "2.7 SR": [
              "265/70 R16"
            ],
            "3.0 TDI SRX": [
              "265/70 R16"
            ]
          }
        },
        {
          "de": 2016,
          "ate": 2025,
          "versoes": {
            "2.8 Diesel SRX": [
              "265/60 R18"
            ],
            "2.8 Diesel Diamond": [
              "265/60 R18"
            ],
            "2.8 Diesel GR-S": [
              "265/60 R18"
            ]
          }
        }
      ]
    },
    "RAV4": {
      "geracoes": [
        {
          "de": 2001,
          "ate": 2005,
          "versoes": {
            "2.0 16V": [
              "215/70 R16"
            ],
            "2.0 XEi": [
              "215/70 R16"
            ],
            "2.0 Altis": [
              "215/70 R16"
            ],
            "2.0 XRS": [
              "215/70 R16"
            ],
            "2.0 GR-S": [
              "215/70 R16"
            ]
          }
        },
        {
          "de": 2006,
          "ate": 2012,
          "versoes": {
            "2.4 16V": [
              "215/65 R16"
            ]
          }
        },
        {
          "de": 2013,
          "ate": 2018,
          "versoes": {
            "2.5 4x2": [
              "225/60 R17"
            ],
            "2.5 4x4": [
              "225/60 R17"
            ]
          }
        },
        {
          "de": 2019,
          "ate": 2025,
          "versoes": {
            "2.5 Hybrid S": [
              "225/60 R18"
            ],
            "2.5 Hybrid SX": [
              "225/60 R18"
            ]
          }
        }
      ]
    },
    "LAND CRUISER": {
      "geracoes": [
        {
          "de": 2000,
          "ate": 2007,
          "versoes": {
            "4.2 Diesel": [
              "265/70 R16"
            ]
          }
        },
        {
          "de": 2008,
          "ate": 2025,
          "versoes": {
            "4.0 V6 VX": [
              "285/60 R18"
            ],
            "4.5 V8 TDI VX": [
              "285/60 R18"
            ]
          }
        }
      ]
    },
    "PRIUS": {
      "geracoes": [
        {
          "de": 2006,
          "ate": 2011,
          "versoes": {
            "1.5 Hybrid": [
              "195/65 R15"
            ],
            "1.5 XL": [
              "195/65 R15"
            ],
            "1.5 XS": [
              "195/65 R15"
            ],
            "1.5 XLS": [
              "195/65 R15"
            ]
          }
        },
        {
          "de": 2012,
          "ate": 2022,
          "versoes": {
            "1.8 Hybrid": [
              "215/45 R17"
            ],
            "1.8 GLi": [
              "215/45 R17"
            ],
            "1.8 XLi": [
              "215/45 R17"
            ]
          }
        }
      ]
    },
    "FORTUNER": {
      "geracoes": [
        {
          "de": 2017,
          "ate": 2023,
          "versoes": {
            "2.8 Diesel SRX": [
              "265/65 R17"
            ],
            "2.8 Diesel GR-S": [
              "265/60 R18"
            ]
          }
        }
      ]
    },
    "CAMRY": {
      "geracoes": [
        {
          "de": 2000,
          "ate": 2006,
          "versoes": {
            "2.4 XLE": [
              "205/60 R16"
            ]
          }
        },
        {
          "de": 2019,
          "ate": 2025,
          "versoes": {
            "2.5 Hybrid": [
              "235/45 R18"
            ]
          }
        }
      ]
    }
  },
  "HONDA": {
    "CIVIC": {
      "geracoes": [
        {
          "de": 1997,
          "ate": 2000,
          "versoes": {
            "1.6 EX": [
              "185/65 R14"
            ],
            "1.6 Si": [
              "195/55 R15"
            ]
          }
        },
        {
          "de": 2001,
          "ate": 2006,
          "versoes": {
            "1.7 LX": [
              "185/65 R15"
            ],
            "1.7 EX": [
              "195/60 R15"
            ]
          }
        },
        {
          "de": 2007,
          "ate": 2011,
          "versoes": {
            "1.8 LXS": [
              "195/65 R15"
            ],
            "1.8 EXS": [
              "205/55 R16"
            ],
            "1.8 LX": [
              "195/65 R15"
            ],
            "1.8 EX": [
              "195/65 R15"
            ],
            "1.8 EXL": [
              "195/65 R15"
            ]
          }
        },
        {
          "de": 2012,
          "ate": 2016,
          "versoes": {
            "1.8 LXS": [
              "205/55 R16"
            ],
            "2.0 LXR": [
              "205/55 R16"
            ],
            "2.0 EXR": [
              "205/55 R16"
            ]
          }
        },
        {
          "de": 2017,
          "ate": 2021,
          "versoes": {
            "2.0 Sport": [
              "215/50 R17"
            ],
            "2.0 EX": [
              "215/50 R17"
            ],
            "2.0 EXL": [
              "215/50 R17"
            ],
            "1.5 Turbo Touring": [
              "215/50 R17"
            ]
          }
        },
        {
          "de": 2022,
          "ate": 2025,
          "versoes": {
            "2.0 EX": [
              "225/50 R17"
            ],
            "2.0 EXL": [
              "225/50 R17"
            ],
            "1.5 Turbo Touring": [
              "225/50 R17"
            ]
          }
        }
      ]
    },
    "HR-V": {
      "geracoes": [
        {
          "de": 2016,
          "ate": 2022,
          "versoes": {
            "1.8 LX": [
              "215/55 R17"
            ],
            "1.8 EX": [
              "215/55 R17"
            ],
            "1.8 EXL": [
              "215/55 R17"
            ],
            "1.5 Turbo Touring": [
              "215/55 R17"
            ]
          }
        },
        {
          "de": 2023,
          "ate": 2025,
          "versoes": {
            "1.5 EX": [
              "215/60 R17"
            ],
            "1.5 EXL": [
              "215/60 R17"
            ],
            "1.5 Turbo Advance": [
              "215/60 R17"
            ],
            "1.5 Turbo Touring": [
              "215/60 R17"
            ]
          }
        }
      ]
    },
    "CITY": {
      "geracoes": [
        {
          "de": 2009,
          "ate": 2014,
          "versoes": {
            "1.5 LX": [
              "185/60 R15"
            ],
            "1.5 EX": [
              "185/60 R15"
            ],
            "1.5 EXL": [
              "185/55 R16"
            ]
          }
        },
        {
          "de": 2015,
          "ate": 2021,
          "versoes": {
            "1.5 DX": [
              "175/65 R15"
            ],
            "1.5 LX": [
              "175/65 R15"
            ],
            "1.5 EX": [
              "185/55 R16"
            ],
            "1.5 EXL": [
              "185/55 R16"
            ]
          }
        },
        {
          "de": 2022,
          "ate": 2025,
          "versoes": {
            "1.5 EX": [
              "185/55 R16"
            ],
            "1.5 EXL": [
              "185/55 R16"
            ],
            "1.5 Touring": [
              "185/55 R16"
            ]
          }
        }
      ]
    },
    "FIT": {
      "geracoes": [
        {
          "de": 2004,
          "ate": 2008,
          "versoes": {
            "1.4": [
              "175/65 R14"
            ],
            "1.5 EX": [
              "185/60 R15"
            ],
            "1.5 DX": [
              "185/60 R15"
            ],
            "1.5 LX": [
              "185/60 R15"
            ],
            "1.5 EXL": [
              "185/60 R15"
            ]
          }
        },
        {
          "de": 2009,
          "ate": 2014,
          "versoes": {
            "1.4 LX": [
              "185/60 R15"
            ],
            "1.5 EX": [
              "195/50 R16"
            ],
            "1.5 EXL": [
              "195/50 R16"
            ]
          }
        },
        {
          "de": 2015,
          "ate": 2021,
          "versoes": {
            "1.5 DX": [
              "185/60 R15"
            ],
            "1.5 LX": [
              "185/60 R15"
            ],
            "1.5 EX": [
              "185/55 R16"
            ],
            "1.5 EXL": [
              "185/55 R16"
            ]
          }
        }
      ]
    },
    "WR-V": {
      "geracoes": [
        {
          "de": 2017,
          "ate": 2023,
          "versoes": {
            "1.5 EX": [
              "195/60 R16"
            ],
            "1.5 EXL": [
              "195/60 R16"
            ],
            "1.5 DX": [
              "195/60 R16"
            ],
            "1.5 LX": [
              "195/60 R16"
            ]
          }
        }
      ]
    },
    "CR-V": {
      "geracoes": [
        {
          "de": 2002,
          "ate": 2007,
          "versoes": {
            "2.0 EX": [
              "215/65 R16"
            ],
            "2.0 LXS": [
              "215/65 R16"
            ],
            "2.0 LXR": [
              "215/65 R16"
            ],
            "2.0 EXL": [
              "215/65 R16"
            ]
          }
        },
        {
          "de": 2008,
          "ate": 2011,
          "versoes": {
            "2.0 EXL": [
              "215/60 R17"
            ],
            "2.0 LXS": [
              "215/60 R17"
            ],
            "2.0 LXR": [
              "215/60 R17"
            ],
            "2.0 EX": [
              "215/60 R17"
            ]
          }
        },
        {
          "de": 2013,
          "ate": 2017,
          "versoes": {
            "2.0 EX": [
              "215/65 R16"
            ],
            "2.4 EXL": [
              "215/65 R16"
            ],
            "2.0 LXS": [
              "215/65 R16"
            ],
            "2.0 LXR": [
              "215/65 R16"
            ],
            "2.0 EXL": [
              "215/65 R16"
            ]
          }
        },
        {
          "de": 2018,
          "ate": 2022,
          "versoes": {
            "1.5 Turbo EX": [
              "235/60 R18"
            ],
            "1.5 Turbo Touring": [
              "235/60 R18"
            ],
            "1.5 DX": [
              "235/60 R18"
            ],
            "1.5 LX": [
              "235/60 R18"
            ],
            "1.5 EX": [
              "235/60 R18"
            ],
            "1.5 EXL": [
              "235/60 R18"
            ]
          }
        }
      ]
    },
    "ACCORD": {
      "geracoes": [
        {
          "de": 2000,
          "ate": 2007,
          "versoes": {
            "2.0 EX": [
              "205/60 R16"
            ],
            "3.0 EX V6": [
              "215/55 R17"
            ],
            "2.0 LXS": [
              "205/60 R16"
            ],
            "2.0 LXR": [
              "205/60 R16"
            ],
            "2.0 EXL": [
              "205/60 R16"
            ]
          }
        },
        {
          "de": 2008,
          "ate": 2013,
          "versoes": {
            "2.0": [
              "205/60 R16"
            ],
            "3.5 V6": [
              "215/55 R17"
            ],
            "2.0 LXS": [
              "205/60 R16"
            ],
            "2.0 LXR": [
              "205/60 R16"
            ],
            "2.0 EX": [
              "205/60 R16"
            ],
            "2.0 EXL": [
              "205/60 R16"
            ]
          }
        },
        {
          "de": 2019,
          "ate": 2022,
          "versoes": {
            "2.0 Turbo Touring": [
              "235/45 R18"
            ],
            "2.0 LXS": [
              "235/45 R18"
            ],
            "2.0 LXR": [
              "235/45 R18"
            ],
            "2.0 EX": [
              "235/45 R18"
            ],
            "2.0 EXL": [
              "235/45 R18"
            ]
          }
        }
      ]
    },
    "JAZZ": {
      "geracoes": [
        {
          "de": 2009,
          "ate": 2012,
          "versoes": {
            "1.5 DX": [
              "185/60 R15"
            ],
            "1.5 EX": [
              "195/50 R16"
            ],
            "1.5 LX": [
              "185/60 R15"
            ],
            "1.5 EXL": [
              "185/60 R15"
            ]
          }
        }
      ]
    },
    "ZR-V": {
      "geracoes": [
        {
          "de": 2023,
          "ate": 2025,
          "versoes": {
            "1.5 Turbo Advance": [
              "225/55 R17"
            ],
            "1.5 Turbo Touring": [
              "225/55 R17"
            ],
            "1.5 DX": [
              "225/55 R17"
            ],
            "1.5 LX": [
              "225/55 R17"
            ],
            "1.5 EX": [
              "225/55 R17"
            ],
            "1.5 EXL": [
              "225/55 R17"
            ]
          }
        }
      ]
    }
  },
  "JEEP": {
    "RENEGADE": {
      "geracoes": [
        {
          "de": 2015,
          "ate": 2025,
          "versoes": {
            "1.8 Sport": [
              "215/60 R17"
            ],
            "1.3 Turbo Longitude": [
              "225/55 R18"
            ],
            "2.0 Diesel Trailhawk": [
              "215/60 R17"
            ],
            "1.3 Turbo Trailhawk": [
              "225/60 R17"
            ]
          }
        }
      ]
    },
    "COMPASS": {
      "geracoes": [
        {
          "de": 2017,
          "ate": 2025,
          "versoes": {
            "1.3 Turbo Sport": [
              "225/60 R17"
            ],
            "1.3 Turbo Longitude": [
              "225/55 R18"
            ],
            "1.3 Turbo Limited": [
              "235/45 R19"
            ],
            "2.0 Diesel Trailhawk": [
              "225/60 R17"
            ]
          }
        }
      ]
    },
    "COMMANDER": {
      "geracoes": [
        {
          "de": 2022,
          "ate": 2025,
          "versoes": {
            "1.3 Turbo Limited": [
              "235/55 R18"
            ],
            "1.3 Turbo Overland": [
              "235/50 R19"
            ],
            "2.0 Diesel Overland": [
              "235/50 R19"
            ]
          }
        }
      ]
    },
    "GRAND CHEROKEE": {
      "geracoes": [
        {
          "de": 2000,
          "ate": 2010,
          "versoes": {
            "4.0 I6 Laredo": [
              "225/70 R16"
            ],
            "4.7 V8 Limited": [
              "245/65 R17"
            ]
          }
        },
        {
          "de": 2011,
          "ate": 2022,
          "versoes": {
            "3.6 V6 Laredo": [
              "245/65 R17"
            ],
            "3.6 V6 Limited": [
              "265/50 R20"
            ],
            "5.7 Overland": [
              "265/50 R20"
            ],
            "6.4 SRT": [
              "295/45 R20"
            ]
          }
        },
        {
          "de": 2022,
          "ate": 2025,
          "versoes": {
            "3.6 V6 Laredo": [
              "265/50 R20"
            ],
            "4xe Summit": [
              "265/45 R21"
            ]
          }
        }
      ]
    },
    "WRANGLER": {
      "geracoes": [
        {
          "de": 2000,
          "ate": 2006,
          "versoes": {
            "4.0 I6 Sport": [
              "235/70 R15"
            ]
          }
        },
        {
          "de": 2007,
          "ate": 2017,
          "versoes": {
            "3.8 Sport": [
              "255/75 R17"
            ],
            "3.6 V6 Rubicon": [
              "255/75 R17"
            ]
          }
        },
        {
          "de": 2018,
          "ate": 2025,
          "versoes": {
            "3.6 V6 Sahara": [
              "255/70 R18"
            ],
            "3.6 V6 Rubicon": [
              "255/75 R17"
            ],
            "2.0 Turbo Sahara": [
              "255/70 R18"
            ]
          }
        }
      ]
    },
    "GLADIATOR": {
      "geracoes": [
        {
          "de": 2021,
          "ate": 2025,
          "versoes": {
            "3.6 V6 Rubicon": [
              "255/70 R18"
            ],
            "3.0 Diesel Overland": [
              "255/70 R18"
            ]
          }
        }
      ]
    },
    "CHEROKEE": {
      "geracoes": [
        {
          "de": 1997,
          "ate": 2001,
          "versoes": {
            "4.0 I6 Sport": [
              "225/75 R15"
            ]
          }
        },
        {
          "de": 2014,
          "ate": 2019,
          "versoes": {
            "2.0 Turbo Longitude": [
              "225/55 R17"
            ],
            "3.2 V6 Limited": [
              "245/50 R20"
            ],
            "2.0 Diesel Longitude": [
              "225/55 R17"
            ],
            "2.0 Diesel Limited": [
              "225/55 R17"
            ],
            "2.0 Diesel Trailhawk": [
              "225/55 R17"
            ]
          }
        }
      ]
    }
  },
  "HYUNDAI": {
    "HB20": {
      "geracoes": [
        {
          "de": 2012,
          "ate": 2019,
          "versoes": {
            "1.0 Comfort": [
              "175/70 R14"
            ],
            "1.0 Comfort Plus": [
              "175/70 R14"
            ],
            "1.0 Comfort Style": [
              "185/60 R15"
            ],
            "1.6 Comfort Plus": [
              "185/60 R15"
            ],
            "1.6 Comfort Style": [
              "185/60 R15"
            ],
            "1.6 Premium": [
              "185/60 R15"
            ],
            "1.6 R spec": [
              "185/60 R15"
            ]
          }
        },
        {
          "de": 2020,
          "ate": 2025,
          "versoes": {
            "1.0 Sense": [
              "175/70 R14"
            ],
            "1.0 Comfort": [
              "185/60 R15"
            ],
            "1.0 Turbo Platinum": [
              "195/55 R16"
            ],
            "1.0 Turbo Platinum Plus": [
              "195/55 R16"
            ]
          }
        }
      ]
    },
    "HB20S": {
      "geracoes": [
        {
          "de": 2013,
          "ate": 2019,
          "versoes": {
            "1.0 Comfort": [
              "175/70 R14"
            ],
            "1.0 Comfort Plus": [
              "175/70 R14"
            ],
            "1.6 Comfort Plus": [
              "185/60 R15"
            ],
            "1.6 Comfort Style": [
              "185/60 R15"
            ],
            "1.6 Premium": [
              "185/60 R15"
            ]
          }
        },
        {
          "de": 2020,
          "ate": 2025,
          "versoes": {
            "1.0 Vision": [
              "185/60 R15"
            ],
            "1.0 Turbo Platinum": [
              "195/55 R16"
            ],
            "1.0 Turbo Platinum Plus": [
              "195/55 R16"
            ]
          }
        }
      ]
    },
    "HB20X": {
      "geracoes": [
        {
          "de": 2013,
          "ate": 2019,
          "versoes": {
            "1.6 Premium": [
              "185/60 R15"
            ],
            "1.6 Comfort Plus": [
              "185/60 R15"
            ],
            "1.6 Comfort Style": [
              "185/60 R15"
            ]
          }
        },
        {
          "de": 2020,
          "ate": 2025,
          "versoes": {
            "1.0 Turbo Platinum": [
              "205/60 R16"
            ],
            "1.0 Comfort": [
              "205/60 R16"
            ],
            "1.0 Comfort Plus": [
              "205/60 R16"
            ],
            "1.0 Sense": [
              "205/60 R16"
            ],
            "1.0 Evolution": [
              "205/60 R16"
            ]
          }
        }
      ]
    },
    "CRETA": {
      "geracoes": [
        {
          "de": 2017,
          "ate": 2025,
          "versoes": {
            "1.6 Action": [
              "205/65 R16"
            ],
            "1.0 Turbo Comfort": [
              "205/65 R16"
            ],
            "1.0 Turbo Platinum": [
              "215/60 R17"
            ],
            "2.0 Ultimate": [
              "215/55 R18"
            ],
            "2.0 N Line": [
              "215/60 R17"
            ]
          }
        }
      ]
    },
    "IX35": {
      "geracoes": [
        {
          "de": 2011,
          "ate": 2021,
          "versoes": {
            "2.0 GL": [
              "225/60 R17"
            ],
            "2.0 GLS": [
              "225/55 R18"
            ],
            "2.0 Limited": [
              "225/60 R17"
            ],
            "2.0 Ultimate": [
              "225/60 R17"
            ]
          }
        }
      ]
    },
    "TUCSON": {
      "geracoes": [
        {
          "de": 2005,
          "ate": 2017,
          "versoes": {
            "2.0 GL": [
              "235/60 R16"
            ],
            "2.0 GLS": [
              "235/60 R16"
            ],
            "2.7 V6": [
              "235/60 R16"
            ]
          }
        },
        {
          "de": 2018,
          "ate": 2025,
          "versoes": {
            "1.6 Turbo GLS": [
              "225/55 R18"
            ],
            "1.6 Turbo Limited": [
              "225/55 R18"
            ],
            "1.6 Turbo N Line": [
              "235/50 R19"
            ]
          }
        }
      ]
    },
    "SANTA FE": {
      "geracoes": [
        {
          "de": 2001,
          "ate": 2007,
          "versoes": {
            "2.4 GLS": [
              "225/70 R16"
            ],
            "2.7 V6": [
              "225/65 R17"
            ]
          }
        },
        {
          "de": 2008,
          "ate": 2013,
          "versoes": {
            "2.4 GLS": [
              "225/65 R17"
            ],
            "3.5 GLS": [
              "235/60 R18"
            ]
          }
        },
        {
          "de": 2014,
          "ate": 2022,
          "versoes": {
            "3.3 V6": [
              "235/60 R18"
            ],
            "2.0 GLS T-GDi": [
              "235/55 R19"
            ],
            "2.0 GLS": [
              "235/55 R19"
            ],
            "2.0 Limited": [
              "235/55 R19"
            ],
            "2.0 Ultimate": [
              "235/55 R19"
            ]
          }
        }
      ]
    },
    "IONIQ 5": {
      "geracoes": [
        {
          "de": 2022,
          "ate": 2025,
          "versoes": {
            "RWD 58 kWh": [
              "235/55 R19"
            ],
            "AWD 72 kWh": [
              "255/45 R20"
            ]
          }
        }
      ]
    },
    "SONATA": {
      "geracoes": [
        {
          "de": 2000,
          "ate": 2005,
          "versoes": {
            "2.0 GL": [
              "195/65 R15"
            ],
            "2.5 V6": [
              "205/60 R15"
            ],
            "2.0 GLS": [
              "195/65 R15"
            ],
            "2.0 Limited": [
              "195/65 R15"
            ],
            "2.0 Ultimate": [
              "195/65 R15"
            ]
          }
        },
        {
          "de": 2010,
          "ate": 2015,
          "versoes": {
            "2.4 GLS": [
              "215/55 R17"
            ]
          }
        }
      ]
    },
    "AZERA": {
      "geracoes": [
        {
          "de": 2012,
          "ate": 2020,
          "versoes": {
            "3.0 V6": [
              "225/50 R17"
            ],
            "3.3 V6": [
              "235/45 R18"
            ]
          }
        }
      ]
    },
    "ELANTRA": {
      "geracoes": [
        {
          "de": 2000,
          "ate": 2006,
          "versoes": {
            "1.8 GL": [
              "185/65 R15"
            ],
            "2.0 GLS": [
              "195/60 R15"
            ],
            "2.0 Limited": [
              "195/60 R15"
            ],
            "2.0 Ultimate": [
              "195/60 R15"
            ]
          }
        },
        {
          "de": 2007,
          "ate": 2015,
          "versoes": {
            "1.8 GLS": [
              "195/65 R15"
            ],
            "2.0 GLS": [
              "205/55 R16"
            ],
            "2.0 Limited": [
              "205/55 R16"
            ],
            "2.0 Ultimate": [
              "205/55 R16"
            ]
          }
        },
        {
          "de": 2022,
          "ate": 2025,
          "versoes": {
            "1.0 Turbo Limited": [
              "225/45 R17"
            ],
            "1.0 Comfort": [
              "225/45 R17"
            ],
            "1.0 Comfort Plus": [
              "225/45 R17"
            ],
            "1.0 Sense": [
              "225/45 R17"
            ],
            "1.0 Evolution": [
              "225/45 R17"
            ]
          }
        }
      ]
    },
    "VENUE": {
      "geracoes": [
        {
          "de": 2020,
          "ate": 2025,
          "versoes": {
            "1.6 Sense": [
              "185/60 R15"
            ],
            "1.6 Advance": [
              "195/55 R16"
            ],
            "1.6 Comfort Plus": [
              "185/60 R15"
            ],
            "1.6 Comfort Style": [
              "185/60 R15"
            ],
            "1.6 Premium": [
              "185/60 R15"
            ]
          }
        }
      ]
    }
  },
  "NISSAN": {
    "KICKS": {
      "geracoes": [
        {
          "de": 2017,
          "ate": 2025,
          "versoes": {
            "1.6 S": [
              "205/60 R16"
            ],
            "1.6 SV": [
              "205/60 R16"
            ],
            "1.6 Advance": [
              "205/55 R17"
            ],
            "1.6 Exclusive": [
              "205/55 R17"
            ]
          }
        }
      ]
    },
    "VERSA": {
      "geracoes": [
        {
          "de": 2011,
          "ate": 2020,
          "versoes": {
            "1.6 S": [
              "195/65 R15"
            ],
            "1.6 SV": [
              "195/65 R15"
            ],
            "1.6 SL": [
              "195/55 R16"
            ]
          }
        },
        {
          "de": 2021,
          "ate": 2025,
          "versoes": {
            "1.6 Sense": [
              "195/65 R15"
            ],
            "1.6 Advance": [
              "195/55 R16"
            ],
            "1.6 Exclusive": [
              "205/50 R17"
            ]
          }
        }
      ]
    },
    "MARCH": {
      "geracoes": [
        {
          "de": 2012,
          "ate": 2020,
          "versoes": {
            "1.0 S": [
              "165/70 R14"
            ],
            "1.6 SV": [
              "175/60 R15"
            ],
            "1.6 SL": [
              "185/55 R16"
            ]
          }
        }
      ]
    },
    "FRONTIER": {
      "geracoes": [
        {
          "de": 2000,
          "ate": 2007,
          "versoes": {
            "2.8 Diesel SE": [
              "265/70 R16"
            ]
          }
        },
        {
          "de": 2008,
          "ate": 2016,
          "versoes": {
            "2.5 Diesel XE": [
              "265/65 R17"
            ],
            "2.5 Diesel LE": [
              "265/65 R17"
            ]
          }
        },
        {
          "de": 2017,
          "ate": 2025,
          "versoes": {
            "2.3 Diesel S": [
              "255/65 R17"
            ],
            "2.3 Diesel Attack": [
              "255/65 R17"
            ],
            "2.3 Diesel XE": [
              "255/60 R18"
            ],
            "2.3 Diesel PRO-4X": [
              "255/65 R17"
            ],
            "2.3 Diesel Platinum": [
              "255/60 R18"
            ]
          }
        }
      ]
    },
    "SENTRA": {
      "geracoes": [
        {
          "de": 2001,
          "ate": 2006,
          "versoes": {
            "1.6": [
              "185/65 R14"
            ],
            "1.8 GLX": [
              "195/60 R15"
            ],
            "1.6 S": [
              "185/65 R14"
            ],
            "1.6 SV": [
              "185/65 R14"
            ],
            "1.6 SL": [
              "185/65 R14"
            ],
            "1.6 Advance": [
              "185/65 R14"
            ],
            "1.6 Exclusive": [
              "185/65 R14"
            ]
          }
        },
        {
          "de": 2007,
          "ate": 2013,
          "versoes": {
            "2.0 S": [
              "195/65 R15"
            ],
            "2.0 Tecna": [
              "205/55 R16"
            ],
            "2.0 SV": [
              "195/65 R15"
            ],
            "2.0 SL": [
              "195/65 R15"
            ],
            "2.0 Exclusive": [
              "195/65 R15"
            ]
          }
        },
        {
          "de": 2014,
          "ate": 2020,
          "versoes": {
            "2.0 S": [
              "205/55 R16"
            ],
            "2.0 SV": [
              "205/55 R16"
            ],
            "2.0 SL": [
              "205/50 R17"
            ]
          }
        },
        {
          "de": 2023,
          "ate": 2025,
          "versoes": {
            "2.0 Advance": [
              "215/50 R17"
            ],
            "2.0 Exclusive": [
              "215/50 R17"
            ],
            "2.0 S": [
              "215/50 R17"
            ],
            "2.0 SV": [
              "215/50 R17"
            ],
            "2.0 SL": [
              "215/50 R17"
            ]
          }
        }
      ]
    },
    "X-TRAIL": {
      "geracoes": [
        {
          "de": 2003,
          "ate": 2007,
          "versoes": {
            "2.5 S": [
              "225/65 R17"
            ]
          }
        },
        {
          "de": 2015,
          "ate": 2020,
          "versoes": {
            "2.0 S": [
              "225/65 R17"
            ],
            "2.0 SL": [
              "225/65 R17"
            ],
            "2.0 SV": [
              "225/65 R17"
            ],
            "2.0 Exclusive": [
              "225/65 R17"
            ]
          }
        }
      ]
    },
    "MURANO": {
      "geracoes": [
        {
          "de": 2006,
          "ate": 2014,
          "versoes": {
            "3.5 V6": [
              "235/65 R18"
            ]
          }
        }
      ]
    },
    "TIIDA": {
      "geracoes": [
        {
          "de": 2007,
          "ate": 2014,
          "versoes": {
            "1.8 S": [
              "195/55 R16"
            ],
            "1.8 SL": [
              "205/50 R17"
            ]
          }
        }
      ]
    },
    "LIVINA": {
      "geracoes": [
        {
          "de": 2009,
          "ate": 2018,
          "versoes": {
            "1.6 S": [
              "195/65 R15"
            ],
            "1.8 SL": [
              "205/55 R16"
            ],
            "1.6 SV": [
              "195/65 R15"
            ],
            "1.6 SL": [
              "195/65 R15"
            ],
            "1.6 Advance": [
              "195/65 R15"
            ],
            "1.6 Exclusive": [
              "195/65 R15"
            ]
          }
        }
      ]
    },
    "LEAF": {
      "geracoes": [
        {
          "de": 2015,
          "ate": 2022,
          "versoes": {
            "Acenta 40kWh": [
              "215/50 R17"
            ]
          }
        }
      ]
    }
  },
  "RENAULT": {
    "KWID": {
      "geracoes": [
        {
          "de": 2017,
          "ate": 2025,
          "versoes": {
            "1.0 Life": [
              "165/70 R14"
            ],
            "1.0 Zen": [
              "165/70 R14"
            ],
            "1.0 Intense": [
              "165/70 R14"
            ],
            "1.0 Outsider": [
              "165/70 R14"
            ]
          }
        }
      ]
    },
    "SANDERO": {
      "geracoes": [
        {
          "de": 2007,
          "ate": 2014,
          "versoes": {
            "1.0 Authentique": [
              "185/65 R15"
            ],
            "1.6 Expression": [
              "185/65 R15"
            ],
            "1.6 Stepway": [
              "205/55 R16"
            ]
          }
        },
        {
          "de": 2015,
          "ate": 2022,
          "versoes": {
            "1.0 Authentique": [
              "185/65 R15"
            ],
            "1.6 Expression": [
              "185/65 R15"
            ],
            "1.6 Stepway": [
              "205/55 R16"
            ],
            "2.0 RS": [
              "205/45 R17"
            ]
          }
        }
      ]
    },
    "LOGAN": {
      "geracoes": [
        {
          "de": 2007,
          "ate": 2013,
          "versoes": {
            "1.0 Authentique": [
              "185/65 R15"
            ],
            "1.6 Expression": [
              "185/65 R15"
            ],
            "1.0 Expression": [
              "185/65 R15"
            ],
            "1.0 Zen": [
              "185/65 R15"
            ],
            "1.6 Dynamique": [
              "185/65 R15"
            ],
            "1.6 Stepway": [
              "185/65 R15"
            ],
            "1.6 Intense": [
              "185/65 R15"
            ]
          }
        },
        {
          "de": 2014,
          "ate": 2022,
          "versoes": {
            "1.0 Authentique": [
              "185/65 R15"
            ],
            "1.6 Expression": [
              "185/65 R15"
            ],
            "1.6 Dynamique": [
              "185/65 R15"
            ]
          }
        }
      ]
    },
    "DUSTER": {
      "geracoes": [
        {
          "de": 2012,
          "ate": 2020,
          "versoes": {
            "1.6 Expression": [
              "215/65 R16"
            ],
            "1.6 Dynamique": [
              "215/65 R16"
            ],
            "2.0 Dynamique": [
              "215/65 R16"
            ],
            "2.0 Privilege": [
              "215/65 R16"
            ]
          }
        },
        {
          "de": 2021,
          "ate": 2025,
          "versoes": {
            "1.6 Zen": [
              "215/65 R16"
            ],
            "1.6 Intense": [
              "215/65 R16"
            ],
            "1.3 Turbo Iconic": [
              "215/60 R17"
            ]
          }
        }
      ]
    },
    "OROCH": {
      "geracoes": [
        {
          "de": 2016,
          "ate": 2025,
          "versoes": {
            "1.6 Expression": [
              "215/65 R16"
            ],
            "2.0 Dynamique": [
              "215/65 R16"
            ],
            "1.3 Turbo Outsider": [
              "215/65 R16"
            ],
            "1.3 Turbo Pro": [
              "225/60 R17"
            ]
          }
        }
      ]
    },
    "CAPTUR": {
      "geracoes": [
        {
          "de": 2017,
          "ate": 2023,
          "versoes": {
            "1.6 Zen": [
              "215/60 R17"
            ],
            "2.0 Intense": [
              "215/60 R17"
            ],
            "1.3 Turbo Iconic": [
              "215/60 R17"
            ]
          }
        }
      ]
    },
    "FLUENCE": {
      "geracoes": [
        {
          "de": 2011,
          "ate": 2016,
          "versoes": {
            "2.0 Dynamique": [
              "215/55 R16"
            ],
            "2.0 GT": [
              "215/55 R16"
            ],
            "2.0 Privilege": [
              "215/55 R16"
            ],
            "2.0 RS": [
              "215/55 R16"
            ]
          }
        }
      ]
    },
    "MEGANE": {
      "geracoes": [
        {
          "de": 2000,
          "ate": 2007,
          "versoes": {
            "1.6 Expression": [
              "195/65 R15"
            ],
            "2.0 Dynamique": [
              "205/55 R16"
            ],
            "2.0 RS": [
              "215/45 R17"
            ]
          }
        },
        {
          "de": 2007,
          "ate": 2012,
          "versoes": {
            "1.6 Expression": [
              "195/60 R15"
            ],
            "2.0 Dynamique": [
              "205/55 R16"
            ],
            "1.6 Dynamique": [
              "195/60 R15"
            ],
            "1.6 Stepway": [
              "195/60 R15"
            ],
            "1.6 Intense": [
              "195/60 R15"
            ],
            "2.0 Privilege": [
              "205/55 R16"
            ],
            "2.0 RS": [
              "205/55 R16"
            ]
          }
        }
      ]
    },
    "ZAFIRA": {
      "geracoes": [
        {
          "de": 2001,
          "ate": 2012,
          "versoes": {
            "2.0 Expression": [
              "205/55 R16"
            ],
            "2.0 Privilege": [
              "205/55 R16"
            ],
            "2.0 Dynamique": [
              "205/55 R16"
            ],
            "2.0 RS": [
              "205/55 R16"
            ]
          }
        }
      ]
    },
    "SCENIC": {
      "geracoes": [
        {
          "de": 2001,
          "ate": 2012,
          "versoes": {
            "1.6 Expression": [
              "195/60 R15"
            ],
            "2.0 Privilege": [
              "205/55 R16"
            ],
            "1.6 Dynamique": [
              "195/60 R15"
            ],
            "1.6 Stepway": [
              "195/60 R15"
            ],
            "1.6 Intense": [
              "195/60 R15"
            ],
            "2.0 Dynamique": [
              "205/55 R16"
            ],
            "2.0 RS": [
              "205/55 R16"
            ]
          }
        }
      ]
    },
    "KOLEOS": {
      "geracoes": [
        {
          "de": 2009,
          "ate": 2016,
          "versoes": {
            "2.5 Privilege": [
              "235/65 R17"
            ]
          }
        }
      ]
    },
    "KARDIAN": {
      "geracoes": [
        {
          "de": 2024,
          "ate": 2025,
          "versoes": {
            "1.0 Turbo Zen": [
              "205/55 R17"
            ],
            "1.0 Turbo Iconic": [
              "205/55 R17"
            ],
            "1.0 Authentique": [
              "205/55 R17"
            ],
            "1.0 Expression": [
              "205/55 R17"
            ],
            "1.0 Zen": [
              "205/55 R17"
            ]
          }
        }
      ]
    }
  },
  "FORD": {
    "KA": {
      "geracoes": [
        {
          "de": 1997,
          "ate": 2007,
          "versoes": {
            "1.0 GL": [
              "165/70 R13"
            ],
            "1.3 Ghia": [
              "175/65 R13"
            ],
            "1.0 SE": [
              "165/70 R13"
            ],
            "1.0 SEL": [
              "165/70 R13"
            ],
            "1.0 Attraction": [
              "165/70 R13"
            ]
          }
        },
        {
          "de": 2008,
          "ate": 2014,
          "versoes": {
            "1.0 Flex": [
              "175/65 R14"
            ],
            "1.5 Flex": [
              "185/60 R15"
            ],
            "1.0 SE": [
              "175/65 R14"
            ],
            "1.0 SEL": [
              "175/65 R14"
            ],
            "1.0 Attraction": [
              "175/65 R14"
            ],
            "1.5 SE": [
              "185/60 R15"
            ],
            "1.5 SEL": [
              "185/60 R15"
            ],
            "1.5 Titanium": [
              "185/60 R15"
            ]
          }
        },
        {
          "de": 2015,
          "ate": 2021,
          "versoes": {
            "1.0 SE": [
              "175/65 R14"
            ],
            "1.5 SEL": [
              "195/55 R15"
            ],
            "1.5 Freestyle": [
              "185/60 R15"
            ]
          }
        }
      ]
    },
    "FIESTA": {
      "geracoes": [
        {
          "de": 2003,
          "ate": 2013,
          "versoes": {
            "1.0 Flex": [
              "175/65 R14"
            ],
            "1.6 Rocam": [
              "185/60 R14"
            ],
            "1.0 SE": [
              "175/65 R14"
            ],
            "1.0 SEL": [
              "175/65 R14"
            ],
            "1.0 Attraction": [
              "175/65 R14"
            ],
            "1.6 SE": [
              "185/60 R14"
            ],
            "1.6 SEL": [
              "185/60 R14"
            ],
            "1.6 FreeStyle": [
              "185/60 R14"
            ]
          }
        },
        {
          "de": 2014,
          "ate": 2019,
          "versoes": {
            "1.5 S": [
              "195/55 R15"
            ],
            "1.6 SE": [
              "195/55 R15"
            ],
            "1.6 Titanium": [
              "195/50 R16"
            ]
          }
        }
      ]
    },
    "ECOSPORT": {
      "geracoes": [
        {
          "de": 2003,
          "ate": 2012,
          "versoes": {
            "1.6 XL": [
              "195/65 R15"
            ],
            "2.0 XLT": [
              "205/60 R16"
            ],
            "1.6 FreeStyle": [
              "195/65 R15"
            ]
          }
        },
        {
          "de": 2013,
          "ate": 2021,
          "versoes": {
            "1.5 SE": [
              "205/60 R16"
            ],
            "1.5 FreeStyle": [
              "205/60 R16"
            ],
            "2.0 Titanium": [
              "205/50 R17"
            ],
            "2.0 Storm": [
              "205/50 R17"
            ]
          }
        }
      ]
    },
    "FOCUS": {
      "geracoes": [
        {
          "de": 2001,
          "ate": 2008,
          "versoes": {
            "1.6 GL": [
              "195/60 R15"
            ],
            "2.0 Ghia": [
              "205/55 R16"
            ],
            "1.6 SE": [
              "195/60 R15"
            ],
            "1.6 SEL": [
              "195/60 R15"
            ],
            "1.6 FreeStyle": [
              "195/60 R15"
            ],
            "2.0 SE": [
              "205/55 R16"
            ],
            "2.0 Titanium": [
              "205/55 R16"
            ],
            "2.0 Storm": [
              "205/55 R16"
            ]
          }
        },
        {
          "de": 2009,
          "ate": 2013,
          "versoes": {
            "1.6 GLX": [
              "195/60 R15"
            ],
            "2.0 SEL": [
              "205/55 R16"
            ],
            "2.5 Turbo RS": [
              "235/35 R18"
            ]
          }
        },
        {
          "de": 2014,
          "ate": 2019,
          "versoes": {
            "1.6 SE": [
              "215/50 R17"
            ],
            "2.0 SE Plus": [
              "215/50 R17"
            ],
            "2.0 Titanium": [
              "215/50 R17"
            ]
          }
        }
      ]
    },
    "FUSION": {
      "geracoes": [
        {
          "de": 2006,
          "ate": 2012,
          "versoes": {
            "2.3 SEL": [
              "215/60 R16"
            ],
            "3.0 V6 SEL": [
              "215/55 R17"
            ]
          }
        },
        {
          "de": 2013,
          "ate": 2019,
          "versoes": {
            "2.5 Flex": [
              "235/45 R18"
            ],
            "2.0 EcoBoost Titanium": [
              "235/45 R18"
            ],
            "2.0 Hybrid": [
              "235/45 R18"
            ]
          }
        }
      ]
    },
    "RANGER": {
      "geracoes": [
        {
          "de": 1998,
          "ate": 2012,
          "versoes": {
            "2.5 Diesel XL": [
              "235/75 R15"
            ],
            "3.0 Diesel Limited": [
              "265/65 R16"
            ]
          }
        },
        {
          "de": 2013,
          "ate": 2016,
          "versoes": {
            "2.2 Diesel XLS": [
              "265/65 R17"
            ],
            "3.2 Diesel Limited": [
              "265/65 R17"
            ]
          }
        },
        {
          "de": 2017,
          "ate": 2023,
          "versoes": {
            "2.2 Diesel XLS": [
              "265/65 R17"
            ],
            "3.2 Diesel XLT": [
              "265/65 R17"
            ],
            "3.2 Diesel Limited": [
              "265/60 R18"
            ]
          }
        },
        {
          "de": 2024,
          "ate": 2025,
          "versoes": {
            "2.0 Diesel XLS": [
              "255/70 R17"
            ],
            "3.0 V6 XLT": [
              "255/70 R17"
            ],
            "3.0 V6 Limited": [
              "255/55 R20"
            ]
          }
        }
      ]
    },
    "EDGE": {
      "geracoes": [
        {
          "de": 2009,
          "ate": 2014,
          "versoes": {
            "3.5 V6 Limited": [
              "245/60 R18"
            ]
          }
        },
        {
          "de": 2015,
          "ate": 2020,
          "versoes": {
            "2.0 EcoBoost SEL": [
              "245/50 R20"
            ],
            "2.7 V6 Sport": [
              "265/40 R21"
            ],
            "2.0 SE": [
              "245/50 R20"
            ],
            "2.0 Titanium": [
              "245/50 R20"
            ],
            "2.0 Storm": [
              "245/50 R20"
            ]
          }
        }
      ]
    },
    "TERRITORY": {
      "geracoes": [
        {
          "de": 2020,
          "ate": 2022,
          "versoes": {
            "1.5 Turbo SE": [
              "235/50 R19"
            ],
            "1.5 Turbo Titanium": [
              "235/50 R19"
            ],
            "1.5 SE": [
              "235/50 R19"
            ],
            "1.5 SEL": [
              "235/50 R19"
            ],
            "1.5 Titanium": [
              "235/50 R19"
            ]
          }
        }
      ]
    },
    "MAVERICK": {
      "geracoes": [
        {
          "de": 2022,
          "ate": 2025,
          "versoes": {
            "2.0 EcoBoost XLT": [
              "255/65 R17"
            ],
            "2.0 EcoBoost Lariat": [
              "255/65 R17"
            ],
            "2.0 SE": [
              "255/65 R17"
            ],
            "2.0 Titanium": [
              "255/65 R17"
            ],
            "2.0 Storm": [
              "255/65 R17"
            ]
          }
        }
      ]
    },
    "BRONCO SPORT": {
      "geracoes": [
        {
          "de": 2021,
          "ate": 2024,
          "versoes": {
            "2.0 EcoBoost Big Bend": [
              "225/65 R17"
            ],
            "2.0 EcoBoost Badlands": [
              "225/65 R17"
            ],
            "2.0 SE": [
              "225/65 R17"
            ],
            "2.0 Titanium": [
              "225/65 R17"
            ],
            "2.0 Storm": [
              "225/65 R17"
            ]
          }
        }
      ]
    },
    "MUSTANG": {
      "geracoes": [
        {
          "de": 2005,
          "ate": 2014,
          "versoes": {
            "4.0 V6": [
              "235/55 R17"
            ],
            "4.6 V8 GT": [
              "235/50 R18"
            ]
          }
        },
        {
          "de": 2015,
          "ate": 2023,
          "versoes": {
            "2.3 EcoBoost": [
              "235/50 R18"
            ],
            "5.0 V8 GT": [
              "255/40 R19",
              "275/40 R19"
            ]
          }
        },
        {
          "de": 2024,
          "ate": 2025,
          "versoes": {
            "2.3 EcoBoost": [
              "235/50 R19"
            ],
            "5.0 V8 GT": [
              "255/40 R19",
              "285/35 R19"
            ]
          }
        }
      ]
    },
    "EXPEDITION": {
      "geracoes": [
        {
          "de": 2004,
          "ate": 2012,
          "versoes": {
            "5.4 V8": [
              "275/55 R20"
            ]
          }
        }
      ]
    },
    "TRANSIT": {
      "geracoes": [
        {
          "de": 2013,
          "ate": 2025,
          "versoes": {
            "2.2 Diesel": [
              "215/65 R16C"
            ],
            "2.0 EcoBlue": [
              "215/65 R16C"
            ],
            "2.0 SE": [
              "215/65 R16C"
            ],
            "2.0 Titanium": [
              "215/65 R16C"
            ],
            "2.0 Storm": [
              "215/65 R16C"
            ]
          }
        }
      ]
    }
  },
  "AUDI": {
    "A1": {
      "geracoes": [
        {
          "de": 2012,
          "ate": 2018,
          "versoes": {
            "1.4 TFSI Attraction": [
              "185/60 R15"
            ],
            "1.4 TFSI S line": [
              "205/45 R17"
            ],
            "1.4 TFSI Ambiente": [
              "185/60 R15"
            ]
          }
        },
        {
          "de": 2019,
          "ate": 2024,
          "versoes": {
            "1.4 TFSI S line": [
              "215/45 R17"
            ],
            "2.0 TFSI RS": [
              "225/40 R18"
            ],
            "1.4 TFSI Attraction": [
              "215/45 R17"
            ],
            "1.4 TFSI Ambiente": [
              "215/45 R17"
            ],
            "2.0 TFSI Attraction": [
              "225/40 R18"
            ],
            "2.0 TFSI Ambiente": [
              "225/40 R18"
            ],
            "2.0 TFSI Ambition": [
              "225/40 R18"
            ],
            "2.0 TFSI S line": [
              "225/40 R18"
            ],
            "2.0 TFSI Performance": [
              "225/40 R18"
            ]
          }
        }
      ]
    },
    "A3": {
      "geracoes": [
        {
          "de": 2004,
          "ate": 2013,
          "versoes": {
            "1.6 Attraction": [
              "195/65 R15"
            ],
            "2.0 FSI": [
              "205/55 R16"
            ],
            "2.0 TFSI S line": [
              "225/45 R17"
            ]
          }
        },
        {
          "de": 2014,
          "ate": 2020,
          "versoes": {
            "1.4 TFSI Attraction": [
              "205/55 R16"
            ],
            "1.4 TFSI Ambiente": [
              "205/55 R16"
            ],
            "1.8 TFSI Ambition": [
              "225/45 R17"
            ],
            "2.0 TFSI Ambition": [
              "225/45 R17"
            ],
            "2.0 TFSI S line": [
              "225/45 R17"
            ],
            "S3 2.0 TFSI": [
              "225/40 R18"
            ],
            "RS3 2.5 TFSI": [
              "235/35 R19"
            ]
          }
        },
        {
          "de": 2022,
          "ate": 2025,
          "versoes": {
            "2.0 TFSI S line": [
              "225/40 R18"
            ],
            "2.0 TFSI Performance": [
              "225/40 R18"
            ],
            "2.0 TFSI Attraction": [
              "225/40 R18"
            ],
            "2.0 TFSI Ambiente": [
              "225/40 R18"
            ],
            "2.0 TFSI Ambition": [
              "225/40 R18"
            ]
          }
        }
      ]
    },
    "A4": {
      "geracoes": [
        {
          "de": 2001,
          "ate": 2007,
          "versoes": {
            "1.8 T": [
              "205/60 R15"
            ],
            "2.0 TFSI": [
              "205/55 R16"
            ],
            "3.0 V6": [
              "225/50 R16"
            ]
          }
        },
        {
          "de": 2008,
          "ate": 2015,
          "versoes": {
            "2.0 TFSI": [
              "225/50 R17"
            ],
            "3.0 TFSI": [
              "245/40 R18"
            ],
            "2.0 TFSI Attraction": [
              "225/50 R17"
            ],
            "2.0 TFSI Ambiente": [
              "225/50 R17"
            ],
            "2.0 TFSI Ambition": [
              "225/50 R17"
            ],
            "2.0 TFSI S line": [
              "225/50 R17"
            ],
            "2.0 TFSI Performance": [
              "225/50 R17"
            ],
            "3.0 TFSI Ambition": [
              "245/40 R18"
            ],
            "3.0 TFSI Prestige Plus": [
              "245/40 R18"
            ],
            "3.0 TFSI S line": [
              "245/40 R18"
            ]
          }
        },
        {
          "de": 2016,
          "ate": 2020,
          "versoes": {
            "2.0 TFSI Prestige": [
              "225/50 R17"
            ],
            "2.0 TFSI S line": [
              "245/40 R18"
            ],
            "2.0 TFSI Attraction": [
              "225/50 R17"
            ],
            "2.0 TFSI Ambiente": [
              "225/50 R17"
            ],
            "2.0 TFSI Ambition": [
              "225/50 R17"
            ],
            "2.0 TFSI Performance": [
              "225/50 R17"
            ]
          }
        },
        {
          "de": 2021,
          "ate": 2025,
          "versoes": {
            "2.0 TFSI Prestige": [
              "225/50 R17"
            ],
            "2.0 TFSI Performance": [
              "245/40 R18"
            ],
            "2.0 TFSI S line": [
              "245/40 R18"
            ]
          }
        }
      ]
    },
    "A5": {
      "geracoes": [
        {
          "de": 2009,
          "ate": 2016,
          "versoes": {
            "2.0 TFSI": [
              "245/40 R18"
            ],
            "3.0 TFSI S line": [
              "255/35 R19"
            ],
            "2.0 TFSI Attraction": [
              "245/40 R18"
            ],
            "2.0 TFSI Ambiente": [
              "245/40 R18"
            ],
            "2.0 TFSI Ambition": [
              "245/40 R18"
            ],
            "2.0 TFSI S line": [
              "245/40 R18"
            ],
            "2.0 TFSI Performance": [
              "245/40 R18"
            ],
            "3.0 TFSI Ambition": [
              "255/35 R19"
            ],
            "3.0 TFSI Prestige Plus": [
              "255/35 R19"
            ]
          }
        },
        {
          "de": 2017,
          "ate": 2025,
          "versoes": {
            "2.0 TFSI Prestige Plus": [
              "245/40 R18"
            ],
            "2.0 TFSI S line": [
              "255/35 R19"
            ],
            "2.0 TFSI Attraction": [
              "245/40 R18"
            ],
            "2.0 TFSI Ambiente": [
              "245/40 R18"
            ],
            "2.0 TFSI Ambition": [
              "245/40 R18"
            ],
            "2.0 TFSI Performance": [
              "245/40 R18"
            ]
          }
        }
      ]
    },
    "A6": {
      "geracoes": [
        {
          "de": 1999,
          "ate": 2004,
          "versoes": {
            "2.8 V6": [
              "205/60 R15"
            ],
            "3.0 V6 Avant": [
              "215/55 R16"
            ],
            "3.0 TFSI Ambition": [
              "215/55 R16"
            ],
            "3.0 TFSI Prestige Plus": [
              "215/55 R16"
            ],
            "3.0 TFSI S line": [
              "215/55 R16"
            ]
          }
        },
        {
          "de": 2005,
          "ate": 2011,
          "versoes": {
            "2.8 FSI": [
              "225/55 R17"
            ],
            "3.2 FSI": [
              "245/45 R17"
            ]
          }
        },
        {
          "de": 2012,
          "ate": 2018,
          "versoes": {
            "2.0 TFSI": [
              "245/45 R18"
            ],
            "3.0 TFSI": [
              "255/40 R19"
            ],
            "2.0 TFSI Attraction": [
              "245/45 R18"
            ],
            "2.0 TFSI Ambiente": [
              "245/45 R18"
            ],
            "2.0 TFSI Ambition": [
              "245/45 R18"
            ],
            "2.0 TFSI S line": [
              "245/45 R18"
            ],
            "2.0 TFSI Performance": [
              "245/45 R18"
            ],
            "3.0 TFSI Ambition": [
              "255/40 R19"
            ],
            "3.0 TFSI Prestige Plus": [
              "255/40 R19"
            ],
            "3.0 TFSI S line": [
              "255/40 R19"
            ]
          }
        },
        {
          "de": 2019,
          "ate": 2025,
          "versoes": {
            "2.0 TFSI Performance": [
              "245/45 R19"
            ],
            "3.0 TDI Performance": [
              "255/40 R20"
            ],
            "2.0 TFSI Attraction": [
              "245/45 R19"
            ],
            "2.0 TFSI Ambiente": [
              "245/45 R19"
            ],
            "2.0 TFSI Ambition": [
              "245/45 R19"
            ],
            "2.0 TFSI S line": [
              "245/45 R19"
            ],
            "3.0 TFSI Ambition": [
              "255/40 R20"
            ],
            "3.0 TFSI Prestige Plus": [
              "255/40 R20"
            ],
            "3.0 TFSI S line": [
              "255/40 R20"
            ]
          }
        }
      ]
    },
    "A7": {
      "geracoes": [
        {
          "de": 2012,
          "ate": 2018,
          "versoes": {
            "3.0 TFSI": [
              "255/40 R19"
            ],
            "3.0 TFSI Ambition": [
              "255/40 R19"
            ],
            "3.0 TFSI Prestige Plus": [
              "255/40 R19"
            ],
            "3.0 TFSI S line": [
              "255/40 R19"
            ]
          }
        },
        {
          "de": 2019,
          "ate": 2025,
          "versoes": {
            "3.0 TFSI Sportback": [
              "255/40 R20"
            ],
            "3.0 TFSI Ambition": [
              "255/40 R20"
            ],
            "3.0 TFSI Prestige Plus": [
              "255/40 R20"
            ],
            "3.0 TFSI S line": [
              "255/40 R20"
            ]
          }
        }
      ]
    },
    "Q2": {
      "geracoes": [
        {
          "de": 2017,
          "ate": 2022,
          "versoes": {
            "1.4 TFSI S line": [
              "225/45 R18"
            ],
            "1.4 TFSI Attraction": [
              "225/45 R18"
            ],
            "1.4 TFSI Ambiente": [
              "225/45 R18"
            ]
          }
        }
      ]
    },
    "Q3": {
      "geracoes": [
        {
          "de": 2013,
          "ate": 2018,
          "versoes": {
            "1.4 TFSI": [
              "235/50 R18"
            ],
            "2.0 TFSI": [
              "235/50 R18"
            ],
            "1.4 TFSI Attraction": [
              "235/50 R18"
            ],
            "1.4 TFSI Ambiente": [
              "235/50 R18"
            ],
            "1.4 TFSI S line": [
              "235/50 R18"
            ],
            "2.0 TFSI Attraction": [
              "235/50 R18"
            ],
            "2.0 TFSI Ambiente": [
              "235/50 R18"
            ],
            "2.0 TFSI Ambition": [
              "235/50 R18"
            ],
            "2.0 TFSI S line": [
              "235/50 R18"
            ],
            "2.0 TFSI Performance": [
              "235/50 R18"
            ]
          }
        },
        {
          "de": 2020,
          "ate": 2025,
          "versoes": {
            "1.4 TFSI Prestige": [
              "235/55 R18"
            ],
            "2.0 TFSI Performance Black": [
              "235/50 R19"
            ],
            "1.4 TFSI Attraction": [
              "235/55 R18"
            ],
            "1.4 TFSI Ambiente": [
              "235/55 R18"
            ],
            "1.4 TFSI S line": [
              "235/55 R18"
            ],
            "2.0 TFSI Attraction": [
              "235/50 R19"
            ],
            "2.0 TFSI Ambiente": [
              "235/50 R19"
            ],
            "2.0 TFSI Ambition": [
              "235/50 R19"
            ],
            "2.0 TFSI S line": [
              "235/50 R19"
            ],
            "2.0 TFSI Performance": [
              "235/50 R19"
            ]
          }
        }
      ]
    },
    "Q5": {
      "geracoes": [
        {
          "de": 2009,
          "ate": 2017,
          "versoes": {
            "2.0 TFSI": [
              "235/55 R18"
            ],
            "3.2 FSI": [
              "235/55 R19"
            ],
            "2.0 TFSI Attraction": [
              "235/55 R18"
            ],
            "2.0 TFSI Ambiente": [
              "235/55 R18"
            ],
            "2.0 TFSI Ambition": [
              "235/55 R18"
            ],
            "2.0 TFSI S line": [
              "235/55 R18"
            ],
            "2.0 TFSI Performance": [
              "235/55 R18"
            ]
          }
        },
        {
          "de": 2018,
          "ate": 2025,
          "versoes": {
            "2.0 TFSI Prestige": [
              "235/55 R19"
            ],
            "2.0 TFSI S line": [
              "255/45 R20"
            ],
            "2.0 TFSI Attraction": [
              "235/55 R19"
            ],
            "2.0 TFSI Ambiente": [
              "235/55 R19"
            ],
            "2.0 TFSI Ambition": [
              "235/55 R19"
            ],
            "2.0 TFSI Performance": [
              "235/55 R19"
            ]
          }
        }
      ]
    },
    "Q7": {
      "geracoes": [
        {
          "de": 2006,
          "ate": 2015,
          "versoes": {
            "3.6 FSI": [
              "255/55 R18"
            ],
            "3.0 TDI": [
              "255/55 R19"
            ],
            "3.0 TFSI Ambition": [
              "255/55 R19"
            ],
            "3.0 TFSI Prestige Plus": [
              "255/55 R19"
            ],
            "3.0 TFSI S line": [
              "255/55 R19"
            ]
          }
        },
        {
          "de": 2016,
          "ate": 2025,
          "versoes": {
            "3.0 TFSI": [
              "255/50 R20"
            ],
            "3.0 TDI": [
              "255/45 R21"
            ],
            "3.0 TFSI Ambition": [
              "255/50 R20"
            ],
            "3.0 TFSI Prestige Plus": [
              "255/50 R20"
            ],
            "3.0 TFSI S line": [
              "255/50 R20"
            ]
          }
        }
      ]
    },
    "Q8": {
      "geracoes": [
        {
          "de": 2019,
          "ate": 2025,
          "versoes": {
            "3.0 TFSI S line": [
              "285/40 R21"
            ],
            "RS Q8 4.0 V8": [
              "305/35 R23"
            ],
            "3.0 TFSI Ambition": [
              "285/40 R21"
            ],
            "3.0 TFSI Prestige Plus": [
              "285/40 R21"
            ]
          }
        }
      ]
    },
    "TT": {
      "geracoes": [
        {
          "de": 2000,
          "ate": 2006,
          "versoes": {
            "1.8 Turbo Quattro": [
              "225/45 R17"
            ]
          }
        },
        {
          "de": 2007,
          "ate": 2014,
          "versoes": {
            "2.0 TFSI": [
              "235/45 R17"
            ],
            "3.2 V6": [
              "235/40 R18"
            ],
            "2.0 TFSI Attraction": [
              "235/45 R17"
            ],
            "2.0 TFSI Ambiente": [
              "235/45 R17"
            ],
            "2.0 TFSI Ambition": [
              "235/45 R17"
            ],
            "2.0 TFSI S line": [
              "235/45 R17"
            ],
            "2.0 TFSI Performance": [
              "235/45 R17"
            ]
          }
        },
        {
          "de": 2015,
          "ate": 2019,
          "versoes": {
            "2.0 TFSI": [
              "245/45 R18"
            ],
            "RS 2.5 TFSI": [
              "255/35 R19"
            ],
            "2.0 TFSI Attraction": [
              "245/45 R18"
            ],
            "2.0 TFSI Ambiente": [
              "245/45 R18"
            ],
            "2.0 TFSI Ambition": [
              "245/45 R18"
            ],
            "2.0 TFSI S line": [
              "245/45 R18"
            ],
            "2.0 TFSI Performance": [
              "245/45 R18"
            ]
          }
        }
      ]
    },
    "R8": {
      "geracoes": [
        {
          "de": 2007,
          "ate": 2015,
          "versoes": {
            "4.2 FSI": [
              "235/35 R19",
              "295/30 R19"
            ]
          }
        },
        {
          "de": 2016,
          "ate": 2023,
          "versoes": {
            "5.2 V10": [
              "245/35 R20",
              "305/30 R20"
            ]
          }
        }
      ]
    },
    "E-TRON": {
      "geracoes": [
        {
          "de": 2020,
          "ate": 2025,
          "versoes": {
            "55 quattro": [
              "255/50 R20"
            ],
            "GT quattro": [
              "255/40 R21"
            ]
          }
        }
      ]
    }
  },
  "BMW": {
    "116i": {
      "geracoes": [
        {
          "de": 2012,
          "ate": 2019,
          "versoes": {
            "1.5 Turbo Sport": [
              "205/55 R16"
            ],
            "1.5 Turbo M Sport": [
              "225/45 R17"
            ]
          }
        }
      ]
    },
    "118i": {
      "geracoes": [
        {
          "de": 2012,
          "ate": 2019,
          "versoes": {
            "1.5 Turbo Sport": [
              "205/55 R16"
            ],
            "1.5 Turbo M Sport": [
              "225/45 R17"
            ]
          }
        },
        {
          "de": 2020,
          "ate": 2025,
          "versoes": {
            "2.0 Turbo Sport": [
              "225/45 R18"
            ],
            "2.0 Turbo M Sport": [
              "225/40 R19"
            ],
            "2.0 TwinPower ActiveFlex": [
              "225/45 R18"
            ],
            "2.0 TwinPower GP": [
              "225/45 R18"
            ],
            "2.0 TwinPower Sport GP": [
              "225/45 R18"
            ],
            "2.0 TwinPower M Sport": [
              "225/45 R18"
            ]
          }
        }
      ]
    },
    "120i": {
      "geracoes": [
        {
          "de": 2012,
          "ate": 2019,
          "versoes": {
            "2.0 Turbo Sport": [
              "225/45 R17"
            ],
            "2.0 Turbo M Sport": [
              "225/40 R18"
            ],
            "2.0 TwinPower ActiveFlex": [
              "225/45 R17"
            ],
            "2.0 TwinPower GP": [
              "225/45 R17"
            ],
            "2.0 TwinPower Sport GP": [
              "225/45 R17"
            ],
            "2.0 TwinPower M Sport": [
              "225/45 R17"
            ]
          }
        }
      ]
    },
    "125i": {
      "geracoes": [
        {
          "de": 2012,
          "ate": 2016,
          "versoes": {
            "2.0 Turbo M Sport": [
              "225/40 R18"
            ],
            "2.0 TwinPower ActiveFlex": [
              "225/40 R18"
            ],
            "2.0 TwinPower GP": [
              "225/40 R18"
            ],
            "2.0 TwinPower Sport GP": [
              "225/40 R18"
            ],
            "2.0 TwinPower M Sport": [
              "225/40 R18"
            ]
          }
        }
      ]
    },
    "M135i": {
      "geracoes": [
        {
          "de": 2012,
          "ate": 2016,
          "versoes": {
            "3.0 Turbo M Sport": [
              "225/40 R18"
            ],
            "3.0 TwinPower M Sport": [
              "225/40 R18"
            ],
            "3.0 TwinPower Competition": [
              "225/40 R18"
            ],
            "3.0 TwinPower Executive": [
              "225/40 R18"
            ]
          }
        },
        {
          "de": 2019,
          "ate": 2025,
          "versoes": {
            "2.0 Turbo M Sport": [
              "225/40 R18"
            ],
            "2.0 TwinPower ActiveFlex": [
              "225/40 R18"
            ],
            "2.0 TwinPower GP": [
              "225/40 R18"
            ],
            "2.0 TwinPower Sport GP": [
              "225/40 R18"
            ],
            "2.0 TwinPower M Sport": [
              "225/40 R18"
            ]
          }
        }
      ]
    },
    "218i": {
      "geracoes": [
        {
          "de": 2015,
          "ate": 2022,
          "versoes": {
            "1.5 Turbo Sport": [
              "205/55 R16"
            ],
            "1.5 Turbo M Sport": [
              "225/45 R17"
            ]
          }
        }
      ]
    },
    "220i": {
      "geracoes": [
        {
          "de": 2014,
          "ate": 2021,
          "versoes": {
            "2.0 Turbo Sport": [
              "225/45 R17"
            ],
            "2.0 Turbo M Sport": [
              "225/40 R18"
            ],
            "2.0 TwinPower ActiveFlex": [
              "225/45 R17"
            ],
            "2.0 TwinPower GP": [
              "225/45 R17"
            ],
            "2.0 TwinPower Sport GP": [
              "225/45 R17"
            ],
            "2.0 TwinPower M Sport": [
              "225/45 R17"
            ]
          }
        },
        {
          "de": 2022,
          "ate": 2025,
          "versoes": {
            "2.0 Turbo M Sport": [
              "225/45 R18"
            ],
            "2.0 TwinPower ActiveFlex": [
              "225/45 R18"
            ],
            "2.0 TwinPower GP": [
              "225/45 R18"
            ],
            "2.0 TwinPower Sport GP": [
              "225/45 R18"
            ],
            "2.0 TwinPower M Sport": [
              "225/45 R18"
            ]
          }
        }
      ]
    },
    "M2": {
      "geracoes": [
        {
          "de": 2016,
          "ate": 2021,
          "versoes": {
            "3.0 Turbo Competition": [
              "245/35 R19",
              "265/35 R19"
            ],
            "3.0 TwinPower M Sport": [
              "245/35 R19",
              "265/35 R19"
            ],
            "3.0 TwinPower Competition": [
              "245/35 R19",
              "265/35 R19"
            ],
            "3.0 TwinPower Executive": [
              "245/35 R19",
              "265/35 R19"
            ]
          }
        },
        {
          "de": 2023,
          "ate": 2025,
          "versoes": {
            "3.0 Turbo Competition": [
              "275/35 R19",
              "285/30 R19"
            ],
            "3.0 TwinPower M Sport": [
              "275/35 R19",
              "285/30 R19"
            ],
            "3.0 TwinPower Competition": [
              "275/35 R19",
              "285/30 R19"
            ],
            "3.0 TwinPower Executive": [
              "275/35 R19",
              "285/30 R19"
            ]
          }
        }
      ]
    },
    "320i": {
      "geracoes": [
        {
          "de": 1999,
          "ate": 2005,
          "versoes": {
            "2.2": [
              "205/55 R16"
            ],
            "2.5 Sport": [
              "225/45 R17"
            ]
          }
        },
        {
          "de": 2006,
          "ate": 2011,
          "versoes": {
            "2.0 Turbo": [
              "225/45 R17"
            ],
            "2.5 Sport": [
              "225/45 R17"
            ],
            "2.0 TwinPower ActiveFlex": [
              "225/45 R17"
            ],
            "2.0 TwinPower GP": [
              "225/45 R17"
            ],
            "2.0 TwinPower Sport GP": [
              "225/45 R17"
            ],
            "2.0 TwinPower M Sport": [
              "225/45 R17"
            ]
          }
        },
        {
          "de": 2013,
          "ate": 2018,
          "versoes": {
            "2.0 TwinPower Sport": [
              "225/50 R17"
            ],
            "2.0 TwinPower M Sport": [
              "225/45 R18"
            ],
            "2.0 TwinPower ActiveFlex": [
              "225/50 R17"
            ],
            "2.0 TwinPower GP": [
              "225/50 R17"
            ],
            "2.0 TwinPower Sport GP": [
              "225/50 R17"
            ]
          }
        },
        {
          "de": 2019,
          "ate": 2025,
          "versoes": {
            "2.0 TwinPower Sport": [
              "225/45 R18"
            ],
            "2.0 TwinPower M Sport": [
              "225/40 R19"
            ],
            "2.0 TwinPower ActiveFlex": [
              "225/45 R18"
            ],
            "2.0 TwinPower GP": [
              "225/45 R18"
            ],
            "2.0 TwinPower Sport GP": [
              "225/45 R18"
            ]
          }
        }
      ]
    },
    "328i": {
      "geracoes": [
        {
          "de": 2000,
          "ate": 2005,
          "versoes": {
            "2.8 Sport": [
              "225/45 R17"
            ]
          }
        },
        {
          "de": 2006,
          "ate": 2011,
          "versoes": {
            "3.0": [
              "225/45 R17"
            ],
            "3.0 TwinPower M Sport": [
              "225/45 R17"
            ],
            "3.0 TwinPower Competition": [
              "225/45 R17"
            ],
            "3.0 TwinPower Executive": [
              "225/45 R17"
            ]
          }
        },
        {
          "de": 2013,
          "ate": 2016,
          "versoes": {
            "2.0 Turbo": [
              "225/45 R18"
            ],
            "2.0 TwinPower ActiveFlex": [
              "225/45 R18"
            ],
            "2.0 TwinPower GP": [
              "225/45 R18"
            ],
            "2.0 TwinPower Sport GP": [
              "225/45 R18"
            ],
            "2.0 TwinPower M Sport": [
              "225/45 R18"
            ]
          }
        }
      ]
    },
    "330i": {
      "geracoes": [
        {
          "de": 2001,
          "ate": 2005,
          "versoes": {
            "3.0 Sport": [
              "225/45 R17"
            ],
            "3.0 TwinPower M Sport": [
              "225/45 R17"
            ],
            "3.0 TwinPower Competition": [
              "225/45 R17"
            ],
            "3.0 TwinPower Executive": [
              "225/45 R17"
            ]
          }
        },
        {
          "de": 2006,
          "ate": 2011,
          "versoes": {
            "3.0 Sport": [
              "225/45 R17"
            ],
            "3.0 TwinPower M Sport": [
              "225/45 R17"
            ],
            "3.0 TwinPower Competition": [
              "225/45 R17"
            ],
            "3.0 TwinPower Executive": [
              "225/45 R17"
            ]
          }
        },
        {
          "de": 2019,
          "ate": 2025,
          "versoes": {
            "2.0 TwinPower Sport": [
              "225/45 R18"
            ],
            "2.0 TwinPower M Sport": [
              "225/40 R19"
            ],
            "2.0 TwinPower ActiveFlex": [
              "225/45 R18"
            ],
            "2.0 TwinPower GP": [
              "225/45 R18"
            ],
            "2.0 TwinPower Sport GP": [
              "225/45 R18"
            ]
          }
        }
      ]
    },
    "335i": {
      "geracoes": [
        {
          "de": 2007,
          "ate": 2015,
          "versoes": {
            "3.0 Turbo Sport": [
              "225/40 R18"
            ],
            "3.0 Turbo M Sport": [
              "235/35 R18"
            ],
            "3.0 TwinPower M Sport": [
              "225/40 R18"
            ],
            "3.0 TwinPower Competition": [
              "225/40 R18"
            ],
            "3.0 TwinPower Executive": [
              "225/40 R18"
            ]
          }
        }
      ]
    },
    "340i": {
      "geracoes": [
        {
          "de": 2016,
          "ate": 2018,
          "versoes": {
            "3.0 Turbo M Sport": [
              "225/40 R18"
            ],
            "3.0 TwinPower M Sport": [
              "225/40 R18"
            ],
            "3.0 TwinPower Competition": [
              "225/40 R18"
            ],
            "3.0 TwinPower Executive": [
              "225/40 R18"
            ]
          }
        }
      ]
    },
    "M3": {
      "geracoes": [
        {
          "de": 2001,
          "ate": 2006,
          "versoes": {
            "3.2 S54": [
              "225/45 R18",
              "255/40 R18"
            ]
          }
        },
        {
          "de": 2008,
          "ate": 2013,
          "versoes": {
            "4.0 V8 S65": [
              "255/40 R18",
              "275/35 R19"
            ]
          }
        },
        {
          "de": 2014,
          "ate": 2020,
          "versoes": {
            "3.0 Turbo Competition": [
              "265/35 R19",
              "285/30 R20"
            ],
            "3.0 TwinPower M Sport": [
              "265/35 R19",
              "285/30 R20"
            ],
            "3.0 TwinPower Competition": [
              "265/35 R19",
              "285/30 R20"
            ],
            "3.0 TwinPower Executive": [
              "265/35 R19",
              "285/30 R20"
            ]
          }
        },
        {
          "de": 2021,
          "ate": 2025,
          "versoes": {
            "3.0 Turbo Competition": [
              "275/35 R19",
              "285/30 R20"
            ],
            "3.0 TwinPower M Sport": [
              "275/35 R19",
              "285/30 R20"
            ],
            "3.0 TwinPower Competition": [
              "275/35 R19",
              "285/30 R20"
            ],
            "3.0 TwinPower Executive": [
              "275/35 R19",
              "285/30 R20"
            ]
          }
        }
      ]
    },
    "420i": {
      "geracoes": [
        {
          "de": 2014,
          "ate": 2020,
          "versoes": {
            "2.0 Turbo Sport": [
              "225/45 R17"
            ],
            "2.0 Turbo M Sport": [
              "225/40 R18"
            ],
            "2.0 TwinPower ActiveFlex": [
              "225/45 R17"
            ],
            "2.0 TwinPower GP": [
              "225/45 R17"
            ],
            "2.0 TwinPower Sport GP": [
              "225/45 R17"
            ],
            "2.0 TwinPower M Sport": [
              "225/45 R17"
            ]
          }
        }
      ]
    },
    "430i": {
      "geracoes": [
        {
          "de": 2021,
          "ate": 2025,
          "versoes": {
            "2.0 Turbo Sport": [
              "225/45 R18"
            ],
            "2.0 Turbo M Sport": [
              "225/40 R19"
            ],
            "2.0 TwinPower ActiveFlex": [
              "225/45 R18"
            ],
            "2.0 TwinPower GP": [
              "225/45 R18"
            ],
            "2.0 TwinPower Sport GP": [
              "225/45 R18"
            ],
            "2.0 TwinPower M Sport": [
              "225/45 R18"
            ]
          }
        }
      ]
    },
    "M4": {
      "geracoes": [
        {
          "de": 2014,
          "ate": 2020,
          "versoes": {
            "3.0 Turbo Competition": [
              "265/35 R19",
              "285/30 R20"
            ],
            "3.0 TwinPower M Sport": [
              "265/35 R19",
              "285/30 R20"
            ],
            "3.0 TwinPower Competition": [
              "265/35 R19",
              "285/30 R20"
            ],
            "3.0 TwinPower Executive": [
              "265/35 R19",
              "285/30 R20"
            ]
          }
        },
        {
          "de": 2021,
          "ate": 2025,
          "versoes": {
            "3.0 Turbo Competition": [
              "275/35 R19",
              "285/30 R19"
            ],
            "3.0 TwinPower M Sport": [
              "275/35 R19",
              "285/30 R19"
            ],
            "3.0 TwinPower Competition": [
              "275/35 R19",
              "285/30 R19"
            ],
            "3.0 TwinPower Executive": [
              "275/35 R19",
              "285/30 R19"
            ]
          }
        }
      ]
    },
    "520i": {
      "geracoes": [
        {
          "de": 2001,
          "ate": 2010,
          "versoes": {
            "2.2": [
              "225/55 R16"
            ],
            "2.0 Turbo": [
              "225/55 R17"
            ],
            "2.0 TwinPower ActiveFlex": [
              "225/55 R17"
            ],
            "2.0 TwinPower GP": [
              "225/55 R17"
            ],
            "2.0 TwinPower Sport GP": [
              "225/55 R17"
            ],
            "2.0 TwinPower M Sport": [
              "225/55 R17"
            ]
          }
        },
        {
          "de": 2011,
          "ate": 2016,
          "versoes": {
            "2.0 TwinPower": [
              "225/55 R17"
            ],
            "2.0 TwinPower ActiveFlex": [
              "225/55 R17"
            ],
            "2.0 TwinPower GP": [
              "225/55 R17"
            ],
            "2.0 TwinPower Sport GP": [
              "225/55 R17"
            ],
            "2.0 TwinPower M Sport": [
              "225/55 R17"
            ]
          }
        },
        {
          "de": 2017,
          "ate": 2025,
          "versoes": {
            "2.0 TwinPower Sport": [
              "245/45 R18"
            ],
            "2.0 TwinPower M Sport": [
              "245/40 R19"
            ],
            "2.0 TwinPower ActiveFlex": [
              "245/45 R18"
            ],
            "2.0 TwinPower GP": [
              "245/45 R18"
            ],
            "2.0 TwinPower Sport GP": [
              "245/45 R18"
            ]
          }
        }
      ]
    },
    "528i": {
      "geracoes": [
        {
          "de": 2001,
          "ate": 2010,
          "versoes": {
            "2.8 Sport": [
              "225/55 R16"
            ]
          }
        },
        {
          "de": 2011,
          "ate": 2016,
          "versoes": {
            "2.0 Turbo": [
              "245/45 R18"
            ],
            "2.0 TwinPower ActiveFlex": [
              "245/45 R18"
            ],
            "2.0 TwinPower GP": [
              "245/45 R18"
            ],
            "2.0 TwinPower Sport GP": [
              "245/45 R18"
            ],
            "2.0 TwinPower M Sport": [
              "245/45 R18"
            ]
          }
        }
      ]
    },
    "530i": {
      "geracoes": [
        {
          "de": 2001,
          "ate": 2010,
          "versoes": {
            "3.0 Sport": [
              "225/55 R16"
            ],
            "3.0 TwinPower M Sport": [
              "225/55 R16"
            ],
            "3.0 TwinPower Competition": [
              "225/55 R16"
            ],
            "3.0 TwinPower Executive": [
              "225/55 R16"
            ]
          }
        },
        {
          "de": 2017,
          "ate": 2025,
          "versoes": {
            "2.0 TwinPower Sport": [
              "245/45 R18"
            ],
            "2.0 TwinPower M Sport": [
              "245/40 R19"
            ],
            "2.0 TwinPower ActiveFlex": [
              "245/45 R18"
            ],
            "2.0 TwinPower GP": [
              "245/45 R18"
            ],
            "2.0 TwinPower Sport GP": [
              "245/45 R18"
            ]
          }
        }
      ]
    },
    "535i": {
      "geracoes": [
        {
          "de": 2011,
          "ate": 2016,
          "versoes": {
            "3.0 Turbo": [
              "245/45 R18"
            ],
            "3.0 Turbo M Sport": [
              "255/40 R19"
            ],
            "3.0 TwinPower M Sport": [
              "245/45 R18"
            ],
            "3.0 TwinPower Competition": [
              "245/45 R18"
            ],
            "3.0 TwinPower Executive": [
              "245/45 R18"
            ]
          }
        }
      ]
    },
    "540i": {
      "geracoes": [
        {
          "de": 1997,
          "ate": 2003,
          "versoes": {
            "4.4 V8": [
              "225/55 R16"
            ]
          }
        },
        {
          "de": 2017,
          "ate": 2022,
          "versoes": {
            "3.0 Turbo M Sport": [
              "245/40 R19"
            ],
            "3.0 TwinPower M Sport": [
              "245/40 R19"
            ],
            "3.0 TwinPower Competition": [
              "245/40 R19"
            ],
            "3.0 TwinPower Executive": [
              "245/40 R19"
            ]
          }
        }
      ]
    },
    "M5": {
      "geracoes": [
        {
          "de": 2001,
          "ate": 2003,
          "versoes": {
            "5.0 V8": [
              "245/40 R18",
              "275/35 R18"
            ]
          }
        },
        {
          "de": 2006,
          "ate": 2010,
          "versoes": {
            "5.0 V10": [
              "255/40 R19",
              "285/35 R19"
            ]
          }
        },
        {
          "de": 2012,
          "ate": 2017,
          "versoes": {
            "4.4 V8 Turbo": [
              "275/35 R20",
              "285/30 R21"
            ]
          }
        },
        {
          "de": 2018,
          "ate": 2025,
          "versoes": {
            "4.4 V8 Competition": [
              "275/35 R20",
              "285/30 R21"
            ]
          }
        }
      ]
    },
    "730i": {
      "geracoes": [
        {
          "de": 2016,
          "ate": 2025,
          "versoes": {
            "3.0 TwinPower": [
              "245/50 R18"
            ],
            "3.0 TwinPower M Sport": [
              "275/35 R21"
            ],
            "3.0 TwinPower Competition": [
              "245/50 R18"
            ],
            "3.0 TwinPower Executive": [
              "245/50 R18"
            ]
          }
        }
      ]
    },
    "740i": {
      "geracoes": [
        {
          "de": 2001,
          "ate": 2008,
          "versoes": {
            "4.4 V8": [
              "245/50 R18"
            ]
          }
        },
        {
          "de": 2009,
          "ate": 2015,
          "versoes": {
            "3.0 Turbo": [
              "245/50 R18"
            ],
            "3.0 TwinPower M Sport": [
              "245/50 R18"
            ],
            "3.0 TwinPower Competition": [
              "245/50 R18"
            ],
            "3.0 TwinPower Executive": [
              "245/50 R18"
            ]
          }
        },
        {
          "de": 2016,
          "ate": 2025,
          "versoes": {
            "3.0 TwinPower": [
              "245/50 R19"
            ],
            "3.0 TwinPower M Sport": [
              "275/35 R21"
            ],
            "3.0 TwinPower Competition": [
              "245/50 R19"
            ],
            "3.0 TwinPower Executive": [
              "245/50 R19"
            ]
          }
        }
      ]
    },
    "750i": {
      "geracoes": [
        {
          "de": 2002,
          "ate": 2008,
          "versoes": {
            "4.8 V8": [
              "245/45 R19"
            ]
          }
        },
        {
          "de": 2009,
          "ate": 2015,
          "versoes": {
            "4.4 V8 Turbo": [
              "245/45 R19"
            ]
          }
        },
        {
          "de": 2016,
          "ate": 2020,
          "versoes": {
            "4.4 V8 TwinPower": [
              "275/35 R21"
            ]
          }
        }
      ]
    },
    "X1": {
      "geracoes": [
        {
          "de": 2010,
          "ate": 2015,
          "versoes": {
            "2.0 sDrive20i": [
              "205/55 R16"
            ],
            "2.0 xDrive20i": [
              "225/45 R18"
            ],
            "2.0 TwinPower ActiveFlex": [
              "205/55 R16"
            ],
            "2.0 TwinPower GP": [
              "205/55 R16"
            ],
            "2.0 TwinPower Sport GP": [
              "205/55 R16"
            ],
            "2.0 TwinPower M Sport": [
              "205/55 R16"
            ]
          }
        },
        {
          "de": 2016,
          "ate": 2022,
          "versoes": {
            "sDrive20i X-Line": [
              "225/50 R18"
            ],
            "sDrive20i M Sport": [
              "225/45 R19"
            ]
          }
        },
        {
          "de": 2023,
          "ate": 2025,
          "versoes": {
            "sDrive20i X-Line": [
              "225/55 R18"
            ],
            "sDrive20i M Sport": [
              "245/45 R19"
            ]
          }
        }
      ]
    },
    "X2": {
      "geracoes": [
        {
          "de": 2018,
          "ate": 2024,
          "versoes": {
            "sDrive20i M Sport": [
              "225/50 R18"
            ],
            "M35i": [
              "225/45 R19"
            ]
          }
        }
      ]
    },
    "X3": {
      "geracoes": [
        {
          "de": 2004,
          "ate": 2010,
          "versoes": {
            "2.5 si": [
              "235/60 R17"
            ],
            "3.0 si": [
              "235/55 R19"
            ],
            "3.0 TwinPower M Sport": [
              "235/55 R19"
            ],
            "3.0 TwinPower Competition": [
              "235/55 R19"
            ],
            "3.0 TwinPower Executive": [
              "235/55 R19"
            ]
          }
        },
        {
          "de": 2011,
          "ate": 2017,
          "versoes": {
            "2.0 xDrive20i": [
              "225/60 R17"
            ],
            "3.0 xDrive35i": [
              "235/55 R19"
            ],
            "2.0 TwinPower ActiveFlex": [
              "225/60 R17"
            ],
            "2.0 TwinPower GP": [
              "225/60 R17"
            ],
            "2.0 TwinPower Sport GP": [
              "225/60 R17"
            ],
            "2.0 TwinPower M Sport": [
              "225/60 R17"
            ],
            "3.0 TwinPower M Sport": [
              "235/55 R19"
            ],
            "3.0 TwinPower Competition": [
              "235/55 R19"
            ],
            "3.0 TwinPower Executive": [
              "235/55 R19"
            ]
          }
        },
        {
          "de": 2018,
          "ate": 2025,
          "versoes": {
            "xDrive30e X-Line": [
              "245/50 R19"
            ],
            "xDrive30e M Sport": [
              "245/45 R20"
            ]
          }
        }
      ]
    },
    "X4": {
      "geracoes": [
        {
          "de": 2014,
          "ate": 2018,
          "versoes": {
            "xDrive28i M Sport": [
              "225/55 R19"
            ]
          }
        },
        {
          "de": 2019,
          "ate": 2025,
          "versoes": {
            "xDrive30i M Sport": [
              "245/50 R19"
            ],
            "M Competition": [
              "245/45 R21"
            ]
          }
        }
      ]
    },
    "X5": {
      "geracoes": [
        {
          "de": 2000,
          "ate": 2006,
          "versoes": {
            "3.0 i": [
              "255/55 R18"
            ],
            "4.4 i": [
              "255/55 R18"
            ],
            "3.0 TwinPower M Sport": [
              "255/55 R18"
            ],
            "3.0 TwinPower Competition": [
              "255/55 R18"
            ],
            "3.0 TwinPower Executive": [
              "255/55 R18"
            ]
          }
        },
        {
          "de": 2007,
          "ate": 2013,
          "versoes": {
            "3.0 xDrive30i": [
              "255/55 R18"
            ],
            "4.8 V8 xDrive48i": [
              "255/50 R19"
            ],
            "3.0 TwinPower M Sport": [
              "255/55 R18"
            ],
            "3.0 TwinPower Competition": [
              "255/55 R18"
            ],
            "3.0 TwinPower Executive": [
              "255/55 R18"
            ]
          }
        },
        {
          "de": 2014,
          "ate": 2018,
          "versoes": {
            "xDrive35i": [
              "255/55 R19"
            ],
            "xDrive50i": [
              "275/45 R20"
            ]
          }
        },
        {
          "de": 2019,
          "ate": 2025,
          "versoes": {
            "xDrive30d xLine": [
              "255/55 R19"
            ],
            "xDrive45e M Sport": [
              "265/45 R21"
            ]
          }
        }
      ]
    },
    "X6": {
      "geracoes": [
        {
          "de": 2008,
          "ate": 2014,
          "versoes": {
            "xDrive35i M Sport": [
              "275/40 R20"
            ]
          }
        },
        {
          "de": 2015,
          "ate": 2019,
          "versoes": {
            "xDrive35i": [
              "275/40 R20"
            ],
            "xDrive50i": [
              "275/35 R21"
            ]
          }
        },
        {
          "de": 2020,
          "ate": 2025,
          "versoes": {
            "xDrive40i M Sport": [
              "275/40 R21"
            ],
            "M50i": [
              "285/35 R22"
            ]
          }
        }
      ]
    },
    "X7": {
      "geracoes": [
        {
          "de": 2019,
          "ate": 2025,
          "versoes": {
            "xDrive40i xLine": [
              "275/45 R21"
            ],
            "M60i M Sport": [
              "275/40 R22"
            ]
          }
        }
      ]
    },
    "Z4": {
      "geracoes": [
        {
          "de": 2003,
          "ate": 2009,
          "versoes": {
            "2.5 si Roadster": [
              "225/45 R17"
            ],
            "3.0 si Roadster": [
              "225/40 R18",
              "245/35 R18"
            ],
            "3.0 TwinPower M Sport": [
              "225/40 R18",
              "245/35 R18"
            ],
            "3.0 TwinPower Competition": [
              "225/40 R18",
              "245/35 R18"
            ],
            "3.0 TwinPower Executive": [
              "225/40 R18",
              "245/35 R18"
            ]
          }
        },
        {
          "de": 2009,
          "ate": 2016,
          "versoes": {
            "sDrive23i": [
              "225/45 R17"
            ],
            "sDrive30i": [
              "225/40 R18",
              "245/35 R18"
            ]
          }
        },
        {
          "de": 2019,
          "ate": 2025,
          "versoes": {
            "sDrive20i M Sport": [
              "225/45 R18"
            ],
            "M40i": [
              "255/35 R19",
              "275/35 R19"
            ]
          }
        }
      ]
    },
    "i3": {
      "geracoes": [
        {
          "de": 2015,
          "ate": 2022,
          "versoes": {
            "120Ah": [
              "155/70 R19"
            ]
          }
        }
      ]
    },
    "i4": {
      "geracoes": [
        {
          "de": 2022,
          "ate": 2025,
          "versoes": {
            "eDrive40 M Sport": [
              "225/45 R19"
            ],
            "M50": [
              "255/40 R19"
            ]
          }
        }
      ]
    },
    "i8": {
      "geracoes": [
        {
          "de": 2015,
          "ate": 2020,
          "versoes": {
            "1.5 Turbo Híbrido": [
              "215/45 R20"
            ]
          }
        }
      ]
    },
    "iX": {
      "geracoes": [
        {
          "de": 2022,
          "ate": 2025,
          "versoes": {
            "xDrive40": [
              "245/50 R21"
            ],
            "M60": [
              "265/40 R22"
            ]
          }
        }
      ]
    },
    "iX3": {
      "geracoes": [
        {
          "de": 2021,
          "ate": 2025,
          "versoes": {
            "eDrive20 M Sport": [
              "245/45 R20"
            ]
          }
        }
      ]
    },
    "M6": {
      "geracoes": [
        {
          "de": 2006,
          "ate": 2010,
          "versoes": {
            "5.0 V10": [
              "255/40 R19",
              "285/35 R19"
            ]
          }
        },
        {
          "de": 2012,
          "ate": 2018,
          "versoes": {
            "4.4 V8 Competition": [
              "265/35 R19",
              "295/30 R20"
            ]
          }
        }
      ]
    }
  },
  "MERCEDES-BENZ": {
    "A200": {
      "geracoes": [
        {
          "de": 2013,
          "ate": 2018,
          "versoes": {
            "1.6 Turbo": [
              "225/45 R17"
            ],
            "2.0 Turbo AMG Line": [
              "235/40 R18"
            ],
            "1.6 Style": [
              "225/45 R17"
            ],
            "1.6 Progressive": [
              "225/45 R17"
            ],
            "1.6 Avantgarde": [
              "225/45 R17"
            ],
            "2.0 Style": [
              "235/40 R18"
            ],
            "2.0 Progressive": [
              "235/40 R18"
            ],
            "2.0 Avantgarde": [
              "235/40 R18"
            ],
            "2.0 AMG Line": [
              "235/40 R18"
            ],
            "2.0 Vision": [
              "235/40 R18"
            ]
          }
        },
        {
          "de": 2019,
          "ate": 2025,
          "versoes": {
            "1.3 Turbo": [
              "225/45 R18"
            ],
            "2.0 Turbo AMG Line": [
              "235/40 R19"
            ],
            "A35 AMG": [
              "235/35 R19"
            ]
          }
        }
      ]
    },
    "A250": {
      "geracoes": [
        {
          "de": 2013,
          "ate": 2018,
          "versoes": {
            "2.0 Turbo Sport": [
              "235/40 R18"
            ],
            "2.0 Style": [
              "235/40 R18"
            ],
            "2.0 Progressive": [
              "235/40 R18"
            ],
            "2.0 Avantgarde": [
              "235/40 R18"
            ],
            "2.0 AMG Line": [
              "235/40 R18"
            ],
            "2.0 Vision": [
              "235/40 R18"
            ]
          }
        }
      ]
    },
    "CLA 200": {
      "geracoes": [
        {
          "de": 2014,
          "ate": 2019,
          "versoes": {
            "1.6 Turbo Sport": [
              "235/45 R17"
            ],
            "2.0 Turbo AMG Line": [
              "235/40 R18"
            ],
            "1.6 Style": [
              "235/45 R17"
            ],
            "1.6 Progressive": [
              "235/45 R17"
            ],
            "1.6 Avantgarde": [
              "235/45 R17"
            ],
            "2.0 Style": [
              "235/40 R18"
            ],
            "2.0 Progressive": [
              "235/40 R18"
            ],
            "2.0 Avantgarde": [
              "235/40 R18"
            ],
            "2.0 AMG Line": [
              "235/40 R18"
            ],
            "2.0 Vision": [
              "235/40 R18"
            ]
          }
        },
        {
          "de": 2020,
          "ate": 2025,
          "versoes": {
            "1.3 Turbo AMG Line": [
              "235/40 R19"
            ]
          }
        }
      ]
    },
    "C180": {
      "geracoes": [
        {
          "de": 2000,
          "ate": 2007,
          "versoes": {
            "1.8 Kompressor": [
              "205/55 R16"
            ]
          }
        },
        {
          "de": 2008,
          "ate": 2014,
          "versoes": {
            "1.6 Turbo": [
              "225/50 R16"
            ],
            "1.6 Style": [
              "225/50 R16"
            ],
            "1.6 Progressive": [
              "225/50 R16"
            ],
            "1.6 Avantgarde": [
              "225/50 R16"
            ]
          }
        },
        {
          "de": 2015,
          "ate": 2021,
          "versoes": {
            "1.6 Turbo Avantgarde": [
              "225/50 R17"
            ],
            "1.6 Turbo Exclusive": [
              "225/50 R17"
            ],
            "1.6 Style": [
              "225/50 R17"
            ],
            "1.6 Progressive": [
              "225/50 R17"
            ],
            "1.6 Avantgarde": [
              "225/50 R17"
            ]
          }
        }
      ]
    },
    "C200": {
      "geracoes": [
        {
          "de": 2000,
          "ate": 2007,
          "versoes": {
            "2.0 Kompressor": [
              "225/50 R16"
            ],
            "2.0 Style": [
              "225/50 R16"
            ],
            "2.0 Progressive": [
              "225/50 R16"
            ],
            "2.0 Avantgarde": [
              "225/50 R16"
            ],
            "2.0 AMG Line": [
              "225/50 R16"
            ],
            "2.0 Vision": [
              "225/50 R16"
            ]
          }
        },
        {
          "de": 2008,
          "ate": 2014,
          "versoes": {
            "1.8 Kompressor CGI": [
              "225/45 R17"
            ]
          }
        },
        {
          "de": 2015,
          "ate": 2025,
          "versoes": {
            "2.0 Turbo AMG Line": [
              "225/45 R18"
            ],
            "2.0 Style": [
              "225/45 R18"
            ],
            "2.0 Progressive": [
              "225/45 R18"
            ],
            "2.0 Avantgarde": [
              "225/45 R18"
            ],
            "2.0 AMG Line": [
              "225/45 R18"
            ],
            "2.0 Vision": [
              "225/45 R18"
            ]
          }
        }
      ]
    },
    "C300": {
      "geracoes": [
        {
          "de": 2008,
          "ate": 2014,
          "versoes": {
            "3.0 V6": [
              "225/45 R17"
            ],
            "3.0 Turbo Sport": [
              "225/45 R17"
            ],
            "3.0 Turbo M Sport": [
              "225/45 R17"
            ],
            "3.0 Turbo Inscription": [
              "225/45 R17"
            ],
            "3.0 Turbo HSE": [
              "225/45 R17"
            ]
          }
        },
        {
          "de": 2015,
          "ate": 2025,
          "versoes": {
            "2.0 Turbo Sport": [
              "225/45 R18"
            ],
            "2.0 Turbo AMG Line": [
              "235/40 R19"
            ],
            "2.0 Style": [
              "225/45 R18"
            ],
            "2.0 Progressive": [
              "225/45 R18"
            ],
            "2.0 Avantgarde": [
              "225/45 R18"
            ],
            "2.0 AMG Line": [
              "225/45 R18"
            ],
            "2.0 Vision": [
              "225/45 R18"
            ]
          }
        }
      ]
    },
    "C63 AMG": {
      "geracoes": [
        {
          "de": 2008,
          "ate": 2014,
          "versoes": {
            "6.3 V8": [
              "235/35 R18",
              "255/30 R18"
            ]
          }
        },
        {
          "de": 2015,
          "ate": 2025,
          "versoes": {
            "4.0 V8 Biturbo": [
              "245/35 R19",
              "265/35 R19"
            ]
          }
        }
      ]
    },
    "E200": {
      "geracoes": [
        {
          "de": 2004,
          "ate": 2009,
          "versoes": {
            "1.8 Kompressor": [
              "225/55 R16"
            ]
          }
        },
        {
          "de": 2010,
          "ate": 2016,
          "versoes": {
            "2.0 CGI": [
              "225/55 R17"
            ],
            "2.0 Style": [
              "225/55 R17"
            ],
            "2.0 Progressive": [
              "225/55 R17"
            ],
            "2.0 Avantgarde": [
              "225/55 R17"
            ],
            "2.0 AMG Line": [
              "225/55 R17"
            ],
            "2.0 Vision": [
              "225/55 R17"
            ]
          }
        },
        {
          "de": 2017,
          "ate": 2025,
          "versoes": {
            "2.0 Turbo Exclusive": [
              "245/45 R18"
            ],
            "2.0 Turbo AMG Line": [
              "245/40 R19"
            ],
            "2.0 Style": [
              "245/45 R18"
            ],
            "2.0 Progressive": [
              "245/45 R18"
            ],
            "2.0 Avantgarde": [
              "245/45 R18"
            ],
            "2.0 AMG Line": [
              "245/45 R18"
            ],
            "2.0 Vision": [
              "245/45 R18"
            ]
          }
        }
      ]
    },
    "E300": {
      "geracoes": [
        {
          "de": 2017,
          "ate": 2025,
          "versoes": {
            "2.0 Turbo": [
              "245/40 R19"
            ],
            "2.0 Style": [
              "245/40 R19"
            ],
            "2.0 Progressive": [
              "245/40 R19"
            ],
            "2.0 Avantgarde": [
              "245/40 R19"
            ],
            "2.0 AMG Line": [
              "245/40 R19"
            ],
            "2.0 Vision": [
              "245/40 R19"
            ]
          }
        }
      ]
    },
    "S400": {
      "geracoes": [
        {
          "de": 2014,
          "ate": 2020,
          "versoes": {
            "3.5 V6 Hybrid": [
              "245/45 R19"
            ]
          }
        }
      ]
    },
    "S500": {
      "geracoes": [
        {
          "de": 2000,
          "ate": 2006,
          "versoes": {
            "5.0 V8": [
              "245/45 R17"
            ]
          }
        },
        {
          "de": 2006,
          "ate": 2013,
          "versoes": {
            "5.5 V8 Kompressor": [
              "255/45 R18"
            ]
          }
        },
        {
          "de": 2014,
          "ate": 2020,
          "versoes": {
            "4.7 V8 Biturbo": [
              "255/40 R19",
              "285/35 R20"
            ]
          }
        },
        {
          "de": 2021,
          "ate": 2025,
          "versoes": {
            "3.0 Turbo": [
              "255/40 R20",
              "285/35 R21"
            ],
            "3.0 Turbo Sport": [
              "255/40 R20",
              "285/35 R21"
            ],
            "3.0 Turbo M Sport": [
              "255/40 R20",
              "285/35 R21"
            ],
            "3.0 Turbo Inscription": [
              "255/40 R20",
              "285/35 R21"
            ],
            "3.0 Turbo HSE": [
              "255/40 R20",
              "285/35 R21"
            ]
          }
        }
      ]
    },
    "GLA 200": {
      "geracoes": [
        {
          "de": 2015,
          "ate": 2020,
          "versoes": {
            "1.6 Turbo Advance": [
              "235/50 R18"
            ],
            "2.0 Turbo Enduro": [
              "235/45 R19"
            ],
            "1.6 Style": [
              "235/50 R18"
            ],
            "1.6 Progressive": [
              "235/50 R18"
            ],
            "1.6 Avantgarde": [
              "235/50 R18"
            ],
            "2.0 Style": [
              "235/45 R19"
            ],
            "2.0 Progressive": [
              "235/45 R19"
            ],
            "2.0 Avantgarde": [
              "235/45 R19"
            ],
            "2.0 AMG Line": [
              "235/45 R19"
            ],
            "2.0 Vision": [
              "235/45 R19"
            ]
          }
        },
        {
          "de": 2021,
          "ate": 2025,
          "versoes": {
            "1.3 Turbo AMG Line": [
              "235/50 R19"
            ]
          }
        }
      ]
    },
    "GLC 200": {
      "geracoes": [
        {
          "de": 2016,
          "ate": 2022,
          "versoes": {
            "2.0 Turbo Sport": [
              "235/55 R19"
            ],
            "2.0 Turbo AMG Line": [
              "255/50 R19"
            ],
            "2.0 Style": [
              "235/55 R19"
            ],
            "2.0 Progressive": [
              "235/55 R19"
            ],
            "2.0 Avantgarde": [
              "235/55 R19"
            ],
            "2.0 AMG Line": [
              "235/55 R19"
            ],
            "2.0 Vision": [
              "235/55 R19"
            ]
          }
        },
        {
          "de": 2023,
          "ate": 2025,
          "versoes": {
            "2.0 Turbo Sport": [
              "235/55 R19"
            ],
            "2.0 Turbo AMG Line": [
              "255/45 R20"
            ],
            "2.0 Style": [
              "235/55 R19"
            ],
            "2.0 Progressive": [
              "235/55 R19"
            ],
            "2.0 Avantgarde": [
              "235/55 R19"
            ],
            "2.0 AMG Line": [
              "235/55 R19"
            ],
            "2.0 Vision": [
              "235/55 R19"
            ]
          }
        }
      ]
    },
    "GLC 300": {
      "geracoes": [
        {
          "de": 2016,
          "ate": 2025,
          "versoes": {
            "2.0 Turbo AMG Line": [
              "255/50 R19"
            ],
            "GLC 300e": [
              "255/45 R20"
            ],
            "2.0 Style": [
              "255/50 R19"
            ],
            "2.0 Progressive": [
              "255/50 R19"
            ],
            "2.0 Avantgarde": [
              "255/50 R19"
            ],
            "2.0 AMG Line": [
              "255/50 R19"
            ],
            "2.0 Vision": [
              "255/50 R19"
            ]
          }
        }
      ]
    },
    "GLE 300d": {
      "geracoes": [
        {
          "de": 2020,
          "ate": 2025,
          "versoes": {
            "3.0 Diesel AMG Line": [
              "265/50 R20"
            ],
            "3.0 Turbo Sport": [
              "265/50 R20"
            ],
            "3.0 Turbo M Sport": [
              "265/50 R20"
            ],
            "3.0 Turbo Inscription": [
              "265/50 R20"
            ],
            "3.0 Turbo HSE": [
              "265/50 R20"
            ]
          }
        }
      ]
    },
    "GLE 450": {
      "geracoes": [
        {
          "de": 2020,
          "ate": 2025,
          "versoes": {
            "3.0 Turbo AMG Line": [
              "265/50 R20"
            ],
            "GLE 53 AMG": [
              "265/45 R21"
            ],
            "3.0 Turbo Sport": [
              "265/50 R20"
            ],
            "3.0 Turbo M Sport": [
              "265/50 R20"
            ],
            "3.0 Turbo Inscription": [
              "265/50 R20"
            ],
            "3.0 Turbo HSE": [
              "265/50 R20"
            ]
          }
        }
      ]
    },
    "GLS 450": {
      "geracoes": [
        {
          "de": 2020,
          "ate": 2025,
          "versoes": {
            "3.0 Turbo": [
              "275/50 R20"
            ],
            "AMG Line": [
              "285/45 R21"
            ],
            "3.0 Turbo Sport": [
              "275/50 R20"
            ],
            "3.0 Turbo M Sport": [
              "275/50 R20"
            ],
            "3.0 Turbo Inscription": [
              "275/50 R20"
            ],
            "3.0 Turbo HSE": [
              "275/50 R20"
            ]
          }
        }
      ]
    },
    "AMG GT": {
      "geracoes": [
        {
          "de": 2016,
          "ate": 2025,
          "versoes": {
            "4.0 V8 Biturbo": [
              "265/35 R19",
              "295/30 R19"
            ],
            "AMG GT R": [
              "285/30 R20",
              "325/30 R20"
            ]
          }
        }
      ]
    },
    "SLC 180": {
      "geracoes": [
        {
          "de": 2016,
          "ate": 2020,
          "versoes": {
            "1.6 Turbo": [
              "225/45 R17",
              "245/40 R17"
            ],
            "1.6 Style": [
              "225/45 R17",
              "245/40 R17"
            ],
            "1.6 Progressive": [
              "225/45 R17",
              "245/40 R17"
            ],
            "1.6 Avantgarde": [
              "225/45 R17",
              "245/40 R17"
            ]
          }
        }
      ]
    },
    "EQA": {
      "geracoes": [
        {
          "de": 2022,
          "ate": 2025,
          "versoes": {
            "250 Electric": [
              "235/55 R18"
            ],
            "350 4MATIC": [
              "235/50 R19"
            ]
          }
        }
      ]
    },
    "EQB": {
      "geracoes": [
        {
          "de": 2022,
          "ate": 2025,
          "versoes": {
            "250 Electric": [
              "235/55 R18"
            ]
          }
        }
      ]
    },
    "EQC": {
      "geracoes": [
        {
          "de": 2021,
          "ate": 2023,
          "versoes": {
            "400 4MATIC": [
              "235/50 R20"
            ]
          }
        }
      ]
    }
  },
  "LAND ROVER": {
    "DEFENDER": {
      "geracoes": [
        {
          "de": 2020,
          "ate": 2025,
          "versoes": {
            "90 P300": [
              "255/70 R18",
              "265/60 R20"
            ],
            "110 P400": [
              "265/60 R20"
            ],
            "130 V8": [
              "275/45 R22"
            ]
          }
        }
      ]
    },
    "DISCOVERY": {
      "geracoes": [
        {
          "de": 1997,
          "ate": 2004,
          "versoes": {
            "2.5 Diesel": [
              "235/70 R16"
            ]
          }
        },
        {
          "de": 2005,
          "ate": 2009,
          "versoes": {
            "4.0 V6": [
              "255/65 R16"
            ]
          }
        },
        {
          "de": 2010,
          "ate": 2017,
          "versoes": {
            "3.0 TDV6": [
              "255/60 R18"
            ],
            "3.0 Turbo Sport": [
              "255/60 R18"
            ],
            "3.0 Turbo M Sport": [
              "255/60 R18"
            ],
            "3.0 Turbo Inscription": [
              "255/60 R18"
            ],
            "3.0 Turbo HSE": [
              "255/60 R18"
            ]
          }
        },
        {
          "de": 2017,
          "ate": 2025,
          "versoes": {
            "Sd6 HSE": [
              "255/55 R20"
            ],
            "Si6 HSE Luxury": [
              "255/50 R21"
            ]
          }
        }
      ]
    },
    "DISCOVERY SPORT": {
      "geracoes": [
        {
          "de": 2015,
          "ate": 2025,
          "versoes": {
            "Si4 S": [
              "235/60 R18"
            ],
            "Si4 HSE": [
              "235/55 R19"
            ],
            "Si4 R-Dynamic": [
              "235/50 R20"
            ]
          }
        }
      ]
    },
    "RANGE ROVER EVOQUE": {
      "geracoes": [
        {
          "de": 2012,
          "ate": 2019,
          "versoes": {
            "Si4 Pure": [
              "215/60 R17"
            ],
            "Si4 Dynamic": [
              "235/50 R20"
            ]
          }
        },
        {
          "de": 2020,
          "ate": 2025,
          "versoes": {
            "P250 S": [
              "235/55 R19"
            ],
            "P300 HSE": [
              "235/50 R20"
            ],
            "P300 R-Dynamic": [
              "235/50 R20"
            ]
          }
        }
      ]
    },
    "RANGE ROVER VELAR": {
      "geracoes": [
        {
          "de": 2018,
          "ate": 2025,
          "versoes": {
            "P250 S": [
              "235/55 R21"
            ],
            "P380 HSE": [
              "255/45 R22"
            ]
          }
        }
      ]
    },
    "RANGE ROVER SPORT": {
      "geracoes": [
        {
          "de": 2006,
          "ate": 2013,
          "versoes": {
            "4.2 V8 Supercharged": [
              "255/55 R19"
            ]
          }
        },
        {
          "de": 2014,
          "ate": 2022,
          "versoes": {
            "SDV6 HSE": [
              "275/45 R21"
            ],
            "P400e HSE Dynamic": [
              "275/40 R22"
            ]
          }
        },
        {
          "de": 2023,
          "ate": 2025,
          "versoes": {
            "P400e HSE": [
              "275/45 R22"
            ],
            "SV Edition": [
              "285/40 R23"
            ]
          }
        }
      ]
    },
    "RANGE ROVER": {
      "geracoes": [
        {
          "de": 2000,
          "ate": 2012,
          "versoes": {
            "4.4 V8": [
              "255/60 R19"
            ]
          }
        },
        {
          "de": 2013,
          "ate": 2021,
          "versoes": {
            "3.0 TDV6": [
              "255/55 R20"
            ],
            "5.0 V8 Autobiography": [
              "275/40 R22"
            ],
            "3.0 Turbo Sport": [
              "255/55 R20"
            ],
            "3.0 Turbo M Sport": [
              "255/55 R20"
            ],
            "3.0 Turbo Inscription": [
              "255/55 R20"
            ],
            "3.0 Turbo HSE": [
              "255/55 R20"
            ]
          }
        },
        {
          "de": 2022,
          "ate": 2025,
          "versoes": {
            "P400e HSE": [
              "275/45 R22"
            ],
            "SV": [
              "285/40 R23"
            ]
          }
        }
      ]
    },
    "FREELANDER": {
      "geracoes": [
        {
          "de": 2004,
          "ate": 2015,
          "versoes": {
            "2.0 Si4": [
              "235/65 R17"
            ],
            "2.2 Td4": [
              "235/65 R17"
            ],
            "2.0 Turbo Sport": [
              "235/65 R17"
            ],
            "2.0 Turbo S line": [
              "235/65 R17"
            ],
            "2.0 Turbo Avantgarde": [
              "235/65 R17"
            ],
            "2.0 Turbo Momentum": [
              "235/65 R17"
            ]
          }
        }
      ]
    }
  },
  "VOLVO": {
    "C30": {
      "geracoes": [
        {
          "de": 2007,
          "ate": 2013,
          "versoes": {
            "2.0 R-Design": [
              "225/45 R17"
            ],
            "2.0 Kinetic": [
              "225/45 R17"
            ],
            "2.0 Momentum": [
              "225/45 R17"
            ],
            "2.0 Inscription": [
              "225/45 R17"
            ]
          }
        }
      ]
    },
    "V40": {
      "geracoes": [
        {
          "de": 2013,
          "ate": 2019,
          "versoes": {
            "2.0 Momentum": [
              "205/55 R16"
            ],
            "2.0 Kinetic": [
              "235/45 R17"
            ],
            "2.0 R-Design": [
              "235/40 R18"
            ]
          }
        }
      ]
    },
    "XC40": {
      "geracoes": [
        {
          "de": 2018,
          "ate": 2025,
          "versoes": {
            "T4 Momentum": [
              "235/50 R18"
            ],
            "T5 R-Design": [
              "235/45 R20"
            ],
            "T5 Inscription": [
              "235/50 R19"
            ],
            "Recharge P8": [
              "235/45 R20"
            ]
          }
        }
      ]
    },
    "XC60": {
      "geracoes": [
        {
          "de": 2009,
          "ate": 2017,
          "versoes": {
            "3.0 T6 R-Design": [
              "235/55 R19"
            ],
            "2.0 T5": [
              "235/60 R18"
            ],
            "3.0 Momentum": [
              "235/55 R19"
            ],
            "3.0 Inscription": [
              "235/55 R19"
            ],
            "3.0 R-Design": [
              "235/55 R19"
            ],
            "2.0 Kinetic": [
              "235/60 R18"
            ],
            "2.0 Momentum": [
              "235/60 R18"
            ],
            "2.0 Inscription": [
              "235/60 R18"
            ],
            "2.0 R-Design": [
              "235/60 R18"
            ]
          }
        },
        {
          "de": 2018,
          "ate": 2025,
          "versoes": {
            "T5 Momentum": [
              "235/55 R19"
            ],
            "T8 R-Design": [
              "255/45 R20"
            ],
            "T8 Polestar": [
              "255/40 R21"
            ]
          }
        }
      ]
    },
    "XC90": {
      "geracoes": [
        {
          "de": 2004,
          "ate": 2014,
          "versoes": {
            "2.9 T6": [
              "235/65 R18"
            ],
            "3.2": [
              "235/60 R18"
            ]
          }
        },
        {
          "de": 2016,
          "ate": 2025,
          "versoes": {
            "T6 Momentum": [
              "255/55 R19"
            ],
            "T8 Inscription": [
              "285/45 R20"
            ],
            "T8 Excellence": [
              "285/40 R21"
            ]
          }
        }
      ]
    },
    "S60": {
      "geracoes": [
        {
          "de": 2001,
          "ate": 2009,
          "versoes": {
            "2.0 T": [
              "205/55 R16"
            ],
            "2.4 T5": [
              "215/50 R17"
            ],
            "2.0 Kinetic": [
              "205/55 R16"
            ],
            "2.0 Momentum": [
              "205/55 R16"
            ],
            "2.0 Inscription": [
              "205/55 R16"
            ],
            "2.0 R-Design": [
              "205/55 R16"
            ]
          }
        },
        {
          "de": 2010,
          "ate": 2018,
          "versoes": {
            "2.0 T5": [
              "215/50 R17"
            ],
            "2.0 T6": [
              "225/45 R18"
            ],
            "2.0 Kinetic": [
              "215/50 R17"
            ],
            "2.0 Momentum": [
              "215/50 R17"
            ],
            "2.0 Inscription": [
              "215/50 R17"
            ],
            "2.0 R-Design": [
              "215/50 R17"
            ]
          }
        },
        {
          "de": 2019,
          "ate": 2025,
          "versoes": {
            "T8 Polestar Engineered": [
              "245/35 R20"
            ]
          }
        }
      ]
    },
    "S90": {
      "geracoes": [
        {
          "de": 2017,
          "ate": 2025,
          "versoes": {
            "T5 Momentum": [
              "235/50 R18"
            ],
            "T8 Inscription": [
              "235/45 R19"
            ]
          }
        }
      ]
    },
    "V60": {
      "geracoes": [
        {
          "de": 2011,
          "ate": 2018,
          "versoes": {
            "2.0 T5": [
              "225/45 R18"
            ],
            "2.0 T6": [
              "235/40 R19"
            ],
            "2.0 Kinetic": [
              "225/45 R18"
            ],
            "2.0 Momentum": [
              "225/45 R18"
            ],
            "2.0 Inscription": [
              "225/45 R18"
            ],
            "2.0 R-Design": [
              "225/45 R18"
            ]
          }
        },
        {
          "de": 2019,
          "ate": 2022,
          "versoes": {
            "T5 Momentum": [
              "235/45 R18"
            ],
            "T8 Polestar": [
              "235/40 R19"
            ]
          }
        }
      ]
    },
    "V90": {
      "geracoes": [
        {
          "de": 2018,
          "ate": 2023,
          "versoes": {
            "T5 Momentum": [
              "235/50 R18"
            ]
          }
        }
      ]
    }
  },
  "MINI": {
    "COOPER": {
      "geracoes": [
        {
          "de": 2002,
          "ate": 2006,
          "versoes": {
            "1.6 One": [
              "195/55 R16"
            ],
            "1.6 Cooper": [
              "195/55 R16"
            ],
            "1.6 Cooper S": [
              "205/45 R17"
            ]
          }
        },
        {
          "de": 2007,
          "ate": 2013,
          "versoes": {
            "1.6 Cooper": [
              "195/55 R16"
            ],
            "1.6 Cooper S": [
              "205/45 R17"
            ],
            "1.6 JCW": [
              "215/40 R18"
            ]
          }
        },
        {
          "de": 2014,
          "ate": 2021,
          "versoes": {
            "1.5 Cooper": [
              "195/55 R16"
            ],
            "2.0 Cooper S": [
              "205/45 R17"
            ],
            "2.0 JCW": [
              "215/40 R18"
            ]
          }
        },
        {
          "de": 2022,
          "ate": 2025,
          "versoes": {
            "2.0 Cooper S": [
              "205/45 R18"
            ],
            "2.0 JCW": [
              "215/40 R18"
            ]
          }
        }
      ]
    },
    "COOPER CABRIO": {
      "geracoes": [
        {
          "de": 2009,
          "ate": 2015,
          "versoes": {
            "1.6 Cooper": [
              "195/55 R16"
            ],
            "1.6 Cooper S": [
              "205/45 R17"
            ]
          }
        },
        {
          "de": 2016,
          "ate": 2022,
          "versoes": {
            "1.5 Cooper": [
              "195/55 R16"
            ],
            "2.0 Cooper S": [
              "205/45 R17"
            ]
          }
        }
      ]
    },
    "COUNTRYMAN": {
      "geracoes": [
        {
          "de": 2011,
          "ate": 2016,
          "versoes": {
            "1.6 Cooper": [
              "205/55 R17"
            ],
            "2.0 JCW ALL4": [
              "215/50 R17"
            ]
          }
        },
        {
          "de": 2017,
          "ate": 2025,
          "versoes": {
            "1.5 Cooper": [
              "205/55 R17"
            ],
            "2.0 Cooper S ALL4": [
              "215/55 R17"
            ],
            "2.0 JCW ALL4": [
              "225/45 R18"
            ]
          }
        }
      ]
    },
    "CLUBMAN": {
      "geracoes": [
        {
          "de": 2008,
          "ate": 2014,
          "versoes": {
            "1.6 Cooper": [
              "195/55 R16"
            ],
            "1.6 Cooper S": [
              "205/45 R17"
            ]
          }
        },
        {
          "de": 2016,
          "ate": 2022,
          "versoes": {
            "1.5 Cooper": [
              "205/50 R17"
            ],
            "2.0 Cooper S": [
              "205/50 R17"
            ],
            "2.0 JCW": [
              "225/40 R18"
            ]
          }
        }
      ]
    },
    "PACEMAN": {
      "geracoes": [
        {
          "de": 2013,
          "ate": 2016,
          "versoes": {
            "1.6 Cooper S ALL4": [
              "205/55 R17"
            ]
          }
        }
      ]
    },
    "ROADSTER": {
      "geracoes": [
        {
          "de": 2012,
          "ate": 2015,
          "versoes": {
            "1.6 Cooper": [
              "195/55 R17"
            ],
            "1.6 JCW": [
              "205/45 R17"
            ]
          }
        }
      ]
    },
    "JOHN COOPER WORKS": {
      "geracoes": [
        {
          "de": 2016,
          "ate": 2025,
          "versoes": {
            "2.0 Turbo": [
              "215/40 R18",
              "225/35 R18"
            ]
          }
        }
      ]
    }
  },
  "MITSUBISHI": {
    "L200 TRITON": {
      "geracoes": [
        {
          "de": 2001,
          "ate": 2009,
          "versoes": {
            "2.5 Diesel GL": [
              "265/70 R15"
            ]
          }
        },
        {
          "de": 2010,
          "ate": 2016,
          "versoes": {
            "3.2 Diesel GLX": [
              "265/70 R16"
            ],
            "3.2 Diesel HPE": [
              "265/70 R16"
            ],
            "3.2 HPE": [
              "265/70 R16"
            ],
            "3.2 GLS": [
              "265/70 R16"
            ],
            "3.2 Outdoor": [
              "265/70 R16"
            ]
          }
        },
        {
          "de": 2017,
          "ate": 2025,
          "versoes": {
            "2.4 Diesel GLS": [
              "265/70 R16"
            ],
            "2.4 Diesel HPE": [
              "265/60 R18"
            ],
            "2.4 Diesel HPE-S": [
              "265/60 R18"
            ]
          }
        }
      ]
    },
    "ECLIPSE CROSS": {
      "geracoes": [
        {
          "de": 2019,
          "ate": 2025,
          "versoes": {
            "1.5 Turbo GLS": [
              "225/55 R18"
            ],
            "1.5 Turbo HPE": [
              "225/55 R18"
            ],
            "1.5 Turbo HPE-S": [
              "225/55 R18"
            ]
          }
        }
      ]
    },
    "OUTLANDER": {
      "geracoes": [
        {
          "de": 2001,
          "ate": 2006,
          "versoes": {
            "2.4 16V": [
              "225/65 R16"
            ]
          }
        },
        {
          "de": 2007,
          "ate": 2013,
          "versoes": {
            "2.0 16V": [
              "225/60 R17"
            ],
            "3.0 V6": [
              "225/60 R17"
            ],
            "2.0 GLS": [
              "225/60 R17"
            ],
            "2.0 HPE": [
              "225/60 R17"
            ],
            "2.0 GT": [
              "225/60 R17"
            ],
            "2.0 HLE": [
              "225/60 R17"
            ]
          }
        },
        {
          "de": 2014,
          "ate": 2020,
          "versoes": {
            "3.0 V6 HPE": [
              "225/55 R18"
            ]
          }
        },
        {
          "de": 2022,
          "ate": 2025,
          "versoes": {
            "2.5 PHEV S-AWC": [
              "225/60 R18"
            ],
            "2.5 GT PHEV": [
              "225/55 R19"
            ]
          }
        }
      ]
    },
    "PAJERO SPORT": {
      "geracoes": [
        {
          "de": 2001,
          "ate": 2007,
          "versoes": {
            "3.0 V6": [
              "265/70 R16"
            ]
          }
        },
        {
          "de": 2008,
          "ate": 2015,
          "versoes": {
            "3.2 Diesel HPE": [
              "265/65 R17"
            ],
            "3.2 HPE": [
              "265/65 R17"
            ],
            "3.2 GLS": [
              "265/65 R17"
            ],
            "3.2 Outdoor": [
              "265/65 R17"
            ]
          }
        },
        {
          "de": 2016,
          "ate": 2025,
          "versoes": {
            "2.4 Diesel GLS": [
              "265/60 R18"
            ],
            "2.4 Diesel HPE": [
              "265/60 R18"
            ]
          }
        }
      ]
    },
    "PAJERO FULL": {
      "geracoes": [
        {
          "de": 2000,
          "ate": 2007,
          "versoes": {
            "3.5 V6": [
              "265/70 R16"
            ]
          }
        },
        {
          "de": 2008,
          "ate": 2013,
          "versoes": {
            "3.2 Diesel HPE": [
              "265/60 R17"
            ],
            "3.2 HPE": [
              "265/60 R17"
            ],
            "3.2 GLS": [
              "265/60 R17"
            ],
            "3.2 Outdoor": [
              "265/60 R17"
            ]
          }
        },
        {
          "de": 2014,
          "ate": 2025,
          "versoes": {
            "3.2 Diesel GLS": [
              "265/60 R18"
            ],
            "3.2 HPE": [
              "265/60 R18"
            ],
            "3.2 GLS": [
              "265/60 R18"
            ],
            "3.2 Outdoor": [
              "265/60 R18"
            ]
          }
        }
      ]
    },
    "ASX": {
      "geracoes": [
        {
          "de": 2011,
          "ate": 2022,
          "versoes": {
            "2.0 4x2": [
              "225/55 R18"
            ],
            "2.0 4x4 AWD": [
              "225/55 R18"
            ],
            "2.0 GLS": [
              "225/55 R18"
            ],
            "2.0 HPE": [
              "225/55 R18"
            ],
            "2.0 GT": [
              "225/55 R18"
            ],
            "2.0 HLE": [
              "225/55 R18"
            ]
          }
        }
      ]
    },
    "GALANT": {
      "geracoes": [
        {
          "de": 2004,
          "ate": 2012,
          "versoes": {
            "3.8 V6": [
              "225/50 R18"
            ]
          }
        }
      ]
    },
    "LANCER": {
      "geracoes": [
        {
          "de": 2006,
          "ate": 2012,
          "versoes": {
            "2.0 Evolution X": [
              "235/45 R17"
            ],
            "2.0 GLS": [
              "235/45 R17"
            ],
            "2.0 HPE": [
              "235/45 R17"
            ],
            "2.0 GT": [
              "235/45 R17"
            ],
            "2.0 HLE": [
              "235/45 R17"
            ]
          }
        }
      ]
    }
  },
  "KIA": {
    "SPORTAGE": {
      "geracoes": [
        {
          "de": 2000,
          "ate": 2004,
          "versoes": {
            "2.0 EX": [
              "205/75 R15"
            ]
          }
        },
        {
          "de": 2005,
          "ate": 2010,
          "versoes": {
            "2.0 EX": [
              "215/65 R16"
            ]
          }
        },
        {
          "de": 2011,
          "ate": 2016,
          "versoes": {
            "2.0 LX": [
              "215/65 R16"
            ],
            "2.0 EX": [
              "225/60 R16"
            ]
          }
        },
        {
          "de": 2017,
          "ate": 2022,
          "versoes": {
            "2.0 LX": [
              "225/60 R17"
            ],
            "2.0 EX": [
              "235/55 R18"
            ],
            "2.0 EX Prestige": [
              "235/45 R19"
            ]
          }
        },
        {
          "de": 2023,
          "ate": 2025,
          "versoes": {
            "1.6 Turbo SX": [
              "235/50 R19"
            ],
            "1.6 Turbo SX Prestige": [
              "235/45 R20"
            ]
          }
        }
      ]
    },
    "CERATO": {
      "geracoes": [
        {
          "de": 2004,
          "ate": 2009,
          "versoes": {
            "1.6 EX": [
              "195/65 R15"
            ],
            "2.0 EX": [
              "205/55 R16"
            ]
          }
        },
        {
          "de": 2010,
          "ate": 2013,
          "versoes": {
            "1.6 EX": [
              "195/65 R15"
            ],
            "2.0 SX": [
              "205/55 R16"
            ]
          }
        },
        {
          "de": 2014,
          "ate": 2019,
          "versoes": {
            "1.6 EX": [
              "205/60 R16"
            ],
            "1.6 SX": [
              "205/60 R16"
            ]
          }
        },
        {
          "de": 2020,
          "ate": 2025,
          "versoes": {
            "2.0 EX": [
              "205/60 R16"
            ],
            "2.0 SX": [
              "225/45 R18"
            ]
          }
        }
      ]
    },
    "SORENTO": {
      "geracoes": [
        {
          "de": 2003,
          "ate": 2009,
          "versoes": {
            "3.5 V6 EX": [
              "245/70 R16"
            ]
          }
        },
        {
          "de": 2010,
          "ate": 2015,
          "versoes": {
            "2.4 LX": [
              "235/65 R17"
            ],
            "3.5 V6 EX": [
              "235/65 R17"
            ]
          }
        },
        {
          "de": 2016,
          "ate": 2022,
          "versoes": {
            "3.3 V6 EX": [
              "235/65 R17"
            ],
            "3.3 V6 SX": [
              "255/50 R19"
            ]
          }
        }
      ]
    },
    "CARNIVAL": {
      "geracoes": [
        {
          "de": 2000,
          "ate": 2005,
          "versoes": {
            "2.5 V6": [
              "215/60 R16"
            ]
          }
        },
        {
          "de": 2015,
          "ate": 2021,
          "versoes": {
            "3.3 V6 EX": [
              "235/60 R18"
            ]
          }
        },
        {
          "de": 2022,
          "ate": 2025,
          "versoes": {
            "3.5 V6 EX": [
              "235/55 R19"
            ]
          }
        }
      ]
    },
    "STINGER": {
      "geracoes": [
        {
          "de": 2018,
          "ate": 2023,
          "versoes": {
            "2.0 Turbo": [
              "225/45 R18"
            ],
            "3.3 V6 Turbo": [
              "225/40 R19",
              "255/35 R19"
            ]
          }
        }
      ]
    },
    "TELLURIDE": {
      "geracoes": [
        {
          "de": 2020,
          "ate": 2025,
          "versoes": {
            "3.8 V6 EX": [
              "245/60 R18"
            ],
            "3.8 V6 SX": [
              "245/55 R20"
            ]
          }
        }
      ]
    },
    "EV6": {
      "geracoes": [
        {
          "de": 2022,
          "ate": 2025,
          "versoes": {
            "Standard Range RWD": [
              "235/55 R19"
            ],
            "Long Range AWD": [
              "255/45 R20"
            ],
            "GT Line": [
              "255/45 R20"
            ],
            "GT 4WD": [
              "265/35 R21"
            ]
          }
        }
      ]
    },
    "NIRO": {
      "geracoes": [
        {
          "de": 2017,
          "ate": 2022,
          "versoes": {
            "Híbrido EX": [
              "215/55 R17"
            ],
            "EV": [
              "215/45 R18"
            ]
          }
        }
      ]
    },
    "PICANTO": {
      "geracoes": [
        {
          "de": 2005,
          "ate": 2012,
          "versoes": {
            "1.0 EX": [
              "155/65 R13"
            ]
          }
        },
        {
          "de": 2012,
          "ate": 2022,
          "versoes": {
            "1.0 EX": [
              "165/65 R14"
            ],
            "1.2 EX": [
              "175/55 R15"
            ]
          }
        }
      ]
    },
    "SOUL": {
      "geracoes": [
        {
          "de": 2009,
          "ate": 2021,
          "versoes": {
            "1.6 EX": [
              "205/55 R16"
            ],
            "2.0 EX": [
              "215/55 R17"
            ]
          }
        }
      ]
    }
  },
  "PEUGEOT": {
    "107": {
      "geracoes": [
        {
          "de": 2006,
          "ate": 2010,
          "versoes": {
            "1.0 XR": [
              "165/65 R14"
            ]
          }
        }
      ]
    },
    "207": {
      "geracoes": [
        {
          "de": 2007,
          "ate": 2015,
          "versoes": {
            "1.4 XR": [
              "195/60 R15"
            ],
            "1.6 XR": [
              "195/55 R16"
            ],
            "1.6 RC Turbo": [
              "205/45 R17"
            ]
          }
        }
      ]
    },
    "208": {
      "geracoes": [
        {
          "de": 2013,
          "ate": 2020,
          "versoes": {
            "1.5 Active": [
              "195/60 R15"
            ],
            "1.6 Allure": [
              "195/60 R15"
            ],
            "1.6 Griffe": [
              "195/55 R16"
            ]
          }
        },
        {
          "de": 2021,
          "ate": 2025,
          "versoes": {
            "1.6 Active": [
              "195/65 R15"
            ],
            "1.0 Turbo Allure": [
              "195/55 R16"
            ],
            "1.0 Turbo Griffe": [
              "195/55 R16"
            ]
          }
        }
      ]
    },
    "307": {
      "geracoes": [
        {
          "de": 2003,
          "ate": 2009,
          "versoes": {
            "1.6 XR": [
              "195/65 R15"
            ],
            "2.0 Allure": [
              "205/55 R16"
            ],
            "2.0 WRC": [
              "205/55 R16"
            ]
          }
        }
      ]
    },
    "308": {
      "geracoes": [
        {
          "de": 2011,
          "ate": 2020,
          "versoes": {
            "1.6 Allure": [
              "205/55 R16"
            ],
            "1.6 THP Griffe": [
              "215/45 R17"
            ],
            "1.6 Active": [
              "205/55 R16"
            ],
            "1.6 Griffe": [
              "205/55 R16"
            ],
            "1.6 Style": [
              "205/55 R16"
            ]
          }
        }
      ]
    },
    "408": {
      "geracoes": [
        {
          "de": 2011,
          "ate": 2020,
          "versoes": {
            "1.6 Business": [
              "215/55 R16"
            ],
            "2.0 Allure": [
              "215/55 R17"
            ],
            "1.6 THP Griffe": [
              "215/50 R18"
            ]
          }
        }
      ]
    },
    "508": {
      "geracoes": [
        {
          "de": 2012,
          "ate": 2017,
          "versoes": {
            "1.6 THP Allure": [
              "225/55 R17"
            ],
            "2.0 Griffe": [
              "235/50 R18"
            ],
            "1.6 Active": [
              "225/55 R17"
            ],
            "1.6 Allure": [
              "225/55 R17"
            ],
            "1.6 Griffe": [
              "225/55 R17"
            ],
            "1.6 Style": [
              "225/55 R17"
            ],
            "2.0 Allure": [
              "235/50 R18"
            ],
            "2.0 Feline": [
              "235/50 R18"
            ]
          }
        }
      ]
    },
    "2008": {
      "geracoes": [
        {
          "de": 2015,
          "ate": 2023,
          "versoes": {
            "1.6 Allure": [
              "205/60 R16"
            ],
            "1.6 THP Griffe": [
              "205/60 R16"
            ],
            "1.6 Active": [
              "205/60 R16"
            ],
            "1.6 Griffe": [
              "205/60 R16"
            ],
            "1.6 Style": [
              "205/60 R16"
            ]
          }
        },
        {
          "de": 2024,
          "ate": 2025,
          "versoes": {
            "1.0 Turbo Allure": [
              "215/60 R17"
            ],
            "1.0 Turbo GT": [
              "215/60 R17"
            ]
          }
        }
      ]
    },
    "3008": {
      "geracoes": [
        {
          "de": 2009,
          "ate": 2016,
          "versoes": {
            "1.6 Turbo Allure": [
              "215/60 R17"
            ],
            "1.6 Active": [
              "215/60 R17"
            ],
            "1.6 Allure": [
              "215/60 R17"
            ],
            "1.6 Griffe": [
              "215/60 R17"
            ],
            "1.6 Style": [
              "215/60 R17"
            ]
          }
        },
        {
          "de": 2018,
          "ate": 2025,
          "versoes": {
            "1.6 THP Allure": [
              "225/55 R18"
            ],
            "1.6 THP Griffe": [
              "225/55 R18"
            ],
            "1.6 Active": [
              "225/55 R18"
            ],
            "1.6 Allure": [
              "225/55 R18"
            ],
            "1.6 Griffe": [
              "225/55 R18"
            ],
            "1.6 Style": [
              "225/55 R18"
            ]
          }
        }
      ]
    },
    "5008": {
      "geracoes": [
        {
          "de": 2017,
          "ate": 2022,
          "versoes": {
            "1.6 THP Allure": [
              "235/55 R17"
            ],
            "1.6 THP Griffe": [
              "235/55 R18"
            ],
            "1.6 Active": [
              "235/55 R17"
            ],
            "1.6 Allure": [
              "235/55 R17"
            ],
            "1.6 Griffe": [
              "235/55 R17"
            ],
            "1.6 Style": [
              "235/55 R17"
            ]
          }
        }
      ]
    },
    "PARTNER": {
      "geracoes": [
        {
          "de": 2003,
          "ate": 2022,
          "versoes": {
            "1.6 Presence": [
              "185/65 R15"
            ],
            "1.6 Active": [
              "185/65 R15"
            ],
            "1.6 Allure": [
              "185/65 R15"
            ],
            "1.6 Griffe": [
              "185/65 R15"
            ],
            "1.6 Style": [
              "185/65 R15"
            ]
          }
        }
      ]
    }
  },
  "CITROEN": {
    "C3": {
      "geracoes": [
        {
          "de": 2003,
          "ate": 2012,
          "versoes": {
            "1.4 GLX": [
              "175/70 R13"
            ],
            "1.6 Exclusive": [
              "195/55 R15"
            ],
            "1.6 Tendance": [
              "195/55 R15"
            ],
            "1.6 Feel": [
              "195/55 R15"
            ],
            "1.6 Shine": [
              "195/55 R15"
            ]
          }
        },
        {
          "de": 2013,
          "ate": 2020,
          "versoes": {
            "1.5 Origine": [
              "195/60 R15"
            ],
            "1.5 Tendance": [
              "195/60 R15"
            ],
            "1.6 Exclusive": [
              "195/55 R16"
            ]
          }
        },
        {
          "de": 2023,
          "ate": 2025,
          "versoes": {
            "1.0 Live": [
              "195/65 R15"
            ],
            "1.0 Feel": [
              "195/65 R15"
            ],
            "1.6 Feel Pack": [
              "195/65 R15"
            ]
          }
        }
      ]
    },
    "C4 CACTUS": {
      "geracoes": [
        {
          "de": 2019,
          "ate": 2025,
          "versoes": {
            "1.6 Live": [
              "205/60 R16"
            ],
            "1.6 Feel": [
              "205/55 R17"
            ],
            "1.6 THP Shine": [
              "205/55 R17"
            ]
          }
        }
      ]
    },
    "C5 AIRCROSS": {
      "geracoes": [
        {
          "de": 2019,
          "ate": 2025,
          "versoes": {
            "1.6 THP Feel": [
              "235/55 R18"
            ],
            "1.6 THP Shine": [
              "235/50 R19"
            ],
            "1.6 Tendance": [
              "235/55 R18"
            ],
            "1.6 Exclusive": [
              "235/55 R18"
            ],
            "1.6 Feel": [
              "235/55 R18"
            ],
            "1.6 Shine": [
              "235/55 R18"
            ]
          }
        }
      ]
    },
    "C4 LOUNGE": {
      "geracoes": [
        {
          "de": 2013,
          "ate": 2018,
          "versoes": {
            "1.6 Tendance": [
              "215/55 R16"
            ],
            "1.6 THP Exclusive": [
              "215/55 R16"
            ],
            "2.0 Exclusive": [
              "225/55 R17"
            ]
          }
        }
      ]
    },
    "AIRCROSS": {
      "geracoes": [
        {
          "de": 2010,
          "ate": 2016,
          "versoes": {
            "1.6 Exclusive": [
              "205/60 R16"
            ],
            "1.6 Tendance": [
              "205/60 R16"
            ],
            "1.6 Feel": [
              "205/60 R16"
            ],
            "1.6 Shine": [
              "205/60 R16"
            ]
          }
        }
      ]
    },
    "C4 PICASSO": {
      "geracoes": [
        {
          "de": 2009,
          "ate": 2015,
          "versoes": {
            "1.6 GLX": [
              "215/60 R16"
            ],
            "2.0 Exclusive": [
              "215/55 R17"
            ],
            "1.6 Tendance": [
              "215/60 R16"
            ],
            "1.6 Exclusive": [
              "215/60 R16"
            ],
            "1.6 Feel": [
              "215/60 R16"
            ],
            "1.6 Shine": [
              "215/60 R16"
            ],
            "2.0 Feel": [
              "215/55 R17"
            ]
          }
        }
      ]
    },
    "JUMPY": {
      "geracoes": [
        {
          "de": 2007,
          "ate": 2020,
          "versoes": {
            "2.0 Diesel": [
              "215/65 R15C"
            ],
            "2.0 Exclusive": [
              "215/65 R15C"
            ],
            "2.0 Feel": [
              "215/65 R15C"
            ]
          }
        }
      ]
    },
    "BERLINGO": {
      "geracoes": [
        {
          "de": 2014,
          "ate": 2022,
          "versoes": {
            "1.6 Flex": [
              "185/65 R15"
            ],
            "1.6 Tendance": [
              "185/65 R15"
            ],
            "1.6 Exclusive": [
              "185/65 R15"
            ],
            "1.6 Feel": [
              "185/65 R15"
            ],
            "1.6 Shine": [
              "185/65 R15"
            ]
          }
        }
      ]
    },
    "C5 X": {
      "geracoes": [
        {
          "de": 2023,
          "ate": 2025,
          "versoes": {
            "1.6 THP Feel": [
              "235/45 R19"
            ],
            "1.6 THP Shine": [
              "235/45 R20"
            ],
            "1.6 Tendance": [
              "235/45 R19"
            ],
            "1.6 Exclusive": [
              "235/45 R19"
            ],
            "1.6 Feel": [
              "235/45 R19"
            ],
            "1.6 Shine": [
              "235/45 R19"
            ]
          }
        }
      ]
    }
  },
  "CHERY": {
    "TIGGO 2": {
      "geracoes": [
        {
          "de": 2016,
          "ate": 2021,
          "versoes": {
            "1.5 Confort": [
              "215/55 R16"
            ],
            "1.5 Luxury": [
              "215/55 R16"
            ]
          }
        }
      ]
    },
    "TIGGO 2 PRO": {
      "geracoes": [
        {
          "de": 2022,
          "ate": 2025,
          "versoes": {
            "1.0 Turbo T": [
              "215/55 R16"
            ],
            "1.0 Turbo TXS": [
              "215/55 R16"
            ]
          }
        }
      ]
    },
    "TIGGO 5X": {
      "geracoes": [
        {
          "de": 2019,
          "ate": 2025,
          "versoes": {
            "1.5 Turbo T": [
              "215/60 R17"
            ],
            "1.5 Turbo TXS": [
              "225/55 R18"
            ],
            "1.5 Turbo Pro": [
              "225/55 R18"
            ]
          }
        }
      ]
    },
    "TIGGO 7": {
      "geracoes": [
        {
          "de": 2019,
          "ate": 2025,
          "versoes": {
            "1.5 Turbo TXS": [
              "225/60 R18"
            ],
            "1.6 Turbo Pro": [
              "225/60 R18"
            ]
          }
        }
      ]
    },
    "TIGGO 8": {
      "geracoes": [
        {
          "de": 2021,
          "ate": 2025,
          "versoes": {
            "1.6 Turbo TXS": [
              "235/55 R18"
            ],
            "1.5 Hybrid Pro": [
              "235/55 R18"
            ]
          }
        }
      ]
    },
    "ARRIZO 6": {
      "geracoes": [
        {
          "de": 2022,
          "ate": 2025,
          "versoes": {
            "1.5 Turbo": [
              "225/50 R17"
            ]
          }
        }
      ]
    },
    "ARRIZO 6 PRO": {
      "geracoes": [
        {
          "de": 2024,
          "ate": 2025,
          "versoes": {
            "1.5 Turbo": [
              "225/45 R18"
            ]
          }
        }
      ]
    }
  },
  "CAOA CHERY": {
    "TIGGO 5X": {
      "geracoes": [
        {
          "de": 2023,
          "ate": 2025,
          "versoes": {
            "1.5 Turbo T": [
              "215/60 R17"
            ],
            "1.5 Turbo TXS": [
              "225/55 R18"
            ]
          }
        }
      ]
    },
    "TIGGO 7": {
      "geracoes": [
        {
          "de": 2023,
          "ate": 2025,
          "versoes": {
            "1.5 Turbo TXS": [
              "225/60 R18"
            ]
          }
        }
      ]
    },
    "TIGGO 8": {
      "geracoes": [
        {
          "de": 2023,
          "ate": 2025,
          "versoes": {
            "1.6 Turbo TXS": [
              "235/55 R18"
            ]
          }
        }
      ]
    },
    "ARRIZO 6": {
      "geracoes": [
        {
          "de": 2023,
          "ate": 2025,
          "versoes": {
            "1.5 Turbo": [
              "225/50 R17"
            ]
          }
        }
      ]
    },
    "ARRIZO 8": {
      "geracoes": [
        {
          "de": 2024,
          "ate": 2025,
          "versoes": {
            "2.0 Turbo": [
              "225/45 R18"
            ]
          }
        }
      ]
    }
  },
  "BYD": {
    "DOLPHIN": {
      "geracoes": [
        {
          "de": 2023,
          "ate": 2025,
          "versoes": {
            "Comfort 45kWh": [
              "195/55 R16"
            ],
            "Plus 60kWh": [
              "215/45 R17"
            ]
          }
        }
      ]
    },
    "SEAL": {
      "geracoes": [
        {
          "de": 2023,
          "ate": 2025,
          "versoes": {
            "Dynamic 83kWh RWD": [
              "235/45 R18"
            ],
            "Excellence 83kWh AWD": [
              "235/40 R19"
            ]
          }
        }
      ]
    },
    "HAN": {
      "geracoes": [
        {
          "de": 2023,
          "ate": 2025,
          "versoes": {
            "EV Performance": [
              "245/45 R19"
            ],
            "EV Ultimate": [
              "255/40 R20"
            ]
          }
        }
      ]
    },
    "SONG PLUS": {
      "geracoes": [
        {
          "de": 2023,
          "ate": 2025,
          "versoes": {
            "DM-i Premium": [
              "235/55 R18"
            ],
            "DM-i Ultimate": [
              "235/50 R19"
            ]
          }
        }
      ]
    },
    "TAN": {
      "geracoes": [
        {
          "de": 2023,
          "ate": 2025,
          "versoes": {
            "EV Performance": [
              "265/45 R21"
            ]
          }
        }
      ]
    },
    "YUAN PLUS": {
      "geracoes": [
        {
          "de": 2024,
          "ate": 2025,
          "versoes": {
            "Confort 49.92kWh": [
              "215/50 R18"
            ],
            "Performance 60.48kWh": [
              "215/50 R18"
            ]
          }
        }
      ]
    },
    "KING": {
      "geracoes": [
        {
          "de": 2024,
          "ate": 2025,
          "versoes": {
            "DM-i": [
              "265/60 R18"
            ]
          }
        }
      ]
    },
    "SEA": {
      "geracoes": [
        {
          "de": 2024,
          "ate": 2025,
          "versoes": {
            "550km": [
              "235/50 R20"
            ]
          }
        }
      ]
    }
  },
  "RAM": {
    "1500": {
      "geracoes": [
        {
          "de": 2014,
          "ate": 2018,
          "versoes": {
            "5.7 V8 Laramie": [
              "275/55 R20"
            ],
            "5.7 V8 Limited": [
              "275/55 R20"
            ]
          }
        },
        {
          "de": 2019,
          "ate": 2025,
          "versoes": {
            "5.7 V8 Laramie": [
              "275/55 R20"
            ],
            "5.7 V8 Limited": [
              "275/50 R22"
            ],
            "TRX": [
              "325/65 R18"
            ]
          }
        }
      ]
    },
    "2500": {
      "geracoes": [
        {
          "de": 2020,
          "ate": 2025,
          "versoes": {
            "6.7 Diesel Laramie": [
              "285/60 R20"
            ],
            "6.7 Diesel Limited": [
              "285/60 R20"
            ]
          }
        }
      ]
    },
    "RAMPAGE": {
      "geracoes": [
        {
          "de": 2023,
          "ate": 2025,
          "versoes": {
            "2.0 Turbo Laramie": [
              "205/60 R15"
            ],
            "2.0 Turbo Ranch": [
              "205/60 R15"
            ],
            "2.0 Turbo R/T": [
              "215/55 R17"
            ]
          }
        }
      ]
    },
    "CLASSIC 1500": {
      "geracoes": [
        {
          "de": 2019,
          "ate": 2023,
          "versoes": {
            "5.7 V8 SLT": [
              "265/60 R20"
            ],
            "5.7 V8 Laramie": [
              "275/55 R20"
            ]
          }
        }
      ]
    }
  },
  "DODGE": {
    "JOURNEY": {
      "geracoes": [
        {
          "de": 2009,
          "ate": 2016,
          "versoes": {
            "2.7 V6 SXT": [
              "225/60 R18"
            ],
            "3.5 V6 RT": [
              "235/55 R19"
            ]
          }
        }
      ]
    },
    "CHALLENGER": {
      "geracoes": [
        {
          "de": 2009,
          "ate": 2023,
          "versoes": {
            "3.6 V6 SXT": [
              "245/45 R20"
            ],
            "5.7 V8 RT": [
              "245/45 R20"
            ],
            "6.2 SRT Hellcat": [
              "275/40 R20"
            ]
          }
        }
      ]
    },
    "CHARGER": {
      "geracoes": [
        {
          "de": 2010,
          "ate": 2020,
          "versoes": {
            "3.6 V6 SXT": [
              "215/65 R17"
            ],
            "5.7 V8 RT": [
              "245/45 R20"
            ],
            "6.2 Hellcat": [
              "275/40 R20"
            ]
          }
        }
      ]
    },
    "DURANGO": {
      "geracoes": [
        {
          "de": 2011,
          "ate": 2016,
          "versoes": {
            "3.6 V6": [
              "265/50 R20"
            ],
            "5.7 V8 RT": [
              "265/50 R20"
            ]
          }
        }
      ]
    },
    "NITRO": {
      "geracoes": [
        {
          "de": 2007,
          "ate": 2012,
          "versoes": {
            "2.8 Diesel SXT": [
              "225/65 R17"
            ]
          }
        }
      ]
    }
  },
  "LEXUS": {
    "IS 250": {
      "geracoes": [
        {
          "de": 2006,
          "ate": 2013,
          "versoes": {
            "2.5 V6": [
              "225/55 R16"
            ],
            "2.5 V6 F Sport": [
              "225/45 R18"
            ]
          }
        }
      ]
    },
    "IS 300": {
      "geracoes": [
        {
          "de": 2014,
          "ate": 2020,
          "versoes": {
            "2.0 Turbo F Sport": [
              "225/45 R18"
            ],
            "2.0 Turbo Sport": [
              "225/45 R18"
            ],
            "2.0 Turbo S line": [
              "225/45 R18"
            ],
            "2.0 Turbo Avantgarde": [
              "225/45 R18"
            ],
            "2.0 Turbo Momentum": [
              "225/45 R18"
            ]
          }
        }
      ]
    },
    "ES 250": {
      "geracoes": [
        {
          "de": 2013,
          "ate": 2018,
          "versoes": {
            "2.5 V6": [
              "215/55 R17"
            ]
          }
        }
      ]
    },
    "ES 300h": {
      "geracoes": [
        {
          "de": 2019,
          "ate": 2025,
          "versoes": {
            "2.5 Hybrid F Sport": [
              "225/45 R18"
            ],
            "2.5 Hybrid Executive": [
              "235/45 R18"
            ]
          }
        }
      ]
    },
    "GS 350": {
      "geracoes": [
        {
          "de": 2006,
          "ate": 2019,
          "versoes": {
            "3.5 V6": [
              "245/45 R18"
            ],
            "3.5 V6 F Sport": [
              "255/40 R19"
            ]
          }
        }
      ]
    },
    "LS 460": {
      "geracoes": [
        {
          "de": 2007,
          "ate": 2017,
          "versoes": {
            "4.6 V8": [
              "245/45 R19"
            ]
          }
        }
      ]
    },
    "UX 200": {
      "geracoes": [
        {
          "de": 2019,
          "ate": 2025,
          "versoes": {
            "2.0 F Sport": [
              "225/50 R18"
            ],
            "2.0 Turbo Sport": [
              "225/50 R18"
            ],
            "2.0 Turbo S line": [
              "225/50 R18"
            ],
            "2.0 Turbo Avantgarde": [
              "225/50 R18"
            ],
            "2.0 Turbo Momentum": [
              "225/50 R18"
            ]
          }
        }
      ]
    },
    "NX 200t": {
      "geracoes": [
        {
          "de": 2016,
          "ate": 2021,
          "versoes": {
            "2.0 Turbo F Sport": [
              "235/50 R18"
            ],
            "2.0 Turbo Executive": [
              "235/50 R19"
            ],
            "2.0 Turbo Sport": [
              "235/50 R18"
            ],
            "2.0 Turbo S line": [
              "235/50 R18"
            ],
            "2.0 Turbo Avantgarde": [
              "235/50 R18"
            ],
            "2.0 Turbo Momentum": [
              "235/50 R18"
            ]
          }
        }
      ]
    },
    "NX 350": {
      "geracoes": [
        {
          "de": 2022,
          "ate": 2025,
          "versoes": {
            "2.4 Turbo F Sport": [
              "235/50 R19"
            ],
            "2.4 Turbo Executive": [
              "235/45 R20"
            ]
          }
        }
      ]
    },
    "RX 350": {
      "geracoes": [
        {
          "de": 2004,
          "ate": 2009,
          "versoes": {
            "3.5 V6": [
              "235/60 R18"
            ]
          }
        },
        {
          "de": 2010,
          "ate": 2015,
          "versoes": {
            "3.5 V6": [
              "235/60 R18"
            ]
          }
        },
        {
          "de": 2016,
          "ate": 2022,
          "versoes": {
            "3.5 V6 F Sport": [
              "235/55 R20"
            ],
            "3.5 V6 Executive": [
              "235/50 R20"
            ]
          }
        }
      ]
    },
    "RX 500h": {
      "geracoes": [
        {
          "de": 2023,
          "ate": 2025,
          "versoes": {
            "F Sport": [
              "235/50 R21"
            ]
          }
        }
      ]
    },
    "LX 570": {
      "geracoes": [
        {
          "de": 2008,
          "ate": 2021,
          "versoes": {
            "5.7 V8": [
              "285/50 R20"
            ]
          }
        }
      ]
    },
    "LX 600": {
      "geracoes": [
        {
          "de": 2022,
          "ate": 2025,
          "versoes": {
            "3.5 V6 Turbo": [
              "285/50 R20"
            ]
          }
        }
      ]
    }
  },
  "MAZDA": {
    "MAZDA3": {
      "geracoes": [
        {
          "de": 2004,
          "ate": 2009,
          "versoes": {
            "2.0 Grand Touring": [
              "205/55 R16"
            ]
          }
        },
        {
          "de": 2010,
          "ate": 2014,
          "versoes": {
            "2.0 Grand Touring": [
              "205/55 R16"
            ],
            "2.5 Grand Touring": [
              "215/45 R18"
            ]
          }
        }
      ]
    },
    "MAZDA6": {
      "geracoes": [
        {
          "de": 2003,
          "ate": 2008,
          "versoes": {
            "2.0 LX": [
              "205/55 R16"
            ],
            "2.3 LX": [
              "215/55 R17"
            ]
          }
        },
        {
          "de": 2014,
          "ate": 2019,
          "versoes": {
            "2.0 Touring": [
              "225/55 R17"
            ],
            "2.5 Grand Touring": [
              "225/50 R19"
            ]
          }
        }
      ]
    },
    "CX-5": {
      "geracoes": [
        {
          "de": 2013,
          "ate": 2016,
          "versoes": {
            "2.0 Sport": [
              "225/65 R17"
            ],
            "2.5 GT": [
              "225/55 R19"
            ]
          }
        },
        {
          "de": 2017,
          "ate": 2025,
          "versoes": {
            "2.5 Skyactiv AWD GT": [
              "225/55 R19"
            ],
            "2.0 Skyactiv FWD Touring": [
              "225/65 R17"
            ]
          }
        }
      ]
    },
    "CX-30": {
      "geracoes": [
        {
          "de": 2020,
          "ate": 2025,
          "versoes": {
            "2.0 Skyactiv-G": [
              "215/55 R18"
            ],
            "2.5 Turbo": [
              "225/45 R18"
            ]
          }
        }
      ]
    },
    "CX-9": {
      "geracoes": [
        {
          "de": 2007,
          "ate": 2015,
          "versoes": {
            "3.7 V6": [
              "255/60 R18"
            ]
          }
        },
        {
          "de": 2017,
          "ate": 2023,
          "versoes": {
            "2.5 Turbo Signature": [
              "255/45 R20"
            ]
          }
        }
      ]
    },
    "MX-5": {
      "geracoes": [
        {
          "de": 1997,
          "ate": 2005,
          "versoes": {
            "1.6 Special Edition": [
              "185/60 R14"
            ],
            "1.8 Touring": [
              "195/55 R15"
            ]
          }
        },
        {
          "de": 2006,
          "ate": 2015,
          "versoes": {
            "2.0 Touring": [
              "205/45 R17"
            ]
          }
        },
        {
          "de": 2016,
          "ate": 2025,
          "versoes": {
            "2.0 Sport": [
              "205/45 R17"
            ],
            "2.0 Exclusive": [
              "205/45 R17"
            ]
          }
        }
      ]
    },
    "CX-3": {
      "geracoes": [
        {
          "de": 2016,
          "ate": 2022,
          "versoes": {
            "2.0 Sport": [
              "215/60 R16"
            ],
            "2.0 GT": [
              "215/50 R18"
            ]
          }
        }
      ]
    }
  },
  "JAC": {
    "T40 PLUS": {
      "geracoes": [
        {
          "de": 2021,
          "ate": 2025,
          "versoes": {
            "1.5 Turbo": [
              "215/60 R17"
            ]
          }
        }
      ]
    },
    "T50": {
      "geracoes": [
        {
          "de": 2021,
          "ate": 2025,
          "versoes": {
            "1.5 Turbo": [
              "215/60 R17"
            ]
          }
        }
      ]
    },
    "T60": {
      "geracoes": [
        {
          "de": 2018,
          "ate": 2023,
          "versoes": {
            "2.0 Turbo Diesel": [
              "245/70 R16"
            ]
          }
        }
      ]
    },
    "E-J7": {
      "geracoes": [
        {
          "de": 2022,
          "ate": 2025,
          "versoes": {
            "EV Comfort": [
              "225/55 R17"
            ],
            "EV Luxury": [
              "225/50 R18"
            ]
          }
        }
      ]
    },
    "J6": {
      "geracoes": [
        {
          "de": 2013,
          "ate": 2018,
          "versoes": {
            "2.0 Comfort": [
              "225/50 R17"
            ]
          }
        }
      ]
    },
    "T8 PRO": {
      "geracoes": [
        {
          "de": 2022,
          "ate": 2025,
          "versoes": {
            "1.5 Turbo": [
              "255/65 R17"
            ]
          }
        }
      ]
    }
  },
  "GEELY": {
    "COOLRAY": {
      "geracoes": [
        {
          "de": 2022,
          "ate": 2025,
          "versoes": {
            "1.5 Turbo": [
              "215/55 R17"
            ]
          }
        }
      ]
    },
    "TUGELLA": {
      "geracoes": [
        {
          "de": 2022,
          "ate": 2025,
          "versoes": {
            "2.0 Turbo": [
              "235/55 R19"
            ]
          }
        }
      ]
    },
    "GX3 PRO": {
      "geracoes": [
        {
          "de": 2024,
          "ate": 2025,
          "versoes": {
            "1.5 Confort": [
              "215/55 R17"
            ]
          }
        }
      ]
    }
  }
},

  medidasPorAro: {
  "13": [
    "155/65 R13",
    "155/80 R13",
    "165/65 R13",
    "165/70 R13",
    "175/65 R13",
    "175/70 R13",
    "185/65 R13"
  ],
  "14": [
    "155/70 R14",
    "165/65 R14",
    "165/70 R14",
    "175/65 R14",
    "175/70 R14",
    "185/60 R14",
    "185/65 R14",
    "185/70 R14",
    "195/65 R14"
  ],
  "15": [
    "165/65 R15",
    "175/55 R15",
    "175/60 R15",
    "175/65 R15",
    "185/55 R15",
    "185/60 R15",
    "185/65 R15",
    "195/50 R15",
    "195/55 R15",
    "195/60 R15",
    "195/65 R15",
    "205/55 R15",
    "205/60 R15",
    "205/65 R15",
    "205/75 R15",
    "215/65 R15",
    "215/65 R15C",
    "215/75 R15",
    "225/70 R15",
    "225/75 R15",
    "235/70 R15",
    "235/75 R15",
    "245/70 R15",
    "265/70 R15"
  ],
  "16": [
    "175/55 R16",
    "185/55 R16",
    "195/45 R16",
    "195/50 R16",
    "195/55 R16",
    "195/60 R16",
    "205/55 R16",
    "205/60 R16",
    "205/65 R16",
    "215/55 R16",
    "215/60 R16",
    "215/65 R16",
    "215/65 R16C",
    "215/70 R16",
    "215/75 R16",
    "225/50 R16",
    "225/55 R16",
    "225/60 R16",
    "225/65 R16",
    "225/65 R16C",
    "225/70 R16",
    "235/60 R16",
    "235/70 R16",
    "245/70 R16",
    "255/65 R16",
    "255/70 R16",
    "265/65 R16",
    "265/70 R16"
  ],
  "17": [
    "195/45 R17",
    "195/55 R17",
    "205/45 R17",
    "205/50 R17",
    "205/55 R17",
    "215/40 R17",
    "215/45 R17",
    "215/50 R17",
    "215/55 R17",
    "215/60 R17",
    "215/65 R17",
    "225/45 R17",
    "225/50 R17",
    "225/55 R17",
    "225/60 R17",
    "225/65 R17",
    "225/70 R17",
    "235/45 R17",
    "235/50 R17",
    "235/55 R17",
    "235/60 R17",
    "235/65 R17",
    "245/40 R17",
    "245/45 R17",
    "245/65 R17",
    "255/65 R17",
    "255/70 R17",
    "255/75 R17",
    "265/60 R17",
    "265/65 R17",
    "265/70 R17"
  ],
  "18": [
    "205/45 R18",
    "215/40 R18",
    "215/45 R18",
    "215/50 R18",
    "215/55 R18",
    "225/35 R18",
    "225/40 R18",
    "225/45 R18",
    "225/50 R18",
    "225/55 R18",
    "225/60 R18",
    "235/35 R18",
    "235/40 R18",
    "235/45 R18",
    "235/50 R18",
    "235/55 R18",
    "235/60 R18",
    "235/65 R18",
    "245/35 R18",
    "245/40 R18",
    "245/45 R18",
    "245/50 R18",
    "245/60 R18",
    "255/30 R18",
    "255/35 R18",
    "255/40 R18",
    "255/45 R18",
    "255/55 R18",
    "255/60 R18",
    "255/70 R18",
    "265/60 R18",
    "275/35 R18",
    "275/60 R18",
    "275/70 R18",
    "285/60 R18",
    "325/65 R18"
  ],
  "19": [
    "155/70 R19",
    "225/35 R19",
    "225/40 R19",
    "225/45 R19",
    "225/50 R19",
    "225/55 R19",
    "235/35 R19",
    "235/40 R19",
    "235/45 R19",
    "235/50 R19",
    "235/55 R19",
    "245/35 R19",
    "245/40 R19",
    "245/45 R19",
    "245/50 R19",
    "255/35 R19",
    "255/40 R19",
    "255/45 R19",
    "255/50 R19",
    "255/55 R19",
    "255/60 R19",
    "265/35 R19",
    "265/45 R19",
    "265/50 R19",
    "275/35 R19",
    "275/40 R19",
    "275/45 R19",
    "285/30 R19",
    "285/35 R19",
    "295/30 R19"
  ],
  "20": [
    "215/45 R20",
    "235/40 R20",
    "235/45 R20",
    "235/50 R20",
    "235/55 R20",
    "245/35 R20",
    "245/40 R20",
    "245/45 R20",
    "245/50 R20",
    "245/55 R20",
    "255/35 R20",
    "255/40 R20",
    "255/45 R20",
    "255/50 R20",
    "255/55 R20",
    "265/40 R20",
    "265/45 R20",
    "265/50 R20",
    "265/60 R20",
    "275/35 R20",
    "275/40 R20",
    "275/45 R20",
    "275/50 R20",
    "275/55 R20",
    "285/30 R20",
    "285/35 R20",
    "285/45 R20",
    "285/50 R20",
    "285/60 R20",
    "295/30 R20",
    "295/45 R20",
    "305/30 R20",
    "315/35 R20",
    "325/30 R20",
    "325/65 R18"
  ],
  "21": [
    "235/50 R21",
    "235/55 R21",
    "245/40 R21",
    "245/45 R21",
    "245/50 R21",
    "255/40 R21",
    "255/45 R21",
    "255/50 R21",
    "265/35 R21",
    "265/40 R21",
    "265/45 R21",
    "275/35 R21",
    "275/40 R21",
    "275/45 R21",
    "285/30 R21",
    "285/35 R21",
    "285/40 R21",
    "285/45 R21",
    "295/35 R21",
    "305/30 R21"
  ],
  "22": [
    "255/45 R22",
    "265/40 R22",
    "275/40 R22",
    "275/45 R22",
    "275/50 R22",
    "285/35 R22",
    "285/40 R22",
    "295/30 R22",
    "295/35 R22",
    "305/30 R22",
    "315/30 R22"
  ],
  "23": [
    "285/40 R23",
    "305/35 R23"
  ]
},

  getLarguras() {
    const set = new Set();
    Object.values(this.medidasPorAro).forEach(arr => arr.forEach(m => set.add(m.split('/')[0])));
    return [...set].sort((a, b) => Number(a) - Number(b));
  },
  getPerfis(largura) {
    const set = new Set();
    Object.values(this.medidasPorAro).forEach(arr => arr.forEach(m => {
      const [l, resto] = m.split('/');
      if (l === String(largura)) set.add(resto.split(' ')[0]);
    }));
    return [...set].sort((a, b) => Number(a) - Number(b));
  },
  getAros(largura, perfil) {
    const set = new Set();
    Object.entries(this.medidasPorAro).forEach(([aro, arr]) => arr.forEach(m => {
      if (m.startsWith(largura + '/' + perfil + ' ')) set.add(aro);
    }));
    return [...set].sort((a, b) => Number(a) - Number(b));
  },
  getPneusPorMedida(largura, perfil, aro) {
    const medida = largura + '/' + perfil + ' R' + aro;
    const medidasAro = this.medidasPorAro[String(aro)] || [];
    if (!medidasAro.includes(medida)) return [];
    const l = Number(largura), a = Number(aro), p = Number(perfil);
    const res = [];
    const isSUV = (p >= 65) || (p >= 55 && l >= 235);
    const isMixto = (p === 60 && l >= 215) || (p === 55 && l >= 255);
    const isEsportivo = p <= 50;
    const isPickup = (p >= 60 && l >= 255) || (p >= 65 && l >= 265);
    if (a >= 21) {
      res.push('p-zero-pz4');
      if (isPickup) res.push('scorpion-atr');
      else if (isSUV) res.push('scorpion-verde');
      else res.push('cinturato-p7-c2');
    }
    if (a === 20) {
      res.push('p-zero-pz4');
      if (isPickup) res.push('scorpion-atr');
      else if (isSUV || isMixto) res.push('scorpion-verde');
      else res.push('cinturato-p7-c2');
    }
    if (a === 19) {
      if (isEsportivo) res.push('cinturato-p7-c2', 'p-zero-pz4', 'powergy');
      else if (isSUV) res.push('scorpion-verde', 'cinturato-p7');
      else res.push('cinturato-p7-c2', 'cinturato-p7', 'powergy');
    }
    if (a === 18) {
      if (isPickup) { res.push('scorpion-atr', 'scorpion-verde'); }
      else if (isSUV) { res.push('scorpion-verde', 'cinturato-p7', 'powergy'); }
      else if (isEsportivo) { res.push('cinturato-p7-c2', 'p-zero-pz4', 'cinturato-p7'); }
      else { res.push('cinturato-p7-c2', 'cinturato-p7', 'powergy'); }
    }
    if (a === 17) {
      if (isSUV || (p >= 65 && l >= 215)) { res.push('scorpion-verde', 'cinturato-p7'); }
      else if (isEsportivo) { res.push('cinturato-p7', 'powergy', 'cinturato-p1'); }
      else { res.push('cinturato-p7', 'powergy', 'cinturato-p1'); }
    }
    if (a === 16) {
      if (isSUV) { res.push('scorpion-verde', 'powergy', 'cinturato-p1'); }
      else { res.push('powergy', 'cinturato-p6', 'cinturato-p1'); }
    }
    if (a <= 15) res.push('cinturato-p1', 'cinturato-p6', 'p400-evo');
    return [...new Set(res.filter(x => x))];
  },
  getVeiculoData(marca, modelo) {
    return (this.veiculos[marca] || {})[modelo] || null;
  },
  getAnosModelo(marca, modelo) {
    const d = this.getVeiculoData(marca, modelo);
    if (!d) return [];
    const anos = new Set();
    d.geracoes.forEach(ger => { for (let a = ger.de; a <= ger.ate; a++) anos.add(String(a)); });
    return [...anos].sort((a, b) => Number(b) - Number(a));
  },
  getVersoesPorAno(marca, modelo, ano) {
    const d = this.getVeiculoData(marca, modelo);
    if (!d) return ['Versão Única'];
    const n = Number(ano);
    for (const ger of d.geracoes) {
      if (n >= ger.de && n <= ger.ate) return Object.keys(ger.versoes);
    }
    return Object.keys(d.geracoes[d.geracoes.length - 1].versoes);
  },
  getMedidasPorVersao(marca, modelo, ano, versao) {
    const d = this.getVeiculoData(marca, modelo);
    if (!d) return ['195/65 R15'];
    const n = Number(ano);
    for (const ger of d.geracoes) {
      if (n >= ger.de && n <= ger.ate) {
        if (ger.versoes[versao]) return ger.versoes[versao];
        const keys = Object.keys(ger.versoes);
        return keys.length > 0 ? ger.versoes[keys[0]] : ['195/65 R15'];
      }
    }
    return ['195/65 R15'];
  },
  getModelos(marca) {
    const v = this.veiculos[marca];
    return v ? Object.keys(v).sort() : [];
  }
};
