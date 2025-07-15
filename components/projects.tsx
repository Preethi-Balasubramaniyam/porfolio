import React from "react";
import styles from "../styles/projects.module.css";

const projects = [
  {
    title: "Cleopatra Salon CRM",
    description: " Developing a cross-platform mobile application for salon customer management, appointment scheduling, and service tracking",
    tech: ["Flutter", "Dart", "Restful APls", "Node JS", "Express JS", "Typescript", " Mysql"],
    link: "https://github.com/Preethi-Balasubramaniyam/Beautysalon_CRM_Enduser",
  },
  {
    title: "ConnectAthlete - User Application & Admin Dashboard (CRM Application):",
    description: " Developed a Next.js user platform for athlete registration, following coaches, and real-time chats. Built an admin CRM dashboard with React.js for efficient management and analytics",
    tech: [ "Next.js", "Socket.io", "JavaScript", "CSS", "Typescript", "Restful APIs", "React.js", "Redux"],
    link: "https://github.com/Preethi-Balasubramaniyam/connect-athlete-Enduser",
  },
  {
    title: "TidyDay",
    description: " Created a full-stack blog application with an intuitive admin panel for efficient content management and SEO optimization. ",
    tech: ["Node.js", "Express.js", "MySQL", "JWT", "React.js", "Bootstrap"],
    link: "https://github.com/Preethi-Balasubramaniyam/Tidyday",
  },
  {
    title: "Gudata Logistics Website (Freelance)",
    description: " Designed and developed a responsive company website with a focus on SEO optimization and intuitive navigation.",
    tech: [ "React.js", "Bootstrap"],
    link: "https://github.com/Preethi-Balasubramaniyam/Datalogic_frontend",
  },
];

const Projects = () => (
  <section className={styles.container}>
    <h1 className={styles.heading}>Projects</h1>
    <div className={styles.cardGrid}>
      {projects.map((project, idx) => (
        <div className={styles.card} key={idx}>
          <h2 className={styles.cardTitle}>{project.title}</h2>
          <p className={styles.cardText}>{project.description}</p>
          <div className={styles.techStack}>
            {project.tech.map((t, i) => (
              <span className={styles.tech} key={i}>{t}</span>
            ))}
          </div>
          <a
            href={project.link}
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
