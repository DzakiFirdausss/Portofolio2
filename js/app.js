/**
 * Main Application Coordinator
 * Pure Vanilla JavaScript - Dark Editorial Graphic Designer Portfolio
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize Localization (initial pass without animation)
  const i18n = window.i18n;
  i18n.updateDOM(true);

  // 2. Initialize GSAP Editorial Motion & Scroll Triggers
  if (window.Motion) {
    window.Motion.initHeroEntrance();
    window.Motion.initScrollReveals();
  }

  // 3. Setup Hero Text Scramblers
  const nameEl = document.getElementById("hero-designer-name");
  const roleEl = document.getElementById("hero-designer-role");

  let nameScrambler = nameEl ? new TextScramble(nameEl) : null;
  let roleScrambler = roleEl ? new TextScramble(roleEl) : null;

  function runHeroScramble() {
    const currentName = i18n.t("designerName");
    const currentRole = i18n.t("designerRole");

    if (nameScrambler) {
      nameScrambler.setText(currentName);
    }
    if (roleScrambler) {
      setTimeout(() => {
        roleScrambler.setText(currentRole);
      }, 150);
    }
  }

  // Initial scramble on page load
  runHeroScramble();

  // 3. Render Clients Grid
  renderClients();

  // 4. Render Projects Grid & Setup Filter Bar
  renderProjects("all");
  updateFilterCounts();

  // 5. Setup Interactive Event Listeners
  setupLanguageToggle();
  setupFilterButtons();
  setupModal();
  setupClipboardActions();
  setupLiveClock();
  setupMobileDrawer();
  setupSmoothScroll();

  // 6. Listen for language change events
  window.addEventListener("languageChanged", () => {
    runHeroScramble();
    renderClients();
    const activeFilterBtn = document.querySelector(".filter-btn.active");
    const activeCategory = activeFilterBtn ? activeFilterBtn.getAttribute("data-filter") : "all";
    renderProjects(activeCategory, false);
    updateFilterCounts();
  });
});

/* ==========================================================================
   Client Showcase Rendering
   ========================================================================== */

function renderClients() {
  const container = document.getElementById("clients-grid-container");
  if (!container || !window.CLIENTS_DATA) return;

  const currentLang = window.i18n.currentLang;

  const html = window.CLIENTS_DATA.map(client => {
    const nicheText = client.niche[currentLang] || client.niche.id;

    // Check if user provided an image path
    let visualSlotHtml = "";
    if (client.logo && client.logo.trim() !== "") {
      visualSlotHtml = `<img src="${escapeHtml(client.logo)}" alt="${escapeHtml(client.name)} Logo" loading="lazy" />`;
    } else {
      // High craft architectural placeholder mark
      visualSlotHtml = `
        <div class="client-mark-placeholder">
          ${getGeometricClientSvg(client.placeholderSymbol)}
          <span>${escapeHtml(client.name)}</span>
        </div>
      `;
    }

    return `
      <div class="client-card" data-client-id="${client.id}">
        <div class="client-logo-wrap">
          ${visualSlotHtml}
        </div>
        <span class="client-niche">${escapeHtml(nicheText)}</span>
      </div>
    `;
  }).join("");

  container.innerHTML = html;
}

function getGeometricClientSvg(symbol) {
  switch (symbol) {
    case "diamond":
      return `
        <svg class="client-mark-icon" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" fill="none">
          <polygon points="12 2 22 12 12 22 2 12" />
          <circle cx="12" cy="12" r="3" stroke-width="1.5" />
        </svg>`;
    case "circle-cross":
      return `
        <svg class="client-mark-icon" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" fill="none">
          <circle cx="12" cy="12" r="9" />
          <line x1="12" y1="3" x2="12" y2="21" />
          <line x1="3" y1="12" x2="21" y2="12" />
        </svg>`;
    case "square-grid":
      return `
        <svg class="client-mark-icon" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="1" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="12" y1="3" x2="12" y2="21" />
        </svg>`;
    case "book-leaf":
      return `
        <svg class="client-mark-icon" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" fill="none">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>`;
    case "droplet-ring":
      return `
        <svg class="client-mark-icon" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" fill="none">
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="3" stroke-width="1.5" />
        </svg>`;
    case "sound-wave":
    default:
      return `
        <svg class="client-mark-icon" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" fill="none">
          <path d="M3 12h3M9 8v8M15 5v14M21 12h-3" />
        </svg>`;
  }
}

