import React from "react";
import "./Projects.css";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Online Movie Ticket Booking System",
    description:
      "A full-stack web app using React, Node.js, Express, and MySQL for booking movie tickets. Includes user auth, seat selection, and payment simulation.",
    liveLink: "https://your-movie-app-link.com",
    github: "https://github.com/sankarzhub/moviebuzz",
    tech: ["React", "Node.js", "Express", "MySQL"],
  },
  {
    title: "Personal Portfolio Website",
    description:
      "This very website you're viewing! Built with React and React Router to showcase my skills, education, and projects.",
<<<<<<< HEAD
    liveLink: "https://sankarportfolio.netlify.app/",
=======
    liveLink: "https://your-portfolio-link.com",
>>>>>>> 5b1f376 (Changes Updated)
    github: "https://github.com/sankarzhub/My-Portfolio",
    tech: ["React", "React Router"],
  },
  {
    title: "Weather Dashboard (Sample)",
    description:
      "A simple app that displays weather data using OpenWeather API. Built with clean UI and responsive layout.",
    liveLink: "#",
    github: "https://github.com/sankarzhub/weather-app",
    tech: ["React", "API", "CSS"],
  },
];

const Projects = () => {
  return (
    <section className="projects">
      <h1>My Projects</h1>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>
            <div className="project-links">
              {project.liveLink && (
                <a href={project.liveLink} target="_blank" rel="noreferrer">
                  <FaExternalLinkAlt /> Live
                </a>
              )}
              <a href={project.github} target="_blank" rel="noreferrer">
                <FaGithub /> Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
