const Footer = () => {
  return (
    <footer className="relative border-t border-white/[0.06] bg-[#050508]">
      <div className="max-w-6xl mx-auto px-4 py-8 sm:py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <a href="#home" className="font-bold text-sm tracking-tight">
            <span className="text-white/60">mukunda</span>
            <span className="gradient-text font-extrabold">.dev</span>
          </a>

          {/* Copyright */}
          <p className="text-xs text-white/25 text-center">
            © {new Date().getFullYear()} Mukunda Krishna Ramisetti. All rights
            reserved.
          </p>

          {/* Back to top */}
          <a
            href="#home"
            className="text-xs text-white/30 hover:text-indigo-400 transition-colors duration-300"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
