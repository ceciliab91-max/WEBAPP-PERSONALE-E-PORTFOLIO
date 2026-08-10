import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Skills.css';

const Skills = () => {
  const { t } = useLanguage();

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">{t.skills.sectionTitle}</h2>
      <div className="skills-container">
        <ul className="skills-grid">
          {t.skills.focusItems.map((item, index) => (
            <li key={index} className="skill-card">
              <div className="skill-icon">{item.icon}</div>
              <span className="skill-name">{item.name}</span>
            </li>
          ))}
        </ul>
        <div className="ironic-note-box">
          <p className="ironic-note">" {t.skills.ironicNote} "</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