/* ==========================================================================
   Project Archive Rendering & Filtering
   ========================================================================== */

function renderProjects(category = "all", triggerRevealAnimation = true) {
  const container = document.getElementById("archive-grid-container");
  if (!container || !window.PROJECTS_DATA) return;

  const currentLang = window.i18n.currentLang;
  const filtered = category === "all" 
    ? window.PROJECTS_DATA 
    : window.PROJECTS_DATA.filter(p => p.category === category);

  const html = filtered.map(project => {
    const title = project.title[currentLang] || project.title.id;
    const inspectLabel = window.i18n.t("inspectBtn");

    let mediaHtml = "";
    if (project.image && project.image.trim() !== "") {
      mediaHtml = `
        <img class="project-img" src="${escapeHtml(project.image)}" alt="${escapeHtml(title)}" loading="lazy" />
      `;
    } else {
      // Sleek editorial design poster placeholder
      mediaHtml = generatePosterSvg(project, title, currentLang);
    }

    const revealClass = triggerRevealAnimation ? "revealing" : "";

    return `
      <article class="project-card ${revealClass}" data-project-id="${project.id}" role="button" tabindex="0" aria-label="${escapeHtml(title)}">
        <div class="project-media-wrap">
          ${mediaHtml}
          <div class="project-inspect-badge">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
            </svg>
            <span>${inspectLabel}</span>
          </div>
        </div>
        <div class="project-card-info">
          <div class="project-card-meta">
            <span class="project-card-index">${project.index} // ${project.category.toUpperCase()}</span>
            <span class="project-card-year">${project.year}</span>
          </div>
          <h3 class="project-card-title">${escapeHtml(title)}</h3>
          <p class="project-card-client">${escapeHtml(project.client)}</p>
        </div>
      </article>
    `;
  }).join("");

  container.innerHTML = html;

  // Animate cards with GSAP if Motion engine is available
  if (triggerRevealAnimation && window.Motion) {
    window.Motion.animateCards(container.querySelectorAll(".project-card"));
  }

  // Re-attach click listeners to new cards
  container.querySelectorAll(".project-card").forEach(card => {
    const projectId = card.getAttribute("data-project-id");
    card.addEventListener("click", () => openProjectModal(projectId));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openProjectModal(projectId);
      }
    });
  });
}

/**
 * Generates a sleek graphic design poster placeholder with technical annotations
 */
function generatePosterSvg(project, title, lang) {
  const swatchesHtml = project.palette.map(hex => `
    <span class="poster-mini-swatch" style="background-color: ${hex};"></span>
  `).join("");

  return `
    <div class="project-placeholder-poster">
      <div class="poster-top-bar">
        <span>ARCHIVE-REF: ${project.index}</span>
        <span>${project.category.toUpperCase()} // ${project.year}</span>
      </div>
      <div class="poster-center-art">
        <svg class="poster-geometry" viewBox="0 0 100 100" fill="none" stroke-width="1.5">
          <circle cx="50" cy="50" r="38" stroke="currentColor" stroke-dasharray="2 3" />
          <rect x="25" y="25" width="50" height="50" stroke="currentColor" />
          <line x1="50" y1="12" x2="50" y2="88" stroke="currentColor" stroke-width="0.75" />
          <line x1="12" y1="50" x2="88" y2="50" stroke="currentColor" stroke-width="0.75" />
        </svg>
        <span class="poster-title-display">${escapeHtml(title)}</span>
      </div>
      <div class="poster-bottom-bar">
        <div class="poster-color-swatches">
          ${swatchesHtml}
        </div>
        <span class="poster-grid-spec">${project.client}</span>
      </div>
    </div>
  `;
}

