/* ==================================================
   Easycheck Frontend — script.js
   ================================================== */

// --------------------------------------------------
// I18N — usa o teu "translations" se já existir
// --------------------------------------------------
if (typeof window.translations === "undefined") {
  window.translations = {
    en: { nav:{home:"Home",features:"Features",pricing:"Pricing",contact:"Contact",signin:"Sign in"},
      hero:{badge:"Trusted by 500+ European SMEs",title:"All-in-One AI Back-Office Suite",subtitle:"Automate accounting, HR, marketing, and security. Focus on growth, not paperwork."},
      cta:{start_free:"Start Free Trial",learn_more:"Learn More About Features",get_started:"Get Started",view_full_pricing:"View Full Pricing",ready:"Ready to Transform Your Back-Office?",ready_desc:"Start your free trial today. No credit card required."},
      footer:{tagline:"AI-powered back-office for modern SMEs."}
    },
    pt: { nav:{home:"Início",features:"Funcionalidades",pricing:"Preços",contact:"Contato",signin:"Entrar"},
      hero:{badge:"Confiado por mais de 500 PMEs europeus",title:"Suite AI All-in-One para Back-Office",subtitle:"Automatize contabilidade, RH, marketing e segurança. Foque no crescimento, não na papelada."},
      cta:{start_free:"Iniciar Avaliação Gratuita",learn_more:"Saiba Mais Sobre Funcionalidades",get_started:"Começar",view_full_pricing:"Ver Preços Completos",ready:"Pronto para Transformar o Back-Office?",ready_desc:"Comece a avaliação gratuita hoje. Sem cartão de crédito."},
      footer:{tagline:"Suite de back-office alimentada por IA para PMEs modernas."}
    },
    fr: { nav:{home:"Accueil",features:"Fonctionnalités",pricing:"Tarification",contact:"Contact",signin:"Se connecter"},
      hero:{badge:"Approuvé par plus de 500 PME européennes",title:"Suite IA All-in-One pour Back-Office",subtitle:"Automatisez comptabilité, RH, marketing et sécurité. Concentrez-vous sur la croissance."},
      cta:{start_free:"Commencer l'Essai Gratuit",learn_more:"En savoir plus",view_full_pricing:"Voir la Tarification Complète",ready_desc:"Commencez votre essai gratuit aujourd'hui."},
      footer:{tagline:"Suite de back-office alimentée par l'IA pour les PME modernes."}
    },
    de: { nav:{home:"Startseite",features:"Funktionen",pricing:"Preise",contact:"Kontakt",signin:"Anmelden"},
      hero:{badge:"Vertraut von über 500 europäischen KMUs",title:"All-in-One KI Back-Office-Suite",subtitle:"Automatisieren Sie Buchhaltung, HR, Marketing und Sicherheit."},
      cta:{start_free:"Kostenlose Testversion starten",learn_more:"Mehr über Funktionen",view_full_pricing:"Preise anzeigen",ready_desc:"Starten Sie Ihre kostenlose Testversion heute."},
      footer:{tagline:"KI-gestützte Back-Office-Suite für moderne KMUs."}
    }
  };
}

let currentLanguage = localStorage.getItem("easycheck-lang") || "pt";

function initLanguageSwitcher() {
  const btns = document.querySelectorAll(".lang-btn");
  setLanguage(currentLanguage);
  btns.forEach((b) =>
    b.addEventListener("click", () => setLanguage(b.getAttribute("data-lang")))
  );
}

function setLanguage(lang) {
  if (!translations[lang]) lang = "en";
  currentLanguage = lang;
  localStorage.setItem("easycheck-lang", lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = "ltr";

  document.querySelectorAll(".lang-btn").forEach((b) => {
    b.classList.toggle("active", b.getAttribute("data-lang") === lang);
  });

  updateTranslations();
}

function updateTranslations() {
  // Texto simples
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const text = getTranslation(key);
    if (typeof text === "string") el.textContent = text;
  });

  // Atributos (placeholder/title/aria-label), se existirem
  document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    const attr = el.getAttribute("data-i18n-attr"); // ex: "placeholder"
    const key = el.getAttribute("data-i18n");
    const text = getTranslation(key);
    if (text && attr) el.setAttribute(attr, text);
  });
}

function getTranslation(key) {
  const path = key.split(".");
  let node = translations[currentLanguage];
  for (const k of path) {
    if (node && typeof node === "object" && k in node) node = node[k];
    else return null;
  }
  return node;
}

// --------------------------------------------------
// UI básica
// --------------------------------------------------
function initMobileNav() {
  const hamburger = document.getElementById("hamburger");
  const nav = document.querySelector(".nav");
  if (!hamburger || !nav) return;
  hamburger.addEventListener("click", () => {
    const open = nav.classList.toggle("active");
    hamburger.setAttribute("aria-expanded", open ? "true" : "false");
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href");
      if (href !== "#" && document.querySelector(href)) {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

function initLazyLoading() {
  if (!("IntersectionObserver" in window)) return;
  const imgs = document.querySelectorAll("img[loading='lazy']");
  const obs = new IntersectionObserver((entries, o) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        const img = en.target;
        img.src = img.dataset.src || img.src;
        o.unobserve(img);
      }
    });
  });
  imgs.forEach((i) => obs.observe(i));
}

// --------------------------------------------------
// Formulários / Pricing
// --------------------------------------------------
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Obrigado! Vamos responder em breve.");
    form.reset();
  });
}

function initPricingToggle() {
  const toggles = document.querySelectorAll(".toggle-btn");
  if (!toggles.length) return;
  toggles.forEach((btn) =>
    btn.addEventListener("click", () => {
      toggles.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const period = btn.getAttribute("data-period"); // "monthly" | "annual"
      document.body.dataset.pricing = period;
      // Se quiseres, aqui podes alterar valores no DOM com base no período
    })
  );
}

