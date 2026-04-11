import { personalInfo } from "../../data";
import { SectionHeading } from "../ui/SectionHeading";
import { AnimatedSection } from "../ui/AnimatedSection";

export const About = () => {
  return (
    <section id="about" className="about-section py-20 md:py-24">
      <div className="w-full max-w-5xl mx-auto px-5">
        <SectionHeading>About Me</SectionHeading>

        <AnimatedSection delay={0.1}>
          <div className="about-content">
            <div className="about-text glass-card rounded-2xl p-6 md:p-8">
              {personalInfo.bio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
