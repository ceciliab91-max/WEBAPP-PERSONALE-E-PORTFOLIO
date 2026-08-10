import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './ChatbotWidget.css';

const ChatbotWidget = () => {
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [currentMenu, setCurrentMenu] = useState('main'); // 'main', 'interview', 'skills', 'experience', 'contact'
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    resetChat();
  }, [language]);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  const resetChat = () => {
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
  };

  const simulateBotResponse = (text, nextMenu, delay = 800) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [
        ...prev,
        {
          id: Date.now(),
          sender: 'bot',
          text: text,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
      setCurrentMenu(nextMenu);
    }, delay);
  };

  const handleOptionClick = (optionKey, label, responseText, nextMenu) => {
    setMessages(prev => [
      ...prev,
      {
        id: Date.now(),
        sender: 'user',
        text: label,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);

    if (optionKey === 'download_cv') {
      const link = document.createElement('a');
      link.href = '/Cecilia_Bazzucchi_CV.pdf';
      link.download = 'Cecilia_Bazzucchi_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else if (optionKey === 'github') {
      window.open('https://github.com/ceciliab91-max', '_blank');
    }

    simulateBotResponse(responseText, nextMenu);
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
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        <div className="chat-footer">
          {renderOptions()}
        </div>
      </div>
    </div>
  );
};

export default ChatbotWidget;
