// ============================================
// INTERNATIONALIZATION (i18n)
// ============================================

const translations = {
  en: {
    nav: {
      home: "Home",
      features: "Features",
      pricing: "Pricing",
      contact: "Contact",
      signin: "Sign in",
    },
    hero: {
      badge: "Trusted by 500+ European SMEs",
      title: "All-in-One AI Back-Office Suite",
      subtitle: "Automate accounting, HR, marketing, and security. Focus on growth, not paperwork.",
    },
    cta: {
      startfree: "Start Free →",
      demo: "Watch Demo",
      title: "Ready to Transform Your Back-Office?",
      description: "Join hundreds of European SMEs already using Easycheck.",
      contact: "Contact Sales",
      start: "Start Free Trial",
      start_free: "Start Free Trial",
      learn_more: "Learn More About Features",
      get_started: "Get Started",
      view_full_pricing: "View Full Pricing",
      ready: "Ready to Transform Your Back-Office?",
      ready_desc: "Start your free trial today. No credit card required.",
      demo: "Watch Demo",
    },
    trust: {
      title: "Trusted by European SMEs",
    },
    benefits: {
      title: "Why Choose Easycheck?",
      accounting: {
        title: "Accounting",
        desc: "Invoices, credit notes, quotes, POs, VAT/TVA, and balance sheets — all automated.",
      },
      hr: {
        title: "AI-Powered HR",
        desc: "CV parsing, structured extraction, multilingual ranking with built-in bias checks.",
      },
      email: {
        title: "Email & Meetings AI",
        desc: "Intelligent assistant for email management and meeting summaries.",
      },
      security: {
        title: "GDPR Compliant",
        desc: "Enterprise security with GDPR compliance and data protection built-in.",
      },
      marketing: {
        title: "Marketing Automation",
        desc: "Automate campaigns and nurture leads with AI-driven insights.",
      },
      translation: {
        title: "Multi-Language Support",
        desc: "Real-time translations across your entire business operations.",
      },
    },
    features: {
      overview: "Why Choose Easycheck?",
      accounting: "Accounting Automation",
      accounting_desc: "Invoices, VAT, balance sheets, and more.",
      email_ai: "Email & Meetings AI",
      email_ai_desc: "AI assistant for your communications.",
      hr: "Advanced HR",
      hr_desc: "CV parsing, multilingual ranking.",
      marketing: "Marketing Automation",
      marketing_desc: "Campaign management simplified.",
      translations: "Multi-Language Support",
      translations_desc: "Reach customers globally.",
      security: "GDPR Compliant & Secure",
      security_desc: "Enterprise-grade security standards.",
      pageTitle: "Powerful Features for Modern Business",
      pageSubtitle: "Everything you need to run your back-office efficiently.",
      accounting: {
        title: "Accounting Module",
        intro: "Complete accounting management with full GDPR compliance.",
        invoices: "✓ Professional invoices generation",
        creditnotes: "✓ Credit notes management",
        quotes: "✓ Automated quote/devis creation",
        pos: "✓ Purchase orders (bon de commande)",
        vat: "✓ VAT/TVA calculation and reporting",
        balance: "✓ Balance sheets (bilan) export",
      },
      hr: {
        title: "Advanced HR & Recruitment",
        intro: "AI-powered recruitment with bias-free candidate evaluation.",
        parsing: "✓ Intelligent CV parsing",
        extraction: "✓ Structured data extraction",
        multilingual: "✓ Multilingual candidate ranking",
        bias: "✓ Built-in bias detection",
        fairness: "✓ Fair evaluation workflows",
        integration: "✓ Applicant tracking system",
      },
      email: {
        title: "Email & Meetings AI Assistant",
        intro: "Your intelligent companion for communication management.",
        smart: "✓ Smart email categorization",
        compose: "✓ AI-assisted email composition",
        summary: "✓ Meeting transcription & summaries",
        actions: "✓ Automatic action item extraction",
        scheduling: "✓ Smart scheduling assistant",
        compliance: "✓ Email compliance checks",
      },
      marketing: {
        title: "Marketing Automation",
        intro: "Grow your business with intelligent campaign automation.",
        workflows: "✓ Advanced workflow automation",
        segmentation: "✓ Dynamic audience segmentation",
        analytics: "✓ Real-time campaign analytics",
        personalization: "✓ AI-driven personalization",
        integration: "✓ Multi-channel integration",
        tracking: "✓ Advanced lead tracking",
      },
      security: {
        title: "Security & Compliance",
        intro: "Enterprise-grade security with full GDPR compliance.",
        gdpr: "✓ Full GDPR compliance",
        encryption: "✓ End-to-end encryption",
        audit: "✓ Audit logs & trails",
        sso: "✓ Single Sign-On (SSO)",
        mfa: "✓ Multi-factor authentication",
        compliance: "✓ SOC 2 Type II certified",
      },
      dashboard: {
        title: "Smart Dashboard & Analytics",
        intro: "Real-time insights into your business performance.",
        kpi: "✓ Custom KPI tracking",
        reports: "✓ Automated reporting",
        visualization: "✓ Advanced data visualization",
        predictions: "✓ AI-powered forecasting",
        alerts: "✓ Smart alerts & notifications",
        export: "✓ Export to multiple formats",
      },
    },
    pricing: {
      title: "Simple, Transparent Pricing",
      subtitle: "Choose the plan that fits your business.",
      monthly: "Monthly",
      annual: "Annual",
      save: "Save 20%",
      included: "Included:",
      starter: "Starter",
      professional: "Professional",
      enterprise: "Enterprise",
      custom: "Custom",
      popular: "Most Popular",
      starter_price: "49",
      professional_price: "149",
      up_to: "Up to",
      unlimited_users: "Unlimited users",
      basic_accounting: "Basic accounting",
      full_accounting: "Full accounting suite",
      ai_assistant: "AI assistant",
      advanced_hr: "Advanced HR tools",
      marketing_automation: "Marketing automation",
      dedicated_support: "Dedicated support",
      api_access: "API access",
      sso: "SSO integration",
      custom_features: "Custom features",
      pageTitle: "Simple, Transparent Pricing",
      pageSubtitle: "Choose the plan that fits your business needs.",
      monthly: "Monthly",
      annual: "Annual",
      save: "Save 20%",
      included: "Included:",
      starter: {
        title: "Starter",
        desc: "Perfect for solopreneurs and small teams",
        f1: "✓ Basic accounting module",
        f2: "✓ Up to 100 invoices/month",
        f3: "✓ Email support",
        f4: "✓ 1 user account",
        f5: "✓ 5GB storage",
      },
      professional: {
        title: "Professional",
        desc: "For growing SMEs with advanced needs",
      },
      pro: {
        f1: "✓ Full accounting suite",
        f2: "✓ Unlimited invoices",
        f3: "✓ HR & recruitment AI",
        f4: "✓ Email & meetings AI assistant",
        f5: "✓ Up to 5 user accounts",
        f6: "✓ 100GB storage",
        f7: "✓ Priority support",
      },
      enterprise: {
        title: "Enterprise",
        desc: "Complete solution for large organizations",
      },
      ent: {
        f1: "✓ All Professional features",
        f2: "✓ Marketing automation",
        f3: "✓ Advanced analytics",
        f4: "✓ Unlimited user accounts",
        f5: "✓ Unlimited storage",
        f6: "✓ Dedicated account manager",
        f7: "✓ Custom integrations",
      },
      custom: "Custom pricing",
      popular: "Most Popular",
      faq: "Frequently Asked Questions",
      faq1: {
        q: "Can I change plans anytime?",
        a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.",
      },
      faq2: {
        q: "Is there a free trial?",
        a: "Yes, all plans come with a 14-day free trial. No credit card required.",
      },
      faq3: {
        q: "What about onboarding?",
        a: "We provide comprehensive onboarding for all plans, including video tutorials and live support.",
      },
      faq4: {
        q: "Do you offer discounts for annual billing?",
        a: "Yes, save 20% when you choose annual billing instead of monthly.",
      },
    },
    contact: {
      pageTitle: "Get in Touch",
      pageSubtitle: "We'd love to hear from you. Send us a message.",
      name: "Name",
      email: "Email",
      company: "Company",
      subject: "Subject",
      selectSubject: "Select a subject",
      sales: "Sales Inquiry",
      support: "Support",
      partnership: "Partnership",
      other: "Other",
      message: "Message",
      send: "Send Message",
      contact_us: "Contact Sales",
      info: "Contact Information",
      email_label: "Email",
      phone_label: "Phone",
      address_label: "Address",
      hours_label: "Business Hours",
      hours: "Monday - Friday: 9:00 AM - 6:00 PM CET",
      social_label: "Follow Us",
      chatHint: "Chat widget will be integrated here",
    },
    privacy: {
      title: "Privacy Policy",
      updated: "Last updated: November 2025",
      intro: {
        title: "Introduction",
        text: "At Easycheck, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.",
      },
      collection: {
        title: "Information We Collect",
        intro: "We collect information in various ways:",
        personal: "Personal information you voluntarily provide through forms",
        usage: "Usage data collected automatically",
        cookies: "Information from cookies and similar tracking technologies",
        payment: "Payment and billing information when you purchase our services",
      },
      use: {
        title: "How We Use Your Information",
        intro: "We use the information we collect for:",
        service: "Providing and improving our services",
        communicate: "Communicating with you about updates and offers",
        compliance: "Complying with legal obligations and GDPR requirements",
        security: "Ensuring security and preventing fraud",
      },
      gdpr: {
        title: "GDPR Compliance",
        text: "We comply fully with the General Data Protection Regulation (GDPR).",
      },
      sharing: {
        title: "Data Sharing",
        text: "We do not sell your personal data to third parties.",
      },
      security: {
        title: "Data Security",
        text: "We implement advanced security measures including end-to-end encryption.",
      },
      retention: {
        title: "Data Retention",
        text: "We retain your data only as long as necessary for the purposes outlined in this policy.",
      },
      cookies: {
        title: "Cookies",
        text: "Our website uses cookies to enhance your experience.",
      },
      contact: {
        title: "Contact Us",
        text: "For privacy inquiries, contact us at privacy@easycheck.app",
      },
    },
    terms: {
      title: "Terms of Service",
      updated: "Last updated: November 2025",
      agreement: {
        title: "Agreement to Terms",
        text: "By accessing and using the Easycheck website and services, you accept and agree to be bound by the terms and provision of this agreement.",
      },
      use: {
        title: "Use License",
        text: "Permission is granted to temporarily download one copy of the materials for personal, non-commercial transitory viewing only.",
        modify: "Modify or copy the materials",
        commercial: "Use the materials for any commercial purpose",
        reverse: "Attempt to reverse engineer, disassemble, or decompile any software",
        remove: "Remove any copyright or other proprietary notations",
      },
      disclaimer: {
        title: "Disclaimer",
        text: "The materials on Easycheck's website are provided on an 'as is' basis.",
      },
      limitations: {
        title: "Limitations",
        text: "In no event shall Easycheck or its suppliers be liable for any damages.",
      },
      accuracy: {
        title: "Accuracy of Materials",
        text: "The materials appearing on Easycheck's website could include technical errors.",
      },
      modifications: {
        title: "Modifications",
        text: "Easycheck may revise the materials contained on its website at any time without notice.",
      },
      links: {
        title: "Links",
        text: "Easycheck has not reviewed all of the sites linked to its website.",
      },
      modifications_service: {
        title: "Modifications to Terms",
        text: "Easycheck may revise these terms of service at any time without notice.",
      },
      law: {
        title: "Governing Law",
        text: "These terms and conditions are governed by the laws of France.",
      },
      contact: {
        title: "Contact Information",
        text: "If you have any questions, please contact us at legal@easycheck.app",
      },
    },
    footer: {
      tagline: "AI-powered back-office for modern SMEs.",
      product: "Product",
      company: "Company",
      legal: "Legal",
      roadmap: "Roadmap",
      blog: "Blog",
      careers: "Careers",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      cookies: "Cookie Policy",
      copyright: "© 2025 Easycheck. All rights reserved.",
      company: "Company",
      legal: "Legal",
      followus: "Follow Us",
      features: "Features",
      pricing: "Pricing",
      api: "API Docs",
      about: "About",
      contact: "Contact",
      blog: "Blog",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      cookies: "Cookie Settings",
      rights: "All rights reserved.",
    },
  },
  pt: {
    nav: {
      home: "Início",
      features: "Funcionalidades",
      pricing: "Preços",
      contact: "Contato",
      signin: "Entrar",
    },
    hero: {
      badge: "Confiado por mais de 500 PMEs europeus",
      title: "Suite AI All-in-One para Back-Office",
      subtitle:
        "Automatize contabilidade, RH, marketing e segurança. Foque no crescimento, não no trabalho administrativo.",
    },
    cta: {
      startfree: "Comece Grátis →",
      demo: "Ver Demo",
      title: "Pronto para Transformar Seu Back-Office?",
      description: "Junte-se a centenas de PMEs europeus que já usam Easycheck.",
      contact: "Contate Vendas",
      start: "Iniciar Avaliação Gratuita",
      start_free: "Iniciar Avaliação Gratuita",
      learn_more: "Saiba Mais Sobre Funcionalidades",
      get_started: "Começar",
      view_full_pricing: "Ver Preços Completos",
      ready: "Pronto para Transformar Seu Back-Office?",
      ready_desc: "Comece sua avaliação gratuita hoje. Sem cartão de crédito necessário.",
    },
    trust: {
      title: "Confiado por PMEs Europeus",
    },
    benefits: {
      title: "Por Que Escolher Easycheck?",
      accounting: {
        title: "Contabilidade",
        desc: "Faturas, notas de crédito, orçamentos, pedidos, IVA e balanços — tudo automatizado.",
      },
      hr: {
        title: "RH Alimentado por IA",
        desc: "Análise de CV, extração estruturada, ranking multilíngue com verificações de viés.",
      },
      email: {
        title: "Assistente de IA para Email e Reuniões",
        desc: "Assistente inteligente para gerenciamento de email e resumos de reuniões.",
      },
      security: {
        title: "Compatível com GDPR",
        desc: "Segurança corporativa com conformidade GDPR e proteção de dados integrada.",
      },
      marketing: {
        title: "Automação de Marketing",
        desc: "Automatize campanhas e nutra leads com insights orientados por IA.",
      },
      translation: {
        title: "Suporte Multilíngue",
        desc: "Traduções em tempo real em todas as operações comerciais.",
      },
    },
    features: {
      overview: "Por Que Escolher Easycheck?",
      accounting: "Automação de Contabilidade",
      accounting_desc: "Faturas, IVA, balanços e muito mais.",
      email_ai: "IA para Email e Reuniões",
      email_ai_desc: "Assistente IA para suas comunicações.",
      hr: "RH Avançado",
      hr_desc: "Análise de CV, ranking multilíngue.",
      marketing: "Automação de Marketing",
      marketing_desc: "Gerenciamento de campanhas simplificado.",
      translations: "Suporte Multilíngue",
      translations_desc: "Alcance clientes globalmente.",
      security: "Compatível com GDPR e Seguro",
      security_desc: "Padrões de segurança de nível empresarial.",
      pageTitle: "Funcionalidades Poderosas para Negócios Modernos",
      pageSubtitle: "Tudo o que você precisa para gerenciar seu back-office com eficiência.",
      accounting: {
        title: "Módulo de Contabilidade",
        intro: "Gerenciamento completo de contabilidade com conformidade GDPR total.",
        invoices: "✓ Geração de faturas profissionais",
        creditnotes: "✓ Gerenciamento de notas de crédito",
        quotes: "✓ Criação automatizada de orçamentos",
        pos: "✓ Pedidos de compra",
        vat: "✓ Cálculo e relatório de IVA",
        balance: "✓ Exportação de balanços",
      },
      hr: {
        title: "RH Avançado e Recrutamento",
        intro: "Recrutamento orientado por IA com avaliação isenta de viés.",
        parsing: "✓ Análise inteligente de CV",
        extraction: "✓ Extração de dados estruturados",
        multilingual: "✓ Ranking multilíngue de candidatos",
        bias: "✓ Detecção de viés integrada",
        fairness: "✓ Fluxos de trabalho justos",
        integration: "✓ Sistema de rastreamento de candidatos",
      },
      email: {
        title: "Assistente de IA para Email e Reuniões",
        intro: "Seu companheiro inteligente para gerenciamento de comunicações.",
        smart: "✓ Categorização inteligente de email",
        compose: "✓ Composição de email com IA",
        summary: "✓ Transcrição e resumos de reuniões",
        actions: "✓ Extração automática de itens de ação",
        scheduling: "✓ Assistente de agendamento inteligente",
        compliance: "✓ Verificações de conformidade de email",
      },
      marketing: {
        title: "Automação de Marketing",
        intro: "Cresça seu negócio com automação de campanhas inteligente.",
        workflows: "✓ Automação avançada de fluxos de trabalho",
        segmentation: "✓ Segmentação dinâmica de público",
        analytics: "✓ Análise de campanha em tempo real",
        personalization: "✓ Personalização orientada por IA",
        integration: "✓ Integração multicanal",
        tracking: "✓ Rastreamento avançado de leads",
      },
      security: {
        title: "Segurança e Conformidade",
        intro: "Segurança de nível corporativo com conformidade GDPR completa.",
        gdpr: "✓ Conformidade GDPR total",
        encryption: "✓ Criptografia ponta a ponta",
        audit: "✓ Logs e trilhas de auditoria",
        sso: "✓ Single Sign-On (SSO)",
        mfa: "✓ Autenticação multifator",
        compliance: "✓ Certificado SOC 2 Type II",
      },
      dashboard: {
        title: "Dashboard Inteligente e Análises",
        intro: "Insights em tempo real sobre o desempenho do seu negócio.",
        kpi: "✓ Rastreamento customizado de KPI",
        reports: "✓ Relatórios automatizados",
        visualization: "✓ Visualização avançada de dados",
        predictions: "✓ Previsão orientada por IA",
        alerts: "✓ Alertas e notificações inteligentes",
        export: "✓ Exportação para múltiplos formatos",
      },
    },
    pricing: {
      title: "Preços Simples e Transparentes",
      subtitle: "Escolha o plano que se adequa às suas necessidades.",
      starter: "Iniciante",
      professional: "Profissional",
      enterprise: "Empresarial",
      custom: "Personalizado",
      popular: "Mais Popular",
      starter_price: "49",
      professional_price: "149",
      up_to: "Até",
      unlimited_users: "Usuários ilimitados",
      basic_accounting: "Contabilidade básica",
      full_accounting: "Suite de contabilidade completa",
      ai_assistant: "Assistente IA",
      advanced_hr: "Ferramentas avançadas de RH",
      marketing_automation: "Automação de marketing",
      dedicated_support: "Suporte dedicado",
      api_access: "Acesso à API",
      sso: "Integração SSO",
      custom_features: "Recursos personalizados",
      pageTitle: "Preços Simples e Transparentes",
      pageSubtitle: "Escolha o plano que se adequa às suas necessidades.",
      monthly: "Mensal",
      annual: "Anual",
      save: "Economize 20%",
      included: "Incluído:",
      starter: {
        title: "Iniciante",
        desc: "Perfeito para autônomos e pequenas equipes",
        f1: "✓ Módulo básico de contabilidade",
        f2: "✓ Até 100 faturas/mês",
        f3: "✓ Suporte por email",
        f4: "✓ 1 conta de usuário",
        f5: "✓ Armazenamento de 5GB",
      },
      professional: {
        title: "Profissional",
        desc: "Para PMEs em crescimento com necessidades avançadas",
      },
      pro: {
        f1: "✓ Suite contábil completa",
        f2: "✓ Faturas ilimitadas",
        f3: "✓ IA de RH e recrutamento",
        f4: "✓ Assistente de IA para email e reuniões",
        f5: "✓ Até 5 contas de usuário",
        f6: "✓ Armazenamento de 100GB",
        f7: "✓ Suporte prioritário",
      },
      enterprise: {
        title: "Empresarial",
        desc: "Solução completa para organizações grandes",
      },
      ent: {
        f1: "✓ Todas as funcionalidades Profissional",
        f2: "✓ Automação de marketing",
        f3: "✓ Análises avançadas",
        f4: "✓ Contas de usuário ilimitadas",
        f5: "✓ Armazenamento ilimitado",
        f6: "✓ Gerente de conta dedicado",
        f7: "✓ Integrações customizadas",
      },
      custom: "Preço customizado",
      popular: "Mais Popular",
      faq: "Perguntas Frequentes",
      faq1: {
        q: "Posso mudar de plano a qualquer momento?",
        a: "Sim, você pode fazer upgrade ou downgrade do seu plano a qualquer momento. As mudanças entram em vigor imediatamente.",
      },
      faq2: {
        q: "Existe uma versão de teste gratuita?",
        a: "Sim, todos os planos incluem um teste gratuito de 14 dias. Sem cartão de crédito necessário.",
      },
      faq3: {
        q: "E quanto à integração?",
        a: "Oferecemos integração abrangente para todos os planos, incluindo vídeos tutoriais e suporte ao vivo.",
      },
      faq4: {
        q: "Vocês oferecem descontos para faturamento anual?",
        a: "Sim, economize 20% escolhendo faturamento anual em vez de mensal.",
      },
    },
    contact: {
      pageTitle: "Entre em Contato",
      pageSubtitle: "Adoraríamos ouvir falar de você. Envie-nos uma mensagem.",
      name: "Nome",
      email: "Email",
      company: "Empresa",
      subject: "Assunto",
      selectSubject: "Selecione um assunto",
      sales: "Consulta de Vendas",
      support: "Suporte",
      partnership: "Parceria",
      other: "Outro",
      message: "Mensagem",
      send: "Enviar Mensagem",
      contact_us: "Contate Vendas",
      info: "Informações de Contato",
      email_label: "Email",
      phone_label: "Telefone",
      address_label: "Endereço",
      hours_label: "Horário Comercial",
      hours: "Segunda a Sexta: 9h00 - 18h00 CET",
      social_label: "Siga-nos",
      chatHint: "Widget de chat será integrado aqui",
    },
    privacy: {
      title: "Política de Privacidade",
      updated: "Última atualização: Novembro de 2025",
      intro: {
        title: "Introdução",
        text: "Na Easycheck, nos comprometemos em proteger sua privacidade.",
      },
      collection: {
        title: "Informações que Coletamos",
        intro: "Coletamos informações de várias maneiras:",
        personal: "Informações pessoais que você fornece voluntariamente",
        usage: "Dados de uso coletados automaticamente",
        cookies: "Informações de cookies e tecnologias de rastreamento similares",
        payment: "Informações de pagamento e cobrança",
      },
      use: {
        title: "Como Usamos Suas Informações",
        intro: "Usamos as informações que coletamos para:",
        service: "Fornecer e melhorar nossos serviços",
        communicate: "Comunicar com você sobre atualizações e ofertas",
        compliance: "Cumprir obrigações legais e requisitos GDPR",
        security: "Garantir segurança e prevenir fraude",
      },
      gdpr: {
        title: "Conformidade GDPR",
        text: "Cumprimos totalmente o Regulamento Geral de Proteção de Dados (GDPR).",
      },
      sharing: {
        title: "Compartilhamento de Dados",
        text: "Não vendemos seus dados pessoais para terceiros.",
      },
      security: {
        title: "Segurança de Dados",
        text: "Implementamos medidas de segurança avançadas incluindo criptografia ponta a ponta.",
      },
      retention: {
        title: "Retenção de Dados",
        text: "Retemos seus dados apenas enquanto necessário para os fins descritos nesta política.",
      },
      cookies: {
        title: "Cookies",
        text: "Nosso site usa cookies para melhorar sua experiência.",
      },
      contact: {
        title: "Entre em Contato",
        text: "Para consultas de privacidade, entre em contato conosco em privacy@easycheck.app",
      },
    },
    terms: {
      title: "Termos de Serviço",
      updated: "Última atualização: Novembro de 2025",
      agreement: {
        title: "Acordo com os Termos",
        text: "Ao acessar e usar o site e serviços da Easycheck, você aceita estar vinculado aos termos desta concordância.",
      },
      use: {
        title: "Licença de Uso",
        text: "Permissão é concedida para baixar temporariamente uma cópia dos materiais para visualização pessoal e não comercial.",
        modify: "Modificar ou copiar os materiais",
        commercial: "Usar os materiais para qualquer propósito comercial",
        reverse: "Tentar fazer engenharia reversa, desmontar ou descompilar qualquer software",
        remove: "Remover qualquer aviso de direitos autorais ou propriedade intelectual",
      },
      disclaimer: {
        title: "Isenção de Responsabilidade",
        text: "Os materiais no site da Easycheck são fornecidos 'como estão'.",
      },
      limitations: {
        title: "Limitações",
        text: "Em nenhum caso a Easycheck ou seus fornecedores serão responsáveis por danos.",
      },
      accuracy: {
        title: "Precisão dos Materiais",
        text: "Os materiais no site da Easycheck podem incluir erros técnicos.",
      },
      modifications: {
        title: "Modificações",
        text: "A Easycheck pode revisar os materiais do site a qualquer momento sem aviso prévio.",
      },
      links: {
        title: "Links",
        text: "A Easycheck não revisou todos os sites vinculados ao seu site.",
      },
      modifications_service: {
        title: "Modificações aos Termos",
        text: "A Easycheck pode revisar estes termos de serviço a qualquer momento sem aviso prévio.",
      },
      law: {
        title: "Lei Aplicável",
        text: "Estes termos e condições são regidos pelas leis da França.",
      },
      contact: {
        title: "Informações de Contato",
        text: "Se tiver dúvidas, entre em contato conosco em legal@easycheck.app",
      },
    },
    footer: {
      tagline: "Suite de back-office alimentada por IA para PMEs modernos.",
      product: "Produto",
      company: "Empresa",
      legal: "Legal",
      roadmap: "Roteiro",
      blog: "Blog",
      careers: "Carreiras",
      privacy: "Política de Privacidade",
      terms: "Termos de Serviço",
      cookies: "Política de Cookies",
      copyright: "© 2025 Easycheck. Todos os direitos reservados.",
      company: "Empresa",
      legal: "Legal",
      followus: "Siga-nos",
      features: "Funcionalidades",
      pricing: "Preços",
      api: "Documentação da API",
      about: "Sobre",
      contact: "Contato",
      blog: "Blog",
      privacy: "Política de Privacidade",
      terms: "Termos de Serviço",
      cookies: "Configurações de Cookie",
      rights: "Todos os direitos reservados.",
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      features: "Fonctionnalités",
      pricing: "Tarification",
      contact: "Contact",
      signin: "Se connecter",
    },
    hero: {
      badge: "Approuvé par plus de 500 PME européennes",
      title: "Suite IA All-in-One pour Back-Office",
      subtitle:
        "Automatisez comptabilité, RH, marketing et sécurité. Concentrez-vous sur la croissance, pas sur l'administration.",
    },
    cta: {
      startfree: "Commencer Gratuitement →",
      demo: "Voir la Démo",
      title: "Prêt à Transformer Votre Back-Office?",
      description: "Rejoignez des centaines de PME européennes utilisant déjà Easycheck.",
      contact: "Contacter les Ventes",
      start: "Commencer l'Essai Gratuit",
      start_free: "Commencer l'Essai Gratuit",
      learn_more: "Apprenez-en Plus sur les Fonctionnalités",
      get_started: "Commencer",
      view_full_pricing: "Voir la Tarification Complète",
      ready: "Prêt à Transformer Votre Back-Office?",
      ready_desc: "Commencez votre essai gratuit aujourd'hui. Aucune carte de crédit requise.",
    },
    trust: {
      title: "Approuvé par les PME Européennes",
    },
    benefits: {
      title: "Pourquoi Choisir Easycheck?",
      accounting: {
        title: "Comptabilité",
        desc: "Factures, avoirs, devis, bons de commande, TVA et bilans — tout automatisé.",
      },
      hr: {
        title: "RH Alimentée par l'IA",
        desc: "Analyse de CV, extraction structurée, classement multilingue avec vérifications de biais.",
      },
      email: {
        title: "Assistant IA pour Email et Réunions",
        desc: "Assistant intelligent pour la gestion des emails et les résumés de réunions.",
      },
      security: {
        title: "Conforme RGPD",
        desc: "Sécurité de niveau entreprise avec conformité RGPD et protection des données intégrées.",
      },
      marketing: {
        title: "Automatisation du Marketing",
        desc: "Automatisez les campagnes et nourrissez les prospects avec des insights alimentés par l'IA.",
      },
      translation: {
        title: "Support Multilingue",
        desc: "Traductions en temps réel dans toutes vos opérations commerciales.",
      },
    },
    features: {
      overview: "Pourquoi Choisir Easycheck?",
      accounting: "Automatisation de la Comptabilité",
      accounting_desc: "Factures, TVA, bilans et plus encore.",
      email_ai: "IA pour Email et Réunions",
      email_ai_desc: "Assistant IA pour vos communications.",
      hr: "RH Avancée",
      hr_desc: "Analyse de CV, classement multilingue.",
      marketing: "Automatisation du Marketing",
      marketing_desc: "Gestion de campagnes simplifiée.",
      translations: "Support Multilingue",
      translations_desc: "Atteignez les clients mondialement.",
      security: "Conforme RGPD et Sécurisé",
      security_desc: "Normes de sécurité de niveau entreprise.",
      pageTitle: "Fonctionnalités Puissantes pour les Entreprises Modernes",
      pageSubtitle: "Tout ce dont vous avez besoin pour gérer votre back-office efficacement.",
      accounting: {
        title: "Module de Comptabilité",
        intro: "Gestion complète de la comptabilité avec conformité RGPD totale.",
        invoices: "✓ Génération de factures professionnelles",
        creditnotes: "✓ Gestion des avoirs",
        quotes: "✓ Création automatisée de devis",
        pos: "✓ Bons de commande",
        vat: "✓ Calcul et rapport de TVA",
        balance: "✓ Export de bilans",
      },
      hr: {
        title: "RH Avancée et Recrutement",
        intro: "Recrutement alimenté par l'IA avec évaluation sans biais.",
        parsing: "✓ Analyse intelligente de CV",
        extraction: "✓ Extraction de données structurées",
        multilingual: "✓ Classement multilingue des candidats",
        bias: "✓ Détection de biais intégrée",
        fairness: "✓ Flux de travail équitables",
        integration: "✓ Système de suivi des candidats",
      },
      email: {
        title: "Assistant IA pour Email et Réunions",
        intro: "Votre compagnon intelligent pour la gestion des communications.",
        smart: "✓ Catégorisation intelligente des emails",
        compose: "✓ Composition d'email assistée par l'IA",
        summary: "✓ Transcription et résumés de réunions",
        actions: "✓ Extraction automatique des éléments d'action",
        scheduling: "✓ Assistant d'planification intelligent",
        compliance: "✓ Vérifications de conformité des emails",
      },
      marketing: {
        title: "Automatisation du Marketing",
        intro: "Développez votre entreprise avec l'automatisation intelligente des campagnes.",
        workflows: "✓ Automatisation avancée des flux de travail",
        segmentation: "✓ Segmentation dynamique du public",
        analytics: "✓ Analyse des campagnes en temps réel",
        personalization: "✓ Personnalisation alimentée par l'IA",
        integration: "✓ Intégration multicanal",
        tracking: "✓ Suivi avancé des prospects",
      },
      security: {
        title: "Sécurité et Conformité",
        intro: "Sécurité de niveau entreprise avec conformité RGPD complète.",
        gdpr: "✓ Conformité RGPD totale",
        encryption: "✓ Chiffrement de bout en bout",
        audit: "✓ Journaux et pistes d'audit",
        sso: "✓ Authentification unique (SSO)",
        mfa: "✓ Authentification multifacteur",
        compliance: "✓ Certifié SOC 2 Type II",
      },
      dashboard: {
        title: "Tableau de Bord Intelligent et Analyses",
        intro: "Insights en temps réel sur les performances de votre entreprise.",
        kpi: "✓ Suivi personnalisé des KPI",
        reports: "✓ Rapports automatisés",
        visualization: "✓ Visualisation avancée des données",
        predictions: "✓ Prévisions alimentées par l'IA",
        alerts: "✓ Alertes et notifications intelligentes",
        export: "✓ Export vers plusieurs formats",
      },
    },
    pricing: {
      title: "Tarification Simple et Transparente",
      subtitle: "Choisissez le plan adapté à votre entreprise.",
      starter: "Démarrage",
      professional: "Professionnel",
      enterprise: "Entreprise",
      custom: "Personnalisé",
      popular: "Plus Populaire",
      starter_price: "49",
      professional_price: "149",
      up_to: "Jusqu'à",
      unlimited_users: "Utilisateurs illimités",
      basic_accounting: "Comptabilité de base",
      full_accounting: "Suite comptable complète",
      ai_assistant: "Assistant IA",
      advanced_hr: "Outils RH avancés",
      marketing_automation: "Automatisation du marketing",
      dedicated_support: "Support dédié",
      api_access: "Accès API",
      sso: "Intégration SSO",
      custom_features: "Fonctionnalités personnalisées",
      pageTitle: "Tarification Simple et Transparente",
      pageSubtitle: "Choisissez le plan qui correspond à vos besoins.",
      monthly: "Mensuel",
      annual: "Annuel",
      save: "Économisez 20%",
      included: "Inclus:",
      starter: {
        title: "Démarrage",
        desc: "Parfait pour les travailleurs indépendants et les petites équipes",
        f1: "✓ Module de comptabilité basique",
        f2: "✓ Jusqu'à 100 factures/mois",
        f3: "✓ Support par email",
        f4: "✓ 1 compte utilisateur",
        f5: "✓ Stockage 5GB",
      },
      professional: {
        title: "Professionnel",
        desc: "Pour les PME en croissance avec des besoins avancés",
      },
      pro: {
        f1: "✓ Suite comptable complète",
        f2: "✓ Factures illimitées",
        f3: "✓ IA RH et recrutement",
        f4: "✓ Assistant IA pour email et réunions",
        f5: "✓ Jusqu'à 5 comptes utilisateur",
        f6: "✓ Stockage 100GB",
        f7: "✓ Support prioritaire",
      },
      enterprise: {
        title: "Entreprise",
        desc: "Solution complète pour les grandes organisations",
      },
      ent: {
        f1: "✓ Toutes les fonctionnalités Professionnel",
        f2: "✓ Automatisation du marketing",
        f3: "✓ Analyses avancées",
        f4: "✓ Comptes utilisateur illimités",
        f5: "✓ Stockage illimité",
        f6: "✓ Gestionnaire de compte dédié",
        f7: "✓ Intégrations personnalisées",
      },
      custom: "Tarification personnalisée",
      popular: "Plus Populaire",
      faq: "Questions Fréquemment Posées",
      faq1: {
        q: "Puis-je changer de plan à tout moment?",
        a: "Oui, vous pouvez passer à un plan supérieur ou inférieur à tout moment. Les modifications prennent effet immédiatement.",
      },
      faq2: {
        q: "Y a-t-il un essai gratuit?",
        a: "Oui, tous les plans incluent un essai gratuit de 14 jours. Aucune carte de crédit requise.",
      },
      faq3: {
        q: "Qu'en est-il de l'intégration?",
        a: "Nous fournissons une intégration complète pour tous les plans, y compris des tutoriels vidéo et un support en direct.",
      },
      faq4: {
        q: "Offrez-vous des réductions pour la facturation annuelle?",
        a: "Oui, économisez 20% en choisissant la facturation annuelle au lieu de mensuelle.",
      },
    },
    contact: {
      pageTitle: "Nous Contacter",
      pageSubtitle: "Nous aimerions vous entendre. Envoyez-nous un message.",
      name: "Nom",
      email: "Email",
      company: "Entreprise",
      subject: "Sujet",
      selectSubject: "Sélectionnez un sujet",
      sales: "Demande de Vente",
      support: "Support",
      partnership: "Partenariat",
      other: "Autre",
      message: "Message",
      send: "Envoyer le Message",
      contact_us: "Contacter les Ventes",
      info: "Informations de Contact",
      email_label: "Email",
      phone_label: "Téléphone",
      address_label: "Adresse",
      hours_label: "Heures d'Ouverture",
      hours: "Lundi - Vendredi: 9h00 - 18h00 CET",
      social_label: "Suivez-nous",
      chatHint: "Le widget de chat sera intégré ici",
    },
    privacy: {
      title: "Politique de Confidentialité",
      updated: "Dernière mise à jour: Novembre 2025",
      intro: {
        title: "Introduction",
        text: "Chez Easycheck, nous nous engageons à protéger votre confidentialité.",
      },
      collection: {
        title: "Informations que Nous Collectons",
        intro: "Nous collectons des informations de plusieurs façons:",
        personal: "Informations personnelles que vous fournissez volontairement",
        usage: "Données d'utilisation collectées automatiquement",
        cookies: "Informations provenant des cookies et technologies de suivi similaires",
        payment: "Informations de paiement et de facturation",
      },
      use: {
        title: "Comment Nous Utilisons Vos Informations",
        intro: "Nous utilisons les informations que nous collectons pour:",
        service: "Fournir et améliorer nos services",
        communicate: "Communiquer avec vous sur les mises à jour et les offres",
        compliance: "Respecter les obligations légales et les exigences RGPD",
        security: "Assurer la sécurité et prévenir la fraude",
      },
      gdpr: {
        title: "Conformité RGPD",
        text: "Nous respectons pleinement le Règlement Général sur la Protection des Données (RGPD).",
      },
      sharing: {
        title: "Partage de Données",
        text: "Nous ne vendons pas vos données personnelles à des tiers.",
      },
      security: {
        title: "Sécurité des Données",
        text: "Nous mettons en œuvre des mesures de sécurité avancées incluant le chiffrement de bout en bout.",
      },
      retention: {
        title: "Conservation des Données",
        text: "Nous conservons vos données uniquement aussi longtemps que nécessaire pour les fins décrites dans cette politique.",
      },
      cookies: {
        title: "Cookies",
        text: "Notre site utilise des cookies pour améliorer votre expérience.",
      },
      contact: {
        title: "Nous Contacter",
        text: "Pour les demandes de confidentialité, contactez-nous à privacy@easycheck.app",
      },
    },
    terms: {
      title: "Conditions d'Utilisation",
      updated: "Dernière mise à jour: Novembre 2025",
      agreement: {
        title: "Accord aux Conditions",
        text: "En accédant et en utilisant le site et les services d'Easycheck, vous acceptez d'être lié par les termes de cet accord.",
      },
      use: {
        title: "Licence d'Utilisation",
        text: "La permission est accordée de télécharger temporairement une copie des matériaux pour une visualisation personnelle et non commerciale.",
        modify: "Modifier ou copier les matériaux",
        commercial: "Utiliser les matériaux à des fins commerciales",
        reverse: "Tenter d'effectuer de l'ingénierie inverse, de démonter ou de décompiler tout logiciel",
        remove: "Supprimer tout avis de droit d'auteur ou de propriété intellectuelle",
      },
      disclaimer: {
        title: "Clause de Non-Responsabilité",
        text: "Les matériaux sur le site d'Easycheck sont fournis 'tels quels'.",
      },
      limitations: {
        title: "Limitations",
        text: "En aucun cas Easycheck ou ses fournisseurs ne seront responsables de dommages.",
      },
      accuracy: {
        title: "Exactitude des Matériaux",
        text: "Les matériaux sur le site d'Easycheck peuvent contenir des erreurs techniques.",
      },
      modifications: {
        title: "Modifications",
        text: "Easycheck peut réviser les matériaux du site à tout moment sans préavis.",
      },
      links: {
        title: "Liens",
        text: "Easycheck n'a pas examiné tous les sites liés à son site.",
      },
      modifications_service: {
        title: "Modifications aux Conditions",
        text: "Easycheck peut réviser ces conditions de service à tout moment sans préavis.",
      },
      law: {
        title: "Loi Applicable",
        text: "Ces conditions et termes sont régis par les lois de la France.",
      },
      contact: {
        title: "Informations de Contact",
        text: "Si vous avez des questions, contactez-nous à legal@easycheck.app",
      },
    },
    footer: {
      tagline: "Suite de back-office alimentée par l'IA pour les PME modernes.",
      product: "Produit",
      company: "Entreprise",
      legal: "Juridique",
      roadmap: "Feuille de Route",
      blog: "Blog",
      careers: "Carrières",
      privacy: "Politique de Confidentialité",
      terms: "Conditions de Service",
      cookies: "Politique sur les Cookies",
      copyright: "© 2025 Easycheck. Tous droits réservés.",
      company: "Entreprise",
      legal: "Legal",
      followus: "Suivez-nous",
      features: "Fonctionnalités",
      pricing: "Tarification",
      api: "Documentation API",
      about: "À Propos",
      contact: "Contact",
      blog: "Blog",
      privacy: "Politique de Confidentialité",
      terms: "Conditions d'Utilisation",
      cookies: "Paramètres des Cookies",
      rights: "Tous droits réservés.",
    },
  },
  de: {
    nav: {
      home: "Startseite",
      features: "Funktionen",
      pricing: "Preise",
      contact: "Kontakt",
      signin: "Anmelden",
    },
    hero: {
      badge: "Vertraut von über 500 europäischen KMUs",
      title: "All-in-One KI Back-Office-Suite",
      subtitle:
        "Automatisieren Sie Buchhaltung, HR, Marketing und Sicherheit. Konzentrieren Sie sich auf Wachstum, nicht auf administrative Aufgaben.",
    },
    cta: {
      startfree: "Kostenlos Starten →",
      demo: "Demo Ansehen",
      title: "Bereit, Ihr Back-Office zu transformieren?",
      description: "Schließen Sie sich Hunderten von europäischen KMUs an, die bereits Easycheck nutzen.",
      contact: "Vertrieb Kontaktieren",
      start: "Kostenlose Testversion Starten",
      start_free: "Kostenlose Testversion Starten",
      learn_more: "Mehr über Funktionen Erfahren",
      get_started: "Loslegen",
      view_full_pricing: "Vollständige Preise Anzeigen",
      ready: "Bereit, Ihr Back-Office zu transformieren?",
      ready_desc: "Starten Sie Ihre kostenlose Testversion heute. Keine Kreditkarte erforderlich.",
    },
    trust: {
      title: "Vertraut von europäischen KMUs",
    },
    benefits: {
      title: "Warum Easycheck wählen?",
      accounting: {
        title: "Buchhaltung",
        desc: "Rechnungen, Gutschriften, Angebote, Bestellungen, MwSt. und Bilanzen — alles automatisiert.",
      },
      hr: {
        title: "KI-gestützte HR",
        desc: "CV-Analyse, strukturierte Extraktion, mehrsprachiges Ranking mit Bias-Checks.",
      },
      email: {
        title: "E-Mail- und Besprechungs-KI-Assistent",
        desc: "Intelligenter Assistent für E-Mail-Verwaltung und Besprechungszusammenfassungen.",
      },
      security: {
        title: "DSGVO-konform",
        desc: "Sicherheit auf Unternehmensebene mit DSGVO-Compliance und integriertem Datenschutz.",
      },
      marketing: {
        title: "Marketing-Automatisierung",
        desc: "Automatisieren Sie Kampagnen und pflegen Sie Leads mit KI-gestützten Erkenntnissen.",
      },
      translation: {
        title: "Mehrsprachige Unterstützung",
        desc: "Echtzeit-Übersetzungen in allen Ihren Geschäftsvorgängen.",
      },
    },
    features: {
      overview: "Warum Easycheck wählen?",
      accounting: "Buchhaltungsautomation",
      accounting_desc: "Rechnungen, MwSt., Bilanzen und mehr.",
      email_ai: "KI für E-Mail und Meetings",
      email_ai_desc: "KI-Assistent für Ihre Kommunikation.",
      hr: "Erweiterte HR",
      hr_desc: "CV-Analyse, mehrsprachiges Ranking.",
      marketing: "Marketing-Automatisierung",
      marketing_desc: "Vereinfachte Kampagnenverwaltung.",
      translations: "Mehrsprachige Unterstützung",
      translations_desc: "Erreichen Sie Kunden weltweit.",
      security: "DSGVO-konform und Sicher",
      security_desc: "Sicherheitsstandards auf Unternehmensebene.",
      pageTitle: "Leistungsstarke Funktionen für modernes Geschäft",
      pageSubtitle: "Alles, was Sie benötigen, um Ihr Back-Office effizient zu verwalten.",
      accounting: {
        title: "Buchhaltungsmodul",
        intro: "Vollständige Buchhaltungsverwaltung mit vollständiger DSGVO-Compliance.",
        invoices: "✓ Professionelle Rechnungserstellung",
        creditnotes: "✓ Gutschriftverwaltung",
        quotes: "✓ Automatisierte Angebotserstellung",
        pos: "✓ Bestellungen",
        vat: "✓ MwSt.-Berechnung und Berichterstattung",
        balance: "✓ Bilanzexport",
      },
      hr: {
        title: "Erweiterte HR und Rekrutierung",
        intro: "KI-gestützte Rekrutierung mit vorurteilsfreier Kandidatenbewertung.",
        parsing: "✓ Intelligente CV-Analyse",
        extraction: "✓ Strukturierte Datenextraktion",
        multilingual: "✓ Mehrsprachiges Kandidaten-Ranking",
        bias: "✓ Integrierte Bias-Erkennung",
        fairness: "✓ Faire Bewertungsabläufe",
        integration: "✓ Bewerberverfolgungssystem",
      },
      email: {
        title: "E-Mail- und Besprechungs-KI-Assistent",
        intro: "Ihr intelligenter Begleiter für Kommunikationsverwaltung.",
        smart: "✓ Intelligente E-Mail-Kategorisierung",
        compose: "✓ KI-gestützte E-Mail-Verfassung",
        summary: "✓ Besprechungstranskription und Zusammenfassungen",
        actions: "✓ Automatische Aktionselementextraktion",
        scheduling: "✓ Intelligenter Planungsassistent",
        compliance: "✓ E-Mail-Compliance-Checks",
      },
      marketing: {
        title: "Marketing-Automatisierung",
        intro: "Wachsen Sie Ihr Geschäft mit intelligenter Kampagnenautomatisierung.",
        workflows: "✓ Erweiterte Workflow-Automatisierung",
        segmentation: "✓ Dynamische Zielgruppensegmentierung",
        analytics: "✓ Echtzeit-Kampagnenanalyse",
        personalization: "✓ KI-gestützte Personalisierung",
        integration: "✓ Multi-Channel-Integration",
        tracking: "✓ Erweitertes Lead-Tracking",
      },
      security: {
        title: "Sicherheit und Compliance",
        intro: "Sicherheit auf Unternehmensebene mit vollständiger DSGVO-Compliance.",
        gdpr: "✓ Vollständige DSGVO-Compliance",
        encryption: "✓ End-to-End-Verschlüsselung",
        audit: "✓ Audit-Protokolle und Trails",
        sso: "✓ Single Sign-On (SSO)",
        mfa: "✓ Multi-Faktor-Authentifizierung",
        compliance: "✓ SOC 2 Type II zertifiziert",
      },
      dashboard: {
        title: "Intelligentes Dashboard und Analysen",
        intro: "Echtzeit-Einblicke in die Leistung Ihres Unternehmens.",
        kpi: "✓ Benutzerdefinierte KPI-Verfolgung",
        reports: "✓ Automatisierte Berichterstattung",
        visualization: "✓ Erweiterte Datenvisualisierung",
        predictions: "✓ KI-gestützte Prognosen",
        alerts: "✓ Intelligente Warnungen und Benachrichtigungen",
        export: "✓ Export in mehrere Formate",
      },
    },
    pricing: {
      title: "Einfache und transparente Preise",
      subtitle: "Wählen Sie den Plan für Ihr Unternehmen.",
      starter: "Anfänger",
      professional: "Professionell",
      enterprise: "Unternehmen",
      custom: "Benutzerdefiniert",
      popular: "Am Beliebtesten",
      starter_price: "49",
      professional_price: "149",
      up_to: "Bis zu",
      unlimited_users: "Unbegrenzte Benutzer",
      basic_accounting: "Grundbuchhaltung",
      full_accounting: "Vollständige Buchhaltungssuite",
      ai_assistant: "KI-Assistent",
      advanced_hr: "Erweiterte HR-Tools",
      marketing_automation: "Marketing-Automatisierung",
      dedicated_support: "Dedizierter Support",
      api_access: "API-Zugriff",
      sso: "SSO-Integration",
      custom_features: "Benutzerdefinierte Funktionen",
      pageTitle: "Einfache und transparente Preise",
      pageSubtitle: "Wählen Sie den Plan, der zu Ihren Anforderungen passt.",
      monthly: "Monatlich",
      annual: "Jährlich",
      save: "Sparen Sie 20%",
      included: "Enthalten:",
      starter: {
        title: "Starter",
        desc: "Perfekt für Freiberufler und kleine Teams",
        f1: "✓ Basis-Buchhaltungsmodul",
        f2: "✓ Bis zu 100 Rechnungen/Monat",
        f3: "✓ E-Mail-Support",
        f4: "✓ 1 Benutzerkonto",
        f5: "✓ 5GB Speicher",
      },
      professional: {
        title: "Professionell",
        desc: "Für wachsende KMUs mit erweiterten Anforderungen",
      },
      pro: {
        f1: "✓ Vollständige Buchhaltungssuite",
        f2: "✓ Unbegrenzte Rechnungen",
        f3: "✓ HR- und Rekrutierungs-KI",
        f4: "✓ E-Mail- und Besprechungs-KI-Assistent",
        f5: "✓ Bis zu 5 Benutzerkonten",
        f6: "✓ 100GB Speicher",
        f7: "✓ Prioritäts-Support",
      },
      enterprise: {
        title: "Unternehmen",
        desc: "Komplettlösung für große Organisationen",
      },
      ent: {
        f1: "✓ Alle Professional-Funktionen",
        f2: "✓ Marketing-Automatisierung",
        f3: "✓ Erweiterte Analysen",
        f4: "✓ Unbegrenzte Benutzerkonten",
        f5: "✓ Unbegrenzter Speicher",
        f6: "✓ Dedizierter Account Manager",
        f7: "✓ Benutzerdefinierte Integrationen",
      },
      custom: "Benutzerdefinierte Preise",
      popular: "Am Beliebtesten",
      faq: "Häufig Gestellte Fragen",
      faq1: {
        q: "Kann ich jederzeit den Plan wechseln?",
        a: "Ja, Sie können jederzeit ein Upgrade oder Downgrade durchführen. Änderungen treten sofort in Kraft.",
      },
      faq2: {
        q: "Gibt es eine kostenlose Testversion?",
        a: "Ja, alle Pläne beinhalten eine 14-tägige kostenlose Testversion. Keine Kreditkarte erforderlich.",
      },
      faq3: {
        q: "Wie sieht es mit dem Onboarding aus?",
        a: "Wir bieten umfassendes Onboarding für alle Pläne, einschließlich Video-Tutorials und Live-Support.",
      },
      faq4: {
        q: "Bieten Sie Rabatte für jährliche Abrechnung an?",
        a: "Ja, sparen Sie 20%, wenn Sie sich für jährliche Abrechnung statt monatlich entscheiden.",
      },
    },
    contact: {
      pageTitle: "Kontaktieren Sie uns",
      pageSubtitle: "Wir würden gerne von Ihnen hören. Senden Sie uns eine Nachricht.",
      name: "Name",
      email: "E-Mail",
      company: "Unternehmen",
      subject: "Betreff",
      selectSubject: "Wählen Sie ein Thema",
      sales: "Vertriebsanfrage",
      support: "Unterstützung",
      partnership: "Partnerschaft",
      other: "Sonstiges",
      message: "Nachricht",
      send: "Nachricht Senden",
      contact_us: "Vertrieb Kontaktieren",
      info: "Kontaktinformationen",
      email_label: "E-Mail",
      phone_label: "Telefon",
      address_label: "Adresse",
      hours_label: "Geschäftszeiten",
      hours: "Montag - Freitag: 9:00 - 18:00 Uhr CET",
      social_label: "Folgen Sie uns",
      chatHint: "Chat-Widget wird hier integriert",
    },
    privacy: {
      title: "Datenschutzrichtlinie",
      updated: "Zuletzt aktualisiert: November 2025",
      intro: {
        title: "Einführung",
        text: "Bei Easycheck verpflichten wir uns, Ihre Privatsphäre zu schützen.",
      },
      collection: {
        title: "Informationen, die wir sammeln",
        intro: "Wir sammeln Informationen auf verschiedene Weise:",
        personal: "Persönliche Informationen, die Sie freiwillig bereitstellen",
        usage: "Nutzungsdaten, die automatisch erfasst werden",
        cookies: "Informationen aus Cookies und ähnlichen Tracking-Technologien",
        payment: "Zahlungs- und Abrechnungsinformationen",
      },
      use: {
        title: "Wie wir Ihre Informationen verwenden",
        intro: "Wir verwenden die gesammelten Informationen für:",
        service: "Bereitstellung und Verbesserung unserer Dienste",
        communicate: "Kommunikation mit Ihnen über Updates und Angebote",
        compliance: "Einhaltung gesetzlicher Verpflichtungen und DSGVO-Anforderungen",
        security: "Gewährleistung der Sicherheit und Betrugsprävention",
      },
      gdpr: {
        title: "DSGVO-Compliance",
        text: "Wir halten uns vollständig an die Datenschutz-Grundverordnung (DSGVO).",
      },
      sharing: {
        title: "Datenweitergabe",
        text: "Wir verkaufen Ihre persönlichen Daten nicht an Dritte.",
      },
      security: {
        title: "Datensicherheit",
        text: "Wir implementieren fortschrittliche Sicherheitsmaßnahmen einschließlich End-to-End-Verschlüsselung.",
      },
      retention: {
        title: "Datenspeicherung",
        text: "Wir speichern Ihre Daten nur so lange wie nötig für die in dieser Richtlinie beschriebenen Zwecke.",
      },
      cookies: {
        title: "Cookies",
        text: "Unsere Website verwendet Cookies, um Ihr Erlebnis zu verbessern.",
      },
      contact: {
        title: "Kontaktieren Sie uns",
        text: "Für Datenschutzanfragen kontaktieren Sie uns unter privacy@easycheck.app",
      },
    },
    terms: {
      title: "Nutzungsbedingungen",
      updated: "Zuletzt aktualisiert: November 2025",
      agreement: {
        title: "Zustimmung zu den Bedingungen",
        text: "Durch den Zugriff auf und die Nutzung der Website und Dienste von Easycheck akzeptieren Sie die Bedingungen dieser Vereinbarung.",
      },
      use: {
        title: "Nutzungslizenz",
        text: "Die Berechtigung wird gewährt, eine Kopie der Materialien vorübergehend für persönliche, nicht-kommerzielle Ansicht herunterzuladen.",
        modify: "Ändern oder kopieren Sie die Materialien",
        commercial: "Verwenden Sie die Materialien für kommerzielle Zwecke",
        reverse: "Versuchen Sie, Software rückwärts zu entwickeln, zu zerlegen oder zu dekompilieren",
        remove: "Entfernen Sie Urheberrechts- oder Eigentumshinweise",
      },
      disclaimer: {
        title: "Haftungsausschluss",
        text: "Die Materialien auf der Website von Easycheck werden 'wie besehen' bereitgestellt.",
      },
      limitations: {
        title: "Einschränkungen",
        text: "Easycheck und seine Lieferanten haften in keinem Fall für Schäden.",
      },
      accuracy: {
        title: "Genauigkeit der Materialien",
        text: "Die Materialien auf der Website von Easycheck können technische Fehler enthalten.",
      },
      modifications: {
        title: "Änderungen",
        text: "Easycheck kann die Materialien auf der Website jederzeit ohne Ankündigung überarbeiten.",
      },
      links: {
        title: "Links",
        text: "Easycheck hat nicht alle mit seiner Website verknüpften Websites überprüft.",
      },
      modifications_service: {
        title: "Änderungen der Bedingungen",
        text: "Easycheck kann diese Nutzungsbedingungen jederzeit ohne Ankündigung überarbeiten.",
      },
      law: {
        title: "Anwendbares Recht",
        text: "Diese Bedingungen unterliegen den Gesetzen Frankreichs.",
      },
      contact: {
        title: "Kontaktinformationen",
        text: "Bei Fragen kontaktieren Sie uns unter legal@easycheck.app",
      },
    },
    footer: {
      tagline: "KI-gestützte Back-Office-Suite für moderne KMUs.",
      product: "Produkt",
      company: "Unternehmen",
      legal: "Rechtliches",
      roadmap: "Roadmap",
      blog: "Blog",
      careers: "Karrieren",
      privacy: "Datenschutzerklärung",
      terms: "Nutzungsbedingungen",
      cookies: "Cookie-Richtlinie",
      copyright: "© 2025 Easycheck. Alle Rechte vorbehalten.",
      company: "Unternehmen",
      legal: "Rechtliches",
      followus: "Folgen Sie uns",
      features: "Funktionen",
      pricing: "Preise",
      api: "API-Dokumentation",
      about: "Über uns",
      contact: "Kontakt",
      blog: "Blog",
      privacy: "Datenschutzrichtlinie",
      terms: "Nutzungsbedingungen",
      cookies: "Cookie-Einstellungen",
      rights: "Alle Rechte vorbehalten.",
    },
  },
}

