import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaAward } from 'react-icons/fa';
import './Education.css';

const Education = () => {
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

  const education = [
    {
      degree: 'Bachelor of Technology in Information Technology',
      //institution: 'College of Engineering, Guindy, Chennai (Anna University, Tamil Nadu, India)',
      period: 'Dec 2019 - May 2023',
      //location: 'Chennai, India',
      type: 'Bachelor\'s Degree',
      description: 'Comprehensive study of Information Technology including software development, database management, networking, and system design.',
      highlights: [
        'Specialized in Software Engineering and Database Systems',
        'Completed projects in Web Development and Mobile Applications',
        'Strong foundation in Programming Languages and Algorithms',
        'Exposure to modern development frameworks and tools'
      ]
    },
    {
      degree: '+2, Science',
      institution: 'Mega Higher Secondary School',
      period: 'Jun 2015 - Apr 2017',
      location: 'Kumaripati, Lalitpur, Nepal',
      type: 'High School',
      description: 'Completed higher secondary education with focus on Science stream including Mathematics, Physics, Chemistry,Computer Science and English.',
      highlights: [
        'Science stream with Mathematics and Physics',
        'Strong analytical and problem-solving foundation',
        'Active participation in academic and extracurricular activities'
      ]
    },
    {
      degree: 'School Leaving Certificate (SLC)',
      institution: 'Srijana H.S.E.B. School',
      period: 'Jun 2005 - Jun 2015',
      location: 'Golbazar, Siraha, Nepal',
      type: 'Secondary Education',
      description: 'Completed secondary level education with comprehensive curriculum covering all core subjects.',
      highlights: [
        'Strong academic performance throughout',
        'Foundation in English, Mathematics, and Science',
        'Active participation in school activities'
      ]
    }
  ];

  const certifications = [
    {
      title: 'Advanced Databases and SQL Querying',
      issuer: 'Udemy',
      date: 'Nov 2022',
      description: 'Comprehensive course covering advanced database concepts, SQL optimization, and database design principles.'
    },
    {
      title: '.NET Core',
      issuer: 'Technables IT Solutions PVT.LTD.',
      date: 'May 2023',
      description: 'Professional certification in .NET Core framework, covering modern development practices and best practices.'
    }
  ];

  return (
    <section id="education" className="education section">
      <div className="container">
        <motion.div
          className="education-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className="section-title">Education & Certifications</h2>
            <p className="section-subtitle">
              My academic journey and professional certifications
            </p>
          </motion.div>

          <div className="education-grid">
            <motion.div className="education-section" variants={itemVariants}>
              <h3 className="subsection-title">
                <FaGraduationCap className="section-icon" />
                Education
              </h3>
              
              <div className="education-timeline">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    className="education-item"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="education-header">
                      <h4 className="degree-title">{edu.degree}</h4>
                      <div className="education-meta">
                        <div className="meta-item">
                          <FaCalendarAlt className="meta-icon" />
                          <span>{edu.period}</span>
                        </div>
                        <div className="meta-item">
                          <FaMapMarkerAlt className="meta-icon" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="institution-info">
                      <h5 className="institution-name">{edu.institution}</h5>
                      <span className="education-type">{edu.type}</span>
                    </div>

                    <p className="education-description">{edu.description}</p>

                    {/* Highlights removed as requested */}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div className="certifications-section" variants={itemVariants}>
              <h3 className="subsection-title">
                <FaAward className="section-icon" />
                Certifications
              </h3>
              
              <div className="certifications-grid">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    className="certification-card"
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="cert-header">
                      <h4 className="cert-title">{cert.title}</h4>
                      <div className="cert-meta">
                        <span className="cert-issuer">{cert.issuer}</span>
                        <span className="cert-date">{cert.date}</span>
                      </div>
                    </div>
                    <p className="cert-description">{cert.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
