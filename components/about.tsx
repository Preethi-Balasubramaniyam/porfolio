import React from "react";
import styles from "../styles/about.module.css";

const About = () => {
  return (
    <section className={styles.aboutContainer}>
      <h1 className={styles.sectionTitle}>About Me</h1>
      <div className={`${styles.card} ${styles.introCard}`}>
        <p>
          I&apos;m <strong>Preethi Balasubramaniyam</strong>, a passionate Full-Stack Developer
          with 1.5 years of experience specializing in building scalable web and mobile
          applications. My strength lies in <strong>React, Next.js</strong> and creating
          intuitive user interfaces while ensuring performance optimization and clean architecture.
        </p>
      </div>

      <div className={styles.cardGroup}>
        <div className={`${styles.card} ${styles.skillCard}`}>
          <h2>Frontend</h2>
          <p>React.js, Next.js, Redux, JavaScript (ES6+), TypeScript, Flutter, Tailwind CSS, Bootstrap</p>
        </div>
        <div className={`${styles.card} ${styles.skillCard}`}>
          <h2>Backend</h2>
          <p>Node.js, Express.js, REST API, JSON, SOAP, XML</p>
        </div>
        <div className={`${styles.card} ${styles.skillCard}`}>
          <h2>Databases</h2>
          <p>MongoDB (NoSQL), MySQL Server</p>
        </div>
        <div className={`${styles.card} ${styles.skillCard}`}>
          <h2>Tools & DevOps</h2>
          <p>Git, GitHub, CI/CD, AWS (EC2, S3, Lambda), Copilot</p>
        </div>
        <div className={`${styles.card} ${styles.skillCard}`}>
          <h2>Testing & Optimization</h2>
          <p>Jest, React Testing Library, Flutter Test, PageSpeed Optimization</p>
        </div>
        <div className={`${styles.card} ${styles.skillCard}`}>
          <h2>Soft Skills</h2>
          <p>Ownership, Agile Methodologies, Collaboration, Problem Solving</p>
        </div>
      </div>
    </section>
  );
};

export default About;
