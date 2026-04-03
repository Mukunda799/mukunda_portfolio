import { FadeIn } from "./FadeIn";
import { skillCategories } from "../data";

export const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <FadeIn>
          <h2 className="section__title gradient-text">My Skills</h2>
        </FadeIn>

        <div className="skills-grid">
          {skillCategories.map((cat, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div className="card skill-card">
                <div className="skill-card__header">
                  <span className="skill-card__emoji">{cat.emoji}</span>
                  <h3 className="skill-card__title">{cat.title}</h3>
                </div>
                <div className="skill-card__badges">
                  {cat.skills.map((skill, j) => (
                    <span key={j} className="badge">{skill}</span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
