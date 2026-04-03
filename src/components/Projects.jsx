import { FadeIn } from "./FadeIn";
import { projects } from "../data";

const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <FadeIn>
          <h2 className="section__title gradient-text">Featured Projects</h2>
        </FadeIn>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="card">
                <div className="project-card__num">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__desc">{project.description}</p>
                <div className="project-card__tags">
                  {project.technologies.map((tech, j) => (
                    <span key={j} className="badge">{tech}</span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card__link"
                >
                  View on GitHub <ArrowRight />
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
