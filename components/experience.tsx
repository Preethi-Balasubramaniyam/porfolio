import React from 'react';
import styles from '../styles/experience.module.css';

const Experience = () => {
  const experiences = [
    {
      role: 'FullStack Developer',
      company: 'Yarkria Tech, Coimbatore',
      duration: 'Feb 2025 – April 2025',
      details: [
        <>
          Developed <span className={styles.highlight}>cross-platform mobile applications</span> using <span className={styles.highlight}>Flutter</span>, implementing modern <span className={styles.highlight}>UI/UX designs</span> and optimizing <span className={styles.highlight}>performance</span> across Android and iOS.
        </>,
        <>
          Built <span className={styles.highlight}>scalable backend services</span> using <span className={styles.highlight}>Node.js</span>, <span className={styles.highlight}>Express.js</span>, and <span className={styles.highlight}>MySQL</span> to handle <span className={styles.highlight}>data persistence</span>, <span className={styles.highlight}>authentication</span>, and business logic.
        </>,
        <>
          Designed and implemented <span className={styles.highlight}>RESTful API routes</span> and ensured seamless integration with frontend and mobile clients.
        </>,
        <>
          Leveraged <span className={styles.highlight}>TypeScript</span> for both frontend and backend code to improve <span className={styles.highlight}>code quality</span>, <span className={styles.highlight}>maintainability</span>, and reduce <span className={styles.highlight}>runtime errors</span>.
        </>,
        <>
          Collaborated in <span className={styles.highlight}>Agile teams</span>, rapidly prototyping new features and iterating based on <span className={styles.highlight}>stakeholder feedback</span>.
        </>,
        <>
          Wrote <span className={styles.highlight}>unit</span> and <span className={styles.highlight}>integration tests</span> for both Flutter components and backend routes to ensure <span className={styles.highlight}>reliability</span>.
        </>,
        <>
          Used <span className={styles.highlight}>Git</span> for version control and contributed actively to <span className={styles.highlight}>code reviews</span> and <span className={styles.highlight}>sprint ceremonies</span>.
        </>,
        <>
          🛠️ <span className={styles.highlight}>Tech Stack</span>: Flutter, Node.js, Express.js, MySQL, TypeScript, REST API, Git, Agile, Testing (Unit & Integration), JIRA (Sprint Planning)
        </>,
      ],
    },
    {
      role: 'FullStack Developer',
      company: 'Akkenna Animation and Technologies, Coimbatore',
      duration: 'Sept 2023 – Dec 2024',
      details: [
        <>
          Developed <span className={styles.highlight}>scalable</span> and <span className={styles.highlight}>responsive web applications</span> using <span className={styles.highlight}>React.js</span>, <span className={styles.highlight}>Next.js</span>, and <span className={styles.highlight}>Redux Toolkit</span>, ensuring <span className={styles.highlight}>cross-device compatibility</span>.
        </>,
        <>
          Implemented <span className={styles.highlight}>global state management</span> and optimized <span className={styles.highlight}>rendering performance</span> to enhance application speed and <span className={styles.highlight}>user experience</span>.
        </>,
        <>
          Collaborated with <span className={styles.highlight}>UI/UX designers</span> to translate <span className={styles.highlight}>Figma designs</span> into highly functional and visually consistent components.
        </>,
        <>
          Integrated <span className={styles.highlight}>RESTful APIs</span> for dynamic content rendering and ensured smooth <span className={styles.highlight}>data flow</span> between frontend and backend services.
        </>,
        <>
          Performed in-depth <span className={styles.highlight}>debugging</span> using <span className={styles.highlight}>Chrome DevTools</span>, resolving critical issues for <span className={styles.highlight}>seamless user interactions</span>.
        </>,
        <>
          Improved <span className={styles.highlight}>page load time</span> by 25% by implementing <span className={styles.highlight}>code splitting</span>, <span className={styles.highlight}>lazy loading</span>, and other <span className={styles.highlight}>performance best practices</span>.
        </>,
        <>
          Led <span className={styles.highlight}>UI refinement initiatives</span>, boosting <span className={styles.highlight}>design consistency</span> and <span className={styles.highlight}>user satisfaction</span>.
        </>,
        <>
          Participated in <span className={styles.highlight}>Agile development cycles</span>, including <span className={styles.highlight}>sprint planning</span>, <span className={styles.highlight}>reviews</span>, and <span className={styles.highlight}>retrospectives</span>.
        </>,
        <>
          Adhered to <span className={styles.highlight}>software engineering best practices</span>, including <span className={styles.highlight}>modular architecture</span>, <span className={styles.highlight}>DRY principles</span>, and <span className={styles.highlight}>accessibility standards</span>.
        </>,
        <>
          🛠️ <span className={styles.highlight}>Tech Stack</span>: React.js, Next.js, Redux Toolkit, JavaScript (ES6+), REST API, Chrome DevTools, Git, Agile, Figma
        </>,
      ],
    },
  ];

  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <h1 className={styles.heading}>Professional Experience</h1>
        {experiences.map((exp, index) => (
        <div key={index}className={`${styles.card} ${index % 2 === 0 ? styles.leftCard : styles.rightCard}`}>
            <h2 className={styles.role}>
              {exp.role} <span className={styles.company}>@ {exp.company}</span>
            </h2>
            <p className={styles.duration}>{exp.duration}</p>
            <ul className={styles.details}>
              {exp.details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Experience;
