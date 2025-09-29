import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import styles from "../styles/contact.module.css";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSubmitted(false);
    
    try {
      // EmailJS configuration
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_ti53dfw';
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_u0logfb';
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '2OuJEf-mRGK3v0p9K';

      const templateParams = {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
        to_name: 'Preethi', // Your name
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error('EmailJS error:', err);
      setError("Failed to send message. Please try again or contact me directly.");
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "preethib515@gmail.com",
      link: "mailto:preethib515@gmail.com"
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn", 
      value: "@preethi-balasubramaniyam",
      link: "https://www.linkedin.com/in/preethi-balasubramaniyam/"
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      value: "@Preethi-Balasubramaniyam", 
      link: "https://github.com/Preethi-Balasubramaniyam"
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Location",
      value: "Coimbatore, India",
      link: null
    }
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
          <h1 className={styles.heading}>Contact</h1>
          <p className={styles.subheading}>
            I&apos;m currently looking to join a <span className={styles.highlight}>cross-functional team</span> that values improving people&apos;s lives through accessible design. Or have a project in mind? Let&apos;s connect!
          </p>
        </motion.div>

        <div className={styles.contactContent}>
          <motion.div 
            className={styles.contactInfo}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className={styles.infoHeading}>Get in Touch</h2>
            <p className={styles.infoDescription}>
              Feel free to reach out through any of these channels. I&apos;m always excited to discuss new opportunities and innovative projects.
            </p>
            
            <div className={styles.contactItems}>
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  className={styles.contactItem}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <div className={styles.contactIcon}>
                    {item.icon}
                  </div>
                  <div className={styles.contactDetails}>
                    <span className={styles.contactLabel}>{item.label}</span>
                    {item.link ? (
                      <a 
                        href={item.link} 
                        className={styles.contactValue}
                        target={item.link.startsWith('http') ? '_blank' : undefined}
                        rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className={styles.contactValue}>{item.value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className={styles.formContainer}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className={styles.formCard}>
              <h2 className={styles.formHeading}>Send Message</h2>
              
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.inputGroup}>
                  <input
                    className={styles.input}
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className={styles.inputGroup}>
                  <input
                    className={styles.input}
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className={styles.inputGroup}>
                  <textarea
                    className={styles.textarea}
                    name="message"
                    placeholder="Your Message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    required
                  />
                </div>
                
                <motion.button 
                  className={styles.submitButton}
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isLoading ? (
                    <span className={styles.loading}>
                      <div className={styles.spinner}></div>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </motion.button>
                
                {submitted && (
                  <motion.div 
                    className={styles.successMessage}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div className={styles.successIcon}>✓</div>
                    <p>Thank you! I&apos;ll get back to you soon.</p>
                  </motion.div>
                )}
                
                {error && (
                  <motion.div 
                    className={styles.errorMessage}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div className={styles.errorIcon}>⚠</div>
                    <p>{error}</p>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