let currentLanguage = "en"

// ============================================
// LANGUAGE SWITCHING
// ============================================

function initLanguageSwitcher() {
  const langButtons = document.querySelectorAll(".lang-btn")

  // Set initial language from localStorage
  const savedLang = localStorage.getItem("easycheck-lang") || "en"
  setLanguage(savedLang)

  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang")
      setLanguage(lang)
    })
  })
}

function setLanguage(lang) {
  if (!translations[lang]) {
    console.warn(`[v0] Language ${lang} not found, defaulting to English`)
    lang = "en"
  }

  currentLanguage = lang
  localStorage.setItem("easycheck-lang", lang)

  // Update all language buttons
  const langButtons = document.querySelectorAll(".lang-btn")
  langButtons.forEach((btn) => {
    if (btn.getAttribute("data-lang") === lang) {
      btn.classList.add("active")
    } else {
      btn.classList.remove("active")
    }
  })

  // Update all i18n elements
  updateTranslations()

  // Update html lang attribute
  document.documentElement.lang = lang
  document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr")
}

function updateTranslations() {
  const elements = document.querySelectorAll("[data-i18n]")
  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n")
    const text = getTranslation(key)
    if (text) {
      el.textContent = text
    }
  })
}

function getTranslation(key) {
  const keys = key.split(".")
  let value = translations[currentLanguage]

  for (const k of keys) {
    if (value && typeof value === "object") {
      value = value[k]
    } else {
      return null
    }
  }

  return value
}

