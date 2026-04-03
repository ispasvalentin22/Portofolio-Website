import Image from 'next/image';
import Reveal from './Reveal';
import styles from './About.module.css';

export default function About() {
  return (
    <section className="section container" id="about">
      <Reveal>
        <h2 className="section-title">About <span>Me</span></h2>
      </Reveal>
      
      <div className={styles.about}>
        <Reveal delay={0.2}>
          <div className={styles.imageWrapper}>
            <div className={styles.imagePlaceholder}>
              <Image 
                src="/profile.jpg" 
                alt="Valentin" 
                width={500}
                height={500}
                priority
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '24px' }} 
              />
            </div>
          </div>
        </Reveal>
        
        <div className={styles.content}>
          <Reveal delay={0.4}>
            <p className={styles.text}>
              Hello! I'm a passionate Full Stack Developer with an eye for design. 
              I enjoy creating things that live on the internet, whether that be websites, 
              applications, or anything in between. My goal is to always build products 
              that provide pixel-perfect, performant experiences.
            </p>
          </Reveal>
          
          <Reveal delay={0.5}>
            <p className={styles.text}>
              I believe that functional and aesthetic are not mutually exclusive. 
              By merging the latest technologies with stunning user interfaces, I deliver 
              applications that not only work flawlessly but also leave a lasting impression.
            </p>
          </Reveal>
          
          <div className={styles.statsRow}>
            <Reveal delay={0.6}>
              <div className={styles.statItem}>
                <span className={styles.statValue}>5+</span>
                <span className={styles.statLabel}>Years Exp</span>
              </div>
            </Reveal>
            <Reveal delay={0.7}>
              <div className={styles.statItem}>
                <span className={styles.statValue}>50+</span>
                <span className={styles.statLabel}>Projects</span>
              </div>
            </Reveal>
            <Reveal delay={0.8}>
              <div className={styles.statItem}>
                <span className={styles.statValue}>100%</span>
                <span className={styles.statLabel}>Dedicated</span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
