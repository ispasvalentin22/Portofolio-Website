"use client";

import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.navContainer}>
        <a href="#home" className={styles.logo}>
          V<span className="text-accent">I</span>
        </a>
        <div className={styles.links}>
          <a href="mailto:valentin@valentinispas.com" className={styles.emailLink}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.mailIcon}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            valentin@valentinispas.com
          </a>
          <a href="#about" className={styles.link}>About</a>
          <a href="#skills" className={styles.link}>Skills</a>
          <a href="#projects" className={styles.link}>Projects</a>
          <a href="#contact" className={styles.btn}>Contact</a>
        </div>
      </div>
    </nav>
  );
}
