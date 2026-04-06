import Reveal from './Reveal';
import styles from './Skills.module.css';

const skillCategories = [
  {
    name: "Languages",
    icon: "</>",
    skills: ["JavaScript", "TypeScript"],
  },
  {
    name: "Frontend",
    icon: "🎨",
    skills: ["Angular", "React", "Tailwind CSS"],
  },
  {
    name: "Backend",
    icon: "⚙️",
    skills: ["Node.js", "Express", "REST", "GraphQL"],
  },
  {
    name: "Databases",
    icon: "🗄️",
    skills: ["PostgreSQL", "MongoDB", "Redis"],
  },
  {
    name: "Cloud & DevOps",
    icon: "☁️",
    skills: ["Docker", "Kubernetes", "AWS Lambda", "GitLab", "Git"],
  },
  {
    name: "Messaging & Testing",
    icon: "📡",
    skills: ["SQS", "RabbitMQ", "Grafana", "Jest"],
  },
];

export default function Skills() {
  return (
    <section className="section container" id="skills">
      <Reveal>
        <h2 className="section-title">My <span>Skills</span></h2>
      </Reveal>

      <Reveal delay={0.2}>
        <p className="text-secondary" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
          Here are a few technologies I&apos;ve been working with recently.
        </p>
      </Reveal>

      <div className={styles.categoriesGrid}>
        {skillCategories.map((category, catIndex) => (
          <Reveal key={category.name} delay={0.2 + catIndex * 0.1}>
            <div className={styles.categoryCard}>
              <div className={styles.categoryHeader}>
                <span className={styles.categoryIcon}>{category.icon}</span>
                <h3 className={styles.categoryName}>{category.name}</h3>
              </div>
              <div className={styles.skillsList}>
                {category.skills.map((skill) => (
                  <div key={skill} className={styles.skillPill}>
                    <div className={styles.skillInner}>
                      {skill}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
