import { projects } from "../../data";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { AnimatedSection } from "../ui/AnimatedSection";
import { ArrowRightIcon } from "../icons/Icons";

export const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-24">
      <div className="w-full max-w-5xl mx-auto px-5">
        <SectionHeading>Featured Projects</SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {projects.map((project, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <Card className="h-full flex flex-col group">
                {/* Number Badge */}
                <div
                  className="
                    inline-flex items-center justify-center
                    w-10 h-10 rounded-xl mb-4
                    text-sm font-bold text-white
                    transition-transform duration-300
                    group-hover:scale-110
                  "
                  style={{
                    background:
                      "linear-gradient(135deg, #818cf8, #06b6d4)",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* Title */}
                <h3
                  className="text-base font-bold mb-3"
                  style={{ color: "var(--text-primary)" }}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm leading-7 mb-4 flex-grow"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.technologies.map((tech, j) => (
                    <Badge key={j} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center gap-2
                    text-sm font-semibold
                    text-[rgb(var(--accent-rgb))]
                    transition-all duration-300
                    hover:gap-3 group/link
                  "
                >
                  View on GitHub
                  <ArrowRightIcon className="transition-transform duration-300 group-hover/link:translate-x-1" />
                </a>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
