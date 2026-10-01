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
      description: 'Information Technology degree aimed at software development and how systems are structured.'
    },
    {
      degree: 'Higher Secondary School',
      institution: 'Vijay Vikas Matriculation School',
      year: '2018 – 2019',
      score: '68.17%',
      icon: '📚',
      level: 'Higher Secondary',
      description: 'Higher secondary with Computer Science and Mathematics.'
    },
    {
      degree: 'SSLC',
      institution: 'Vijay Vikas Matriculation School',
      year: '2016 – 2017',
      score: '96%',
      icon: '📖',
      level: 'Secondary School',
      description: 'Secondary school, finished with 96%.'
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
            B.Tech in Information Technology, then the school results that came before it.
          </p>
        </motion.div>

        <div className={styles.educationTimeline}>
          {education.map((edu, index) => (
            <div
              key={index}
              data-depth
              className={`${styles.slot} ${index % 2 === 0 ? styles.slotLeft : styles.slotRight}`}
            >
            <motion.div
              className={styles.educationCard}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
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
            </div>
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
              <span>B.Tech, Information Technology — 84%</span>
            </div>
            <div className={styles.achievement}>
              <div className={styles.achievementIcon}>⭐</div>
              <span>SSLC — 96%</span>
            </div>
            <div className={styles.achievement}>
              <div className={styles.achievementIcon}>💻</div>
              <span>Coursework centered on software development and system design</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;
