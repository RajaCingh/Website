import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaCodeBranch, FaTools } from 'react-icons/fa';
import './Projects.css';

const projects = [
  {
    title: 'Mall Management System',
    description: 'E-commerce platform featuring product catalog, cart, and order management with secure authentication and role-based access.',
    //tags: ['ASP.NET', 'C#', 'MS SQL Server', 'jQuery'],
    role: 'Full‑stack Development',
    links: [
      { label: 'Live Site', href: 'https://www.eyeplexmall.com.np/' }
    ]
  },
  {
    title: 'Metlife Claims',
    description: 'Insurance claims processing system streamlining claim intake, validation, and approval workflows.',
    tags: ['.NET Framework', 'ASP.NET', 'C#', 'SQL Server'],
    role: 'Backend & API Development',
    links: []
  },
  {
    title: 'Threater Management System',
    description: 'Movie booking and management platform including showtimes, seat selection, and ticketing.',
    tags: ['ASP.NET Core', 'C#', 'MS SQL Server'],
    role: 'Backend & Integration',
    links: [{ label: 'Live Site', href: 'https://www.onecinemas.com.np/' }]
  },
  {
    title: 'Parking Management System',
    description: 'Automated parking solution with slot tracking, payments, and reporting.',
    tags: ['.NET', 'C#', 'SQL Server'],
    role: 'Full‑stack Development',
    links: []
  },
  {
    title: 'School Management System',
    description: 'A complete School Digital Platform with all the features a school needs.',
    tags: ['.NET', 'C#', 'SQL Server'],
    role: 'Full‑stack Development',
    links: []
  },
  {
    title: 'Hotel Website',
    //description: 'A complete School Digital Platform with all the features a school needs.',
    tags: ['.NET', 'C#', 'SQL Server'],
    role: 'Full‑stack Development',
    links: [{ label: 'Live Site', href: 'https://www.landmarknepal.com/' }]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">Selected work I have built and contributed to</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="project-card"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
            >
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <span className="project-role"><FaTools /> {project.role}</span>
              </div>
              <p className="project-description">{project.description}</p>
              {Array.isArray(project.tags) && project.tags.length > 0 ? (
                <div className="project-tags">
                  {project.tags.map((t, i) => (
                    <span key={i} className="project-tag">{t}</span>
                  ))}
                </div>
              ) : null}
              {project.links?.length ? (
                <div className="project-links">
                  {project.links.map((link, linkIdx) => (
                    <a key={linkIdx} href={link.href} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaExternalLinkAlt /> {link.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;


