import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { useScrollspy } from "../../hooks/useScrollspy";
import { navLinks } from "../../data";
import { SunIcon, MoonIcon } from "../icons/Icons";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const activeId = useScrollspy(
    navLinks.map((l) => l.href),
    120
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        id="navbar"
        className={`
          fixed top-0 left-0 right-0 z-[102] h-16
          transition-all duration-300
          ${scrolled ? "glass-nav shadow-lg shadow-black/5" : "border-b border-transparent"}
        `}
      >
      <div className="w-full max-w-6xl mx-auto px-5 h-full flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="text-lg font-bold tracking-tight hover:opacity-80 transition-opacity"
          style={{ color: "var(--text-primary)" }}
        >
          <span className="text-[rgb(var(--accent-rgb))] font-extrabold text-xl">MK</span>
        </a>

        {/* Right side */}
        <div className="flex items-center gap-1">
          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`
                  px-3.5 py-2 text-sm font-medium rounded-lg
                  transition-all duration-300 relative
                  ${
                    activeId === link.href
                      ? "text-[rgb(var(--accent-rgb))] bg-[rgb(var(--accent-rgb)/0.08)]"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[rgb(var(--accent-rgb)/0.05)]"
                  }
                `}
              >
                {link.label}
                {activeId === link.href && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 rounded-full bg-[rgb(var(--accent-rgb))]"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="
              flex items-center justify-center w-10 h-10
              rounded-lg ml-2
              transition-all duration-300
              text-[var(--text-secondary)]
              hover:text-[rgb(var(--accent-rgb))]
              hover:bg-[rgb(var(--accent-rgb)/0.08)]
            "
            aria-label="Toggle theme"
          >
            <motion.div
              key={isDark ? "sun" : "moon"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              {isDark ? <SunIcon /> : <MoonIcon />}
            </motion.div>
          </button>

          {/* Hamburger */}
          <button
            className="
              flex md:hidden flex-col justify-center items-center
              w-10 h-10 gap-[5px] rounded-lg ml-1
              transition-all duration-300 relative z-[102]
              hover:bg-[rgb(var(--accent-rgb)/0.08)]
            "
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-[18px] h-[2px] rounded-sm transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
              style={{ background: "var(--text-primary)" }}
            />
            <span
              className={`block w-[18px] h-[2px] rounded-sm transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
              style={{ background: "var(--text-primary)" }}
            />
            <span
              className={`block w-[18px] h-[2px] rounded-sm transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
              style={{ background: "var(--text-primary)" }}
            />
          </button>
        </div>
      </div>
    </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[100] md:hidden"
            onClick={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Sidebar */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="
              fixed top-0 right-0 bottom-0 w-64 shadow-2xl
              flex flex-col items-center justify-start py-20 gap-4
              md:hidden z-[101] overflow-y-auto border-l
            "
            style={{ 
              backgroundColor: "var(--bg-primary)",
              borderColor: "var(--border-color)"
            }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 + 0.1 }}
                className={`
                  text-lg font-semibold py-3 px-8 rounded-xl
                  w-4/5 max-w-[300px] text-center
                  transition-all duration-300
                  ${
                    activeId === link.href
                      ? "text-[rgb(var(--accent-rgb))] bg-[rgb(var(--accent-rgb)/0.08)]"
                      : "text-[var(--text-secondary)] hover:text-[rgb(var(--accent-rgb))] hover:bg-[rgb(var(--accent-rgb)/0.05)]"
                  }
                `}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
