import React from "react";
import { FaBriefcase } from "react-icons/fa";
import { experience } from "../data/profile";

const Experience = () => (
  <section id="experience" className="section">
    <div className="container reveal">
      <p className="section-eyebrow">Experience</p>
      <h2 className="section-title">Where I've worked</h2>

      <div className="card experience-card">
        <div className="company-header">
          <span className="company-icon">
            <FaBriefcase />
          </span>
          <div>
            <h3>{experience.company}</h3>
            <p className="muted">{experience.location}</p>
          </div>
        </div>

        <ol className="roles">
          {experience.roles.map((role) => (
            <li className="role" key={role.title}>
              <div className="role-head">
                <h4>{role.title}</h4>
                <span className="role-period">{role.period}</span>
              </div>
              {role.summary && <p className="role-summary">{role.summary}</p>}
              <ul className="role-points">
                {role.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
              <div className="tag-row">
                {role.tech.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  </section>
);

export default Experience;
