/* ==================================================
   Easycheck Frontend — Advanced App Script
   - i18n (EN/PT/FR/DE)
   - HR AI mini chat (frontend only; API placeholder)
   - Accessibility, performance helpers
   ================================================== */

const API_BASE = window.EASYCHECK_API_BASE || "https://your-render-app.onrender.com";

/* Translations (EN/PT/FR/DE) — trimmed to key sections used in public pages and HR chat */
const translations = {
  "en": {
    "nav":{"home":"Home","features":"Features","pricing":"Pricing","contact":"Contact","signin":"Sign in"},
    "hero":{"badge":"Trusted by 500+ European SMEs","title":"All-in-One AI Back-Office Suite","subtitle":"Automate accounting, HR, marketing, and security. Focus on growth, not paperwork."},
    "cta":{"get_started":"Get Started"},
    "benefits":{"hr":{"title":"AI-Powered HR","desc":"CV parsing, structured extraction, multilingual ranking with bias checks."}},
    "footer":{"tagline":"AI-powered back-office for modern SMEs.","product":"Product","company":"Company","legal":"Legal","privacy":"Privacy Policy","terms":"Terms of Service","copyright":"© 2025 Easycheck. All rights reserved."}
  },
  "pt": {
    "nav":{"home":"Início","features":"Funcionalidades","pricing":"Preços","contact":"Contato","signin":"Entrar"},
    "hero":{"badge":"Confiado por mais de 500 PMEs europeus","title":"Suite AI All-in-One para Back-Office","subtitle":"Automatize contabilidade, RH, marketing e segurança. Foque no crescimento, não no trabalho administrativo."},
    "cta":{"get_started":"Começar"},
    "benefits":{"hr":{"title":"RH Alimentado por IA","desc":"Análise de CV, extração estruturada, ranking multilíngue com verificações de viés."}},
    "footer":{"tagline":"Suite de back-office alimentada por IA para PMEs modernas.","product":"Produto","company":"Empresa","legal":"Legal","privacy":"Política de Privacidade","terms":"Termos de Serviço","copyright":"© 2025 Easycheck. Todos os direitos reservados."}
  },
  "fr": {
    "nav":{"home":"Accueil","features":"Fonctionnalités","pricing":"Tarification","contact":"Contact","signin":"Se connecter"},
    "hero":{"badge":"Approuvé par plus de 500 PME européennes","title":"Suite IA All-in-One pour Back-Office","subtitle":"Automatisez comptabilité, RH, marketing et sécurité. Concentrez-vous sur la croissance."},
    "cta":{"get_started":"Commencer"},
    "benefits":{"hr":{"title":"RH Alimentée par l'IA","desc":"Analyse de CV, extraction structurée, classement multilingue avec vérifications de biais."}},
    "footer":{"tagline":"Suite de back-office alimentée par l'IA pour les PME modernes.","product":"Produit","company":"Entreprise","legal":"Juridique","privacy":"Politique de Confidentialité","terms":"Conditions de Service","copyright":"© 2025 Easycheck. Tous droits réservés."}
  },
  "de": {
    "nav":{"home":"Startseite","features":"Funktionen","pricing":"Preise","contact":"Kontakt","signin":"Anmelden"},
    "hero":{"badge":"Vertraut von über 500 europäischen KMUs","title":"All-in-One KI Back-Office-Suite","subtitle":"Automatisieren Sie Buchhaltung, HR, Marketing und Sicherheit. Fokus auf Wachstum."},
    "cta":{"get_started":"Loslegen"},
    "benefits":{"hr":{"title":"KI-gestützte HR","desc":"CV-Analyse, strukturierte Extraktion, mehrsprachiges Ranking mit Bias-Checks."}},
    "footer":{"tagline":"KI-gestützte Back-Office-Suite für moderne KMUs.","product":"Produkt","company":"Unternehmen","legal":"Rechtliches","privacy":"Datenschutzerklärung","terms":"Nutzungsbedingungen","copyright":"© 2025 Easycheck. Alle Rechte vorbehalten."}
  }
};

