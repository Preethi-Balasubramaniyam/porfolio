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
        "JSON",
        "SOAP",
        "XML",
      ],
    },
    {
      category: "Databases",
      icon: "💾",
      technologies: ["MongoDB (NoSQL)", "MySQL Server"],
    },
    {
      category: "Tools & DevOps",
      icon: "🛠️",
      technologies: [
        "Git",
        "GitHub",
        "CI/CD",
        "AWS (EC2, S3, Lambda)",
        "Copilot",
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
            I&apos;m a <strong>Full-Stack Developer</strong> with 1.5+ years of
            experience, passionate about building scalable web and mobile
            applications. With a background in <strong>UI/UX design</strong>, I
            bring a unique ability to create products that are both technically
            strong and visually engaging.
          </p>
        </motion.div>

        <motion.div
          className={styles.introSection}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.introCard}>
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
              My expertise lies in <span className={styles.highlight5}>React and Next.js</span>, where I build fast, maintainable, and user-friendly applications. I also work across the full stack when needed—optimizing APIs, improving performance, and ensuring that every product is both functional and enjoyable to use.
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
            Technical Skills & Expertise
          </motion.h2>

          <div className={styles.skillsGrid}>
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                className={styles.skillCard}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -8 }}
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
