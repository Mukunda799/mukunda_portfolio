/**
 * Glassmorphism Card component with hover effects.
 * Supports gradient border on hover.
 */
export const Card = ({
  children,
  className = "",
  hover = true,
  padding = "p-6",
  ...props
}) => {
  return (
    <div
      className={`
        glass-card rounded-2xl ${padding}
        shadow-sm
        transition-all duration-300
        ${hover ? "hover:-translate-y-2 hover:scale-[1.01] hover:shadow-[0_12px_40px_rgb(var(--accent-rgb)/0.12)] hover:border-[rgb(var(--accent-rgb)/0.3)]" : ""}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};