function updateFilterCounts() {
  const counts = {
    all: window.PROJECTS_DATA.length,
    branding: 0,
    packaging: 0,
    editorial: 0,
    social: 0
  };

  window.PROJECTS_DATA.forEach(p => {
    if (counts[p.category] !== undefined) {
      counts[p.category]++;
    }
  });

  document.querySelectorAll(".filter-btn").forEach(btn => {
    const filter = btn.getAttribute("data-filter");
    const countSpan = btn.querySelector(".filter-count");
    if (countSpan && counts[filter] !== undefined) {
      const numStr = counts[filter] < 10 ? `0${counts[filter]}` : `${counts[filter]}`;
      countSpan.textContent = `[${numStr}]`;
    }
  });
}

function setupFilterButtons() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.getAttribute("data-filter");
      renderProjects(category, true);
    });
  });
}

/* ==========================================================================
   Focus / Inspect Project Modal
   ========================================================================== */

let activeModalProject = null;
let lastFocusedElement = null;

function setupModal() {
  const modalBackdrop = document.getElementById("project-modal");
  const closeBtn = document.getElementById("modal-close-btn");

  if (!modalBackdrop) return;

  function closeModal() {
    modalBackdrop.classList.remove("open");
    modalBackdrop.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";

    if (lastFocusedElement) {
      lastFocusedElement.focus();
    }
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", closeModal);
  }

  // Backdrop click closes modal
  modalBackdrop.addEventListener("click", (e) => {
    if (e.target === modalBackdrop) {
      closeModal();
    }
  });

  // ESC key closes modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalBackdrop.classList.contains("open")) {
      closeModal();
    }
  });
}

function openProjectModal(projectId) {
  const project = window.PROJECTS_DATA.find(p => p.id === projectId);
  if (!project) return;

  lastFocusedElement = document.activeElement;
  activeModalProject = project;

  const currentLang = window.i18n.currentLang;
  const modalBackdrop = document.getElementById("project-modal");
  const title = project.title[currentLang] || project.title.id;
  const brief = project.brief[currentLang] || project.brief.id;
  const deliverables = project.deliverables[currentLang] || project.deliverables.id;

  // Header meta
  document.getElementById("modal-meta-index").textContent = `REF // ${project.index}`;
  document.getElementById("modal-meta-client").textContent = project.client;
  document.getElementById("modal-meta-year").textContent = project.year;

  // Media view
  const mediaContainer = document.getElementById("modal-media-container");
  if (project.image && project.image.trim() !== "") {
    mediaContainer.innerHTML = `<img src="${escapeHtml(project.image)}" alt="${escapeHtml(title)}" />`;
  } else {
    mediaContainer.innerHTML = generatePosterSvg(project, title, currentLang);
  }

  // Narrative
  document.getElementById("modal-project-title").textContent = title;
  document.getElementById("modal-project-brief").textContent = brief;

  // Deliverables
  const delivContainer = document.getElementById("modal-deliverables-list");
  delivContainer.innerHTML = deliverables.map(item => `
    <span class="deliverable-tag">${escapeHtml(item)}</span>
  `).join("");

  // Swatches
  const swatchContainer = document.getElementById("modal-swatch-grid");
  swatchContainer.innerHTML = project.palette.map(hex => `
    <button type="button" class="swatch-chip" data-hex="${hex}" title="Click to copy HEX">
      <span class="swatch-color-box" style="background-color: ${hex};"></span>
      <span>${hex}</span>
    </button>
  `).join("");

  // Attach click listener to swatches
  swatchContainer.querySelectorAll(".swatch-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      const hex = chip.getAttribute("data-hex");
      copyToClipboard(hex, window.i18n.t("toastCopiedHex", { value: hex }));
    });
  });

  // External documentation link
  const extLink = document.getElementById("modal-external-link");
  if (extLink) {
    extLink.href = project.externalUrl || "#";
  }

  // Open modal
  modalBackdrop.classList.add("open");
  modalBackdrop.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  const dialog = modalBackdrop.querySelector(".modal-dialog");
  if (window.Motion) {
    window.Motion.animateModalOpen(dialog);
  }

  // Focus close button for accessibility
  const closeBtn = document.getElementById("modal-close-btn");
  if (closeBtn) {
    closeBtn.focus();
  }
}

