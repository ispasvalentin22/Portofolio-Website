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
          <a href="#about" className={styles.link}>About</a>
          <a href="#skills" className={styles.link}>Skills</a>
          <a href="#projects" className={styles.link}>Projects</a>
          <a href="#contact" className={styles.btn}>Contact</a>
        </div>
      </div>
    </nav>
  );
}
