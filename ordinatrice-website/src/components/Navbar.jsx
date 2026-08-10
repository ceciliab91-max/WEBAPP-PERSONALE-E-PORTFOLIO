import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Navbar.css';

const Navbar = () => {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <header className="navbar-container">
      <nav className="navbar">
        <div className="logo">C.</div>
        <ul className="nav-links">
          <li><a href="#about">{t.nav.about}</a></li>
          <li><a href="#experience">{t.nav.experience}</a></li>
          <li><a href="#projects">{t.nav.projects}</a></li>
          <li><a href="#skills">{t.nav.skills}</a></li>
          <li><a href="#hobbies">{t.nav.hobbies}</a></li>
          <li><a href="#contact">{t.nav.contact}</a></li>
        </ul>
        <button onClick={toggleLanguage} className="lang-toggle" aria-label="Toggle language">
          {language === 'it' ? 'EN' : 'IT'}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