/* ==========================================================================
   Language Toggle Setup (ID | EN)
   ========================================================================== */

function setupLanguageToggle() {
  const buttons = document.querySelectorAll(".lang-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const selected = btn.getAttribute("data-lang");
      if (selected && selected !== window.i18n.currentLang) {
        window.i18n.setLanguage(selected);
      }
    });
  });
}

/* ==========================================================================
   Clipboard Actions & Toast System
   ========================================================================== */

let toastTimeout = null;

function copyToClipboard(text, successMessage) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(successMessage);
    }).catch(() => {
      fallbackCopy(text, successMessage);
    });
  } else {
    fallbackCopy(text, successMessage);
  }
}

function fallbackCopy(text, successMessage) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.left = "-999999px";
  textArea.style.top = "-999999px";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand("copy");
    showToast(successMessage);
  } catch (err) {
    console.error("Copy failed", err);
  }
  document.body.removeChild(textArea);
}

function showToast(message) {
  const toast = document.getElementById("toast-notification");
  const toastMsg = document.getElementById("toast-message");
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;

  if (window.Motion) {
    window.Motion.animateToast(toast);
  } else {
    toast.classList.add("show");

    if (toastTimeout) {
      clearTimeout(toastTimeout);
    }

    toastTimeout = setTimeout(() => {
      toast.classList.remove("show");
    }, 2600);
  }
}

function setupClipboardActions() {
  // Hero Copy Email Button
  const heroCopyEmailBtn = document.getElementById("hero-copy-email-btn");
  if (heroCopyEmailBtn) {
    heroCopyEmailBtn.addEventListener("click", () => {
      const email = heroCopyEmailBtn.getAttribute("data-email") || "designer@example.com";
      copyToClipboard(email, window.i18n.t("toastCopiedEmail"));
    });
  }

  // Contact Section Email Copy Button
  const contactCopyEmailBtn = document.getElementById("contact-copy-email-btn");
  if (contactCopyEmailBtn) {
    contactCopyEmailBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const email = contactCopyEmailBtn.getAttribute("data-email") || "designer@example.com";
      copyToClipboard(email, window.i18n.t("toastCopiedEmail"));
    });
  }
}

/* ==========================================================================
   Live Timezone Clock (Banda Aceh WIB / UTC+7)
   ========================================================================== */

function setupLiveClock() {
  const clockEl = document.getElementById("live-clock-time");
  if (!clockEl) return;

  function updateClock() {
    const now = new Date();
    // Format to Asia/Jakarta IANA timezone (representing WIB / UTC+7 for Banda Aceh)
    try {
      const timeStr = now.toLocaleTimeString("en-GB", {
        timeZone: "Asia/Jakarta",
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      });
      clockEl.textContent = `${timeStr} WIB (UTC+7)`;
    } catch (e) {
      // Fallback
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      clockEl.textContent = `${hours}:${minutes}:${seconds} WIB`;
    }
  }

  updateClock();
  setInterval(updateClock, 1000);
}

/* ==========================================================================
   Mobile Navigation Drawer
   ========================================================================== */

function setupMobileDrawer() {
  const menuBtn = document.getElementById("mobile-menu-btn");
  const drawer = document.getElementById("mobile-drawer");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");

  if (!menuBtn || !drawer) return;

  function toggleMenu() {
    const isOpen = drawer.classList.contains("open");
    if (isOpen) {
      drawer.classList.remove("open");
      menuBtn.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    } else {
      drawer.classList.add("open");
      menuBtn.classList.add("open");
      menuBtn.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
    }
  }

  menuBtn.addEventListener("click", toggleMenu);

  mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
      drawer.classList.remove("open");
      menuBtn.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    });
  });
}

/* ==========================================================================
   Smooth Scrolling for Anchor Links & Back to Top
   ========================================================================== */

function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#" || !targetId) return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });

  const backToTopBtn = document.getElementById("back-to-top-btn");
  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
}

/* Helper function to prevent XSS in dynamic templates */
function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
