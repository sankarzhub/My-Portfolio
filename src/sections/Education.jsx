import React from "react";
import { FaGraduationCap, FaCertificate, FaExternalLinkAlt } from "react-icons/fa";
import { education, certifications } from "../data/profile";

const Education = () => (
  <section id="education" className="section">
    <div className="container reveal">
      <p className="section-eyebrow">Education &amp; Certifications</p>
      <h2 className="section-title">Learning never stops</h2>
      <div className="edu-grid">
        <div className="card">
          <h3 className="edu-heading">
            <FaGraduationCap /> Education
          </h3>
          <ul className="edu-list">
            {education.map((e) => (
              <li key={e.degree}>
                <div className="edu-row">
                  <strong>{e.degree}</strong>
                  <span className="role-period">{e.period}</span>
                </div>
                <span className="muted">{e.school}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="card">
          <h3 className="edu-heading">
            <FaCertificate /> Certifications
          </h3>
          <ul className="edu-list">
            {certifications.map((c) => (
              <li key={c.name}>
                <div className="edu-row">
                  <strong>{c.name}</strong>
                  {c.year && <span className="role-period">{c.year}</span>}
                </div>
                {c.issuer && <span className="muted">{c.issuer}</span>}
                {c.credentialId && <span className="credential-id">ID: {c.credentialId}</span>}
                {c.file && (
                  <a className="cert-link" href={c.file} target="_blank" rel="noopener noreferrer">
                    View certificate <FaExternalLinkAlt />
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Education;
