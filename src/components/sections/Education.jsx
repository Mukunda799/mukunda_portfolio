import { useState } from "react";
import {
  FaUniversity,
  FaGraduationCap,
  FaCalendarAlt,
  FaStar,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { RevealOnScroll } from "../RevealOnScroll";

export const Education = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleCard = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="education"
      className="relative py-20 sm:py-28 text-white text-center flex flex-col items-center px-4 section-gradient"
    >
      <RevealOnScroll>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12 sm:mb-16 gradient-text">
          Education
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 max-w-5xl w-full">
          <EducationCard
            index={0}
            logo="/mukunda_portfolio/UNTLOGO.jpg"
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
            logo="/mukunda_portfolio/SCSVMV_LOGO.jpg"
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
      </RevealOnScroll>
    </section>
  );
};

const EducationCard = ({
  index,
  logo,
  altText,
  university,
  degree,
  duration,
  gpa,
  coursework,
  openIndex,
  toggleCard,
}) => {
  const isOpen = openIndex === index;

  return (
    <div
      className={`glass-card glass-card-hover relative flex flex-col p-5 sm:p-6 w-full cursor-pointer transition-all duration-300 ${
        isOpen
          ? "ring-1 ring-indigo-400/40 shadow-lg shadow-indigo-500/10"
          : ""
      }`}
    >
      {/* Top Section */}
      <div className="flex items-start gap-3 sm:gap-4">
        <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden border border-white/10 bg-white/90 p-1">
          <img
            src={logo}
            alt={altText}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="text-left min-w-0">
          <h3 className="text-sm sm:text-base font-semibold text-white flex items-center gap-1.5">
            <FaUniversity className="text-indigo-400 shrink-0" /> 
            <span className="truncate">{university}</span>
          </h3>
          <p className="text-xs sm:text-sm text-white/60 flex items-center gap-1.5 mt-0.5">
            <FaGraduationCap className="text-white/40 shrink-0" /> {degree}
          </p>
          <p className="text-xs text-white/40 flex items-center gap-1.5 mt-0.5">
            <FaCalendarAlt className="shrink-0" /> {duration}
          </p>
          <p className="text-xs text-amber-400/80 flex items-center gap-1.5 mt-1">
            <FaStar className="shrink-0" /> GPA: {gpa}
          </p>
        </div>
      </div>

      {/* Dropdown Toggle */}
      <button
        className="mt-4 flex items-center justify-center gap-2 text-white/40 hover:text-indigo-400 transition-colors duration-300 text-sm"
        onClick={() => toggleCard(index)}
      >
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        <span>{isOpen ? "Hide Coursework" : "Show Coursework"}</span>
      </button>

      {/* Coursework Section */}
      <div
        className={`transition-all duration-500 overflow-hidden ${
          isOpen ? "max-h-48 mt-4 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-white/[0.06] pt-4">
          <div className="flex flex-wrap gap-2">
            {coursework.map((course, i) => (
              <span key={i} className="skill-badge text-xs">
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
