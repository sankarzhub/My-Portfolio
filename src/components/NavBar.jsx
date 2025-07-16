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
<<<<<<< HEAD
          <Link to="/" onClick={() => setMenuOpen(false)}>
=======
          <Link to="/" onClick={()=>setMenuOpen(false)}>
>>>>>>> 7bb24305f362cda8d086f9b7ee8ff43d60981755
            <FaHome className="nav-icon" />
            Home
          </Link>
        </li>

        <li>
<<<<<<< HEAD
          <Link to="/about" onClick={() => setMenuOpen(false)}>
=======
          <Link to="/about" onClick={()=>setMenuOpen(false)}>
>>>>>>> 7bb24305f362cda8d086f9b7ee8ff43d60981755
            <FaUser className="nav-icon" />
            About
          </Link>
        </li>

        <li>
<<<<<<< HEAD
          <Link to="/projects" onClick={() => setMenuOpen(false)}>
=======
          <Link to="/projects" onClick={()=>setMenuOpen(false)}>
>>>>>>> 7bb24305f362cda8d086f9b7ee8ff43d60981755
            <FaProjectDiagram className="nav-icon" />
            Projects
          </Link>
        </li>

        <li>
<<<<<<< HEAD
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
=======
          <Link to="/contact" onClick={()=>setMenuOpen(false)}>
>>>>>>> 7bb24305f362cda8d086f9b7ee8ff43d60981755
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
