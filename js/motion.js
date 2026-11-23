/**
 * Motion & TextPlugin Integration Engine
 * Dark Editorial Graphic Designer Portfolio
 * 
 * Rules:
 * - Anti-AI Slop: Calm, measured pacing (0.4s - 0.7s), power2.out / power3.out easing, no bouncy springs.
 * - Zero layout shift: Maintains element stability.
 * - Accessibility: Strictly respects prefers-reduced-motion.
 * - Safe Guards: Gracefully falls back if GSAP / TextPlugin is unavailable.
 */

(function (window) {
  "use strict";

  // 1. Accessibility: Detect user motion preference
  const prefersReducedMotion = () => {
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  };

  // 2. Safe Detection & Registration of GSAP and Plugins
  const hasGSAP = typeof window.gsap !== "undefined";
  const hasTextPlugin = hasGSAP && typeof window.TextPlugin !== "undefined";
  const hasScrollTrigger = hasGSAP && typeof window.ScrollTrigger !== "undefined";

  if (hasGSAP) {
    try {
      if (hasTextPlugin) {
        window.gsap.registerPlugin(window.TextPlugin);
      }
      if (hasScrollTrigger) {
        window.gsap.registerPlugin(window.ScrollTrigger);
      }
    } catch (err) {
      console.warn("GSAP plugin registration warning:", err);
    }
  }

  /**
   * Safe text decode using TextPlugin with instant fallback
   * @param {HTMLElement|string} target - DOM element or selector
   * @param {string} text - Final target text
   * @param {object} options - Optional duration, ease, onComplete
   */
  function decodeText(target, text, options = {}) {
    const el = typeof target === "string" ? document.querySelector(target) : target;
    if (!el) return;

    const duration = options.duration !== undefined ? options.duration : 0.45;
    const ease = options.ease || "power2.out";

    // Immediate fallback if reduced motion or TextPlugin not loaded
    if (prefersReducedMotion() || !hasTextPlugin) {
      if (options.isHtml) {
        el.innerHTML = text;
      } else {
        el.textContent = text;
      }
      if (typeof options.onComplete === "function") {
        options.onComplete();
      }
      return;
    }

    // Kill any active tweens on the element to prevent race conditions
    window.gsap.killTweensOf(el);

    // Ensure layout stability (no vertical jump during decode)
    if (!el.style.minHeight && el.offsetHeight > 0) {
      el.style.minHeight = `${el.offsetHeight}px`;
    }

    window.gsap.to(el, {
      duration: duration,
      text: {
        value: text,
        delimiter: options.delimiter || ""
      },
      ease: ease,
      onComplete: () => {
        // Clear temporary minHeight once finished
        el.style.minHeight = "";
        if (typeof options.onComplete === "function") {
          options.onComplete();
        }
      }
    });
  }

  /**
   * Hero Section Entrance Animation (Single-pass, calm editorial reveal)
   */
  function initHeroEntrance() {
    if (prefersReducedMotion() || !hasGSAP) return;

    const elementsToReveal = [
      ".site-header",
      ".hero-meta-row",
      ".hero-title-group",
      ".hero-statement",
      ".hero-actions"
    ].filter(sel => document.querySelector(sel));

    if (elementsToReveal.length === 0) return;

    window.gsap.from(elementsToReveal, {
      opacity: 0,
      y: 12,
      duration: 0.65,
      stagger: 0.08,
      ease: "power2.out",
      clearProps: "all"
    });
  }

  /**
   * ScrollTrigger Section Reveals (Strictly once: true)
   */
  function initScrollReveals() {
    if (prefersReducedMotion() || !hasScrollTrigger) return;

    const sections = document.querySelectorAll("section[id]");

    sections.forEach(section => {
      const header = section.querySelector(".section-header");
      if (!header) return;

      window.gsap.from(header, {
        opacity: 0,
        y: 16,
        duration: 0.6,
        ease: "power2.out",
        clearProps: "all",
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          once: true // Anti-AI Slop: Trigger once, stay still
        }
      });
    });
  }

  /**
   * Project Grid Cards Entrance / Filter Transition
   * @param {NodeList|Array} cards - DOM elements of cards
   */
  function animateCards(cards) {
    if (!cards || cards.length === 0) return;

    if (prefersReducedMotion() || !hasGSAP) {
      cards.forEach(card => {
        card.style.opacity = "1";
        card.style.transform = "none";
      });
      return;
    }

    window.gsap.killTweensOf(cards);
    window.gsap.fromTo(
      cards,
      {
        opacity: 0,
        y: 14
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.42,
        stagger: 0.04,
        ease: "power2.out",
        clearProps: "transform,opacity"
      }
    );
  }

  /**
   * Modal Open Animation
   * @param {HTMLElement} modalDialog
   */
  function animateModalOpen(modalDialog) {
    if (!modalDialog) return;

    if (prefersReducedMotion() || !hasGSAP) {
      modalDialog.style.opacity = "1";
      modalDialog.style.transform = "none";
      return;
    }

    window.gsap.killTweensOf(modalDialog);
    window.gsap.fromTo(
      modalDialog,
      {
        opacity: 0,
        scale: 0.97,
        y: 8
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.32,
        ease: "power2.out",
        clearProps: "transform,opacity"
      }
    );
  }

  /**
   * Toast Notification Animation
   * @param {HTMLElement} toastEl
   * @param {number} autoHideDelay - Delay in ms before hiding
   */
  let toastHideTimer = null;
  function animateToast(toastEl, autoHideDelay = 2600) {
    if (!toastEl) return;

    if (toastHideTimer) {
      clearTimeout(toastHideTimer);
    }

    if (prefersReducedMotion() || !hasGSAP) {
      toastEl.classList.add("show");
      toastHideTimer = setTimeout(() => {
        toastEl.classList.remove("show");
      }, autoHideDelay);
      return;
    }

    window.gsap.killTweensOf(toastEl);
    toastEl.classList.add("show");

    window.gsap.fromTo(
      toastEl,
      {
        opacity: 0,
        y: 18
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.28,
        ease: "power2.out"
      }
    );

    toastHideTimer = setTimeout(() => {
      window.gsap.to(toastEl, {
        opacity: 0,
        y: 12,
        duration: 0.22,
        ease: "power2.in",
        onComplete: () => {
          toastEl.classList.remove("show");
          window.gsap.set(toastEl, { clearProps: "all" });
        }
      });
    }, autoHideDelay);
  }

  // Expose Motion module to window
  window.Motion = {
    hasGSAP,
    hasTextPlugin,
    hasScrollTrigger,
    prefersReducedMotion,
    decodeText,
    initHeroEntrance,
    initScrollReveals,
    animateCards,
    animateModalOpen,
    animateToast
  };

})(window);
