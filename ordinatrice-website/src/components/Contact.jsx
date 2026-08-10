import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Contact.css';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="section-title">{t.contact.sectionTitle}</h2>
        
        <div className="contact-buttons-grid">
          <a href="mailto:ceciliab91@gmail.com" className="contact-action-btn email-btn">
            <span className="btn-icon">✉️</span>
            <div className="btn-text">
              <span className="btn-label">Email</span>
              <span className="btn-val">{t.contact.emailLink}</span>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/cecilia-bazzucchi-931124265" target="_blank" rel="noopener noreferrer" className="contact-action-btn linkedin-btn">
            <span className="btn-icon">💼</span>
            <div className="btn-text">
              <span className="btn-label">LinkedIn</span>
              <span className="btn-val">{t.contact.linkedIn}</span>
            </div>
          </a>

          <a href="https://github.com/ceciliab91-max" target="_blank" rel="noopener noreferrer" className="contact-action-btn github-btn">
            <span className="btn-icon">🐙</span>
            <div className="btn-text">
              <span className="btn-label">GitHub</span>
              <span className="btn-val">{t.contact.github}</span>
            </div>
          </a>

          <a href="/Cecilia_Bazzucchi_CV.pdf" download="Cecilia_Bazzucchi_CV.pdf" className="contact-action-btn cv-btn">
            <span className="btn-icon">📥</span>
            <div className="btn-text">
              <span className="btn-label">Curriculum Vitae</span>
              <span className="btn-val">{t.contact.downloadCV}</span>
            </div>
          </a>
        </div>

        <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert("Messaggio inviato! Riceverai risposta a breve."); }}>
          <div className="form-group">
            <label htmlFor="name">{t.contact.formName}</label>
            <input type="text" id="name" required placeholder="Il tuo nome / Azienda" />
          </div>
          <div className="form-group">
            <label htmlFor="email">{t.contact.formEmail}</label>
            <input type="email" id="email" required placeholder="tuaemail@esempio.com" />
          </div>
          <div className="form-group">
            <label htmlFor="message">{t.contact.formMessage}</label>
            <textarea id="message" rows="4" required placeholder="Come posso aiutarti?"></textarea>
          </div>
          <button type="submit" className="btn btn-primary submit-btn">{t.contact.submitButton}</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
