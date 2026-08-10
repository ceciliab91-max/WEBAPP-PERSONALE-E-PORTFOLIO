import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Hero.css';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          {t.hero.title} <br />
          <span className="accent-text">&mdash; {t.hero.titleAccent}</span>
        </h1>
        <p className="hero-subtitle">{t.hero.subtitle}</p>
        <div className="hero-cta">
          <a href="#contact" className="btn btn-primary">{t.hero.ctaPrimary}</a>
          <a href="/Cecilia_Bazzucchi_CV.pdf" download="Cecilia_Bazzucchi_CV.pdf" className="btn btn-secondary">{t.hero.ctaSecondary}</a>
        </div>
      </div>
      <div className="hero-visual">
        <div className="profile-image-container">
          <img src="/profile.jpg" alt="Cecilia Bazzucchi" className="profile-image" />
        </div>
        <div className="abstract-shape shape-1"></div>
        <div className="abstract-shape shape-2"></div>
      </div>
    </section>
  );
};

export default Hero;
