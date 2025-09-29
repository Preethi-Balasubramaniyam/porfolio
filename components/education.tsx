import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/education.module.css';

const Education = () => {
  const education = [
    {
      degree: 'B.Tech in Information Technology',
      institution: 'Velalar College of Engineering and Technology',
      year: '2019 – 2023',
      score: '84%',
      icon: '🎓',
      level: 'Bachelor\'s Degree',
      description: 'Specialized in Information Technology with focus on software development and system design.'
    },
    {
      degree: 'Higher Secondary School',
      institution: 'Vijay Vikas Matriculation School',
      year: '2018 – 2019',
      score: '68.17%',
      icon: '📚',
      level: 'Higher Secondary',
      description: 'Completed higher secondary education with focus on Computer Science and Mathematics.'
    },
    {
      degree: 'SSLC',
      institution: 'Vijay Vikas Matriculation School',
      year: '2016 – 2017',
      score: '96%',
      icon: '📖',
      level: 'Secondary School',
      description: 'Completed secondary school education with excellent academic performance.'
    },
  ];

  return (
    <div id="education" className={styles.container}>
      <div className={styles.content}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className={styles.heading}>Education</h1>
          <p className={styles.subheading}>
            Academic journey and qualifications that shaped my technical foundation
          </p>
        </motion.div>

        <div className={styles.educationTimeline}>
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className={styles.educationCard}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.educationIcon}>
                  {edu.icon}
                </div>
                <div className={styles.cardMeta}>
                  <span className={styles.level}>{edu.level}</span>
                  <span className={styles.year}>{edu.year}</span>
                </div>
              </div>

              <div className={styles.cardContent}>
                <h2 className={styles.degree}>{edu.degree}</h2>
                <h3 className={styles.institution}>{edu.institution}</h3>
                <p className={styles.description}>{edu.description}</p>
                
                <div className={styles.scoreSection}>
                  <span className={styles.scoreLabel}>Grade:</span>
                  <span className={styles.score}>{edu.score}</span>
                </div>
              </div>

              <div className={styles.cardFooter}>
                <div className={styles.progressBar}>
                  <div 
                    className={styles.progressFill} 
                    style={{ width: edu.score }}
                  ></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className={styles.achievementsSection}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className={styles.achievementsTitle}>Key Achievements</h2>
          <div className={styles.achievementsList}>
            <div className={styles.achievement}>
              <div className={styles.achievementIcon}>🏆</div>
              <span>Graduated with 84% in Information Technology</span>
            </div>
            <div className={styles.achievement}>
              <div className={styles.achievementIcon}>⭐</div>
              <span>Excellent performance in SSLC with 96%</span>
            </div>
            <div className={styles.achievement}>
              <div className={styles.achievementIcon}>💻</div>
              <span>Specialized in Software Development & System Design</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;
