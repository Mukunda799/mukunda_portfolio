import { Mail, Linkedin, Github } from "lucide-react";

const ConnectWithMe = () => {
  const socials = [
    {
      href: "mailto:mukundakrishnaramisetti04@gmail.com",
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      color: "hover:border-red-400/40 hover:shadow-red-500/20",
    },
    {
      href: "https://www.linkedin.com/in/mukunda-krishna-ramisetti/",
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      color: "hover:border-blue-400/40 hover:shadow-blue-500/20",
    },
    {
      href: "https://github.com/Mukunda799",
      icon: <Github className="w-5 h-5" />,
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
