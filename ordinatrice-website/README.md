
# Cecilia Bazzucchi — Personal Portfolio & Interactive AI Twin (`ceciB`)

Piattaforma Web e vCard interattiva sviluppata per presentare il mio percorso professionale, le competenze nell'ambito **Full-Stack Development**, **AI Office Automation** e i progetti software realizzati.

La web app integra **`ceciB`**, un **Digital Twin AI** basato sull'API di Google Gemini, in grado di rispondere in tempo reale e in modo conversazionale alle domande di recruiter e visitatori su esperienze, stack tecnologico e portfolio.

---

## Key Features

* **AI Digital Twin (`ceciB`):** Chatbot conversazionale avanzato collegato alle API di **Google Gemini 1.5 Flash**, addestrato con un System Prompt dedicato e una Knowledge Base sul mio background.
* **Responsive & Adaptive UI/UX:** Interfaccia utente moderna, fluida e mobile-first, ottimizzata per tutti i dispositivi.
* **Interactive Portfolio Showcase:** Sezione dinamica con card cliccabili per esplorare i progetti reali (Web platform, soluzioni Full-Stack con DB e Custom AI Gems).
* **Skills Grid:** Mappatura visiva e categorizzata delle competenze tecniche (Front-End, Back-End, Database, Scripting e strumenti d'ufficio avanzati).
* **Direct Actions:** Widget per l'avvio rapido del chatbot, download diretto del CV e collegamenti ai canali professionali (LinkedIn, GitHub, Email).

---

## Tech Stack & Architettura

### **Front-End & UI**

* **Framework / Library:** React.js / Vanilla JavaScript (ES6+)
* **Build Tool:** Vite / Webpack
* **Styling:** CSS3, Flexbox, Grid, CSS Variables per i temi, Media Queries responsive

### **AI & API Integration**

* **LLM Engine:** Google Gemini API (`gemini-1.5-flash`)
* **Integration:** Async/Await Fetch API con gestione dell'interfaccia asincrona, stati di caricamento (*typing indicator*) e strategie di fallback/error handling.

---

## Come funziona l'IA Digital Twin (`ceciB`)

Il chatbot non utilizza risposte rigide o predefinite, ma sfrutta la potenza di un Large Language Model per elaborare risposte naturali e contestualizzate.

1. **System Prompt & Guardrails:** Un contesto dettagliato definisce la personalità di `ceciB`, il tono di voce (professionale, brillante e orientato all'azione) e le regole di ingaggio.
2. **Context Delivery:** Ogni interazione invia la domanda dell'utente unitamente alla Knowledge Base aggiornata (progetti, stack e storia lavorativa).
3. **Proactive UX:** Risposte con inviti all'azione (es. proposta di visionare il codice dei progetti o invio diretto dei contatti).

```text
[ Utente scrive in Chat ] 
       │
       ▼
[ Chiamata Asincrona Fetch (JS) ]
       │
       ▼
[ API Google Gemini 1.5 Flash + System Prompt ]
       │
       ▼
[ Parsing Risposta JSON & Render Dinamico ]
📁 Struttura del Progetto
Plaintext
├── dist/                   # Build di produzione compilata e minificata
├── public/                 # Assets statici (favicon, immagini, PDF del CV)
├── src/
│   ├── assets/             # Immagini, icone e stili CSS
│   ├── components/         # Componenti UI (Navbar, Hero, PortfolioCards, Chatbot)
│   ├── services/           # Logica di integrazione API (Gemini API Service)
│   ├── App.jsx / App.js    # Root Component
│   └── main.jsx / index.js # Entry Point
├── .env.example            # Template per le variabili d'ambiente (API Keys)
├── index.html              # HTML5 Entry File
├── package.json            # Dipendenze e script di build
└── README.md               # Documentazione del progetto
