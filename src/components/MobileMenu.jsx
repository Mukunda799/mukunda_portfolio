export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const links = [
    { href: "#home", label: "Home", icon: "🏠" },
    { href: "#education", label: "Education", icon: "🎓" },
    { href: "#skills", label: "Skills", icon: "⚡" },
    { href: "#experience", label: "Experience", icon: "💼" },
    { href: "#projects", label: "Projects", icon: "🚀" },
    { href: "#contact", label: "Contact", icon: "✉️" },
  ];

  return (
    <div
      className={`fixed inset-0 z-40 transition-all duration-500 ${
        menuOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#050508]/95 md:backdrop-blur-2xl"
        onClick={() => setMenuOpen(false)}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8">
        {/* Ambient glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full bg-indigo-500/10 blur-[100px] pointer-events-none" />

        <nav className="w-full max-w-sm space-y-3">
          {links.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`flex items-center gap-4 text-lg font-medium text-white/80 hover:text-white py-4 px-6 rounded-2xl border border-white/[0.06] bg-white/[0.03] hover:bg-white/[0.06] hover:border-indigo-500/30 transition-all duration-300 transform ${
                menuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{
                transitionDelay: menuOpen ? `${index * 60 + 100}ms` : "0ms",
              }}
            >
              <span className="text-xl">{link.icon}</span>
              <span>{link.label}</span>
            </a>
          ))}
        </nav>

        {/* Branding at bottom */}
        <p
          className={`absolute bottom-10 text-xs text-white/20 tracking-widest uppercase transition-all duration-500 ${
            menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: menuOpen ? "500ms" : "0ms" }}
        >
          mukunda.dev
        </p>
      </div>
    </div>
  );
};
