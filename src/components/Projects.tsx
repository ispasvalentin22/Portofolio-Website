import Reveal from './Reveal';
import styles from './Projects.module.css';

interface Project {
  title: string;
  description?: string;
  context?: string;
  highlights?: string[];
  tech: string[];
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "E-Commerce Cloud Platform",
      context: "A German software company providing ERP solutions for small and medium-sized businesses, with a strong focus on eCommerce integration, order management, accounting and logistics.",
      highlights: [
        "Architected an asynchronous processing pipeline to mitigate external API quota limits, reducing rate-limit errors by 100% and enabling reliable processing of 50k+ operations/day",
        "Designed and implemented event-driven workflows using RabbitMQ and AWS SQS, ensuring reliable message delivery and preventing loss of critical business events",
        "Increased system throughput by 2–3x by transitioning to async workflows and leveraging Node.js parallel processing patterns",
        "Reduced external API calls by ~40% using Redis caching while improving response times and overall system stability",
        "Improved data consistency and performance by implementing database transactions and indexing strategies, reducing failed processes by ~50% and query response times by ~30–50%"
      ],
      tech: ["JavaScript", "TypeScript", "Node.js", "NestJS", "React", "PostgreSQL", "RabbitMQ",
        "Redis", "Docker", "Kubernetes", "Grafana", "Jest", "AWS Lambda", "SQS", "GitLab"]
    },
    {
      title: "Government Data Management Platform (Frontend)",
      context: "Platform for processing and managing official company publications data.",
      highlights: [
        "Developed and maintained complex Angular components for visualizing and managing large datasets of Swiss company publications",
        "Improved UI performance and responsiveness when handling high-volume data by optimizing change detection and implementing efficient state management patterns",
        "Built data-driven interfaces enabling users to filter, search, and process large sets of company records, improving usability and operational efficiency",
        "Integrated frontend with backend APIs for real-time data processing workflows, ensuring accurate and consistent data representation",
        "Enhanced user experience by reducing load times and improving interaction speed across key application flows"
      ],
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

                  {project.context && (
                    <p className={styles.context}>{project.context}</p>
                  )}

                  {project.highlights && (
                    <ul className={styles.highlights}>
                      {project.highlights.map((point, i) => (
                        <li key={i} className={styles.highlightItem}>
                          <span className={styles.highlightIcon}>✦</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {project.description && (
                    <p className={styles.description}>{project.description}</p>
                  )}

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
