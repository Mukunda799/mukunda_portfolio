/**
 * Reusable Button component with primary and outline variants.
 * Features gradient hover effects and subtle glow.
 */
export const Button = ({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  type = "button",
  ...props
}) => {
  const baseClasses = `
    inline-flex items-center justify-center gap-2
    px-7 py-3 rounded-xl font-semibold text-sm
    transition-all duration-300
    focus-ring
  `;

  const variants = {
    primary: `
      bg-[rgb(var(--accent-rgb))] text-white
      hover:bg-[rgb(var(--accent-hover-rgb))]
      hover:-translate-y-0.5
      hover:shadow-[0_8px_25px_rgb(var(--accent-rgb)/0.35)]
      active:translate-y-0
    `,
    outline: `
      border-[1.5px] border-[rgb(var(--accent-rgb))]
      text-[rgb(var(--accent-rgb))]
      bg-transparent
      hover:bg-[rgb(var(--accent-rgb)/0.08)]
      hover:-translate-y-0.5
      active:translate-y-0
    `,
    ghost: `
      text-[var(--text-secondary)]
      hover:text-[rgb(var(--accent-rgb))]
      hover:bg-[rgb(var(--accent-rgb)/0.08)]
    `,
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  );
};
