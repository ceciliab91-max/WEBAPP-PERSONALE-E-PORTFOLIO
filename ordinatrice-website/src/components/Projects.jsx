import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { projectsData, categories } from '../data/projectsData';
import './Projects.css';

const Projects = () => {
  const { language, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('Tutti');

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === 'Tutti' || activeFilter === 'All') return true;
    return project.filterCategory === activeFilter;
  });

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="section-title">
          {t?.projects?.sectionTitle || (language === 'en' ? 'Portfolio & Projects' : 'Portfolio & Progetti')}
        </h2>

        {/* Category Filters */}
        <div className="project-filters" role="tablist" aria-label="Filtri Categoria Progetti">
          {categories.map((cat) => {
            const filterLabel = language === 'en' ? cat.en : cat.it;
            const isSelected =
              activeFilter === cat.it ||
              (cat.id === 'all' && (activeFilter === 'Tutti' || activeFilter === 'All'));

            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                className={`filter-btn ${isSelected ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat.it)}
              >
                {filterLabel}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => {
            const description =
              typeof project.description === 'object'
                ? project.description[language] || project.description.it
                : project.description;

            const isChatbot = project.id === 'ai-chatbot' || project.isChatbot;
            const isComingSoon = !isChatbot && (project.badge === 'Coming Soon' || !project.isLive || !project.demoUrl);

            const handleOpenChatbot = (e) => {
              if (e) e.stopPropagation();
              window.dispatchEvent(new CustomEvent('open-ceciB-chatbot'));
            };

            return (
              <article 
                key={project.id} 
                className={`project-card ${isChatbot ? 'project-card-chatbot' : ''}`}
                onClick={isChatbot ? handleOpenChatbot : undefined}
                style={isChatbot ? { cursor: 'pointer' } : undefined}
              >
                <div className="project-card-header">
                  <span className="project-category-badge">{project.category}</span>
                  {project.badge && (
                    <span
                      className={`project-badge ${
                        project.badge.toLowerCase().includes('coming soon')
                          ? 'badge-coming-soon'
                          : 'badge-featured'
                      }`}
                    >
                      {project.badge}
                    </span>
                  )}
                </div>

                <h3 className="project-title">{project.title}</h3>

                <p className="project-desc">{description}</p>

                <div className="project-tech-stack">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-card-actions">
                  {isChatbot ? (
                    <button
                      type="button"
                      className="project-btn btn-chatbot"
                      onClick={handleOpenChatbot}
                    >
                      💬 {language === 'en' ? 'Try Live Chatbot' : 'Prova il Chatbot Live'}
                    </button>
                  ) : !isComingSoon && project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn btn-demo"
                      onClick={(e) => e.stopPropagation()}
                    >
                      🌐 {language === 'en' ? 'Live Demo' : 'Vedi Progetto / Live Demo'}
                    </a>
                  ) : (
                    <button
                      type="button"
                      disabled
                      className="project-btn btn-demo btn-disabled"
                      title={language === 'en' ? 'Project coming soon' : 'Progetto non ancora in produzione'}
                    >
                      ⏳ {language === 'en' ? 'Coming Soon' : 'In Arrivo'}
                    </button>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
