import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatbotWidget from './components/ChatbotWidget';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <div className="app-container">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Hobbies />
          <Contact />
        </main>
        <ChatbotWidget />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
