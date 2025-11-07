/* ==================================================
   Easycheck Frontend — App Script
   - i18n (EN/PT/FR/DE)
   - Auth gate (AI só após login)
   - HR AI chat (frontend; chama backend se existir,
     senão usa fallback local para funcionar)
   ================================================== */

// >>>>>>>>>> CONFIG DA TUA API (opcional) <<<<<<<<<<
// Define isto em QUALQUER página antes do script.js
//   <script>window.EASYCHECK_API_BASE = "https://teu-render.onrender.com";</script>
const API_BASE = window.EASYCHECK_API_BASE || null;

/* ---- i18n ---- */
const translations = {
  en: {
    nav: { home: "Home", features: "Features", pricing: "Pricing", contact: "Contact", signin: "Sign in" },
    hero: {
      badge: "Trusted by 500+ European SMEs",
      title: "All-in-One AI Back-Office Suite",
      subtitle: "Automate accounting, HR, marketing, and security. Focus on growth, not paperwork.",
    },
    cta: {
      start_free: "Start Free Trial",
      learn_more: "Learn More About Features",
      get_started: "Get Started",
      view_full_pricing: "View Full Pricing",
      ready: "Ready to Transform Your Back-Office?",
      ready_desc: "Start your free trial today. No credit card required.",
      title: "Ready to Transform Your Back-Office?",
      description: "Join hundreds of European SMEs already using Easycheck.",
    },
    trust: { title: "Trusted by European SMEs" },
    footer: {
      tagline: "AI-powered back-office for modern SMEs.",
      product: "Product", company: "Company", legal: "Legal",
      privacy: "Privacy Policy", terms: "Terms of Service",
      copyright: "© 2025 Easycheck. All rights reserved."
    }
  },
  pt: {
    nav: { home: "Início", features: "Funcionalidades", pricing: "Preços", contact: "Contato", signin: "Entrar" },
    hero: {
      badge: "Confiado por mais de 500 PMEs europeus",
      title: "Suite AI All-in-One para Back-Office",
      subtitle: "Automatize contabilidade, RH, marketing e segurança. Foque no crescimento, não na papelada.",
    },
    cta: {
      start_free: "Iniciar Avaliação Gratuita",
      learn_more: "Saiba Mais Sobre Funcionalidades",
      get_started: "Começar",
      view_full_pricing: "Ver Preços Completos",
      ready: "Pronto para Transformar o Back-Office?",
      ready_desc: "Comece a avaliação gratuita hoje. Sem cartão de crédito.",
      title: "Pronto para Transformar o Teu Back-Office?",
      description: "Junta-te a centenas de PMEs europeias que usam Easycheck.",
    },
    trust: { title: "Confiado por PMEs Europeus" },
    footer: {
      tagline: "Suite de back-office alimentada por IA para PMEs modernas.",
      product: "Produto", company: "Empresa", legal: "Legal",
      privacy: "Política de Privacidade", terms: "Termos de Serviço",
      copyright: "© 2025 Easycheck. Todos os direitos reservados."
    }
  },
  fr: {
    nav: { home: "Accueil", features: "Fonctionnalités", pricing: "Tarification", contact: "Contact", signin: "Se connecter" },
    hero: {
      badge: "Approuvé par plus de 500 PME européennes",
      title: "Suite IA All-in-One pour Back-Office",
      subtitle: "Automatisez comptabilité, RH, marketing et sécurité. Concentrez-vous sur la croissance.",
    },
    cta: {
      start_free: "Commencer l'Essai Gratuit",
      learn_more: "En savoir plus",
      get_started: "Commencer",
      view_full_pricing: "Voir la Tarification Complète",
      ready: "Prêt à transformer votre back-office ?",
      ready_desc: "Démarrez votre essai gratuit aujourd'hui.",
      title: "Prêt à Transformer Votre Back-Office ?",
      description: "Rejoignez des centaines de PME européennes.",
    },
    trust: { title: "Approuvé par les PME Européennes" },
    footer: {
      tagline: "Suite de back-office alimentée par l'IA pour les PME modernes.",
      product: "Produit", company: "Entreprise", legal: "Juridique",
      privacy: "Politique de Confidentialité", terms: "Conditions de Service",
      copyright: "© 2025 Easycheck. Tous droits réservés."
    }
  },
  de: {
    nav: { home: "Startseite", features: "Funktionen", pricing: "Preise", contact: "Kontakt", signin: "Anmelden" },
    hero: {
      badge: "Vertraut von über 500 europäischen KMUs",
      title: "All-in-One KI Back-Office-Suite",
      subtitle: "Automatisieren Sie Buchhaltung, HR, Marketing und Sicherheit.",
    },
    cta: {
      start_free: "Kostenlose Testversion starten",
      learn_more: "Mehr über Funktionen",
      get_started: "Loslegen",
      view_full_pricing: "Preise anzeigen",
      ready: "Bereit, Ihr Back-Office zu transformieren?",
      ready_desc: "Starten Sie Ihre kostenlose Testversion heute.",
      title: "Bereit, Ihr Back-Office zu transformieren?",
      description: "Schließen Sie sich hunderten KMUs an.",
    },
    trust: { title: "Vertraut von europäischen KMUs" },
    footer: {
      tagline: "KI-gestützte Back-Office-Suite für moderne KMUs.",
      product: "Produkt", company: "Unternehmen", legal: "Rechtliches",
      privacy: "Datenschutzerklärung", terms: "Nutzungsbedingungen",
      copyright: "© 2025 Easycheck. Alle Rechte vorbehalten."
    }
  }
};

