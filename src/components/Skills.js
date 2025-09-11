import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCode, 
  FaDatabase, 
  FaServer, 
  FaMobile, 
  FaCloud, 
  FaTools,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaDocker
} from 'react-icons/fa';
import { 
  SiDotnet,
  SiCsharp,
  SiMicrosoftsqlserver,
  SiJquery,
  SiVisualstudio,
  SiAzuredevops
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
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

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: FaCode,
      skills: [
        { name: 'C#', level: 95, icon: SiCsharp },
        { name: 'C', level: 80, icon: FaCode },
        { name: 'HTML5', level: 90, icon: FaHtml5 },
        { name: 'CSS3', level: 88, icon: FaCss3Alt }
      ]
    },
    {
      title: 'Frameworks & Technologies',
      icon: FaServer,
      skills: [
        { name: '.NET Framework', level: 95, icon: SiDotnet },
        { name: 'ASP.NET', level: 90, icon: SiDotnet },
        { name: 'ASP.NET Core', level: 85, icon: SiDotnet },
        { name: 'jQuery', level: 80, icon: SiJquery }
      ]
    },
    {
      title: 'Database Management',
      icon: FaDatabase,
      skills: [
        { name: 'MS SQL Server', level: 90, icon: SiMicrosoftsqlserver },
        { name: 'Database Design', level: 88, icon: FaDatabase },
        { name: 'Query Optimization', level: 82, icon: FaDatabase }
      ]
    },
    {
      title: 'Development Tools',
      icon: FaTools,
      skills: [
        { name: 'Visual Studio', level: 92, icon: SiVisualstudio },
        { name: 'GitHub', level: 85, icon: FaGitAlt },
        { name: 'Azure DevOps', level: 80, icon: SiAzuredevops },
        { name: 'Docker', level: 70, icon: FaDocker }
      ]
    }
  ];

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <motion.div
          className="skills-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className="section-title">Technical Skills</h2>
            <p className="section-subtitle">
              Technologies and tools I work with
            </p>
          </motion.div>

          <div className="skills-grid">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                className="skill-category"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="category-header">
                  <div className="category-icon">
                    <category.icon />
                  </div>
                  <h3 className="category-title">{category.title}</h3>
                </div>

                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="skill-item"
                      variants={itemVariants}
                    >
                      <div className="skill-header">
                        <div className="skill-info">
                          <div className="skill-icon">
                            <skill.icon />
                          </div>
                          <span className="skill-name">{skill.name}</span>
                        </div>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      
                      <div className="skill-bar">
                        <motion.div
                          className="skill-progress"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div className="skills-summary" variants={itemVariants}>
            <div className="summary-card">
              <h3 className="summary-title">Professional Summary</h3>
              <p className="summary-text">
                With over 2 years of experience in .NET development, I specialize in building 
                robust, scalable applications using modern technologies. My expertise spans 
                full-stack development with a strong focus on backend systems, database design, 
                and API development.
              </p>
              <div className="summary-highlights">
                <div className="highlight-item">
                  <span className="highlight-number">2+</span>
                  <span className="highlight-text">Years Experience</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-number">10+</span>
                  <span className="highlight-text">Technologies</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-number">5+</span>
                  <span className="highlight-text">Projects Completed</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
