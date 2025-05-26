import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar-logo">Sankar's Portfolio</div>
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        &#9776;
      </div>
      <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <FaHome className="nav-icon" />
            Home
          </Link>
        </li>

        <li>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            <FaUser className="nav-icon" />
            About
          </Link>
        </li>

        <li>
          <Link to="/projects" onClick={() => setMenuOpen(false)}>
            <FaProjectDiagram className="nav-icon" />
            Projects
          </Link>
        </li>

        <li>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            <FaEnvelope className="nav-icon" />
            Contact
          </Link>
        </li>
        <li>
          <Link to="/admin/login">Admin</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
