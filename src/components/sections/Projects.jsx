import { RevealOnScroll } from "../RevealOnScroll";
import { FaProjectDiagram } from "react-icons/fa";

export const Projects = () => {
  const projects = [
    {
      title: "Automated Testing of E-Commerce Platforms",
      description:
        "Developed automated test suites for Amazon, UrbanLadder, and Lenskart using Selenium, TestNG, and BDD frameworks to ensure a seamless user experience. Automated 25+ critical test cases per platform, reducing manual efforts and enhancing test efficiency. ",
      technologies: ["Selenium", "TestNG", "Cucumber", "Serenity BDD", "Java", "JUnit", "Maven", "Gradle", "Jenkins", "GitHub Actions", "Postman", "RestAssured", "JIRA", "TestRail"],
      link: "https://github.com/Mukunda799/Com-mukunda",
    },
    {
      title: "Hotel Booking Management",
      description:
        "I have developed a Hotel Management Program in Java that lets users book rooms, check available rooms, delete customer records, and search for rooms by customer name. It also saves and loads room data from files and displays rooms in alphabetical order.",
      technologies: ["Java", "Arrays", "File I/O", "BufferedReader", "PrintWriter", "Scanner", "Eclipse", "Postgre SQL", "Maven"],
      link: "https://github.com/Mukunda799/Java-hotel-booking-program-master",
    },
   
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20 bg-black text-white px-4">
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-2 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-10 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="relative rounded-2xl p-5 sm:p-7 shadow-lg border border-gray-800 bg-gray-900 overflow-hidden transition transform hover:scale-[1.02] hover:shadow-2xl text-left"
              >
                <div className="absolute top-4 left-4 bg-blue-500 p-3 rounded-full shadow-md">
                  <FaProjectDiagram className="text-white text-3xl" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold mt-14 text-blue-400">{project.title}</h3>
                <p className="text-sm sm:text-base text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-gray-800 text-white py-1.5 px-3 rounded-full text-xs sm:text-sm font-medium hover:bg-blue-500 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base sm:text-lg font-semibold text-blue-400 hover:text-blue-300 transition"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};