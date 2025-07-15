import React, { useState } from "react";
import styles from "../styles/contact.module.css";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would typically send the form data to your backend or email service
  };

  return (
    <section className={styles.container}>
      <h1 className={styles.heading}>Contact</h1>
      <div className={styles.content}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            className={styles.input}
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            className={styles.input}
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            className={styles.textarea}
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
          />
          <button className={styles.button} type="submit">
            Send Message
          </button>
          {submitted && <p className={styles.success}>Thank you! I&apos;ll get back to you soon.</p>}
        </form>
        {/* <div className={styles.info}>
          <p>Email: <a href="mailto:preethi@example.com">preethi@example.com</a></p>
          <p>LinkedIn: <a href="https://linkedin.com/in/preethi" target="_blank" rel="noopener noreferrer">linkedin.com/in/preethi</a></p>
          <p>Location: Coimbatore, India</p>
        </div> */}
      </div>
    </section>
  );
};

export default Contact;
