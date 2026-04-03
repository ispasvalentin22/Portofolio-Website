import Reveal from './Reveal';
import styles from './Skills.module.css';

export default function Skills() {
  const skills = [
    "JavaScript", "TypeScript", "React", "Next.js", 
    "Node.js", "Express", "PostgreSQL", "MongoDB",
    "HTML5", "CSS3 / Sass", "Tailwind CSS", "Git"
  ];

  return (
    <section className="section container" id="skills">
      <Reveal>
        <h2 className="section-title">My <span>Skills</span></h2>
      </Reveal>
      
      <Reveal delay={0.2}>
        <p className="text-secondary" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
          Here are a few technologies I've been working with recently.
        </p>
      </Reveal>
      
      <div className={styles.skills}>
        {skills.map((skill, index) => (
          <Reveal key={index} delay={0.2 + index * 0.05}>
            <div className={styles.skillPill}>
              {skill}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
