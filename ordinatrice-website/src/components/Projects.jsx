import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Projects.css';

const Projects = () => {
  const { t } = useLanguage();

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="section-title">{t.projects.sectionTitle}</h2>
        <div className="projects-grid">
          {t.projects.items.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-card-header">
                <div className="project-tags">
                  {project.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className={`project-tag ${tag === 'Live Site' ? 'live-tag' : ''}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <h4 className="project-subtitle">{project.subtitle}</h4>
              <p className="project-desc">{project.description}</p>
              
              {project.link ? (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link-btn"
                >
                  🌐 Visita Sito ({project.title}) &rarr;
                </a>
              ) : (
                <span className="project-status-badge">⚡ In Uscita / Produzione Interna</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
