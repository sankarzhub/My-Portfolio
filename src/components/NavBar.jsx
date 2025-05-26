import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">My Portfolio</div>
      <ul className="navbar-links">
        <li>
          <Link to="/">
            <FaHome className="nav-icon" />
            Home
          </Link>
        </li>

        <li>
          <Link to="/about">
            <FaUser className="nav-icon" />
            About
          </Link>
        </li>

        <li>
          <Link to="/projects">
            <FaProjectDiagram className="nav-icon" />
            Projects
          </Link>
        </li>

        <li>
          <Link to="/contact">
            <FaEnvelope className="nav-icon" />
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
