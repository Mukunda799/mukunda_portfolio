/**
 * Reusable Badge component for skills, technologies, coursework.
 * Features hover animation with subtle scale and color shift.
 */
export const Badge = ({ children, variant = "default", className = "" }) => {
  const variants = {
    default:
      "bg-[rgb(var(--accent-rgb)/0.08)] text-[rgb(var(--accent-rgb))] hover:bg-[rgb(var(--accent-rgb)/0.15)]",
    outline:
      "border border-[var(--border-color)] text-[var(--text-secondary)] hover:border-[rgb(var(--accent-rgb)/0.4)] hover:text-[rgb(var(--accent-rgb))]",
    glow:
      "bg-[rgb(var(--accent-rgb)/0.1)] text-[rgb(var(--accent-rgb))] hover:bg-[rgb(var(--accent-rgb)/0.2)] hover:shadow-[0_0_12px_rgb(var(--accent-rgb)/0.15)]",
  };

  return (
    <span
      className={`
        inline-block px-3 py-1.5 rounded-lg text-xs font-medium
        transition-all duration-300 cursor-default
        hover:-translate-y-0.5
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
};
