import { AnimatedSection } from "./AnimatedSection";

/**
 * Section heading with gradient text and animated accent underline.
 */
export const SectionHeading = ({ children, className = "" }) => {
  return (
    <AnimatedSection className="mb-12 md:mb-16">
      <h2
        className={`
          text-3xl md:text-4xl font-extrabold text-center
          tracking-tight gradient-text
          ${className}
        `}
      >
        {children}
      </h2>
      <div className="flex justify-center mt-4">
        <div
          className="h-1 w-12 rounded-full"
          style={{ background: "linear-gradient(90deg, #818cf8, #06b6d4)" }}
        />
      </div>
    </AnimatedSection>
  );
};
