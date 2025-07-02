{
  "form": {
    "name": "Ankèt - Resansman Debaz Kore Vwazen",
    "description": "",
    "record_title_key": "a340",
    "title_field_keys": [
      "a340",
      "8030"
    ],
    "status_field": {
      "type": "StatusField",
      "label": "Status",
      "key": "@status",
      "data_name": "status",
      "default_value": "Pou Fet",
      "enabled": true,
      "read_only": false,
      "hidden": false,
      "description": "",
      "choices": [
        {
          "label": "Pou Fet",
          "value": "Pou Fet",
          "color": "#CB0D0C"
        },
        {
          "label": "Ap Fet",
          "value": "Ap Fet",
          "color": "#FFD300"
        },
        {
          "label": "Fin Fet",
          "value": "Fin Fet",
          "color": "#2D5D00"
        }
      ],
      "required": false,
      "disabled": false,
      "default_previous_value": false
    },
    "auto_assign": false,
    "hidden_on_dashboard": false,
    "geometry_types": [
      "Point"
    ],
    "geometry_required": true,
    "script": "// This function will run whenever the age field changes\r\nfunction checkAgeAndSetActivity(event) {\r\n  // Get the current value of the age field\r\n  var age = VALUE('451_laj_moun_lan');\r\n  \r\n  // Check if the age value exists and is less than 7\r\n  if (age !== null && age !== undefined && age < 7) {\r\n    // Set the activity field to \"N/A\"\r\n    SETVALUE('423_eske_li_gen_yon_aktivite_ki_antre_kob', 'non aplikab');\r\n  }\r\n}\r\n\r\n// Listen for changes to the age field\r\nON('change', '451_laj_moun_lan', checkAgeAndSetActivity);\r\n\r\n// Also check when the form is first loaded (to handle existing records)\r\nON('load-record', checkAgeAndSetActivity);",
    "elements": [
      {
        "type": "Section",
        "key": "e100",
        "label": "1- Entèn",
        "description": null,
        "required": false,
        "disabled": false,
        "hidden": false,
        "data_name": "1_enten",
        "default_value": null,
        "visible_conditions_type": null,
        "visible_conditions_behavior": "clear",
        "visible_conditions": null,
        "required_conditions_type": null,
        "required_conditions": null,
        "display": "inline",
        "elements": [
          {
            "type": "ChoiceField",
            "key": "a340",
            "label": "1.1 Non Ankete A",
            "description": null,
            "required": true,
            "disabled": false,
            "hidden": false,
            "data_name": "11_non_ankete_a",
            "default_value": null,
            "visible_conditions_type": null,
            "visible_conditions_behavior": "clear",
            "visible_conditions": null,
            "required_conditions_type": null,
            "required_conditions": null,
            "ai_prompt": null,
            "multiple": false,
            "allow_other": false,
            "choices": [
              {
                "label": "Ankete 1",
                "value": "Ankete 1"
              },
              {
                "label": "Ankete 2",
                "value": "Ankete 2"
              },
              {
                "label": "Ankete 3",
                "value": "Ankete 3"
              },
              {
                "label": "Lot",
                "value": "Lot"
              }
            ],
            "default_previous_value": false
          },
          {
            "type": "YesNoField",
            "key": "91f0",
            "label": "1.3 Èske gen moun prezan ki ka reponn",
            "description": "Moun ki ka reponn se nenpot moun ki gen majorite enfomasyon menaj la",
            "required": true,
            "disabled": false,
            "hidden": false,
            "data_name": "13_eske_gen_moun_prezan_ki_ka_reponn",
            "default_value": null,
            "visible_conditions_type": null,
            "visible_conditions_behavior": "clear",
            "visible_conditions": null,
            "required_conditions_type": null,
            "required_conditions": null,
            "ai_prompt": null,
            "positive": {
              "label": "Wi",
              "value": "wi"
            },
            "negative": {
              "label": "Non",
              "value": "non"
            },
            "neutral": {
              "label": "NA",
              "value": "na"
            },
            "neutral_enabled": false,
            "default_previous_value": false
          },
          {
            "type": "YesNoField",
            "key": "1950",
            "label": "1.6 Èske gen moun ki abite - viv nan kay la",
            "description": "Si se yon kay ki jeneral pa gen moun ladan l w ap reponn non. ",
            "required": true,
            "disabled": false,
            "hidden": false,
            "data_name": "16_eske_gen_moun_ki_abite_viv_nan_kay_la",
            "default_value": null,
            "visible_conditions_type": "all",
            "visible_conditions_behavior": "clear",
            "visible_conditions": [
              {
                "field_key": "91f0",
                "operator": "equal_to",
                "value": "non"
              }
            ],
            "required_conditions_type": null,
            "required_conditions": null,
            "ai_prompt": null,
            "positive": {
              "label": "Wi",
              "value": "wi"
            },
            "negative": {
              "label": "Non",
              "value": "non"
            },
            "neutral": {
              "label": "N/A",
              "value": "n/a"
            },
            "neutral_enabled": false,
            "default_previous_value": false
          },
          {
            "type": "YesNoField",
            "key": "3dc0",
            "label": "1.4 Èske moun lan dakò reponn",
            "description": null,
            "required": true,
            "disabled": false,
            "hidden": false,
            "data_name": "14_eske_moun_lan_dako_reponn",
            "default_value": null,
            "visible_conditions_type": "all",
            "visible_conditions_behavior": "clear",
            "visible_conditions": [
              {
                "field_key": "91f0",
                "operator": "equal_to",
                "value": "wi"
              }
            ],
            "required_conditions_type": null,
            "required_conditions": null,
            "ai_prompt": null,
            "positive": {
              "label": "Wi",
              "value": "wi"
            },
            "negative": {
              "label": "Non",
              "value": "non"
            },
            "neutral": {
              "label": "N/A",
              "value": "n/a"
            },
            "neutral_enabled": false,
            "default_previous_value": false
          },
          {
            "type": "TextField",
            "key": "f500",
            "label": "1.5 Lòt enfòmasyon/komantè",
            "description": "Itilize sa pou enfomasyon ki enpotan/petinan ke moun nan te bay, men ki pat ka antre anba youn nan kesyon fiks yo",
            "required": true,
            "disabled": false,
            "hidden": false,
            "data_name": "15_lot_enfomasyon_komante",
            "default_value": null,
            "visible_conditions_type": null,
            "visible_conditions_behavior": "clear",
            "visible_conditions": null,
            "required_conditions_type": null,
            "required_conditions": null,
            "ai_prompt": null,
            "numeric": false,
            "pattern": null,
            "pattern_description": null,
            "min_length": null,
            "max_length": null,
            "default_previous_value": false
          }
        ]
      },
      {
        "type": "Section",
        "key": "bfd0",
        "label": "2. Karakteristik batiman ak menaj la",
        "description": null,
        "required": false,
        "disabled": false,
        "hidden": false,
        "data_name": "2_karakteristik_batiman_ak_menaj_la",
        "default_value": null,
        "visible_conditions_type": "all",
        "visible_conditions_behavior": "clear",
        "visible_conditions": [
          {
            "field_key": "91f0",
            "operator": "equal_to",
            "value": "wi"
          },
          {
            "field_key": "3dc0",
            "operator": "equal_to",
            "value": "wi"
          }
        ],
        "required_conditions_type": null,
        "required_conditions": null,
        "display": "inline",
        "elements": [
          {
            "type": "Label",
            "key": "1380",
            "label": "❌!!!Obsevasyon!!!❌\n\"Menaj\" se yon gwoup moun k ap viv ansanm anba menm twati a, ki pataje manje ak resous yo epi ki konsidere tèt yo kòm yon sèl inite nan kominote a oswa yi gen yon moun yo rekonèt kòm chèf menaj la. Yo ka gen lyen fanmi men sa pa yon obligasyon.",
            "description": null,
            "required": false,
            "disabled": false,
            "hidden": false,
            "data_name": "obsevasyonmenaj_se_yon_gwoup_moun_k_ap_viv_ansanm",
            "default_value": null,
            "visible_conditions_type": null,
            "visible_conditions_behavior": "clear",
            "visible_conditions": null,
            "required_conditions_type": null,
            "required_conditions": null
          },
          {
            "type": "TextField",
            "key": "6e3e",
            "label": "2.1 Konbyen moun ki ap viv nan menaj sa",
            "description": "❌!!!Obsevasyon!!!❌\n\"Menaj\" se yon gwoup moun k ap viv ansanm anba menm twati a, ki pataje manje ak resous yo epi ki konsidere tèt yo kòm yon sèl inite nan kominote a oswa yi gen yon moun yo rekonèt kòm chèf menaj la. Yo ka gen lyen fanmi men sa pa yon obligasyon.",
            "required": true,
            "disabled": false,
            "hidden": false,
            "data_name": "21_konbyen_moun_ki_ap_viv_nan_menaj_sa",
            "default_value": null,
            "visible_conditions_type": null,
            "visible_conditions_behavior": "clear",
            "visible_conditions": null,
            "required_conditions_type": null,
            "required_conditions": null,
            "ai_prompt": null,
            "numeric": true,
            "format": "integer",
            "min": null,
            "max": null,
            "min_length": null,
            "max_length": null,
            "default_previous_value": false
          },
          {
            "type": "YesNoField",
            "key": "84f0",
            "label": "2.2 Eske gen timoun nan kay la",
            "description": "Le nou pale de timoun, nou konsidere timoun pou pi plis 6 an.",
            "required": true,
            "disabled": false,
            "hidden": false,
            "data_name": "22_eske_gen_timoun_nan_kay_la",
            "default_value": null,
            "visible_conditions_type": null,
            "visible_conditions_behavior": "clear",
            "visible_conditions": null,
            "required_conditions_type": null,
            "required_conditions": null,
            "ai_prompt": null,
            "positive": {
              "label": "Wi",
              "value": "wi"
            },
            "negative": {
              "label": "Non",
              "value": "non"
            },
            "neutral": {
              "label": "N/A",
              "value": "n/a"
            },
            "neutral_enabled": false,
            "default_previous_value": false
          },
          {
            "type": "YesNoField",
            "key": "20a9",
            "label": "2.0 Eske gen moun ki gen andikap fizik oswa mantal nan kay",
            "description": "Le nou pale de timoun, nou konsidere timoun pou pi plis 6 an.",
            "required": true,
            "disabled": false,
            "hidden": false,
            "data_name": "20_eske_gen_moun_ki_gen_andikap_fizik_oswa_mantal_nan_kay",
            "default_value": null,
            "visible_conditions_type": null,
            "visible_conditions_behavior": "clear",
            "visible_conditions": null,
            "required_conditions_type": null,
            "required_conditions": null,
            "ai_prompt": null,
            "positive": {
              "label": "Wi",
              "value": "wi"
            },
            "negative": {
              "label": "Non",
              "value": "non"
            },
            "neutral": {
              "label": "N/A",
              "value": "n/a"
            },
            "neutral_enabled": false,
            "default_previous_value": false
          },
          {
            "type": "ChoiceField",
            "key": "e420",
            "label": "2.3 A ki tit menaj la okipe/rete nan inite lojman sa",
            "description": "Estati okipasyon\nTip okipasyon\nPwopriyetè kay la",
            "required": true,
            "disabled": false,
            "hidden": false,
            "data_name": "23_a_ki_tit_menaj_la_okiperete_nan_inite_lojman_sa",
            "default_value": null,
            "visible_conditions_type": null,
            "visible_conditions_behavior": "clear",
            "visible_conditions": null,
            "required_conditions_type": null,
            "required_conditions": null,
            "ai_prompt": null,
            "multiple": false,
            "allow_other": false,
            "choices": [
              {
                "label": "Posede pa yon manm menaj la",
                "value": "Posede pa yon manm menaj la"
              },
              {
                "label": "Lwe nan men yon pwopriyetè",
                "value": "Lwe nan men yon pwopriyetè"
              },
              {
                "label": "Okipasyon gratis",
                "value": "Okipasyon gratis"
              },
              {
                "label": "Lòt",
                "value": "Lòt"
              }
            ],
            "default_previous_value": false
          },
          {
            "type": "TextField",
            "key": "3dae",
            "label": "2.4 Lòt estati okipasyon fanmi nan kay la",
            "description": null,
            "required": true,
            "disabled": false,
            "hidden": false,
            "data_name": "23_lot_estati_okipasyon_fanmi_nan_kay_la",
            "default_value": null,
            "visible_conditions_type": "all",
            "visible_conditions_behavior": "clear",
            "visible_conditions": [
              {
                "field_key": "e420",
                "operator": "equal_to",
                "value": "Lòt"
              }
            ],
            "required_conditions_type": null,
            "required_conditions": null,
            "ai_prompt": null,
            "numeric": false,
            "pattern": null,
            "pattern_description": null,
            "min_length": null,
            "max_length": null,
            "default_previous_value": false
          },
          {
            "type": "YesNoField",
            "key": "bd00",
            "label": "999 Eske yon moun nan menaj la gen dokiman legal pou tè a",
            "description": "\n",
            "required": true,
            "disabled": false,
            "hidden": false,
            "data_name": "999_eske_yon_moun_nan_menaj_la_gen_dokiman_legal_pou_te_a",
            "default_value": null,
            "visible_conditions_type": "all",
            "visible_conditions_behavior": "clear",
            "visible_conditions": [
              {
                "field_key": "e420",
                "operator": "equal_to",
                "value": "Posede pa yon manm menaj la"
              }
            ],
            "required_conditions_type": null,
            "required_conditions": null,
            "ai_prompt": null,
            "positive": {
              "label": "Wi",
              "value": "wi"
            },
            "negative": {
              "label": "Non",
              "value": "non"
            },
            "neutral": {
              "label": "Pa konnen",
              "value": "pa konnen"
            },
            "neutral_enabled": true,
            "default_previous_value": false
          },
          {
            "type": "TextField",
            "key": "4863",
            "label": "2.5 Konbyen pyès kay la genyen",
            "description": null,
            "required": true,
            "disabled": false,
            "hidden": false,
            "data_name": "24_konbyen_pyes_kay_la_genyen",
            "default_value": null,
            "visible_conditions_type": null,
            "visible_conditions_behavior": "clear",
            "visible_conditions": null,
            "required_conditions_type": null,
            "required_conditions": null,
            "ai_prompt": null,
            "numeric": true,
            "format": "integer",
            "min": null,
            "max": null,
            "min_length": null,
            "max_length": null,
            "default_previous_value": false
          },
          {
            "type": "Label",
            "key": "2098",
            "label": "❌!!!Obsevasyon!!!❌\nWap chwazi yon sel repons. Se sa ki plis la wap chwazi. Si panno kay la fet ak plis bwa, wap  chwazi bwa.",
            "description": null,
            "required": false,
            "disabled": false,
            "hidden": false,
            "data_name": "obsevasyonwap_chwazi_yon_sel_repons_se_sa_ki_plis_",
            "default_value": null,
            "visible_conditions_type": null,
            "visible_conditions_behavior": "clear",
            "visible_conditions": null,
            "required_conditions_type": null,
            "required_conditions": null
          },
          {
            "type": "ChoiceField",
            "key": "55d8",
            "label": "2.6 Ak kisa panno kay la fèt",
            "description": "Si yon kay fet ak plizye materyo, konsidere sa ki plis la. ",
            "required": true,
            "disabled": false,
            "hidden": false,
            "data_name": "26_ak_kisa_panno_kay_la_fet",
            "default_value": null,
            "visible_conditions_type": null,
            "visible_conditions_behavior": "clear",
            "visible_conditions": null,
            "required_conditions_type": null,
            "required_conditions": null,
            "ai_prompt": null,
            "multiple": false,
            "allow_other": false,
            "choices": [
              {
                "label": "Beton",
                "value": "Beton"
              },
              {
                "label": "Palmis",
                "value": "Palmis"
              },
              {
                "label": "Wòch",
                "value": "Wòch"
              },
              {
                "label": "Tach",
                "value": "Tach"
              },
              {
                "label": "Tif",
                "value": "Tif"
              },
              {
                "label": "Pwela",
                "value": "Pwela"
              },
              {
                "label": "Klisad",
                "value": "Klisad"
              },
              {
                "label": "Pay",
                "value": "Pay"
              },
              {
                "label": "Tòl",
                "value": "Tòl"
              },
              {
                "label": "Bwa",
                "value": "Bwa"
              },
              {
                "label": "Lòt",
                "value": "Lòt"
              }
            ],
            "default_previous_value": false
          },
          {
            "type": "TextField",
            "key": "f480",
            "label": "2.7 Ak ki lòt materyo panno kay la fèt",
            "description": null,
            "required": true,
            "disabled": false,
            "hidden": false,
            "data_name": "27_ak_ki_lot_materyo_panno_kay_la_fet",
            "default_value": null,
            "visible_conditions_type": "all",
            "visible_conditions_behavior": "clear",
            "visible_conditions": [
              {
                "field_key": "55d8",
                "operator": "equal_to",
                "value": "Lòt"
              }
            ],
            "required_conditions_type": null,
            "required_conditions": null,
            "ai_prompt": null,
            "numeric": false,
            "pattern": null,
            "pattern_description": null,
            "min_length": null,
            "max_length": null,
            "default_previous_value": false
          },
          {
            "type": "Label",
            "key": "c5c0",
            "label": "❌!!!Obsevasyon!!!❌\nWap chwazi yon sel repons. Se sa ki plis la wap chwazi. Si kay la kouvri ak plis bwa, wap  chwazi bwa.",
            "description": null,
            "required": false,
            "disabled": false,
            "hidden": false,
            "data_name": "obsevasyonwap_chwazi_yon_sel_repons_se_sa_ki_plis_",
            "default_value": null,
            "visible_conditions_type": null,
            "visible_conditions_behavior": "clear",
            "visible_conditions": null,
            "required_conditions_type": null,
            "required_conditions": null
          },
          {
            "type": "ChoiceField",
            "key": "4099",
            "label": "2.8 Ak kisa kay la kouvri",
            "description": null,
            "required": true,
            "disabled": false,
            "hidden": false,
            "data_name": "28_ak_kisa_kay_la_kouvri",
            "default_value": null,
            "visible_conditions_type": null,
            "visible_conditions_behavior": "clear",
            "visible_conditions": null,
            "required_conditions_type": null,
            "required_conditions": null,
            "ai_prompt": null,
            "multiple": false,
            "allow_other": false,
            "choices": [
              {
                "label": "Beton",
                "value": "Beton"
              },
              {
                "label": "Pay",
                "value": "Pay"
              },
              {
                "label": "Pwela",
                "value": "Pwela"
              },
              {
                "label": "Playwoud",
                "value": "Playwoud"
              },
              {
                "label": "Tach",
                "value": "Tach"
              },
              {
                "label": "Tòl",
                "value": "Tòl"
              },
              {
                "label": "Lòt",
                "value": "Lòt"
              }
            ],
            "default_previous_value": false
          },
          {
            "type": "TextField",
            "key": "0750",
            "label": "2.9 Ak ki lòt bagay kay la kouvri",
            "description": null,
            "required": true,
            "disabled": false,
            "hidden": false,
            "data_name": "29_ak_ki_lot_bagay_kay_la_kouvri",
            "default_value": null,
            "visible_conditions_type": "all",
            "visible_conditions_behavior": "clear",
            "visible_conditions": [
              {
                "field_key": "4099",
                "operator": "equal_to",
                "value": "Lòt"
              }
            ],
            "required_conditions_type": null,
            "required_conditions": null,
            "ai_prompt": null,
            "numeric": false,
            "pattern": null,
            "pattern_description": null,
            "min_length": null,
            "max_length": null,
            "default_previous_value": false
          },
          {
            "type": "Label",
            "key": "9a80",
            "label": "❌!!!Obsevasyon!!!❌\nWap chwazi yon sel repons. Se sa ki plis la wap chwazi. Si ate kay la fet ak plis seramik, wap  chwazi seramik.",
            "description": null,
            "required": false,
            "disabled": false,
            "hidden": false,
            "data_name": "obsevasyonwap_chwazi_yon_sel_repons_se_sa_ki_plis_",
            "default_value": null,
            "visible_conditions_type": null,
            "visible_conditions_behavior": "clear",
            "visible_conditions": null,
            "required_conditions_type": null,
            "required_conditions": null
          },
          {
            "type": "ChoiceField",
            "key": "5a00",
            "label": "2.10 Ak kisa atè kay la fèt",
            "description": null,
            "required": true,
            "disabled": false,
            "hidden": false,
            "data_name": "210_ak_kisa_ate_kay_la_fet",
            "default_value": null,
            "visible_conditions_type": null,
            "visible_conditions_behavior": "clear",
            "visible_conditions": null,
            "required_conditions_type": null,
            "required_conditions": null,
            "ai_prompt": null,
            "multiple": false,
            "allow_other": false,
            "choices": [
              {
                "label": "Mozayik",
                "value": "Mozayik"
              },
              {
                "label": "Seramik",
                "value": "Seramik"
              },
              {
                "label": "Tè bati",
                "value": "Tè bati"
              },
              {
                "label": "Beton",
                "value": "Beton"
              },
              {
                "label": "Lòt",
                "value": "Lòt"
              }
            ],
            "default_previous_value": false
          },
          {
            "type": "TextField",
            "key": "609b",
            "label": "2.11 Ak ki  lòt bagay ate kay la fet",
            "description": null,
            "required": true,
            "disabled": false,
            "hidden": false,
            "data_name": "211_ak_ki_lot_bagay_ate_kay_la_fet",
            "default_value": null,
            "visible_conditions_type": "all",
            "visible_conditions_behavior": "clear",
            "visible_conditions": [
              {
                "field_key": "5a00",
                "operator": "equal_to",
                "value": "Lòt"
              }
            ],
            "required_conditions_type": null,
            "required_conditions": null,
            "ai_prompt": null,
            "numeric": false,
            "pattern": null,
            "pattern_description": null,
            "min_length": null,
            "max_length": null,
            "default_previous_value": false
          },
          {
            "type": "YesNoField",
            "key": "b9d0",
            "label": "999 Eske kay la gen twalet",
            "description": null,
            "required": true,
            "disabled": false,
            "hidden": false,
            "data_name": "999_eske_kay_la_gen_twalet",
            "default_value": null,
            "visible_conditions_type": null,
            "visible_conditions_behavior": "clear",
            "visible_conditions": null,
            "required_conditions_type": null,
            "required_conditions": null,
            "ai_prompt": null,
            "positive": {
              "label": "Wi",
              "value": "wi"
            },
            "negative": {
              "label": "Non",
              "value": "non"
            },
            "neutral": {
              "label": "N/A",
              "value": "n/a"
            },
            "neutral_enabled": false,
            "default_previous_value": false
          },
          {
            "type": "ChoiceField",
            "key": "a4e0",
            "label": "2.12 Ki tip twalèt",
            "description": "Modèn = \"Flush toilet\"\nLatrin = Non-flush",
            "required": true,
            "disabled": false,
            "hidden": false,
            "data_name": "212_eske_kay_la_gen_akse_a_yon_twalet",
            "default_value": null,
            "visible_conditions_type": "all",
            "visible_conditions_behavior": "clear",
            "visible_conditions": [
              {
                "field_key": "b9d0",
                "operator": "equal_to",
                "value": "wi"
              }
            ],
            "required_conditions_type": null,
            "required_conditions": null,
            "ai_prompt": null,
            "multiple": false,
            "allow_other": false,
            "choices": [
              {
                "label": "Modèn",
                "value": "Modèn"
              },
              {
                "label": "Latrin",
                "value": "Latrin"
              },
              {
                "label": "Modèn ak latrin",
                "value": "Modèn ak latrin"
              },
              {
                "label": "Pa Genyen",
                "value": "Pa Genyen"
              },
              {
                "label": "Lòt",
                "value": "Lòt"
              }
            ],
            "default_previous_value": false
          },
          {
            "type": "TextField",
            "key": "6300",
            "label": "2.13 Ki lot tip twalèt ou genyen",
            "description": null,
            "required": true,
            "disabled": false,
            "hidden": false,
            "data_name": "213_ki_lot_tip_twalet_ou_genyen",
            "default_value": null,
            "visible_conditions_type": "all",
            "visible_conditions_behavior": "clear",
            "visible_conditions": [
              {
                "field_key": "a4e0",
                "operator": "equal_to",
                "value": "Lòt"
              }
            ],
            "required_conditions_type": null,
            "required_conditions": null,
            "ai_prompt": null,
            "numeric": false,
            "pattern": null,
            "pattern_description": null,
            "min_length": null,
            "max_length": null,
            "default_previous_value": false
          },
          {
            "type": "YesNoField",
            "key": "ffc0",
            "label": "999 Eske menaj la gen aparey ki fonksyone ak kouran",
            "description": "Le nou pale de aparey ki fonkyonse ak kouran, telefon pa ladan l",
            "required": true,
            "disabled": false,
            "hidden": false,
            "data_name": "999_eske_menaj_la_gen_aparey_ki_fonksyone_ak_kouran",
            "default_value": null,
            "visible_conditions_type": null,
            "visible_conditions_behavior": "clear",
            "visible_conditions": null,
            "required_conditions_type": null,
            "required_conditions": null,
            "ai_prompt": null,
            "positive": {
              "label": "Wi",
              "value": "wi"
            },
            "negative": {
              "label": "Non",
              "value": "non"
            },
            "neutral": {
              "label": "N/A",
              "value": "n/a"
            },
            "neutral_enabled": false,
            "default_previous_value": false
          },
          {
            "type": "ChoiceField",
            "key": "eaf0",
            "label": "999 Ki sous eneji menaj la itilize",
            "description": null,
            "required": true,
            "disabled": false,
            "hidden": false,
            "data_name": "999_ki_sous_eneji_menaj_la_itilize",
            "default_value": null,
            "visible_conditions_type": null,
            "visible_conditions_behavior": "clear",
            "visible_conditions": null,
            "required_conditions_type": null,
            "required_conditions": null,
            "ai_prompt": null,
            "multiple": false,
            "allow_other": false,
            "choices": [
              {
                "label": "EDH",
                "value": "EDH"
              },
              {
                "label": "Pano",
                "value": "Pano"
              },
              {
                "label": "Pil",
                "value": "Pil"
              },
              {
                "label": "Delko",
                "value": "Delko"
              },
              {
                "label": "Lot",
                "value": "Lot"
              }
            ],
            "default_previous_value": false
          },
          {
            "type": "ChoiceField",
            "key": "b0a0",
            "label": "2.13 Ki sous prensipal limye menaj la nan kay sa",
            "description": null,
            "required": true,
            "disabled": false,
            "hidden": false,
            "data_name": "213_ki_sous_prensipal_limye_menaj_la_nan_kay_sa",
            "default_value": null,
            "visible_conditions_type": null,
            "visible_conditions_behavior": "clear",
            "visible_conditions": null,
            "required_conditions_type": null,
            "required_conditions": null,
            "ai_prompt": null,
            "multiple": false,
            "allow_other": false,
            "choices": [
              {
                "label": "Anpoul",
                "value": "Anpoul"
              },
              {
                "label": "Anpoul Rechajab",
                "value": "Anpoul Rechajab"
              },
              {
                "label": "Balèn",
                "value": "Balèn"
              },
              {
                "label": "Flach",
                "value": "Flach"
              },
              {
                "label": "Lanp Gaz",
                "value": "Lanp Gaz"
              },
              {
                "label": "Lanp Solè",
                "value": "Lanp Solè"
              },
              {
                "label": "Pa Genyen",
                "value": "Pa Genyen"
              },
              {
                "label": "Lòt",
                "value": "Lòt"
              }
            ],
            "default_previous_value": false
          },
          {
            "type": "ChoiceField",
            "key": "ec00",
            "label": "2.14 Ki sistèm dlo menaj la plis itilize",
            "description": null,
            "required": true,
            "disabled": false,
            "hidden": false,
            "data_name": "214_sistem_dlo_menaj_la_plis_itilize",
            "default_value": null,
            "visible_conditions_type": null,
            "visible_conditions_behavior": "clear",
            "visible_conditions": null,
            "required_conditions_type": null,
            "required_conditions": null,
            "ai_prompt": null,
            "multiple": false,
            "allow_other": false,
            "choices": [
              {
                "label": "Sistèm dlo enstale anndan kay la",
                "value": "Sistèm dlo enstale anndan kay la"
              },
              {
                "label": "Sistèm dlo enstale sou tè a (deyò batiman)",
                "value": "Sistèm dlo enstale sou tè a (deyò batiman)"
              },
              {
                "label": "Chato Dlo",
                "value": "Chato Dlo"
              },
              {
                "label": "Pa Gen Sistèm Dlo",
                "value": "Pa Gen Sistèm Dlo"
              }
            ],
            "default_previous_value": false
          },
          {
            "type": "ChoiceField",
            "key": "539f",
            "label": "2.15 Ki dlo menaj la plis itilize pou bwè",
            "description": null,
            "required": true,
            "disabled": false,
            "hidden": false,
            "data_name": "215_ki_dlo_menaj_la_plis_itilize_pou_bwe",
            "default_value": null,
            "visible_conditions_type": null,
            "visible_conditions_behavior": "clear",
            "visible_conditions": null,
            "required_conditions_type": null,
            "required_conditions": null,
            "ai_prompt": null,
            "multiple": false,
            "allow_other": false,
            "choices": [
              {
                "label": "Dlo Lapli",
                "value": "Dlo Lapli"
              },
              {
                "label": "Dlo trete (Sachè,Galon,Bidon,Kamyon)",
                "value": "Dlo trete (Sachè,Galon,Bidon,Kamyon)"
              },
              {
                "label": "Kyòs",
                "value": "Kyòs"
              },
              {
                "label": "Pi",
                "value": "Pi"
              },
              {
                "label": "Ponp/Tiyo",
                "value": "Ponp/Tiyo"
              },
              {
                "label": "Sitèn",
                "value": "Sitèn"
              },
              {
                "label": "Sous dlo",
                "value": "Sous dlo"
              },
              {
                "label": "Lòt",
                "value": "Lòt"
              }
            ],
            "default_previous_value": false
          },
          {
            "type": "TextField",
            "key": "c750",
            "label": "2.16 Ki lot dlo menaj itilize pou bwè",
            "description": null,
            "required": true,
            "disabled": false,
            "hidden": false,
            "data_name": "216_ki_lot_dlo_menaj_la_itilize_pou_bwe",
            "default_value": null,
            "visible_conditions_type": "all",
            "visible_conditions_behavior": "clear",
            "visible_conditions": [
              {
                "field_key": "539f",
                "operator": "equal_to",
                "value": "Lòt"
              }
            ],
            "required_conditions_type": null,
            "required_conditions": null,
            "ai_prompt": null,
            "numeric": false,
            "pattern": null,
            "pattern_description": null,
            "min_length": null,
            "max_length": null,
            "default_previous_value": false
          },
          {
            "type": "Label",
            "key": "1d20",
            "label": "❌!!!Obsevasyon!!!❌\nTeren lib vle di yon espas ki pa bare, epi ke moun yo itilize pou jete fatra san okenn otorizasyon.",
            "description": null,
            "required": false,
            "disabled": false,
            "hidden": false,
            "data_name": "obsevasyonteren_lib_vle_di_yon_espas_ki_pa_bare_ep",
            "default_value": null,
            "visible_conditions_type": null,
            "visible_conditions_behavior": "clear",
            "visible_conditions": null,
            "required_conditions_type": null,
            "required_conditions": null
          },
          {
            "type": "ChoiceField",
            "key": "79dd",
            "label": "2.17 Ki mwayen nou plis itilize pou jete fatra",
            "description": null,
            "required": true,
            "disabled": false,
            "hidden": false,
            "data_name": "217_ki_mwayen_nou_plis_itilize_pou_jete_fatra",
            "default_value": null,
            "visible_conditions_type": null,
            "visible_conditions_behavior": "clear",
            "visible_conditions": null,
            "required_conditions_type": null,
            "required_conditions": null,
            "ai_prompt": null,
            "multiple": false,
            "allow_other": false,
            "choices": [
              {
                "label": "Jete sou tèren lib",
                "value": "Jete sou tèren lib"
              },
              {
                "label": "Jete nan ravin",
                "value": "Jete nan ravin"
              },
              {
                "label": "Jete nan lari",
                "value": "Jete nan lari"
              },
              {
                "label": "Boule",
                "value": "Boule"
              },
              {
                "label": "Jete nan tou",
                "value": "Jete nan tou"
              },
              {
                "label": "Jete nan tou ak boule",
                "value": "Jete nan tou ak boule"
              },
              {
                "label": "Ranmase pa yon sèvis jesyon fatra",
                "value": "Ranmase pa yon sèvis jesyon fatra"
              },
              {
                "label": "Lòt",
                "value": "Lòt"
              }
            ],
            "default_previous_value": false
          },
          {
            "type": "TextField",
            "key": "3611",
            "label": "2.18 Ki lot mwayen menaj  la itilize pou jete fatra",
            "description": null,
            "required": true,
            "disabled": false,
            "hidden": false,
            "data_name": "218_ki_lot_mwayen_menaj_la_itilize_pou_jete_fatra",
            "default_value": null,
            "visible_conditions_type": "all",
            "visible_conditions_behavior": "clear",
            "visible_conditions": [
              {
                "field_key": "79dd",
                "operator": "equal_to",
                "value": "Lòt"
              }
            ],
            "required_conditions_type": null,
            "required_conditions": null,
            "ai_prompt": null,
            "numeric": false,
            "pattern": null,
            "pattern_description": null,
            "min_length": null,
            "max_length": null,
            "default_previous_value": false
          },
          {
            "type": "ChoiceField",
            "key": "19f0",
            "label": "2.19 Ki tip chale oswa enèji menaj la plis itilize pou fè manje",
            "description": "Le nou pale de eneji, nou konsidere bwa ak chabon kom eneji.",
            "required": true,
            "disabled": false,
            "hidden": false,
            "data_name": "219_tip_chale_enji_plis_itilize_pou_fe_manje",
            "default_value": null,
            "visible_conditions_type": null,
            "visible_conditions_behavior": "clear",
            "visible_conditions": null,
            "required_conditions_type": null,
            "required_conditions": null,
            "ai_prompt": null,
            "multiple": false,
            "allow_other": false,
            "choices": [
              {
                "label": "Bwa",
                "value": "Bwa"
              },
              {
                "label": "Chabon",
                "value": "Chabon"
              },
              {
                "label": "Pwopàn",
                "value": "Pwopàn"
              },
              {
                "label": "Kewozèn (Gaz blan)",
                "value": "Kewozèn (Gaz blan)"
              },
              {
                "label": "Kouran",
                "value": "Kouran"
              },
              {
                "label": "Lòt",
                "value": "Lòt"
              }
            ],
            "default_previous_value": false
          },
          {
            "type": "YesNoField",
            "key": "48f0",
            "label": "2.20 Eske menaj la gen aksè ak entènèt",
            "description": "Le nou pale de entenet, nou vle pale anndan menaj la. Si li ale nan yon lot espas, sa pa vle di ke li gen entenet.",
            "required": true,
            "disabled": false,
            "hidden": false,
            "data_name": "220_eske_menaj_la_gen_akse_ak_entenet",
            "default_value": null,
            "visible_conditions_type": null,
            "visible_conditions_behavior": "clear",
            "visible_conditions": null,
            "required_conditions_type": null,
            "required_conditions": null,
            "ai_prompt": null,
            "positive": {
              "label": "Wi",
              "value": "wi"
            },
            "negative": {
              "label": "Non",
              "value": "non"
            },
            "neutral": {
              "label": "N/A",
              "value": "n/a"
            },
            "neutral_enabled": false,
            "default_previous_value": false
          },
          {
            "type": "ChoiceField",
            "key": "db40",
            "label": "999 Ki rezo menaj la itilize",
            "description": null,
            "required": true,
            "disabled": false,
            "hidden": false,
            "data_name": "999_ki_rezo_menaj_la_itilize",
            "default_value": null,
            "visible_conditions_type": null,
            "visible_conditions_behavior": "clear",
            "visible_conditions": null,
            "required_conditions_type": null,
            "required_conditions": null,
            "ai_prompt": null,
            "multiple": false,
            "allow_other": false,
            "choices": [
              {
                "label": "Digicel",
                "value": "Digicel"
              },
              {
                "label": "Natcom",
                "value": "Natcom"
              },
              {
                "label": "Starlink",
                "value": "Starlink"
              },
              {
                "label": "Digicel ak Natcom",
                "value": "Digicel ak Natcom"
              },
              {
                "label": "Digicel ak Starlink",
                "value": "Digicel ak Starlink"
              },
              {
                "label": "Natcom ak Starlink",
                "value": "Natcom ak Starlink"
              },
              {
                "label": "Lot",
                "value": "Lot"
              }
            ],
            "default_previous_value": false
          },
          {
            "type": "YesNoField",
            "key": "5900",
            "label": "2.21 Èske menaj la gen aksè ak yon telefòn entèlijan",
            "description": null,
            "required": true,
            "disabled": false,
            "hidden": false,
            "data_name": "221_eske_menaj_la_gen_akse_ak_yon_telefon_entlijan",
            "default_value": null,
            "visible_conditions_type": null,
            "visible_conditions_behavior": "clear",
            "visible_conditions": null,
            "required_conditions_type": null,
            "required_conditions": null,
            "ai_prompt": null,
            "positive": {
              "label": "Wi",
              "value": "wi"
            },
            "negative": {
              "label": "Non",
              "value": "non"
            },
            "neutral": {
              "label": "N/A",
              "value": "n/a"
            },
            "neutral_enabled": false,
            "default_previous_value": false
          },
          {
            "type": "YesNoField",
            "key": "bbf0",
            "label": "2.22 Èske menaj la gen aksè ak yon òdinate",
            "description": "Le nou pale de odinate, nou vle pale anndan menaj la. Si li ale nan yon lot espas, sa pa vle di ke li gen odinate.",
            "required": true,
            "disabled": false,
            "hidden": false,
            "data_name": "222_eske_menaj_la_gen_akse_ak_yon_odinate",
            "default_value": null,
            "visible_conditions_type": null,
            "visible_conditions_behavior": "clear",
            "visible_conditions": null,
            "required_conditions_type": null,
            "required_conditions": null,
            "ai_prompt": null,
            "positive": {
              "label": "Wi",
              "value": "wi"
            },
            "negative": {
              "label": "Non",
              "value": "non"
            },
            "neutral": {
              "label": "N/A",
              "value": "n/a"
            },
            "neutral_enabled": false,
            "default_previous_value": false
          },
          {
            "type": "TextField",
            "key": "7637",
            "label": "2.23 Lòt enfòmasyon/komantè",
            "description": null,
            "required": true,
            "disabled": false,
            "hidden": false,
            "data_name": "223_lot_enfomasyon_komante",
            "default_value": null,
            "visible_conditions_type": null,
            "visible_conditions_behavior": "clear",
            "visible_conditions": null,
            "required_conditions_type": null,
            "required_conditions": null,
            "ai_prompt": null,
            "numeric": false,
            "pattern": null,
            "pattern_description": null,
            "min_length": null,
            "max_length": null,
            "default_previous_value": false
          }
        ]
      },
      {
        "type": "Section",
        "key": "7850",
        "label": "3. Enfomasyon Sante - Nitrisyon",
        "description": null,
        "required": false,
        "disabled": false,
        "hidden": false,
        "data_name": "3_enfomasyon_sante_nitrisyon",
        "default_value": null,
        "visible_conditions_type": "all",
        "visible_conditions_behavior": "clear",
        "visible_conditions": [
          {
            "field_key": "91f0",
            "operator": "equal_to",
            "value": "wi"
          },
          {
            "field_key": "3dc0",
            "operator": "equal_to",
            "value": "wi"
          }
        ],
        "required_conditions_type": null,
        "required_conditions": null,
        "display": "inline",
        "elements": [
          {
            "type": "YesNoField",
            "key": "2231",
            "label": "3.1 Eske menaj la gen akse a swen medikal ki pre l",
            "description": "Lè nou di pre nou konsidere yon maksimòm 20 minit sou moto. Si yo ka rive nan sous swen an nan 1 a 20 minit, sa konte kòm pre.",
            "required": true,
            "disabled": false,
            "hidden": false,
            "data_name": "31_eske_menaj_la_gen_akse_a_swen_medikal_nan_zon_nan",
            "default_value": null,
            "visible_conditions_type": null,
            "visible_conditions_behavior": "clear",
            "visible_conditions": null,
            "required_conditions_type": null,
            "required_conditions": null,
            "ai_prompt": null,
            "positive": {
              "label": "Wi",
              "value": "wi"
            },
            "negative": {
              "label": "Non",
              "value": "non"
            },
            "neutral": {
              "label": "Pa konnen",
              "value": "pa konnen"
            },
            "neutral_enabled": true,
            "default_previous_value": false
          },
          {
            "type": "ChoiceField",
            "key": "2d00",
            "label": "3.2 Kibo menaj la plis pran swen medikal",
            "description": "Si li pran swen plizye kote, chwazi kote li ale plis la.",
            "required": true,
            "disabled": false,
            "hidden": false,
            "data_name": "32_kibo_menaj_la_plis_pran_swen_medikal",
            "default_value": null,
            "visible_conditions_type": "all",
            "visible_conditions_behavior": "clear",
            "visible_conditions": [
              {
                "field_key": "2231",
                "operator": "not_equal_to",
                "value": "pa konnen"
              }
            ],
            "required_conditions_type": null,
            "required_conditions": null,
            "ai_prompt": null,
            "multiple": false,
            "allow_other": false,
            "choices": [
              {
                "label": "Lopital",
                "value": "Lopital"
              },
              {
                "label": "Klinik",
                "value": "Klinik"
              },
              {
                "label": "Sant sante",
                "value": "Sant sante"
              },
              {
                "label": "Lopital ak klinik",
                "value": "Lopital ak klinik"
              },
              {
                "label": "Lopital ak sant sante",
                "value": "Lopital ak sant sante"
              },
              {
                "label": "Sant sante ak klinik",
                "value": "Sant sante ak klinik"
              },
              {
                "label": "Doktè Fèy",
                "value": "Doktè Fèy"
              },
              {
                "label": "Pa konn ale",
                "value": "Pa konn ale"
              },
              {
                "label": "Lòt",
                "value": "Lòt"
              }
            ],
            "default_previous_value": false
          },
          {
            "type": "TextField",
            "key": "2f5a",
            "label": "3.3 Ki lot kote menaj al jwenn swen medikal nan zon nan",
            "description": null,
            "required": true,
            "disabled": false,
            "hidden": false,
            "data_name": "33_ki_lot_kote_menaj_al_jwenn_swen_medikal_nan_zon_nan",
            "default_value": null,
            "visible_conditions_type": "all",
            "visible_conditions_behavior": "clear",
            "visible_conditions": [
              {
                "field_key": "2d00",
                "operator": "equal_to",
                "value": "Lòt"
              }
            ],
            "required_conditions_type": null,
            "required_conditions": null,
            "ai_prompt": null,
            "numeric": false,
            "pattern": null,
            "pattern_description": null,
            "min_length": null,
            "max_length": null,
            "default_previous_value": false
          },
          {
            "type": "YesNoField",
            "key": "2431",
            "label": "3.4 Eske timoun ki nan menaj la konn vaksinen",
            "description": null,
            "required": true,
            "disabled": false,
            "hidden": false,
            "data_name": "34_eske_timoun_ki_nan_menaj_la_konn_vaksinen",
            "default_value": null,
            "visible_conditions_type": "all",
            "visible_conditions_behavior": "clear",
            "visible_conditions": [
              {
                "field_key": "84f0",
                "operator": "equal_to",
                "value": "wi"
              }
            ],
            "required_conditions_type": null,
            "required_conditions": null,
            "ai_prompt": null,
            "positive": {
              "label": "Wi",
              "value": "wi"
            },
            "negative": {
              "label": "Non",
              "value": "non"
            },
            "neutral": {
              "label": "N/A",
              "value": "n/a"
            },
            "neutral_enabled": false,
            "default_previous_value": false
          },
          {
            "type": "TextField",
            "key": "ce20",
            "label": "999 Konbyen repa chak moun nan menaj la manje chak jou",
            "description": "Yon \"repa\" se yon okazyon manje planifye ki jeneralman gen plizyè eleman tankou diri, mayi, pitimi, ak pwa, legim, oswa lòt bagay ki konsome nan lè regilye tankou maten/dejene, midi/dine, swa/soupe.\n\nTi manje poukont yo tankou yon sèl moso fwi, yon sèl moso pen, oswa bonbon pa konte kòm yon \"repa\".",
            "required": true,
            "disabled": false,
            "hidden": false,
            "data_name": "999_konbyen_repa_chak_moun_nan_menaj_la_manje_chak_jou",
            "default_value": null,
            "visible_conditions_type": null,
            "visible_conditions_behavior": "clear",
            "visible_conditions": null,
            "required_conditions_type": null,
            "required_conditions": null,
            "ai_prompt": null,
            "numeric": true,
            "format": "integer",
            "min": 0.0,
            "max": 10.0,
            "min_length": null,
            "max_length": null,
            "default_previous_value": false
          },
          {
            "type": "YesNoField",
            "key": "11e1",
            "label": "999 Èske nou konn rate yon repa akòz mank resous",
            "description": null,
            "required": true,
            "disabled": false,
            "hidden": false,
            "data_name": "999_eske_nou_konn_sote_repa_akoz_mank_resous",
            "default_value": null,
            "visible_conditions_type": null,
            "visible_conditions_behavior": "clear",
            "visible_conditions": null,
            "required_conditions_type": null,
            "required_conditions": null,
            "ai_prompt": null,
            "positive": {
              "label": "Wi",
              "value": "wi"
            },
            "negative": {
              "label": "Non",
              "value": "non"
            },
            "neutral": {
              "label": "N/A",
              "value": "n/a"
            },
            "neutral_enabled": false,
            "default_previous_value": false
          },
          {
            "type": "TextField",
            "key": "21d6",
            "label": "3.6 Lòt enfòmasyon/komantè",
            "description": "Itilize sa pou enfomasyon ki enpotan/petinan ke moun nan te bay, men ki pat ka antre anba youn nan kesyon fiks yo",
            "required": true,
            "disabled": false,
            "hidden": false,
            "data_name": "36_lot_enfomasyon_komante",
            "default_value": null,
            "visible_conditions_type": null,
            "visible_conditions_behavior": "clear",
            "visible_conditions": null,
            "required_conditions_type": null,
            "required_conditions": null,
            "ai_prompt": null,
            "numeric": false,
            "pattern": null,
            "pattern_description": null,
            "min_length": null,
            "max_length": null,
            "default_previous_value": false
          }
        ]
      },
      {
        "type": "Section",
        "key": "c740",
        "label": "4. Enfòmasyon Endividyèl",
        "description": null,
        "required": false,
        "disabled": false,
        "hidden": false,
        "data_name": "4_enfomasyon_endividyel",
        "default_value": null,
        "visible_conditions_type": "all",
        "visible_conditions_behavior": "clear",
        "visible_conditions": [
          {
            "field_key": "91f0",
            "operator": "equal_to",
            "value": "wi"
          },
          {
            "field_key": "3dc0",
            "operator": "equal_to",
            "value": "wi"
          }
        ],
        "required_conditions_type": null,
        "required_conditions": null,
        "display": "inline",
        "elements": [
          {
            "type": "Label",
            "key": "2fc0",
            "label": "❌!!!Obsevasyon!!!❌\nTout moun ki ap vin nan menja la bezwen bay enfomasyon pa li nan seksyon sa. Repondan ak chef menaj la dwe bay enfomasyon pa li tou.",
            "description": null,
            "required": false,
            "disabled": false,
            "hidden": false,
            "data_name": "obsevasyontout_moun_ki_ap_vin_nan_menja_la_bezwen_b",
            "default_value": null,
            "visible_conditions_type": null,
            "visible_conditions_behavior": "clear",
            "visible_conditions": null,
            "required_conditions_type": null,
            "required_conditions": null
          },
          {
            "type": "Repeatable",
            "key": "60a0",
            "label": "Enfòmasyon Endividyèl",
            "description": null,
            "required": true,
            "disabled": false,
            "hidden": false,
            "data_name": "enfmasyon_endividyel",
            "default_value": null,
            "visible_conditions_type": null,
            "visible_conditions_behavior": "clear",
            "visible_conditions": null,
            "required_conditions_type": null,
            "required_conditions": null,
            "elements": [
              {
                "type": "Label",
                "key": "4800",
                "label": "❌!!!Obsevasyon!!!❌\nKòmanse avèk repondan",
                "description": null,
                "required": false,
                "disabled": false,
                "hidden": false,
                "data_name": "obsevasyonkmanse_avk_repondan",
                "default_value": null,
                "visible_conditions_type": null,
                "visible_conditions_behavior": "clear",
                "visible_conditions": null,
                "required_conditions_type": null,
                "required_conditions": null
              },
              {
                "type": "TextField",
                "key": "f7b0",
                "label": "4.1 Prenon",
                "description": null,
                "required": true,
                "disabled": false,
                "hidden": false,
                "data_name": "41_prenon",
                "default_value": null,
                "visible_conditions_type": null,
                "visible_conditions_behavior": "clear",
                "visible_conditions": null,
                "required_conditions_type": null,
                "required_conditions": null,
                "ai_prompt": null,
                "numeric": false,
                "pattern": "[A-Za-zÀ-ÿ,'-]*",
                "pattern_description": "Sonje se PRENON an selman nou sipoze mete. Nou paka mete espas. Si se de (2) pati ki fe PRENON an, separe l ak yon tirè (-) (Jean-Eli)",
                "min_length": null,
                "max_length": null,
                "default_previous_value": false
              },
              {
                "type": "TextField",
                "key": "798a",
                "label": "4.2 Siyati",
                "description": null,
                "required": true,
                "disabled": false,
                "hidden": false,
                "data_name": "42_siyati",
                "default_value": null,
                "visible_conditions_type": null,
                "visible_conditions_behavior": "clear",
                "visible_conditions": null,
                "required_conditions_type": null,
                "required_conditions": null,
                "ai_prompt": null,
                "numeric": false,
                "pattern": "[A-Za-zÀ-ÿ,'-.]*",
                "pattern_description": "Nou paka mete espas. Sonje se SIYATI an selman. Si se 2 pati ki fe SIYATI a separe l ak - (St-Louis)",
                "min_length": null,
                "max_length": null,
                "default_previous_value": false
              },
              {
                "type": "Label",
                "key": "a990",
                "label": "❌!!!Obsevasyon!!!❌\nChef la reprezante moun ki gen plis otorite nan espas fizik la ak moun ki ansanm avek li yo. Se moun ki mennen kob nan kay la.",
                "description": null,
                "required": false,
                "disabled": false,
                "hidden": false,
                "data_name": "obsevasyonchef_la_reprezante_moun_ki_gen_plis_otori",
                "default_value": null,
                "visible_conditions_type": null,
                "visible_conditions_behavior": "clear",
                "visible_conditions": null,
                "required_conditions_type": null,
                "required_conditions": null
              },
              {
                "type": "ChoiceField",
                "key": "266c",
                "label": "4.3 Relasyon ak chèf menaj la",
                "description": null,
                "required": true,
                "disabled": false,
                "hidden": false,
                "data_name": "43_relasyon_ak_chef_menaj_la",
                "default_value": null,
                "visible_conditions_type": null,
                "visible_conditions_behavior": "clear",
                "visible_conditions": null,
                "required_conditions_type": null,
                "required_conditions": null,
                "ai_prompt": null,
                "multiple": false,
                "allow_other": false,
                "default_previous_value": false,
                "choice_list_schema": {
                  "name": "Relasyon Fanmi Zanmi - Senp",
                  "description": "",
                  "version": 2,
                  "created_at": "2025-02-06T15:10:54Z",
                  "updated_at": "2025-02-24T17:24:34Z",
                  "created_by": "Administrasyon Kore Vwazen",
                  "created_by_id": "2cf631ca-de6b-463f-9b04-2e868535a690",
                  "updated_by": "Administrasyon Kore Vwazen",
                  "updated_by_id": "2cf631ca-de6b-463f-9b04-2e868535a690",
                  "choices": [
                    {
                      "label": "Chèf Menaj la",
                      "value": "chef menaj la"
                    },
                    {
                      "label": "Mari",
                      "value": "mari"
                    },
                    {
                      "label": "Madanm",
                      "value": "madanm"
                    },
                    {
                      "label": "Pitit",
                      "value": "pitit"
                    },
                    {
                      "label": "Pitit Pitit",
                      "value": "pitit pitit"
                    },
                    {
                      "label": "Lòt fanmi",
                      "value": "lot fanmi"
                    },
                    {
                      "label": "Pa fanmi - lòt relasyon",
                      "value": "pa fanmi - lot relasyon"
                    }
                  ]
                }
              },
              {
                "type": "ChoiceField",
                "key": "510f",
                "label": "4.4 Sèks",
                "description": null,
                "required": true,
                "disabled": false,
                "hidden": false,
                "data_name": "44_seks",
                "default_value": null,
                "visible_conditions_type": null,
                "visible_conditions_behavior": "clear",
                "visible_conditions": null,
                "required_conditions_type": null,
                "required_conditions": null,
                "ai_prompt": null,
                "multiple": false,
                "allow_other": false,
                "choices": [
                  {
                    "label": "Fi",
                    "value": "Fi"
                  },
                  {
                    "label": "Gason",
                    "value": "Gason"
                  }
                ],
                "default_previous_value": false
              },
              {
                "type": "TextField",
                "key": "0030",
                "label": "4.5 Ki ane li fèt",
                "description": "Si li pa konnen ane nesans lan. Mete 1899. mete selman ane li fet la. Si li refize reponn tou, mete 1899.",
                "required": true,
                "disabled": false,
                "hidden": false,
                "data_name": "45_ane_li_fet",
                "default_value": null,
                "visible_conditions_type": null,
                "visible_conditions_behavior": "clear",
                "visible_conditions": null,
                "required_conditions_type": null,
                "required_conditions": null,
                "ai_prompt": null,
                "numeric": true,
                "format": "integer",
                "min": 1899.0,
                "max": 2025.0,
                "min_length": null,
                "max_length": null,
                "default_previous_value": false
              },
              {
                "type": "CalculatedField",
                "key": "2260",
                "label": "4.5.1 Laj Moun Lan",
                "description": null,
                "required": false,
                "disabled": false,
                "hidden": false,
                "data_name": "451_laj_moun_lan",
                "default_value": null,
                "visible_conditions_type": null,
                "visible_conditions_behavior": "clear",
                "visible_conditions": null,
                "required_conditions_type": null,
                "required_conditions": [

                ],
                "expression": "var currentdate = new Date();\r\nSETRESULT(YEAR(currentdate) - $45_ane_li_fet);",
                "display": {
                  "style": "number",
                  "currency": null
                },
                "default_previous_value": false
              },
              {
                "type": "Label",
                "key": "6000",
                "label": "❌!!!Obsevasyon!!!❌\nWap chwazi Non aplikab si moun nan gen mwens ke 18 an.",
                "description": null,
                "required": false,
                "disabled": false,
                "hidden": false,
                "data_name": "obsevasyonwap_chwazi_non_aplikab_si_moun_nan_gen_mw",
                "default_value": null,
                "visible_conditions_type": null,
                "visible_conditions_behavior": "clear",
                "visible_conditions": null,
                "required_conditions_type": null,
                "required_conditions": null
              },
              {
                "type": "ChoiceField",
                "key": "5988",
                "label": "4.6 Sitiyasyon matrimonyal aktyèl",
                "description": "Plasay vle di ke moun yo ap viv ansanm kom yon koup men yo pa marye. Li te met se yon sel jou selman.",
                "required": true,
                "disabled": false,
                "hidden": false,
                "data_name": "46_sitiyasyon_matrimonyal_aktyel",
                "default_value": null,
                "visible_conditions_type": null,
                "visible_conditions_behavior": "clear",
                "visible_conditions": null,
                "required_conditions_type": null,
                "required_conditions": null,
                "ai_prompt": null,
                "multiple": false,
                "allow_other": false,
                "choices": [
                  {
                    "label": "Selibatè (poko janm marye)",
                    "value": "Selibatè (poko janm marye)"
                  },
                  {
                    "label": "Marye",
                    "value": "Marye"
                  },
                  {
                    "label": "Plasay",
                    "value": "Plasay"
                  },
                  {
                    "label": "Divòse",
                    "value": "Divòse"
                  },
                  {
                    "label": "Vèf-Vèv",
                    "value": "Vèf-Vèv"
                  },
                  {
                    "label": "Non aplikab",
                    "value": "Non aplikab"
                  }
                ],
                "default_previous_value": false
              },
              {
                "type": "TextField",
                "key": "b600",
                "label": "4.7 Kantite pitit moun sa a janm fè",
                "description": null,
                "required": true,
                "disabled": false,
                "hidden": false,
                "data_name": "47_kantite_pitit_moun_sa_a_janm_fe",
                "default_value": null,
                "visible_conditions_type": "all",
                "visible_conditions_behavior": "clear",
                "visible_conditions": [
                  {
                    "field_key": "0030",
                    "operator": "less_than",
                    "value": "2012"
                  },
                  {
                    "field_key": "510f",
                    "operator": "equal_to",
                    "value": "Fi"
                  }
                ],
                "required_conditions_type": null,
                "required_conditions": null,
                "ai_prompt": null,
                "numeric": true,
                "format": "integer",
                "min": 0.0,
                "max": 21.0,
                "min_length": null,
                "max_length": null,
                "default_previous_value": false
              },
              {
                "type": "ChoiceField",
                "key": "ee00",
                "label": "4.8 Ki kote li te fèt",
                "description": null,
                "required": true,
                "disabled": false,
                "hidden": false,
                "data_name": "48_kote_li_fet",
                "default_value": null,
                "visible_conditions_type": null,
                "visible_conditions_behavior": "clear",
                "visible_conditions": null,
                "required_conditions_type": null,
                "required_conditions": null,
                "ai_prompt": null,
                "multiple": false,
                "allow_other": false,
                "default_previous_value": false,
                "choice_list_schema": {
                  "name": "Lis Komin Ayiti",
                  "description": "",
                  "version": 2,
                  "created_at": "2025-02-06T15:10:54Z",
                  "updated_at": "2025-02-26T15:11:32Z",
                  "created_by": "Administrasyon Kore Vwazen",
                  "created_by_id": "2cf631ca-de6b-463f-9b04-2e868535a690",
                  "updated_by": "Administrasyon Kore Vwazen",
                  "updated_by_id": "2cf631ca-de6b-463f-9b04-2e868535a690",
                  "choices": [
                    {
                      "label": "Abricots",
                      "value": "Abricots"
                    },
                    {
                      "label": "Acul du Nord",
                      "value": "Acul du Nord"
                    },
                    {
                      "label": "Anse-a-Foleur",
                      "value": "Anse-a-Foleur"
                    },
                    {
                      "label": "Anse-a-Pitre",
                      "value": "Anse-a-Pitre"
                    },
                    {
                      "label": "Anse-a-Veau",
                      "value": "Anse-a-Veau"
                    },
                    {
                      "label": "Anse-a-Galets",
                      "value": "Anse-a-Galets"
                    },
                    {
                      "label": "Anse d'Hainault",
                      "value": "Anse d'Hainault"
                    },
                    {
                      "label": "Anse Rouge",
                      "value": "Anse Rouge"
                    },
                    {
                      "label": "Aquin",
                      "value": "Aquin"
                    },
                    {
                      "label": "Arcahaie",
                      "value": "Arcahaie"
                    },
                    {
                      "label": "Arnaud",
                      "value": "Arnaud"
                    },
                    {
                      "label": "Arniquet",
                      "value": "Arniquet"
                    },
                    {
                      "label": "Bahon",
                      "value": "Bahon"
                    },
                    {
                      "label": "Baie de Henne",
                      "value": "Baie de Henne"
                    },
                    {
                      "label": "Bainet",
                      "value": "Bainet"
                    },
                    {
                      "label": "Baraderes",
                      "value": "Baraderes"
                    },
                    {
                      "label": "Bas Limbe",
                      "value": "Bas Limbe"
                    },
                    {
                      "label": "Bassin Bleu",
                      "value": "Bassin Bleu"
                    },
                    {
                      "label": "Beaumont",
                      "value": "Beaumont"
                    },
                    {
                      "label": "Belladere",
                      "value": "Belladere"
                    },
                    {
                      "label": "Belle Anse",
                      "value": "Belle Anse"
                    },
                    {
                      "label": "Bombardopolis",
                      "value": "Bombardopolis"
                    },
                    {
                      "label": "Bonbon",
                      "value": "Bonbon"
                    },
                    {
                      "label": "Borgne",
                      "value": "Borgne"
                    },
                    {
                      "label": "Boucan Carre",
                      "value": "Boucan Carre"
                    },
                    {
                      "label": "Cabaret",
                      "value": "Cabaret"
                    },
                    {
                      "label": "Camp-Perrin",
                      "value": "Camp-Perrin"
                    },
                    {
                      "label": "Cap-Haitien",
                      "value": "Cap-Haitien"
                    },
                    {
                      "label": "Capotille",
                      "value": "Capotille"
                    },
                    {
                      "label": "Caracol",
                      "value": "Caracol"
                    },
                    {
                      "label": "Carice",
                      "value": "Carice"
                    },
                    {
                      "label": "Carrefour",
                      "value": "Carrefour"
                    },
                    {
                      "label": "Cavaillon",
                      "value": "Cavaillon"
                    },
                    {
                      "label": "Cayes-Jacmel",
                      "value": "Cayes-Jacmel"
                    },
                    {
                      "label": "Cerca Carvajal",
                      "value": "Cerca Carvajal"
                    },
                    {
                      "label": "Cerca La Source",
                      "value": "Cerca La Source"
                    },
                    {
                      "label": "Chambellan",
                      "value": "Chambellan"
                    },
                    {
                      "label": "Chamsolme",
                      "value": "Chamsolme"
                    },
                    {
                      "label": "Chantal",
                      "value": "Chantal"
                    },
                    {
                      "label": "Chardonnieres",
                      "value": "Chardonnieres"
                    },
                    {
                      "label": "Cite Soleil",
                      "value": "Cite Soleil"
                    },
                    {
                      "label": "Corail",
                      "value": "Corail"
                    },
                    {
                      "label": "Cornillon / Grand Bois",
                      "value": "Cornillon / Grand Bois"
                    },
                    {
                      "label": "Coteaux",
                      "value": "Coteaux"
                    },
                    {
                      "label": "Cotes de Fer",
                      "value": "Cotes de Fer"
                    },
                    {
                      "label": "Croix-Des-Bouquets",
                      "value": "Croix-Des-Bouquets"
                    },
                    {
                      "label": "Dame Marie",
                      "value": "Dame Marie"
                    },
                    {
                      "label": "Delmas",
                      "value": "Delmas"
                    },
                    {
                      "label": "Desdunes",
                      "value": "Desdunes"
                    },
                    {
                      "label": "Dessalines",
                      "value": "Dessalines"
                    },
                    {
                      "label": "Dondon",
                      "value": "Dondon"
                    },
                    {
                      "label": "Ennery",
                      "value": "Ennery"
                    },
                    {
                      "label": "Ferrier",
                      "value": "Ferrier"
                    },
                    {
                      "label": "Fonds-Verrettes",
                      "value": "Fonds-Verrettes"
                    },
                    {
                      "label": "Fond-des-Blancs",
                      "value": "Fond-des-Blancs"
                    },
                    {
                      "label": "Fonds-des-Negres",
                      "value": "Fonds-des-Negres"
                    },
                    {
                      "label": "Fort-Liberte",
                      "value": "Fort-Liberte"
                    },
                    {
                      "label": "Ganthier",
                      "value": "Ganthier"
                    },
                    {
                      "label": "Gonaives",
                      "value": "Gonaives"
                    },
                    {
                      "label": "Grand-Boucan",
                      "value": "Grand-Boucan"
                    },
                    {
                      "label": "Grand-Goave",
                      "value": "Grand-Goave"
                    },
                    {
                      "label": "Grand Gosier",
                      "value": "Grand Gosier"
                    },
                    {
                      "label": "Grande Riviere Du Nord",
                      "value": "Grande Riviere Du Nord"
                    },
                    {
                      "label": "Grande Saline",
                      "value": "Grande Saline"
                    },
                    {
                      "label": "Gressier",
                      "value": "Gressier"
                    },
                    {
                      "label": "Gros Morne",
                      "value": "Gros Morne"
                    },
                    {
                      "label": "Hinche",
                      "value": "Hinche"
                    },
                    {
                      "label": "Ile a Vache",
                      "value": "Ile a Vache"
                    },
                    {
                      "label": "Jacmel",
                      "value": "Jacmel"
                    },
                    {
                      "label": "Jean Rabel",
                      "value": "Jean Rabel"
                    },
                    {
                      "label": "Jeremie",
                      "value": "Jeremie"
                    },
                    {
                      "label": "Kenscoff",
                      "value": "Kenscoff"
                    },
                    {
                      "label": "L'Asile",
                      "value": "L'Asile"
                    },
                    {
                      "label": "L'Estere",
                      "value": "L'Estere"
                    },
                    {
                      "label": "La Chapelle",
                      "value": "La Chapelle"
                    },
                    {
                      "label": "La Tortue",
                      "value": "La Tortue"
                    },
                    {
                      "label": "La Vallee",
                      "value": "La Vallee"
                    },
                    {
                      "label": "La Victoire",
                      "value": "La Victoire"
                    },
                    {
                      "label": "Lascahobas",
                      "value": "Lascahobas"
                    },
                    {
                      "label": "Leogane",
                      "value": "Leogane"
                    },
                    {
                      "label": "Les Anglais",
                      "value": "Les Anglais"
                    },
                    {
                      "label": "Les Cayes",
                      "value": "Les Cayes"
                    },
                    {
                      "label": "Les Irois",
                      "value": "Les Irois"
                    },
                    {
                      "label": "Limbe",
                      "value": "Limbe"
                    },
                    {
                      "label": "Limonade",
                      "value": "Limonade"
                    },
                    {
                      "label": "Maissade",
                      "value": "Maissade"
                    },
                    {
                      "label": "Maniche",
                      "value": "Maniche"
                    },
                    {
                      "label": "Marigot",
                      "value": "Marigot"
                    },
                    {
                      "label": "Marmelade",
                      "value": "Marmelade"
                    },
                    {
                      "label": "Milot",
                      "value": "Milot"
                    },
                    {
                      "label": "Miragoane",
                      "value": "Miragoane"
                    },
                    {
                      "label": "Mirebalais",
                      "value": "Mirebalais"
                    },
                    {
                      "label": "Mole Saint Nicolas",
                      "value": "Mole Saint Nicolas"
                    },
                    {
                      "label": "Mombin Crochu",
                      "value": "Mombin Crochu"
                    },
                    {
                      "label": "Mont-Organise",
                      "value": "Mont-Organise"
                    },
                    {
                      "label": "Moron",
                      "value": "Moron"
                    },
                    {
                      "label": "Ouanaminthe",
                      "value": "Ouanaminthe"
                    },
                    {
                      "label": "Paillant",
                      "value": "Paillant"
                    },
                    {
                      "label": "Perches",
                      "value": "Perches"
                    },
                    {
                      "label": "Pestel",
                      "value": "Pestel"
                    },
                    {
                      "label": "Petion-Ville",
                      "value": "Petion-Ville"
                    },
                    {
                      "label": "Petit-Goave",
                      "value": "Petit-Goave"
                    },
                    {
                      "label": "Petit Trou de Nippes",
                      "value": "Petit Trou de Nippes"
                    },
                    {
                      "label": "Petite Riviere de l'Artibonite",
                      "value": "Petite Riviere de l'Artibonite"
                    },
                    {
                      "label": "Petite Riviere de Nippes",
                      "value": "Petite Riviere de Nippes"
                    },
                    {
                      "label": "Pignon",
                      "value": "Pignon"
                    },
                    {
                      "label": "Pilate",
                      "value": "Pilate"
                    },
                    {
                      "label": "Plaine du Nord",
                      "value": "Plaine du Nord"
                    },
                    {
                      "label": "Plaisance",
                      "value": "Plaisance"
                    },
                    {
                      "label": "Plaisance du Sud",
                      "value": "Plaisance du Sud"
                    },
                    {
                      "label": "Pointe a Raquette",
                      "value": "Pointe a Raquette"
                    },
                    {
                      "label": "Port-a-Piment",
                      "value": "Port-a-Piment"
                    },
                    {
                      "label": "Port-au-Prince",
                      "value": "Port-au-Prince"
                    },
                    {
                      "label": "Port-de-Paix",
                      "value": "Port-de-Paix"
                    },
                    {
                      "label": "Port-Margot",
                      "value": "Port-Margot"
                    },
                    {
                      "label": "Port-Salut",
                      "value": "Port-Salut"
                    },
                    {
                      "label": "Quartier Morin",
                      "value": "Quartier Morin"
                    },
                    {
                      "label": "Ranquitte",
                      "value": "Ranquitte"
                    },
                    {
                      "label": "Roche a Bateau",
                      "value": "Roche a Bateau"
                    },
                    {
                      "label": "Roseaux",
                      "value": "Roseaux"
                    },
                    {
                      "label": "Saint-Louis du Nord",
                      "value": "Saint-Louis du Nord"
                    },
                    {
                      "label": "Saint-Marc",
                      "value": "Saint-Marc"
                    },
                    {
                      "label": "Saint-Michel de l'Attalaye",
                      "value": "Saint-Michel de l'Attalaye"
                    },
                    {
                      "label": "Saint-Raphael",
                      "value": "Saint-Raphael"
                    },
                    {
                      "label": "Saint Jean du Sud",
                      "value": "Saint Jean du Sud"
                    },
                    {
                      "label": "Saint Louis du Sud",
                      "value": "Saint Louis du Sud"
                    },
                    {
                      "label": "Sainte Suzanne",
                      "value": "Sainte Suzanne"
                    },
                    {
                      "label": "Saut d'Eau",
                      "value": "Saut d'Eau"
                    },
                    {
                      "label": "Savanette",
                      "value": "Savanette"
                    },
                    {
                      "label": "Tabarre",
                      "value": "Tabarre"
                    },
                    {
                      "label": "Terre Neuve",
                      "value": "Terre Neuve"
                    },
                    {
                      "label": "Terrier Rouge",
                      "value": "Terrier Rouge"
                    },
                    {
                      "label": "Thiotte",
                      "value": "Thiotte"
                    },
                    {
                      "label": "Thomassique",
                      "value": "Thomassique"
                    },
                    {
                      "label": "Thomazeau",
                      "value": "Thomazeau"
                    },
                    {
                      "label": "La Gonave",
                      "value": "La Gonave"
                    },
                    {
                      "label": "Thomonde",
                      "value": "Thomonde"
                    },
                    {
                      "label": "Tiburon",
                      "value": "Tiburon"
                    },
                    {
                      "label": "Torbeck",
                      "value": "Torbeck"
                    },
                    {
                      "label": "Trou du Nord",
                      "value": "Trou du Nord"
                    },
                    {
                      "label": "Vallieres",
                      "value": "Vallieres"
                    },
                    {
                      "label": "Verrettes",
                      "value": "Verrettes"
                    },
                    {
                      "label": "Etazini",
                      "value": "Etazini"
                    },
                    {
                      "label": "Canada",
                      "value": "Canada"
                    },
                    {
                      "label": "France",
                      "value": "France"
                    },
                    {
                      "label": "Brezil",
                      "value": "Brezil"
                    },
                    {
                      "label": "Chili",
                      "value": "Chili"
                    },
                    {
                      "label": "Guyanne",
                      "value": "Guyanne"
                    },
                    {
                      "label": "Mexique",
                      "value": "Mexique"
                    },
                    {
                      "label": "Lot Peyi",
                      "value": "Lot Peyi"
                    }
                  ]
                }
              },
              {
                "type": "TextField",
                "key": "7c97",
                "label": "4.11 Depi konbyen ane li rete nan kay la",
                "description": null,
                "required": true,
                "disabled": false,
                "hidden": false,
                "data_name": "411_depi_konbyen_ane_li_rete_nan_kay_la",
                "default_value": null,
                "visible_conditions_type": "all",
                "visible_conditions_behavior": "clear",
                "visible_conditions": [
                  {
                    "field_key": "0030",
                    "operator": "less_than",
                    "value": "2020"
                  }
                ],
                "required_conditions_type": null,
                "required_conditions": null,
                "ai_prompt": null,
                "numeric": true,
                "format": "decimal",
                "min": 0.0,
                "max": 120.0,
                "min_length": null,
                "max_length": null,
                "default_previous_value": false
              },
              {
                "type": "YesNoField",
                "key": "3cee",
                "label": "4.13.1 Eske li te rete yon lot kote avan",
                "description": null,
                "required": true,
                "disabled": false,
                "hidden": false,
                "data_name": "4131_eske_li_te_rete_yon_lot_kote_avan",
                "default_value": null,
                "visible_conditions_type": null,
                "visible_conditions_behavior": "clear",
                "visible_conditions": null,
                "required_conditions_type": null,
                "required_conditions": null,
                "ai_prompt": null,
                "positive": {
                  "label": "Wi",
                  "value": "wi"
                },
                "negative": {
                  "label": "Non",
                  "value": "non"
                },
                "neutral": {
                  "label": "NA",
                  "value": "na"
                },
                "neutral_enabled": true,
                "default_previous_value": false
              },
              {
                "type": "ChoiceField",
                "key": "14b1",
                "label": "4.13 Kote li te rete anvan",
                "description": null,
                "required": true,
                "disabled": false,
                "hidden": false,
                "data_name": "413_kote_li_te_rete_anvan",
                "default_value": null,
                "visible_conditions_type": "all",
                "visible_conditions_behavior": "clear",
                "visible_conditions": [
                  {
                    "field_key": "3cee",
                    "operator": "equal_to",
                    "value": "wi"
                  }
                ],
                "required_conditions_type": null,
                "required_conditions": null,
                "ai_prompt": null,
                "multiple": false,
                "allow_other": false,
                "default_previous_value": false,
                "choice_list_schema": {
                  "name": "Lis Komin Ayiti",
                  "description": "",
                  "version": 2,
                  "created_at": "2025-02-06T15:10:54Z",
                  "updated_at": "2025-02-26T15:11:32Z",
                  "created_by": "Administrasyon Kore Vwazen",
                  "created_by_id": "2cf631ca-de6b-463f-9b04-2e868535a690",
                  "updated_by": "Administrasyon Kore Vwazen",
                  "updated_by_id": "2cf631ca-de6b-463f-9b04-2e868535a690",
                  "choices": [
                    {
                      "label": "Abricots",
                      "value": "Abricots"
                    },
                    {
                      "label": "Acul du Nord",
                      "value": "Acul du Nord"
                    },
                    {
                      "label": "Anse-a-Foleur",
                      "value": "Anse-a-Foleur"
                    },
                    {
                      "label": "Anse-a-Pitre",
                      "value": "Anse-a-Pitre"
                    },
                    {
                      "label": "Anse-a-Veau",
                      "value": "Anse-a-Veau"
                    },
                    {
                      "label": "Anse-a-Galets",
                      "value": "Anse-a-Galets"
                    },
                    {
                      "label": "Anse d'Hainault",
                      "value": "Anse d'Hainault"
                    },
                    {
                      "label": "Anse Rouge",
                      "value": "Anse Rouge"
                    },
                    {
                      "label": "Aquin",
                      "value": "Aquin"
                    },
                    {
                      "label": "Arcahaie",
                      "value": "Arcahaie"
                    },
                    {
                      "label": "Arnaud",
                      "value": "Arnaud"
                    },
                    {
                      "label": "Arniquet",
                      "value": "Arniquet"
                    },
                    {
                      "label": "Bahon",
                      "value": "Bahon"
                    },
                    {
                      "label": "Baie de Henne",
                      "value": "Baie de Henne"
                    },
                    {
                      "label": "Bainet",
                      "value": "Bainet"
                    },
                    {
                      "label": "Baraderes",
                      "value": "Baraderes"
                    },
                    {
                      "label": "Bas Limbe",
                      "value": "Bas Limbe"
                    },
                    {
                      "label": "Bassin Bleu",
                      "value": "Bassin Bleu"
                    },
                    {
                      "label": "Beaumont",
                      "value": "Beaumont"
                    },
                    {
                      "label": "Belladere",
                      "value": "Belladere"
                    },
                    {
                      "label": "Belle Anse",
                      "value": "Belle Anse"
                    },
                    {
                      "label": "Bombardopolis",
                      "value": "Bombardopolis"
                    },
                    {
                      "label": "Bonbon",
                      "value": "Bonbon"
                    },
                    {
                      "label": "Borgne",
                      "value": "Borgne"
                    },
                    {
                      "label": "Boucan Carre",
                      "value": "Boucan Carre"
                    },
                    {
                      "label": "Cabaret",
                      "value": "Cabaret"
                    },
                    {
                      "label": "Camp-Perrin",
                      "value": "Camp-Perrin"
                    },
                    {
                      "label": "Cap-Haitien",
                      "value": "Cap-Haitien"
                    },
                    {
                      "label": "Capotille",
                      "value": "Capotille"
                    },
                    {
                      "label": "Caracol",
                      "value": "Caracol"
                    },
                    {
                      "label": "Carice",
                      "value": "Carice"
                    },
                    {
                      "label": "Carrefour",
                      "value": "Carrefour"
                    },
                    {
                      "label": "Cavaillon",
                      "value": "Cavaillon"
                    },
                    {
                      "label": "Cayes-Jacmel",
                      "value": "Cayes-Jacmel"
                    },
                    {
                      "label": "Cerca Carvajal",
                      "value": "Cerca Carvajal"
                    },
                    {
                      "label": "Cerca La Source",
                      "value": "Cerca La Source"
                    },
                    {
                      "label": "Chambellan",
                      "value": "Chambellan"
                    },
                    {
                      "label": "Chamsolme",
                      "value": "Chamsolme"
                    },
                    {
                      "label": "Chantal",
                      "value": "Chantal"
                    },
                    {
                      "label": "Chardonnieres",
                      "value": "Chardonnieres"
                    },
                    {
                      "label": "Cite Soleil",
                      "value": "Cite Soleil"
                    },
                    {
                      "label": "Corail",
                      "value": "Corail"
                    },
                    {
                      "label": "Cornillon / Grand Bois",
                      "value": "Cornillon / Grand Bois"
                    },
                    {
                      "label": "Coteaux",
                      "value": "Coteaux"
                    },
                    {
                      "label": "Cotes de Fer",
                      "value": "Cotes de Fer"
                    },
                    {
                      "label": "Croix-Des-Bouquets",
                      "value": "Croix-Des-Bouquets"
                    },
                    {
                      "label": "Dame Marie",
                      "value": "Dame Marie"
                    },
                    {
                      "label": "Delmas",
                      "value": "Delmas"
                    },
                    {
                      "label": "Desdunes",
                      "value": "Desdunes"
                    },
                    {
                      "label": "Dessalines",
                      "value": "Dessalines"
                    },
                    {
                      "label": "Dondon",
                      "value": "Dondon"
                    },
                    {
                      "label": "Ennery",
                      "value": "Ennery"
                    },
                    {
                      "label": "Ferrier",
                      "value": "Ferrier"
                    },
                    {
                      "label": "Fonds-Verrettes",
                      "value": "Fonds-Verrettes"
                    },
                    {
                      "label": "Fond-des-Blancs",
                      "value": "Fond-des-Blancs"
                    },
                    {
                      "label": "Fonds-des-Negres",
                      "value": "Fonds-des-Negres"
                    },
                    {
                      "label": "Fort-Liberte",
                      "value": "Fort-Liberte"
                    },
                    {
                      "label": "Ganthier",
                      "value": "Ganthier"
                    },
                    {
                      "label": "Gonaives",
                      "value": "Gonaives"
                    },
                    {
                      "label": "Grand-Boucan",
                      "value": "Grand-Boucan"
                    },
                    {
                      "label": "Grand-Goave",
                      "value": "Grand-Goave"
                    },
                    {
                      "label": "Grand Gosier",
                      "value": "Grand Gosier"
                    },
                    {
                      "label": "Grande Riviere Du Nord",
                      "value": "Grande Riviere Du Nord"
                    },
                    {
                      "label": "Grande Saline",
                      "value": "Grande Saline"
                    },
                    {
                      "label": "Gressier",
                      "value": "Gressier"
                    },
                    {
                      "label": "Gros Morne",
                      "value": "Gros Morne"
                    },
                    {
                      "label": "Hinche",
                      "value": "Hinche"
                    },
                    {
                      "label": "Ile a Vache",
                      "value": "Ile a Vache"
                    },
                    {
                      "label": "Jacmel",
                      "value": "Jacmel"
                    },
                    {
                      "label": "Jean Rabel",
                      "value": "Jean Rabel"
                    },
                    {
                      "label": "Jeremie",
                      "value": "Jeremie"
                    },
                    {
                      "label": "Kenscoff",
                      "value": "Kenscoff"
                    },
                    {
                      "label": "L'Asile",
                      "value": "L'Asile"
                    },
                    {
                      "label": "L'Estere",
                      "value": "L'Estere"
                    },
                    {
                      "label": "La Chapelle",
                      "value": "La Chapelle"
                    },
                    {
                      "label": "La Tortue",
                      "value": "La Tortue"
                    },
                    {
                      "label": "La Vallee",
                      "value": "La Vallee"
                    },
                    {
                      "label": "La Victoire",
                      "value": "La Victoire"
                    },
                    {
                      "label": "Lascahobas",
                      "value": "Lascahobas"
                    },
                    {
                      "label": "Leogane",
                      "value": "Leogane"
                    },
                    {
                      "label": "Les Anglais",
                      "value": "Les Anglais"
                    },
                    {
                      "label": "Les Cayes",
                      "value": "Les Cayes"
                    },
                    {
                      "label": "Les Irois",
                      "value": "Les Irois"
                    },
                    {
                      "label": "Limbe",
                      "value": "Limbe"
                    },
                    {
                      "label": "Limonade",
                      "value": "Limonade"
                    },
                    {
                      "label": "Maissade",
                      "value": "Maissade"
                    },
                    {
                      "label": "Maniche",
                      "value": "Maniche"
                    },
                    {
                      "label": "Marigot",
                      "value": "Marigot"
                    },
                    {
                      "label": "Marmelade",
                      "value": "Marmelade"
                    },
                    {
                      "label": "Milot",
                      "value": "Milot"
                    },
                    {
                      "label": "Miragoane",
                      "value": "Miragoane"
                    },
                    {
                      "label": "Mirebalais",
                      "value": "Mirebalais"
                    },
                    {
                      "label": "Mole Saint Nicolas",
                      "value": "Mole Saint Nicolas"
                    },
                    {
                      "label": "Mombin Crochu",
                      "value": "Mombin Crochu"
                    },
                    {
                      "label": "Mont-Organise",
                      "value": "Mont-Organise"
                    },
                    {
                      "label": "Moron",
                      "value": "Moron"
                    },
                    {
                      "label": "Ouanaminthe",
                      "value": "Ouanaminthe"
                    },
                    {
                      "label": "Paillant",
                      "value": "Paillant"
                    },
                    {
                      "label": "Perches",
                      "value": "Perches"
                    },
                    {
                      "label": "Pestel",
                      "value": "Pestel"
                    },
                    {
                      "label": "Petion-Ville",
                      "value": "Petion-Ville"
                    },
                    {
                      "label": "Petit-Goave",
                      "value": "Petit-Goave"
                    },
                    {
                      "label": "Petit Trou de Nippes",
                      "value": "Petit Trou de Nippes"
                    },
                    {
                      "label": "Petite Riviere de l'Artibonite",
                      "value": "Petite Riviere de l'Artibonite"
                    },
                    {
                      "label": "Petite Riviere de Nippes",
                      "value": "Petite Riviere de Nippes"
                    },
                    {
                      "label": "Pignon",
                      "value": "Pignon"
                    },
                    {
                      "label": "Pilate",
                      "value": "Pilate"
                    },
                    {
                      "label": "Plaine du Nord",
                      "value": "Plaine du Nord"
                    },
                    {
                      "label": "Plaisance",
                      "value": "Plaisance"
                    },
                    {
                      "label": "Plaisance du Sud",
                      "value": "Plaisance du Sud"
                    },
                    {
                      "label": "Pointe a Raquette",
                      "value": "Pointe a Raquette"
                    },
                    {
                      "label": "Port-a-Piment",
                      "value": "Port-a-Piment"
                    },
                    {
                      "label": "Port-au-Prince",
                      "value": "Port-au-Prince"
                    },
                    {
                      "label": "Port-de-Paix",
                      "value": "Port-de-Paix"
                    },
                    {
                      "label": "Port-Margot",
                      "value": "Port-Margot"
                    },
                    {
                      "label": "Port-Salut",
                      "value": "Port-Salut"
                    },
                    {
                      "label": "Quartier Morin",
                      "value": "Quartier Morin"
                    },
                    {
                      "label": "Ranquitte",
                      "value": "Ranquitte"
                    },
                    {
                      "label": "Roche a Bateau",
                      "value": "Roche a Bateau"
                    },
                    {
                      "label": "Roseaux",
                      "value": "Roseaux"
                    },
                    {
                      "label": "Saint-Louis du Nord",
                      "value": "Saint-Louis du Nord"
                    },
                    {
                      "label": "Saint-Marc",
                      "value": "Saint-Marc"
                    },
                    {
                      "label": "Saint-Michel de l'Attalaye",
                      "value": "Saint-Michel de l'Attalaye"
                    },
                    {
                      "label": "Saint-Raphael",
                      "value": "Saint-Raphael"
                    },
                    {
                      "label": "Saint Jean du Sud",
                      "value": "Saint Jean du Sud"
                    },
                    {
                      "label": "Saint Louis du Sud",
                      "value": "Saint Louis du Sud"
                    },
                    {
                      "label": "Sainte Suzanne",
                      "value": "Sainte Suzanne"
                    },
                    {
                      "label": "Saut d'Eau",
                      "value": "Saut d'Eau"
                    },
                    {
                      "label": "Savanette",
                      "value": "Savanette"
                    },
                    {
                      "label": "Tabarre",
                      "value": "Tabarre"
                    },
                    {
                      "label": "Terre Neuve",
                      "value": "Terre Neuve"
                    },
                    {
                      "label": "Terrier Rouge",
                      "value": "Terrier Rouge"
                    },
                    {
                      "label": "Thiotte",
                      "value": "Thiotte"
                    },
                    {
                      "label": "Thomassique",
                      "value": "Thomassique"
                    },
                    {
                      "label": "Thomazeau",
                      "value": "Thomazeau"
                    },
                    {
                      "label": "La Gonave",
                      "value": "La Gonave"
                    },
                    {
                      "label": "Thomonde",
                      "value": "Thomonde"
                    },
                    {
                      "label": "Tiburon",
                      "value": "Tiburon"
                    },
                    {
                      "label": "Torbeck",
                      "value": "Torbeck"
                    },
                    {
                      "label": "Trou du Nord",
                      "value": "Trou du Nord"
                    },
                    {
                      "label": "Vallieres",
                      "value": "Vallieres"
                    },
                    {
                      "label": "Verrettes",
                      "value": "Verrettes"
                    },
                    {
                      "label": "Etazini",
                      "value": "Etazini"
                    },
                    {
                      "label": "Canada",
                      "value": "Canada"
                    },
                    {
                      "label": "France",
                      "value": "France"
                    },
                    {
                      "label": "Brezil",
                      "value": "Brezil"
                    },
                    {
                      "label": "Chili",
                      "value": "Chili"
                    },
                    {
                      "label": "Guyanne",
                      "value": "Guyanne"
                    },
                    {
                      "label": "Mexique",
                      "value": "Mexique"
                    },
                    {
                      "label": "Lot Peyi",
                      "value": "Lot Peyi"
                    }
                  ]
                }
              },
              {
                "type": "ChoiceField",
                "key": "5a50",
                "label": "4.14 Ki rezon ki fè li vini nan zon nan",
                "description": null,
                "required": true,
                "disabled": false,
                "hidden": false,
                "data_name": "414_rezon_ki_fe_li_vini_nan_zon_nan",
                "default_value": null,
                "visible_conditions_type": "all",
                "visible_conditions_behavior": "clear",
                "visible_conditions": [
                  {
                    "field_key": "3cee",
                    "operator": "equal_to",
                    "value": "wi"
                  }
                ],
                "required_conditions_type": null,
                "required_conditions": null,
                "ai_prompt": null,
                "multiple": false,
                "allow_other": false,
                "choices": [
                  {
                    "label": "Ensekirite",
                    "value": "Ensekirite"
                  },
                  {
                    "label": "Travay",
                    "value": "Travay"
                  },
                  {
                    "label": "Fanmi",
                    "value": "Fanmi"
                  },
                  {
                    "label": "Lòt",
                    "value": "Lòt"
                  }
                ],
                "default_previous_value": false
              },
              {
                "type": "YesNoField",
                "key": "2a90",
                "label": "4.15 Eske moun sa gen yon andikap",
                "description": null,
                "required": true,
                "disabled": false,
                "hidden": false,
                "data_name": "415_eske_moun_sa_gen_yon_andikap",
                "default_value": null,
                "visible_conditions_type": null,
                "visible_conditions_behavior": "clear",
                "visible_conditions": null,
                "required_conditions_type": null,
                "required_conditions": null,
                "ai_prompt": null,
                "positive": {
                  "label": "Wi",
                  "value": "wi"
                },
                "negative": {
                  "label": "Non",
                  "value": "non"
                },
                "neutral": {
                  "label": "N/A",
                  "value": "n/a"
                },
                "neutral_enabled": false,
                "default_previous_value": false
              },
              {
                "type": "ChoiceField",
                "key": "cb50",
                "label": "4.16 Ki tip andikap",
                "description": null,
                "required": true,
                "disabled": false,
                "hidden": false,
                "data_name": "416_tip_andikap",
                "default_value": null,
                "visible_conditions_type": "all",
                "visible_conditions_behavior": "clear",
                "visible_conditions": [
                  {
                    "field_key": "2a90",
                    "operator": "equal_to",
                    "value": "wi"
                  }
                ],
                "required_conditions_type": null,
                "required_conditions": null,
                "ai_prompt": null,
                "multiple": false,
                "allow_other": false,
                "choices": [
                  {
                    "label": "Fizik",
                    "value": "Fizik"
                  },
                  {
                    "label": "Mantal",
                    "value": "Mantal"
                  },
                  {
                    "label": "Lòt",
                    "value": "Lòt"
                  }
                ],
                "default_previous_value": false
              },
              {
                "type": "YesNoField",
                "key": "7ce0",
                "label": "999 Èske gen sèvis disponib pou sipòte bezwen andikap moun sa (epi èske yo itilize yo)",
                "description": null,
                "required": true,
                "disabled": false,
                "hidden": false,
                "data_name": "999_eske_gen_sevis_disponib_pou_sipote_bezwen_andikap_sa",
                "default_value": null,
                "visible_conditions_type": "all",
                "visible_conditions_behavior": "clear",
                "visible_conditions": [
                  {
                    "field_key": "2a90",
                    "operator": "equal_to",
                    "value": "wi"
                  }
                ],
                "required_conditions_type": null,
                "required_conditions": null,
                "ai_prompt": null,
                "positive": {
                  "label": "Wi",
                  "value": "wi"
                },
                "negative": {
                  "label": "Non",
                  "value": "non"
                },
                "neutral": {
                  "label": "N/A",
                  "value": "n/a"
                },
                "neutral_enabled": false,
                "default_previous_value": false
              },
              {
                "type": "YesNoField",
                "key": "32e1",
                "label": "999 Eske moun sa afilye ak yon relijyon",
                "description": "Yon repons 'Non' vle di ke moun sa pa relijye",
                "required": true,
                "disabled": false,
                "hidden": false,
                "data_name": "999_eske_moun_sa_afilye_ak_yon_relijyon",
                "default_value": null,
                "visible_conditions_type": null,
                "visible_conditions_behavior": "clear",
                "visible_conditions": null,
                "required_conditions_type": null,
                "required_conditions": null,
                "ai_prompt": null,
                "positive": {
                  "label": "Wi",
                  "value": "wi"
                },
                "negative": {
                  "label": "Non",
                  "value": "non"
                },
                "neutral": {
                  "label": "N/A",
                  "value": "n/a"
                },
                "neutral_enabled": false,
                "default_previous_value": false
              },
              {
                "type": "ChoiceField",
                "key": "2b10",
                "label": "999 Ak ki relijyon moun sa afilye",
                "description": null,
                "required": true,
                "disabled": false,
                "hidden": false,
                "data_name": "999_ak_ki_relijyon_moun_sa_afilye",
                "default_value": null,
                "visible_conditions_type": null,
                "visible_conditions_behavior": "clear",
                "visible_conditions": null,
                "required_conditions_type": null,
                "required_conditions": null,
                "ai_prompt": null,
                "multiple": false,
                "allow_other": false,
                "choices": [
                  {
                    "label": "Katolik",
                    "value": "Katolik"
                  },
                  {
                    "label": "Pwotestan",
                    "value": "Pwotestan"
                  },
                  {
                    "label": "Vodou",
                    "value": "Vodou"
                  },
                  {
                    "label": "Boudis",
                    "value": "Boudis"
                  },
                  {
                    "label": "Izlam",
                    "value": "Izlam"
                  },
                  {
                    "label": "Lòt",
                    "value": "Lòt"
                  }
                ],
                "default_previous_value": false
              },
              {
                "type": "Label",
                "key": "28f0",
                "label": "❌!!!Obsevasyon!!!❌\nNA reprezante si moun nan pa konnen.",
                "description": null,
                "required": false,
                "disabled": false,
                "hidden": false,
                "data_name": "obsevasyonna_reprezante_si_moun_nan_pa_konnen",
                "default_value": null,
                "visible_conditions_type": null,
                "visible_conditions_behavior": "clear",
                "visible_conditions": null,
                "required_conditions_type": null,
                "required_conditions": null
              },
              {
                "type": "YesNoField",
                "key": "5330",
                "label": "999 Èske moun sa gen pyès idantifikasyon leta",
                "description": null,
                "required": true,
                "disabled": false,
                "hidden": false,
                "data_name": "999_eske_moun_sa_gen_pyes_idantifikasyon_leta",
                "default_value": null,
                "visible_conditions_type": null,
                "visible_conditions_behavior": "clear",
                "visible_conditions": null,
                "required_conditions_type": null,
                "required_conditions": null,
                "ai_prompt": null,
                "positive": {
                  "label": "Wi",
                  "value": "wi"
                },
                "negative": {
                  "label": "Non",
                  "value": "non"
                },
                "neutral": {
                  "label": "NA",
                  "value": "na"
                },
                "neutral_enabled": true,
                "default_previous_value": false
              },
              {
                "type": "YesNoField",
                "key": "333c",
                "label": "999 Èske moun sa gen ak de nesans - Pyès Idantifikasyon ",
                "description": null,
                "required": true,
                "disabled": false,
                "hidden": false,
                "data_name": "999_eske_moun_sa_gen_ak_de_nesans_pyes_idantifikasyon_",
                "default_value": null,
                "visible_conditions_type": "all",
                "visible_conditions_behavior": "clear",
                "visible_conditions": [
                  {
                    "field_key": "5330",
                    "operator": "equal_to",
                    "value": "wi"
                  }
                ],
                "required_conditions_type": null,
                "required_conditions": null,
                "ai_prompt": null,
                "positive": {
                  "label": "Wi",
                  "value": "wi"
                },
                "negative": {
                  "label": "Non",
                  "value": "non"
                },
                "neutral": {
                  "label": "NA",
                  "value": "na"
                },
                "neutral_enabled": true,
                "default_previous_value": false
              },
              {
                "type": "YesNoField",
                "key": "7406",
                "label": "999 Èske moun sa gen kat idantite - Pyès Idantifikasyon ",
                "description": null,
                "required": true,
                "disabled": false,
                "hidden": false,
                "data_name": "999_eske_moun_sa_gen_kat_idantite",
                "default_value": null,
                "visible_conditions_type": "all",
                "visible_conditions_behavior": "clear",
                "visible_conditions": [
                  {
                    "field_key": "5330",
                    "operator": "equal_to",
                    "value": "wi"
                  },
                  {
                    "field_key": "2260",
                    "operator": "greater_than",
                    "value": "17"
                  }
                ],
                "required_conditions_type": null,
                "required_conditions": null,
                "ai_prompt": null,
                "positive": {
                  "label": "Wi",
                  "value": "wi"
                },
                "negative": {
                  "label": "Non",
                  "value": "non"
                },
                "neutral": {
                  "label": "NA",
                  "value": "na"
                },
                "neutral_enabled": true,
                "default_previous_value": false
              },
              {
                "type": "YesNoField",
                "key": "4d00",
                "label": "999 Èske moun sa gen lisans-pèmi kondi - Pyès Idantifikasyon ",
                "description": null,
                "required": true,
                "disabled": false,
                "hidden": false,
                "data_name": "999_eske_moun_sa_gen_lisans_pemi_kondi",
                "default_value": null,
                "visible_conditions_type": "all",
                "visible_conditions_behavior": "clear",
                "visible_conditions": [
                  {
                    "field_key": "5330",
                    "operator": "equal_to",
                    "value": "wi"
                  },
                  {
                    "field_key": "2260",
                    "operator": "greater_than",
                    "value": "15"
                  }
                ],
                "required_conditions_type": null,
                "required_conditions": null,
                "ai_prompt": null,
                "positive": {
                  "label": "Wi",
                  "value": "wi"
                },
                "negative": {
                  "label": "Non",
                  "value": "non"
                },
                "neutral": {
                  "label": "NA",
                  "value": "na"
                },
                "neutral_enabled": true,
                "default_previous_value": false
              },
              {
                "type": "YesNoField",
                "key": "5580",
                "label": "999 Èske moun sa gen paspò - Pyès Idantifikasyon ",
                "description": null,
                "required": true,
                "disabled": false,
                "hidden": false,
                "data_name": "999_eske_moun_sa_gen_paspo",
                "default_value": null,
                "visible_conditions_type": "all",
                "visible_conditions_behavior": "clear",
                "visible_conditions": [
                  {
                    "field_key": "5330",
                    "operator": "equal_to",
                    "value": "wi"
                  }
                ],
                "required_conditions_type": null,
                "required_conditions": null,
                "ai_prompt": null,
                "positive": {
                  "label": "Wi",
                  "value": "wi"
                },
                "negative": {
                  "label": "Non",
                  "value": "non"
                },
                "neutral": {
                  "label": "NA",
                  "value": "na"
                },
                "neutral_enabled": true,
                "default_previous_value": false
              },
              {
                "type": "Section",
                "key": "2e80",
                "label": "Edikasyon",
                "description": null,
                "required": false,
                "disabled": false,
                "hidden": false,
                "data_name": "edikasyon",
                "default_value": null,
                "visible_conditions_type": null,
                "visible_conditions_behavior": "clear",
                "visible_conditions": null,
                "required_conditions_type": null,
                "required_conditions": null,
                "display": "inline",
                "elements": [
                  {
                    "type": "Label",
                    "key": "277b",
                    "label": "❌!!!Obsevasyon!!!❌\nWap chwazi Non aplikab si moun nan poko nan laj pou ale lekol. Pa egzanp yon timoun 5 an.",
                    "description": null,
                    "required": false,
                    "disabled": false,
                    "hidden": false,
                    "data_name": "obsevasyonwap_chwazi_non_aplikab_si_moun_nan_poko_n",
                    "default_value": null,
                    "visible_conditions_type": null,
                    "visible_conditions_behavior": "clear",
                    "visible_conditions": null,
                    "required_conditions_type": null,
                    "required_conditions": null
                  },
                  {
                    "type": "ChoiceField",
                    "key": "31dd",
                    "label": "4.17  Eske moun sa konn li ak ekri",
                    "description": "Le nou pale de li ak ekri, nou vle pale de kreyol.",
                    "required": true,
                    "disabled": false,
                    "hidden": false,
                    "data_name": "417_eske_moun_sa_konn_li_ak_ekri",
                    "default_value": null,
                    "visible_conditions_type": null,
                    "visible_conditions_behavior": "clear",
                    "visible_conditions": null,
                    "required_conditions_type": null,
                    "required_conditions": null,
                    "ai_prompt": null,
                    "multiple": false,
                    "allow_other": false,
                    "choices": [
                      {
                        "label": "Wi",
                        "value": "Wi"
                      },
                      {
                        "label": "Non",
                        "value": "Non"
                      },
                      {
                        "label": "Non aplikab",
                        "value": "Non aplikab"
                      },
                      {
                        "label": "Pa konnen",
                        "value": "Pa konnen"
                      }
                    ],
                    "default_previous_value": false
                  },
                  {
                    "type": "ChoiceField",
                    "key": "5a2d",
                    "label": "4.18 Ki dènye nivo edikasyon li resevwa",
                    "description": null,
                    "required": true,
                    "disabled": false,
                    "hidden": false,
                    "data_name": "418_denye_nivo_edikasyon_li_resevwa",
                    "default_value": null,
                    "visible_conditions_type": null,
                    "visible_conditions_behavior": "clear",
                    "visible_conditions": null,
                    "required_conditions_type": null,
                    "required_conditions": null,
                    "ai_prompt": null,
                    "multiple": false,
                    "allow_other": false,
                    "choices": [
                      {
                        "label": "Preskolè",
                        "value": "Preskolè"
                      },
                      {
                        "label": "Primè - 1AF - 6AF",
                        "value": "Primè - 1AF - 6AF"
                      },
                      {
                        "label": "Segondè - 7yèm-4yèm",
                        "value": "Segondè - 7yèm-4yèm"
                      },
                      {
                        "label": "Segondè - NS1-NS4 (9yèm - Filo)",
                        "value": "Segondè - NS1-NS4 (9yèm - Filo)"
                      },
                      {
                        "label": "Inivèsite",
                        "value": "Inivèsite"
                      },
                      {
                        "label": "Pa t janm ale",
                        "value": "Pa t janm ale"
                      },
                      {
                        "label": "Non aplikab",
                        "value": "Non aplikab"
                      },
                      {
                        "label": "Pa konnen",
                        "value": "Pa konnen"
                      },
                      {
                        "label": "Lòt",
                        "value": "Lòt"
                      }
                    ],
                    "default_previous_value": false
                  },
                  {
                    "type": "Label",
                    "key": "1682",
                    "label": "❌!!!Obsevasyon!!!❌\nLekol vle di tout nivo yo. ",
                    "description": null,
                    "required": false,
                    "disabled": false,
                    "hidden": false,
                    "data_name": "obsevasyonlekol_vle_di_tout_nivo_yo_",
                    "default_value": null,
                    "visible_conditions_type": null,
                    "visible_conditions_behavior": "clear",
                    "visible_conditions": null,
                    "required_conditions_type": null,
                    "required_conditions": null
                  },
                  {
                    "type": "YesNoField",
                    "key": "21c1",
                    "label": "4.19 Eske li toujou ale lekòl",
                    "description": null,
                    "required": true,
                    "disabled": false,
                    "hidden": false,
                    "data_name": "419_eske_li_toujou_ale_lekol",
                    "default_value": null,
                    "visible_conditions_type": "all",
                    "visible_conditions_behavior": "clear",
                    "visible_conditions": [
                      {
                        "field_key": "5a2d",
                        "operator": "not_equal_to",
                        "value": "Non aplikab"
                      },
                      {
                        "field_key": "5a2d",
                        "operator": "not_equal_to",
                        "value": "Pa konnen"
                      }
                    ],
                    "required_conditions_type": null,
                    "required_conditions": null,
                    "ai_prompt": null,
                    "positive": {
                      "label": "Wi",
                      "value": "wi"
                    },
                    "negative": {
                      "label": "Non",
                      "value": "non"
                    },
                    "neutral": {
                      "label": "Non Aplikab",
                      "value": "non aplikab"
                    },
                    "neutral_enabled": true,
                    "default_previous_value": false
                  },
                  {
                    "type": "ChoiceField",
                    "key": "48ce",
                    "label": "999 Nan ki klas moun sa ye",
                    "description": null,
                    "required": true,
                    "disabled": false,
                    "hidden": false,
                    "data_name": "999_nan_ki_klas_moun_sa_ye",
                    "default_value": null,
                    "visible_conditions_type": "all",
                    "visible_conditions_behavior": "clear",
                    "visible_conditions": [
                      {
                        "field_key": "21c1",
                        "operator": "equal_to",
                        "value": "wi"
                      }
                    ],
                    "required_conditions_type": null,
                    "required_conditions": null,
                    "ai_prompt": null,
                    "multiple": false,
                    "allow_other": false,
                    "choices": [
                      {
                        "label": "Preskolè",
                        "value": "Preskolè"
                      },
                      {
                        "label": "Primè - 1AF - 6AF",
                        "value": "Primè - 1AF - 6AF"
                      },
                      {
                        "label": "Segondè - 7yèm-4yèm",
                        "value": "Segondè - 7yèm-4yèm"
                      },
                      {
                        "label": "Segondè - NS1-NS4 (9yèm - Filo)",
                        "value": "Segondè - NS1-NS4 (9yèm - Filo)"
                      },
                      {
                        "label": "Inivèsite",
                        "value": "Inivèsite"
                      }
                    ],
                    "default_previous_value": false
                  },
                  {
                    "type": "ChoiceField",
                    "key": "5f03",
                    "label": "4.20 ki rezon ki fè li pa ale lekòl",
                    "description": null,
                    "required": true,
                    "disabled": false,
                    "hidden": false,
                    "data_name": "420_rezon_ki_fe_li_pa_ale_lekol",
                    "default_value": null,
                    "visible_conditions_type": "all",
                    "visible_conditions_behavior": "clear",
                    "visible_conditions": [
                      {
                        "field_key": "21c1",
                        "operator": "equal_to",
                        "value": "non"
                      }
                    ],
                    "required_conditions_type": null,
                    "required_conditions": null,
                    "ai_prompt": null,
                    "multiple": false,
                    "allow_other": false,
                    "choices": [
                      {
                        "label": "Mwayen ekonomik",
                        "value": "Mwayen ekonomik"
                      },
                      {
                        "label": "Pa enterese/Pa vle",
                        "value": "Pa enterese/Pa vle"
                      },
                      {
                        "label": "Ansent",
                        "value": "Ansent"
                      },
                      {
                        "label": "Travay",
                        "value": "Travay"
                      },
                      {
                        "label": "Andikap fizik",
                        "value": "Andikap fizik"
                      },
                      {
                        "label": "Andikap mantal",
                        "value": "Andikap mantal"
                      },
                      {
                        "label": "Pa nan laj pou sa",
                        "value": "Pa nan laj pou sa"
                      },
                      {
                        "label": "Maladi/Sante",
                        "value": "Maladi/Sante"
                      },
                      {
                        "label": "Fini ak etid li",
                        "value": "Fini ak etid li"
                      },
                      {
                        "label": "Pa gen nivo klas yo nan zòn nan",
                        "value": "Pa gen nivo klas yo nan zòn nan"
                      },
                      {
                        "label": "Distans lekòl la",
                        "value": "Distans lekòl la"
                      },
                      {
                        "label": "Lòt",
                        "value": "Lòt"
                      }
                    ],
                    "default_previous_value": false
                  },
                  {
                    "type": "TextField",
                    "key": "7cea",
                    "label": "4.21 ki lot rezon ki fè li pa ale lekòl",
                    "description": null,
                    "required": true,
                    "disabled": false,
                    "hidden": false,
                    "data_name": "421_lot_rezon_ki_fe_li_pa_ale_lekol",
                    "default_value": null,
                    "visible_conditions_type": "all",
                    "visible_conditions_behavior": "clear",
                    "visible_conditions": [
                      {
                        "field_key": "5f03",
                        "operator": "equal_to",
                        "value": "Lòt"
                      }
                    ],
                    "required_conditions_type": null,
                    "required_conditions": null,
                    "ai_prompt": null,
                    "numeric": false,
                    "pattern": null,
                    "pattern_description": null,
                    "min_length": null,
                    "max_length": null,
                    "default_previous_value": false
                  }
                ]
              },
              {
                "type": "Section",
                "key": "1fc0",
                "label": "Enfòmasyon Ekonomik, Bankè, ak Finansye",
                "description": null,
                "required": false,
                "disabled": false,
                "hidden": false,
                "data_name": "enfmasyon_ekonomik_bank_ak_finansye",
                "default_value": null,
                "visible_conditions_type": null,
                "visible_conditions_behavior": "clear",
                "visible_conditions": null,
                "required_conditions_type": null,
                "required_conditions": null,
                "display": "inline",
                "elements": [
                  {
                    "type": "Label",
                    "key": "5b80",
                    "label": "❌!!!Obsevasyon!!!❌\nWap chwazi Non aplikab si moun nan poko nan laj pou li fe aktivite ki ap antre kob.",
                    "description": null,
                    "required": false,
                    "disabled": false,
                    "hidden": false,
                    "data_name": "obsevasyonwap_chwazi_non_aplikab_si_moun_nan_poko_n",
                    "default_value": null,
                    "visible_conditions_type": null,
                    "visible_conditions_behavior": "clear",
                    "visible_conditions": null,
                    "required_conditions_type": null,
                    "required_conditions": null
                  },
                  {
                    "type": "YesNoField",
                    "key": "5890",
                    "label": "4.23 Eske li gen yon aktivite ki antre kòb",
                    "description": "Mete non aplikab si moun lan gen mwens ke 6 an",
                    "required": true,
                    "disabled": false,
                    "hidden": false,
                    "data_name": "423_eske_li_gen_yon_aktivite_ki_antre_kob",
                    "default_value": null,
                    "visible_conditions_type": null,
                    "visible_conditions_behavior": "clear",
                    "visible_conditions": null,
                    "required_conditions_type": null,
                    "required_conditions": null,
                    "ai_prompt": null,
                    "positive": {
                      "label": "Wi",
                      "value": "wi"
                    },
                    "negative": {
                      "label": "Non",
                      "value": "non"
                    },
                    "neutral": {
                      "label": "Non Aplikab",
                      "value": "non aplikab"
                    },
                    "neutral_enabled": true,
                    "default_previous_value": false
                  },
                  {
                    "type": "ChoiceField",
                    "key": "3ad0",
                    "label": "4.24 Stati anplwa",
                    "description": null,
                    "required": true,
                    "disabled": false,
                    "hidden": false,
                    "data_name": "424_stati_anplwa",
                    "default_value": null,
                    "visible_conditions_type": "all",
                    "visible_conditions_behavior": "clear",
                    "visible_conditions": [
                      {
                        "field_key": "5890",
                        "operator": "equal_to",
                        "value": "wi"
                      }
                    ],
                    "required_conditions_type": null,
                    "required_conditions": null,
                    "ai_prompt": null,
                    "multiple": false,
                    "allow_other": false,
                    "choices": [
                      {
                        "label": "Endepandan",
                        "value": "Endepandan"
                      },
                      {
                        "label": "Anplwaye-Salarye(Prive)",
                        "value": "Anplwaye-Salarye(Prive)"
                      },
                      {
                        "label": "Endepandan ak Employe-Salarye(Prive)",
                        "value": "Endepandan ak Employe-Salarye(Prive)"
                      },
                      {
                        "label": "Anplwaye Leta",
                        "value": "Anplwaye Leta"
                      },
                      {
                        "label": "Endepandan ak Anplwaye Leta",
                        "value": "Endepandan ak Anplwaye Leta"
                      }
                    ],
                    "default_previous_value": false
                  },
                  {
                    "type": "ChoiceField",
                    "key": "7920",
                    "label": "4.25 Ki prensipal aktivite li",
                    "description": null,
                    "required": true,
                    "disabled": false,
                    "hidden": false,
                    "data_name": "425_prensipal_aktivite_li",
                    "default_value": null,
                    "visible_conditions_type": "all",
                    "visible_conditions_behavior": "clear",
                    "visible_conditions": [
                      {
                        "field_key": "5890",
                        "operator": "equal_to",
                        "value": "wi"
                      }
                    ],
                    "required_conditions_type": null,
                    "required_conditions": null,
                    "ai_prompt": null,
                    "multiple": false,
                    "allow_other": false,
                    "default_previous_value": false,
                    "choice_list_schema": {
                      "name": "Aktivite Ekonomik",
                      "description": "",
                      "version": 1,
                      "created_at": "2025-02-06T15:10:54Z",
                      "updated_at": "2025-02-06T15:10:54Z",
                      "created_by": "Administrasyon Kore Vwazen",
                      "created_by_id": "2cf631ca-de6b-463f-9b04-2e868535a690",
                      "updated_by": "Administrasyon Kore Vwazen",
                      "updated_by_id": "2cf631ca-de6b-463f-9b04-2e868535a690",
                      "choices": [
                        {
                          "label": "Achitèk",
                          "value": "Achitèk"
                        },
                        {
                          "label": "Administratè",
                          "value": "Administratè"
                        },
                        {
                          "label": "Agrikiltè",
                          "value": "Agrikiltè"
                        },
                        {
                          "label": "Atis",
                          "value": "Atis"
                        },
                        {
                          "label": "Avoka",
                          "value": "Avoka"
                        },
                        {
                          "label": "Bòn - Domestic",
                          "value": "Bon - Domestic"
                        },
                        {
                          "label": "Chabonye",
                          "value": "Chabonye"
                        },
                        {
                          "label": "Chapant",
                          "value": "Chapant"
                        },
                        {
                          "label": "Chofè",
                          "value": "Chofè"
                        },
                        {
                          "label": "Dantis",
                          "value": "Dantis"
                        },
                        {
                          "label": "Ebenis",
                          "value": "Ebenis"
                        },
                        {
                          "label": "Edikatè Sante",
                          "value": "Edikate Sante"
                        },
                        {
                          "label": "Elvaj",
                          "value": "Elvaj"
                        },
                        {
                          "label": "Enfimyè",
                          "value": "Enfimye"
                        },
                        {
                          "label": "Enjenyè",
                          "value": "Enjenyè"
                        },
                        {
                          "label": "Enjenyè sivil",
                          "value": "Enjenyè sivil"
                        },
                        {
                          "label": "Entèprèt",
                          "value": "Entèprèt"
                        },
                        {
                          "label": "Epidemyolojis",
                          "value": "Epidemyolojis"
                        },
                        {
                          "label": "Estetisyèn",
                          "value": "Estetisyèn"
                        },
                        {
                          "label": "Fotograf",
                          "value": "Fotograf"
                        },
                        {
                          "label": "Jeneralis",
                          "value": "Jeneralis"
                        },
                        {
                          "label": "Jij",
                          "value": "Jij"
                        },
                        {
                          "label": "Kiltivatè",
                          "value": "Kiltivatè"
                        },
                        {
                          "label": "Kizinyè",
                          "value": "Kizinyè"
                        },
                        {
                          "label": "Kontab",
                          "value": "Kontab"
                        },
                        {
                          "label": "Kwafè - Babè",
                          "value": "Kwafe - Babè"
                        },
                        {
                          "label": "Lesivyè",
                          "value": "Lesivyè"
                        },
                        {
                          "label": "Lòt",
                          "value": "Lot"
                        },
                        {
                          "label": "Machann - Komèsan",
                          "value": "Machann - Komèsan"
                        },
                        {
                          "label": "Manadjè Pwojè",
                          "value": "Manadjè Pwojè"
                        },
                        {
                          "label": "Mason",
                          "value": "Mason"
                        },
                        {
                          "label": "Mekanisyen",
                          "value": "Mekanisyen"
                        },
                        {
                          "label": "Menajè",
                          "value": "Menajè"
                        },
                        {
                          "label": "Moto Taksi",
                          "value": "Moto Taksi"
                        },
                        {
                          "label": "Oungan - Manbo - Bòkò",
                          "value": "Oungan - Manbo - Bòkò"
                        },
                        {
                          "label": "Pa fè anyen",
                          "value": "Pa fe anyen"
                        },
                        {
                          "label": "Pechè",
                          "value": "Pechè"
                        },
                        {
                          "label": "Plonbyen",
                          "value": "Plonbyen"
                        },
                        {
                          "label": "Politisyen",
                          "value": "Politisyen"
                        },
                        {
                          "label": "Pwofesè",
                          "value": "Pwofesè"
                        },
                        {
                          "label": "Pwopriyete biznis",
                          "value": "Pwopriyete biznis"
                        },
                        {
                          "label": "Sekirite",
                          "value": "Sekirite"
                        },
                        {
                          "label": "Taksi",
                          "value": "Taksi"
                        },
                        {
                          "label": "Tayè - Koutirye",
                          "value": "Tayè - Koutirye"
                        },
                        {
                          "label": "Teknisyen laboratwa",
                          "value": "Teknisyen laboratwa"
                        },
                        {
                          "label": "Teknisyen medikal",
                          "value": "Teknisyen medikal"
                        },
                        {
                          "label": "Travayè Gouvènman",
                          "value": "Travayè Gouvènman"
                        },
                        {
                          "label": "Travayè Jounalye",
                          "value": "Travayè Jounalye"
                        },
                        {
                          "label": "Travayè konstriksyon",
                          "value": "Travayè konstriksyon"
                        },
                        {
                          "label": "Veterinè",
                          "value": "Veterinè"
                        }
                      ]
                    }
                  },
                  {
                    "type": "ChoiceField",
                    "key": "ab80",
                    "label": "999 Ki lot aktivite li genyen pou antre kob",
                    "description": null,
                    "required": true,
                    "disabled": false,
                    "hidden": false,
                    "data_name": "999_ki_lot_aktivite_li_genyen_pou_antre_kob",
                    "default_value": null,
                    "visible_conditions_type": null,
                    "visible_conditions_behavior": "clear",
                    "visible_conditions": null,
                    "required_conditions_type": null,
                    "required_conditions": null,
                    "ai_prompt": null,
                    "multiple": false,
                    "allow_other": false,
                    "default_previous_value": false,
                    "choice_list_schema": {
                      "name": "Aktivite Ekonomik",
                      "description": "",
                      "version": 1,
                      "created_at": "2025-02-06T15:10:54Z",
                      "updated_at": "2025-02-06T15:10:54Z",
                      "created_by": "Administrasyon Kore Vwazen",
                      "created_by_id": "2cf631ca-de6b-463f-9b04-2e868535a690",
                      "updated_by": "Administrasyon Kore Vwazen",
                      "updated_by_id": "2cf631ca-de6b-463f-9b04-2e868535a690",
                      "choices": [
                        {
                          "label": "Achitèk",
                          "value": "Achitèk"
                        },
                        {
                          "label": "Administratè",
                          "value": "Administratè"
                        },
                        {
                          "label": "Agrikiltè",
                          "value": "Agrikiltè"
                        },
                        {
                          "label": "Atis",
                          "value": "Atis"
                        },
                        {
                          "label": "Avoka",
                          "value": "Avoka"
                        },
                        {
                          "label": "Bòn - Domestic",
                          "value": "Bon - Domestic"
                        },
                        {
                          "label": "Chabonye",
                          "value": "Chabonye"
                        },
                        {
                          "label": "Chapant",
                          "value": "Chapant"
                        },
                        {
                          "label": "Chofè",
                          "value": "Chofè"
                        },
                        {
                          "label": "Dantis",
                          "value": "Dantis"
                        },
                        {
                          "label": "Ebenis",
                          "value": "Ebenis"
                        },
                        {
                          "label": "Edikatè Sante",
                          "value": "Edikate Sante"
                        },
                        {
                          "label": "Elvaj",
                          "value": "Elvaj"
                        },
                        {
                          "label": "Enfimyè",
                          "value": "Enfimye"
                        },
                        {
                          "label": "Enjenyè",
                          "value": "Enjenyè"
                        },
                        {
                          "label": "Enjenyè sivil",
                          "value": "Enjenyè sivil"
                        },
                        {
                          "label": "Entèprèt",
                          "value": "Entèprèt"
                        },
                        {
                          "label": "Epidemyolojis",
                          "value": "Epidemyolojis"
                        },
                        {
                          "label": "Estetisyèn",
                          "value": "Estetisyèn"
                        },
                        {
                          "label": "Fotograf",
                          "value": "Fotograf"
                        },
                        {
                          "label": "Jeneralis",
                          "value": "Jeneralis"
                        },
                        {
                          "label": "Jij",
                          "value": "Jij"
                        },
                        {
                          "label": "Kiltivatè",
                          "value": "Kiltivatè"
                        },
                        {
                          "label": "Kizinyè",
                          "value": "Kizinyè"
                        },
                        {
                          "label": "Kontab",
                          "value": "Kontab"
                        },
                        {
                          "label": "Kwafè - Babè",
                          "value": "Kwafe - Babè"
                        },
                        {
                          "label": "Lesivyè",
                          "value": "Lesivyè"
                        },
                        {
                          "label": "Lòt",
                          "value": "Lot"
                        },
                        {
                          "label": "Machann - Komèsan",
                          "value": "Machann - Komèsan"
                        },
                        {
                          "label": "Manadjè Pwojè",
                          "value": "Manadjè Pwojè"
                        },
                        {
                          "label": "Mason",
                          "value": "Mason"
                        },
                        {
                          "label": "Mekanisyen",
                          "value": "Mekanisyen"
                        },
                        {
                          "label": "Menajè",
                          "value": "Menajè"
                        },
                        {
                          "label": "Moto Taksi",
                          "value": "Moto Taksi"
                        },
                        {
                          "label": "Oungan - Manbo - Bòkò",
                          "value": "Oungan - Manbo - Bòkò"
                        },
                        {
                          "label": "Pa fè anyen",
                          "value": "Pa fe anyen"
                        },
                        {
                          "label": "Pechè",
                          "value": "Pechè"
                        },
                        {
                          "label": "Plonbyen",
                          "value": "Plonbyen"
                        },
                        {
                          "label": "Politisyen",
                          "value": "Politisyen"
                        },
                        {
                          "label": "Pwofesè",
                          "value": "Pwofesè"
                        },
                        {
                          "label": "Pwopriyete biznis",
                          "value": "Pwopriyete biznis"
                        },
                        {
                          "label": "Sekirite",
                          "value": "Sekirite"
                        },
                        {
                          "label": "Taksi",
                          "value": "Taksi"
                        },
                        {
                          "label": "Tayè - Koutirye",
                          "value": "Tayè - Koutirye"
                        },
                        {
                          "label": "Teknisyen laboratwa",
                          "value": "Teknisyen laboratwa"
                        },
                        {
                          "label": "Teknisyen medikal",
                          "value": "Teknisyen medikal"
                        },
                        {
                          "label": "Travayè Gouvènman",
                          "value": "Travayè Gouvènman"
                        },
                        {
                          "label": "Travayè Jounalye",
                          "value": "Travayè Jounalye"
                        },
                        {
                          "label": "Travayè konstriksyon",
                          "value": "Travayè konstriksyon"
                        },
                        {
                          "label": "Veterinè",
                          "value": "Veterinè"
                        }
                      ]
                    }
                  },
                  {
                    "type": "Label",
                    "key": "43ca",
                    "label": "❌!!!Obsevasyon!!!❌\nLi ka pa baw montan fiks men li ka baw yon montan anviwon.",
                    "description": null,
                    "required": false,
                    "disabled": false,
                    "hidden": false,
                    "data_name": "obsevasyonli_ka_pa_baw_montan_fiks_men_li_ka_baw_yo",
                    "default_value": null,
                    "visible_conditions_type": null,
                    "visible_conditions_behavior": "clear",
                    "visible_conditions": null,
                    "required_conditions_type": null,
                    "required_conditions": null
                  },
                  {
                    "type": "ChoiceField",
                    "key": "31ea",
                    "label": "4.26 Ki entèval kòb li fè an goud pa mwa",
                    "description": null,
                    "required": true,
                    "disabled": false,
                    "hidden": false,
                    "data_name": "426_enteval_kob_li_fe_an_goud_pa_mwa",
                    "default_value": null,
                    "visible_conditions_type": "all",
                    "visible_conditions_behavior": "clear",
                    "visible_conditions": [
                      {
                        "field_key": "5890",
                        "operator": "equal_to",
                        "value": "wi"
                      }
                    ],
                    "required_conditions_type": null,
                    "required_conditions": null,
                    "ai_prompt": null,
                    "multiple": false,
                    "allow_other": false,
                    "choices": [
                      {
                        "label": "0  -  25000",
                        "value": "0  -  25000"
                      },
                      {
                        "label": "25001  - 50000",
                        "value": "25001  - 50000"
                      },
                      {
                        "label": "50001  -  75000",
                        "value": "50001  -  75000"
                      },
                      {
                        "label": "75001  -  100000",
                        "value": "75001  -  100000"
                      },
                      {
                        "label": "100001  -  125000",
                        "value": "100001  -  125000"
                      },
                      {
                        "label": "125001  -  150000",
                        "value": "125001  -  150000"
                      },
                      {
                        "label": "150001  -  175000",
                        "value": "150001  -  175000"
                      },
                      {
                        "label": "175001  -  200000",
                        "value": "175001  -  200000"
                      },
                      {
                        "label": "200001  -  225000",
                        "value": "200001  -  225000"
                      },
                      {
                        "label": "225001  -  250000",
                        "value": "225001  -  250000"
                      },
                      {
                        "label": "250001  -  275000",
                        "value": "250001  -  275000"
                      },
                      {
                        "label": "275001  -  300000",
                        "value": "275001  -  300000"
                      },
                      {
                        "label": "300001  -  325000",
                        "value": "300001  -  325000"
                      },
                      {
                        "label": "325001  -  350000",
                        "value": "325001  -  350000"
                      },
                      {
                        "label": "350001  -  375000",
                        "value": "350001  -  375000"
                      },
                      {
                        "label": "375001  -  400000",
                        "value": "375001  -  400000"
                      },
                      {
                        "label": "400001  -  425000",
                        "value": "400001  -  425000"
                      },
                      {
                        "label": "425001  -  450000",
                        "value": "425001  -  450000"
                      },
                      {
                        "label": "450001  -  475000",
                        "value": "450001  -  475000"
                      },
                      {
                        "label": "475001  -  500000",
                        "value": "475001  -  500000"
                      },
                      {
                        "label": "500001 e Plis",
                        "value": "500001 e Plis"
                      },
                      {
                        "label": "Refize reponn",
                        "value": "Refize reponn"
                      },
                      {
                        "label": "Pa konnen",
                        "value": "Pa konnen"
                      }
                    ],
                    "default_previous_value": false
                  },
                  {
                    "type": "YesNoField",
                    "key": "7f57",
                    "label": "999 Èske moun nan gen yon kont bank",
                    "description": null,
                    "required": true,
                    "disabled": false,
                    "hidden": false,
                    "data_name": "999_eske_moun_nan_gen_yon_kont_bank",
                    "default_value": null,
                    "visible_conditions_type": null,
                    "visible_conditions_behavior": "clear",
                    "visible_conditions": null,
                    "required_conditions_type": null,
                    "required_conditions": null,
                    "ai_prompt": null,
                    "positive": {
                      "label": "Wi",
                      "value": "wi"
                    },
                    "negative": {
                      "label": "Non",
                      "value": "non"
                    },
                    "neutral": {
                      "label": "Non Aplikab",
                      "value": "non aplikab"
                    },
                    "neutral_enabled": true,
                    "default_previous_value": false
                  },
                  {
                    "type": "ChoiceField",
                    "key": "64b7",
                    "label": "Ki tip kont bank li genyen",
                    "description": null,
                    "required": true,
                    "disabled": false,
                    "hidden": false,
                    "data_name": "ki_tip_kont_bank_li_genyen",
                    "default_value": null,
                    "visible_conditions_type": "all",
                    "visible_conditions_behavior": "clear",
                    "visible_conditions": [
                      {
                        "field_key": "7f57",
                        "operator": "equal_to",
                        "value": "wi"
                      }
                    ],
                    "required_conditions_type": null,
                    "required_conditions": null,
                    "ai_prompt": null,
                    "multiple": false,
                    "allow_other": false,
                    "choices": [
                      {
                        "label": "Epay",
                        "value": "Epay"
                      },
                      {
                        "label": "Kouran",
                        "value": "Kouran"
                      },
                      {
                        "label": "Epay ak Kouran",
                        "value": "Epay ak Kouran"
                      },
                      {
                        "label": "Lòt",
                        "value": "Lòt"
                      }
                    ],
                    "default_previous_value": false
                  },
                  {
                    "type": "YesNoField",
                    "key": "4960",
                    "label": "999 Èske moun sa konn itilize sèvis lajan mobil tankou mon cash ak nat cash",
                    "description": null,
                    "required": true,
                    "disabled": false,
                    "hidden": false,
                    "data_name": "999_eske_moun_sa_konn_itilize_sevis_lajan_mobil",
                    "default_value": null,
                    "visible_conditions_type": null,
                    "visible_conditions_behavior": "clear",
                    "visible_conditions": null,
                    "required_conditions_type": null,
                    "required_conditions": null,
                    "ai_prompt": null,
                    "positive": {
                      "label": "Wi",
                      "value": "wi"
                    },
                    "negative": {
                      "label": "Non",
                      "value": "non"
                    },
                    "neutral": {
                      "label": "Non Aplikab",
                      "value": "non aplikab"
                    },
                    "neutral_enabled": true,
                    "default_previous_value": false
                  },
                  {
                    "type": "YesNoField",
                    "key": "722e",
                    "label": "999 Èske moun sa gen relasyon ak moun ki ap viv aletranje",
                    "description": null,
                    "required": true,
                    "disabled": false,
                    "hidden": false,
                    "data_name": "999_ske_moun_sa_gen_relasyon_ak_moun_ki_ap_viv_aletranje",
                    "default_value": null,
                    "visible_conditions_type": null,
                    "visible_conditions_behavior": "clear",
                    "visible_conditions": null,
                    "required_conditions_type": null,
                    "required_conditions": null,
                    "ai_prompt": null,
                    "positive": {
                      "label": "Wi",
                      "value": "wi"
                    },
                    "negative": {
                      "label": "Non",
                      "value": "non"
                    },
                    "neutral": {
                      "label": "Non Aplikab",
                      "value": "non aplikab"
                    },
                    "neutral_enabled": true,
                    "default_previous_value": false
                  },
                  {
                    "type": "ChoiceField",
                    "key": "2600",
                    "label": "999 Nan ki peyi moun sa yo ye",
                    "description": null,
                    "required": true,
                    "disabled": false,
                    "hidden": false,
                    "data_name": "999_nan_ki_peyi_moun_sa_yo_ye",
                    "default_value": null,
                    "visible_conditions_type": "all",
                    "visible_conditions_behavior": "clear",
                    "visible_conditions": [
                      {
                        "field_key": "722e",
                        "operator": "equal_to",
                        "value": "wi"
                      }
                    ],
                    "required_conditions_type": null,
                    "required_conditions": null,
                    "ai_prompt": null,
                    "multiple": false,
                    "allow_other": false,
                    "default_previous_value": false,
                    "choice_list_schema": {
                      "name": "Lis Peyi - FR",
                      "description": "",
                      "version": 2,
                      "created_at": "2025-02-25T19:42:34Z",
                      "updated_at": "2025-02-25T19:42:43Z",
                      "created_by": "Administrasyon ADF",
                      "created_by_id": "9931579a-bbcb-479f-ada3-cdddbf1ac01b",
                      "updated_by": "Administrasyon ADF",
                      "updated_by_id": "9931579a-bbcb-479f-ada3-cdddbf1ac01b",
                      "choices": [
                        {
                          "label": "Afghanistan",
                          "value": "Afghanistan"
                        },
                        {
                          "label": "Afrique du Sud",
                          "value": "Afrique du Sud"
                        },
                        {
                          "label": "Albanie",
                          "value": "Albanie"
                        },
                        {
                          "label": "Algérie",
                          "value": "Algérie"
                        },
                        {
                          "label": "Allemagne",
                          "value": "Allemagne"
                        },
                        {
                          "label": "Andorre",
                          "value": "Andorre"
                        },
                        {
                          "label": "Angola",
                          "value": "Angola"
                        },
                        {
                          "label": "Anguilla",
                          "value": "Anguilla"
                        },
                        {
                          "label": "Antigua-et-Barbuda",
                          "value": "Antigua-et-Barbuda"
                        },
                        {
                          "label": "Antilles néerlandaises",
                          "value": "Antilles néerlandaises"
                        },
                        {
                          "label": "Arabie saoudite",
                          "value": "Arabie saoudite"
                        },
                        {
                          "label": "Argentine",
                          "value": "Argentine"
                        },
                        {
                          "label": "Arménie",
                          "value": "Arménie"
                        },
                        {
                          "label": "Aruba",
                          "value": "Aruba"
                        },
                        {
                          "label": "Australie",
                          "value": "Australie"
                        },
                        {
                          "label": "Autriche",
                          "value": "Autriche"
                        },
                        {
                          "label": "Azerbaïdjan",
                          "value": "Azerbaïdjan"
                        },
                        {
                          "label": "Bahamas",
                          "value": "Bahamas"
                        },
                        {
                          "label": "Bahreïn",
                          "value": "Bahreïn"
                        },
                        {
                          "label": "Bangladesh",
                          "value": "Bangladesh"
                        },
                        {
                          "label": "Barbade",
                          "value": "Barbade"
                        },
                        {
                          "label": "Bélarus",
                          "value": "Bélarus"
                        },
                        {
                          "label": "Belgique",
                          "value": "Belgique"
                        },
                        {
                          "label": "Belize",
                          "value": "Belize"
                        },
                        {
                          "label": "Bénin",
                          "value": "Bénin"
                        },
                        {
                          "label": "Bermudes",
                          "value": "Bermudes"
                        },
                        {
                          "label": "Bhoutan",
                          "value": "Bhoutan"
                        },
                        {
                          "label": "Bolivie",
                          "value": "Bolivie"
                        },
                        {
                          "label": "Bosnie-Herzégovine",
                          "value": "Bosnie-Herzégovine"
                        },
                        {
                          "label": "Botswana",
                          "value": "Botswana"
                        },
                        {
                          "label": "Brésil",
                          "value": "Brésil"
                        },
                        {
                          "label": "Brunéi Darussalam",
                          "value": "Brunéi Darussalam"
                        },
                        {
                          "label": "Bulgarie",
                          "value": "Bulgarie"
                        },
                        {
                          "label": "Burkina Faso",
                          "value": "Burkina Faso"
                        },
                        {
                          "label": "Burundi",
                          "value": "Burundi"
                        },
                        {
                          "label": "Cambodge",
                          "value": "Cambodge"
                        },
                        {
                          "label": "Cameroun",
                          "value": "Cameroun"
                        },
                        {
                          "label": "Canada",
                          "value": "Canada"
                        },
                        {
                          "label": "Cap-Vert",
                          "value": "Cap-Vert"
                        },
                        {
                          "label": "Chili",
                          "value": "Chili"
                        },
                        {
                          "label": "Chine",
                          "value": "Chine"
                        },
                        {
                          "label": "Chypre",
                          "value": "Chypre"
                        },
                        {
                          "label": "Colombie",
                          "value": "Colombie"
                        },
                        {
                          "label": "Comores",
                          "value": "Comores"
                        },
                        {
                          "label": "Congo",
                          "value": "Congo"
                        },
                        {
                          "label": "Congo, Rép. dém. du",
                          "value": "Congo, Rép. dém. du"
                        },
                        {
                          "label": "Corée du Nord",
                          "value": "Corée du Nord"
                        },
                        {
                          "label": "Corée du Sud",
                          "value": "Corée du Sud"
                        },
                        {
                          "label": "Costa Rica",
                          "value": "Costa Rica"
                        },
                        {
                          "label": "Côte d'Ivoire",
                          "value": "Côte d'Ivoire"
                        },
                        {
                          "label": "Croatie",
                          "value": "Croatie"
                        },
                        {
                          "label": "Cuba",
                          "value": "Cuba"
                        },
                        {
                          "label": "Danemark",
                          "value": "Danemark"
                        },
                        {
                          "label": "Djibouti",
                          "value": "Djibouti"
                        },
                        {
                          "label": "Dominique",
                          "value": "Dominique"
                        },
                        {
                          "label": "Egypte",
                          "value": "Egypte"
                        },
                        {
                          "label": "El Salvador",
                          "value": "El Salvador"
                        },
                        {
                          "label": "Emirats arabes unis",
                          "value": "Emirats arabes unis"
                        },
                        {
                          "label": "Equateur",
                          "value": "Equateur"
                        },
                        {
                          "label": "Erythrée",
                          "value": "Erythrée"
                        },
                        {
                          "label": "Espagne",
                          "value": "Espagne"
                        },
                        {
                          "label": "Estonie",
                          "value": "Estonie"
                        },
                        {
                          "label": "Etats-Unis",
                          "value": "Etats-Unis"
                        },
                        {
                          "label": "Ethiopie",
                          "value": "Ethiopie"
                        },
                        {
                          "label": "Ethiopie (y compris l'Erythrée)",
                          "value": "Ethiopie (y compris l'Erythrée)"
                        },
                        {
                          "label": "Fidji",
                          "value": "Fidji"
                        },
                        {
                          "label": "Finlande",
                          "value": "Finlande"
                        },
                        {
                          "label": "France",
                          "value": "France"
                        },
                        {
                          "label": "Gabon",
                          "value": "Gabon"
                        },
                        {
                          "label": "Gambie",
                          "value": "Gambie"
                        },
                        {
                          "label": "Géorgie",
                          "value": "Géorgie"
                        },
                        {
                          "label": "Ghana",
                          "value": "Ghana"
                        },
                        {
                          "label": "Gibraltar",
                          "value": "Gibraltar"
                        },
                        {
                          "label": "Grèce",
                          "value": "Grèce"
                        },
                        {
                          "label": "Grenade",
                          "value": "Grenade"
                        },
                        {
                          "label": "Groenland",
                          "value": "Groenland"
                        },
                        {
                          "label": "Guadeloupe",
                          "value": "Guadeloupe"
                        },
                        {
                          "label": "Guam",
                          "value": "Guam"
                        },
                        {
                          "label": "Guatemala",
                          "value": "Guatemala"
                        },
                        {
                          "label": "Guernesey",
                          "value": "Guernesey"
                        },
                        {
                          "label": "Guinée",
                          "value": "Guinée"
                        },
                        {
                          "label": "Guinée équatoriale",
                          "value": "Guinée équatoriale"
                        },
                        {
                          "label": "Guinée-Bissau",
                          "value": "Guinée-Bissau"
                        },
                        {
                          "label": "Guyana",
                          "value": "Guyana"
                        },
                        {
                          "label": "Guyane française",
                          "value": "Guyane française"
                        },
                        {
                          "label": "Haïti",
                          "value": "Haïti"
                        },
                        {
                          "label": "Honduras",
                          "value": "Honduras"
                        },
                        {
                          "label": "Hong-kong, Chine",
                          "value": "Hong-kong, Chine"
                        },
                        {
                          "label": "Hongrie",
                          "value": "Hongrie"
                        },
                        {
                          "label": "Ile de Man",
                          "value": "Ile de Man"
                        },
                        {
                          "label": "Ile Norfolk",
                          "value": "Ile Norfolk"
                        },
                        {
                          "label": "Iles Anglo-normandes",
                          "value": "Iles Anglo-normandes"
                        },
                        {
                          "label": "Iles Caïmanes",
                          "value": "Iles Caïmanes"
                        },
                        {
                          "label": "Iles Cook",
                          "value": "Iles Cook"
                        },
                        {
                          "label": "Iles Falkland (Malvinas)",
                          "value": "Iles Falkland (Malvinas)"
                        },
                        {
                          "label": "Iles Féroé",
                          "value": "Iles Féroé"
                        },
                        {
                          "label": "Iles Mariannes du Nord",
                          "value": "Iles Mariannes du Nord"
                        },
                        {
                          "label": "Iles Marshall",
                          "value": "Iles Marshall"
                        },
                        {
                          "label": "Iles Salomon",
                          "value": "Iles Salomon"
                        },
                        {
                          "label": "Iles Turques et Caïques",
                          "value": "Iles Turques et Caïques"
                        },
                        {
                          "label": "Iles Vierges américaines",
                          "value": "Iles Vierges américaines"
                        },
                        {
                          "label": "Iles Vierges britanniques",
                          "value": "Iles Vierges britanniques"
                        },
                        {
                          "label": "Iles Wallis et Futuna",
                          "value": "Iles Wallis et Futuna"
                        },
                        {
                          "label": "Inde",
                          "value": "Inde"
                        },
                        {
                          "label": "Indonésie",
                          "value": "Indonésie"
                        },
                        {
                          "label": "Iran, Rép. islamique d'",
                          "value": "Iran, Rép. islamique d'"
                        },
                        {
                          "label": "Iraq",
                          "value": "Iraq"
                        },
                        {
                          "label": "Irlande",
                          "value": "Irlande"
                        },
                        {
                          "label": "Islande",
                          "value": "Islande"
                        },
                        {
                          "label": "Israël",
                          "value": "Israël"
                        },
                        {
                          "label": "Italie",
                          "value": "Italie"
                        },
                        {
                          "label": "Jamahiriya arabe libyenne",
                          "value": "Jamahiriya arabe libyenne"
                        },
                        {
                          "label": "Jamaïque",
                          "value": "Jamaïque"
                        },
                        {
                          "label": "Japon",
                          "value": "Japon"
                        },
                        {
                          "label": "Jersey",
                          "value": "Jersey"
                        },
                        {
                          "label": "Jordanie",
                          "value": "Jordanie"
                        },
                        {
                          "label": "Kazakhstan",
                          "value": "Kazakhstan"
                        },
                        {
                          "label": "Kenya",
                          "value": "Kenya"
                        },
                        {
                          "label": "Kirghizistan",
                          "value": "Kirghizistan"
                        },
                        {
                          "label": "Kiribati",
                          "value": "Kiribati"
                        },
                        {
                          "label": "Kosovo",
                          "value": "Kosovo"
                        },
                        {
                          "label": "Koweït",
                          "value": "Koweït"
                        },
                        {
                          "label": "Lesotho",
                          "value": "Lesotho"
                        },
                        {
                          "label": "Lettonie",
                          "value": "Lettonie"
                        },
                        {
                          "label": "Liban",
                          "value": "Liban"
                        },
                        {
                          "label": "Libéria",
                          "value": "Libéria"
                        },
                        {
                          "label": "Liechtenstein",
                          "value": "Liechtenstein"
                        },
                        {
                          "label": "Lituanie",
                          "value": "Lituanie"
                        },
                        {
                          "label": "Luxembourg",
                          "value": "Luxembourg"
                        },
                        {
                          "label": "Macao, Chine",
                          "value": "Macao, Chine"
                        },
                        {
                          "label": "Macédoine, Ex-Rép. yougoslave de",
                          "value": "Macédoine, Ex-Rép. yougoslave de"
                        },
                        {
                          "label": "Madagascar",
                          "value": "Madagascar"
                        },
                        {
                          "label": "Malaisie",
                          "value": "Malaisie"
                        },
                        {
                          "label": "Malawi",
                          "value": "Malawi"
                        },
                        {
                          "label": "Maldives",
                          "value": "Maldives"
                        },
                        {
                          "label": "Mali",
                          "value": "Mali"
                        },
                        {
                          "label": "Malte",
                          "value": "Malte"
                        },
                        {
                          "label": "Maroc",
                          "value": "Maroc"
                        },
                        {
                          "label": "Martinique",
                          "value": "Martinique"
                        },
                        {
                          "label": "Maurice",
                          "value": "Maurice"
                        },
                        {
                          "label": "Mauritanie",
                          "value": "Mauritanie"
                        },
                        {
                          "label": "Mexique",
                          "value": "Mexique"
                        },
                        {
                          "label": "Moldova, République de",
                          "value": "Moldova, République de"
                        },
                        {
                          "label": "Monaco",
                          "value": "Monaco"
                        },
                        {
                          "label": "Mongolie",
                          "value": "Mongolie"
                        },
                        {
                          "label": "Monténégro",
                          "value": "Monténégro"
                        },
                        {
                          "label": "Montserrat",
                          "value": "Montserrat"
                        },
                        {
                          "label": "Mozambique",
                          "value": "Mozambique"
                        },
                        {
                          "label": "Myanmar",
                          "value": "Myanmar"
                        },
                        {
                          "label": "Namibie",
                          "value": "Namibie"
                        },
                        {
                          "label": "Nauru",
                          "value": "Nauru"
                        },
                        {
                          "label": "Népal",
                          "value": "Népal"
                        },
                        {
                          "label": "Nicaragua",
                          "value": "Nicaragua"
                        },
                        {
                          "label": "Niger",
                          "value": "Niger"
                        },
                        {
                          "label": "Nigéria",
                          "value": "Nigéria"
                        },
                        {
                          "label": "Nioué",
                          "value": "Nioué"
                        },
                        {
                          "label": "Norvège",
                          "value": "Norvège"
                        },
                        {
                          "label": "Nouvelle-Calédonie",
                          "value": "Nouvelle-Calédonie"
                        },
                        {
                          "label": "Nouvelle-Zélande",
                          "value": "Nouvelle-Zélande"
                        },
                        {
                          "label": "Oman",
                          "value": "Oman"
                        },
                        {
                          "label": "Ouganda",
                          "value": "Ouganda"
                        },
                        {
                          "label": "Ouzbékistan",
                          "value": "Ouzbékistan"
                        },
                        {
                          "label": "Pakistan",
                          "value": "Pakistan"
                        },
                        {
                          "label": "Palau",
                          "value": "Palau"
                        },
                        {
                          "label": "Panama",
                          "value": "Panama"
                        },
                        {
                          "label": "Papouasie-Nouvelle-Guinée",
                          "value": "Papouasie-Nouvelle-Guinée"
                        },
                        {
                          "label": "Paraguay",
                          "value": "Paraguay"
                        },
                        {
                          "label": "Pays-Bas",
                          "value": "Pays-Bas"
                        },
                        {
                          "label": "Pérou",
                          "value": "Pérou"
                        },
                        {
                          "label": "Philippines",
                          "value": "Philippines"
                        },
                        {
                          "label": "Pologne",
                          "value": "Pologne"
                        },
                        {
                          "label": "Polynésie française",
                          "value": "Polynésie française"
                        },
                        {
                          "label": "Porto Rico",
                          "value": "Porto Rico"
                        },
                        {
                          "label": "Portugal",
                          "value": "Portugal"
                        },
                        {
                          "label": "Qatar",
                          "value": "Qatar"
                        },
                        {
                          "label": "Syrie",
                          "value": "Syrie"
                        },
                        {
                          "label": "République centrafricaine",
                          "value": "République centrafricaine"
                        },
                        {
                          "label": "Lao",
                          "value": "Lao"
                        },
                        {
                          "label": "République dominicaine",
                          "value": "République dominicaine"
                        },
                        {
                          "label": "République tchèque",
                          "value": "République tchèque"
                        },
                        {
                          "label": "Roumanie",
                          "value": "Roumanie"
                        },
                        {
                          "label": "Royaume-Uni",
                          "value": "Royaume-Uni"
                        },
                        {
                          "label": "Russie, Fédération de",
                          "value": "Russie, Fédération de"
                        },
                        {
                          "label": "Rwanda",
                          "value": "Rwanda"
                        },
                        {
                          "label": "Sahara occidental",
                          "value": "Sahara occidental"
                        },
                        {
                          "label": "Sainte-Hélène",
                          "value": "Sainte-Hélène"
                        },
                        {
                          "label": "Sainte-Lucie",
                          "value": "Sainte-Lucie"
                        },
                        {
                          "label": "Saint-Kitts-et-Nevis",
                          "value": "Saint-Kitts-et-Nevis"
                        },
                        {
                          "label": "Saint-Marin",
                          "value": "Saint-Marin"
                        },
                        {
                          "label": "Saint-Pierre-et-Miquelon",
                          "value": "Saint-Pierre-et-Miquelon"
                        },
                        {
                          "label": "Saint-Vincent-et-les Grenadines",
                          "value": "Saint-Vincent-et-les Grenadines"
                        },
                        {
                          "label": "Samoa",
                          "value": "Samoa"
                        },
                        {
                          "label": "Samoa américaines",
                          "value": "Samoa américaines"
                        },
                        {
                          "label": "Sao Tomé-et-Principe",
                          "value": "Sao Tomé-et-Principe"
                        },
                        {
                          "label": "Sénégal",
                          "value": "Sénégal"
                        },
                        {
                          "label": "Serbie",
                          "value": "Serbie"
                        },
                        {
                          "label": "Serbie-et-Monténégro",
                          "value": "Serbie-et-Monténégro"
                        },
                        {
                          "label": "Seychelles",
                          "value": "Seychelles"
                        },
                        {
                          "label": "Sierra Leone",
                          "value": "Sierra Leone"
                        },
                        {
                          "label": "Singapour",
                          "value": "Singapour"
                        },
                        {
                          "label": "Slovaquie",
                          "value": "Slovaquie"
                        },
                        {
                          "label": "Slovénie",
                          "value": "Slovénie"
                        },
                        {
                          "label": "Somalie",
                          "value": "Somalie"
                        },
                        {
                          "label": "Soudan, République du",
                          "value": "Soudan, République du"
                        },
                        {
                          "label": "Sri Lanka",
                          "value": "Sri Lanka"
                        },
                        {
                          "label": "Suède",
                          "value": "Suède"
                        },
                        {
                          "label": "Suisse",
                          "value": "Suisse"
                        },
                        {
                          "label": "Suriname",
                          "value": "Suriname"
                        },
                        {
                          "label": "Swaziland",
                          "value": "Swaziland"
                        },
                        {
                          "label": "Tadjikistan",
                          "value": "Tadjikistan"
                        },
                        {
                          "label": "Taïwan",
                          "value": "Taïwan"
                        },
                        {
                          "label": "Tanzanie",
                          "value": "Tanzanie"
                        },
                        {
                          "label": "Tchad",
                          "value": "Tchad"
                        },
                        {
                          "label": "Tchécoslovaquie",
                          "value": "Tchécoslovaquie"
                        },
                        {
                          "label": "Thaïlande",
                          "value": "Thaïlande"
                        },
                        {
                          "label": "Timor-Leste",
                          "value": "Timor-Leste"
                        },
                        {
                          "label": "Togo",
                          "value": "Togo"
                        },
                        {
                          "label": "Tokélaou",
                          "value": "Tokélaou"
                        },
                        {
                          "label": "Tonga",
                          "value": "Tonga"
                        },
                        {
                          "label": "Trinité-et-Tobago",
                          "value": "Trinité-et-Tobago"
                        },
                        {
                          "label": "Tunisie",
                          "value": "Tunisie"
                        },
                        {
                          "label": "Turkménistan",
                          "value": "Turkménistan"
                        },
                        {
                          "label": "Turquie",
                          "value": "Turquie"
                        },
                        {
                          "label": "Tuvalu",
                          "value": "Tuvalu"
                        },
                        {
                          "label": "Ukraine",
                          "value": "Ukraine"
                        },
                        {
                          "label": "URSS",
                          "value": "URSS"
                        },
                        {
                          "label": "Uruguay",
                          "value": "Uruguay"
                        },
                        {
                          "label": "Vanuatu",
                          "value": "Vanuatu"
                        },
                        {
                          "label": "Venezuela",
                          "value": "Venezuela"
                        },
                        {
                          "label": "Viet Nam",
                          "value": "Viet Nam"
                        },
                        {
                          "label": "Yémen",
                          "value": "Yémen"
                        },
                        {
                          "label": "Zambie",
                          "value": "Zambie"
                        },
                        {
                          "label": "Zimbabwe",
                          "value": "Zimbabwe"
                        }
                      ]
                    }
                  },
                  {
                    "type": "YesNoField",
                    "key": "42ab",
                    "label": "999 Èske moun sa konn resevwa transfè lajan ki soti aletranje",
                    "description": null,
                    "required": true,
                    "disabled": false,
                    "hidden": false,
                    "data_name": "999_eske_moun_sa_konn_resevwa_transfe_ki_soti_aletranje",
                    "default_value": null,
                    "visible_conditions_type": "all",
                    "visible_conditions_behavior": "clear",
                    "visible_conditions": [
                      {
                        "field_key": "722e",
                        "operator": "equal_to",
                        "value": "wi"
                      }
                    ],
                    "required_conditions_type": null,
                    "required_conditions": null,
                    "ai_prompt": null,
                    "positive": {
                      "label": "Wi",
                      "value": "wi"
                    },
                    "negative": {
                      "label": "Non",
                      "value": "non"
                    },
                    "neutral": {
                      "label": "Non Aplikab",
                      "value": "non aplikab"
                    },
                    "neutral_enabled": true,
                    "default_previous_value": false
                  },
                  {
                    "type": "ChoiceField",
                    "key": "32ae",
                    "label": "A ki frekans moun sa resevwa transfè ki soti aletranje",
                    "description": null,
                    "required": true,
                    "disabled": false,
                    "hidden": false,
                    "data_name": "999_a_ki_frekans_moun_sa_resevwa_transfe_ki_soti_aletranje",
                    "default_value": null,
                    "visible_conditions_type": "all",
                    "visible_conditions_behavior": "clear",
                    "visible_conditions": [
                      {
                        "field_key": "42ab",
                        "operator": "equal_to",
                        "value": "wi"
                      }
                    ],
                    "required_conditions_type": null,
                    "required_conditions": null,
                    "ai_prompt": null,
                    "multiple": false,
                    "allow_other": false,
                    "choices": [
                      {
                        "label": "Chak semèn",
                        "value": "Chak semèn"
                      },
                      {
                        "label": "Chak mwa",
                        "value": "Chak mwa"
                      },
                      {
                        "label": "Chak trimès",
                        "value": "Chak trimès"
                      },
                      {
                        "label": "Chak ane",
                        "value": "Chak ane"
                      },
                      {
                        "label": "Lòt",
                        "value": "Lòt"
                      }
                    ],
                    "default_previous_value": false
                  },
                  {
                    "type": "ChoiceField",
                    "key": "29d0",
                    "label": "999 Ki prensipal mwayen transpò moun sa itilize",
                    "description": null,
                    "required": false,
                    "disabled": false,
                    "hidden": false,
                    "data_name": "999_ki_prensipal_mwayen_transpo_moun_sa_itilize",
                    "default_value": null,
                    "visible_conditions_type": null,
                    "visible_conditions_behavior": "clear",
                    "visible_conditions": null,
                    "required_conditions_type": null,
                    "required_conditions": null,
                    "ai_prompt": null,
                    "multiple": false,
                    "allow_other": false,
                    "choices": [
                      {
                        "label": "Moto",
                        "value": "Moto"
                      },
                      {
                        "label": "Machin",
                        "value": "Machin"
                      },
                      {
                        "label": "Bisiklèt",
                        "value": "Bisiklèt"
                      },
                      {
                        "label": "Taptap",
                        "value": "Taptap"
                      },
                      {
                        "label": "A pye",
                        "value": "A pye"
                      },
                      {
                        "label": "Lòt",
                        "value": "Lòt"
                      }
                    ],
                    "default_previous_value": false
                  },
                  {
                    "type": "YesNoField",
                    "key": "3310",
                    "label": "999 Èske moun sa gen yon biznis-antrepriz",
                    "description": "Kijan nou ap defini biznis? Eske yon bak sirete vle di biznis?",
                    "required": true,
                    "disabled": false,
                    "hidden": false,
                    "data_name": "999_eske_moun_sa_gen_yon_biznis_antrepriz",
                    "default_value": null,
                    "visible_conditions_type": null,
                    "visible_conditions_behavior": "clear",
                    "visible_conditions": null,
                    "required_conditions_type": null,
                    "required_conditions": null,
                    "ai_prompt": null,
                    "positive": {
                      "label": "Wi",
                      "value": "wi"
                    },
                    "negative": {
                      "label": "Non",
                      "value": "non"
                    },
                    "neutral": {
                      "label": "Non Aplikab",
                      "value": "non aplikab"
                    },
                    "neutral_enabled": true,
                    "default_previous_value": false
                  },
                  {
                    "type": "Section",
                    "key": "3240",
                    "label": "Biznis-Antrepriz",
                    "description": null,
                    "required": false,
                    "disabled": false,
                    "hidden": false,
                    "data_name": "biznis_antrepriz",
                    "default_value": null,
                    "visible_conditions_type": "all",
                    "visible_conditions_behavior": "clear",
                    "visible_conditions": [
                      {
                        "field_key": "3310",
                        "operator": "equal_to",
                        "value": "wi"
                      }
                    ],
                    "required_conditions_type": null,
                    "required_conditions": null,
                    "display": "inline",
                    "elements": [
                      {
                        "type": "ClassificationField",
                        "key": "9c80",
                        "label": "999 Ki tip biznis-antrepriz",
                        "description": null,
                        "required": true,
                        "disabled": false,
                        "hidden": false,
                        "data_name": "999_ki_tip_biznis_antrepriz",
                        "default_value": null,
                        "visible_conditions_type": null,
                        "visible_conditions_behavior": "clear",
                        "visible_conditions": null,
                        "required_conditions_type": null,
                        "required_conditions": null,
                        "ai_prompt": null,
                        "allow_other": false,
                        "empty_label": null,
                        "default_previous_value": false,
                        "classification_set_schema": {
                          "name": "Lis Sektè Biznis-Antrepriz",
                          "description": "",
                          "version": 2,
                          "system_type": null,
                          "created_at": "2025-02-25T15:35:48Z",
                          "updated_at": "2025-02-25T15:36:00Z",
                          "created_by": "Administrasyon ADF",
                          "created_by_id": "9931579a-bbcb-479f-ada3-cdddbf1ac01b",
                          "updated_by": "Administrasyon ADF",
                          "updated_by_id": "9931579a-bbcb-479f-ada3-cdddbf1ac01b",
                          "items": [
                            {
                              "label": "Sektè Primè (Resous Natirèl ak Agrikilti)",
                              "value": "Sektè Primè (Resous Natirèl ak Agrikilti)",
                              "child_classifications": [
                                {
                                  "label": "Agrikilti",
                                  "value": "Agrikilti",
                                  "child_classifications": [
                                    {
                                      "label": "Kiltivasyon Rekòt (mayi, diri,  pitimi, pwa, bannann)",
                                      "value": "Kiltivasyon Rekòt (mayi, diri,  pitimi, pwa, bannann)"
                                    },
                                    {
                                      "label": "Pwodiksyon Fwi (mango, citwon, kann)",
                                      "value": "Pwodiksyon Fwi (mango, citwon, kann)"
                                    },
                                    {
                                      "label": "Pwodiksyon Kafe ak Kakao",
                                      "value": "Pwodiksyon Kafe ak Kakao"
                                    },
                                    {
                                      "label": "Elvaj",
                                      "value": "Elvaj"
                                    },
                                    {
                                      "label": "Ti Jaden",
                                      "value": "Ti Jaden"
                                    },
                                    {
                                      "label": "Lòt",
                                      "value": "Lòt"
                                    }
                                  ]
                                },
                                {
                                  "label": "Lapèch",
                                  "value": "Lapèch",
                                  "child_classifications": [
                                    {
                                      "label": "Lapèch Kotyè",
                                      "value": "Lapèch Kotyè"
                                    },
                                    {
                                      "label": "Lapèch nan Dlo Dous/Akwakilti",
                                      "value": "Lapèch nan Dlo Dous/Akwakilti"
                                    },
                                    {
                                      "label": "Tretman ak Konsèvasyon Pwodwi Lanmè",
                                      "value": "Tretman ak Konsèvasyon Pwodwi Lanmè"
                                    },
                                    {
                                      "label": "Lòt",
                                      "value": "Lòt"
                                    }
                                  ]
                                },
                                {
                                  "label": "Ekstraksyon Resous Natirèl",
                                  "value": "Ekstraksyon Resous Natirèl",
                                  "child_classifications": [
                                    {
                                      "label": "Ekstrasyon Materyo (sab,  gravye,  wòch kalè)",
                                      "value": "Ekstrasyon Materyo (sab,  gravye,  wòch kalè)"
                                    },
                                    {
                                      "label": "Eksplwatasyon Forestyè ak Pwodiksyon Chabon",
                                      "value": "Eksplwatasyon Forestyè ak Pwodiksyon Chabon"
                                    },
                                    {
                                      "label": "Koleksyon ak Distribisyon Dlo",
                                      "value": "Koleksyon ak Distribisyon Dlo"
                                    },
                                    {
                                      "label": "Lòt",
                                      "value": "Lòt"
                                    }
                                  ]
                                },
                                {
                                  "label": "Lòt",
                                  "value": "Lòt"
                                }
                              ]
                            },
                            {
                              "label": "Sektè Segondè (Manifakti ak Tretman)",
                              "value": "Sektè Segondè (Manifakti ak Tretman)",
                              "child_classifications": [
                                {
                                  "label": "Tretman Manje",
                                  "value": "Tretman Manje",
                                  "child_classifications": [
                                    {
                                      "label": "Moulen Grenn",
                                      "value": "Moulen Grenn"
                                    },
                                    {
                                      "label": "Pwodwi Boulanjri",
                                      "value": "Pwodwi Boulanjri"
                                    },
                                    {
                                      "label": "Tretman Sik",
                                      "value": "Tretman Sik"
                                    },
                                    {
                                      "label": "Tretman Fwi ak Legim",
                                      "value": "Tretman Fwi ak Legim"
                                    },
                                    {
                                      "label": "Tretman Vyann",
                                      "value": "Tretman Vyann"
                                    },
                                    {
                                      "label": "Pwodwi Letye",
                                      "value": "Pwodwi Letye"
                                    },
                                    {
                                      "label": "Lòt",
                                      "value": "Lòt"
                                    }
                                  ]
                                },
                                {
                                  "label": "Pwodiksyon Bwason",
                                  "value": "Pwodiksyon Bwason",
                                  "child_classifications": [
                                    {
                                      "label": "Distilri Wonm",
                                      "value": "Distilri Wonm"
                                    },
                                    {
                                      "label": "Pwodiksyon Byè",
                                      "value": "Pwodiksyon Byè"
                                    },
                                    {
                                      "label": "Bwason Gazez ak Dlo an Boutèy",
                                      "value": "Bwason Gazez ak Dlo an Boutèy"
                                    },
                                    {
                                      "label": "Ji Fwi",
                                      "value": "Ji Fwi"
                                    },
                                    {
                                      "label": "Lòt",
                                      "value": "Lòt"
                                    }
                                  ]
                                },
                                {
                                  "label": "Tèkstil ak Rad",
                                  "value": "Tèkstil ak Rad",
                                  "child_classifications": [
                                    {
                                      "label": "Fabrikasyon Rad",
                                      "value": "Fabrikasyon Rad"
                                    },
                                    {
                                      "label": "Pwodiksyon Tèkstil",
                                      "value": "Pwodiksyon Tèkstil"
                                    },
                                    {
                                      "label": "Bwodri ak Travay Zegwi",
                                      "value": "Bwodri ak Travay Zegwi"
                                    },
                                    {
                                      "label": "Fabrikasyon Sak ak Akseswa",
                                      "value": "Fabrikasyon Sak ak Akseswa"
                                    },
                                    {
                                      "label": "Lòt",
                                      "value": "Lòt"
                                    }
                                  ]
                                },
                                {
                                  "label": "Fabrikasyon Atizanal",
                                  "value": "Fabrikasyon Atizanal",
                                  "child_classifications": [
                                    {
                                      "label": "Travay Bwa ak Mèb",
                                      "value": "Travay Bwa ak Mèb"
                                    },
                                    {
                                      "label": "Travay Metal",
                                      "value": "Travay Metal"
                                    },
                                    {
                                      "label": "Pwodwi an Kwi",
                                      "value": "Pwodwi an Kwi"
                                    },
                                    {
                                      "label": "Trese Panye",
                                      "value": "Trese Panye"
                                    },
                                    {
                                      "label": "Potri ak Seramik",
                                      "value": "Potri ak Seramik"
                                    },
                                    {
                                      "label": "Fabrikasyon Bijou",
                                      "value": "Fabrikasyon Bijou"
                                    },
                                    {
                                      "label": "Penti Atistik ak Eskilti",
                                      "value": "Penti Atistik ak Eskilti"
                                    },
                                    {
                                      "label": "Lòt",
                                      "value": "Lòt"
                                    }
                                  ]
                                },
                                {
                                  "label": "Materyo Konstriksyon",
                                  "value": "Materyo Konstriksyon",
                                  "child_classifications": [
                                    {
                                      "label": "Pwodwi Siman ak Beton",
                                      "value": "Pwodwi Siman ak Beton"
                                    },
                                    {
                                      "label": "Materyo Konstriksyon an Metal",
                                      "value": "Materyo Konstriksyon an Metal"
                                    },
                                    {
                                      "label": "Pwodwi an Bwa pou Konstriksyon",
                                      "value": "Pwodwi an Bwa pou Konstriksyon"
                                    },
                                    {
                                      "label": "Fabrikasyon Blòk",
                                      "value": "Fabrikasyon Blòk"
                                    },
                                    {
                                      "label": "Lòt",
                                      "value": "Lòt"
                                    }
                                  ]
                                },
                                {
                                  "label": "Lòt Fabrikasyon",
                                  "value": "Lòt Fabrikasyon",
                                  "child_classifications": [
                                    {
                                      "label": "Savon ak Pwodwi Netwayaj",
                                      "value": "Savon ak Pwodwi Netwayaj"
                                    },
                                    {
                                      "label": "Lwil Esansyèl ak Kosmetik",
                                      "value": "Lwil Esansyèl ak Kosmetik"
                                    },
                                    {
                                      "label": "Zouti ak Ekipman Senp",
                                      "value": "Zouti ak Ekipman Senp"
                                    },
                                    {
                                      "label": "Pwodwi an Papye",
                                      "value": "Pwodwi an Papye"
                                    },
                                    {
                                      "label": "Pwodwi an Materyo Resikle",
                                      "value": "Pwodwi an Materyo Resikle"
                                    },
                                    {
                                      "label": "Lòt",
                                      "value": "Lòt"
                                    }
                                  ]
                                },
                                {
                                  "label": "Lòt",
                                  "value": "Lòt"
                                }
                              ]
                            },
                            {
                              "label": "Sektè Konstriksyon",
                              "value": "Sektè Konstriksyon",
                              "child_classifications": [
                                {
                                  "label": "Konstriksyon Rezidansyèl",
                                  "value": "Konstriksyon Rezidansyèl",
                                  "child_classifications": [
                                    {
                                      "label": "Konstriksyon Ti Kay",
                                      "value": "Konstriksyon Ti Kay"
                                    },
                                    {
                                      "label": "Reparasyon ak Amelyorasyon Kay",
                                      "value": "Reparasyon ak Amelyorasyon Kay"
                                    },
                                    {
                                      "label": "Lojman pou Plizyè Fanmi",
                                      "value": "Lojman pou Plizyè Fanmi"
                                    },
                                    {
                                      "label": "Lòt",
                                      "value": "Lòt"
                                    }
                                  ]
                                },
                                {
                                  "label": "Konstriksyon Komèsyal",
                                  "value": "Konstriksyon Komèsyal",
                                  "child_classifications": [
                                    {
                                      "label": "Estrikti pou Ti Biznis",
                                      "value": "Estrikti pou Ti Biznis"
                                    },
                                    {
                                      "label": "Estann Mache ak Kyòs",
                                      "value": "Estann Mache ak Kyòs"
                                    },
                                    {
                                      "label": "Lòt",
                                      "value": "Lòt"
                                    }
                                  ]
                                },
                                {
                                  "label": "Travay Enfrastrikti",
                                  "value": "Travay Enfrastrikti",
                                  "child_classifications": [
                                    {
                                      "label": "Reparasyon Wout",
                                      "value": "Reparasyon Wout"
                                    },
                                    {
                                      "label": "Sistèm Dlo",
                                      "value": "Sistèm Dlo"
                                    },
                                    {
                                      "label": "Ti Pon ak Kanivo",
                                      "value": "Ti Pon ak Kanivo"
                                    },
                                    {
                                      "label": "Lòt",
                                      "value": "Lòt"
                                    }
                                  ]
                                },
                                {
                                  "label": "Lòt",
                                  "value": "Lòt"
                                }
                              ]
                            },
                            {
                              "label": "Sektè Tèsyè (Komès ak Sèvis)",
                              "value": "Sektè Tèsyè (Komès ak Sèvis)",
                              "child_classifications": [
                                {
                                  "label": "Komès an Detay",
                                  "value": "Komès an Detay",
                                  "child_classifications": [
                                    {
                                      "label": "Magazen Manje ak Makèt",
                                      "value": "Magazen Manje ak Makèt"
                                    },
                                    {
                                      "label": "Machann nan Mache",
                                      "value": "Machann nan Mache"
                                    },
                                    {
                                      "label": "Machann Anbiyan",
                                      "value": "Machann Anbiyan"
                                    },
                                    {
                                      "label": "Rad ak Tèkstil",
                                      "value": "Rad ak Tèkstil"
                                    },
                                    {
                                      "label": "Mat-eryo ak Pwovizyon pou Konstriksyon",
                                      "value": "Mat-eryo ak Pwovizyon pou Konstriksyon"
                                    },
                                    {
                                      "label": "Atik pou Kay",
                                      "value": "Atik pou Kay"
                                    },
                                    {
                                      "label": "Medikaman ak Pwodwi Sante",
                                      "value": "Medikaman ak Pwodwi Sante"
                                    },
                                    {
                                      "label": "Gaz ak Chabon",
                                      "value": "Gaz ak Chabon"
                                    },
                                    {
                                      "label": "Telefòn Mobil ak Elektwonik",
                                      "value": "Telefòn Mobil ak Elektwonik"
                                    },
                                    {
                                      "label": "Lòt",
                                      "value": "Lòt"
                                    }
                                  ]
                                },
                                {
                                  "label": "Komès an Gwo ak Distribisyon",
                                  "value": "Komès an Gwo ak Distribisyon",
                                  "child_classifications": [
                                    {
                                      "label": "Gwo Vandè Manje",
                                      "value": "Gwo Vandè Manje"
                                    },
                                    {
                                      "label": "Enpòtasyon-Ekspòtasyon",
                                      "value": "Enpòtasyon-Ekspòtasyon"
                                    },
                                    {
                                      "label": "Distribisyon Pwodwi Agrikòl",
                                      "value": "Distribisyon Pwodwi Agrikòl"
                                    },
                                    {
                                      "label": "Distribisyon Materyo Konstriksyon",
                                      "value": "Distribisyon Materyo Konstriksyon"
                                    },
                                    {
                                      "label": "Lòt",
                                      "value": "Lòt"
                                    }
                                  ]
                                },
                                {
                                  "label": "Transpò ak Lojistik",
                                  "value": "Transpò ak Lojistik",
                                  "child_classifications": [
                                    {
                                      "label": "Tap-Tap (Transpò Piblik)",
                                      "value": "Tap-Tap (Transpò Piblik)"
                                    },
                                    {
                                      "label": "Taksi Moto",
                                      "value": "Taksi Moto"
                                    },
                                    {
                                      "label": "Transpò Machandiz",
                                      "value": "Transpò Machandiz"
                                    },
                                    {
                                      "label": "Sèvis Maritim ak Pò",
                                      "value": "Sèvis Maritim ak Pò"
                                    },
                                    {
                                      "label": "Depo ak Antrepo",
                                      "value": "Depo ak Antrepo"
                                    },
                                    {
                                      "label": "Lòt",
                                      "value": "Lòt"
                                    }
                                  ]
                                },
                                {
                                  "label": "Manje ak Lojman",
                                  "value": "Manje ak Lojman",
                                  "child_classifications": [
                                    {
                                      "label": "Machann Manje nan Lari",
                                      "value": "Machann Manje nan Lari"
                                    },
                                    {
                                      "label": "Ti Restoran ak Kafe",
                                      "value": "Ti Restoran ak Kafe"
                                    },
                                    {
                                      "label": "Sèvis Trètè",
                                      "value": "Sèvis Trètè"
                                    },
                                    {
                                      "label": "Kay Dòmi ak Ti Otèl",
                                      "value": "Kay Dòmi ak Ti Otèl"
                                    },
                                    {
                                      "label": "Lwaye Chanm",
                                      "value": "Lwaye Chanm"
                                    },
                                    {
                                      "label": "Lòt",
                                      "value": "Lòt"
                                    }
                                  ]
                                },
                                {
                                  "label": "Sèvis Pèsonèl",
                                  "value": "Sèvis Pèsonèl",
                                  "child_classifications": [
                                    {
                                      "label": "Kwafi ak Bab",
                                      "value": "Kwafi ak Bab"
                                    },
                                    {
                                      "label": "Tayè ak Reparasyon Rad",
                                      "value": "Tayè ak Reparasyon Rad"
                                    },
                                    {
                                      "label": "Reparasyon Soulye",
                                      "value": "Reparasyon Soulye"
                                    },
                                    {
                                      "label": "Sèvis Lesiv",
                                      "value": "Sèvis Lesiv"
                                    },
                                    {
                                      "label": "Byennèt ak Masaj",
                                      "value": "Byennèt ak Masaj"
                                    },
                                    {
                                      "label": "Lòt",
                                      "value": "Lòt"
                                    }
                                  ]
                                },
                                {
                                  "label": "Sèvis Kay",
                                  "value": "Sèvis Kay",
                                  "child_classifications": [
                                    {
                                      "label": "Èd Domestik",
                                      "value": "Èd Domestik"
                                    },
                                    {
                                      "label": "Gadri Timoun",
                                      "value": "Gadri Timoun"
                                    },
                                    {
                                      "label": "Jadinay",
                                      "value": "Jadinay"
                                    },
                                    {
                                      "label": "Netwayaj Kay",
                                      "value": "Netwayaj Kay"
                                    },
                                    {
                                      "label": "Livrezon Dlo",
                                      "value": "Livrezon Dlo"
                                    },
                                    {
                                      "label": "Lòt",
                                      "value": "Lòt"
                                    }
                                  ]
                                },
                                {
                                  "label": "Reparasyon ak Antretyen",
                                  "value": "Reparasyon ak Antretyen",
                                  "child_classifications": [
                                    {
                                      "label": "Reparasyon Machin",
                                      "value": "Reparasyon Machin"
                                    },
                                    {
                                      "label": "Reparasyon Motosiklèt",
                                      "value": "Reparasyon Motosiklèt"
                                    },
                                    {
                                      "label": "Reparasyon Elektwonik ak Telefòn Mobil",
                                      "value": "Reparasyon Elektwonik ak Telefòn Mobil"
                                    },
                                    {
                                      "label": "Reparasyon Aparèy",
                                      "value": "Reparasyon Aparèy"
                                    },
                                    {
                                      "label": "Reparasyon Zouti ak Ekipman",
                                      "value": "Reparasyon Zouti ak Ekipman"
                                    },
                                    {
                                      "label": "Reparasyon ak Antretyen Generatris",
                                      "value": "Reparasyon ak Antretyen Generatris"
                                    },
                                    {
                                      "label": "Lòt",
                                      "value": "Lòt"
                                    }
                                  ]
                                },
                                {
                                  "label": "Lòt",
                                  "value": "Lòt"
                                }
                              ]
                            },
                            {
                              "label": "Sèvis Konesans ak Pwofesyonèl",
                              "value": "Sèvis Konesans ak Pwofesyonèl",
                              "child_classifications": [
                                {
                                  "label": "Edikasyon",
                                  "value": "Edikasyon",
                                  "child_classifications": [
                                    {
                                      "label": "Lekòl Primè",
                                      "value": "Lekòl Primè"
                                    },
                                    {
                                      "label": "Lekòl Segondè",
                                      "value": "Lekòl Segondè"
                                    },
                                    {
                                      "label": "Fòmasyon Pwofesyonèl",
                                      "value": "Fòmasyon Pwofesyonèl"
                                    },
                                    {
                                      "label": "Sèvis Leson Patikilye",
                                      "value": "Sèvis Leson Patikilye"
                                    },
                                    {
                                      "label": "Fòmasyon Konpetans",
                                      "value": "Fòmasyon Konpetans"
                                    },
                                    {
                                      "label": "Lòt",
                                      "value": "Lòt"
                                    }
                                  ]
                                },
                                {
                                  "label": "Swen Sante",
                                  "value": "Swen Sante",
                                  "child_classifications": [
                                    {
                                      "label": "Ajan Sante Kominotè",
                                      "value": "Ajan Sante Kominotè"
                                    },
                                    {
                                      "label": "Klinik Medikal",
                                      "value": "Klinik Medikal"
                                    },
                                    {
                                      "label": "Famasi",
                                      "value": "Famasi"
                                    },
                                    {
                                      "label": "Medsin Tradisyonèl",
                                      "value": "Medsin Tradisyonèl"
                                    },
                                    {
                                      "label": "Fanmsaj",
                                      "value": "Fanmsaj"
                                    },
                                    {
                                      "label": "Sèvis Dantè",
                                      "value": "Sèvis Dantè"
                                    },
                                    {
                                      "label": "Lòt",
                                      "value": "Lòt"
                                    }
                                  ]
                                },
                                {
                                  "label": "Sèvis Biznis",
                                  "value": "Sèvis Biznis",
                                  "child_classifications": [
                                    {
                                      "label": "Kontabilite ak Teni Liv",
                                      "value": "Kontabilite ak Teni Liv"
                                    },
                                    {
                                      "label": "Sèvis Transfè Lajan",
                                      "value": "Sèvis Transfè Lajan"
                                    },
                                    {
                                      "label": "Ajan Lajan Mobil",
                                      "value": "Ajan Lajan Mobil"
                                    },
                                    {
                                      "label": "Kafe Entènèt",
                                      "value": "Kafe Entènèt"
                                    },
                                    {
                                      "label": "Sèvis Enpresyon ak Fotokopi",
                                      "value": "Sèvis Enpresyon ak Fotokopi"
                                    },
                                    {
                                      "label": "Sèvis Tradiksyon",
                                      "value": "Sèvis Tradiksyon"
                                    },
                                    {
                                      "label": "Lòt",
                                      "value": "Lòt"
                                    }
                                  ]
                                },
                                {
                                  "label": "Sèvis Teknik",
                                  "value": "Sèvis Teknik",
                                  "child_classifications": [
                                    {
                                      "label": "Fotografi",
                                      "value": "Fotografi"
                                    },
                                    {
                                      "label": "Sèvis ak Rechaj Telefòn Mobil",
                                      "value": "Sèvis ak Rechaj Telefòn Mobil"
                                    },
                                    {
                                      "label": "Enstalasyon Panèl Solè",
                                      "value": "Enstalasyon Panèl Solè"
                                    },
                                    {
                                      "label": "Sèvis Òdinatè",
                                      "value": "Sèvis Òdinatè"
                                    },
                                    {
                                      "label": "Ekstansyon Agrikòl",
                                      "value": "Ekstansyon Agrikòl"
                                    },
                                    {
                                      "label": "Lòt",
                                      "value": "Lòt"
                                    }
                                  ]
                                },
                                {
                                  "label": "Lòt",
                                  "value": "Lòt"
                                }
                              ]
                            },
                            {
                              "label": "Sèvis Kominotè ak Kiltirèl",
                              "value": "Sèvis Kominotè ak Kiltirèl",
                              "child_classifications": [
                                {
                                  "label": "Sèvis Relijye",
                                  "value": "Sèvis Relijye",
                                  "child_classifications": [
                                    {
                                      "label": "Legliz ak Òganizasyon Relijye",
                                      "value": "Legliz ak Òganizasyon Relijye"
                                    },
                                    {
                                      "label": "Lekòl Relijye",
                                      "value": "Lekòl Relijye"
                                    },
                                    {
                                      "label": "Selebrasyon ak Evènman Relijye",
                                      "value": "Selebrasyon ak Evènman Relijye"
                                    },
                                    {
                                      "label": "Lòt",
                                      "value": "Lòt"
                                    }
                                  ]
                                },
                                {
                                  "label": "Divètisman ak Lwazi",
                                  "value": "Divètisman ak Lwazi",
                                  "child_classifications": [
                                    {
                                      "label": "Espektak Mizik",
                                      "value": "Espektak Mizik"
                                    },
                                    {
                                      "label": "Gwoup Dans",
                                      "value": "Gwoup Dans"
                                    },
                                    {
                                      "label": "Aktivite Espò",
                                      "value": "Aktivite Espò"
                                    },
                                    {
                                      "label": "Jwèt Aza ak Lotri",
                                      "value": "Jwèt Aza ak Lotri"
                                    },
                                    {
                                      "label": "Estasyon Radyo",
                                      "value": "Estasyon Radyo"
                                    },
                                    {
                                      "label": "Ti Pwojeksyon Sinema",
                                      "value": "Ti Pwojeksyon Sinema"
                                    },
                                    {
                                      "label": "Lòt",
                                      "value": "Lòt"
                                    }
                                  ]
                                },
                                {
                                  "label": "Òganizasyon Kominotè",
                                  "value": "Òganizasyon Kominotè",
                                  "child_classifications": [
                                    {
                                      "label": "Gwoup Fanm",
                                      "value": "Gwoup Fanm"
                                    },
                                    {
                                      "label": "Asosyasyon Kiltivatè",
                                      "value": "Asosyasyon Kiltivatè"
                                    },
                                    {
                                      "label": "Gwoup Epay",
                                      "value": "Gwoup Epay"
                                    },
                                    {
                                      "label": "Komite Devlopman Kominotè",
                                      "value": "Komite Devlopman Kominotè"
                                    },
                                    {
                                      "label": "Asosyasyon Jèn",
                                      "value": "Asosyasyon Jèn"
                                    },
                                    {
                                      "label": "Lòt",
                                      "value": "Lòt"
                                    }
                                  ]
                                },
                                {
                                  "label": "Lòt",
                                  "value": "Lòt"
                                }
                              ]
                            },
                            {
                              "label": "Sektè Nouvo ak Emèjan",
                              "value": "Sektè Nouvo ak Emèjan",
                              "child_classifications": [
                                {
                                  "label": "Enèji Renouvlab",
                                  "value": "Enèji Renouvlab",
                                  "child_classifications": [
                                    {
                                      "label": "Distribisyon ak Enstalasyon Panèl Solè",
                                      "value": "Distribisyon ak Enstalasyon Panèl Solè"
                                    },
                                    {
                                      "label": "Lavant Lanp Solè",
                                      "value": "Lavant Lanp Solè"
                                    },
                                    {
                                      "label": "Sèvis Chaje Batri",
                                      "value": "Sèvis Chaje Batri"
                                    },
                                    {
                                      "label": "Lòt",
                                      "value": "Lòt"
                                    }
                                  ]
                                },
                                {
                                  "label": "Sèvis Dijital",
                                  "value": "Sèvis Dijital",
                                  "child_classifications": [
                                    {
                                      "label": "Sèvis Lajan Mobil",
                                      "value": "Sèvis Lajan Mobil"
                                    },
                                    {
                                      "label": "Maketing sou Rezo Sosyo",
                                      "value": "Maketing sou Rezo Sosyo"
                                    },
                                    {
                                      "label": "Vant sou Mache an Liy",
                                      "value": "Vant sou Mache an Liy"
                                    },
                                    {
                                      "label": "Kreyasyon Kontni Dijital",
                                      "value": "Kreyasyon Kontni Dijital"
                                    },
                                    {
                                      "label": "Lòt",
                                      "value": "Lòt"
                                    }
                                  ]
                                },
                                {
                                  "label": "Jesyon Dechè",
                                  "value": "Jesyon Dechè",
                                  "child_classifications": [
                                    {
                                      "label": "Koleksyon ak Resiklaj Plastik",
                                      "value": "Koleksyon ak Resiklaj Plastik"
                                    },
                                    {
                                      "label": "Konpostaj",
                                      "value": "Konpostaj"
                                    },
                                    {
                                      "label": "Sèvis Sanitasyon",
                                      "value": "Sèvis Sanitasyon"
                                    },
                                    {
                                      "label": "Koleksyon Fatra",
                                      "value": "Koleksyon Fatra"
                                    },
                                    {
                                      "label": "Lòt",
                                      "value": "Lòt"
                                    }
                                  ]
                                },
                                {
                                  "label": "Ekoturis ak Turis Kiltirèl",
                                  "value": "Ekoturis ak Turis Kiltirèl",
                                  "child_classifications": [
                                    {
                                      "label": "Gid Touristik Lokal",
                                      "value": "Gid Touristik Lokal"
                                    },
                                    {
                                      "label": "Eksperyans Kiltirèl",
                                      "value": "Eksperyans Kiltirèl"
                                    },
                                    {
                                      "label": "Sejou kay Abitan",
                                      "value": "Sejou kay Abitan"
                                    },
                                    {
                                      "label": "Pwodiksyon Souvni Atizanal",
                                      "value": "Pwodiksyon Souvni Atizanal"
                                    },
                                    {
                                      "label": "Lòt",
                                      "value": "Lòt"
                                    }
                                  ]
                                },
                                {
                                  "label": "Lòt",
                                  "value": "Lòt"
                                }
                              ]
                            },
                            {
                              "label": "Lòt",
                              "value": "Lòt"
                            }
                          ]
                        }
                      },
                      {
                        "type": "TextField",
                        "key": "3760",
                        "label": "999 Depi konbyen ane ou posede oswa opere biznis sa a",
                        "description": null,
                        "required": true,
                        "disabled": false,
                        "hidden": false,
                        "data_name": "999_depi_konbyen_ane_ou_posede_oswa_opere_biznis_sa_a",
                        "default_value": null,
                        "visible_conditions_type": null,
                        "visible_conditions_behavior": "clear",
                        "visible_conditions": null,
                        "required_conditions_type": null,
                        "required_conditions": null,
                        "ai_prompt": null,
                        "numeric": true,
                        "format": "decimal",
                        "min": 0.0,
                        "max": 100.0,
                        "min_length": null,
                        "max_length": null,
                        "default_previous_value": false
                      },
                      {
                        "type": "ChoiceField",
                        "key": "7c55",
                        "label": "999 Ki kote biznis sa sitiye prensipalman",
                        "description": null,
                        "required": true,
                        "disabled": false,
                        "hidden": false,
                        "data_name": "999_ki_kote_biznis_sa_sitiye_prensipalman",
                        "default_value": null,
                        "visible_conditions_type": null,
                        "visible_conditions_behavior": "clear",
                        "visible_conditions": null,
                        "required_conditions_type": null,
                        "required_conditions": null,
                        "ai_prompt": null,
                        "multiple": false,
                        "allow_other": false,
                        "choices": [
                          {
                            "label": "Nan kay moun nan",
                            "value": "Nan kay moun nan"
                          },
                          {
                            "label": "Nan yon lòt batiman moun nan posede",
                            "value": "Nan yon lòt batiman moun nan posede"
                          },
                          {
                            "label": "Nan yon espas moun nan lwe",
                            "value": "Nan yon espas moun nan lwe"
                          },
                          {
                            "label": "Plas nan mache",
                            "value": "Plas nan mache"
                          },
                          {
                            "label": "Mobil (pa gen pozisyon fiks)",
                            "value": "Mobil (pa gen pozisyon fiks)"
                          },
                          {
                            "label": "Lòt",
                            "value": "Lòt"
                          }
                        ],
                        "default_previous_value": false
                      },
                      {
                        "type": "YesNoField",
                        "key": "cd00",
                        "label": "999 Èske biznis sa anrejistre ak leta",
                        "description": "Nivo Patant- Matrikil Fiskal",
                        "required": true,
                        "disabled": false,
                        "hidden": false,
                        "data_name": "999_eske_biznis_sa_anrejistre_ak_leta",
                        "default_value": null,
                        "visible_conditions_type": null,
                        "visible_conditions_behavior": "clear",
                        "visible_conditions": null,
                        "required_conditions_type": null,
                        "required_conditions": null,
                        "ai_prompt": null,
                        "positive": {
                          "label": "Wi",
                          "value": "wi"
                        },
                        "negative": {
                          "label": "Non",
                          "value": "non"
                        },
                        "neutral": {
                          "label": "Pa Konnen",
                          "value": "pa konnen"
                        },
                        "neutral_enabled": true,
                        "default_previous_value": false
                      },
                      {
                        "type": "YesNoField",
                        "key": "84c0",
                        "label": "999 Eske biznis lan pemet ou satisfe bezwen prensipal ou",
                        "description": "Le nou pale de bezwen prensipal nou vle di: manje, kay ak lekol.",
                        "required": true,
                        "disabled": false,
                        "hidden": false,
                        "data_name": "999_eske_biznis_lan_pemet_ou_satisfe_bezwen_prensipal_ou",
                        "default_value": null,
                        "visible_conditions_type": null,
                        "visible_conditions_behavior": "clear",
                        "visible_conditions": null,
                        "required_conditions_type": null,
                        "required_conditions": null,
                        "ai_prompt": null,
                        "positive": {
                          "label": "Wi",
                          "value": "wi"
                        },
                        "negative": {
                          "label": "Non",
                          "value": "non"
                        },
                        "neutral": {
                          "label": "N/A",
                          "value": "n/a"
                        },
                        "neutral_enabled": false,
                        "default_previous_value": false
                      }
                    ]
                  }
                ]
              },
              {
                "type": "TextField",
                "key": "4f75",
                "label": "4.27 Lòt enfòmasyon/komantè",
                "description": "Itilize sa pou enfomasyon ki enpotan/petinan ke moun nan te bay, men ki pat ka antre anba youn nan kesyon fiks yo",
                "required": true,
                "disabled": false,
                "hidden": false,
                "data_name": "427_lot_enfomasyon_komante",
                "default_value": null,
                "visible_conditions_type": null,
                "visible_conditions_behavior": "clear",
                "visible_conditions": null,
                "required_conditions_type": null,
                "required_conditions": null,
                "ai_prompt": null,
                "numeric": false,
                "pattern": null,
                "pattern_description": null,
                "min_length": null,
                "max_length": null,
                "default_previous_value": false
              }
            ],
            "title_field_key": null,
            "title_field_keys": [
              "f7b0",
              "798a"
            ],
            "geometry_types": [
              "Point"
            ],
            "geometry_required": false,
            "min_length": null,
            "max_length": null
          }
        ]
      },
      {
        "type": "Section",
        "key": "3a75",
        "label": "5. Fèmti",
        "description": null,
        "required": false,
        "disabled": false,
        "hidden": false,
        "data_name": "5_femti",
        "default_value": null,
        "visible_conditions_type": "all",
        "visible_conditions_behavior": "clear",
        "visible_conditions": [
          {
            "field_key": "91f0",
            "operator": "equal_to",
            "value": "wi"
          },
          {
            "field_key": "3dc0",
            "operator": "equal_to",
            "value": "wi"
          }
        ],
        "required_conditions_type": null,
        "required_conditions": null,
        "display": "inline",
        "elements": [
          {
            "type": "TextField",
            "key": "9230",
            "label": "5.2 Nimewo idantifikasyon kay la",
            "description": "Li ap fomate konsa: ADF, 3 let nan prenon Ankete a, Ane, Mwa, Jou ak Le:\nADFADO202410101235",
            "required": false,
            "disabled": false,
            "hidden": false,
            "data_name": "52_nimewo_idantifikasyon_kay_la",
            "default_value": null,
            "visible_conditions_type": null,
            "visible_conditions_behavior": "clear",
            "visible_conditions": null,
            "required_conditions_type": null,
            "required_conditions": null,
            "ai_prompt": null,
            "numeric": false,
            "pattern": "^KVW[A-Z]{3}\\d{12}$",
            "pattern_description": "Li ap fomate konsa: ADF, 3 let nan prenon Ankete a, Ane, Mwa, Jou ak Le",
            "min_length": null,
            "max_length": null,
            "default_previous_value": false
          },
          {
            "type": "PhotoField",
            "key": "1fd0",
            "label": "5.3 Foto kay la",
            "description": null,
            "required": true,
            "disabled": false,
            "hidden": false,
            "data_name": "53_foto_kay_la",
            "default_value": null,
            "visible_conditions_type": null,
            "visible_conditions_behavior": "clear",
            "visible_conditions": null,
            "required_conditions_type": null,
            "required_conditions": null,
            "min_length": 1,
            "max_length": 2,
            "annotations_enabled": false,
            "deidentification_enabled": false,
            "timestamp_enabled": false,
            "latlongstamp_enabled": false
          },
          {
            "type": "TextField",
            "key": "8720",
            "label": "5.4 Lòt enfòmasyon/komantè",
            "description": null,
            "required": true,
            "disabled": false,
            "hidden": false,
            "data_name": "54_lot_enfomasyon_komante",
            "default_value": null,
            "visible_conditions_type": null,
            "visible_conditions_behavior": "clear",
            "visible_conditions": null,
            "required_conditions_type": null,
            "required_conditions": null,
            "ai_prompt": null,
            "numeric": false,
            "pattern": null,
            "pattern_description": null,
            "min_length": null,
            "max_length": null,
            "default_previous_value": false
          }
        ]
      },
      {
        "type": "Section",
        "key": "5269",
        "label": "Vizit Swivi",
        "description": null,
        "required": false,
        "disabled": false,
        "hidden": false,
        "data_name": "vizit_swivi",
        "default_value": null,
        "visible_conditions_type": "all",
        "visible_conditions_behavior": "clear",
        "visible_conditions": [
          {
            "field_key": "91f0",
            "operator": "equal_to",
            "value": "non"
          },
          {
            "field_key": "1950",
            "operator": "equal_to",
            "value": "wi"
          }
        ],
        "required_conditions_type": null,
        "required_conditions": null,
        "display": "inline",
        "elements": [
          {
            "type": "YesNoField",
            "key": "b7c0",
            "label": "Avi Swivi",
            "description": null,
            "required": false,
            "disabled": false,
            "hidden": false,
            "data_name": "avi_swivi",
            "default_value": null,
            "visible_conditions_type": null,
            "visible_conditions_behavior": "clear",
            "visible_conditions": null,
            "required_conditions_type": null,
            "required_conditions": null,
            "ai_prompt": null,
            "positive": {
              "label": "Wi",
              "value": "wi"
            },
            "negative": {
              "label": "Non",
              "value": "non"
            },
            "neutral": {
              "label": "N/A",
              "value": "n/a"
            },
            "neutral_enabled": false,
            "default_previous_value": false
          },
          {
            "type": "DateTimeField",
            "key": "5070",
            "label": "Dat pou vizit swivi",
            "description": null,
            "required": false,
            "disabled": false,
            "hidden": false,
            "data_name": "dat_pou_vizit_swivi",
            "default_value": null,
            "visible_conditions_type": null,
            "visible_conditions_behavior": "clear",
            "visible_conditions": null,
            "required_conditions_type": null,
            "required_conditions": null,
            "ai_prompt": null,
            "default_previous_value": false
          },
          {
            "type": "TimeField",
            "key": "7fa7",
            "label": "Lè pou vizit swivi",
            "description": null,
            "required": false,
            "disabled": false,
            "hidden": false,
            "data_name": "le_pou_vizit_swivi",
            "default_value": null,
            "visible_conditions_type": null,
            "visible_conditions_behavior": "clear",
            "visible_conditions": null,
            "required_conditions_type": null,
            "required_conditions": null,
            "ai_prompt": null,
            "default_previous_value": false
          },
          {
            "type": "PhotoField",
            "key": "4424",
            "label": "Foto stike pou swivi",
            "description": null,
            "required": false,
            "disabled": false,
            "hidden": false,
            "data_name": "foto_stike_pou_swivi",
            "default_value": null,
            "visible_conditions_type": null,
            "visible_conditions_behavior": "clear",
            "visible_conditions": null,
            "required_conditions_type": null,
            "required_conditions": null,
            "min_length": null,
            "max_length": null,
            "annotations_enabled": false,
            "deidentification_enabled": false,
            "timestamp_enabled": false,
            "latlongstamp_enabled": false
          },
          {
            "type": "TextField",
            "key": "4542",
            "label": "Lòt enfòmasyon/komantè",
            "description": null,
            "required": false,
            "disabled": false,
            "hidden": false,
            "data_name": "lot_enfomasyonkomante",
            "default_value": null,
            "visible_conditions_type": null,
            "visible_conditions_behavior": "clear",
            "visible_conditions": null,
            "required_conditions_type": null,
            "required_conditions": null,
            "ai_prompt": null,
            "numeric": false,
            "pattern": null,
            "pattern_description": null,
            "min_length": null,
            "max_length": null,
            "default_previous_value": false
          }
        ]
      }
    ],
    "image": "https://content.fulcrumapp.com/form-images/073f73e4-fc18-4907-beaf-d3a337ce09ce-1d5db70e-6962-44d2-af05-a6d05bdfb40b.png?Expires=1744737560&Signature=qsVtmHRnL01GWCL0Hj-aw6dq24PfqHFCsRa4yRP-JLFhsHx0UmuN1TSu~LFU90Ch2agkm-sGm3dDcpBXhzoa32vD9LlNWmI2IrizVXAlSzFt3pKWeE4EXlogh~~rOXEkDNr9SQ8JgatQwjim-x2vaxMe7RtHqcka~vy4yQoSXR~O1kB2HbqSxx3zPYQ6WKzYYplMLOBznCDCuBJHqECjAJ8-FMovQQGUzRkBzl-zIpS-2TiwvMljZYmgYCApUrMw6stXAM8eFuGP6JajjmCm3~07lXp205KSfg3EUjdacnoBHeyi94yopkIG1WAgCdDx2uF5R1gvMuyLFUulVed79Q__&Key-Pair-Id=K1J5KALR9YAJQS",
    "id": "073f73e4-fc18-4907-beaf-d3a337ce09ce"
  },
  "records": {
  },
  "report_templates": [

  ],
  "workflows": [

  ]
}