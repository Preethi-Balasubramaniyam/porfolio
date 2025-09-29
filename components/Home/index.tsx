import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Image1 from '../../assets/profile_img.png';
import styles from '../../styles/HeroSection.module.css';

export default function HeroSection() {
  return (
    <div className={styles.container}>
      <div className={styles.heroContent}>
        <motion.div 
          className={styles.profileSection}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className={styles.profileCard}>
            <motion.img 
              src={Image1.src}  
              alt="Preethi Avatar" 
              className={styles.avatar} 
              whileHover={{ scale: 1.05, rotate: 3 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <div className={styles.profileInfo}>
              <p className={styles.greeting}>
                Hello / I&apos;m <span className={styles.nameAccent}>Preethi Balasubramaniyam</span>
              </p>
              <h1 className={styles.title}>A Developer who</h1>
              <h2 className={styles.subtitle}>
                Designs experiences <br />
                that users <span className={styles.coverHighlight}>remember</span>...
              </h2>
              <p className={styles.tagline}>
                Because the best products balance <strong>functionality</strong> and <strong>delight</strong>.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className={styles.introSection}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className={styles.roleTitle}>I&apos;m a Full-Stack Developer 🚀</h3>
          <p className={styles.currentRole}>
            With 1.5+ years of experience in <span className={styles.companyHighlight}>React, Next.js, Node.js, and Flutter</span>
          </p>
          <p className={styles.description}>
            A self-taught Full-Stack Developer — I craft scalable web & mobile apps 
            with clean architecture and intuitive user interfaces. My goal is to build products 
            that are not only technically strong but also meaningful to the people who use them.
          </p>

          <div className={styles.socialLinks}>
            <motion.a 
              href="https://github.com/Preethi-Balasubramaniyam/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.iconLink} 
              whileHover={{ scale: 1.2, y: -2 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/preethi-balasubramaniyam/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.iconLink} 
              whileHover={{ scale: 1.2, y: -2 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a 
              href="mailto:preethib515@gmail.com" 
              className={styles.iconLink} 
              whileHover={{ scale: 1.2, y: -2 }}
            >
              <FaEnvelope />
            </motion.a>
          </div>

          <motion.a
            href="/assets/Preethi.pdf"
            download="Preethi_Balasubramaniyam_Resume.pdf"
            className={styles.resumeButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </motion.a>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className={styles.decorativeElements}>
        <div className={styles.glowOrb}></div>
        <div className={styles.particlesContainer}>
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className={styles.particle}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
