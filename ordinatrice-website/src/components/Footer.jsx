import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content text-center">
        <p className="copyright">
          &copy; {new Date().getFullYear()} Cecilia Bazzucchi — L'Ordinatrice. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
