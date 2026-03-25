export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const links = [
    { href: "#home", label: "Home" },
    { href: "#education", label: "Education" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div
      className={`fixed inset-0 bg-black/90 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-all duration-300 ${
        menuOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-5 right-5 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>

      <div className="w-full max-w-xs px-6">
        {links.map((link, index) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className={`block text-center text-xl font-semibold text-white my-3 py-3 rounded-xl border border-white/10 bg-white/5 transform transition-all duration-300 ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
            style={{ transitionDelay: `${index * 40}ms` }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};
