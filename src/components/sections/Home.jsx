import React from 'react';
import { RevealOnScroll } from "../RevealOnScroll"; 
import ConnectWithMe from "./ConnectWithMe";
import { FaDownload } from "react-icons/fa";


export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-black"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          {/* Profile Picture Above Name */}
          <div className="flex flex-col items-center mb-6">
            <img
              src="/mukunda_portfolio/DSC_0463.JPG" // Update your profile pic path herepedrotech-portfolio\public\DSC_0463.JPG
              alt="Mukunda Krishna Ramisetti"
              className="w-65 h-65 object-cover rounded-full mb-6" // Change to object-contain to avoid cropping
            />
            <h1 className="text-3xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
              Hi, I’m Mukunda Krishna Ramisetti
            </h1>
          </div>
          <section className="bg-white-100 text-white-800">
            <div className="max-w-3xl mx-auto px-6">
              <p className="text-lg mb-6">
                I am a passionate <strong>Full Stack Java Developer</strong> with over two years of experience, alongside a 
                master's and a bachelor's in Computer Science.
              </p>

              <p className="text-lg mb-6">
                My journey in software development began at <strong>LTIMindtree</strong>, where I contributed to the development 
                of an <strong>Airline Vacations App</strong> with loyalty points integration, improving efficiency by 40%. 
                I worked extensively with <strong>Java, Spring Boot, REST APIs, and Angular</strong> to deliver scalable and high-performance solutions.
              </p>

              <p className="text-lg mb-6">
                At <strong>Tek Leaders</strong>, I worked on building enterprise-grade features like <strong>Cycle Counting and 
                Transport Management Systems</strong> using <strong>Java, React, and Kafka</strong>, reducing operational costs by 30%.
              </p>

              <p className="text-lg mb-6">
                My expertise spans from developing robust <strong>microservices architectures</strong> to implementing secure 
                <strong>OAuth2 and JWT authentication</strong>. I also have hands-on experience setting up <strong>CI/CD pipelines, 
                cloud infrastructure, and DevOps automation</strong>.
              </p>

              <p className="text-lg font-semibold">
                I am now seeking a full-time position as a <strong>Software Engineer</strong>, where I can leverage my skills 
                to drive innovation and excellence in the tech industry.
              </p>

              <p className="text-lg mt-6">
                <strong>Let’s connect</strong> and explore how we can collaborate to build impactful solutions!
              </p>
            </div>
          </section>

          {/* Connect With Me Section */}
          <ConnectWithMe />

          {/* Buttons */}
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded-xl font-medium shadow-lg hover:scale-105 transition-transform duration-300 hover:shadow-2xl"
            >
              View Projects
            </a>
            <a
  href="https://drive.google.com/file/d/1cKw8N9hZyaXuSDGRaNoOYzkcBV91sJLq/view?usp=sharing"  // Replace with your actual Google Drive link
  target="_blank"
  rel="noopener noreferrer"
  className="bg-blue-500 text-white py-3 px-6 rounded-xl font-medium shadow-lg hover:scale-105 transition-transform duration-300 hover:shadow-2xl flex items-center space-x-2"
>
  <span>Download Resume</span>
  <FaDownload className="ml-2" />
</a>

          </div>

        </div>
      </RevealOnScroll>

    </section>
  );
};
