import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { FaBriefcase, FaTimes, FaEye } from "react-icons/fa";

export const ExperienceSection = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);

  const experiences = [
    {
      company: "LTIMindtree",
      logo: "/mukunda_portfolio/LTIMindtree_logo.jpg",
      role: "Full Stack Developer",
      period: "June 2021 - Jan 2023",
      description:
        "Developed and deployed the Airline Vacations App with Loyalty Points using Java, Spring Boot, and Angular, improving airline loyalty operations by 40%. Built real-time dashboards, optimized APIs, and implemented secure authentication with OAuth2 and JWT.",
      responsibilities: [
        "Designed, developed, and deployed the Airline Vacations App with Loyalty Points App using Java, Spring Boot, RESTful APIs ensuring secure transactions and achieving a 40% efficiency improvement in airline loyalty program operations.",
        "Built real-time dashboards with AngularJS, TypeScript to display loyalty points, bookings, luggage, passenger details, and operational metrics, enabling airline staff to track and manage customer rewards efficiently while improving decision-making and operational visibility.",
        "Built and optimized RESTful APIs and microservices using Spring MVC, Spring Boot, and JPA, implementing data validation, request authentication, and logging mechanisms for high-availability applications.",
        "Conducted unit testing with Junit/Postman, achieving 100% test coverage to enhance system reliability and reduce production issues.",
        "Integrated Spring Security with OAuth2, JWT for authentication and authorization, ensuring compliance with industry standards for secure access control.",
        "Managed databases and writing SQL queries with Hibernate, JPA for PostgreSQL; used JIRA, Atlassian Confluence for project management.",
        "Implemented DevOps practices using GitHub, Jenkins; utilized Docker, Kubernetes, Groovy, Shell Scripting, AWS for scalable deployments.",
        "Participant of Agile (Scrum, TDD), CI/CD, and automation testing, conducting code reviews and promoting collaboration.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="relative py-20 sm:py-28 text-white flex flex-col items-center justify-center px-4 section-gradient"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12 sm:mb-16 gradient-text">
        Experience
      </h2>

      <div className="grid grid-cols-1 gap-6 max-w-3xl w-full px-0 sm:px-6 mx-auto">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="glass-card glass-card-hover relative overflow-hidden p-5 sm:p-7 group text-left cursor-pointer"
            onClick={() => setSelectedExperience(exp)}
          >
            {/* Gradient accent */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-500 to-cyan-400 opacity-60 group-hover:opacity-100 transition-opacity" />

            {/* Company Logo */}
            <div className="flex items-start gap-4 mb-4">
              <div className="shrink-0 w-14 h-14 rounded-xl overflow-hidden border border-white/10 bg-white/90 p-1 group-hover:scale-105 transition-transform duration-300">
                <img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white/90">
                  {exp.role}
                </h3>
                <h4 className="text-sm sm:text-base text-indigo-300/80 font-medium">
                  {exp.company}
                </h4>
                <p className="text-xs text-white/40 mt-0.5">{exp.period}</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-white/50 leading-relaxed mb-5">
              {exp.description}
            </p>

            {/* View Details Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedExperience(exp);
              }}
              className="glow-btn flex items-center gap-2 bg-indigo-600/80 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300"
            >
              <FaEye />
              View Responsibilities
            </button>
          </div>
        ))}
      </div>

      {/* Modal Dialog */}
      {selectedExperience && (
        <Dialog
          open={!!selectedExperience}
          onClose={() => setSelectedExperience(null)}
          className="fixed inset-0 flex items-center justify-center z-50"
        >
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/70 sm:backdrop-blur-lg"
            onClick={() => setSelectedExperience(null)}
          />

          <div className="relative z-10 glass-card p-6 sm:p-8 max-w-2xl w-[92%] sm:w-full border-white/10 text-white overflow-y-auto max-h-[90vh]">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white/40 hover:text-red-400 transition-colors duration-300"
              onClick={() => setSelectedExperience(null)}
            >
              <FaTimes className="text-xl" />
            </button>

            {/* Dialog Content */}
            <h3 className="text-xl sm:text-2xl font-bold gradient-text mb-1">
              {selectedExperience.role}
            </h3>
            <h4 className="text-base sm:text-lg text-white/60 font-medium">
              {selectedExperience.company}
            </h4>
            <p className="text-xs text-white/30 mb-6">
              {selectedExperience.period}
            </p>

            {/* Responsibilities List */}
            <ul className="space-y-3">
              {selectedExperience.responsibilities.map((resp, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 p-3 sm:p-4 rounded-xl bg-white/[0.03] border border-white/[0.05] text-sm text-white/70 leading-relaxed hover:bg-white/[0.06] hover:border-indigo-500/20 transition-all duration-300"
                >
                  <FaBriefcase className="text-indigo-400 mt-0.5 shrink-0" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>
        </Dialog>
      )}
    </section>
  );
};
