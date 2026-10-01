import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/experience.module.css";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Full-Stack Developer",
      company: "Edgezen Labs",
      location: "Coimbatore",
      duration: "Sept 2025 – Present",
      type: "Full-time",
      description:
        "Current role. Briktra is a multi-tenant construction client for Android, iOS, and web. I own the Flutter app: routing, session, roles, and plan limits.",
      technologies: [
        "Flutter",
        "Provider",
        "REST API",
        "JWT",
        "Firebase FCM",
        "GPS",
        "Cashfree",
        "easy_localization",
      ],
      achievements: [
        "One Provider per domain, and named routes so a notification opens a screen that already exists.",
        "JWT kept in flutter_secure_storage. Login is password, OTP, or biometric, and the session drops when the token expires.",
        "Five roles and the subscription plan decide which routes and create actions render.",
        "Attendance stores a GPS point, with a timeout fallback, and compares it to the site using Haversine. Files open through signed URLs.",
        "Cashfree updates plan state after checkout. Layout is a navigation rail from 900px and a single column on a phone. Copy is in localization files.",
      ],
    },
    {
      id: 2,
      role: "Full-Stack Developer",
      company: "Yarkria Tech",
      location: "Coimbatore",
      duration: "Feb 2025 – April 2025",
      type: "Freelance",
      description:
        "Cleomitra, a salon CRM. I delivered both sides: the Flutter app and the TypeScript API for branches, customers, invoices, and chat.",
      technologies: [
        "Flutter",
        "Node.js",
        "Express",
        "TypeScript",
        "Sequelize",
        "MySQL",
        "Socket.IO",
        "AWS S3",
        "JWT",
      ],
      links: [
        { label: "Flutter client", href: "https://github.com/Preethi-Balasubramaniyam/Beautysalon_CRM_Enduser" },
        { label: "API", href: "https://github.com/Preethi-Balasubramaniyam/Beautysalon_Server" },
      ],
      achievements: [
        "Flutter client for Android, iOS, and web. Session is a JWT in secure storage, with OTP and Facebook OAuth.",
        "Express API in TypeScript. Sequelize models and migrations, with routes scoped to the organization.",
        "Live chat on Socket.IO. Media goes to S3 through presigned URLs.",
        "Token middleware, bcrypt, Helmet, and rate limits on the API. Jest and Supertest cover the request paths.",
        "Deployed with CodeBuild and Elastic Beanstalk. API logs go through Winston.",
      ],
    },
    {
      id: 3,
      role: "Full-Stack Developer",
      company: "Akkenna Animation and Technologies",
      location: "Coimbatore",
      duration: "Sept 2023 – Dec 2024",
      type: "Full-time",
      description:
        "Engage Athlete connects athletes, coaches, and academies. I built the Next.js product and the React admin beside it.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Redux Toolkit",
        "NextAuth",
        "Stripe",
        "Socket.IO",
        "Formik",
      ],
      links: [
        { label: "Product", href: "https://github.com/Preethi-Balasubramaniyam/connect-athlete-Enduser" },
        { label: "Admin", href: "https://github.com/Preethi-Balasubramaniyam/connect-athlete-admin" },
      ],
      achievements: [
        "Separate Next.js areas for athlete, coach, and academy, plus a React admin for operations.",
        "NextAuth holds the session. A role hook sends the user away when roleId is not allowed on that route.",
        "Auth and profile state live in Redux Toolkit. Forms use Formik and Yup.",
        "Checkout and subscriptions go through Stripe and Square. Messages use a Socket.IO client.",
        "Admin charts use Chart.js and FullCalendar. Jest covers the panel.",
      ],
    },
    {
      id: 4,
      role: "Full-Stack Developer",
      company: "Freelance",
      location: "Remote",
      duration: "Client work",
      type: "Contract",
      description:
        "Earlier public work: Gudata, a logistics site, and TidyDay, a course app with its own API.",
      technologies: [
        "React.js",
        "Bootstrap",
        "Node.js",
        "Express.js",
        "MySQL",
        "JWT",
      ],
      links: [
        { label: "Gudata", href: "https://github.com/Preethi-Balasubramaniyam/Datalogic_frontend" },
        { label: "TidyDay", href: "https://github.com/Preethi-Balasubramaniyam/Tidyday" },
      ],
      achievements: [
        "Gudata is React and Bootstrap, with semantic markup and meta tags across the service pages.",
        "TidyDay is a React client, an Express API, and MySQL. JWT guards private routes. Enrollment changes after the server accepts payment.",
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
            Three product roles, then earlier client work. Each card is the engineering I owned, with public repos where I can share them.
          </p>
        </motion.div>

        <div className={styles.experienceGrid}>
          {experiences.map((exp, index) => (
            <div key={exp.id} data-depth>
            <motion.div
              className={styles.experienceCard}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
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

              {"links" in exp && exp.links && (
                <div className={styles.repoLinks}>
                  {exp.links.map((link) => (
                    <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
