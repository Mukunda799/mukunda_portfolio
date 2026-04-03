import { RevealOnScroll } from "../RevealOnScroll";
import ConnectWithMe from "./ConnectWithMe";
import { FaDownload } from "react-icons/fa";

export const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 pt-24 pb-16 overflow-hidden"
    >
      {/* Background ambient effects */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-indigo-600/8 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <RevealOnScroll>
        <div className="relative z-10 text-center w-full max-w-4xl mx-auto">
          {/* Profile image with animated glow ring */}
          <div className="flex flex-col items-center mb-10">
            <div className="relative mb-8">
              {/* Rotating gradient ring */}
              <div className="absolute -inset-2 rounded-full animate-spin-slow bg-gradient-to-r from-indigo-500 via-cyan-400 to-purple-500 opacity-60 blur-sm" />
              <div className="absolute -inset-2 rounded-full animate-spin-slow bg-gradient-to-r from-indigo-500 via-cyan-400 to-purple-500 opacity-30" />
              <img
                src="/mukunda_portfolio/DSC_0463_optimized.jpg"
                alt="Mukunda Krishna Ramisetti"
                fetchpriority="high"
                decoding="async"
                className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 object-cover rounded-full border-[3px] border-[#050508] shadow-2xl"
              />
            </div>

            {/* Name */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-3">
              <span className="text-white">Hi, I&apos;m </span>
              <span className="gradient-text">Mukunda Krishna</span>
            </h1>
            <p className="text-base sm:text-lg text-white/50 font-medium tracking-wide">
              Full Stack Java Developer • Software Engineer
            </p>
          </div>

          {/* Bio card */}
          <div className="glass-card p-6 sm:p-8 md:p-10 text-left max-w-3xl mx-auto mb-8">
            <p className="text-sm sm:text-base text-white/70 leading-relaxed mb-4">
              I am a passionate{" "}
              <span className="text-indigo-300 font-semibold">
                Full Stack Java Developer
              </span>{" "}
              with over two years of experience, alongside a master&apos;s and a
              bachelor&apos;s in Computer Science.
            </p>

            <p className="text-sm sm:text-base text-white/60 leading-relaxed mb-4">
              My journey in software development began at{" "}
              <span className="text-white/90 font-semibold">LTIMindtree</span>,
              where I contributed to the development of an{" "}
              <span className="text-cyan-300/90 font-medium">
                Airline Vacations App
              </span>{" "}
              with loyalty points integration, improving efficiency by 40%. I
              worked extensively with{" "}
              <span className="text-white/80">
                Java, Spring Boot, REST APIs, and Angular
              </span>{" "}
              to deliver scalable and high-performance solutions.
            </p>

            <p className="text-sm sm:text-base text-white/60 leading-relaxed mb-4">
              My expertise spans from developing robust{" "}
              <span className="text-white/80">microservices architectures</span>{" "}
              to implementing secure{" "}
              <span className="text-white/80">
                OAuth2 and JWT authentication
              </span>
              . I also have hands-on experience setting up{" "}
              <span className="text-white/80">
                CI/CD pipelines, cloud infrastructure, and DevOps automation
              </span>
              .
            </p>

            <p className="text-sm sm:text-base text-indigo-300/80 font-medium leading-relaxed">
              I am now seeking a full-time position as a{" "}
              <span className="text-white font-semibold">
                Software Engineer
              </span>
              , where I can leverage my skills to drive innovation and
              excellence.
            </p>

            <p className="text-sm sm:text-base text-white/50 mt-4">
              <strong className="text-white/70">Let&apos;s connect</strong> and
              explore how we can collaborate to build impactful solutions!
            </p>
          </div>

          {/* Connect links */}
          <div className="mb-8">
            <ConnectWithMe />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#projects"
              className="glow-btn inline-flex items-center justify-center bg-gradient-to-r from-indigo-600 to-indigo-500 text-white py-3.5 px-8 rounded-xl font-semibold text-sm sm:text-base shadow-lg shadow-indigo-500/25"
            >
              View Projects
            </a>
            <a
              href="https://drive.google.com/file/d/1cKw8N9hZyaXuSDGRaNoOYzkcBV91sJLq/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="glow-btn inline-flex items-center justify-center bg-white/[0.04] border border-white/10 text-white py-3.5 px-8 rounded-xl font-semibold text-sm sm:text-base hover:border-indigo-500/40"
            >
              <span>Download Resume</span>
              <FaDownload className="ml-2.5 text-indigo-400" />
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
