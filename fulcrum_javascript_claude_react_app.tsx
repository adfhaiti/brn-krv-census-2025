import React, { useState, useEffect } from "react";
import {
  ChevronRight,
  ChevronDown,
  Plus,
  Trash2,
  Copy,
  Check,
  Mail,
  Home,
  User,
  Heart,
  DollarSign,
  Camera,
  Calendar,
  Clock,
  AlertCircle,
  Info,
  MapPin,
  Building,
  Briefcase,
  School,
  CreditCard,
  Globe,
  Phone,
  Wifi,
  Droplets,
  Trash,
  Flame,
  Lightbulb,
  Users,
} from "lucide-react";

const FulcrumSurveyApp = () => {
  const [formData, setFormData] = useState({
    status: "Pou Fet",
    emailResponse: "",
    section1: {
      "11_non_ankete_a": "",
      "13_eske_gen_moun_prezan_ki_ka_reponn": "",
      "16_eske_gen_moun_ki_abite_viv_nan_kay_la": "",
      "14_eske_moun_lan_dako_reponn": "",
      "15_lot_enfomasyon_komante": "",
    },
    section2: {
      "21_konbyen_moun_ki_ap_viv_nan_menaj_sa": "",
      "22_eske_gen_timoun_nan_kay_la": "",
      "20_eske_gen_moun_ki_gen_andikap_fizik_oswa_mantal_nan_kay": "",
      "23_a_ki_tit_menaj_la_okiperete_nan_inite_lojman_sa": "",
      "23_lot_estati_okipasyon_fanmi_nan_kay_la": "",
      "999_eske_yon_moun_nan_menaj_la_gen_dokiman_legal_pou_te_a": "",
      "24_konbyen_pyes_kay_la_genyen": "",
      "26_ak_kisa_panno_kay_la_fet": "",
      "27_ak_ki_lot_materyo_panno_kay_la_fet": "",
      "28_ak_kisa_kay_la_kouvri": "",
      "29_ak_ki_lot_bagay_kay_la_kouvri": "",
      "210_ak_kisa_ate_kay_la_fet": "",
      "211_ak_ki_lot_bagay_ate_kay_la_fet": "",
      "999_eske_kay_la_gen_twalet": "",
      "212_eske_kay_la_gen_akse_a_yon_twalet": "",
      "213_ki_lot_tip_twalet_ou_genyen": "",
      "999_eske_menaj_la_gen_aparey_ki_fonksyone_ak_kouran": "",
      "999_ki_sous_eneji_menaj_la_itilize": "",
      "213_ki_sous_prensipal_limye_menaj_la_nan_kay_sa": "",
      "214_sistem_dlo_menaj_la_plis_itilize": "",
      "215_ki_dlo_menaj_la_plis_itilize_pou_bwe": "",
      "216_ki_lot_dlo_menaj_la_itilize_pou_bwe": "",
      "217_ki_mwayen_nou_plis_itilize_pou_jete_fatra": "",
      "218_ki_lot_mwayen_menaj_la_itilize_pou_jete_fatra": "",
      "219_tip_chale_enji_plis_itilize_pou_fe_manje": "",
      "220_eske_menaj_la_gen_akse_ak_entenet": "",
      "999_ki_rezo_menaj_la_itilize": "",
      "221_eske_menaj_la_gen_akse_ak_yon_telefon_entlijan": "",
      "222_eske_menaj_la_gen_akse_ak_yon_odinate": "",
      "223_lot_enfomasyon_komante": "",
    },
    section3: {
      "31_eske_menaj_la_gen_akse_a_swen_medikal_nan_zon_nan": "",
      "32_kibo_menaj_la_plis_pran_swen_medikal": "",
      "33_ki_lot_kote_menaj_al_jwenn_swen_medikal_nan_zon_nan": "",
      "34_eske_timoun_ki_nan_menaj_la_konn_vaksinen": "",
      "999_konbyen_repa_chak_moun_nan_menaj_la_manje_chak_jou": "",
      "999_eske_nou_konn_sote_repa_akoz_mank_resous": "",
      "36_lot_enfomasyon_komante": "",
    },
    individuals: [],
    section5: {
      "52_nimewo_idantifikasyon_kay_la": "",
      "53_foto_kay_la": null,
      "54_lot_enfomasyon_komante": "",
    },
    followUp: {
      avi_swivi: "",
      dat_pou_vizit_swivi: "",
      le_pou_vizit_swivi: "",
      foto_stike_pou_swivi: null,
      lot_enfomasyonkomante: "",
    },
    location: {
      latitude: "",
      longitude: "",
      altitude: "",
      horizontal_accuracy: "",
      vertical_accuracy: "",
      speed: "",
      course: "",
    },
  });

  const [expandedSections, setExpandedSections] = useState({
    email: false,
    section1: true,
    section2: false,
    section3: false,
    section4: false,
    section5: false,
    followUp: false,
  });

  const [expandedIndividuals, setExpandedIndividuals] = useState({});
  const [copied, setCopied] = useState(false);
  const [errors, setErrors] = useState({});

  // Choice options for all select fields
  const choiceOptions = {
    ankete: ["Ankete 1", "Ankete 2", "Ankete 3", "Lot"],
    wiNon: ["wi", "non"],
    wiNonNA: ["wi", "non", "n/a"],
    wiNonPaKonnen: ["wi", "non", "pa konnen"],
    estatOkipasyon: [
      "Posede pa yon manm menaj la",
      "Lwe nan men yon pwopriyetè",
      "Okipasyon gratis",
      "Lòt",
    ],
    pannoKay: [
      "Beton",
      "Palmis",
      "Wòch",
      "Tach",
      "Tif",
      "Pwela",
      "Klisad",
      "Pay",
      "Tòl",
      "Bwa",
      "Lòt",
    ],
    kouvriKay: ["Beton", "Pay", "Pwela", "Playwoud", "Tach", "Tòl", "Lòt"],
    ateKay: ["Mozayik", "Seramik", "Tè bati", "Beton", "Lòt"],
    tipTwalet: ["Modèn", "Latrin", "Modèn ak latrin", "Pa Genyen", "Lòt"],
    sousEneji: ["EDH", "Pano", "Pil", "Delko", "Lot"],
    sousLimye: [
      "Anpoul",
      "Anpoul Rechajab",
      "Balèn",
      "Flach",
      "Lanp Gaz",
      "Lanp Solè",
      "Pa Genyen",
      "Lòt",
    ],
    sistemDlo: [
      "Sistèm dlo enstale anndan kay la",
      "Sistèm dlo enstale sou tè a (deyò batiman)",
      "Chato Dlo",
      "Pa Gen Sistèm Dlo",
    ],
    dloPouBwe: [
      "Dlo Lapli",
      "Dlo trete (Sachè,Galon,Bidon,Kamyon)",
      "Kyòs",
      "Pi",
      "Ponp/Tiyo",
      "Sitèn",
      "Sous dlo",
      "Lòt",
    ],
    mwayenFatra: [
      "Jete sou tèren lib",
      "Jete nan ravin",
      "Jete nan lari",
      "Boule",
      "Jete nan tou",
      "Jete nan tou ak boule",
      "Ranmase pa yon sèvis jesyon fatra",
      "Lòt",
    ],
    chaleManjeOptions: [
      "Bwa",
      "Chabon",
      "Pwopàn",
      "Kewozèn (Gaz blan)",
      "Kouran",
      "Lòt",
    ],
    rezoOptions: [
      "Digicel",
      "Natcom",
      "Starlink",
      "Digicel ak Natcom",
      "Digicel ak Starlink",
      "Natcom ak Starlink",
      "Lot",
    ],
    kiboPranSwen: [
      "Lopital",
      "Klinik",
      "Sant sante",
      "Lopital ak klinik",
      "Lopital ak sant sante",
      "Sant sante ak klinik",
      "Doktè Fèy",
      "Pa konn ale",
      "Lòt",
    ],
    relasyonChef: [
      "chef menaj la",
      "mari",
      "madanm",
      "pitit",
      "pitit pitit",
      "lot fanmi",
      "pa fanmi - lot relasyon",
    ],
    seks: ["Fi", "Gason"],
    sitiyasyonMatrimonyal: [
      "Selibatè (poko janm marye)",
      "Marye",
      "Plasay",
      "Divòse",
      "Vèf-Vèv",
      "Non aplikab",
    ],
    liEkri: ["Wi", "Non", "Non aplikab", "Pa konnen"],
    nivoEdikasyon: [
      "Preskolè",
      "Primè - 1AF - 6AF",
      "Segondè - 7yèm-4yèm",
      "Segondè - NS1-NS4 (9yèm - Filo)",
      "Inivèsite",
      "Pa t janm ale",
      "Non aplikab",
      "Pa konnen",
      "Lòt",
    ],
    klasAktyel: [
      "Preskolè",
      "Primè - 1AF - 6AF",
      "Segondè - 7yèm-4yèm",
      "Segondè - NS1-NS4 (9yèm - Filo)",
      "Inivèsite",
    ],
    rezonPaAle: [
      "Mwayen ekonomik",
      "Pa enterese/Pa vle",
      "Ansent",
      "Travay",
      "Andikap fizik",
      "Andikap mantal",
      "Pa nan laj pou sa",
      "Maladi/Sante",
      "Fini ak etid li",
      "Pa gen nivo klas yo nan zòn nan",
      "Distans lekòl la",
      "Lòt",
    ],
    statiAnplwa: [
      "Endepandan",
      "Anplwaye-Salarye(Prive)",
      "Endepandan ak Employe-Salarye(Prive)",
      "Anplwaye Leta",
      "Endepandan ak Anplwaye Leta",
    ],
    tipAndikap: ["Fizik", "Mantal", "Lòt"],
    relijyon: ["Katolik", "Pwotestan", "Vodou", "Boudis", "Izlam", "Lòt"],
    entevalKob: [
      "0 - 25000",
      "25001 - 50000",
      "50001 - 75000",
      "75001 - 100000",
      "100001 - 125000",
      "125001 - 150000",
      "150001 - 175000",
      "175001 - 200000",
      "200001 - 225000",
      "225001 - 250000",
      "250001 - 275000",
      "275001 - 300000",
      "300001 - 325000",
      "325001 - 350000",
      "350001 - 375000",
      "375001 - 400000",
      "400001 - 425000",
      "425001 - 450000",
      "450001 - 475000",
      "475001 - 500000",
      "500001 e Plis",
      "Refize reponn",
      "Pa konnen",
    ],
    tipKontBank: ["Epay", "Kouran", "Epay ak Kouran", "Lòt"],
    frekansTransfe: [
      "Chak semèn",
      "Chak mwa",
      "Chak trimès",
      "Chak ane",
      "Lòt",
    ],
    mwayenTranspo: ["Moto", "Machin", "Bisiklèt", "Taptap", "A pye", "Lòt"],
    koteBiznisSitiye: [
      "Nan kay moun nan",
      "Nan yon lòt batiman moun nan posede",
      "Nan yon espas moun nan lwe",
      "Plas nan mache",
      "Mobil (pa gen pozisyon fiks)",
      "Lòt",
    ],
    rezonViniZon: ["Ensekirite", "Travay", "Fanmi", "Lòt"],
  };

  // Haiti communes list
  const kominAyiti = [
    "Abricots",
    "Acul du Nord",
    "Anse-a-Foleur",
    "Anse-a-Pitre",
    "Anse-a-Veau",
    "Anse-a-Galets",
    "Anse d'Hainault",
    "Anse Rouge",
    "Aquin",
    "Arcahaie",
    "Arnaud",
    "Arniquet",
    "Bahon",
    "Baie de Henne",
    "Bainet",
    "Baraderes",
    "Bas Limbe",
    "Bassin Bleu",
    "Beaumont",
    "Belladere",
    "Belle Anse",
    "Bombardopolis",
    "Bonbon",
    "Borgne",
    "Boucan Carre",
    "Cabaret",
    "Camp-Perrin",
    "Cap-Haitien",
    "Capotille",
    "Caracol",
    "Carice",
    "Carrefour",
    "Cavaillon",
    "Cayes-Jacmel",
    "Cerca Carvajal",
    "Cerca La Source",
    "Chambellan",
    "Chamsolme",
    "Chantal",
    "Chardonnieres",
    "Cite Soleil",
    "Corail",
    "Cornillon / Grand Bois",
    "Coteaux",
    "Cotes de Fer",
    "Croix-Des-Bouquets",
    "Dame Marie",
    "Delmas",
    "Desdunes",
    "Dessalines",
    "Dondon",
    "Ennery",
    "Ferrier",
    "Fonds-Verrettes",
    "Fond-des-Blancs",
    "Fonds-des-Negres",
    "Fort-Liberte",
    "Ganthier",
    "Gonaives",
    "Grand-Boucan",
    "Grand-Goave",
    "Grand Gosier",
    "Grande Riviere Du Nord",
    "Grande Saline",
    "Gressier",
    "Gros Morne",
    "Hinche",
    "Ile a Vache",
    "Jacmel",
    "Jean Rabel",
    "Jeremie",
    "Kenscoff",
    "L'Asile",
    "L'Estere",
    "La Chapelle",
    "La Tortue",
    "La Vallee",
    "La Victoire",
    "Lascahobas",
    "Leogane",
    "Les Anglais",
    "Les Cayes",
    "Les Irois",
    "Limbe",
    "Limonade",
    "Maissade",
    "Maniche",
    "Marigot",
    "Marmelade",
    "Milot",
    "Miragoane",
    "Mirebalais",
    "Mole Saint Nicolas",
    "Mombin Crochu",
    "Mont-Organise",
    "Moron",
    "Ouanaminthe",
    "Paillant",
    "Perches",
    "Pestel",
    "Petion-Ville",
    "Petit-Goave",
    "Petit Trou de Nippes",
    "Petite Riviere de l'Artibonite",
    "Petite Riviere de Nippes",
    "Pignon",
    "Pilate",
    "Plaine du Nord",
    "Plaisance",
    "Plaisance du Sud",
    "Pointe a Raquette",
    "Port-a-Piment",
    "Port-au-Prince",
    "Port-de-Paix",
    "Port-Margot",
    "Port-Salut",
    "Quartier Morin",
    "Ranquitte",
    "Roche a Bateau",
    "Roseaux",
    "Saint-Louis du Nord",
    "Saint-Marc",
    "Saint-Michel de l'Attalaye",
    "Saint-Raphael",
    "Saint Jean du Sud",
    "Saint Louis du Sud",
    "Sainte Suzanne",
    "Saut d'Eau",
    "Savanette",
    "Tabarre",
    "Terre Neuve",
    "Terrier Rouge",
    "Thiotte",
    "Thomassique",
    "Thomazeau",
    "La Gonave",
    "Thomonde",
    "Tiburon",
    "Torbeck",
    "Trou du Nord",
    "Vallieres",
    "Verrettes",
    "Etazini",
    "Canada",
    "France",
    "Brezil",
    "Chili",
    "Guyanne",
    "Mexique",
    "Lot Peyi",
  ];

  // Economic activities list
  const aktiviteEkonomik = [
    "Achitèk",
    "Administratè",
    "Agrikiltè",
    "Atis",
    "Avoka",
    "Bon - Domestic",
    "Chabonye",
    "Chapant",
    "Chofè",
    "Dantis",
    "Ebenis",
    "Edikate Sante",
    "Elvaj",
    "Enfimye",
    "Enjenyè",
    "Enjenyè sivil",
    "Entèprèt",
    "Epidemyolojis",
    "Estetisyèn",
    "Fotograf",
    "Jeneralis",
    "Jij",
    "Kiltivatè",
    "Kizinyè",
    "Kontab",
    "Kwafe - Babè",
    "Lesivyè",
    "Lot",
    "Machann - Komèsan",
    "Manadjè Pwojè",
    "Mason",
    "Mekanisyen",
    "Menajè",
    "Moto Taksi",
    "Oungan - Manbo - Bòkò",
    "Pa fe anyen",
    "Pechè",
    "Plonbyen",
    "Politisyen",
    "Pwofesè",
    "Pwopriyete biznis",
    "Sekirite",
    "Taksi",
    "Tayè - Koutirye",
    "Teknisyen laboratwa",
    "Teknisyen medikal",
    "Travayè Gouvènman",
    "Travayè Jounalye",
    "Travayè konstriksyon",
    "Veterinè",
  ];

  // Countries list
  const peyi = [
    "Afghanistan",
    "Afrique du Sud",
    "Albanie",
    "Algérie",
    "Allemagne",
    "Andorre",
    "Angola",
    "Anguilla",
    "Antigua-et-Barbuda",
    "Antilles néerlandaises",
    "Arabie saoudite",
    "Argentine",
    "Arménie",
    "Aruba",
    "Australie",
    "Autriche",
    "Azerbaïdjan",
    "Bahamas",
    "Bahreïn",
    "Bangladesh",
    "Barbade",
    "Bélarus",
    "Belgique",
    "Belize",
    "Bénin",
    "Bermudes",
    "Bhoutan",
    "Bolivie",
    "Bosnie-Herzégovine",
    "Botswana",
    "Brésil",
    "Brunéi Darussalam",
    "Bulgarie",
    "Burkina Faso",
    "Burundi",
    "Cambodge",
    "Cameroun",
    "Canada",
    "Cap-Vert",
    "Chili",
    "Chine",
    "Chypre",
    "Colombie",
    "Comores",
    "Congo",
    "Congo, Rép. dém. du",
    "Corée du Nord",
    "Corée du Sud",
    "Costa Rica",
    "Côte d'Ivoire",
    "Croatie",
    "Cuba",
    "Danemark",
    "Djibouti",
    "Dominique",
    "Egypte",
    "El Salvador",
    "Emirats arabes unis",
    "Equateur",
    "Erythrée",
    "Espagne",
    "Estonie",
    "Etats-Unis",
    "Ethiopie",
    "Fidji",
    "Finlande",
    "France",
    "Gabon",
    "Gambie",
    "Géorgie",
    "Ghana",
    "Gibraltar",
    "Grèce",
    "Grenade",
    "Groenland",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guernesey",
    "Guinée",
    "Guinée équatoriale",
    "Guinée-Bissau",
    "Guyana",
    "Guyane française",
    "Haïti",
    "Honduras",
    "Hong-kong, Chine",
    "Hongrie",
    "Ile de Man",
    "Ile Norfolk",
    "Iles Anglo-normandes",
    "Iles Caïmanes",
    "Iles Cook",
    "Iles Falkland (Malvinas)",
    "Iles Féroé",
    "Iles Mariannes du Nord",
    "Iles Marshall",
    "Iles Salomon",
    "Iles Turques et Caïques",
    "Iles Vierges américaines",
    "Iles Vierges britanniques",
    "Iles Wallis et Futuna",
    "Inde",
    "Indonésie",
    "Iran, Rép. islamique d'",
    "Iraq",
    "Irlande",
    "Islande",
    "Israël",
    "Italie",
    "Jamahiriya arabe libyenne",
    "Jamaïque",
    "Japon",
    "Jersey",
    "Jordanie",
    "Kazakhstan",
    "Kenya",
    "Kirghizistan",
    "Kiribati",
    "Kosovo",
    "Koweït",
    "Lesotho",
    "Lettonie",
    "Liban",
    "Libéria",
    "Liechtenstein",
    "Lituanie",
    "Luxembourg",
    "Macao, Chine",
    "Macédoine, Ex-Rép. yougoslave de",
    "Madagascar",
    "Malaisie",
    "Malawi",
    "Maldives",
    "Mali",
    "Malte",
    "Maroc",
    "Martinique",
    "Maurice",
    "Mauritanie",
    "Mexique",
    "Moldova, République de",
    "Monaco",
    "Mongolie",
    "Monténégro",
    "Montserrat",
    "Mozambique",
    "Myanmar",
    "Namibie",
    "Nauru",
    "Népal",
    "Nicaragua",
    "Niger",
    "Nigéria",
    "Nioué",
    "Norvège",
    "Nouvelle-Calédonie",
    "Nouvelle-Zélande",
    "Oman",
    "Ouganda",
    "Ouzbékistan",
    "Pakistan",
    "Palau",
    "Panama",
    "Papouasie-Nouvelle-Guinée",
    "Paraguay",
    "Pays-Bas",
    "Pérou",
    "Philippines",
    "Pologne",
    "Polynésie française",
    "Porto Rico",
    "Portugal",
    "Qatar",
    "Syrie",
    "République centrafricaine",
    "Lao",
    "République dominicaine",
    "République tchèque",
    "Roumanie",
    "Royaume-Uni",
    "Russie, Fédération de",
    "Rwanda",
    "Sahara occidental",
    "Sainte-Hélène",
    "Sainte-Lucie",
    "Saint-Kitts-et-Nevis",
    "Saint-Marin",
    "Saint-Pierre-et-Miquelon",
    "Saint-Vincent-et-les Grenadines",
    "Samoa",
    "Samoa américaines",
    "Sao Tomé-et-Principe",
    "Sénégal",
    "Serbie",
    "Serbie-et-Monténégro",
    "Seychelles",
    "Sierra Leone",
    "Singapour",
    "Slovaquie",
    "Slovénie",
    "Somalie",
    "Soudan, République du",
    "Sri Lanka",
    "Suède",
    "Suisse",
    "Suriname",
    "Swaziland",
    "Tadjikistan",
    "Taïwan",
    "Tanzanie",
    "Tchad",
    "Tchécoslovaquie",
    "Thaïlande",
    "Timor-Leste",
    "Togo",
    "Tokélaou",
    "Tonga",
    "Trinité-et-Tobago",
    "Tunisie",
    "Turkménistan",
    "Turquie",
    "Tuvalu",
    "Ukraine",
    "URSS",
    "Uruguay",
    "Vanuatu",
    "Venezuela",
    "Viet Nam",
    "Yémen",
    "Zambie",
    "Zimbabwe",
  ];

  // Handle input changes
  const handleInputChange = (section, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  // Add individual
  const addIndividual = () => {
    const newIndividual = {
      id: Date.now(),
      "41_prenon": "",
      "42_siyati": "",
      "43_relasyon_ak_chef_menaj_la": "",
      "44_seks": "",
      "45_ane_li_fet": "",
      "451_laj_moun_lan": 0,
      "46_sitiyasyon_matrimonyal_aktyel": "",
      "47_kantite_pitit_moun_sa_a_janm_fe": "",
      "48_kote_li_fet": "",
      "411_depi_konbyen_ane_li_rete_nan_kay_la": "",
      "4131_eske_li_te_rete_yon_lot_kote_avan": "",
      "413_kote_li_te_rete_anvan": "",
      "414_rezon_ki_fe_li_vini_nan_zon_nan": "",
      "415_eske_moun_sa_gen_yon_andikap": "",
      "416_tip_andikap": "",
      "999_eske_gen_sevis_disponib_pou_sipote_bezwen_andikap_sa": "",
      "999_eske_moun_sa_afilye_ak_yon_relijyon": "",
      "999_ak_ki_relijyon_moun_sa_afilye": "",
      "999_eske_moun_sa_gen_pyes_idantifikasyon_leta": "",
      "999_eske_moun_sa_gen_ak_de_nesans_pyes_idantifikasyon_": "",
      "999_eske_moun_sa_gen_kat_idantite": "",
      "999_eske_moun_sa_gen_lisans_pemi_kondi": "",
      "999_eske_moun_sa_gen_paspo": "",
      // Education subsection
      "417_eske_moun_sa_konn_li_ak_ekri": "",
      "418_denye_nivo_edikasyon_li_resevwa": "",
      "419_eske_li_toujou_ale_lekol": "",
      "999_nan_ki_klas_moun_sa_ye": "",
      "420_rezon_ki_fe_li_pa_ale_lekol": "",
      "421_lot_rezon_ki_fe_li_pa_ale_lekol": "",
      // Economic information subsection
      "423_eske_li_gen_yon_aktivite_ki_antre_kob": "",
      "424_stati_anplwa": "",
      "425_prensipal_aktivite_li": "",
      "999_ki_lot_aktivite_li_genyen_pou_antre_kob": "",
      "426_enteval_kob_li_fe_an_goud_pa_mwa": "",
      "999_eske_moun_nan_gen_yon_kont_bank": "",
      ki_tip_kont_bank_li_genyen: "",
      "999_eske_moun_sa_konn_itilize_sevis_lajan_mobil": "",
      "999_ske_moun_sa_gen_relasyon_ak_moun_ki_ap_viv_aletranje": "",
      "999_nan_ki_peyi_moun_sa_yo_ye": "",
      "999_eske_moun_sa_konn_resevwa_transfe_ki_soti_aletranje": "",
      "999_a_ki_frekans_moun_sa_resevwa_transfe_ki_soti_aletranje": "",
      "999_ki_prensipal_mwayen_transpo_moun_sa_itilize": "",
      "999_eske_moun_sa_gen_yon_biznis_antrepriz": "",
      // Business subsection
      "999_ki_tip_biznis_antrepriz": "",
      "999_depi_konbyen_ane_ou_posede_oswa_opere_biznis_sa_a": "",
      "999_ki_kote_biznis_sa_sitiye_prensipalman": "",
      "999_eske_biznis_sa_anrejistre_ak_leta": "",
      "999_eske_biznis_lan_pemet_ou_satisfe_bezwen_prensipal_ou": "",
      "427_lot_enfomasyon_komante": "",
    };
    setFormData((prev) => ({
      ...prev,
      individuals: [...prev.individuals, newIndividual],
    }));
    setExpandedIndividuals((prev) => ({ ...prev, [newIndividual.id]: true }));
  };

  // Remove individual
  const removeIndividual = (id) => {
    setFormData((prev) => ({
      ...prev,
      individuals: prev.individuals.filter((ind) => ind.id !== id),
    }));
    setExpandedIndividuals((prev) => {
      const newExpanded = { ...prev };
      delete newExpanded[id];
      return newExpanded;
    });
  };

  // Update individual data
  const updateIndividual = (id, field, value) => {
    setFormData((prev) => ({
      ...prev,
      individuals: prev.individuals.map((ind) =>
        ind.id === id ? { ...ind, [field]: value } : ind
      ),
    }));
  };

  // Calculate age when birth year changes
  useEffect(() => {
    const currentYear = new Date().getFullYear();
    setFormData((prev) => ({
      ...prev,
      individuals: prev.individuals.map((ind) => ({
        ...ind,
        "451_laj_moun_lan": ind["45_ane_li_fet"]
          ? currentYear - parseInt(ind["45_ane_li_fet"])
          : 0,
      })),
    }));
  }, [formData.individuals.map((ind) => ind["45_ane_li_fet"]).join(",")]);

  // Set non aplikab for activity if age < 7
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      individuals: prev.individuals.map((ind) => ({
        ...ind,
        "423_eske_li_gen_yon_aktivite_ki_antre_kob":
          ind["451_laj_moun_lan"] < 7
            ? "non aplikab"
            : ind["423_eske_li_gen_yon_aktivite_ki_antre_kob"],
      })),
    }));
  }, [formData.individuals.map((ind) => ind["451_laj_moun_lan"]).join(",")]);

  // Toggle section
  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // Toggle individual expansion
  const toggleIndividual = (id) => {
    setExpandedIndividuals((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Copy to clipboard
  const copyToClipboard = () => {
    const dataToSave = {
      timestamp: new Date().toISOString(),
      formData: formData,
      location: formData.location,
    };
    navigator.clipboard.writeText(JSON.stringify(dataToSave, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Get current location
  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setFormData((prev) => ({
            ...prev,
            location: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              altitude: position.coords.altitude || "",
              horizontal_accuracy: position.coords.accuracy,
              vertical_accuracy: position.coords.altitudeAccuracy || "",
              speed: position.coords.speed || "",
              course: position.coords.heading || "",
            },
          }));
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    }
  };

  // Section visibility conditions
  const shouldShowSection2 =
    formData.section1["13_eske_gen_moun_prezan_ki_ka_reponn"] === "wi" &&
    formData.section1["14_eske_moun_lan_dako_reponn"] === "wi";

  const shouldShowSection3 = shouldShowSection2;
  const shouldShowSection4 = shouldShowSection2;
  const shouldShowSection5 = shouldShowSection2;

  const shouldShowFollowUp =
    formData.section1["13_eske_gen_moun_prezan_ki_ka_reponn"] === "non" &&
    formData.section1["16_eske_gen_moun_ki_abite_viv_nan_kay_la"] === "wi";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <Home className="h-8 w-8" />
            Ankèt - Resansman Debaz Kore Vwazen
          </h1>
          <p className="text-blue-100 mt-2">
            Fòm koleksyon done pou ankèt kominotè
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Status Badge and Actions */}
        <div className="mb-6 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <span className="text-gray-600 font-medium">Status:</span>
            <select
              value={formData.status}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, status: e.target.value }))
              }
              className="px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-all duration-200"
            >
              <option value="Pou Fet">Pou Fet</option>
              <option value="Ap Fet">Ap Fet</option>
              <option value="Fin Fet">Fin Fet</option>
            </select>
          </div>
          <div className="flex gap-3">
            <button
              onClick={getCurrentLocation}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <MapPin className="h-5 w-5" />
              Pran pozisyon GPS
            </button>
            <button
              onClick={copyToClipboard}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              {copied ? (
                <Check className="h-5 w-5" />
              ) : (
                <Copy className="h-5 w-5" />
              )}
              {copied ? "Kopye!" : "Kopye done yo"}
            </button>
          </div>
        </div>

        {/* GPS Location Display */}
        {(formData.location.latitude || formData.location.longitude) && (
          <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded-lg">
            <div className="flex items-start">
              <MapPin className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
              <div className="text-sm">
                <p className="font-medium text-green-800">Pozisyon GPS:</p>
                <p className="text-green-700">
                  Latitude: {formData.location.latitude}, Longitude:{" "}
                  {formData.location.longitude}
                  {formData.location.altitude &&
                    `, Altitude: ${formData.location.altitude}m`}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Email Response Section */}
        <div className="mb-6 bg-white rounded-xl shadow-lg overflow-hidden">
          <button
            onClick={() => toggleSection("email")}
            className="w-full px-6 py-4 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 transition-all duration-200 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-gray-600" />
              <span className="font-semibold text-gray-700">
                Email Response (Opsyonèl)
              </span>
            </div>
            {expandedSections.email ? (
              <ChevronDown className="h-5 w-5 text-gray-600" />
            ) : (
              <ChevronRight className="h-5 w-5 text-gray-600" />
            )}
          </button>

          {expandedSections.email && (
            <div className="p-6">
              <textarea
                value={formData.emailResponse}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    emailResponse: e.target.value,
                  }))
                }
                placeholder="Antre email w ap reponn lan isit la..."
                className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200 min-h-[120px]"
              />
            </div>
          )}
        </div>

        {/* Section 1: Entèn */}
        <div className="mb-6 bg-white rounded-xl shadow-lg overflow-hidden">
          <button
            onClick={() => toggleSection("section1")}
            className="w-full px-6 py-4 bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 transition-all duration-200 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <User className="h-5 w-5 text-blue-600" />
              <span className="font-semibold text-gray-700">1- Entèn</span>
            </div>
            {expandedSections.section1 ? (
              <ChevronDown className="h-5 w-5 text-gray-600" />
            ) : (
              <ChevronRight className="h-5 w-5 text-gray-600" />
            )}
          </button>

          {expandedSections.section1 && (
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  1.1 Non Ankete A <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.section1["11_non_ankete_a"]}
                  onChange={(e) =>
                    handleInputChange(
                      "section1",
                      "11_non_ankete_a",
                      e.target.value
                    )
                  }
                  className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                >
                  <option value="">Chwazi...</option>
                  {choiceOptions.ankete.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  1.3 Èske gen moun prezan ki ka reponn{" "}
                  <span className="text-red-500">*</span>
                </label>
                <p className="text-sm text-gray-500 mb-2">
                  Moun ki ka reponn se nenpot moun ki gen majorite enfomasyon
                  menaj la
                </p>
                <div className="flex gap-4">
                  {choiceOptions.wiNon.map((opt) => (
                    <label key={opt} className="flex items-center">
                      <input
                        type="radio"
                        name="gen_moun_prezan"
                        value={opt}
                        checked={
                          formData.section1[
                            "13_eske_gen_moun_prezan_ki_ka_reponn"
                          ] === opt
                        }
                        onChange={(e) =>
                          handleInputChange(
                            "section1",
                            "13_eske_gen_moun_prezan_ki_ka_reponn",
                            e.target.value
                          )
                        }
                        className="mr-2"
                      />
                      {opt.charAt(0).toUpperCase() + opt.slice(1)}
                    </label>
                  ))}
                </div>
              </div>

              {formData.section1["13_eske_gen_moun_prezan_ki_ka_reponn"] ===
                "non" && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    1.6 Èske gen moun ki abite - viv nan kay la{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <p className="text-sm text-gray-500 mb-2">
                    Si se yon kay ki jeneral pa gen moun ladan l w ap reponn
                    non.
                  </p>
                  <div className="flex gap-4">
                    {choiceOptions.wiNon.map((opt) => (
                      <label key={opt} className="flex items-center">
                        <input
                          type="radio"
                          name="gen_moun_abite"
                          value={opt}
                          checked={
                            formData.section1[
                              "16_eske_gen_moun_ki_abite_viv_nan_kay_la"
                            ] === opt
                          }
                          onChange={(e) =>
                            handleInputChange(
                              "section1",
                              "16_eske_gen_moun_ki_abite_viv_nan_kay_la",
                              e.target.value
                            )
                          }
                          className="mr-2"
                        />
                        {opt.charAt(0).toUpperCase() + opt.slice(1)}
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {formData.section1["13_eske_gen_moun_prezan_ki_ka_reponn"] ===
                "wi" && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    1.4 Èske moun lan dakò reponn{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-4">
                    {choiceOptions.wiNon.map((opt) => (
                      <label key={opt} className="flex items-center">
                        <input
                          type="radio"
                          name="dako_reponn"
                          value={opt}
                          checked={
                            formData.section1[
                              "14_eske_moun_lan_dako_reponn"
                            ] === opt
                          }
                          onChange={(e) =>
                            handleInputChange(
                              "section1",
                              "14_eske_moun_lan_dako_reponn",
                              e.target.value
                            )
                          }
                          className="mr-2"
                        />
                        {opt.charAt(0).toUpperCase() + opt.slice(1)}
                      </label>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  1.5 Lòt enfòmasyon/komantè{" "}
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={formData.section1["15_lot_enfomasyon_komante"]}
                  onChange={(e) =>
                    handleInputChange(
                      "section1",
                      "15_lot_enfomasyon_komante",
                      e.target.value
                    )
                  }
                  placeholder="Itilize sa pou enfomasyon ki enpotan/petinan ke moun nan te bay..."
                  className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200 min-h-[100px]"
                />
              </div>
            </div>
          )}
        </div>

        {/* Section 2: Karakteristik batiman ak menaj la */}
        {shouldShowSection2 && (
          <div className="mb-6 bg-white rounded-xl shadow-lg overflow-hidden">
            <button
              onClick={() => toggleSection("section2")}
              className="w-full px-6 py-4 bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 transition-all duration-200 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <Home className="h-5 w-5 text-blue-600" />
                <span className="font-semibold text-gray-700">
                  2. Karakteristik batiman ak menaj la
                </span>
              </div>
              {expandedSections.section2 ? (
                <ChevronDown className="h-5 w-5 text-gray-600" />
              ) : (
                <ChevronRight className="h-5 w-5 text-gray-600" />
              )}
            </button>

            {expandedSections.section2 && (
              <div className="p-6 space-y-6">
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
                  <div className="flex items-start">
                    <Info className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                    <p className="text-sm text-blue-800">
                      <strong>Obsèvasyon:</strong> "Menaj" se yon gwoup moun k
                      ap viv ansanm anba menm twati a, ki pataje manje ak resous
                      yo epi ki konsidere tèt yo kòm yon sèl inite nan kominote
                      a oswa yi gen yon moun yo rekonèt kòm chèf menaj la.
                    </p>
                  </div>
                </div>

                {/* Basic household information */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      2.1 Konbyen moun ki ap viv nan menaj sa{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      value={
                        formData.section2[
                          "21_konbyen_moun_ki_ap_viv_nan_menaj_sa"
                        ]
                      }
                      onChange={(e) =>
                        handleInputChange(
                          "section2",
                          "21_konbyen_moun_ki_ap_viv_nan_menaj_sa",
                          e.target.value
                        )
                      }
                      className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                      min="0"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      2.2 Eske gen timoun nan kay la{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <p className="text-sm text-gray-500 mb-2">
                      Le nou pale de timoun, nou konsidere timoun pou pi plis 6
                      an.
                    </p>
                    <select
                      value={formData.section2["22_eske_gen_timoun_nan_kay_la"]}
                      onChange={(e) =>
                        handleInputChange(
                          "section2",
                          "22_eske_gen_timoun_nan_kay_la",
                          e.target.value
                        )
                      }
                      className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                    >
                      <option value="">Chwazi...</option>
                      {choiceOptions.wiNon.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt === "wi" ? "Wi" : "Non"}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      2.0 Eske gen moun ki gen andikap fizik oswa mantal nan kay{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={
                        formData.section2[
                          "20_eske_gen_moun_ki_gen_andikap_fizik_oswa_mantal_nan_kay"
                        ]
                      }
                      onChange={(e) =>
                        handleInputChange(
                          "section2",
                          "20_eske_gen_moun_ki_gen_andikap_fizik_oswa_mantal_nan_kay",
                          e.target.value
                        )
                      }
                      className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                    >
                      <option value="">Chwazi...</option>
                      {choiceOptions.wiNon.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt === "wi" ? "Wi" : "Non"}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      2.3 A ki tit menaj la okipe/rete nan inite lojman sa{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={
                        formData.section2[
                          "23_a_ki_tit_menaj_la_okiperete_nan_inite_lojman_sa"
                        ]
                      }
                      onChange={(e) =>
                        handleInputChange(
                          "section2",
                          "23_a_ki_tit_menaj_la_okiperete_nan_inite_lojman_sa",
                          e.target.value
                        )
                      }
                      className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                    >
                      <option value="">Chwazi...</option>
                      {choiceOptions.estatOkipasyon.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {formData.section2[
                  "23_a_ki_tit_menaj_la_okiperete_nan_inite_lojman_sa"
                ] === "Lòt" && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      2.4 Lòt estati okipasyon fanmi nan kay la{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={
                        formData.section2[
                          "23_lot_estati_okipasyon_fanmi_nan_kay_la"
                        ]
                      }
                      onChange={(e) =>
                        handleInputChange(
                          "section2",
                          "23_lot_estati_okipasyon_fanmi_nan_kay_la",
                          e.target.value
                        )
                      }
                      className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                    />
                  </div>
                )}

                {formData.section2[
                  "23_a_ki_tit_menaj_la_okiperete_nan_inite_lojman_sa"
                ] === "Posede pa yon manm menaj la" && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      999 Eske yon moun nan menaj la gen dokiman legal pou tè a{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={
                        formData.section2[
                          "999_eske_yon_moun_nan_menaj_la_gen_dokiman_legal_pou_te_a"
                        ]
                      }
                      onChange={(e) =>
                        handleInputChange(
                          "section2",
                          "999_eske_yon_moun_nan_menaj_la_gen_dokiman_legal_pou_te_a",
                          e.target.value
                        )
                      }
                      className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                    >
                      <option value="">Chwazi...</option>
                      {choiceOptions.wiNonPaKonnen.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt === "wi"
                            ? "Wi"
                            : opt === "non"
                            ? "Non"
                            : "Pa konnen"}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {/* House structure information */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-700 flex items-center gap-2">
                    <Building className="h-5 w-5 text-gray-600" />
                    Enfomasyon sou estrikti kay la
                  </h3>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        2.5 Konbyen pyès kay la genyen{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="number"
                        value={
                          formData.section2["24_konbyen_pyes_kay_la_genyen"]
                        }
                        onChange={(e) =>
                          handleInputChange(
                            "section2",
                            "24_konbyen_pyes_kay_la_genyen",
                            e.target.value
                          )
                        }
                        className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                        min="0"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        2.6 Ak kisa panno kay la fèt{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <p className="text-sm text-gray-500 mb-2">
                        Si yon kay fet ak plizye materyo, konsidere sa ki plis
                        la.
                      </p>
                      <select
                        value={formData.section2["26_ak_kisa_panno_kay_la_fet"]}
                        onChange={(e) =>
                          handleInputChange(
                            "section2",
                            "26_ak_kisa_panno_kay_la_fet",
                            e.target.value
                          )
                        }
                        className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                      >
                        <option value="">Chwazi...</option>
                        {choiceOptions.pannoKay.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {formData.section2["26_ak_kisa_panno_kay_la_fet"] ===
                    "Lòt" && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        2.7 Ak ki lòt materyo panno kay la fèt{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={
                          formData.section2[
                            "27_ak_ki_lot_materyo_panno_kay_la_fet"
                          ]
                        }
                        onChange={(e) =>
                          handleInputChange(
                            "section2",
                            "27_ak_ki_lot_materyo_panno_kay_la_fet",
                            e.target.value
                          )
                        }
                        className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                      />
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      2.8 Ak kisa kay la kouvri{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.section2["28_ak_kisa_kay_la_kouvri"]}
                      onChange={(e) =>
                        handleInputChange(
                          "section2",
                          "28_ak_kisa_kay_la_kouvri",
                          e.target.value
                        )
                      }
                      className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                    >
                      <option value="">Chwazi...</option>
                      {choiceOptions.kouvriKay.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {formData.section2["28_ak_kisa_kay_la_kouvri"] === "Lòt" && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        2.9 Ak ki lòt bagay kay la kouvri{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={
                          formData.section2["29_ak_ki_lot_bagay_kay_la_kouvri"]
                        }
                        onChange={(e) =>
                          handleInputChange(
                            "section2",
                            "29_ak_ki_lot_bagay_kay_la_kouvri",
                            e.target.value
                          )
                        }
                        className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                      />
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      2.10 Ak kisa atè kay la fèt{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.section2["210_ak_kisa_ate_kay_la_fet"]}
                      onChange={(e) =>
                        handleInputChange(
                          "section2",
                          "210_ak_kisa_ate_kay_la_fet",
                          e.target.value
                        )
                      }
                      className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                    >
                      <option value="">Chwazi...</option>
                      {choiceOptions.ateKay.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {formData.section2["210_ak_kisa_ate_kay_la_fet"] ===
                    "Lòt" && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        2.11 Ak ki lòt bagay ate kay la fet{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={
                          formData.section2[
                            "211_ak_ki_lot_bagay_ate_kay_la_fet"
                          ]
                        }
                        onChange={(e) =>
                          handleInputChange(
                            "section2",
                            "211_ak_ki_lot_bagay_ate_kay_la_fet",
                            e.target.value
                          )
                        }
                        className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                      />
                    </div>
                  )}
                </div>

                {/* Sanitation */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-700 flex items-center gap-2">
                    <Droplets className="h-5 w-5 text-gray-600" />
                    Sanitasyon ak ijyèn
                  </h3>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      999 Eske kay la gen twalet{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.section2["999_eske_kay_la_gen_twalet"]}
                      onChange={(e) =>
                        handleInputChange(
                          "section2",
                          "999_eske_kay_la_gen_twalet",
                          e.target.value
                        )
                      }
                      className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                    >
                      <option value="">Chwazi...</option>
                      {choiceOptions.wiNon.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt === "wi" ? "Wi" : "Non"}
                        </option>
                      ))}
                    </select>
                  </div>

                  {formData.section2["999_eske_kay_la_gen_twalet"] === "wi" && (
                    <>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          2.12 Ki tip twalèt{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <p className="text-sm text-gray-500 mb-2">
                          Modèn = "Flush toilet", Latrin = Non-flush
                        </p>
                        <select
                          value={
                            formData.section2[
                              "212_eske_kay_la_gen_akse_a_yon_twalet"
                            ]
                          }
                          onChange={(e) =>
                            handleInputChange(
                              "section2",
                              "212_eske_kay_la_gen_akse_a_yon_twalet",
                              e.target.value
                            )
                          }
                          className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                        >
                          <option value="">Chwazi...</option>
                          {choiceOptions.tipTwalet.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>

                      {formData.section2[
                        "212_eske_kay_la_gen_akse_a_yon_twalet"
                      ] === "Lòt" && (
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            2.13 Ki lot tip twalèt ou genyen{" "}
                            <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            value={
                              formData.section2[
                                "213_ki_lot_tip_twalet_ou_genyen"
                              ]
                            }
                            onChange={(e) =>
                              handleInputChange(
                                "section2",
                                "213_ki_lot_tip_twalet_ou_genyen",
                                e.target.value
                              )
                            }
                            className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                          />
                        </div>
                      )}
                    </>
                  )}
                </div>

                {/* Utilities */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-700 flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-gray-600" />
                    Sèvis piblik ak enèji
                  </h3>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        999 Eske menaj la gen aparey ki fonksyone ak kouran{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <p className="text-sm text-gray-500 mb-2">
                        Le nou pale de aparey ki fonkyonse ak kouran, telefon pa
                        ladan l
                      </p>
                      <select
                        value={
                          formData.section2[
                            "999_eske_menaj_la_gen_aparey_ki_fonksyone_ak_kouran"
                          ]
                        }
                        onChange={(e) =>
                          handleInputChange(
                            "section2",
                            "999_eske_menaj_la_gen_aparey_ki_fonksyone_ak_kouran",
                            e.target.value
                          )
                        }
                        className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                      >
                        <option value="">Chwazi...</option>
                        {choiceOptions.wiNon.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt === "wi" ? "Wi" : "Non"}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        999 Ki sous eneji menaj la itilize{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={
                          formData.section2[
                            "999_ki_sous_eneji_menaj_la_itilize"
                          ]
                        }
                        onChange={(e) =>
                          handleInputChange(
                            "section2",
                            "999_ki_sous_eneji_menaj_la_itilize",
                            e.target.value
                          )
                        }
                        className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                      >
                        <option value="">Chwazi...</option>
                        {choiceOptions.sousEneji.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        2.13 Ki sous prensipal limye menaj la nan kay sa{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={
                          formData.section2[
                            "213_ki_sous_prensipal_limye_menaj_la_nan_kay_sa"
                          ]
                        }
                        onChange={(e) =>
                          handleInputChange(
                            "section2",
                            "213_ki_sous_prensipal_limye_menaj_la_nan_kay_sa",
                            e.target.value
                          )
                        }
                        className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                      >
                        <option value="">Chwazi...</option>
                        {choiceOptions.sousLimye.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Water access */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-700 flex items-center gap-2">
                    <Droplets className="h-5 w-5 text-gray-600" />
                    Aksè ak dlo
                  </h3>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      2.14 Ki sistèm dlo menaj la plis itilize{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={
                        formData.section2[
                          "214_sistem_dlo_menaj_la_plis_itilize"
                        ]
                      }
                      onChange={(e) =>
                        handleInputChange(
                          "section2",
                          "214_sistem_dlo_menaj_la_plis_itilize",
                          e.target.value
                        )
                      }
                      className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                    >
                      <option value="">Chwazi...</option>
                      {choiceOptions.sistemDlo.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      2.15 Ki dlo menaj la plis itilize pou bwè{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={
                        formData.section2[
                          "215_ki_dlo_menaj_la_plis_itilize_pou_bwe"
                        ]
                      }
                      onChange={(e) =>
                        handleInputChange(
                          "section2",
                          "215_ki_dlo_menaj_la_plis_itilize_pou_bwe",
                          e.target.value
                        )
                      }
                      className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                    >
                      <option value="">Chwazi...</option>
                      {choiceOptions.dloPouBwe.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {formData.section2[
                    "215_ki_dlo_menaj_la_plis_itilize_pou_bwe"
                  ] === "Lòt" && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        2.16 Ki lot dlo menaj itilize pou bwè{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={
                          formData.section2[
                            "216_ki_lot_dlo_menaj_la_itilize_pou_bwe"
                          ]
                        }
                        onChange={(e) =>
                          handleInputChange(
                            "section2",
                            "216_ki_lot_dlo_menaj_la_itilize_pou_bwe",
                            e.target.value
                          )
                        }
                        className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                      />
                    </div>
                  )}
                </div>

                {/* Waste management */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-700 flex items-center gap-2">
                    <Trash className="h-5 w-5 text-gray-600" />
                    Jesyon fatra
                  </h3>

                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-4">
                    <div className="flex items-start">
                      <Info className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" />
                      <p className="text-sm text-yellow-800">
                        <strong>Obsèvasyon:</strong> Teren lib vle di yon espas
                        ki pa bare, epi ke moun yo itilize pou jete fatra san
                        okenn otorizasyon.
                      </p>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      2.17 Ki mwayen nou plis itilize pou jete fatra{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={
                        formData.section2[
                          "217_ki_mwayen_nou_plis_itilize_pou_jete_fatra"
                        ]
                      }
                      onChange={(e) =>
                        handleInputChange(
                          "section2",
                          "217_ki_mwayen_nou_plis_itilize_pou_jete_fatra",
                          e.target.value
                        )
                      }
                      className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                    >
                      <option value="">Chwazi...</option>
                      {choiceOptions.mwayenFatra.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {formData.section2[
                    "217_ki_mwayen_nou_plis_itilize_pou_jete_fatra"
                  ] === "Lòt" && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        2.18 Ki lot mwayen menaj la itilize pou jete fatra{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={
                          formData.section2[
                            "218_ki_lot_mwayen_menaj_la_itilize_pou_jete_fatra"
                          ]
                        }
                        onChange={(e) =>
                          handleInputChange(
                            "section2",
                            "218_ki_lot_mwayen_menaj_la_itilize_pou_jete_fatra",
                            e.target.value
                          )
                        }
                        className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                      />
                    </div>
                  )}
                </div>

                {/* Cooking and technology */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-700 flex items-center gap-2">
                    <Flame className="h-5 w-5 text-gray-600" />
                    Kwizin ak teknoloji
                  </h3>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      2.19 Ki tip chale oswa enèji menaj la plis itilize pou fè
                      manje <span className="text-red-500">*</span>
                    </label>
                    <p className="text-sm text-gray-500 mb-2">
                      Le nou pale de eneji, nou konsidere bwa ak chabon kom
                      eneji.
                    </p>
                    <select
                      value={
                        formData.section2[
                          "219_tip_chale_enji_plis_itilize_pou_fe_manje"
                        ]
                      }
                      onChange={(e) =>
                        handleInputChange(
                          "section2",
                          "219_tip_chale_enji_plis_itilize_pou_fe_manje",
                          e.target.value
                        )
                      }
                      className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                    >
                      <option value="">Chwazi...</option>
                      {choiceOptions.chaleManjeOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        2.20 Eske menaj la gen aksè ak entènèt{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <p className="text-sm text-gray-500 mb-2">
                        Le nou pale de entenet, nou vle pale anndan menaj la.
                      </p>
                      <select
                        value={
                          formData.section2[
                            "220_eske_menaj_la_gen_akse_ak_entenet"
                          ]
                        }
                        onChange={(e) =>
                          handleInputChange(
                            "section2",
                            "220_eske_menaj_la_gen_akse_ak_entenet",
                            e.target.value
                          )
                        }
                        className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                      >
                        <option value="">Chwazi...</option>
                        {choiceOptions.wiNon.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt === "wi" ? "Wi" : "Non"}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        999 Ki rezo menaj la itilize{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={
                          formData.section2["999_ki_rezo_menaj_la_itilize"]
                        }
                        onChange={(e) =>
                          handleInputChange(
                            "section2",
                            "999_ki_rezo_menaj_la_itilize",
                            e.target.value
                          )
                        }
                        className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                      >
                        <option value="">Chwazi...</option>
                        {choiceOptions.rezoOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        2.21 Èske menaj la gen aksè ak yon telefòn entèlijan{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={
                          formData.section2[
                            "221_eske_menaj_la_gen_akse_ak_yon_telefon_entlijan"
                          ]
                        }
                        onChange={(e) =>
                          handleInputChange(
                            "section2",
                            "221_eske_menaj_la_gen_akse_ak_yon_telefon_entlijan",
                            e.target.value
                          )
                        }
                        className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                      >
                        <option value="">Chwazi...</option>
                        {choiceOptions.wiNon.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt === "wi" ? "Wi" : "Non"}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        2.22 Èske menaj la gen aksè ak yon òdinate{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <p className="text-sm text-gray-500 mb-2">
                        Le nou pale de odinate, nou vle pale anndan menaj la.
                      </p>
                      <select
                        value={
                          formData.section2[
                            "222_eske_menaj_la_gen_akse_ak_yon_odinate"
                          ]
                        }
                        onChange={(e) =>
                          handleInputChange(
                            "section2",
                            "222_eske_menaj_la_gen_akse_ak_yon_odinate",
                            e.target.value
                          )
                        }
                        className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                      >
                        <option value="">Chwazi...</option>
                        {choiceOptions.wiNon.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt === "wi" ? "Wi" : "Non"}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    2.23 Lòt enfòmasyon/komantè{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={formData.section2["223_lot_enfomasyon_komante"]}
                    onChange={(e) =>
                      handleInputChange(
                        "section2",
                        "223_lot_enfomasyon_komante",
                        e.target.value
                      )
                    }
                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200 min-h-[100px]"
                  />
                </div>
              </div>
            )}
          </div>
        )}

        {/* Section 3: Enfomasyon Sante - Nitrisyon */}
        {shouldShowSection3 && (
          <div className="mb-6 bg-white rounded-xl shadow-lg overflow-hidden">
            <button
              onClick={() => toggleSection("section3")}
              className="w-full px-6 py-4 bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 transition-all duration-200 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <Heart className="h-5 w-5 text-blue-600" />
                <span className="font-semibold text-gray-700">
                  3. Enfomasyon Sante - Nitrisyon
                </span>
              </div>
              {expandedSections.section3 ? (
                <ChevronDown className="h-5 w-5 text-gray-600" />
              ) : (
                <ChevronRight className="h-5 w-5 text-gray-600" />
              )}
            </button>

            {expandedSections.section3 && (
              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    3.1 Eske menaj la gen akse a swen medikal ki pre l{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <p className="text-sm text-gray-500 mb-2">
                    Lè nou di pre nou konsidere yon maksimòm 20 minit sou moto.
                    Si yo ka rive nan sous swen an nan 1 a 20 minit, sa konte
                    kòm pre.
                  </p>
                  <select
                    value={
                      formData.section3[
                        "31_eske_menaj_la_gen_akse_a_swen_medikal_nan_zon_nan"
                      ]
                    }
                    onChange={(e) =>
                      handleInputChange(
                        "section3",
                        "31_eske_menaj_la_gen_akse_a_swen_medikal_nan_zon_nan",
                        e.target.value
                      )
                    }
                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                  >
                    <option value="">Chwazi...</option>
                    {choiceOptions.wiNonPaKonnen.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt === "wi"
                          ? "Wi"
                          : opt === "non"
                          ? "Non"
                          : "Pa konnen"}
                      </option>
                    ))}
                  </select>
                </div>

                {formData.section3[
                  "31_eske_menaj_la_gen_akse_a_swen_medikal_nan_zon_nan"
                ] !== "pa konnen" &&
                  formData.section3[
                    "31_eske_menaj_la_gen_akse_a_swen_medikal_nan_zon_nan"
                  ] && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        3.2 Kibo menaj la plis pran swen medikal{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <p className="text-sm text-gray-500 mb-2">
                        Si li pran swen plizye kote, chwazi kote li ale plis la.
                      </p>
                      <select
                        value={
                          formData.section3[
                            "32_kibo_menaj_la_plis_pran_swen_medikal"
                          ]
                        }
                        onChange={(e) =>
                          handleInputChange(
                            "section3",
                            "32_kibo_menaj_la_plis_pran_swen_medikal",
                            e.target.value
                          )
                        }
                        className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                      >
                        <option value="">Chwazi...</option>
                        {choiceOptions.kiboPranSwen.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                {formData.section3[
                  "32_kibo_menaj_la_plis_pran_swen_medikal"
                ] === "Lòt" && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      3.3 Ki lot kote menaj al jwenn swen medikal nan zon nan{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={
                        formData.section3[
                          "33_ki_lot_kote_menaj_al_jwenn_swen_medikal_nan_zon_nan"
                        ]
                      }
                      onChange={(e) =>
                        handleInputChange(
                          "section3",
                          "33_ki_lot_kote_menaj_al_jwenn_swen_medikal_nan_zon_nan",
                          e.target.value
                        )
                      }
                      className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                    />
                  </div>
                )}

                {formData.section2["22_eske_gen_timoun_nan_kay_la"] ===
                  "wi" && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      3.4 Eske timoun ki nan menaj la konn vaksinen{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={
                        formData.section3[
                          "34_eske_timoun_ki_nan_menaj_la_konn_vaksinen"
                        ]
                      }
                      onChange={(e) =>
                        handleInputChange(
                          "section3",
                          "34_eske_timoun_ki_nan_menaj_la_konn_vaksinen",
                          e.target.value
                        )
                      }
                      className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                    >
                      <option value="">Chwazi...</option>
                      {choiceOptions.wiNon.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt === "wi" ? "Wi" : "Non"}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      999 Konbyen repa chak moun nan menaj la manje chak jou{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <p className="text-sm text-gray-500 mb-2">
                      Yon "repa" se yon okazyon manje planifye ki jeneralman gen
                      plizyè eleman tankou diri, mayi, pitimi, pwa, legim, oswa
                      lòt bagay ki konsome nan lè regilye tankou maten/dejene,
                      midi/dine, swa/soupe.
                    </p>
                    <p className="text-sm text-gray-500 mb-2">
                      Ti manje poukont yo tankou yon sèl moso fwi, yon sèl moso
                      pen, oswa bonbon pa konte kòm yon "repa".
                    </p>
                    <input
                      type="number"
                      value={
                        formData.section3[
                          "999_konbyen_repa_chak_moun_nan_menaj_la_manje_chak_jou"
                        ]
                      }
                      onChange={(e) =>
                        handleInputChange(
                          "section3",
                          "999_konbyen_repa_chak_moun_nan_menaj_la_manje_chak_jou",
                          e.target.value
                        )
                      }
                      className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                      min="0"
                      max="10"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      999 Èske nou konn rate yon repa akòz mank resous{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={
                        formData.section3[
                          "999_eske_nou_konn_sote_repa_akoz_mank_resous"
                        ]
                      }
                      onChange={(e) =>
                        handleInputChange(
                          "section3",
                          "999_eske_nou_konn_sote_repa_akoz_mank_resous",
                          e.target.value
                        )
                      }
                      className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                    >
                      <option value="">Chwazi...</option>
                      {choiceOptions.wiNon.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt === "wi" ? "Wi" : "Non"}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    3.6 Lòt enfòmasyon/komantè{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={formData.section3["36_lot_enfomasyon_komante"]}
                    onChange={(e) =>
                      handleInputChange(
                        "section3",
                        "36_lot_enfomasyon_komante",
                        e.target.value
                      )
                    }
                    placeholder="Itilize sa pou enfomasyon ki enpotan/petinan ke moun nan te bay, men ki pat ka antre anba youn nan kesyon fiks yo"
                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200 min-h-[100px]"
                  />
                </div>
              </div>
            )}
          </div>
        )}

        {/* Section 4: Enfòmasyon Endividyèl */}
        {shouldShowSection4 && (
          <div className="mb-6 bg-white rounded-xl shadow-lg overflow-hidden">
            <button
              onClick={() => toggleSection("section4")}
              className="w-full px-6 py-4 bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 transition-all duration-200 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-blue-600" />
                <span className="font-semibold text-gray-700">
                  4. Enfòmasyon Endividyèl
                </span>
              </div>
              {expandedSections.section4 ? (
                <ChevronDown className="h-5 w-5 text-gray-600" />
              ) : (
                <ChevronRight className="h-5 w-5 text-gray-600" />
              )}
            </button>

            {expandedSections.section4 && (
              <div className="p-6">
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
                  <div className="flex items-start">
                    <Info className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                    <p className="text-sm text-blue-800">
                      <strong>Obsèvasyon:</strong> Tout moun ki ap vin nan menja
                      la bezwen bay enfomasyon pa li nan seksyon sa. Repondan ak
                      chef menaj la dwe bay enfomasyon pa li tou.{" "}
                      <strong>Kòmanse avèk repondan</strong>
                    </p>
                  </div>
                </div>

                <button
                  onClick={addIndividual}
                  className="mb-4 flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-200"
                >
                  <Plus className="h-5 w-5" />
                  Ajoute yon moun
                </button>

                {formData.individuals.map((individual, index) => (
                  <div
                    key={individual.id}
                    className="mb-6 bg-gray-50 rounded-lg border-2 border-gray-200 overflow-hidden"
                  >
                    <button
                      onClick={() => toggleIndividual(individual.id)}
                      className="w-full p-4 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 transition-all duration-200 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <h4 className="font-semibold text-gray-700">
                          Moun #{index + 1}: {individual["41_prenon"]}{" "}
                          {individual["42_siyati"]}
                        </h4>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            removeIndividual(individual.id);
                          }}
                          className="text-red-600 hover:text-red-700 transition-colors"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                        {expandedIndividuals[individual.id] ? (
                          <ChevronDown className="h-5 w-5 text-gray-600" />
                        ) : (
                          <ChevronRight className="h-5 w-5 text-gray-600" />
                        )}
                      </div>
                    </button>

                    {expandedIndividuals[individual.id] && (
                      <div className="p-6 space-y-6">
                        {/* Basic Information */}
                        <div className="space-y-4">
                          <h5 className="font-semibold text-gray-700 flex items-center gap-2">
                            <User className="h-5 w-5 text-gray-600" />
                            Enfomasyon debaz
                          </h5>

                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                4.1 Prenon{" "}
                                <span className="text-red-500">*</span>
                              </label>
                              <p className="text-sm text-gray-500 mb-2">
                                Sonje se PRENON an selman nou sipoze mete. Nou
                                paka mete espas. Si se de (2) pati ki fe PRENON
                                an, separe l ak yon tirè (-) (Jean-Eli)
                              </p>
                              <input
                                type="text"
                                value={individual["41_prenon"]}
                                onChange={(e) =>
                                  updateIndividual(
                                    individual.id,
                                    "41_prenon",
                                    e.target.value
                                  )
                                }
                                className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                                pattern="[A-Za-zÀ-ÿ,'-]*"
                              />
                            </div>

                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                4.2 Siyati{" "}
                                <span className="text-red-500">*</span>
                              </label>
                              <p className="text-sm text-gray-500 mb-2">
                                Nou paka mete espas. Sonje se SIYATI an selman.
                                Si se 2 pati ki fe SIYATI a separe l ak -
                                (St-Louis)
                              </p>
                              <input
                                type="text"
                                value={individual["42_siyati"]}
                                onChange={(e) =>
                                  updateIndividual(
                                    individual.id,
                                    "42_siyati",
                                    e.target.value
                                  )
                                }
                                className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                                pattern="[A-Za-zÀ-ÿ,'-.]*"
                              />
                            </div>

                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                4.3 Relasyon ak chèf menaj la{" "}
                                <span className="text-red-500">*</span>
                              </label>
                              <p className="text-sm text-gray-500 mb-2">
                                Chef la reprezante moun ki gen plis otorite nan
                                espas fizik la ak moun ki ansanm avek li yo. Se
                                moun ki mennen kob nan kay la.
                              </p>
                              <select
                                value={
                                  individual["43_relasyon_ak_chef_menaj_la"]
                                }
                                onChange={(e) =>
                                  updateIndividual(
                                    individual.id,
                                    "43_relasyon_ak_chef_menaj_la",
                                    e.target.value
                                  )
                                }
                                className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                              >
                                <option value="">Chwazi...</option>
                                {choiceOptions.relasyonChef.map((opt) => (
                                  <option key={opt} value={opt}>
                                    {opt === "chef menaj la"
                                      ? "Chèf Menaj la"
                                      : opt === "mari"
                                      ? "Mari"
                                      : opt === "madanm"
                                      ? "Madanm"
                                      : opt === "pitit"
                                      ? "Pitit"
                                      : opt === "pitit pitit"
                                      ? "Pitit Pitit"
                                      : opt === "lot fanmi"
                                      ? "Lòt fanmi"
                                      : "Pa fanmi - lòt relasyon"}
                                  </option>
                                ))}
                              </select>
                            </div>

                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                4.4 Sèks <span className="text-red-500">*</span>
                              </label>
                              <select
                                value={individual["44_seks"]}
                                onChange={(e) =>
                                  updateIndividual(
                                    individual.id,
                                    "44_seks",
                                    e.target.value
                                  )
                                }
                                className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                              >
                                <option value="">Chwazi...</option>
                                {choiceOptions.seks.map((opt) => (
                                  <option key={opt} value={opt}>
                                    {opt}
                                  </option>
                                ))}
                              </select>
                            </div>

                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                4.5 Ki ane li fèt{" "}
                                <span className="text-red-500">*</span>
                              </label>
                              <p className="text-sm text-gray-500 mb-2">
                                Si li pa konnen ane nesans lan. Mete 1899. mete
                                selman ane li fet la. Si li refize reponn tou,
                                mete 1899.
                              </p>
                              <input
                                type="number"
                                value={individual["45_ane_li_fet"]}
                                onChange={(e) =>
                                  updateIndividual(
                                    individual.id,
                                    "45_ane_li_fet",
                                    e.target.value
                                  )
                                }
                                className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                                min="1899"
                                max="2025"
                              />
                            </div>

                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                4.5.1 Laj Moun Lan
                              </label>
                              <input
                                type="text"
                                value={individual["451_laj_moun_lan"]}
                                readOnly
                                className="w-full p-3 border-2 border-gray-200 rounded-lg bg-gray-100"
                              />
                            </div>

                            {individual["451_laj_moun_lan"] >= 18 && (
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                  4.6 Sitiyasyon matrimonyal aktyèl{" "}
                                  <span className="text-red-500">*</span>
                                </label>
                                <p className="text-sm text-gray-500 mb-2">
                                  Plasay vle di ke moun yo ap viv ansanm kom yon
                                  koup men yo pa marye. Li te met se yon sel jou
                                  selman.
                                </p>
                                <select
                                  value={
                                    individual[
                                      "46_sitiyasyon_matrimonyal_aktyel"
                                    ]
                                  }
                                  onChange={(e) =>
                                    updateIndividual(
                                      individual.id,
                                      "46_sitiyasyon_matrimonyal_aktyel",
                                      e.target.value
                                    )
                                  }
                                  className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                                >
                                  <option value="">Chwazi...</option>
                                  {choiceOptions.sitiyasyonMatrimonyal.map(
                                    (opt) => (
                                      <option key={opt} value={opt}>
                                        {opt}
                                      </option>
                                    )
                                  )}
                                </select>
                              </div>
                            )}

                            {individual["45_ane_li_fet"] &&
                              parseInt(individual["45_ane_li_fet"]) <= 2012 &&
                              individual["44_seks"] === "Fi" && (
                                <div>
                                  <label className="block text-sm font-medium text-gray-700 mb-2">
                                    4.7 Kantite pitit moun sa a janm fè{" "}
                                    <span className="text-red-500">*</span>
                                  </label>
                                  <input
                                    type="number"
                                    value={
                                      individual[
                                        "47_kantite_pitit_moun_sa_a_janm_fe"
                                      ]
                                    }
                                    onChange={(e) =>
                                      updateIndividual(
                                        individual.id,
                                        "47_kantite_pitit_moun_sa_a_janm_fe",
                                        e.target.value
                                      )
                                    }
                                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                                    min="0"
                                    max="21"
                                  />
                                </div>
                              )}

                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                4.8 Ki kote li te fèt{" "}
                                <span className="text-red-500">*</span>
                              </label>
                              <select
                                value={individual["48_kote_li_fet"]}
                                onChange={(e) =>
                                  updateIndividual(
                                    individual.id,
                                    "48_kote_li_fet",
                                    e.target.value
                                  )
                                }
                                className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                              >
                                <option value="">Chwazi...</option>
                                {kominAyiti.map((opt) => (
                                  <option key={opt} value={opt}>
                                    {opt}
                                  </option>
                                ))}
                              </select>
                            </div>

                            {individual["45_ane_li_fet"] &&
                              parseInt(individual["45_ane_li_fet"]) < 2020 && (
                                <div>
                                  <label className="block text-sm font-medium text-gray-700 mb-2">
                                    4.11 Depi konbyen ane li rete nan kay la{" "}
                                    <span className="text-red-500">*</span>
                                  </label>
                                  <input
                                    type="number"
                                    value={
                                      individual[
                                        "411_depi_konbyen_ane_li_rete_nan_kay_la"
                                      ]
                                    }
                                    onChange={(e) =>
                                      updateIndividual(
                                        individual.id,
                                        "411_depi_konbyen_ane_li_rete_nan_kay_la",
                                        e.target.value
                                      )
                                    }
                                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                                    min="0"
                                    max="120"
                                    step="0.1"
                                  />
                                </div>
                              )}
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              4.13.1 Eske li te rete yon lot kote avan{" "}
                              <span className="text-red-500">*</span>
                            </label>
                            <select
                              value={
                                individual[
                                  "4131_eske_li_te_rete_yon_lot_kote_avan"
                                ]
                              }
                              onChange={(e) =>
                                updateIndividual(
                                  individual.id,
                                  "4131_eske_li_te_rete_yon_lot_kote_avan",
                                  e.target.value
                                )
                              }
                              className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                            >
                              <option value="">Chwazi...</option>
                              {choiceOptions.wiNonNA.map((opt) => (
                                <option key={opt} value={opt}>
                                  {opt === "wi"
                                    ? "Wi"
                                    : opt === "non"
                                    ? "Non"
                                    : "NA"}
                                </option>
                              ))}
                            </select>
                          </div>

                          {individual[
                            "4131_eske_li_te_rete_yon_lot_kote_avan"
                          ] === "wi" && (
                            <>
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                  4.13 Kote li te rete anvan{" "}
                                  <span className="text-red-500">*</span>
                                </label>
                                <select
                                  value={
                                    individual["413_kote_li_te_rete_anvan"]
                                  }
                                  onChange={(e) =>
                                    updateIndividual(
                                      individual.id,
                                      "413_kote_li_te_rete_anvan",
                                      e.target.value
                                    )
                                  }
                                  className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                                >
                                  <option value="">Chwazi...</option>
                                  {kominAyiti.map((opt) => (
                                    <option key={opt} value={opt}>
                                      {opt}
                                    </option>
                                  ))}
                                </select>
                              </div>

                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                  4.14 Ki rezon ki fè li vini nan zon nan{" "}
                                  <span className="text-red-500">*</span>
                                </label>
                                <select
                                  value={
                                    individual[
                                      "414_rezon_ki_fe_li_vini_nan_zon_nan"
                                    ]
                                  }
                                  onChange={(e) =>
                                    updateIndividual(
                                      individual.id,
                                      "414_rezon_ki_fe_li_vini_nan_zon_nan",
                                      e.target.value
                                    )
                                  }
                                  className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                                >
                                  <option value="">Chwazi...</option>
                                  {choiceOptions.rezonViniZon.map((opt) => (
                                    <option key={opt} value={opt}>
                                      {opt}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </>
                          )}
                        </div>

                        {/* Disability Information */}
                        <div className="space-y-4">
                          <h5 className="font-semibold text-gray-700 flex items-center gap-2">
                            <AlertCircle className="h-5 w-5 text-gray-600" />
                            Enfomasyon sou andikap
                          </h5>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              4.15 Eske moun sa gen yon andikap{" "}
                              <span className="text-red-500">*</span>
                            </label>
                            <select
                              value={
                                individual["415_eske_moun_sa_gen_yon_andikap"]
                              }
                              onChange={(e) =>
                                updateIndividual(
                                  individual.id,
                                  "415_eske_moun_sa_gen_yon_andikap",
                                  e.target.value
                                )
                              }
                              className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                            >
                              <option value="">Chwazi...</option>
                              {choiceOptions.wiNon.map((opt) => (
                                <option key={opt} value={opt}>
                                  {opt === "wi" ? "Wi" : "Non"}
                                </option>
                              ))}
                            </select>
                          </div>

                          {individual["415_eske_moun_sa_gen_yon_andikap"] ===
                            "wi" && (
                            <>
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                  4.16 Ki tip andikap{" "}
                                  <span className="text-red-500">*</span>
                                </label>
                                <select
                                  value={individual["416_tip_andikap"]}
                                  onChange={(e) =>
                                    updateIndividual(
                                      individual.id,
                                      "416_tip_andikap",
                                      e.target.value
                                    )
                                  }
                                  className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                                >
                                  <option value="">Chwazi...</option>
                                  {choiceOptions.tipAndikap.map((opt) => (
                                    <option key={opt} value={opt}>
                                      {opt}
                                    </option>
                                  ))}
                                </select>
                              </div>

                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                  999 Èske gen sèvis disponib pou sipòte bezwen
                                  andikap moun sa (epi èske yo itilize yo){" "}
                                  <span className="text-red-500">*</span>
                                </label>
                                <select
                                  value={
                                    individual[
                                      "999_eske_gen_sevis_disponib_pou_sipote_bezwen_andikap_sa"
                                    ]
                                  }
                                  onChange={(e) =>
                                    updateIndividual(
                                      individual.id,
                                      "999_eske_gen_sevis_disponib_pou_sipote_bezwen_andikap_sa",
                                      e.target.value
                                    )
                                  }
                                  className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                                >
                                  <option value="">Chwazi...</option>
                                  {choiceOptions.wiNon.map((opt) => (
                                    <option key={opt} value={opt}>
                                      {opt === "wi" ? "Wi" : "Non"}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </>
                          )}
                        </div>

                        {/* Religion Information */}
                        <div className="space-y-4">
                          <h5 className="font-semibold text-gray-700">
                            Enfomasyon relijye
                          </h5>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              999 Eske moun sa afilye ak yon relijyon{" "}
                              <span className="text-red-500">*</span>
                            </label>
                            <p className="text-sm text-gray-500 mb-2">
                              Yon repons 'Non' vle di ke moun sa pa relijye
                            </p>
                            <select
                              value={
                                individual[
                                  "999_eske_moun_sa_afilye_ak_yon_relijyon"
                                ]
                              }
                              onChange={(e) =>
                                updateIndividual(
                                  individual.id,
                                  "999_eske_moun_sa_afilye_ak_yon_relijyon",
                                  e.target.value
                                )
                              }
                              className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                            >
                              <option value="">Chwazi...</option>
                              {choiceOptions.wiNon.map((opt) => (
                                <option key={opt} value={opt}>
                                  {opt === "wi" ? "Wi" : "Non"}
                                </option>
                              ))}
                            </select>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              999 Ak ki relijyon moun sa afilye{" "}
                              <span className="text-red-500">*</span>
                            </label>
                            <select
                              value={
                                individual["999_ak_ki_relijyon_moun_sa_afilye"]
                              }
                              onChange={(e) =>
                                updateIndividual(
                                  individual.id,
                                  "999_ak_ki_relijyon_moun_sa_afilye",
                                  e.target.value
                                )
                              }
                              className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                            >
                              <option value="">Chwazi...</option>
                              {choiceOptions.relijyon.map((opt) => (
                                <option key={opt} value={opt}>
                                  {opt}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        {/* Identification Documents */}
                        <div className="space-y-4">
                          <h5 className="font-semibold text-gray-700">
                            Dokiman idantifikasyon
                          </h5>
                          <p className="text-sm text-gray-500">
                            NA reprezante si moun nan pa konnen.
                          </p>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              999 Èske moun sa gen pyès idantifikasyon leta{" "}
                              <span className="text-red-500">*</span>
                            </label>
                            <select
                              value={
                                individual[
                                  "999_eske_moun_sa_gen_pyes_idantifikasyon_leta"
                                ]
                              }
                              onChange={(e) =>
                                updateIndividual(
                                  individual.id,
                                  "999_eske_moun_sa_gen_pyes_idantifikasyon_leta",
                                  e.target.value
                                )
                              }
                              className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                            >
                              <option value="">Chwazi...</option>
                              <option value="wi">Wi</option>
                              <option value="non">Non</option>
                              <option value="na">NA</option>
                            </select>
                          </div>

                          {individual[
                            "999_eske_moun_sa_gen_pyes_idantifikasyon_leta"
                          ] === "wi" && (
                            <>
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                  999 Èske moun sa gen ak de nesans - Pyès
                                  Idantifikasyon{" "}
                                  <span className="text-red-500">*</span>
                                </label>
                                <select
                                  value={
                                    individual[
                                      "999_eske_moun_sa_gen_ak_de_nesans_pyes_idantifikasyon_"
                                    ]
                                  }
                                  onChange={(e) =>
                                    updateIndividual(
                                      individual.id,
                                      "999_eske_moun_sa_gen_ak_de_nesans_pyes_idantifikasyon_",
                                      e.target.value
                                    )
                                  }
                                  className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                                >
                                  <option value="">Chwazi...</option>
                                  <option value="wi">Wi</option>
                                  <option value="non">Non</option>
                                  <option value="na">NA</option>
                                </select>
                              </div>

                              {individual["451_laj_moun_lan"] > 17 && (
                                <div>
                                  <label className="block text-sm font-medium text-gray-700 mb-2">
                                    999 Èske moun sa gen kat idantite - Pyès
                                    Idantifikasyon{" "}
                                    <span className="text-red-500">*</span>
                                  </label>
                                  <select
                                    value={
                                      individual[
                                        "999_eske_moun_sa_gen_kat_idantite"
                                      ]
                                    }
                                    onChange={(e) =>
                                      updateIndividual(
                                        individual.id,
                                        "999_eske_moun_sa_gen_kat_idantite",
                                        e.target.value
                                      )
                                    }
                                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                                  >
                                    <option value="">Chwazi...</option>
                                    <option value="wi">Wi</option>
                                    <option value="non">Non</option>
                                    <option value="na">NA</option>
                                  </select>
                                </div>
                              )}

                              {individual["451_laj_moun_lan"] > 15 && (
                                <div>
                                  <label className="block text-sm font-medium text-gray-700 mb-2">
                                    999 Èske moun sa gen lisans-pèmi kondi -
                                    Pyès Idantifikasyon{" "}
                                    <span className="text-red-500">*</span>
                                  </label>
                                  <select
                                    value={
                                      individual[
                                        "999_eske_moun_sa_gen_lisans_pemi_kondi"
                                      ]
                                    }
                                    onChange={(e) =>
                                      updateIndividual(
                                        individual.id,
                                        "999_eske_moun_sa_gen_lisans_pemi_kondi",
                                        e.target.value
                                      )
                                    }
                                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                                  >
                                    <option value="">Chwazi...</option>
                                    <option value="wi">Wi</option>
                                    <option value="non">Non</option>
                                    <option value="na">NA</option>
                                  </select>
                                </div>
                              )}

                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                  999 Èske moun sa gen paspò - Pyès
                                  Idantifikasyon{" "}
                                  <span className="text-red-500">*</span>
                                </label>
                                <select
                                  value={
                                    individual["999_eske_moun_sa_gen_paspo"]
                                  }
                                  onChange={(e) =>
                                    updateIndividual(
                                      individual.id,
                                      "999_eske_moun_sa_gen_paspo",
                                      e.target.value
                                    )
                                  }
                                  className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                                >
                                  <option value="">Chwazi...</option>
                                  <option value="wi">Wi</option>
                                  <option value="non">Non</option>
                                  <option value="na">NA</option>
                                </select>
                              </div>
                            </>
                          )}
                        </div>

                        {/* Education Information */}
                        <div className="space-y-4">
                          <h5 className="font-semibold text-gray-700 flex items-center gap-2">
                            <School className="h-5 w-5 text-gray-600" />
                            Edikasyon
                          </h5>
                          <p className="text-sm text-gray-500">
                            Wap chwazi Non aplikab si moun nan poko nan laj pou
                            ale lekol. Pa egzanp yon timoun 5 an.
                          </p>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              4.17 Eske moun sa konn li ak ekri{" "}
                              <span className="text-red-500">*</span>
                            </label>
                            <p className="text-sm text-gray-500 mb-2">
                              Le nou pale de li ak ekri, nou vle pale de kreyol.
                            </p>
                            <select
                              value={
                                individual["417_eske_moun_sa_konn_li_ak_ekri"]
                              }
                              onChange={(e) =>
                                updateIndividual(
                                  individual.id,
                                  "417_eske_moun_sa_konn_li_ak_ekri",
                                  e.target.value
                                )
                              }
                              className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                            >
                              <option value="">Chwazi...</option>
                              {choiceOptions.liEkri.map((opt) => (
                                <option key={opt} value={opt}>
                                  {opt}
                                </option>
                              ))}
                            </select>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              4.18 Ki dènye nivo edikasyon li resevwa{" "}
                              <span className="text-red-500">*</span>
                            </label>
                            <select
                              value={
                                individual[
                                  "418_denye_nivo_edikasyon_li_resevwa"
                                ]
                              }
                              onChange={(e) =>
                                updateIndividual(
                                  individual.id,
                                  "418_denye_nivo_edikasyon_li_resevwa",
                                  e.target.value
                                )
                              }
                              className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                            >
                              <option value="">Chwazi...</option>
                              {choiceOptions.nivoEdikasyon.map((opt) => (
                                <option key={opt} value={opt}>
                                  {opt}
                                </option>
                              ))}
                            </select>
                          </div>

                          {individual["418_denye_nivo_edikasyon_li_resevwa"] &&
                            individual[
                              "418_denye_nivo_edikasyon_li_resevwa"
                            ] !== "Non aplikab" &&
                            individual[
                              "418_denye_nivo_edikasyon_li_resevwa"
                            ] !== "Pa konnen" && (
                              <>
                                <div>
                                  <label className="block text-sm font-medium text-gray-700 mb-2">
                                    4.19 Eske li toujou ale lekòl{" "}
                                    <span className="text-red-500">*</span>
                                  </label>
                                  <p className="text-sm text-gray-500 mb-2">
                                    Lekol vle di tout nivo yo.
                                  </p>
                                  <select
                                    value={
                                      individual["419_eske_li_toujou_ale_lekol"]
                                    }
                                    onChange={(e) =>
                                      updateIndividual(
                                        individual.id,
                                        "419_eske_li_toujou_ale_lekol",
                                        e.target.value
                                      )
                                    }
                                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                                  >
                                    <option value="">Chwazi...</option>
                                    <option value="wi">Wi</option>
                                    <option value="non">Non</option>
                                    <option value="non aplikab">
                                      Non Aplikab
                                    </option>
                                  </select>
                                </div>

                                {individual["419_eske_li_toujou_ale_lekol"] ===
                                  "wi" && (
                                  <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                      999 Nan ki klas moun sa ye{" "}
                                      <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                      value={
                                        individual["999_nan_ki_klas_moun_sa_ye"]
                                      }
                                      onChange={(e) =>
                                        updateIndividual(
                                          individual.id,
                                          "999_nan_ki_klas_moun_sa_ye",
                                          e.target.value
                                        )
                                      }
                                      className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                                    >
                                      <option value="">Chwazi...</option>
                                      {choiceOptions.klasAktyel.map((opt) => (
                                        <option key={opt} value={opt}>
                                          {opt}
                                        </option>
                                      ))}
                                    </select>
                                  </div>
                                )}

                                {individual["419_eske_li_toujou_ale_lekol"] ===
                                  "non" && (
                                  <>
                                    <div>
                                      <label className="block text-sm font-medium text-gray-700 mb-2">
                                        4.20 ki rezon ki fè li pa ale lekòl{" "}
                                        <span className="text-red-500">*</span>
                                      </label>
                                      <select
                                        value={
                                          individual[
                                            "420_rezon_ki_fe_li_pa_ale_lekol"
                                          ]
                                        }
                                        onChange={(e) =>
                                          updateIndividual(
                                            individual.id,
                                            "420_rezon_ki_fe_li_pa_ale_lekol",
                                            e.target.value
                                          )
                                        }
                                        className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                                      >
                                        <option value="">Chwazi...</option>
                                        {choiceOptions.rezonPaAle.map((opt) => (
                                          <option key={opt} value={opt}>
                                            {opt}
                                          </option>
                                        ))}
                                      </select>
                                    </div>

                                    {individual[
                                      "420_rezon_ki_fe_li_pa_ale_lekol"
                                    ] === "Lòt" && (
                                      <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                          4.21 ki lot rezon ki fè li pa ale
                                          lekòl{" "}
                                          <span className="text-red-500">
                                            *
                                          </span>
                                        </label>
                                        <input
                                          type="text"
                                          value={
                                            individual[
                                              "421_lot_rezon_ki_fe_li_pa_ale_lekol"
                                            ]
                                          }
                                          onChange={(e) =>
                                            updateIndividual(
                                              individual.id,
                                              "421_lot_rezon_ki_fe_li_pa_ale_lekol",
                                              e.target.value
                                            )
                                          }
                                          className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                                        />
                                      </div>
                                    )}
                                  </>
                                )}
                              </>
                            )}
                        </div>

                        {/* Economic Information */}
                        <div className="space-y-4">
                          <h5 className="font-semibold text-gray-700 flex items-center gap-2">
                            <DollarSign className="h-5 w-5 text-gray-600" />
                            Enfòmasyon Ekonomik, Bankè, ak Finansye
                          </h5>
                          <p className="text-sm text-gray-500">
                            Wap chwazi Non aplikab si moun nan poko nan laj pou
                            li fe aktivite ki ap antre kob.
                          </p>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              4.23 Eske li gen yon aktivite ki antre kòb{" "}
                              <span className="text-red-500">*</span>
                            </label>
                            <p className="text-sm text-gray-500 mb-2">
                              Mete non aplikab si moun lan gen mwens ke 6 an
                            </p>
                            <select
                              value={
                                individual[
                                  "423_eske_li_gen_yon_aktivite_ki_antre_kob"
                                ]
                              }
                              onChange={(e) =>
                                updateIndividual(
                                  individual.id,
                                  "423_eske_li_gen_yon_aktivite_ki_antre_kob",
                                  e.target.value
                                )
                              }
                              className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                            >
                              <option value="">Chwazi...</option>
                              <option value="wi">Wi</option>
                              <option value="non">Non</option>
                              <option value="non aplikab">Non Aplikab</option>
                            </select>
                          </div>

                          {individual[
                            "423_eske_li_gen_yon_aktivite_ki_antre_kob"
                          ] === "wi" && (
                            <>
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                  4.24 Stati anplwa{" "}
                                  <span className="text-red-500">*</span>
                                </label>
                                <select
                                  value={individual["424_stati_anplwa"]}
                                  onChange={(e) =>
                                    updateIndividual(
                                      individual.id,
                                      "424_stati_anplwa",
                                      e.target.value
                                    )
                                  }
                                  className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                                >
                                  <option value="">Chwazi...</option>
                                  {choiceOptions.statiAnplwa.map((opt) => (
                                    <option key={opt} value={opt}>
                                      {opt}
                                    </option>
                                  ))}
                                </select>
                              </div>

                              <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                  <label className="block text-sm font-medium text-gray-700 mb-2">
                                    4.25 Ki prensipal aktivite li{" "}
                                    <span className="text-red-500">*</span>
                                  </label>
                                  <select
                                    value={
                                      individual["425_prensipal_aktivite_li"]
                                    }
                                    onChange={(e) =>
                                      updateIndividual(
                                        individual.id,
                                        "425_prensipal_aktivite_li",
                                        e.target.value
                                      )
                                    }
                                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                                  >
                                    <option value="">Chwazi...</option>
                                    {aktiviteEkonomik.map((opt) => (
                                      <option key={opt} value={opt}>
                                        {opt}
                                      </option>
                                    ))}
                                  </select>
                                </div>

                                <div>
                                  <label className="block text-sm font-medium text-gray-700 mb-2">
                                    999 Ki lot aktivite li genyen pou antre kob{" "}
                                    <span className="text-red-500">*</span>
                                  </label>
                                  <select
                                    value={
                                      individual[
                                        "999_ki_lot_aktivite_li_genyen_pou_antre_kob"
                                      ]
                                    }
                                    onChange={(e) =>
                                      updateIndividual(
                                        individual.id,
                                        "999_ki_lot_aktivite_li_genyen_pou_antre_kob",
                                        e.target.value
                                      )
                                    }
                                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                                  >
                                    <option value="">Chwazi...</option>
                                    {aktiviteEkonomik.map((opt) => (
                                      <option key={opt} value={opt}>
                                        {opt}
                                      </option>
                                    ))}
                                  </select>
                                </div>
                              </div>

                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                  4.26 Ki entèval kòb li fè an goud pa mwa{" "}
                                  <span className="text-red-500">*</span>
                                </label>
                                <p className="text-sm text-gray-500 mb-2">
                                  Li ka pa baw montan fiks men li ka baw yon
                                  montan anviwon.
                                </p>
                                <select
                                  value={
                                    individual[
                                      "426_enteval_kob_li_fe_an_goud_pa_mwa"
                                    ]
                                  }
                                  onChange={(e) =>
                                    updateIndividual(
                                      individual.id,
                                      "426_enteval_kob_li_fe_an_goud_pa_mwa",
                                      e.target.value
                                    )
                                  }
                                  className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                                >
                                  <option value="">Chwazi...</option>
                                  {choiceOptions.entevalKob.map((opt) => (
                                    <option key={opt} value={opt}>
                                      {opt}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </>
                          )}

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              999 Èske moun nan gen yon kont bank{" "}
                              <span className="text-red-500">*</span>
                            </label>
                            <select
                              value={
                                individual[
                                  "999_eske_moun_nan_gen_yon_kont_bank"
                                ]
                              }
                              onChange={(e) =>
                                updateIndividual(
                                  individual.id,
                                  "999_eske_moun_nan_gen_yon_kont_bank",
                                  e.target.value
                                )
                              }
                              className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                            >
                              <option value="">Chwazi...</option>
                              <option value="wi">Wi</option>
                              <option value="non">Non</option>
                              <option value="non aplikab">Non Aplikab</option>
                            </select>
                          </div>

                          {individual["999_eske_moun_nan_gen_yon_kont_bank"] ===
                            "wi" && (
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Ki tip kont bank li genyen{" "}
                                <span className="text-red-500">*</span>
                              </label>
                              <select
                                value={individual["ki_tip_kont_bank_li_genyen"]}
                                onChange={(e) =>
                                  updateIndividual(
                                    individual.id,
                                    "ki_tip_kont_bank_li_genyen",
                                    e.target.value
                                  )
                                }
                                className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                              >
                                <option value="">Chwazi...</option>
                                {choiceOptions.tipKontBank.map((opt) => (
                                  <option key={opt} value={opt}>
                                    {opt}
                                  </option>
                                ))}
                              </select>
                            </div>
                          )}

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              999 Èske moun sa konn itilize sèvis lajan mobil
                              tankou mon cash ak nat cash{" "}
                              <span className="text-red-500">*</span>
                            </label>
                            <select
                              value={
                                individual[
                                  "999_eske_moun_sa_konn_itilize_sevis_lajan_mobil"
                                ]
                              }
                              onChange={(e) =>
                                updateIndividual(
                                  individual.id,
                                  "999_eske_moun_sa_konn_itilize_sevis_lajan_mobil",
                                  e.target.value
                                )
                              }
                              className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                            >
                              <option value="">Chwazi...</option>
                              <option value="wi">Wi</option>
                              <option value="non">Non</option>
                              <option value="non aplikab">Non Aplikab</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              999 Èske moun sa gen relasyon ak moun ki ap viv
                              aletranje <span className="text-red-500">*</span>
                            </label>
                            <select
                              value={
                                individual[
                                  "999_ske_moun_sa_gen_relasyon_ak_moun_ki_ap_viv_aletranje"
                                ]
                              }
                              onChange={(e) =>
                                updateIndividual(
                                  individual.id,
                                  "999_ske_moun_sa_gen_relasyon_ak_moun_ki_ap_viv_aletranje",
                                  e.target.value
                                )
                              }
                              className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                            >
                              <option value="">Chwazi...</option>
                              <option value="wi">Wi</option>
                              <option value="non">Non</option>
                              <option value="non aplikab">Non Aplikab</option>
                            </select>
                          </div>

                          {individual[
                            "999_ske_moun_sa_gen_relasyon_ak_moun_ki_ap_viv_aletranje"
                          ] === "wi" && (
                            <>
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                  999 Nan ki peyi moun sa yo ye{" "}
                                  <span className="text-red-500">*</span>
                                </label>
                                <select
                                  value={
                                    individual["999_nan_ki_peyi_moun_sa_yo_ye"]
                                  }
                                  onChange={(e) =>
                                    updateIndividual(
                                      individual.id,
                                      "999_nan_ki_peyi_moun_sa_yo_ye",
                                      e.target.value
                                    )
                                  }
                                  className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                                >
                                  <option value="">Chwazi...</option>
                                  {peyi.map((opt) => (
                                    <option key={opt} value={opt}>
                                      {opt}
                                    </option>
                                  ))}
                                </select>
                              </div>

                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                  999 Èske moun sa konn resevwa transfè lajan ki
                                  soti aletranje{" "}
                                  <span className="text-red-500">*</span>
                                </label>
                                <select
                                  value={
                                    individual[
                                      "999_eske_moun_sa_konn_resevwa_transfe_ki_soti_aletranje"
                                    ]
                                  }
                                  onChange={(e) =>
                                    updateIndividual(
                                      individual.id,
                                      "999_eske_moun_sa_konn_resevwa_transfe_ki_soti_aletranje",
                                      e.target.value
                                    )
                                  }
                                  className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                                >
                                  <option value="">Chwazi...</option>
                                  <option value="wi">Wi</option>
                                  <option value="non">Non</option>
                                  <option value="non aplikab">
                                    Non Aplikab
                                  </option>
                                </select>
                              </div>

                              {individual[
                                "999_eske_moun_sa_konn_resevwa_transfe_ki_soti_aletranje"
                              ] === "wi" && (
                                <div>
                                  <label className="block text-sm font-medium text-gray-700 mb-2">
                                    A ki frekans moun sa resevwa transfè ki soti
                                    aletranje{" "}
                                    <span className="text-red-500">*</span>
                                  </label>
                                  <select
                                    value={
                                      individual[
                                        "999_a_ki_frekans_moun_sa_resevwa_transfe_ki_soti_aletranje"
                                      ]
                                    }
                                    onChange={(e) =>
                                      updateIndividual(
                                        individual.id,
                                        "999_a_ki_frekans_moun_sa_resevwa_transfe_ki_soti_aletranje",
                                        e.target.value
                                      )
                                    }
                                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                                  >
                                    <option value="">Chwazi...</option>
                                    {choiceOptions.frekansTransfe.map((opt) => (
                                      <option key={opt} value={opt}>
                                        {opt}
                                      </option>
                                    ))}
                                  </select>
                                </div>
                              )}
                            </>
                          )}

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              999 Ki prensipal mwayen transpò moun sa itilize
                            </label>
                            <select
                              value={
                                individual[
                                  "999_ki_prensipal_mwayen_transpo_moun_sa_itilize"
                                ]
                              }
                              onChange={(e) =>
                                updateIndividual(
                                  individual.id,
                                  "999_ki_prensipal_mwayen_transpo_moun_sa_itilize",
                                  e.target.value
                                )
                              }
                              className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                            >
                              <option value="">Chwazi...</option>
                              {choiceOptions.mwayenTranspo.map((opt) => (
                                <option key={opt} value={opt}>
                                  {opt}
                                </option>
                              ))}
                            </select>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              999 Èske moun sa gen yon biznis-antrepriz{" "}
                              <span className="text-red-500">*</span>
                            </label>
                            <select
                              value={
                                individual[
                                  "999_eske_moun_sa_gen_yon_biznis_antrepriz"
                                ]
                              }
                              onChange={(e) =>
                                updateIndividual(
                                  individual.id,
                                  "999_eske_moun_sa_gen_yon_biznis_antrepriz",
                                  e.target.value
                                )
                              }
                              className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                            >
                              <option value="">Chwazi...</option>
                              <option value="wi">Wi</option>
                              <option value="non">Non</option>
                              <option value="non aplikab">Non Aplikab</option>
                            </select>
                          </div>
                        </div>

                        {/* Business Information */}
                        {individual[
                          "999_eske_moun_sa_gen_yon_biznis_antrepriz"
                        ] === "wi" && (
                          <div className="space-y-4">
                            <h5 className="font-semibold text-gray-700 flex items-center gap-2">
                              <Briefcase className="h-5 w-5 text-gray-600" />
                              Biznis-Antrepriz
                            </h5>

                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                999 Ki tip biznis-antrepriz{" "}
                                <span className="text-red-500">*</span>
                              </label>
                              <input
                                type="text"
                                value={
                                  individual["999_ki_tip_biznis_antrepriz"]
                                }
                                onChange={(e) =>
                                  updateIndividual(
                                    individual.id,
                                    "999_ki_tip_biznis_antrepriz",
                                    e.target.value
                                  )
                                }
                                className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                                placeholder="Dekri tip biznis lan..."
                              />
                            </div>

                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                999 Depi konbyen ane ou posede oswa opere biznis
                                sa a <span className="text-red-500">*</span>
                              </label>
                              <input
                                type="number"
                                value={
                                  individual[
                                    "999_depi_konbyen_ane_ou_posede_oswa_opere_biznis_sa_a"
                                  ]
                                }
                                onChange={(e) =>
                                  updateIndividual(
                                    individual.id,
                                    "999_depi_konbyen_ane_ou_posede_oswa_opere_biznis_sa_a",
                                    e.target.value
                                  )
                                }
                                className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                                min="0"
                                max="100"
                                step="0.1"
                              />
                            </div>

                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                999 Ki kote biznis sa sitiye prensipalman{" "}
                                <span className="text-red-500">*</span>
                              </label>
                              <select
                                value={
                                  individual[
                                    "999_ki_kote_biznis_sa_sitiye_prensipalman"
                                  ]
                                }
                                onChange={(e) =>
                                  updateIndividual(
                                    individual.id,
                                    "999_ki_kote_biznis_sa_sitiye_prensipalman",
                                    e.target.value
                                  )
                                }
                                className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                              >
                                <option value="">Chwazi...</option>
                                {choiceOptions.koteBiznisSitiye.map((opt) => (
                                  <option key={opt} value={opt}>
                                    {opt}
                                  </option>
                                ))}
                              </select>
                            </div>

                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                999 Èske biznis sa anrejistre ak leta{" "}
                                <span className="text-red-500">*</span>
                              </label>
                              <p className="text-sm text-gray-500 mb-2">
                                Nivo Patant- Matrikil Fiskal
                              </p>
                              <select
                                value={
                                  individual[
                                    "999_eske_biznis_sa_anrejistre_ak_leta"
                                  ]
                                }
                                onChange={(e) =>
                                  updateIndividual(
                                    individual.id,
                                    "999_eske_biznis_sa_anrejistre_ak_leta",
                                    e.target.value
                                  )
                                }
                                className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                              >
                                <option value="">Chwazi...</option>
                                <option value="wi">Wi</option>
                                <option value="non">Non</option>
                                <option value="pa konnen">Pa Konnen</option>
                              </select>
                            </div>

                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                999 Eske biznis lan pemet ou satisfe bezwen
                                prensipal ou{" "}
                                <span className="text-red-500">*</span>
                              </label>
                              <p className="text-sm text-gray-500 mb-2">
                                Le nou pale de bezwen prensipal nou vle di:
                                manje, kay ak lekol.
                              </p>
                              <select
                                value={
                                  individual[
                                    "999_eske_biznis_lan_pemet_ou_satisfe_bezwen_prensipal_ou"
                                  ]
                                }
                                onChange={(e) =>
                                  updateIndividual(
                                    individual.id,
                                    "999_eske_biznis_lan_pemet_ou_satisfe_bezwen_prensipal_ou",
                                    e.target.value
                                  )
                                }
                                className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                              >
                                <option value="">Chwazi...</option>
                                <option value="wi">Wi</option>
                                <option value="non">Non</option>
                              </select>
                            </div>
                          </div>
                        )}

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            4.27 Lòt enfòmasyon/komantè{" "}
                            <span className="text-red-500">*</span>
                          </label>
                          <textarea
                            value={individual["427_lot_enfomasyon_komante"]}
                            onChange={(e) =>
                              updateIndividual(
                                individual.id,
                                "427_lot_enfomasyon_komante",
                                e.target.value
                              )
                            }
                            placeholder="Itilize sa pou enfomasyon ki enpotan/petinan ke moun nan te bay, men ki pat ka antre anba youn nan kesyon fiks yo"
                            className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200 min-h-[100px]"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Section 5: Fèmti */}
        {shouldShowSection5 && (
          <div className="mb-6 bg-white rounded-xl shadow-lg overflow-hidden">
            <button
              onClick={() => toggleSection("section5")}
              className="w-full px-6 py-4 bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 transition-all duration-200 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 text-blue-600" />
                <span className="font-semibold text-gray-700">5. Fèmti</span>
              </div>
              {expandedSections.section5 ? (
                <ChevronDown className="h-5 w-5 text-gray-600" />
              ) : (
                <ChevronRight className="h-5 w-5 text-gray-600" />
              )}
            </button>

            {expandedSections.section5 && (
              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    5.2 Nimewo idantifikasyon kay la
                  </label>
                  <p className="text-sm text-gray-500 mb-2">
                    Li ap fomate konsa: KVW, 3 let nan prenon Ankete a, Ane,
                    Mwa, Jou ak Le: KVWADO202410101235
                  </p>
                  <input
                    type="text"
                    value={formData.section5["52_nimewo_idantifikasyon_kay_la"]}
                    onChange={(e) =>
                      handleInputChange(
                        "section5",
                        "52_nimewo_idantifikasyon_kay_la",
                        e.target.value
                      )
                    }
                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                    pattern="^KVW[A-Z]{3}\d{12}$"
                    placeholder="KVW..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    5.3 Foto kay la <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Camera className="w-10 h-10 mb-3 text-gray-400" />
                        <p className="mb-2 text-sm text-gray-500">
                          <span className="font-semibold">
                            Klike pou ajoute foto
                          </span>
                        </p>
                        <p className="text-xs text-gray-500">
                          PNG, JPG jiska 10MB
                        </p>
                      </div>
                      <input type="file" className="hidden" accept="image/*" />
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    5.4 Lòt enfòmasyon/komantè{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={formData.section5["54_lot_enfomasyon_komante"]}
                    onChange={(e) =>
                      handleInputChange(
                        "section5",
                        "54_lot_enfomasyon_komante",
                        e.target.value
                      )
                    }
                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200 min-h-[100px]"
                  />
                </div>
              </div>
            )}
          </div>
        )}

        {/* Follow-up Visit Section */}
        {shouldShowFollowUp && (
          <div className="mb-6 bg-white rounded-xl shadow-lg overflow-hidden">
            <button
              onClick={() => toggleSection("followUp")}
              className="w-full px-6 py-4 bg-gradient-to-r from-orange-50 to-orange-100 hover:from-orange-100 hover:to-orange-200 transition-all duration-200 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-orange-600" />
                <span className="font-semibold text-gray-700">Vizit Swivi</span>
              </div>
              {expandedSections.followUp ? (
                <ChevronDown className="h-5 w-5 text-gray-600" />
              ) : (
                <ChevronRight className="h-5 w-5 text-gray-600" />
              )}
            </button>

            {expandedSections.followUp && (
              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Avi Swivi
                  </label>
                  <select
                    value={formData.followUp["avi_swivi"]}
                    onChange={(e) =>
                      handleInputChange("followUp", "avi_swivi", e.target.value)
                    }
                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                  >
                    <option value="">Chwazi...</option>
                    <option value="wi">Wi</option>
                    <option value="non">Non</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Dat pou vizit swivi
                    </label>
                    <input
                      type="date"
                      value={formData.followUp["dat_pou_vizit_swivi"]}
                      onChange={(e) =>
                        handleInputChange(
                          "followUp",
                          "dat_pou_vizit_swivi",
                          e.target.value
                        )
                      }
                      className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Lè pou vizit swivi
                    </label>
                    <input
                      type="time"
                      value={formData.followUp["le_pou_vizit_swivi"]}
                      onChange={(e) =>
                        handleInputChange(
                          "followUp",
                          "le_pou_vizit_swivi",
                          e.target.value
                        )
                      }
                      className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Foto stike pou swivi
                  </label>
                  <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Camera className="w-10 h-10 mb-3 text-gray-400" />
                        <p className="mb-2 text-sm text-gray-500">
                          <span className="font-semibold">
                            Klike pou ajoute foto
                          </span>
                        </p>
                        <p className="text-xs text-gray-500">
                          PNG, JPG jiska 10MB
                        </p>
                      </div>
                      <input type="file" className="hidden" accept="image/*" />
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Lòt enfòmasyon/komantè
                  </label>
                  <textarea
                    value={formData.followUp["lot_enfomasyonkomante"]}
                    onChange={(e) =>
                      handleInputChange(
                        "followUp",
                        "lot_enfomasyonkomante",
                        e.target.value
                      )
                    }
                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200 min-h-[100px]"
                  />
                </div>
              </div>
            )}
          </div>
        )}

        {/* Submit Button */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={copyToClipboard}
            className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl text-lg font-semibold"
          >
            {copied ? (
              <Check className="h-6 w-6" />
            ) : (
              <Copy className="h-6 w-6" />
            )}
            {copied ? "Done yo kopye!" : "Kopye tout done yo"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FulcrumSurveyApp;
