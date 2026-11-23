/**
 * Bilingual Dictionary & Localization Engine (ID / EN)
 * Pure Vanilla JavaScript - Graphic Designer Portfolio
 */

const I18N = {
  id: {
    // Navigation
    navWork: "Karya",
    navClients: "Klien",
    navPhilosophy: "Prinsip",
    navContact: "Kontak",
    navInquire: "Diskusi Proyek",

    // Hero Section
    heroStatus: "Tersedia untuk Proyek Q1–Q2",
    designerName: "DZAKI FIRDAUS", // [Isi Nama Anda]
    designerRole: "Graphic Designer",
    designerFocus: "[ Identitas Merek • Kemasan • Sistem Visual ]",
    heroStatement: "Merancang <strong>identitas merek yang distingtif</strong>, kemasan bernilai taktil, dan sistem visual editorial dengan disiplin tipografi yang tajam serta kejelasan fungsional.",
    heroCtaArchive: "Eksplorasi Arsip",
    heroCtaContact: "Hubungi Langsung",
    heroCopyEmail: "Salin Email",

    // Clients Section
    clientsHeadingNum: "01",
    clientsHeadingTitle: "Klien & Kolaborasi",
    clientsSubtitle: "Merek independen, studio arsitektur, dan lini produk gaya hidup.",
    
    // Marquee
    marqueeItems: [
      "IDENTITAS MEREK",
      "DESAIN KEMASAN",
      "SISTEM TIPOGRAFI",
      "EDITORIAL & CETAK",
      "ARAHAN SENI",
      "SISTEM VISUAL SOSIAL",
      "DESAIN EKSIBIUS"
    ],

    // Archive Section
    archiveHeadingNum: "02",
    archiveHeadingTitle: "Arsip Karya Terpilih",
    archiveSubtitle: "Kurasi proyek desain grafis dengan fokus pada ketajaman konseptual dan eksekusi produksi.",
    filterAll: "Semua",
    filterBranding: "Identitas Merek",
    filterPackaging: "Kemasan",
    filterEditorial: "Editorial & Cetak",
    filterSocial: "Visual Sosial",
    inspectBtn: "Inspeksi",

    // Modal / Focus View
    modalDossier: "DOSSIER PROYEK",
    modalBriefHeading: "Tantangan & Brief Proyek",
    modalDeliverablesHeading: "Deliverables & Output",
    modalPaletteHeading: "Palet Warna (Klik untuk Salin HEX)",
    modalExternalLink: "Dokumentasi Lengkap",
    modalCloseAria: "Tutup Modal",
    swatchCopied: "Tersalin ke clipboard!",

    // Philosophy Section
    philoHeadingNum: "03",
    philoHeadingTitle: "Prinsip Desain Grafis",
    philoSubtitle: "Fondasi kerja yang mengutamakan substansi, proporsi, dan daya tahan visual.",
    philo1Title: "Disiplin Grid & Tipografi Tajam",
    philo1Text: "Tipografi bukan sekadar elemen hiasan—ia adalah suara visual utama. Setiap spasi, kerning, dan hierarki grid dibangun secara sadar untuk menyampaikan karakter brand tanpa kompromi.",
    philo2Title: "Materialitas & Nilai Taktil Kemasan",
    philo2Text: "Kemasan adalah jembatan fisik antara brand dan manusia. Pemilihan kertas, finishing cetak, dan ketepatan die-line dipikirkan secara matang dari layar hingga meja produksi.",
    philo3Title: "Sistem Visual yang Tahan Lama",
    philo3Text: "Menolak tren musiman yang lekas usang. Kami membangun aset visual terstruktur dan pedoman merek komprehensif yang siap berekspansi di masa depan.",

    // Contact Section
    contactHeadingNum: "04",
    contactHeading: "Mulai Dialog Visual Baru.",
    contactSubtext: "Terbuka untuk konsultasi identitas merek, desain kemasan, dan proyek kolaboratif terpilih.",
    contactEmailLabel: "Surat Elektronik",
    contactWaLabel: "WhatsApp Direct",
    contactIgLabel: "Instagram Studio",
    contactLocation: "Banda Aceh, Indonesia (WIB)",
    contactRateCard: "Unduh Spec Sheet / PDF",

    // Footer
    footerRights: "Hak Cipta Dilindungi Undang-Undang.",
    footerTop: "Kembali ke Atas ↑",

    // Toasts
    toastCopiedHex: "Kode warna {value} berhasil disalin",
    toastCopiedEmail: "Alamat email berhasil disalin ke clipboard"
  },

  en: {
    // Navigation
    navWork: "Work",
    navClients: "Clients",
    navPhilosophy: "Philosophy",
    navContact: "Contact",
    navInquire: "Inquire Now",

    // Hero Section
    heroStatus: "Available for Q1–Q2 Projects",
    designerName: "DZAKI FIRDAUS", // [Fill Your Name]
    designerRole: "Graphic Designer",
    designerFocus: "[ Brand Identity • Packaging • Visual Systems ]",
    heroStatement: "Crafting <strong>distinctive brand identities</strong>, tactile packaging systems, and editorial visuals with razor-sharp typographic discipline and functional clarity.",
    heroCtaArchive: "Explore Archive",
    heroCtaContact: "Direct Inquiry",
    heroCopyEmail: "Copy Email",

    // Clients Section
    clientsHeadingNum: "01",
    clientsHeadingTitle: "Selected Clients & Niches",
    clientsSubtitle: "Independent labels, architecture studios, and conscious lifestyle brands.",

    // Marquee
    marqueeItems: [
      "BRAND IDENTITY",
      "PACKAGING DESIGN",
      "TYPOGRAPHY SYSTEMS",
      "EDITORIAL & PRINT",
      "ART DIRECTION",
      "SOCIAL VISUAL SYSTEMS",
      "EXHIBITION GRAPHICS"
    ],

    // Archive Section
    archiveHeadingNum: "02",
    archiveHeadingTitle: "Curated Design Archive",
    archiveSubtitle: "A curated record of graphic design engagements focused on conceptual depth and print-ready execution.",
    filterAll: "All",
    filterBranding: "Brand Identity",
    filterPackaging: "Packaging",
    filterEditorial: "Editorial & Print",
    filterSocial: "Social Systems",
    inspectBtn: "Inspect",

    // Modal / Focus View
    modalDossier: "PROJECT DOSSIER",
    modalBriefHeading: "Brief & Design Challenge",
    modalDeliverablesHeading: "Deliverables & Artifacts",
    modalPaletteHeading: "Color Palette (Click to Copy HEX)",
    modalExternalLink: "Full Case Record",
    modalCloseAria: "Close Modal",
    swatchCopied: "Copied to clipboard!",

    // Philosophy Section
    philoHeadingNum: "03",
    philoHeadingTitle: "Design Philosophy",
    philoSubtitle: "Grounded principles rooted in substance, proportional harmony, and longevity.",
    philo1Title: "Grid Rigor & Sharp Typography",
    philo1Text: "Typography is never mere decoration—it is the brand's primary visual voice. Every kerning pair, optical weight, and modular grid is engineered to communicate character without ambiguity.",
    philo2Title: "Tactility & Packaging Materiality",
    philo2Text: "Packaging forms the tactile bridge between brand and human touch. Substrate choice, foil depths, and precision die-lines are calculated from screen to physical factory output.",
    philo3Title: "Enduring Systems Over Fleeting Fads",
    philo3Text: "Rejecting ephemeral seasonal hypes. We construct resilient design systems, comprehensive identity toolkits, and modular assets designed to scale gracefully over time.",

    // Contact Section
    contactHeadingNum: "04",
    contactHeading: "Initiate a Visual Dialogue.",
    contactSubtext: "Open for selective identity commissions, packaging design systems, and visual direction.",
    contactEmailLabel: "Direct Email",
    contactWaLabel: "WhatsApp Direct",
    contactIgLabel: "Instagram Studio",
    contactLocation: "Banda Aceh, Indonesia (WIB)",
    contactRateCard: "Download Spec Sheet / PDF",

    // Footer
    footerRights: "All rights reserved.",
    footerTop: "Back to Top ↑",

    // Toasts
    toastCopiedHex: "Color code {value} copied to clipboard",
    toastCopiedEmail: "Email address copied to clipboard"
  }
};

