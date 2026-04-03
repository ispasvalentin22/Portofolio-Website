import Reveal from './Reveal';
import styles from './Projects.module.css';

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with Next.js, Stripe integration, and a custom CMS dashboard for managing inventory.",
      tech: ["Next.js", "TypeScript", "Stripe", "Prisma"],
      github: "#",
      demo: "#"
    },
    {
      title: "Task Management App",
      description: "A real-time collaborative task manager featuring drag-and-drop boards, live updates via WebSockets, and deep analytics.",
      tech: ["React", "Node.js", "Socket.io", "MongoDB"],
      github: "#",
      demo: "#"
    },
    {
      title: "AI Writing Assistant",
      description: "An AI-powered application that helps users write better emails and essays using OpenAI's GPT models.",
      tech: ["Next.js", "OpenAI API", "Tailwind", "Vercel"],
      github: "#",
      demo: "#"
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
            <div className={styles.card}>
              <div className={styles.cardInner}>
                <div className={styles.imageArea}></div>
                <div className={styles.content}>
                  <h3 className={styles.title}>{project.title}</h3>
                  <p className={styles.description}>{project.description}</p>
                  
                  <div className={styles.techStack}>
                    {project.tech.map((t, i) => (
                      <span key={i} className={styles.techItem}>{t}</span>
                    ))}
                  </div>
                  
                  <div className={styles.links}>
                    <a href={project.github} className={styles.link} title="GitHub Repo">
                      <span>GitHub</span>
                    </a>
                    <a href={project.demo} className={styles.link} title="Live Demo">
                      <span>External Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
