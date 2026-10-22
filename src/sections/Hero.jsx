import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import profileImage from "../assets/profile.jpg";
import { profile } from "../data/profile";

const Hero = () => (
  <section id="top" className="hero">
    <div className="container hero-inner">
      <div className="hero-text">
        <span className="status-chip">
          <span className="status-dot" />
          Software Developer at {profile.company}
        </span>
        <p className="hero-greeting">Hi, I'm</p>
        <h1>{profile.name}</h1>
        <p className="hero-role">{profile.role}</p>
        <p className="hero-tagline">{profile.tagline}</p>

        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            View my work <FaArrowRight />
          </a>
          <a href="#contact" className="btn btn-ghost">
            Get in touch
          </a>
        </div>

        <div className="hero-meta">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <FaEnvelope />
          </a>
          <span className="hero-location">
            <FaMapMarkerAlt /> {profile.location}
          </span>
        </div>
      </div>

      <div className="hero-photo">
        <img src={profileImage} alt={profile.name} />
      </div>
    </div>
  </section>
);

export default Hero;
