import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Image1 from '../../assets/profile_img.png';
import styles from '../../styles/HeroSection.module.css';

export default function HeroSection() {
  return (
    <div className={styles.container}>
      <motion.div className={styles.card} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}transition={{ duration: 0.6 }}>
        <motion.img src={Image1.src}  alt="Preethi Avatar" className={styles.avatar} whileHover={{ scale: 1.1 }}/>
        <h1 className={styles.heading}>
          Hey there! I&apos;m <span className={styles.highlight}>Preethi</span> 🚀
        </h1>
        <p className={styles.description}>
          Full-Stack Developer | React | Next.js | Vite Js | MERN <br />
          Flutter | Node.js | Express | MongoDB (NoSQL) | MySQL
        </p>
        <div className={styles.socialLinks}>
          <motion.a href="https://github.com/Preethi-Balasubramaniyam/" target="_blank" rel="noopener noreferrer" className={styles.iconLink} whileHover={{ scale: 1.2, color: '#FFD700' }}>
            <FaGithub />
          </motion.a>
          <motion.a href="https://www.linkedin.com/in/preethi-balasubramaniyam/" target="_blank" rel="noopener noreferrer" className={styles.iconLink} whileHover={{ scale: 1.2, color: '#FFD700' }}>
            <FaLinkedin />
          </motion.a>
          <motion.a href="mailto:preethib515@gmail.com" className={styles.iconLink} whileHover={{ scale: 1.2, color: '#FFD700' }} >
            <FaEnvelope />
          </motion.a>
        </div>
        <motion.a
          href="/assets/Preethi.pdf"
          download="Preethi_Balasubramaniyam_Resume.pdf"
          className={styles.resumeButton}
          whileHover={{ scale: 1.1, background: '#FFD700', color: '#000' }}
        >
          Download Resume
        </motion.a>
      </motion.div>
    </div>
  );
}