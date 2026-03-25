import { RevealOnScroll } from "../RevealOnScroll"; 
import ConnectWithMe from "./ConnectWithMe";
import { FaDownload } from "react-icons/fa";


export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 pt-28 pb-14 bg-black"
    >
      <RevealOnScroll>
        <div className="text-center z-10 w-full max-w-5xl mx-auto">
          <div className="flex flex-col items-center mb-8">
            <img
              src="/mukunda_portfolio/DSC_0463.JPG"
              alt="Mukunda Krishna Ramisetti"
              className="w-44 h-44 sm:w-56 sm:h-56 object-cover rounded-full mb-6 border-4 border-cyan-400/60 shadow-xl shadow-cyan-500/20"
            />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
              Hi, I&apos;m Mukunda Krishna Ramisetti
            </h1>
          </div>
          <section className="text-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/70 backdrop-blur-sm">
              <p className="text-sm sm:text-base md:text-lg mb-5 text-gray-200 leading-relaxed">
                I am a passionate <strong>Full Stack Java Developer</strong> with over two years of experience, alongside a 
                master&apos;s and a bachelor&apos;s in Computer Science.
              </p>

              <p className="text-sm sm:text-base md:text-lg mb-5 text-gray-300 leading-relaxed">
                My journey in software development began at <strong>LTIMindtree</strong>, where I contributed to the development 
                of an <strong>Airline Vacations App</strong> with loyalty points integration, improving efficiency by 40%. 
                I worked extensively with <strong>Java, Spring Boot, REST APIs, and Angular</strong> to deliver scalable and high-performance solutions.
              </p>

              <p className="text-sm sm:text-base md:text-lg mb-5 text-gray-300 leading-relaxed">
                My expertise spans from developing robust <strong>microservices architectures</strong> to implementing secure 
                <strong>OAuth2 and JWT authentication</strong>. I also have hands-on experience setting up <strong>CI/CD pipelines, 
                cloud infrastructure, and DevOps automation</strong>.
              </p>

              <p className="text-sm sm:text-base md:text-lg font-semibold text-cyan-200">
                I am now seeking a full-time position as a <strong>Software Engineer</strong>, where I can leverage my skills 
                to drive innovation and excellence in the tech industry.
              </p>

              <p className="text-sm sm:text-base md:text-lg mt-5 text-gray-200">
                <strong>Let’s connect</strong> and explore how we can collaborate to build impactful solutions!
              </p>
            </div>
          </section>

          <div className="mt-7">
            <ConnectWithMe />
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-7">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded-xl font-medium shadow-lg hover:scale-105 transition-transform duration-300 hover:shadow-2xl"
            >
              View Projects
            </a>
            <a
              href="https://drive.google.com/file/d/1cKw8N9hZyaXuSDGRaNoOYzkcBV91sJLq/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 border border-cyan-400/40 text-white py-3 px-6 rounded-xl font-medium shadow-lg hover:scale-105 transition-transform duration-300 hover:shadow-2xl flex items-center justify-center"
            >
              <span>Download Resume</span>
              <FaDownload className="ml-2" />
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
