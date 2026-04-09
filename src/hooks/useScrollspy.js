import { useEffect, useState } from "react";

/**
 * Custom hook for tracking which section is currently in view.
 * Returns the href of the currently active nav link.
 */
export const useScrollspy = (sectionIds, offset = 100) => {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + offset;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i].replace("#", "");
        const element = document.getElementById(id);
        if (element && element.offsetTop <= scrollY) {
          setActiveId(sectionIds[i]);
          return;
        }
      }
      setActiveId(sectionIds[0]);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds, offset]);

  return activeId;
};
