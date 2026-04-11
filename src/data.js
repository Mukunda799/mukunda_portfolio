// ============================================
// ALL PORTFOLIO CONTENT — Edit this file to update your portfolio
// ============================================

export const personalInfo = {
  name: "Mukunda Krishna",
  fullName: "Mukunda Krishna Ramisetti",
  title: "Full Stack Java Developer • Software Engineer",
  profileImage: "/mukunda_portfolio/DSC_0463_optimized.jpg",
  resumeUrl:
    "https://drive.google.com/file/d/1cKw8N9hZyaXuSDGRaNoOYzkcBV91sJLq/view?usp=sharing",
  bio: [
    "I am a passionate Full Stack Java Developer with over two years of experience, alongside a master's and a bachelor's in Computer Science.",
    "My journey in software development began at LTIMindtree, where I contributed to the development of an Airline Vacations App with loyalty points integration, improving efficiency by 40%. I worked extensively with Java, Spring Boot, REST APIs, and Angular to deliver scalable and high-performance solutions.",
    "My expertise spans from developing robust microservices architectures to implementing secure OAuth2 and JWT authentication. I also have hands-on experience setting up CI/CD pipelines, cloud infrastructure, and DevOps automation.",
    "I am now seeking a full-time position as a Software Engineer, where I can leverage my skills to drive innovation and excellence.",
    "Let's connect and explore how we can collaborate to build impactful solutions!",
  ],
};

export const socialLinks = [
  {
    name: "Email",
    href: "mailto:mukundakrishnaramisetti04@gmail.com",
    icon: "email",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mukunda-krishna-ramisetti/",
    icon: "linkedin",
  },
  {
    name: "GitHub",
    href: "https://github.com/Mukunda799",
    icon: "github",
  },
];

export const education = [
  {
    logo: "/mukunda_portfolio/UNTLOGO.jpg",
    university: "University of North Texas",
    degree: "Masters in Artificial Intelligence",
    duration: "Jan 2023 - Dec 2024",
    gpa: "3.45/4.0",
    coursework: [
      "Data Visualization",
      "GEN AI",
      "AI/ML",
      "NLP",
      "LLMs",
      "Design and Analysis of Algorithms",
      "Database Systems",
    ],
  },
  {
    logo: "/mukunda_portfolio/SCSVMV_LOGO.jpg",
    university: "SCSVMV University",
    degree: "B.Tech in Computer Science",
    duration: "July 2017 - May 2021",
    gpa: "8.40/10",
    coursework: [
      "Advanced Data Structures and Algorithms",
      "Cloud Computing",
      "Software Engineering",
      "Networking",
      "Databases",
      "Operating Systems",
    ],
  },
];

export const skillCategories = [
  {
    title: "Frontend",
    emoji: "🎨",
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
    emoji: "⚙️",
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
    emoji: "🗄️",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
  },
  {
    title: "Cloud & DevOps",
    emoji: "☁️",
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
    emoji: "📊",
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
    emoji: "🧠",
    skills: [
      "TensorFlow",
      "Scikit-learn",
      "Machine Learning",
      "Deep Learning",
    ],
  },
];

export const experiences = [
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

export const projects = [
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
  },
];

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];