let currentLanguage = localStorage.getItem("easycheck-lang") || "pt";

/* ---- Language ---- */
function initLanguageSwitcher() {
  const btns = document.querySelectorAll(".lang-btn");
  setLanguage(currentLanguage);
  btns.forEach(b => b.addEventListener("click", () => setLanguage(b.dataset.lang)));
}
function setLanguage(lang) {
  if (!translations[lang]) lang = "en";
  currentLanguage = lang; localStorage.setItem("easycheck-lang", lang);
  document.documentElement.lang = lang; document.documentElement.dir = "ltr";
  document.querySelectorAll(".lang-btn").forEach(b => b.classList.toggle("active", b.dataset.lang===lang));
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    const t = key.split(".").reduce((a,k)=>a?.[k], translations[lang]);
    if (t) el.textContent = t;
  });
}

/* ---- Nav mobile ---- */
function initMobileNav() {
  const hamburger = document.getElementById("hamburger");
  const nav = document.querySelector(".nav");
  if (!hamburger || !nav) return;
  hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
    hamburger.setAttribute("aria-expanded", nav.classList.contains("active"));
  });
}

/* ---- Auth (demo) ---- */
function isAuthed() { return localStorage.getItem("easycheck-auth")==="true"; }
function requireAuthOrRedirect() {
  if (!isAuthed()) window.location.href = "../login.html";
}
function initLogin() {
  const btn = document.getElementById("loginBtn");
  const dialog = document.getElementById("loginModal");
  const confirm = document.getElementById("confirmLogin");
  const aiBtn = document.getElementById("openAIapp");

  function refreshUI() {
    if (aiBtn) {
      aiBtn.disabled = !isAuthed();
      if (isAuthed()) {
        aiBtn.title = "Open AI Workspace";
        aiBtn.onclick = () => window.location.href = "app/index.html";
        if (btn) btn.textContent = "Account";
      }
    }
  }

  if (btn && dialog && confirm) {
    btn.addEventListener("click", e => { e.preventDefault(); dialog.showModal(); });
    confirm.addEventListener("click", () => {
      localStorage.setItem("easycheck-auth","true");
      dialog.close();
      refreshUI();
    });
  }
  refreshUI();
}

/* ---- HR Chat (App) ---- */
let hrThreadId = localStorage.getItem("easycheck-hr-thread") || null;

async function sendAI(message, context = "hr") {
  // Backend disponível?
  if (API_BASE) {
    try {
      const res = await fetch(`${API_BASE}/ai/${context}/chat`, {
        method:"POST",
        headers:{ "Content-Type":"application/json" },
        body: JSON.stringify({ message, thread_id: hrThreadId, lang: currentLanguage })
      });
      if (!res.ok) throw new Error("HTTP "+res.status);
      const data = await res.json(); // { reply, thread_id }
      if (data.thread_id && data.thread_id !== hrThreadId) {
        hrThreadId = data.thread_id;
        localStorage.setItem("easycheck-hr-thread", hrThreadId);
      }
      return data.reply || "(no reply)";
    } catch (e) {
      console.warn("Backend falhou, a usar fallback local:", e);
    }
  }
  // Fallback local (funciona sem backend)
  return localFallbackAI(message);
}

function localFallbackAI(msg){
  const m = msg.toLowerCase();
  if (m.includes("anúncio") || m.includes("vaga") || m.includes("job")) {
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
Dia 1-2: Boas-vindas, acesso às ferramentas, políticas.
Semana 1: Shadowing, overview de processos, metas da sprint.
Semana 2: Primeira tarefa com mentoria, feedback 1:1.
Semana 3: Tarefa de média complexidade; mini-projeto.
Semana 4: Avaliação, objetivos do trimestre, plano de crescimento.`;
  }
  if (m.includes("resumo") || m.includes("resume") || m.includes("summar")) {
    return "Resumo: " + (msg.length > 200 ? (msg.slice(0,200) + "…") : msg);
  }
  return "Entendido. Podes ser mais específico? Posso gerar anúncio de vaga, plano de onboarding, extrair competências de um texto ou resumir conteúdo.";
}

function initHrChat() {
  const win = document.getElementById("chatWindow");
  const input = document.getElementById("chatInput");
  const send = document.getElementById("sendBtn");
  const status = document.getElementById("chatStatus");
  if (!win || !input || !send) return;

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

  const setBusy = (b) => {
    if (!status) return;
    status.textContent = b ? "A pensar…" : "Pronto.";
    send.disabled = b; input.disabled = b;
  };

  send.addEventListener("click", async () => {
    const text = input.value.trim();
    if (!text) return;
    push("user", text);
    input.value=""; setBusy(true);
    try {
      const reply = await sendAI(text, "hr");
      push("ai", reply);
    } catch (e) {
      push("ai", "Erro. Tenta novamente.");
    } finally {
      setBusy(false);
    }
  });
  input.addEventListener("keydown", e => { if (e.key==="Enter") send.click(); });
}

/* ---- INIT ---- */
document.addEventListener("DOMContentLoaded", () => {
  initLanguageSwitcher();
  initMobileNav();
  initLogin();           // ativa modal demo + bloqueio da IA
  initHrChat();          // ativa chat quando existir na página
});
