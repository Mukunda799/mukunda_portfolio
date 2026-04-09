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
        ${hover ? "hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(var(--accent-rgb)/0.08)]" : ""}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};
