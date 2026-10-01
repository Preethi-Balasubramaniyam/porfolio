import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Image1 from '../../assets/ai-profile-1.png';
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
          <div className={styles.profileCard} data-depth>
            <span className={styles.profileRing} aria-hidden="true" />
            <motion.img 
              src={Image1.src}  
              alt="Preethi Balasubramaniyam" 
              className={styles.avatar} 
              whileHover={{ scale: 1.04, rotateY: 8 }}
              transition={{ type: "spring", stiffness: 260 }}
            />
            <div className={styles.profileInfo}>
              <p className={styles.greeting}>
                Hello / I&apos;m <span className={styles.nameAccent}>Preethi Balasubramaniyam</span>
              </p>
              <h1 className={styles.title}>Full-stack developer</h1>
              <h2 className={styles.subtitle}>
                I ship <span className={styles.coverHighlight}>mobile and web</span> products
              </h2>
              <p className={styles.tagline}>
                Flutter clients, Next.js apps, and Node APIs. Auth, roles, and realtime included.
              </p>
            </div>
          </div>
        </motion.div>

        <div data-depth>
        <motion.div 
          className={styles.introSection}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className={styles.roleTitle}>Building Briktra at Edgezen Labs</h3>
          <p className={styles.currentRole}>
            2+ years across <span className={styles.companyHighlight}>Flutter, Next.js, and Node.js</span>
          </p>
          <p className={styles.description}>
            Recent work includes a construction workspace, a salon CRM with its own API, and an athlete–coach–academy platform. I care about role checks, private data, and APIs a client can trust.
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
            href="/Preethi.pdf"
            download="Preethi_Balasubramaniyam_Resume.pdf"
            className={styles.resumeButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </motion.a>
        </motion.div>
        </div>
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
