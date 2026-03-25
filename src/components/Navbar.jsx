import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  return (
    <nav className="fixed top-0 w-full z-40 bg-black/70 backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-lg sm:text-xl font-bold text-white">
            mukunda&apos;s<span className="text-blue-500"> tech</span>
          </a>

          <div
            className="w-8 h-8 rounded-md border border-white/20 grid place-items-center cursor-pointer z-50 md:hidden text-white"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8 text-sm">
            <a
              href="#home"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="#education"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Education
            </a>
            <a
              href="#skills"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Skills
            </a>
            <a
              href="#experience"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
