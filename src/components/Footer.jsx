import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        &copy;{new Date().getFullYear()} Sankara Subramanian.All rights
        reserved.
      </p>
      <div className="footer-links">
        <a
          href="https://github.com/sankarzhub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="footer-icon" />
          GitHub
        </a>
        <a
          href="http://linkedin.com/in/sankarz0206"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="footer-icon" />
          LinkedIn
        </a>
        <a href="mailto:sankarz2002@gmail.com">
          <FaEnvelope className="footer-icon" />
          Email
        </a>
      </div>
    </footer>
  );
};

export default Footer;
