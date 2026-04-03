const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const ConnectWithMe = () => {
  const socials = [
    {
      href: "mailto:mukundakrishnaramisetti04@gmail.com",
      icon: <MailIcon />,
      label: "Email",
      color: "hover:border-red-400/40 hover:shadow-red-500/20",
    },
    {
      href: "https://www.linkedin.com/in/mukunda-krishna-ramisetti/",
      icon: <LinkedinIcon />,
      label: "LinkedIn",
      color: "hover:border-blue-400/40 hover:shadow-blue-500/20",
    },
    {
      href: "https://github.com/Mukunda799",
      icon: <GithubIcon />,
      label: "GitHub",
      color: "hover:border-purple-400/40 hover:shadow-purple-500/20",
    },
  ];

  return (
    <div className="flex justify-center gap-3 sm:gap-4">
      {socials.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.label}
          className={`group flex items-center gap-2.5 px-5 py-3 rounded-xl border border-white/[0.08] bg-white/[0.03] text-white/60 hover:text-white hover:bg-white/[0.06] transition-all duration-300 hover:shadow-lg ${s.color}`}
        >
          <span className="transition-transform duration-300 group-hover:scale-110">
            {s.icon}
          </span>
          <span className="hidden sm:inline text-sm font-medium">
            {s.label}
          </span>
        </a>
      ))}
    </div>
  );
};

export default ConnectWithMe;
