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
    <section id="projects" className="min-h-screen flex items-center justify-center py-20 bg-black text-white">
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-extrabold mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent animate-pulse">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <div
                key={index}
                className="relative rounded-2xl p-8 shadow-lg border border-gray-800 bg-gray-900 overflow-hidden transition transform hover:scale-105 hover:shadow-2xl"
              >
                <div className="absolute top-4 left-4 bg-blue-500 p-3 rounded-full shadow-md">
                  <FaProjectDiagram className="text-white text-3xl" />
                </div>
                <h3 className="text-2xl font-semibold mt-14 text-blue-400">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {project.technologies.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-gray-800 text-white py-2 px-4 rounded-full text-sm font-medium hover:bg-blue-500 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6">
                  <a
                    href={project.link}
                    className="text-xl font-semibold text-blue-400 hover:text-blue-300 transition"
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