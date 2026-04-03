import { useState } from "react";
import { FadeIn } from "./FadeIn";
import { education } from "../data";

const ChevronDown = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export const Education = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="education" className="section section--alt">
      <div className="container">
        <FadeIn>
          <h2 className="section__title gradient-text">Education</h2>
        </FadeIn>

        <div className="edu-grid">
          {education.map((edu, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="card">
                <div className="edu-card__header">
                  <div className="edu-card__logo">
                    <img src={edu.logo} alt={edu.university} loading="lazy" />
                  </div>
                  <div>
                    <div className="edu-card__uni">{edu.university}</div>
                    <div className="edu-card__degree">{edu.degree}</div>
                    <div className="edu-card__meta">{edu.duration}</div>
                    <div className="edu-card__meta">
                      GPA: <span className="edu-card__gpa">{edu.gpa}</span>
                    </div>
                  </div>
                </div>

                <button
                  className={`edu-card__toggle ${openIndex === i ? "edu-card__toggle--open" : ""}`}
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  {openIndex === i ? "Hide" : "Show"} Coursework
                  <ChevronDown />
                </button>

                <div className={`edu-card__coursework ${openIndex === i ? "edu-card__coursework--open" : ""}`}>
                  <div className="edu-card__coursework-inner">
                    {edu.coursework.map((c, j) => (
                      <span key={j} className="badge">{c}</span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
