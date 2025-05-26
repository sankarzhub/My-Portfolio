import React from "react";
import "./About.css";
import { FaLaptopCode, FaGraduationCap, FaCertificate } from "react-icons/fa";
import certificateImage from "../assets/ibm-certificate.jpg";

const About = () => {
  return (
    <section className="about">
      <h1>About Me</h1>
      <p>
        I'm Sankara Subramanian, a passionate MERN stack developer based in
        India. I build modern, full-stack web applications using MongoDB,
        Express.js, React, and Node.js. I'm deeply interested in writing clean
        code, optimizing performance, and solving real-world problems through
        technology.
      </p>
      <p>
        My journey began with curiosity and has turned into a career driven by
        creativity and precision. I enjoy both frontend design and backend logic
        — bringing together usability and functionality.
      </p>
      <p>
        Outside of development, I'm constantly learning new technologies and
        exploring open source contributions.
      </p>
      <div className="skills">
        <h2>
          <FaLaptopCode className="icon" />
          Skills
        </h2>
        <div className="skill-badges">
          <span>React.js</span>
          <span>Node.js</span>
          <span>Express.js</span>
          <span>MongoDB</span>
          <span>Javascript(ES6+)</span>
          <span>REST APIs</span>
          <span>Git & Github </span>
        </div>
      </div>
      <div className="education">
        <h2>
          <FaGraduationCap className="icon" />
          Education
        </h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Master of Computer Applications</h3>
              <p>PET Engineering College, Anna University - 2022 to 2024</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Bachelor of Science in Computer Science</h3>
              <p>
                TDMNS College, Manonmaniam Sundaranar University - 2019 to 2022
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="certifications">
        <h2>
          <FaCertificate className="icon" />
          Certifications
        </h2>
        <div className="certificate-item">
          <strong>MERN FULL Stack Development Certificate</strong>
          <p>Issued by IBM - 2025</p>
          <img
            src={certificateImage}
            alt="IBM Certificate"
            className="certificate-img"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
