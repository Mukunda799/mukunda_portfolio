const Footer = () => {
  return (
    <footer className="text-center px-4 py-6 bg-black border-t border-white/10 text-gray-300">
      <p className="text-sm sm:text-base">
        © {new Date().getFullYear()} Mukunda&apos;s portfolio. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
