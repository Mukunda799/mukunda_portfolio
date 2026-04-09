/**
 * Animated gradient text component.
 */
export const GradientText = ({ children, className = "", as: Tag = "span" }) => {
  return <Tag className={`gradient-text ${className}`}>{children}</Tag>;
};
