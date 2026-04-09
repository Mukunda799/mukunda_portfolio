import { motion } from "framer-motion";
import { personalInfo, socialLinks } from "../../data";
import { iconMap, DownloadIcon } from "../icons/Icons";
import { Button } from "../ui/Button";
import { AnimatedSection } from "../ui/AnimatedSection";

const FloatingOrb = ({ className }) => (
  <div
    className={`absolute rounded-full pointer-events-none blur-3xl opacity-30 dark:opacity-20 ${className}`}
  />
);

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 px-5"
    >
      {/* Animated Background Orbs */}
      <FloatingOrb
        className="w-[400px] h-[400px] -top-[10%] left-[20%] bg-indigo-400/30 dark:bg-indigo-500/20"
        style={{ animation: "orb-float-1 12s ease-in-out infinite" }}
      />
      <FloatingOrb
        className="w-[350px] h-[350px] top-[40%] right-[10%] bg-cyan-400/20 dark:bg-cyan-500/15"
        style={{ animation: "orb-float-2 15s ease-in-out infinite" }}
      />
      <FloatingOrb
        className="w-[250px] h-[250px] bottom-[10%] left-[10%] bg-violet-400/20 dark:bg-violet-500/15"
        style={{ animation: "orb-float-1 18s ease-in-out infinite reverse" }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        {/* Profile Image */}
        <AnimatedSection delay={0.1}>
          <motion.div
            className="relative mx-auto mb-8 w-fit"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Animated ring */}
            <div
              className="absolute -inset-1.5 rounded-full opacity-60 animate-spin-slow"
              style={{
                background:
                  "conic-gradient(from 0deg, #818cf8, #06b6d4, #a78bfa, #818cf8)",
              }}
            />
            <div
              className="absolute -inset-1.5 rounded-full blur-md opacity-40 animate-spin-slow"
              style={{
                background:
                  "conic-gradient(from 0deg, #818cf8, #06b6d4, #a78bfa, #818cf8)",
              }}
            />
            <img
              src={personalInfo.profileImage}
              alt={personalInfo.fullName}
              fetchpriority="high"
              decoding="async"
              className="relative w-36 h-36 rounded-full object-cover border-4"
              style={{
                borderColor: "var(--bg-primary)",
              }}
            />
          </motion.div>
        </AnimatedSection>

        {/* Name */}
        <AnimatedSection delay={0.2}>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3 leading-tight">
            <span style={{ color: "var(--text-primary)" }}>Hi, I&apos;m </span>
            <span className="gradient-text">{personalInfo.name}</span>
          </h1>
        </AnimatedSection>

        {/* Title */}
        <AnimatedSection delay={0.3}>
          <p
            className="text-base md:text-lg font-medium mb-8"
            style={{ color: "var(--text-muted)" }}
          >
            {personalInfo.title}
          </p>
        </AnimatedSection>

        {/* Bio Card */}
        <AnimatedSection delay={0.4}>
          <div
            className="glass-card rounded-2xl p-6 md:p-7 mb-8 text-left shadow-sm"
          >
            {personalInfo.bio.map((p, i) => (
              <p
                key={i}
                className={`text-sm leading-7 mb-2.5 last:mb-0 ${
                  i === personalInfo.bio.length - 1
                    ? "text-[rgb(var(--accent-rgb))] font-medium"
                    : ""
                }`}
                style={
                  i !== personalInfo.bio.length - 1
                    ? { color: "var(--text-secondary)" }
                    : {}
                }
              >
                {p}
              </p>
            ))}
          </div>
        </AnimatedSection>

        {/* Social Links */}
        <AnimatedSection delay={0.5}>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {socialLinks.map((link) => {
              const IconComponent = iconMap[link.icon];
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="
                    glass-card flex items-center gap-2.5
                    px-5 py-2.5 rounded-xl
                    text-sm font-medium
                    transition-all duration-300
                    text-[var(--text-secondary)]
                    hover:text-[rgb(var(--accent-rgb))]
                    hover:border-[rgb(var(--accent-rgb)/0.4)]
                    hover:-translate-y-0.5
                    hover:shadow-[0_4px_16px_rgb(var(--accent-rgb)/0.12)]
                  "
                >
                  {IconComponent && <IconComponent size={18} />}
                  <span className="hidden sm:inline">{link.name}</span>
                </a>
              );
            })}
          </div>
        </AnimatedSection>

        {/* CTA Buttons */}
        <AnimatedSection delay={0.6}>
          <div className="flex flex-wrap justify-center gap-3">
            <Button href="#projects" variant="primary">
              View Projects
            </Button>
            <Button
              href={personalInfo.resumeUrl}
              variant="outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume <DownloadIcon />
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
