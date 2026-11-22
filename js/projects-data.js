/**
 * Graphic Design Project Archive & Client Showcase Data
 * Authentic, Editorial, Production-Ready Deliverables
 */

const CLIENTS_DATA = [
  {
    id: "client-1",
    name: "Karsa Coffee Lab",
    niche: {
      id: "Specialty Roastery & Kafe",
      en: "Specialty Roastery & Cafe"
    },
    logo: "", // Slot gambar: masukkan path ke logo Anda (misal: "assets/images/clients/karsa.svg")
    placeholderSymbol: "diamond" // Fallback icon visual saat gambar masih kosong
  },
  {
    id: "client-2",
    name: "Nara Botanicals",
    niche: {
      id: "Perawatan Kulit Organik",
      en: "Organic Skincare Line"
    },
    logo: "", // Slot gambar
    placeholderSymbol: "circle-cross"
  },
  {
    id: "client-3",
    name: "Atelier Kroma",
    niche: {
      id: "Studio Interior & Furnitur",
      en: "Interior & Furniture Studio"
    },
    logo: "", // Slot gambar
    placeholderSymbol: "square-grid"
  },
  {
    id: "client-4",
    name: "Sora Press",
    niche: {
      id: "Penerbit Seni & Arsitektur",
      en: "Art & Architecture Imprint"
    },
    logo: "", // Slot gambar
    placeholderSymbol: "book-leaf"
  },
  {
    id: "client-5",
    name: "Verve Ferments",
    niche: {
      id: "Minuman Probiotik Artisan",
      en: "Artisanal Fermented Drinks"
    },
    logo: "", // Slot gambar
    placeholderSymbol: "droplet-ring"
  },
  {
    id: "client-6",
    name: "Lokananta Records",
    niche: {
      id: "Arsip & Rilisan Piringan Hitam",
      en: "Vinyl Archive & Label"
    },
    logo: "", // Slot gambar
    placeholderSymbol: "sound-wave"
  }
];

