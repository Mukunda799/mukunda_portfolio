import { RevealOnScroll } from "../RevealOnScroll";
import { FaExternalLinkAlt } from "react-icons/fa";

export const Projects = () => {
  const projects = [
    {
      title: "Automated Testing of E-Commerce Platforms",
      description:
        "Developed automated test suites for Amazon, UrbanLadder, and Lenskart using Selenium, TestNG, and BDD frameworks to ensure a seamless user experience. Automated 25+ critical test cases per platform, reducing manual efforts and enhancing test efficiency.",
      technologies: [
        "Selenium",
        "TestNG",
        "Cucumber",
        "Serenity BDD",
        "Java",
        "JUnit",
        "Maven",
        "Gradle",
        "Jenkins",
        "GitHub Actions",
        "Postman",
        "RestAssured",
        "JIRA",
        "TestRail",
      ],
      link: "https://github.com/Mukunda799/Com-mukunda",
      accent: "from-indigo-500 to-cyan-500",
    },
    {
      title: "Hotel Booking Management",
      description:
        "Developed a Hotel Management Program in Java that lets users book rooms, check available rooms, delete customer records, and search for rooms by customer name. It also saves and loads room data from files and displays rooms in alphabetical order.",
      technologies: [
        "Java",
        "Arrays",
        "File I/O",
        "BufferedReader",
        "PrintWriter",
        "Scanner",
        "Eclipse",
        "PostgreSQL",
        "Maven",
      ],
      link: "https://github.com/Mukunda799/Java-hotel-booking-program-master",
      accent: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-20 sm:py-28 flex items-center justify-center text-white px-4 section-gradient"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-2 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12 sm:mb-16 gradient-text">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="glass-card glass-card-hover relative overflow-hidden p-5 sm:p-7 text-left group"
              >
                {/* Gradient accent line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${project.accent} opacity-60 group-hover:opacity-100 transition-opacity`}
                />

                {/* Project number badge */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${project.accent} flex items-center justify-center text-white font-bold text-sm shadow-lg`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white/90 leading-snug">
                    {project.title}
                  </h3>
                </div>

                <p className="text-sm text-white/50 mb-5 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech, key) => (
                    <span key={key} className="skill-badge text-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors duration-300 group/link"
                >
                  View on GitHub
                  <FaExternalLinkAlt className="text-xs transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};