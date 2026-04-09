import { skillCategories } from "../../data";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import {
  StaggerContainer,
  StaggerItem,
} from "../ui/AnimatedSection";

export const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-24">
      <div className="w-full max-w-5xl mx-auto px-5">
        <SectionHeading>My Skills</SectionHeading>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {skillCategories.map((cat, i) => (
            <StaggerItem key={i}>
              <Card className="h-full group">
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl group-hover:animate-bounce-subtle transition-transform">
                    {cat.emoji}
                  </span>
                  <h3
                    className="text-base font-bold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {cat.title}
                  </h3>
                </div>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill, j) => (
                    <Badge key={j} variant="glow">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