const PROJECTS_DATA = [
  {
    id: "proj-01",
    index: "01",
    category: "branding",
    year: "2025",
    client: "Karsa Coffee Lab",
    image: "", // Slot gambar: masukkan path Anda, contoh: "assets/images/projects/karsa-identity.jpg"
    aspectRatio: "16/10",
    title: {
      id: "Sistem Identitas & Nomenklatur Karsa",
      en: "Karsa Visual Identity & Nomenclature"
    },
    brief: {
      id: "Merumuskan ulang bahasa visual specialty coffee roastery asal Bandung yang ingin berekspansi ke pasar regional tanpa kehilangan akar riset botani dan karakter eksperimentalnya.",
      en: "Re-engineering the visual language for a Bandung-based specialty coffee roastery expanding into regional markets while preserving botanical research roots and experimental discipline."
    },
    deliverables: {
      id: [
        "Sistem Tipografi Kustom",
        "Pedoman Identitas Merek (120 Hlm)",
        "Stempel Emboss Kemasan Dieline",
        "Signage Fisik & Wayfinding Toko",
        "Sistem Stiker Batch Roasting"
      ],
      en: [
        "Custom Monospace Typographic System",
        "Comprehensive Brand Book (120 Pages)",
        "Blind Emboss Packaging Dielines",
        "Physical Signage & Wayfinding Matrix",
        "Variable Data Roast Batch Stickers"
      ]
    },
    palette: ["#0E1013", "#A3E635", "#F3F4F6", "#4B5563"],
    externalUrl: "https://behance.net"
  },
  {
    id: "proj-02",
    index: "02",
    category: "packaging",
    year: "2025",
    client: "Nara Botanicals",
    image: "", // Slot gambar: "assets/images/projects/nara-packaging.jpg"
    aspectRatio: "16/10",
    title: {
      id: "Sistem Kemasan Botani & Label Taktil",
      en: "Botanical Packaging & Tactile Label Series"
    },
    brief: {
      id: "Menciptakan sistem kemasan kaca amber dan boks luar berbahan kertas daur ulang bertekstur kasar untuk lini serum berbasis flora endemik Nusantara. Menghindari klise estetika eco-zen generic.",
      en: "Designing an amber glass and rough-textured recycled box packaging system for an endemic botanical serum line, deliberately avoiding generic eco-zen clichés in favor of apothecary rigor."
    },
    deliverables: {
      id: [
        "Die-line Boks Lipat Tanpa Lem",
        "Label Cetak Letterpress 1 Warna",
        "Hot Stamping Foil Hijau Zaitun",
        "Sistem Hierarki Kandungan Farmasi",
        "Mockup Fisik & Uji Toleransi Cetak"
      ],
      en: [
        "Glueless Origami Fold Dieline",
        "1-Color Letterpress Tactile Labels",
        "Olive Bronze Metallic Foil Stamp",
        "Pharmaceutical Ingredient Hierarchy",
        "Substrate Weight & Press Print Specs"
      ]
    },
    palette: ["#16191F", "#84CC16", "#D1D5DB", "#2B3240"],
    externalUrl: "https://behance.net"
  },
  {
    id: "proj-03",
    index: "03",
    category: "editorial",
    year: "2024",
    client: "Sora Press",
    image: "", // Slot gambar: "assets/images/projects/sora-monograph.jpg"
    aspectRatio: "16/10",
    title: {
      id: "Monograf Arsitektur: 'Batas & Ruang'",
      en: "Architectural Monograph: 'Thresholds & Voids'"
    },
    brief: {
      id: "Tata letak editorial monograf hardbound setebal 280 halaman yang mendokumentasikan 10 tahun karya arsitektur tropis modern. Menuntut sistem grid asimetris yang menghargai ruang kosong.",
      en: "Editorial design for a 280-page casebound monograph chronicling a decade of modern tropical architecture. Required strict asymmetric Swiss-style grid logic and breathing negative space."
    },
    deliverables: {
      id: [
        "Grid Modular 12 Kolom Editorial",
        "Desain Sampul Linen Clothed & Deboss",
        "Kurasi Kertas Munken Lynx 120gsm",
        "Direksi Separasi Warna Monokrom",
        "Tipografi Judul Akzidenz-Grotesk"
      ],
      en: [
        "12-Column Asymmetric Grid Blueprint",
        "Linen Bound Cover with Blind Deboss",
        "Munken Lynx 120gsm Paper Stock Spec",
        "Monochrome Duotone Print Profiling",
        "Bespoke Section Divider Typographics"
      ]
    },
    palette: ["#0B0D10", "#A3E635", "#E5E7EB", "#52525B"],
    externalUrl: "https://behance.net"
  },
  {
    id: "proj-04",
    index: "04",
    category: "branding",
    year: "2024",
    client: "Atelier Kroma",
    image: "", // Slot gambar: "assets/images/projects/kroma-system.jpg"
    aspectRatio: "16/10",
    title: {
      id: "Identitas Geometris & Sistem Katalog Furnitur",
      en: "Geometric Identity & Modular Furniture Catalogue"
    },
    brief: {
      id: "Penyusunan identitas visual dan katalog modular untuk produsen furnitur kayu solid custom. Memadukan presisi sambungan kayu tradisional dengan tipografi geometris modern.",
      en: "Visual identity and loose-leaf catalogue system for a bespoke solid-wood joinery workshop, marrying the mathematical precision of woodcraft with stark contemporary typography."
    },
    deliverables: {
      id: [
        "Wordmark Geometris & Simbol Grid",
        "Sistem Pengikat Binder Binder Logam",
        "Lembar Sampel Material Teruji",
        "Sertifikat Keaslian Ber-nomor Seri",
        "Kartu Nama Bertekstur Cotton 600gsm"
      ],
      en: [
        "Geometric Wordmark & Proportion Grid",
        "Industrial Screw-post Binder Layout",
        "Standardized Material Swatch Sheets",
        "Serialized Certificate of Authenticity",
        "600gsm Duplexed Cotton Business Cards"
      ]
    },
    palette: ["#12151B", "#A3E635", "#CBD5E1", "#334155"],
    externalUrl: "https://behance.net"
  },
  {
    id: "proj-05",
    index: "05",
    category: "packaging",
    year: "2024",
    client: "Verve Ferments",
    image: "", // Slot gambar: "assets/images/projects/verve-cans.jpg"
    aspectRatio: "16/10",
    title: {
      id: "Seri Kemasan Kaleng & Tipografi Fermentasi",
      en: "Aluminum Can Series & Fermentation Typographics"
    },
    brief: {
      id: "Desain sistem kaleng aluminium 330ml dengan palet warna kontras tinggi untuk lini minuman kombucha botanikal yang dipasarkan di bistro dan toko kurasi lokal.",
      en: "Design of a 330ml slim aluminum can series with high-contrast color zones for an artisanal botanical kombucha label retailed in indie specialty venues."
    },
    deliverables: {
      id: [
        "Sistem Warna Kromatik 4 Varian",
        "Ilustrasi Vektor Anatomi Mikrobial",
        "Spesifikasi Cetak Dry Offset Kaleng",
        "Sleeve Kardus Multipack 4-Pack",
        "Stiker Segel Kualitatif"
      ],
      en: [
        "4-SKU Chromatic Flavor Identification",
        "Abstract Microbial Vector Motifs",
        "Dry-offset Aluminum Print Production",
        "Kraftboard 4-Pack Multipack Sleeve",
        "Security Tamper Seal Graphics"
      ]
    },
    palette: ["#16191F", "#BEF264", "#F1F5F9", "#1E293B"],
    externalUrl: "https://behance.net"
  },
  {
    id: "proj-06",
    index: "06",
    category: "social",
    year: "2024",
    client: "Lokananta Records",
    image: "", // Slot gambar: "assets/images/projects/lokananta-visuals.jpg"
    aspectRatio: "16/10",
    title: {
      id: "Sistem Visual Media Sosial & Arsip Musik",
      en: "Social Grid Architecture & Music Archive Visuals"
    },
    brief: {
      id: "Membangun sistem kisi grafis, template perilisan piringan hitam, dan pedoman gerak tipografi statis untuk kanal digital arsip musik bersejarah tanpa terkesan retro usang.",
      en: "Constructing a rigid social grid framework, vinyl reissue announcements, and static typographic banners for a heritage music archive, avoiding dusty nostalgia in favor of modernist reverence."
    },
    deliverables: {
      id: [
        "Master Template Modular Format 1:1 & 9:16",
        "Sistem Kuotasi Tipografi & Kronologi",
        "Pedoman Resolusi Aset Digital",
        "Pola Tekstur Gelombang Audio",
        "Panduan Kurasi Foto Arsip Hitam-Putih"
      ],
      en: [
        "Modular Multi-format Templates (1:1 & 9:16)",
        "Chronological Typographic Quote Grid",
        "Digital Production Asset Guidelines",
        "Vectorized Groove Frequency Patterns",
        "Archival Duotone Photo Treatment Specs"
      ]
    },
    palette: ["#0E1013", "#A3E635", "#FFFFFF", "#3F3F46"],
    externalUrl: "https://behance.net"
  }
];

window.CLIENTS_DATA = CLIENTS_DATA;
window.PROJECTS_DATA = PROJECTS_DATA;
