import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaStar } from "react-icons/fa";
import styles from "../styles/projects.module.css";

const projects = [
  {
    id: 1,
    title: "Cleopatra Salon CRM",
    category: "Featured Project",
    description: "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists or recommended tracks based on your existing playlists and more.",
    detailedDescription: "Developing a cross-platform mobile application for salon customer management, appointment scheduling, and service tracking with real-time analytics and customer insights.",
    image: "/api/placeholder/600/400",
    tech: ["Flutter", "Dart", "RESTful APIs", "Node.js", "Express.js", "TypeScript", "MySQL"],
    link: "https://github.com/Preethi-Balasubramaniyam/Beautysalon_CRM_Enduser",
    liveDemo: "#",
    featured: true,
    status: "In Development"
  },
  {
    id: 2,
    title: "ConnectAthlete Platform",
    category: "Featured Project", 
    description: "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists or recommended tracks based on your existing playlists and more.",
    detailedDescription: "Developed a Next.js user platform for athlete registration, following coaches, and real-time chats. Built an admin CRM dashboard with React.js for efficient management and analytics.",
    image: "/api/placeholder/600/400",
    tech: ["Next.js", "Socket.io", "JavaScript", "CSS", "TypeScript", "RESTful APIs", "React.js", "Redux"],
    link: "https://github.com/Preethi-Balasubramaniyam/connect-athlete-Enduser",
    liveDemo: "#",
    featured: true,
    status: "Completed"
  },
  {
    id: 3,
    title: "TidyDay Blog Platform", 
    category: "Web Application",
    description: "Created a full-stack blog application with an intuitive admin panel for efficient content management and SEO optimization.",
    tech: ["Node.js", "Express.js", "MySQL", "JWT", "React.js", "Bootstrap"],
    link: "https://github.com/Preethi-Balasubramaniyam/Tidyday",
    featured: false,
    status: "Completed"
  },
  {
    id: 4,
    title: "Gudata Logistics Website",
    category: "Freelance Project", 
    description: "Designed and developed a responsive company website with a focus on SEO optimization and intuitive navigation.",
    tech: ["React.js", "Bootstrap", "SEO", "Responsive Design"],
    link: "https://github.com/Preethi-Balasubramaniyam/Datalogic_frontend",
    featured: false,
    status: "Completed"
  },
];

const Projects = () => {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className={styles.heading}>Featured Projects</h1>
          <p className={styles.subheading}>
            A collection of projects that showcase my skills in full-stack development, 
            mobile applications, and user experience design.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className={styles.featuredSection}>
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={styles.featuredCard}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
            >
              <div className={styles.projectImage}>
                <div className={styles.imagePlaceholder}>
                  <span>{project.title.charAt(0)}</span>
                </div>
                <div className={styles.projectStatus}>
                  <span className={styles.statusBadge}>{project.status}</span>
                </div>
              </div>
              
              <div className={styles.projectContent}>
                <div className={styles.projectMeta}>
                  <span className={styles.category}>{project.category}</span>
                  <div className={styles.projectRating}>
                    <FaStar className={styles.star} />
                    <FaStar className={styles.star} />
                  </div>
                </div>
                
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                
                <div className={styles.techStack}>
                  {project.tech.slice(0, 4).map((tech, i) => (
                    <span key={i} className={styles.techBadge}>{tech}</span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className={styles.techBadge}>+{project.tech.length - 4}</span>
                  )}
                </div>
                
                <div className={styles.projectLinks}>
                  <a
                    href={project.link}
                    className={styles.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub /> View Code
                  </a>
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      className={`${styles.projectLink} ${styles.primaryLink}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <motion.div 
          className={styles.otherProjectsSection}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className={styles.sectionTitle}>Other Projects</h2>
          <div className={styles.projectGrid}>
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className={styles.projectCard}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className={styles.cardHeader}>
                  <span className={styles.category}>{project.category}</span>
                  <div className={styles.cardActions}>
                    <a
                      href={project.link}
                      className={styles.iconLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
                
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDescription}>{project.description}</p>
                
                <div className={styles.cardTechStack}>
                  {project.tech.map((tech, i) => (
                    <span key={i} className={styles.cardTech}>{tech}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
