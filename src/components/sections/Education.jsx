import React, { useState } from "react";
import { FaUniversity, FaGraduationCap, FaCalendarAlt, FaStar, FaChevronDown, FaChevronUp } from "react-icons/fa";

export const Education = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleCard = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="education" className="py-20 bg-black text-white text-center flex flex-col items-center">
      <h2 className="text-5xl font-extrabold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg">
        Education
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl">
        <EducationCard
          index={0}
          logo="/portfolio_mukunda/UNTLOGO.jpg"
          altText="UNT Logo"
          university="University of North Texas"
          degree="Masters in Artificial Intelligence"
          duration="Jan 2023 - Dec 2024"
          gpa="3.45/4.0"
          coursework={[
            "Data Visualization",
            "GEN AI",
            "AI/ML",
            "NLP",
            "LLMs",
            "Design and Analysis of Algorithms",
            "Database Systems",
          ]}
          openIndex={openIndex}
          toggleCard={toggleCard}
        />

        <EducationCard
          index={1}
          logo="/portfolio_mukunda/SCSVMV_LOGO.jpg"
          altText="SCSVMV University Logo"
          university="SCSVMV University"
          degree="B.Tech in Computer Science"
          duration="July 2017 - May 2021"
          gpa="8.40/10"
          coursework={[
            "Advanced Data Structures and Algorithms",
            "Cloud Computing",
            "Software Engineering",
            "Networking",
            "Databases",
            "Operating Systems",
          ]}
          openIndex={openIndex}
          toggleCard={toggleCard}
        />
      </div>
    </section>
  );
};

const EducationCard = ({ index, logo, altText, university, degree, duration, gpa, coursework, openIndex, toggleCard }) => {
  const isOpen = openIndex === index;

  return (
    <div 
      className={`relative flex flex-col p-6 rounded-2xl bg-gray-800 bg-opacity-80 shadow-lg border border-gray-600 transition-transform hover:scale-105 w-full cursor-pointer 
      ${isOpen ? "ring-2 ring-blue-400 shadow-blue-500/30" : ""}`} 
    >
      {/* Top Section */}
      <div className="flex items-center space-x-4">
        <img src={logo} alt={altText} className="w-16 h-16 object-contain rounded-lg border border-gray-700 shadow-md" />
        <div className="text-left">
          <h3 className="text-xl font-semibold text-blue-400 flex items-center">
            <FaUniversity className="mr-2 text-cyan-400" /> {university}
          </h3>
          <p className="text-gray-300 flex items-center">
            <FaGraduationCap className="mr-2 text-gray-400" /> {degree}
          </p>
          <p className="text-gray-400 flex items-center">
            <FaCalendarAlt className="mr-2" /> {duration}
          </p>
          <p className="text-gray-300 flex items-center">
            <FaStar className="mr-2 text-yellow-500" /> GPA: {gpa}
          </p>
        </div>
      </div>

      {/* Dropdown Toggle Button at the Bottom */}
      <div 
        className="mt-4 flex items-center justify-center text-gray-400 hover:text-white transition cursor-pointer"
        onClick={() => toggleCard(index)}
      >
        {isOpen ? <FaChevronUp className="mr-2" /> : <FaChevronDown className="mr-2" />}
        <span className="text-sm">{isOpen ? "Hide Coursework" : "Show Coursework"}</span>
      </div>

      {/* Coursework Section - Expands Downward */}
      <div className={`transition-all duration-500 overflow-hidden ${isOpen ? "max-h-40 mt-4 opacity-100" : "max-h-0 opacity-0"}`}>
        {isOpen && (
          <div className="mt-3 text-gray-300 text-sm border-t border-gray-700 pt-3">
            <strong>Relevant coursework:</strong> {coursework.join(", ")}.
          </div>
        )}
      </div>
    </div>
  );
};

export default Education;
