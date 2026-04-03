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
                alt="Valentin Ispas - Full Stack Web Developer"
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
              Hello! I am an innovative software engineer with 5 years of experience in
              JavaScript development. Possess a strong background in analyzing,
              designing, and implementing business applications using the
              Node.js in the Back-End and various Front-End technologies like
              Angular or React. I have excellent problem-solving skills, a
              dedication to quality and a drive for continuous improvement.
            </p>
          </Reveal>

          {/* <Reveal delay={0.5}>
            <p className={styles.text}>
              I believe that functional and aesthetic are not mutually exclusive.
              By merging the latest technologies with stunning user interfaces, I deliver
              applications that not only work flawlessly but also leave a lasting impression.
            </p>
          </Reveal> */}

          <div className={styles.statsRow}>
            <Reveal delay={0.6}>
              <div className={styles.statItem}>
                <span className={styles.statValue}>5+</span>
                <span className={styles.statLabel}>Years Exp</span>
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