// ============================================
// FORM HANDLING
// ============================================

function initContactForm() {
  const form = document.getElementById("contactForm")
  if (!form) return

  form.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log("[v0] Contact form submitted")

    // Placeholder for form submission
    // In production, this would send data to a backend API
    alert("Thank you for your message! We'll get back to you soon.")
    form.reset()
  })
}

// ============================================
// PRICING TOGGLE
// ============================================

function initPricingToggle() {
  const toggleBtns = document.querySelectorAll(".toggle-btn")
  toggleBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      toggleBtns.forEach((b) => b.classList.remove("active"))
      btn.classList.add("active")

      const period = btn.getAttribute("data-period")
      console.log("[v0] Pricing period changed to:", period)

      // Update pricing display based on period
      // This would typically update prices shown on cards
    })
  })
}

// ============================================
// CTA BUTTONS
// ============================================

function initCTAButtons() {
  const startFreeBtn = document.getElementById("startFreeBtn")
  const pricingCTAs = document.querySelectorAll("#pricingCTAs")
  const loginBtn = document.getElementById("loginBtn")

  if (startFreeBtn) {
    startFreeBtn.addEventListener("click", () => {
      console.log("[v0] Start free trial clicked")
      // Placeholder for signup flow
      window.location.href = "#pricing"
    })
  }

  pricingCTAs.forEach((btn) => {
    btn.addEventListener("click", () => {
      console.log("[v0] Pricing CTA clicked")
      // Placeholder for signup/contact flow
    })
  })

  if (loginBtn) {
    loginBtn.addEventListener("click", (e) => {
      e.preventDefault()
      console.log("[v0] Login button clicked")
      // Placeholder for login modal/redirect
    })
  }
}

