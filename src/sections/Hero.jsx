import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
  FaDownload,
} from "react-icons/fa";
import profileImage from "../assets/profile.jpg";
import { profile } from "../data/profile";
import TypingText from "../components/TypingText";

// Let the background glow follow the cursor across the hero
const trackPointer = (e) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--hx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--hy", `${e.clientY - r.top}px`);
};

const Hero = () => (
  <section id="top" className="hero" onPointerMove={trackPointer}>
    <div className="hero-blob blob-1" aria-hidden="true" />
    <div className="hero-blob blob-2" aria-hidden="true" />
    <div className="hero-grid" aria-hidden="true" />

    <div className="container hero-inner">
      <div className="hero-text">
        <span className="status-chip hero-step" style={{ "--i": 0 }}>
          <span className="status-dot" />
          Software Developer at {profile.company}
        </span>
        <p className="hero-greeting hero-step" style={{ "--i": 1 }}>
          Hi, I'm
        </p>
        <h1 className="hero-step" style={{ "--i": 2 }}>
          <span className="gradient-text">{profile.name}</span>
        </h1>
        <p className="hero-role hero-step" style={{ "--i": 3 }}>
          <span className="hero-role-prefix">&gt;</span> <TypingText words={profile.roles} />
        </p>
        <p className="hero-tagline hero-step" style={{ "--i": 4 }}>
          {profile.tagline}
        </p>

        <div className="hero-actions hero-step" style={{ "--i": 5 }}>
          <a href="#projects" className="btn btn-primary">
            View my work <FaArrowRight />
          </a>
          <a href={profile.resume} download className="btn btn-ghost">
            <FaDownload /> Download CV
          </a>
          <a href="#contact" className="btn btn-link">
            Get in touch
          </a>
        </div>

        <div className="hero-meta hero-step" style={{ "--i": 6 }}>
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

      <div className="hero-visual">
        <div className="hero-photo" data-tilt>
          <img src={profileImage} alt={profile.name} />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
