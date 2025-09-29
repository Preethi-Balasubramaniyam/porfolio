import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/experience.module.css";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "FullStack Developer",
      company: "Yarkria Tech",
      location: "Coimbatore",
      duration: "Feb 2025 – April 2025",
      type: "Freelance",
      description:
        "Developed cross-platform mobile apps using Flutter with modern UI/UX and optimized performance on Android & iOS.",
      technologies: [
        "Flutter",
        "Node.js",
        "Express.js",
        "MySQL",
        "TypeScript",
        "REST API",
        "Git",
        "Agile",
        "Testing",
        "JIRA",
      ],
      achievements: [
        "Developed cross-platform mobile apps using Flutter with modern UI/UX and optimized performance on Android & iOS.",
        "Built scalable backend services with Node.js, Express.js, and MySQL, including authentication and data management.",
        "Designed and implemented RESTful APIs for seamless integration with frontend and mobile clients.",
        "Used TypeScript for frontend and backend to enhance code quality, maintainability, and reduce errors.",
        "Collaborated in Agile teams, contributing to prototyping, code reviews, testing, and sprint ceremonies.",
      ],
    },
    {
      id: 2,
      role: "FullStack Developer",
      company: "Akkenna Animation and Technologies",
      location: "Coimbatore",
      duration: "Sept 2023 – Dec 2024",
      type: "Full-time",
      description:
        "Developed scalable and responsive web applications using React.js, Next.js, and Redux Toolkit, ensuring cross-device compatibility.",
      technologies: [
        "React.js",
        "Next.js",
        "Redux Toolkit",
        "JavaScript (ES6+)",
        "REST API",
        "Chrome DevTools",
        "Git",
        "Agile",
        "Figma",
      ],
      achievements: [
        "Developed scalable and responsive web applications using React.js, Next.js, and Redux Toolkit with cross-device compatibility.",
        "Implemented global state management and optimized rendering performance to enhance speed and user experience.",
        "Collaborated with UI/UX designers to convert Figma designs into functional, visually consistent components.",
        "Integrated RESTful APIs and ensured smooth data flow between frontend and backend services.",
        "Improved page load time by 25% through code splitting, lazy loading, and other performance best practices, following Agile cycles and software engineering best practices.",
      ],
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className={styles.heading}>Work Experience</h1>
          <p className={styles.subheading}>
            I&apos;m currently looking to join a{" "}
            <span className={styles.highlight}>cross-functional team</span> that
            values improving people&apos;s lives through accessible design.
          </p>
        </motion.div>

        <div className={styles.experienceGrid}>
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={styles.experienceCard}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.companyIcon}>
                  <span>{exp.company.charAt(0)}</span>
                </div>
                <div className={styles.cardInfo}>
                  <h3 className={styles.role}>{exp.role}</h3>
                  <h4 className={styles.company}>{exp.company}</h4>
                  <div className={styles.meta}>
                    <span className={styles.duration}>{exp.duration}</span>
                    <span className={styles.location}>{exp.location}</span>
                    <span className={styles.type}>{exp.type}</span>
                  </div>
                </div>
              </div>

              <p className={styles.description}>{exp.description}</p>

              <div className={styles.achievements}>
                {exp.achievements.map((achievement, i) => (
                  <div key={i} className={styles.achievement}>
                    <span className={styles.bullet}>•</span>
                    {achievement}
                  </div>
                ))}
              </div>

              <div className={styles.technologies}>
                {exp.technologies.map((tech, i) => (
                  <span key={i} className={styles.techBadge}>
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
