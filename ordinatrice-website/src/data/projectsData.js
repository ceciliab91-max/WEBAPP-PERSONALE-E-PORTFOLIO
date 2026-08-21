export const categories = [
  { id: "all", it: "Tutti", en: "All" },
  { id: "enterprise", it: "Enterprise & Produttività", en: "Enterprise & Productivity" },
  { id: "fintech", it: "Fintech & HR", en: "Fintech & HR" },
  { id: "genai", it: "GenAI & LLM", en: "GenAI & LLM" },
  { id: "webapps", it: "Web Apps & E-Commerce", en: "Web Apps & E-Commerce" },
  { id: "business", it: "Business & Gestionali", en: "Business & Management" }
];

export const projectsData = [
  {
    id: "jetpay",
    title: "JetPay — Net Salary & Cost-Saving Engine",
    category: "FINTECH & HR TECH / CALCULATION ENGINE",
    filterCategory: ["Enterprise & Produttività", "Fintech & HR"],
    techStack: [
      "React 18",
      "Tailwind CSS",
      "Lucide Icons",
      "TUIR Compliant Engine",
      "Fintech Design System"
    ],
    description: {
      it: "Simulatore interattivo per il calcolo e la proiezione dello stipendio netto (annuale e mensile) da RAL dipendente. Motore fiscale conforme al TUIR (INPS 9,19%, scaglioni IRPEF a 3 aliquote, detrazioni progressive art. 13, addizionali Milano/Roma). Include modulo B2B per la quantificazione del costo azienda e simulazione del risparmio fiscale tramite Fringe Benefit e Buoni Pasto Elettronici (art. 51 TUIR).",
      en: "Interactive simulator for calculating and projecting net salary (annual and monthly) from gross employee salary (RAL). Tax engine compliant with TUIR (INPS 9.19%, 3-tier IRPEF brackets, progressive deductions under Art. 13, Milan/Rome local surtaxes). Includes a B2B module for quantifying employer costs and tax savings simulations via Fringe Benefits and Electronic Meal Vouchers (Art. 51 TUIR)."
    },
    badge: "Featured / HR Engine",
    demoUrl: "https://jetpaynetsalary.netlify.app",
    githubUrl: "https://github.com/tuo-username/jetpay",
    isLive: true
  },
  {
    id: "jetfreelance",
    title: "JetFreelance — Partita IVA & Contractor Simulator",
    category: "FINTECH / CONTRACTOR & FREELANCE PLATFORM",
    filterCategory: ["Enterprise & Produttività", "Fintech & HR"],
    techStack: [
      "React 18",
      "Tailwind CSS",
      "Legge 190/2014",
      "Cashflow & F24 Engine",
      "Responsive UI"
    ],
    description: {
      it: "Simulatore finanziario avanzato per freelance e contractor in Regime Forfettario (Legge 190/2014). Calcolo deterministico di imposta sostitutiva (5% startup / 15% ordinaria) e contributi INPS Gestione Separata/Casse Private su coefficienti ATECO (78%, 67%, 40%). Include convertitore Day/Hourly Rate, scadenziario predittivo liquidità F24 e benchmark comparativo 'Dipendente vs Freelance' con buffer ferie (+20%) e RAL equivalente.",
      en: "Advanced financial simulator for freelancers and contractors under the Flat Rate scheme (Regime Forfettario - Law 190/2014). Deterministic calculation of substitute tax (5% startup / 15% standard) and INPS Separate Management/Private Pension Fund contributions based on ATECO coefficients (78%, 67%, 40%). Includes Day/Hourly Rate converter, F24 liquidity predictive schedule, and employee vs freelance comparative benchmark with holiday buffer (+20%) and equivalent gross salary (RAL)."
    },
    badge: "Featured / P.IVA Engine",
    demoUrl: "https://partitaivaengine.netlify.app",
    githubUrl: "https://github.com/tuo-username/jetfreelance",
    isLive: true
  },
  {
    id: "hub-personale",
    title: "Hub Personale — Scrivania Digitale & Legal/Insurance Hub",
    category: "Full-Stack / Productivity & Enterprise",
    filterCategory: "Enterprise & Produttività",
    techStack: ["React 19", "Vite 8", "React Router v8", "Bootstrap 5.3", "GenAI Copilot", "Oxlint", "pnpm"],
    description: {
      it: "Single Page Application avanzata per la gestione unificata di studio legale, ramo assicurativo e vita personale. Include Dashboard con KPI e timeline a 7 giorni, Scrivania Legale (fascicoli R.G., udienze, atti), Scrivania Assicurativa (polizze e scadenziario premi), Scrivania Personale (calendario, task e post-it), Client Mail/PEC multi-account a 3 colonne e Hub Copilot IA offcanvas per sintesi atti e bozze comunicazioni.",
      en: "Advanced Single Page Application for unified management of law firm, insurance branch, and personal workflow. Features KPI Dashboard with 7-day timeline, Legal Desk, Insurance Desk, Personal Desk, 3-column multi-account Mail/PEC client, and offcanvas AI Copilot Hub for document summaries and communication drafts."
    },
    badge: "Featured / Enterprise",
    demoUrl: "https://scrivaniadigitale.netlify.app/",
    githubUrl: "https://github.com/tuo-username/hub-personale",
    isLive: true
  },
  {
    id: "devexam-pro",
    title: "DevExam PRO — AI Study Hub & Exam Simulator",
    category: "Full-Stack / GenAI Application",
    filterCategory: "GenAI & LLM",
    techStack: ["React 18", "JavaScript ES6+", "Tailwind CSS", "Gemini API", "BYOK"],
    description: {
      it: "Piattaforma e-learning e simulatore d'esame per sviluppatori con Quiz Engine a tempo, active recall (Flashcard & Mappe concettuali), simulatore di Live Coding con correzione automatica tramite LLM e pannello Admin.",
      en: "E-learning platform and exam simulator for developers with timed Quiz Engine, active recall (Flashcards & Mind Maps), Live Coding simulator with automated LLM grading, and Admin panel."
    },
    badge: "Featured",
    demoUrl: "https://devrecap.netlify.app/",
    githubUrl: "https://github.com/tuo-username/devexam-pro",
    isLive: true
  },
  {
    id: "mamedcare",
    title: "MamedCare",
    category: "Web Application / Healthcare",
    filterCategory: "Web Apps & E-Commerce",
    techStack: ["React", "Tailwind CSS", "JavaScript"],
    description: {
      it: "Piattaforma web per la gestione e presentazione di servizi sanitari/assistenziali, con interfaccia accessibile, gestione prenotazioni e design responsive.",
      en: "Web platform for managing and showcasing healthcare/assistance services, with an accessible interface, booking management, and responsive design."
    },
    badge: null,
    demoUrl: "https://mamedcare.it/",
    githubUrl: "https://github.com/tuo-username/mamedcare",
    isLive: true
  },
  {
    id: "form-anagrafica",
    title: "Form Anagrafica con Validazione Avanzata",
    category: "Front-End Component / Utility",
    filterCategory: "Web Apps & E-Commerce",
    techStack: ["React", "JavaScript", "Regex", "Tailwind CSS"],
    description: {
      it: "Modulo interattivo per la raccolta e validazione in tempo reale di dati anagrafici e formati complessi (Codice Fiscale, recapiti, email), feedback visivo istantaneo ed export dati.",
      en: "Interactive module for real-time collection and validation of personal data and complex formats (Fiscal Code, contact details, email), instant visual feedback, and data export."
    },
    badge: null,
    demoUrl: "https://remarkable-dasik-db5031.netlify.app/",
    githubUrl: "https://github.com/tuo-username/form-anagrafica",
    isLive: true
  },
  {
    id: "eshop-group",
    title: "EShop (Group Project)",
    category: "E-Commerce / Team Project",
    filterCategory: "Web Apps & E-Commerce",
    techStack: ["React", "State Management", "Tailwind CSS", "REST API"],
    description: {
      it: "E-commerce sviluppato in team con catalogo prodotti dinamico, filtri di ricerca avanzati, gestione carrello e simulazione checkout.",
      en: "Team-developed e-commerce application featuring dynamic product catalog, advanced search filters, cart state management, and checkout simulation."
    },
    badge: "Coming Soon",
    demoUrl: null,
    githubUrl: "https://github.com/tuo-username/eshop-group",
    isLive: false
  },
  {
    id: "ai-chatbot",
    title: "AI Customer Service Chatbot",
    category: "GenAI / Conversational Agent",
    filterCategory: "GenAI & LLM",
    techStack: ["JavaScript", "LLM API", "Gemini/OpenAI", "CSS3"],
    description: {
      it: "Assistente virtuale intelligente per il customer care con elaborazione del linguaggio naturale, risposte contestuali su knowledge base aziendale e storico conversazione.",
      en: "Intelligent virtual customer care assistant featuring natural language processing, contextual responses backed by corporate knowledge base, and chat history."
    },
    badge: null,
    demoUrl: "https://tuo-link-chatbot.vercel.app",
    githubUrl: "https://github.com/tuo-username/ai-chatbot",
    isLive: true
  },
  {
    id: "gestionale-mc",
    title: "Gestionale MC Servizi",
    category: "Dashboard / Business Automation",
    filterCategory: "Business & Gestionali",
    techStack: ["React", "JavaScript", "Tailwind CSS", "Data Management"],
    description: {
      it: "Applicativo gestionale per l'organizzazione operativa interna, tracciamento commesse, gestione anagrafica clienti e monitoraggio attività aziendali.",
      en: "Management application for internal operational organization, order tracking, client records management, and corporate performance monitoring."
    },
    badge: "In Arrivo",
    status: "coming_soon",
    demoUrl: null,
    githubUrl: "https://github.com/tuo-username/gestionale-mc-servizi",
    isLive: false
  },
  {
    id: "sito-mc-servizi",
    title: "Sito Web Istituzionale MC Servizi",
    category: "Corporate Website / Web Design",
    filterCategory: "Business & Gestionali",
    techStack: ["HTML5", "CSS3", "JavaScript", "Responsive UI"],
    description: {
      it: "Sito vetrina aziendale moderno e responsive, ottimizzato per conversioni, SEO locale e navigazione mobile con form contatti integrato.",
      en: "Modern and responsive corporate showcase website, optimized for conversions, local SEO, and mobile navigation with integrated contact form."
    },
    badge: "In Arrivo",
    status: "coming_soon",
    demoUrl: null,
    githubUrl: "https://github.com/tuo-username/sito-mc-servizi",
    isLive: false
  }
];