// State
let currentLanguage = localStorage.getItem("easycheck-lang") || "pt";
let hrThreadId = localStorage.getItem("easycheck-hr-thread") || null;

// ============================================
// LANGUAGE SWITCHING
// ============================================
function initLanguageSwitcher() {
  const langButtons = document.querySelectorAll(".lang-btn");
  setLanguage(currentLanguage);
  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      setLanguage(btn.getAttribute("data-lang"));
    });
  });
}

function setLanguage(lang) {
  if (!translations[lang]) lang = "en";
  currentLanguage = lang;
  localStorage.setItem("easycheck-lang", lang);

  document.documentElement.lang = lang;
  document.documentElement.setAttribute("dir", "ltr");

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });

  updateTranslations();
}

function updateTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const t = getTranslation(key);
    if (t) el.textContent = t;
  });
}

function getTranslation(key) {
  return key.split(".").reduce((acc, k) => (acc && acc[k] !== undefined ? acc[k] : null), translations[currentLanguage]);
}

// ============================================
// HR MINI CHAT
// ============================================
function initHrChat() {
  const win = document.getElementById("chatWindow");
  const input = document.getElementById("chatInput");
  const send = document.getElementById("sendBtn");
  const status = document.getElementById("chatStatus");
  if (!win || !input || !send) return;

  const pushMsg = (role, text) => {
    const div = document.createElement("div");
    div.className = `msg ${role}`;
    const bubble = document.createElement("div");
    bubble.className = "bubble";
    bubble.textContent = text;
    div.appendChild(bubble);
    win.appendChild(div);
    win.scrollTop = win.scrollHeight;
  };

  const setBusy = (busy) => {
    status.textContent = busy ? "A pensar…" : "Pronto.";
    send.disabled = busy;
    input.disabled = busy;
  };

  send.addEventListener("click", async () => {
    const text = input.value.trim();
    if (!text) return;
    pushMsg("user", text);
    input.value = "";
    setBusy(true);
    try {
      const res = await fetch(`${API_BASE}/ai/hr/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text,
          thread_id: hrThreadId,
          lang: currentLanguage,
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json(); // expects { reply, thread_id }
      if (data.thread_id && data.thread_id !== hrThreadId) {
        hrThreadId = data.thread_id;
        localStorage.setItem("easycheck-hr-thread", hrThreadId);
      }
      pushMsg("ai", data.reply || "Sem resposta.");
    } catch (err) {
      console.error("[HR Chat] error", err);
      pushMsg("ai", "Ocorreu um erro. Tenta novamente.");
    } finally {
      setBusy(false);
    }
  });

  input.addEventListener("keydown", (e) => { if (e.key === "Enter") send.click(); });
}

// ============================================
// CONTACT FORM (placeholder)
// ============================================
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Obrigado! Entraremos em contacto em breve.");
    form.reset();
  });
}

// ============================================
// PRICING TOGGLE (placeholder)
// ============================================
function initPricingToggle() {
  document.querySelectorAll(".toggle-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".toggle-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });
}

// ============================================
// ACCESSIBILITY & PERFORMANCE
// ============================================
function initAccessibility() {
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const menu = document.querySelector(".lang-menu");
      if (menu && !menu.hasAttribute("hidden")) {
        menu.setAttribute("hidden", "");
        const trigger = document.querySelector(".lang-trigger");
        if (trigger) trigger.setAttribute("aria-expanded", "false");
      }
    }
  });
}

function initLazyLoading() {
  if ("IntersectionObserver" in window) {
    const images = document.querySelectorAll("img[loading='lazy']");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          const img = en.target; img.src = img.dataset.src || img.src; io.unobserve(img);
        }
      });
    });
    images.forEach((img) => io.observe(img));
  }
}

// ============================================
// INIT
// ============================================
document.addEventListener("DOMContentLoaded", () => {
  initLanguageSwitcher();
  initHrChat();
  initContactForm();
  initPricingToggle();
  initAccessibility();
  initLazyLoading();
});

// Smooth scroll for anchors
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const href = a.getAttribute("href"); 
    if (href !== "#" && document.querySelector(href)) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior:"smooth" });
    }
  });
});
