import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './ChatbotWidget.css';

const GEMINI_SYSTEM_PROMPT = `Sei ceciB, l'assistente virtuale e Digital Twin di Cecilia Bazzucchi integrato nel suo portfolio ceciliabazzucchi.it.

RUOLO: Rispondere alle domande di recruiter e visitatori sul percorso professionale, sui progetti e sulle competenze di Cecilia.

TONO DI VOCE: Professionale, brillante, accogliente e proattivo. Rispondi sempre in italiano in modo chiaro e sintetico.

KNOWLEDGE BASE SU CECILIA:
- Profilo: Specializzata in AI Office Automation, Digital Development, gestione amministrativa/operativa e sviluppo Web/Back-End.
- Stack Tecnico: JavaScript, React, Node.js, SQL, Python, Google Custom Gems, Prompt Engineering, HTML/CSS.
- Progetti Principali nel Portfolio:
  1. Gestionale MC Servizi (Full-Stack con Node.js, SQL e IA integrata).
  2. MC Servizi Corporate Web Platform (Sito aziendale responsive).
  3. Mamedcare.it (Piattaforma web in ambito assicurativo).
  4. Custom AI Gems (Suite di assistenti IA per analisi polizze, verbali e documenti d'ufficio).
  5. ceciB (Questo chatbot interattivo).
- Esperienza: 10+ anni nella direzione operativa e gestione d'ufficio/startup, evoluta verso il mondo Tech & Dev.
- Interessi: Cucina, pilates, sport acquatici (nuoto e surf), equitazione, sci e lettura.

REGOLE:
1. Sii proattivo: a fine risposta proponi un passaggio successivo (es. 'Vuoi vedere un suo progetto o contattarla?').
2. Se ti fanno domande non pertinenti (ricette, meteo, ecc.), rispondi con simpatia ricollegandoti al lavoro o alle competenze di Cecilia.
3. Non inventare mai informazioni non presenti nella Knowledge Base.`;

const fetchGeminiResponse = async (userText, messageHistory) => {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY || '';

  const contents = [];

  const history = messageHistory
    .filter(msg => msg.sender === 'user' || msg.sender === 'bot')
    .slice(-10);

  for (const msg of history) {
    contents.push({
      role: msg.sender === 'user' ? 'user' : 'model',
      parts: [{ text: msg.text }]
    });
  }

  contents.push({
    role: 'user',
    parts: [{ text: userText }]
  });

  const body = {
    system_instruction: {
      parts: [{ text: GEMINI_SYSTEM_PROMPT }]
    },
    contents: contents
  };

  const candidateModels = ['gemini-3.5-flash', 'gemini-3.6-flash', 'gemini-1.5-flash', 'gemini-flash-latest'];
  let lastError = null;

  for (const model of candidateModels) {
    try {
      const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });

      if (!response.ok) {
        lastError = new Error(`API Error ${response.status} for model ${model}`);
        continue;
      }

      const data = await response.json();
      const replyText = data?.candidates?.[0]?.content?.parts?.[0]?.text;

      if (replyText) {
        return replyText;
      }
    } catch (err) {
      lastError = err;
    }
  }

  throw lastError || new Error('All model attempts failed');
};

