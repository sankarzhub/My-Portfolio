import React from "react";
import { about, highlights } from "../data/profile";

const About = () => (
  <section id="about" className="section">
    <div className="container reveal">
      <p className="section-eyebrow">About</p>
      <h2 className="section-title">Building the data side of the web</h2>
      <div className="about-grid">
        <div className="about-text">
          {about.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
        <div className="highlights stagger">
          {highlights.map((h) => (
            <div className="highlight card" key={h.label}>
              <strong>{h.value}</strong>
              <span>{h.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
