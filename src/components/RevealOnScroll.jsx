import { useEffect, useRef, useState } from "react";

export const RevealOnScroll = ({ children }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Safety fallback: force visible after 1.5s no matter what
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    // Try IntersectionObserver for smooth reveal
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        { threshold: 0, rootMargin: "100px" }
      );
      observer.observe(el);
      return () => {
        clearTimeout(timer);
        observer.disconnect();
      };
    } else {
      // No IntersectionObserver support — show immediately
      setIsVisible(true);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "none" : "translateY(24px)",
        transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
      }}
    >
      {children}
    </div>
  );
};
