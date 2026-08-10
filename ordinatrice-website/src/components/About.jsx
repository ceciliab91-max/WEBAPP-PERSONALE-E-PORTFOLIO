import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './About.css';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="about-section">
      <h2 className="section-title">{t.about.sectionTitle}</h2>
      <div className="about-grid">
        <div className="about-text-container">
          <p className="about-text">{t.about.text}</p>
          <div className="badges-container">
            <span className="badge">{t.about.concept1}</span>
            <span className="badge">{t.about.concept2}</span>
          </div>
          <div className="presentation-container">
            <h3 className="presentation-title">{t.about.presentationTitle}</h3>
            <div className="presentation-text">
              {t.about.presentation.split('\n').map((paragraph, index) => (
                <p key={index} style={{ marginBottom: paragraph.trim() !== '' ? '1.2rem' : '0' }}>
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="cv-download-container">
              <a href="/Cecilia_Bazzucchi_CV.pdf" download="Cecilia_Bazzucchi_CV.pdf" className="cv-download-btn">
                {t.about.downloadCV}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
