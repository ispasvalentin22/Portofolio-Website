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
          I build high-performance web applications that help businesses scale and improve operational efficiency. 
          Bridging the gap between complex technical challenges and seamless user experiences.
        </p>
        <div className={styles.actions}>
          <a
            href="https://calendly.com/valentinmarian-ispas/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            📅 Schedule a Call
          </a>
          <a href="#projects" className="btn-outline">
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
}
