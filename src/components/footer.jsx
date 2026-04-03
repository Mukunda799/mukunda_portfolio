export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <a href="#home" className="footer__logo">
          mukunda<span>.dev</span>
        </a>
        <p className="footer__copy">
          &copy; {new Date().getFullYear()} Mukunda Krishna Ramisetti. All rights reserved.
        </p>
        <a href="#home" className="footer__top">Back to top &uarr;</a>
      </div>
    </footer>
  );
};
