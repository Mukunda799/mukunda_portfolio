import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experiences } from "../../data";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { AnimatedSection } from "../ui/AnimatedSection";
import { ChevronDownIcon } from "../icons/Icons";

export const Experience = () => {
  const [openExp, setOpenExp] = useState(null);

  return (
    <section
      id="experience"
      className="py-20 md:py-24"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="w-full max-w-5xl mx-auto px-5">
        <SectionHeading>Experience</SectionHeading>

        <div className="max-w-3xl mx-auto flex flex-col gap-5">
          {experiences.map((exp, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <Card>
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl overflow-hidden border flex-shrink-0 p-1 bg-white"
                    style={{ borderColor: "var(--border-color)" }}
                  >
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      loading="lazy"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="min-w-0">
                    <h3
                      className="text-lg font-bold"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-[rgb(var(--accent-rgb))]">
                      {exp.company}
                    </p>
                    <p
                      className="text-xs mt-0.5"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {exp.period}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p
                  className="text-sm leading-7 mb-4"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {exp.description}
                </p>

                {/* Toggle */}
                <button
                  onClick={() => setOpenExp(openExp === i ? null : i)}
                  className="
                    flex items-center gap-2 px-4 py-2
                    text-sm font-semibold rounded-xl
                    transition-all duration-300
                    text-[rgb(var(--accent-rgb))]
                    bg-[rgb(var(--accent-rgb)/0.08)]
                    hover:bg-[rgb(var(--accent-rgb)/0.15)]
                  "
                >
                  {openExp === i ? "Hide" : "View"} Responsibilities
                  <motion.span
                    animate={{ rotate: openExp === i ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="inline-flex"
                  >
                    <ChevronDownIcon />
                  </motion.span>
                </button>

                {/* Responsibilities Dropdown */}
                <AnimatePresence initial={false}>
                  {openExp === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <ul className="pt-4 flex flex-col gap-2">
                        {exp.responsibilities.map((r, j) => (
                          <motion.li
                            key={j}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: j * 0.04 }}
                            className="flex items-start gap-3 p-3 rounded-xl text-sm leading-relaxed"
                            style={{
                              background: "var(--bg-secondary)",
                              color: "var(--text-secondary)",
                            }}
                          >
                            <span className="text-[rgb(var(--accent-rgb))] font-bold flex-shrink-0 mt-0.5">
                              ▹
                            </span>
                            {r}
                          </motion.li>
                        ))}
                      </ul>
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
