import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const experiences = [
    {
      title: 'Software Developer, Technical, QA',
      company: 'Technables IT Solution Pvt. Ltd',
      companyUrl: 'https://www.technables.com/',
      location: 'Koteshwor, Kathmandu, Nepal',
      period: 'May 2023 - Current',
      type: 'Full-time',
      description: 'Developing robust and scalable software solutions using .NET framework and related technologies.',
      responsibilities: [
        'Expertise in .NET Development: Proficient in utilizing the .NET framework for developing robust and scalable software solutions',
        'ASP.NET Proficiency: Experienced in building web applications using ASP.NET, ensuring optimal performance and functionality',
        'Database Integration: Capable of integrating databases seamlessly into .NET applications, utilizing SQL Server or other databases',
        'Frontend Development Skills: Competent in frontend technologies like HTML, CSS, and JavaScript for creating engaging user interfaces',
        'Problem-Solving Aptitude: Strong analytical and problem-solving skills, adept at identifying and resolving technical challenges efficiently',
        'Effective Communication: Excellent communication skills, capable of collaborating with team members and stakeholders to understand requirements and deliver results effectively'
      ],
      projects: [
        'EyeplexMall - E-commerce platform development',
        'Metlife Claims - Insurance claims processing system',
        'Cinema Management System - Movie booking and management platform',
        'Parking Management System - Automated parking solution'
      ],
      technologies: ['.NET Framework', 'ASP.NET', 'C#', 'SQL Server', 'HTML/CSS', 'JavaScript', 'jQuery']
    }
  ];

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <motion.div
          className="experience-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className="section-title">Work Experience</h2>
            <p className="section-subtitle">
              My professional journey in software development
            </p>
          </motion.div>

          <motion.div className="timeline" variants={itemVariants}>
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="timeline-marker">
                  <FaBriefcase />
                </div>
                
                <div className="timeline-content">
                  <div className="experience-header">
                    <h3 className="experience-title">{exp.title}</h3>
                    <div className="experience-meta">
                      <div className="meta-item">
                        <FaCalendarAlt className="meta-icon" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="meta-item">
                        <FaMapMarkerAlt className="meta-icon" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="company-info">
                    <h4 className="company-name">
                      {exp.companyUrl ? (
                        <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer">{exp.company}</a>
                      ) : (
                        exp.company
                      )}
                    </h4>
                    <span className="job-type">{exp.type}</span>
                  </div>

                  <p className="experience-description">{exp.description}</p>

                  <div className="responsibilities">
                    <h5 className="subsection-title">Key Responsibilities:</h5>
                    <ul className="responsibility-list">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="responsibility-item">
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="projects">
                    <h5 className="subsection-title">Notable Projects:</h5>
                    <div className="project-tags">
                      {exp.projects.map((project, idx) => (
                        <span key={idx} className="project-tag">
                          {project}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="technologies">
                    <h5 className="subsection-title">Technologies Used:</h5>
                    <div className="tech-tags">
                      {exp.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
