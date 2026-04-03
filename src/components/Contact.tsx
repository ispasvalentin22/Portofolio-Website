"use client";

import { useState } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Replace this string with your actual Web3Forms access key
    formData.append("access_key", "020df6e4-e896-4045-8d9c-0003bd27dee9");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus('Message sent successfully! I will reply soon.');
        form.reset();
      } else {
        setStatus('Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('Error sending message. Please try again.');
    }
  };

  return (
    <>
      <section className="section container" id="contact">
        <div className={styles.contact}>
          <h2 className="section-title">Get In <span>Touch</span></h2>
          <p className={styles.text}>
            I'm currently looking for new opportunities. Whether you have a question,
            a proposal, or just want to say hi, I'll try my best to get back to you!
          </p>

          <form className={styles.form} onSubmit={handleSubmit}>
            <input type="hidden" name="subject" value="New Portfolio Message" />

            <div className={styles.inputGroup}>
              <label htmlFor="name" className={styles.label}>Name</label>
              <input type="text" id="name" name="name" required className={styles.input} placeholder="John Doe" />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.label}>Email Address</label>
              <input type="email" id="email" name="email" required className={styles.input} placeholder="john@example.com" />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="message" className={styles.label}>Message</label>
              <textarea id="message" name="message" required className={styles.textarea} placeholder="Hello, I'd like to talk about..."></textarea>
            </div>
            <button type="submit" className={`btn-primary ${styles.submitBtn}`}>
              {status === 'Sending...' ? 'Sending...' : 'Send Message'}
            </button>
            {status && (
              <p style={{ marginTop: '16px', fontSize: '0.95rem', color: status.includes('success') ? '#4ade80' : '#f87171' }}>
                {status}
              </p>
            )}
          </form>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Valentin. Built with Next.js & Pure CSS.</p>
      </footer>
    </>
  );
}