class Localization {
  constructor() {
    this.storageKey = "portfolio_selected_lang";
    this.currentLang = this.getSavedLanguage();
  }

  getSavedLanguage() {
    const saved = localStorage.getItem(this.storageKey);
    if (saved && (saved === "id" || saved === "en")) {
      return saved;
    }
    // Default to 'id'
    return "id";
  }

  setLanguage(lang) {
    if (lang !== "id" && lang !== "en") return;
    this.currentLang = lang;
    localStorage.setItem(this.storageKey, lang);
    document.documentElement.lang = lang;
    this.updateDOM(false);
    
    // Dispatch custom event so other components (Scrambler, Projects) can react
    window.dispatchEvent(new CustomEvent("languageChanged", { detail: { lang } }));
  }

  t(key, params = {}) {
    const dict = I18N[this.currentLang] || I18N.id;
    let str = dict[key] || I18N.id[key] || key;
    for (const [k, v] of Object.entries(params)) {
      str = str.replace(`{${k}}`, v);
    }
    return str;
  }

  updateDOM(isInitial = false) {
    // Update elements with data-i18n attribute
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(el => {
      const key = el.getAttribute("data-i18n");
      const translation = this.t(key);
      if (translation) {
        if (el.hasAttribute("data-i18n-html")) {
          el.innerHTML = translation;
        } else if (!isInitial && el.hasAttribute("data-decode-text") && window.Motion && window.Motion.hasTextPlugin) {
          window.Motion.decodeText(el, translation, { duration: 0.45 });
        } else {
          el.textContent = translation;
        }
      }
    });

    // Update elements with data-i18n-placeholder
    const inputs = document.querySelectorAll("[data-i18n-placeholder]");
    inputs.forEach(el => {
      const key = el.getAttribute("data-i18n-placeholder");
      el.placeholder = this.t(key);
    });

    // Update language toggle buttons visual active state
    document.querySelectorAll(".lang-btn").forEach(btn => {
      const btnLang = btn.getAttribute("data-lang");
      if (btnLang === this.currentLang) {
        btn.classList.add("active");
        btn.setAttribute("aria-current", "true");
      } else {
        btn.classList.remove("active");
        btn.removeAttribute("aria-current");
      }
    });
  }
}

// Global singleton instance
window.i18n = new Localization();
