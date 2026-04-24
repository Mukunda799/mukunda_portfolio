import { certifications } from "../../data";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { AnimatedSection } from "../ui/AnimatedSection";

const AwardIcon = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="8" r="6" />
    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
  </svg>
);

const CertIcon = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="18" height="14" x="3" y="3" rx="2" />
    <path d="M3 9h18" />
    <path d="m9 16 2 2 4-4" />
  </svg>
);

export const Certifications = () => {
  return (
    <section
      id="certifications"
      className="py-20 md:py-24"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="w-full max-w-5xl mx-auto px-5">
        <SectionHeading>Certifications & Awards</SectionHeading>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {certifications.map((cert, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <Card className="h-full group">
                <div className="flex items-start gap-3">
                  {/* Icon */}
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background:
                        cert.type === "Award"
                          ? "linear-gradient(135deg, #f59e0b, #ef4444)"
                          : "linear-gradient(135deg, #818cf8, #06b6d4)",
                      color: "#ffffff",
                    }}
                  >
                    {cert.type === "Award" ? (
                      <AwardIcon size={18} />
                    ) : (
                      <CertIcon size={18} />
                    )}
                  </div>

                  {/* Content */}
                  <div className="min-w-0">
                    <span
                      className="inline-block text-[0.65rem] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full mb-1.5"
                      style={{
                        background:
                          cert.type === "Award"
                            ? "rgba(245, 158, 11, 0.12)"
                            : "rgb(var(--accent-rgb) / 0.1)",
                        color:
                          cert.type === "Award"
                            ? "#f59e0b"
                            : "rgb(var(--accent-rgb))",
                      }}
                    >
                      {cert.type}
                    </span>
                    <h3
                      className="text-sm font-bold leading-snug"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {cert.title}
                    </h3>
                    {cert.description && (
                      <p
                        className="text-xs mt-1 leading-relaxed"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {cert.description}
                      </p>
                    )}
                  </div>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
