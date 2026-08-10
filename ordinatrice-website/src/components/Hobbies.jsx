import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Hobbies.css';

const Hobbies = () => {
  const { t } = useLanguage();

  return (
    <section id="hobbies" className="hobbies-section">
      <h2 className="section-title">{t.hobbies.sectionTitle}</h2>
      <div className="hobbies-bubble-container">
        {t.hobbies.bubbles && t.hobbies.bubbles.map((bubble, index) => (
          <div key={index} className="hobby-bubble">
            <span className="hobby-icon">{bubble.icon}</span>
            <div className="hobby-info">
              <h3 className="hobby-title">{bubble.title}</h3>
              <span className="hobby-keyword">{bubble.keyword}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hobbies;
