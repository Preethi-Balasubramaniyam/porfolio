import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/about.module.css";

const About = () => {
  const skills = [
    {
      category: "Frontend",
      icon: "⚛️",
      technologies: [
        "React.js",
        "Next.js",
        "Redux",
        "JavaScript (ES6+)",
        "TypeScript",
        "Flutter",
        "Tailwind CSS",
        "Bootstrap",
      ],
    },
    {
      category: "Backend",
      icon: "🚀",
      technologies: [
        "Node.js",
        "Express.js",
        "REST API",
        "JWT",
        "Socket.IO",
        "Zod",
      ],
    },
    {
      category: "Databases",
      icon: "💾",
      technologies: ["PostgreSQL", "MySQL", "MongoDB", "Prisma", "Sequelize"],
    },
    {
      category: "Tools & DevOps",
      icon: "🛠️",
      technologies: [
        "Git",
        "GitHub",
        "AWS S3",
        "CodeBuild",
        "Elastic Beanstalk",
      ],
    },
    {
      category: "Testing & Optimization",
      icon: "🧪",
      technologies: [
        "Jest",
        "React Testing Library",
        "Flutter Test",
        "PageSpeed Optimization",
      ],
    },
    {
      category: "Soft Skills",
      icon: "💡",
      technologies: [
        "Ownership",
        "Agile Methodologies",
        "Collaboration",
        "Problem Solving",
      ],
    },
  ];

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className={styles.heading}>About Me</h1>
          <p className={styles.subheading}>
            I&apos;m a <strong>full-stack developer</strong> in Coimbatore.
            I build the client and the API for the same product: Flutter or Next.js in front, Node behind it, and access rules that match the signed-in role.
          </p>
        </motion.div>

        <motion.div
          className={styles.introSection}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.introCard} data-depth>
            <div className={styles.profileSection}>
              <div className={styles.profileIcon}>
                <span>P</span>
              </div>
              <div className={styles.profileInfo}>
                <h2 className={styles.name}>Preethi Balasubramaniyam</h2>
                <p className={styles.title}>Full-Stack Developer</p>
              </div>
            </div>
            <p className={styles.description}>
              Day to day I work in <span className={styles.highlight5}>Flutter, Next.js, and TypeScript</span>. The pattern is the same on each product: a typed API, a session the browser cannot read as a script, and screens that only render what that role is allowed to see.
            </p>
          </div>
        </motion.div>

        <div className={styles.skillsSection}>
          <motion.h2
            className={styles.skillsHeading}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Stack I use on shipped work
          </motion.h2>

          <div className={styles.skillsGrid}>
            {skills.map((skill, index) => (
              <div key={skill.category} data-depth>
              <motion.div
                className={styles.skillCard}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <div className={styles.skillHeader}>
                  <div className={styles.skillIcon}>{skill.icon}</div>
                  <h3 className={styles.skillTitle}>{skill.category}</h3>
                </div>
                <div className={styles.skillTechnologies}>
                  {skill.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className={styles.techBadge}>
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