const ChatbotWidget = () => {
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [currentMenu, setCurrentMenu] = useState('main'); // 'main', 'interview', 'skills', 'experience', 'contact'
  const [isTyping, setIsTyping] = useState(false);
  const [inputText, setInputText] = useState('');
  const chatEndRef = useRef(null);

  const resetChat = React.useCallback(() => {
    setIsTyping(false);
    setCurrentMenu('main');
    setMessages([
      {
        id: 1,
        sender: 'bot',
        text: t.chatbot.greeting,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  }, [t.chatbot.greeting]);

  useEffect(() => {
    resetChat();
  }, [language, resetChat]);

  useEffect(() => {
    const handleOpenChat = () => setIsOpen(true);
    window.addEventListener('open-ceciB-chatbot', handleOpenChat);
    return () => window.removeEventListener('open-ceciB-chatbot', handleOpenChat);
  }, []);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  const handleUserSendMessage = async (textToSend) => {
    if (!textToSend || !textToSend.trim() || isTyping) return;

    const trimmedText = textToSend.trim();
    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: trimmedText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const currentHistory = [...messages];
    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    try {
      const reply = await fetchGeminiResponse(trimmedText, currentHistory);
      setMessages(prev => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'bot',
          text: reply,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } catch (error) {
      console.error('Gemini API Call Error:', error);
      setMessages(prev => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'bot',
          text: "Ops, c'è stato un piccolo problema di connessione. Riprova tra un attimo!",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleUserSendMessage(inputText);
  };

  const handleOptionClick = (optionKey, label, responseText, nextMenu) => {
    if (optionKey === 'download_cv') {
      setMessages(prev => [
        ...prev,
        {
          id: Date.now(),
          sender: 'user',
          text: label,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        },
        {
          id: Date.now() + 1,
          sender: 'bot',
          text: responseText,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
      const link = document.createElement('a');
      link.href = '/Cecilia_Bazzucchi_CV.pdf';
      link.download = 'Cecilia_Bazzucchi_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setCurrentMenu(nextMenu);
      return;
    } 
    
    if (optionKey === 'github') {
      setMessages(prev => [
        ...prev,
        {
          id: Date.now(),
          sender: 'user',
          text: label,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        },
        {
          id: Date.now() + 1,
          sender: 'bot',
          text: responseText,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
      window.open('https://github.com/ceciliab91-max', '_blank');
      setCurrentMenu(nextMenu);
      return;
    }

    if (optionKey === 'back') {
      setCurrentMenu('main');
      return;
    }

    // For questions or topic selections, ask Gemini AI!
    setCurrentMenu(nextMenu);
    handleUserSendMessage(label);
  };

  const renderOptions = () => {
    if (isTyping) return null;

    switch (currentMenu) {
      case 'main':
        return (
          <div className="chat-options">
            <button className="chat-btn neon" onClick={() => handleOptionClick('interview', t.chatbot.menu.interview, t.chatbot.interview.intro, 'interview')}>
              {t.chatbot.menu.interview}
            </button>
            <button className="chat-btn neon" onClick={() => handleOptionClick('skills', t.chatbot.menu.skills, t.chatbot.skills.text, 'skills')}>
              {t.chatbot.menu.skills}
            </button>
            <button className="chat-btn neon" onClick={() => handleOptionClick('experience', t.chatbot.menu.experience, t.chatbot.experience.text, 'experience')}>
              {t.chatbot.menu.experience}
            </button>
            <button className="chat-btn neon" onClick={() => handleOptionClick('contact', t.chatbot.menu.contact, t.chatbot.contact.text, 'contact')}>
              {t.chatbot.menu.contact}
            </button>
          </div>
        );

      case 'interview':
        return (
          <div className="chat-options flex-column">
            <button className="chat-btn" onClick={() => handleOptionClick('q1', t.chatbot.interview.q1, t.chatbot.interview.a1, 'interview_next')}>
              {t.chatbot.interview.q1}
            </button>
            <button className="chat-btn" onClick={() => handleOptionClick('q2', t.chatbot.interview.q2, t.chatbot.interview.a2, 'interview_next')}>
              {t.chatbot.interview.q2}
            </button>
            <button className="chat-btn" onClick={() => handleOptionClick('q3', t.chatbot.interview.q3, t.chatbot.interview.a3, 'interview_next')}>
              {t.chatbot.interview.q3}
            </button>
            <button className="chat-btn" onClick={() => handleOptionClick('q4', t.chatbot.interview.q4, t.chatbot.interview.a4, 'interview_next')}>
              {t.chatbot.interview.q4}
            </button>
            <button className="chat-btn back-btn" onClick={() => handleOptionClick('back', t.chatbot.menu.back, t.chatbot.greeting, 'main')}>
              {t.chatbot.menu.back}
            </button>
          </div>
        );

      case 'interview_next':
        return (
          <div className="chat-options">
            <button className="chat-btn neon" onClick={() => handleOptionClick('interview_again', t.chatbot.interview.nextQuestion, t.chatbot.interview.intro, 'interview')}>
              🔄 {t.chatbot.interview.nextQuestion}
            </button>
            <button className="chat-btn back-btn" onClick={() => handleOptionClick('back', t.chatbot.menu.back, t.chatbot.greeting, 'main')}>
              {t.chatbot.menu.back}
            </button>
          </div>
        );

      case 'skills':
      case 'experience':
        return (
          <div className="chat-options">
            <button className="chat-btn neon" onClick={() => handleOptionClick('contact_direct', t.chatbot.menu.contact, t.chatbot.contact.text, 'contact')}>
              {t.chatbot.menu.contact}
            </button>
            <button className="chat-btn back-btn" onClick={() => handleOptionClick('back', t.chatbot.menu.back, t.chatbot.greeting, 'main')}>
              {t.chatbot.menu.back}
            </button>
          </div>
        );

      case 'contact':
        return (
          <div className="chat-options flex-column">
            <button className="chat-btn" onClick={() => handleOptionClick('download_cv', t.chatbot.contact.downloadCV, "Download avviato con successo!", 'contact')}>
              {t.chatbot.contact.downloadCV}
            </button>
            <button className="chat-btn" onClick={() => handleOptionClick('github', t.chatbot.contact.github, "Reindirizzamento a GitHub...", 'contact')}>
              {t.chatbot.contact.github}
            </button>
            <a href="mailto:ceciliab91@gmail.com" className="chat-btn text-center" style={{ display: 'block', width: '100%' }}>
              {t.chatbot.contact.email}
            </a>
            <button className="chat-btn back-btn" onClick={() => handleOptionClick('back', t.chatbot.menu.back, t.chatbot.greeting, 'main')}>
              {t.chatbot.menu.back}
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      {isOpen && (
        <div 
          className="chatbot-modal-backdrop" 
          onClick={() => setIsOpen(false)}
          aria-label="Chiudi modale chatbot"
        />
      )}
      <div className={`chatbot-wrapper ${isOpen ? 'active' : ''}`}>
        <button 
          className="chatbot-bubble" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Apri chatbot ceciB"
        >
        <span className="bubble-icon">💬</span>
        <span className="bubble-text">ceciB</span>
        <span className="pulse-indicator"></span>
      </button>

      <div className="chatbot-window">
        <div className="chat-header">
          <div className="chat-header-info">
            <div className="avatar-container">
              <img src="/profile.jpg" alt="ceciB Avatar" className="avatar-img" />
              <span className="online-dot"></span>
            </div>
            <div>
              <h3>{t.chatbot.title}</h3>
              <p className="status-text">Online & Ready</p>
            </div>
          </div>
          <button className="close-btn" onClick={() => setIsOpen(false)}>&times;</button>
        </div>

        <div className="chat-body">
          {messages.map((msg) => (
            <div key={msg.id} className={`chat-message ${msg.sender}`}>
              <div className="message-content">
                <p style={{ whiteSpace: 'pre-line' }}>{msg.text}</p>
                <span className="message-time">{msg.timestamp}</span>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="chat-message bot typing">
              <div className="message-content">
                <div className="typing-indicator-wrapper">
                  <span className="typing-label">ceciB sta digitando...</span>
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        <div className="chat-footer">
          {renderOptions()}
          <form onSubmit={handleFormSubmit} className="chat-input-form">
            <input 
              type="text" 
              className="chat-input-field"
              value={inputText} 
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Chiedi qualcosa a ceciB..."
              disabled={isTyping}
            />
            <button 
              type="submit" 
              className="chat-send-btn" 
              disabled={isTyping || !inputText.trim()} 
              aria-label="Invia messaggio"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  </>
);
};

export default ChatbotWidget;
