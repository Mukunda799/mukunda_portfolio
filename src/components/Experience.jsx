import { useState } from "react";
import { FadeIn } from "./FadeIn";
import { experiences } from "../data";

const ChevronDown = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export const Experience = () => {
  const [openExp, setOpenExp] = useState(null);

  return (
    <section id="experience" className="section section--alt">
      <div className="container">
        <FadeIn>
          <h2 className="section__title gradient-text">Experience</h2>
        </FadeIn>

        <div className="exp-list">
          {experiences.map((exp, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="card">
                <div className="exp-card__header">
                  <div className="exp-card__logo">
                    <img src={exp.logo} alt={exp.company} loading="lazy" />
                  </div>
                  <div>
                    <div className="exp-card__role">{exp.role}</div>
                    <div className="exp-card__company">{exp.company}</div>
                    <div className="exp-card__period">{exp.period}</div>
                  </div>
                </div>

                <p className="exp-card__desc">{exp.description}</p>

                <button
                  className={`exp-card__toggle ${openExp === i ? "exp-card__toggle--open" : ""}`}
                  onClick={() => setOpenExp(openExp === i ? null : i)}
                >
                  {openExp === i ? "Hide" : "View"} Responsibilities
                  <ChevronDown />
                </button>

                <div className={`exp-dropdown ${openExp === i ? "exp-dropdown--open" : ""}`}>
                  <ul className="exp-dropdown__list">
                    {exp.responsibilities.map((r, j) => (
                      <li key={j} className="exp-dropdown__item">{r}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