// ============================================
// INTEGRATION PLACEHOLDERS
// ============================================

function initIntegrationPlaceholders() {
  // Email connection
  const connectEmailBtn = document.getElementById("connectEmailBtn")
  if (connectEmailBtn) {
    connectEmailBtn.addEventListener("click", () => {
      console.log("[v0] Email connection initiated")
    })
  }

  // AI Key connection
  const connectAIKey = document.getElementById("connectAIKey")
  if (connectAIKey) {
    connectAIKey.addEventListener("click", () => {
      console.log("[v0] AI key connection initiated")
    })
  }

  // SMTP connection
  const connectSMTPBtn = document.getElementById("connectSMTPBtn")
  if (connectSMTPBtn) {
    connectSMTPBtn.addEventListener("click", () => {
      console.log("[v0] SMTP connection initiated")
    })
  }

  // Chat widget
  const chatWidget = document.getElementById("chatWidget")
  if (chatWidget) {
    console.log("[v0] Chat widget placeholder ready for integration")
  }
}

// ============================================
// ACCESSIBILITY ENHANCEMENTS
// ============================================

function initAccessibility() {
  // Keyboard navigation for buttons
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const langMenu = document.querySelector(".lang-menu")
      if (langMenu && !langMenu.hasAttribute("hidden")) {
        langMenu.setAttribute("hidden", "")
        document.querySelector(".lang-trigger").setAttribute("aria-expanded", "false")
      }
    }
  })

  // Focus management
  const links = document.querySelectorAll("a")
  links.forEach((link) => {
    link.addEventListener("focus", () => {
      link.style.outline = "2px solid var(--color-accent)"
      link.style.outlineOffset = "2px"
    })
    link.addEventListener("blur", () => {
      link.style.outline = "none"
    })
  })
}

// ============================================
// PERFORMANCE OPTIMIZATIONS
// ============================================

function initLazyLoading() {
  if ("IntersectionObserver" in window) {
    const images = document.querySelectorAll("img[loading='lazy']")
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target
          img.src = img.dataset.src || img.src
          observer.unobserve(img)
        }
      })
    })

    images.forEach((img) => imageObserver.observe(img))
  }
}

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener("DOMContentLoaded", () => {
  console.log("[v0] Easycheck website initializing")

  // Initialize language switcher first
  initLanguageSwitcher()

  // Initialize all features
  initContactForm()
  initPricingToggle()
  initCTAButtons()
  initIntegrationPlaceholders()
  initAccessibility()
  initLazyLoading()

  console.log("[v0] Easycheck website initialized successfully")
})

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href")
    if (href !== "#" && document.querySelector(href)) {
      e.preventDefault()
      document.querySelector(href).scrollIntoView({
        behavior: "smooth",
      })
    }
  })
})
