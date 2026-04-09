import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { education } from "../../data";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { AnimatedSection } from "../ui/AnimatedSection";
import { ChevronDownIcon } from "../icons/Icons";

export const Education = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
      id="education"
      className="py-20 md:py-24"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="w-full max-w-5xl mx-auto px-5">
        <SectionHeading>Education</SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {education.map((edu, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <Card className="h-full">
                {/* Header */}
                <div className="flex items-start gap-4 mb-3">
                  <div
                    className="w-12 h-12 rounded-xl overflow-hidden border flex-shrink-0 p-1 bg-white"
                    style={{ borderColor: "var(--border-color)" }}
                  >
                    <img
                      src={edu.logo}
                      alt={edu.university}
                      loading="lazy"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="min-w-0">
                    <h3
                      className="text-[0.95rem] font-bold leading-snug"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {edu.university}
                    </h3>
                    <p
                      className="text-[0.83rem] mt-0.5"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {edu.degree}
                    </p>
                    <p
                      className="text-xs mt-1"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {edu.duration}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
                      GPA:{" "}
                      <span className="text-[rgb(var(--accent-rgb))] font-semibold">
                        {edu.gpa}
                      </span>
                    </p>
                  </div>
                </div>

                {/* Toggle */}
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === i ? null : i)
                  }
                  className="
                    w-full flex items-center justify-center gap-1.5
                    mt-4 py-1.5 text-xs font-medium rounded-lg
                    transition-all duration-300
                    text-[var(--text-muted)]
                    hover:text-[rgb(var(--accent-rgb))]
                  "
                >
                  {openIndex === i ? "Hide" : "Show"} Coursework
                  <motion.span
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="inline-flex"
                  >
                    <ChevronDownIcon />
                  </motion.span>
                </button>

                {/* Coursework */}
                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div
                        className="pt-4 mt-4 border-t flex flex-wrap gap-1.5"
                        style={{ borderColor: "var(--border-color)" }}
                      >
                        {edu.coursework.map((c, j) => (
                          <Badge key={j}>{c}</Badge>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
