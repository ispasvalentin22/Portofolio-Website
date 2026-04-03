"use client";

import styles from './Contact.module.css';

export default function Contact() {
  return (
    <>
      <section className="section container" id="contact">
        <div className={styles.contact}>
          <h2 className="section-title">Get In <span>Touch</span></h2>
          <p className={styles.text}>
            I'm currently looking for new opportunities. Whether you have a question, 
            a proposal, or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.inputGroup}>
              <label htmlFor="name" className={styles.label}>Name</label>
              <input type="text" id="name" className={styles.input} placeholder="John Doe" />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.label}>Email Address</label>
              <input type="email" id="email" className={styles.input} placeholder="john@example.com" />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="message" className={styles.label}>Message</label>
              <textarea id="message" className={styles.textarea} placeholder="Hello, I'd like to talk about..."></textarea>
            </div>
            <button type="submit" className={`btn-primary ${styles.submitBtn}`}>
              Send Message
            </button>
          </form>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Valentin. Built with Next.js & Pure CSS.</p>
      </footer>
    </>
  );
}
