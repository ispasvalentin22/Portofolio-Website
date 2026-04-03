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
          <a href="#contact" className="btn-outline">Contact Me</a>
        </div>
      </div>
    </section>
  );
}
