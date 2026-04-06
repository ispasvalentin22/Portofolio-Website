import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.glow} />
      <div className={`${styles.content} animate-fade-in`}>
        <h1 className={styles.title}>
          Hi, I'm <span className="text-accent">Valentin</span>
        </h1>
        <h2 className={styles.subtitle}>
          Full Stack Developer
        </h2>
        <p className="text-secondary" style={{ marginBottom: '40px', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 40px' }}>
          I build premium, aesthetic, and highly functional and complex web applications.
          Bridging the gap between brilliant design and robust performance.
        </p>
        <div className={styles.actions}>
          <a href="#projects" className="btn-primary">View My Work</a>
          <a href="/cv.pdf" download className="btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download CV
          </a>
          <a href="#contact" className="btn-outline">Contact Me</a>
          <a href="https://www.linkedin.com/in/ispasvalentin" target="_blank" rel="noopener noreferrer" className="btn-outline">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
