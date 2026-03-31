import { useEffect, useRef, useState } from "react";

export const RevealOnScroll = ({ children }) => {
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) {
      setHasAnimated(true);
      return;
    }

    // If IntersectionObserver not supported, skip animation
    if (!("IntersectionObserver" in window)) {
      setHasAnimated(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "200px" }
    );

    observer.observe(el);

    // Absolute fallback: always show after 800ms
    const timer = setTimeout(() => setHasAnimated(true), 800);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: hasAnimated ? 1 : 0,
        transform: hasAnimated ? "none" : "translateY(20px)",
        transition: hasAnimated
          ? "opacity 0.6s ease-out, transform 0.6s ease-out"
          : "none",
      }}
    >
      {children}
    </div>
  );
};
