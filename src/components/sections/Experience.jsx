import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { FaBriefcase, FaTimes, FaEye } from "react-icons/fa";

export const ExperienceSection = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);

  const experiences = [
    {
      company: "Tek Leaders INC",
      logo: "/mukunda_portfolio/TekLeaders_logo.jpg", // Replace with actual logo path
      role: "Java Developer",
      period: "Jan 2024 - June 2024",
      description:
        "Worked on engineering Cycle Counting with Java 11, Oracle, and Apache Kafka, improving productivity by 10%. Integrated TMS with WMOS using REST APIs and React, reducing costs by 30%. Led teams to deliver 3+ client solutions, shortening project timelines by 15%.",
      responsibilities: [
        "Engineered Cycle Counting functionality using Java 11, Oracle as database and Apache Kafka leading to a 10% increase in productivity. ",
        "Integrated the Transport Management System (TMS) with WMOS using REST APIs and React, downscaling operating expenses by 30%. ",
        "Optimizing system performance and ensuring scalability",
        "Led cross-functional teams to deliver 3+ client solutions, reducing project timelines by 15%.",
      ],
    },
    {
      company: "LTIMindtree",
      logo: "/mukunda_portfolio/LTIMindtree_logo.jpg", // Replace with actual logo path
      role: "Full Stack Developer",
      period: "June 2021 - Jan 2023",
      description:
        "Developed and deployed the Airline Vacations App with Loyalty Points using Java, Spring Boot, and Angular, improving airline loyalty operations by 40%. Built real-time dashboards, optimized APIs, and implemented secure authentication with OAuth2 and JWT.",
      responsibilities: [
        "Designed, developed, and deployed the Airline Vacations App with Loyalty Points App using Java, Spring Boot, RESTful APIs ensuring secure transactions and achieving a 40% efficiency improvement in airline loyalty program operations.",
        "Built real-time dashboards with AngularJS, TypeScript to display loyalty points, bookings, luggage, passenger details, and operational metrics, enabling airline staff to track and manage customer rewards efficiently while improving decision-making and operational visibility.",
        "Built and optimized RESTful APIs and microservices using Spring MVC, Spring Boot, and JPA, implementing data validation, request authentication, and logging mechanisms for high-availability applications.",
        "Conducted unit testing with Junit/Postman, achieving 100% test coverage to enhance system reliability and reduce production issues.",
        "Integrated Spring Security with OAuth2, JWT for authentication and authorization, ensuring compliance with industry standards for secure access control. ",
        "Managed databases and writing SQL queries with Hibernate, JPA for PostgreSQL; used JIRA, Atlassian Confluence for project management.",
        "Implemented DevOps practices using GitHub, Jenkins; utilized Docker, Kubernetes, Groovy, Shell Scripting, AWS for scalable deployments.",
        "Participant of Agile (Scrum, TDD), CI/CD, and automation testing, conducting code reviews and promoting collaboration.",
      ],
    },
  ];

  return (
    <section id="experience" className="min-h-screen py-20 bg-black text-white flex flex-col items-center justify-center">
      <h2 className="text-5xl font-extrabold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
        Experience
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-7xl w-full px-6 mx-auto justify-items-center">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-gray-900 bg-opacity-80 rounded-xl p-6 shadow-2xl cursor-pointer group relative transform transition-all duration-300 hover:scale-105 hover:border-blue-400 border-2 border-transparent hover:shadow-lg"
            onClick={() => setSelectedExperience(exp)}
          >
            {/* Company Logo */}
            <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-gray-800 absolute top-4 left-4 group-hover:scale-110 group-hover:transition-all">
              <img src={exp.logo} alt={`${exp.company} logo`} className="w-full h-full object-contain" />
            </div>

            {/* Role and Company */}
            <h3 className="text-2xl font-semibold mt-14 text-blue-400">{exp.role}</h3>
            <h4 className="text-xl text-gray-300">{exp.company}</h4>
            <p className="text-sm text-gray-400">{exp.period}</p>

            {/* Description */}
            <p className="mt-4 text-gray-300 text-sm leading-relaxed">{exp.description}</p>

            {/* View Details Button */}
            <button
              onClick={() => setSelectedExperience(exp)} // On button click, open the dialog
              className="mt-6 flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-blue-500 shadow-md hover:scale-105"
            >
              <FaEye className="text-lg" />
              Responsibilities
            </button>
          </div>
        ))}
      </div>

      {/* Modal Dialog */}
      {selectedExperience && (
        <Dialog
          open={!!selectedExperience}
          onClose={() => setSelectedExperience(null)}
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur-lg"
        >
          <div className="bg-gray-900 p-8 rounded-2xl shadow-xl max-w-2xl w-full relative border border-gray-800 text-white overflow-y-auto h-auto max-h-[100vh]">
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-white hover:text-red-500 transition-all duration-300"
              onClick={() => setSelectedExperience(null)}
            >
              <FaTimes className="text-2xl" />
            </button>

            {/* Dialog Content */}
            <h3 className="text-2xl font-semibold text-blue-400 mb-2">{selectedExperience.role}</h3>
            <h4 className="text-xl text-gray-300">{selectedExperience.company}</h4>
            <p className="text-sm text-gray-400 mb-4">{selectedExperience.period}</p>

            {/* Responsibilities List */}
            <ul className="text-gray-300 list-disc pl-5 space-y-3 max-h-[60vh] overflow-y-auto">
              {selectedExperience.responsibilities.map((resp, index) => (
                <li
                  key={index}
                  className="bg-gray-800 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-700 transition-all duration-300 shadow-md hover:scale-105"
                >
                  <FaBriefcase className="inline-block mr-2 text-blue-400" />
                  {resp}
                </li>
              ))}
            </ul>
          </div>
        </Dialog>
      )}
    </section>
  );
};
