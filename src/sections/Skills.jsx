import React from "react";
import { FaLaptopCode, FaServer, FaDatabase, FaTools } from "react-icons/fa";
import { skills } from "../data/profile";

const icons = {
  Frontend: <FaLaptopCode />,
  Backend: <FaServer />,
  Data: <FaDatabase />,
  Tools: <FaTools />,
};

const Skills = () => (
  <section id="skills" className="section">
    <div className="container reveal">
      <p className="section-eyebrow">Skills</p>
      <h2 className="section-title">What I work with</h2>
      <div className="skills-grid">
        {skills.map((s) => (
          <div className="card skill-card" key={s.group}>
            <h3>
              <span className="skill-icon">{icons[s.group]}</span>
              {s.group}
            </h3>
            <ul>
              {s.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
