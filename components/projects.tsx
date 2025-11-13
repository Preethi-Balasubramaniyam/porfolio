import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from "../styles/projects.module.css";

const projects = [
  {
    id: 1,
    title: "Gudata Logistics Website",
    category: "Freelance Project", 
    description: "Designed and developed a responsive company website with a focus on SEO optimization and intuitive navigation. A static website showcasing logistics services with modern UI/UX design.",
    image: "/projects/gudata.png",
    images: ["/projects/gudata.png", "/projects/gudata2.png", "/projects/gudata3.png", "/projects/gudata4.png"],
    tech: ["React.js", "Bootstrap", "SEO", "Responsive Design"],
    link: "https://github.com/Preethi-Balasubramaniyam/Datalogic_frontend",
    liveDemo: "#",
    featured: true,
    status: "Completed"
  },
  {
    id: 2,
    title: "AI Blog Writing Platform",
    category: "Full Stack Project", 
    description: "A comprehensive AI-powered blog writing platform with intelligent content generation. Features include Next.js frontend for seamless user experience, Node.js backend for robust API handling, and MongoDB for efficient data management.",
    image: "/projects/aiblog.png",
    images: ["/projects/aiblog.png", "/projects/aiblog2.png", "/projects/aiblog3.png", "/projects/aiblog4.png"],
    tech: ["Next.js", "Node.js", "MongoDB", "Express.js", "RESTful APIs", "AI Integration"],
    link: "https://github.com/Preethi-Balasubramaniyam/AI-Blog-Platform",
    liveDemo: "#",
    featured: true,
    status: "Completed"
  },
  {
    id: 3,
    title: "TidyDay Online Learning Platform",
    category: "Full Stack Project", 
    description: "An interactive online course providing platform that enables educators to create, manage, and deliver engaging educational content. Features include course management, student enrollment, progress tracking, and secure payment integration.",
    image: "/projects/tidyday.png",
    images: ["/projects/tidyday.png", "/projects/tidyday2.png", "/projects/tidyday3.png", "/projects/tidyday4.png", "/projects/tidyday5.png", "/projects/tidyday6.png"],
    tech: ["Node.js", "Express.js", "MySQL", "JWT", "React.js", "Bootstrap"],
    link: "https://github.com/Preethi-Balasubramaniyam/Tidyday",
    liveDemo: "#",
    featured: true,
    status: "Completed"
  },
];

const ProjectImageCarousel = ({ images, title }: { images: string[], title: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!mounted) {
    return (
      <div className={styles.carouselContainer}>
        <Image 
          src={images[0]} 
          alt={title}
          width={600}
          height={400}
          className={styles.projectImg}
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
    );
  }

  return (
    <div className={styles.carouselContainer}>
      <Image 
        src={images[currentIndex]} 
        alt={`${title} - Image ${currentIndex + 1}`}
        width={600}
        height={400}
        className={styles.projectImg}
        style={{ objectFit: 'cover' }}
        priority={currentIndex === 0}
      />
      {images.length > 1 && (
        <>
          <button className={styles.carouselBtn} onClick={prevImage} style={{ left: '10px' }}>
            <FaChevronLeft />
          </button>
          <button className={styles.carouselBtn} onClick={nextImage} style={{ right: '10px' }}>
            <FaChevronRight />
          </button>
          <div className={styles.carouselDots}>
            {images.map((_, idx) => (
              <span 
                key={idx} 
                className={`${styles.dot} ${idx === currentIndex ? styles.activeDot : ''}`}
                onClick={() => setCurrentIndex(idx)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const Projects = () => {
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
            AI integration, and responsive web design.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className={styles.featuredSection}>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={styles.featuredCard}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
            >
              <div className={styles.projectImage}>
                <ProjectImageCarousel images={project.images || [project.image]} title={project.title} />
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
      </div>
    </section>
  );
};

export default Projects;
