import React from 'react';
import styles from '../styles/education.module.css';

const Education = () => {
  const education = [
    {
      degree: 'B.Tech in Information Technology',
      institution: 'Velalar College of Engineering and Technology',
      year: '2019 – 2023',
      score: '84%',
    },
    {
      degree: 'Higher Secondary School',
      institution: 'Vijay Vikas Matriculation School',
      year: '2018 – 2019',
      score: '68.17%',
    },
    {
      degree: 'SSLC',
      institution: 'Vijay Vikas Matriculation School',
      year: '2016 – 2017',
      score: '96%',
    },
  ];

  return (
    <div id="education" className={styles.container}>
      <section className={styles.section}>
        <h1 className={styles.heading}>Education</h1>
        <div className={styles.cardGrid}>
          {education.map((edu, idx) => (
            <div key={idx} className={styles.card}>
              <h2 className={styles.cardTitle}>{edu.degree}</h2>
              <p className={styles.cardText}>{edu.institution}</p>
              <p className={styles.cardText}>{edu.year}</p>
              <p className={styles.cardScore}>{edu.score}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Education;
