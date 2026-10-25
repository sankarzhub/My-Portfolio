import React from "react";
import { FaExternalLinkAlt, FaGithub, FaRegFolder } from "react-icons/fa";
import { projects } from "../data/profile";

const Projects = () => (
  <section id="projects" className="section">
    <div className="container reveal">
      <p className="section-eyebrow">Projects</p>
      <h2 className="section-title">Things I've built</h2>
      <div className="projects-grid stagger">
        {projects.map((p) => (
          <article className={`card project-card ${p.featured ? "featured" : ""}`} data-tilt key={p.title}>
            <div className="project-top">
              <FaRegFolder className="project-folder" />
              <div className="project-links">
                <a href={p.github} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} source code`}>
                  <FaGithub />
                </a>
                {p.liveLink && (
                  <a href={p.liveLink} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} live demo`}>
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>
            </div>
            {p.featured && <span className="featured-label">Featured project</span>}
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <div className="tag-row">
              {p.tech.map((t) => (
                <span className="tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
      <div className="projects-more">
        <a href="https://github.com/sankarzhub" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
          <FaGithub /> More on GitHub
        </a>
      </div>
    </div>
  </section>
);

export default Projects;