// --------------------------------------------------
// Autenticação mínima + gate de IA
// --------------------------------------------------
function isAuthed() {
  return localStorage.getItem("easycheck-auth") === "true";
}

function initAuthUI() {
  const loginBtn = document.getElementById("loginBtn");
  const aiBtn = document.getElementById("openAIapp");

  if (loginBtn) {
    loginBtn.addEventListener("click", (e) => {
      e.preventDefault();
      // Se tiveres login.html: redireciona
      window.location.href = "/login.html";
    });
  }

  if (aiBtn) {
    const refresh = () => {
      const authed = isAuthed();
      aiBtn.disabled = !authed;
      aiBtn.title = authed ? "Abrir Workspace" : "Faz login para usar IA";
      aiBtn.onclick = () => {
        if (!isAuthed()) window.location.href = "/login.html";
        else window.location.href = "/app/index.html";
      };
    };
    refresh();
  }
}

// --------------------------------------------------
// Chat RH (só funciona logado) + fallback local
// --------------------------------------------------
const API_BASE = window.EASYCHECK_API_BASE || null;
let hrThreadId = localStorage.getItem("easycheck-hr-thread") || null;

async function sendAI(message, context = "hr") {
  if (API_BASE) {
    try {
      const res = await fetch(`${API_BASE}/ai/${context}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message, thread_id: hrThreadId, lang: currentLanguage })
      });
      if (!res.ok) throw new Error("HTTP " + res.status);
      const data = await res.json();
      if (data.thread_id && data.thread_id !== hrThreadId) {
        hrThreadId = data.thread_id;
        localStorage.setItem("easycheck-hr-thread", hrThreadId);
      }
      return data.reply || "(sem resposta)";
    } catch (e) {
      console.warn("Backend indisponível, a usar fallback local.", e);
    }
  }
  return localFallbackAI(message);
}

function localFallbackAI(msg) {
  const m = String(msg || "").toLowerCase();
  if (m.includes("vaga") || m.includes("job") || m.includes("anúncio")) {
    return `**Anúncio de Vaga (Exemplo)**

Título: Assistente de Marketing Júnior
Local: Híbrido, Luxemburgo
Responsabilidades:
• Apoiar campanhas digitais (Meta/Google)
• Criar posts e newsletters
• Reportar KPIs semanais

Requisitos:
• PT/EN (FR/DE plus)
• Noções de Excel/Sheets
• Boa escrita e organização

Candidatura: envia CV + portfólio para hr@easycheck.app`;
  }
  if (m.includes("onboarding") || m.includes("primeiro mês")) {
    return `Plano de Onboarding (30 dias)
Dia 1-2: Boas-vindas, acessos e políticas
Semana 1: Shadowing, processos, metas
Semana 2: Primeira tarefa + mentoria
Semana 3: Tarefa média + mini-projeto
Semana 4: Avaliação + objetivos do trimestre`;
  }
  if (m.includes("resumo") || m.includes("resume") || m.includes("summar")) {
    return "Resumo: " + (msg.length > 200 ? msg.slice(0, 200) + "…" : msg);
  }
  return "Entendido. Posso gerar anúncio de vaga, plano de onboarding, extrair competências ou resumir texto.";
}

function initHrChat() {
  const win = document.getElementById("chatWindow");
  const input = document.getElementById("chatInput");
  const send = document.getElementById("sendBtn");
  const status = document.getElementById("chatStatus");

  if (!win || !input || !send) return;

  if (!isAuthed()) {
    win.innerHTML = `<div class="msg ai"><div class="bubble">Faz login para usar a IA (vai para /login.html).</div></div>`;
    input.disabled = true;
    send.disabled = true;
    if (status) status.textContent = "Login necessário.";
    return;
  }

  const push = (role, text) => {
    const div = document.createElement("div");
    div.className = `msg ${role}`;
    const bubble = document.createElement("div");
    bubble.className = "bubble";
    bubble.textContent = text;
    div.appendChild(bubble);
    win.appendChild(div);
    win.scrollTop = win.scrollHeight;
  };

  const busy = (b) => {
    if (status) status.textContent = b ? "A pensar…" : "Pronto.";
    send.disabled = b;
    input.disabled = b;
  };

  send.addEventListener("click", async () => {
    const text = input.value.trim();
    if (!text) return;
    push("user", text);
    input.value = "";
    busy(true);
    try {
      const reply = await sendAI(text, "hr");
      push("ai", reply);
    } catch (e) {
      push("ai", "Erro. Tenta novamente.");
    } finally {
      busy(false);
    }
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") send.click();
  });
}

// --------------------------------------------------
// Acessibilidade
// --------------------------------------------------
function initAccessibility() {
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const nav = document.querySelector(".nav");
      if (nav && nav.classList.contains("active")) {
        nav.classList.remove("active");
        const hamburger = document.getElementById("hamburger");
        if (hamburger) hamburger.setAttribute("aria-expanded", "false");
      }
    }
  });

  // Realce de foco visível
  document.querySelectorAll("a, button, input, select, textarea").forEach((el) => {
    el.addEventListener("focus", () => (el.style.outline = "2px solid var(--brand)"));
    el.addEventListener("blur", () => (el.style.outline = "none"));
  });
}

// --------------------------------------------------
// Inicialização
// --------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  console.log("[Easycheck] init…");
  initLanguageSwitcher();
  initMobileNav();
  initSmoothScroll();
  initLazyLoading();
  initContactForm();
  initPricingToggle();
  initAuthUI();
  initHrChat();
  initAccessibility();
  console.log("[Easycheck] ready.");
});
