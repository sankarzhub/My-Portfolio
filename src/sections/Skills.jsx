import React from "react";
import { FaLaptopCode, FaServer, FaDatabase, FaTools } from "react-icons/fa";
import { skills } from "../data/profile";
import Ticker from "../components/Ticker";

// Two marquee rows scrolling in opposite directions
const allSkills = skills.flatMap((s) => s.items);
const half = Math.ceil(allSkills.length / 2);
const row1 = allSkills.slice(0, half);
const row2 = allSkills.slice(half);

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
      <div className="skill-marquee">
        <Ticker items={row1} variant="chips" />
        <Ticker items={row2} variant="chips" reverse />
      </div>
      <div className="skills-grid stagger">
        {skills.map((s) => (
          <div className="card skill-card" data-tilt key={s.group}>
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
