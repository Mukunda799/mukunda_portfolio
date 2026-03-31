import { RevealOnScroll } from "../RevealOnScroll";
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaCloud,
  FaChartLine,
  FaBrain,
} from "react-icons/fa";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <FaCode />,
      color: "from-blue-500 to-indigo-500",
      iconColor: "text-blue-400",
      description:
        "Expert in modern frontend frameworks, creating responsive and interactive UIs",
      skills: [
        "HTML5",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Angular",
        "RxJs",
        "TailwindCSS",
        "Bootstrap",
      ],
    },
    {
      title: "Backend",
      icon: <FaServer />,
      color: "from-emerald-500 to-teal-500",
      iconColor: "text-emerald-400",
      description:
        "Building robust server-side applications with Java and Spring Boot",
      skills: [
        "Java",
        "Spring Boot",
        "Hibernate",
        "RESTful APIs",
        "Microservices",
        "Spring Cloud",
        "Spring Security",
        "Spring Data JPA",
        "Node.js",
      ],
    },
    {
      title: "Databases",
      icon: <FaDatabase />,
      color: "from-amber-500 to-orange-500",
      iconColor: "text-amber-400",
      description:
        "Designing and optimizing database structures for scalable applications",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
    },
    {
      title: "Cloud & DevOps",
      icon: <FaCloud />,
      color: "from-cyan-500 to-blue-500",
      iconColor: "text-cyan-400",
      description:
        "Building and deploying cloud solutions with AWS and DevOps tools",
      skills: [
        "AWS",
        "S3",
        "Elastic Beanstalk",
        "EC2",
        "RDS",
        "Lambda",
        "API Gateway",
        "CloudFront",
        "Docker",
        "Kubernetes",
        "Jenkins",
        "Git",
        "GitHub",
      ],
    },
    {
      title: "Data Analysis",
      icon: <FaChartLine />,
      color: "from-purple-500 to-violet-500",
      iconColor: "text-purple-400",
      description:
        "Analyzing and visualizing data to derive meaningful insights",
      skills: [
        "Python",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Jupyter",
        "Power BI",
        "Tableau",
      ],
    },
    {
      title: "Data Science & AI",
      icon: <FaBrain />,
      color: "from-rose-500 to-pink-500",
      iconColor: "text-rose-400",
      description:
        "Learning and implementing machine learning and AI solutions",
      skills: [
        "TensorFlow",
        "Scikit-learn",
        "Machine Learning",
        "Deep Learning",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-20 sm:py-28 flex items-center justify-center text-white px-4 section-gradient"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-2 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12 sm:mb-16 gradient-text">
            My Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="glass-card glass-card-hover relative overflow-hidden p-5 sm:p-7 text-left group"
              >
                {/* Gradient accent line at top */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${category.color} opacity-60 group-hover:opacity-100 transition-opacity`}
                />

                {/* Icon and title */}
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`text-2xl ${category.iconColor} opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110`}
                  >
                    {category.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white/90">
                    {category.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-white/40 mb-5 leading-relaxed">
                  {category.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, key) => (
                    <span key={key} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
