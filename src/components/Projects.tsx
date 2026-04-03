import Reveal from './Reveal';
import styles from './Projects.module.css';

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Cloud Platform (Microservices Architecture)",
      description: "A platform for managing e-commerce operations (orders, products, customers, shipping, etc.) and aggregating data across multiple marketplaces and ERP-integrated shops.The system was built using a microservices architecture with event - driven communication, REST APIs, and background processing for high scalability and performance.",
      tech: ["JavaScript", "TypeScript", "Node.js", "NestJS", "React", "PostgreSQL", "RabbitMQ",
        "Redis", "Docker", "Kubernetes", "Grafana", "Jest", "AWS Lambda", "SQS", "GitLab"]
    },
    {
      title: "Government Data Management Platform (Frontend)",
      description: "Development of a data-intensive Angular application used for managing and visualizing business data provided by the Swiss government. Focused on building a scalable, maintainable frontend architecture and delivering a performant, user-friendly experience for complex datasets.",
      tech: ["Angular", "TypeScript", "RxJS", "GraphQL"]
    }
  ];

  return (
    <section className="section container" id="projects">
      <Reveal>
        <h2 className="section-title">Featured <span>Projects</span></h2>
      </Reveal>

      <div className={styles.projects}>
        {projects.map((project, index) => (
          <Reveal key={index} delay={0.2 + index * 0.1}>
            <article className={styles.card}>
              <div className={styles.cardInner}>
                <div className={styles.content}>
                  <h3 className={styles.title}>{project.title}</h3>
                  <div className={styles.divider}></div>
                  <p className={styles.description}>{project.description}</p>

                  <div className={styles.techStack}>
                    {project.tech.map((t, i) => (
                      <span key={i} className={styles.techItem}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
