import { FadeIn } from "./FadeIn";
import { personalInfo, socialLinks } from "../data";

const iconMap = {
  email: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  ),
  linkedin: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
    </svg>
  ),
  github: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  ),
};

const DownloadIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

export const Hero = () => {
  return (
    <section id="home" className="hero">
      <FadeIn>
        <div className="hero__content">
          <div className="hero__image">
            <img
              src={personalInfo.profileImage}
              alt={personalInfo.fullName}
              fetchpriority="high"
              decoding="async"
            />
          </div>

          <h1 className="hero__name">
            Hi, I&apos;m <span className="gradient-text">{personalInfo.name}</span>
          </h1>
          <p className="hero__subtitle">{personalInfo.title}</p>

          <div className="hero__bio">
            {personalInfo.bio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="hero__socials">
            {socialLinks.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={s.name}
              >
                {iconMap[s.icon]}
                <span>{s.name}</span>
              </a>
            ))}
          </div>

          <div className="hero__cta">
            <a href="#projects" className="btn btn--primary">View Projects</a>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline"
            >
              Download Resume <DownloadIcon />
            </a>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};
