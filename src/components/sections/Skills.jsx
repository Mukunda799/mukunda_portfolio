import { RevealOnScroll } from "../RevealOnScroll";
import { FaCode, FaServer, FaDatabase, FaCloud, FaChartLine, FaBrain } from "react-icons/fa";

export const Skills = () => {
  const skillCategories = [
    { title: "Frontend", icon: <FaCode className="text-blue-400 text-3xl" />, description: "Expert in modern frontend frameworks, creating responsive and interactive UIs", skills: [ "HTML5", "CSS", "JavaScript", "TypeScript","React", "Angular","RxJs", "TailwindCSS", "Bootstrap"] },
    { title: "Backend", icon: <FaServer className="text-green-400 text-3xl" />, description: "Building robust server-side applications with Java and Spring Boot", skills: ["Java", "Spring Boot", "Hibernate","RESTful APIs","Microservices", "Spring Cloud","Spring Security","Spring Data JPA","Node.js"] },
    { title: "Databases", icon: <FaDatabase className="text-yellow-400 text-3xl" />, description: "Building and deploying cloud solutions with AWS and DevOps tools.", skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis"] },
    { title: "Cloud and DevOps", icon: <FaCloud className="text-cyan-400 text-3xl" />, description: "Designing and optimizing database structures for scalable applications", skills: ["AWS","S3","Elastic Beanstalk","EC2", "RDS", "Lambda", "API Gateway","CloudFront", "Docker", "Kubernetes", "Jenkins", "Git", "GitHub"] },
    { title: "Data Analysis", icon: <FaChartLine className="text-purple-400 text-3xl" />, description: "Analyzing and visualizing data to derive meaningful insights", skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Jupyter", "Power BI", "Tableau"] },
    { title: "Data Science & AI", icon: <FaBrain className="text-red-400 text-3xl" />, description: "Learning and implementing machine learning and AI solutions", skills: ["TensorFlow", "Scikit-learn", "Machine Learning", "Deep Learning"] },
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center py-20 bg-black text-white">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            My Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="rounded-2xl p-8 shadow-xl transform transition-all hover:-translate-y-2 border border-gray-800 bg-gray-900 relative overflow-hidden"
              >
                <div className="absolute top-2 left-2">{category.icon}</div>
                <h3 className="text-2xl font-semibold mb-2 text-blue-400">{category.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{category.description}</p>
                <div className="flex flex-wrap justify-center gap-3">
                  {category.skills.map((skill, key) => (
                    <span
                      key={key}
                      className="bg-gray-800 text-white py-2 px-4 rounded-lg text-sm font-medium transition shadow-md hover:bg-blue-500"
                    >
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
