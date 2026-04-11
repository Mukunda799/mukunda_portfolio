import { socialLinks } from "../../data";
import { iconMap } from "../icons/Icons";

export const Footer = () => {
  return (
    <footer
      className="border-t py-8"
      style={{ borderColor: "var(--border-color)" }}
    >
      <div className="w-full max-w-6xl mx-auto px-5">
        {/* Gradient accent line */}
        <div
          className="w-16 h-0.5 rounded-full mx-auto mb-6"
          style={{
            background: "linear-gradient(90deg, #818cf8, #06b6d4)",
          }}
        />

        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          {/* Logo */}
          <a
            href="#home"
            className="text-sm font-bold hover:opacity-80 transition-opacity"
            style={{ color: "var(--text-primary)" }}
          >
            <span className="text-[rgb(var(--accent-rgb))] font-extrabold text-lg">MK</span>
          </a>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => {
              const IconComponent = iconMap[link.icon];
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="
                    flex items-center justify-center w-9 h-9 rounded-lg
                    transition-all duration-300
                    text-[var(--text-muted)]
                    hover:text-[rgb(var(--accent-rgb))]
                    hover:bg-[rgb(var(--accent-rgb)/0.08)]
                  "
                >
                  {IconComponent && <IconComponent size={16} />}
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <p
            className="text-xs text-center md:text-right"
            style={{ color: "var(--text-muted)" }}
          >
            &copy; {new Date().getFullYear()} Mukunda Krishna Ramisetti. All
            rights reserved.
          </p>
        </div>

        {/* Back to top */}
        <div className="flex justify-center mt-6">
          <a
            href="#home"
            className="
              text-xs font-medium px-4 py-2 rounded-lg
              transition-all duration-300
              text-[var(--text-muted)]
              hover:text-[rgb(var(--accent-rgb))]
              hover:bg-[rgb(var(--accent-rgb)/0.05)]
            "
          >
            Back to top &uarr;
          </a>
        </div>
      </div>
    </footer>
  );
};
