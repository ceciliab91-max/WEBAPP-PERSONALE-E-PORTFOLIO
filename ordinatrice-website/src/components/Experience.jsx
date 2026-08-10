import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Experience.css';

const Experience = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <h2 className="section-title">{t.experience.sectionTitle}</h2>
        <div className="experience-timeline">
          {t.experience.items.map((item, index) => (
            <div key={index} className="experience-card">
              <div className="experience-header">
                <span className="experience-period">{item.period}</span>
                <h3 className="experience-company">{item.company}</h3>
              </div>
              <h4 className="experience-role">{item.role}</h4>
              <p className="experience-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
