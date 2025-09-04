import React, { useEffect, useState } from "react";
import { Github, Globe, ChevronLeft, ChevronRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { project_1, project_2, portfolio } from "../assets/assets";

const projects = [
  {
    id: 1,
    title: "Child Care Web App",
    tech: "React, Node.js, MongoDB",
    teamSize: "3 Members",
    role: "Frontend Developer",
    description:
      "A child care platform assisting parents with vaccination tracking, nutrition, Aadhaar-based login, and dynamic growth charts based on Indian medical standards.",
    github: "https://github.com/your-profile/child-care-app",
    live: "https://child-care-app.vercel.app",
    image: project_2,
  },
  {
    id: 2,
    title: "Mood-Based Food Ordering",
    tech: "MERN Stack, Express.js, AOS",
    teamSize: "4 Members",
    role: "Backend Developer",
    description:
      "A food ordering app that curates dishes based on user's mood using real-time mood classification, offering personalized UX and order history features.",
    github: "https://github.com/your-profile/mood-food-app",
    live: "https://mood-food-app.vercel.app",
    image: project_1,
  },
  {
    id: 3,
    title: "Portfolio Website",
    tech: "React, Tailwind CSS, Framer Motion",
    teamSize: "Solo Project",
    role: "Full Stack Developer",
    description:
      "Interactive and futuristic-themed portfolio with animations, language toggle, responsive UI, and project modals. Built for accessibility and engagement.",
    github: "https://github.com/your-profile/portfolio",
    live: "https://your-portfolio.vercel.app",
    image: portfolio,
  },
];

const ProjectShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  const project = projects[currentIndex];

  return (
    <section className="w-full bg-gray-950 text-white py-12 px-4 md:px-10">
      <h2
        className="text-3xl md:text-4xl font-bold text-center mb-10 text-purple-400"
        data-aos="fade-down"
      >
        🚀 My Projects
      </h2>

      <div
        className="relative max-w-3xl mx-auto bg-gradient-to-br from-gray-800 via-gray-900 to-black 
                   rounded-2xl shadow-lg overflow-hidden"
        data-aos="fade-up"
      >
        {/* Image */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover"
        />

        {/* Content */}
        <div className="p-6">
          <h3 className="text-2xl font-bold text-purple-300">
            {project.title}
          </h3>
          <p className="text-gray-400 mt-2 text-sm">
            <span className="font-semibold">Tech:</span> {project.tech}
          </p>
          <p className="text-gray-400 text-sm">
            <span className="font-semibold">Team:</span> {project.teamSize}
          </p>
          <p className="text-gray-400 text-sm">
            <span className="font-semibold">Role:</span> {project.role}
          </p>

          <p className="text-gray-300 mt-4 leading-relaxed">
            {project.description}
          </p>

          {/* Links */}
          <div className="flex gap-6 mt-6">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition text-sm"
            >
              <Github size={18} /> GitHub
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-green-400 hover:text-green-300 transition text-sm"
            >
              <Globe size={18} /> Live
            </a>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevProject}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-gray-800/70 hover:bg-gray-700 
                     p-2 rounded-full transition shadow-md"
        >
          <ChevronLeft size={24} className="text-white" />
        </button>
        <button
          onClick={nextProject}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-gray-800/70 hover:bg-gray-700 
                     p-2 rounded-full transition shadow-md"
        >
          <ChevronRight size={24} className="text-white" />
        </button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {projects.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full transition ${
              index === currentIndex ? "bg-purple-500" : "bg-gray-600"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectShowcase;
