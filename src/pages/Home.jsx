import React from "react";
import { Link } from "react-router-dom";
import profileImage from "../assets/profile.jpg";
import { FaCode, FaExternalLinkAlt, FaEnvelope } from "react-icons/fa";
import "./Home.css";

const Home = () => {
  return (
    <section className="home">
      <h1>
        <FaCode className="icon" />
        Hi,I'm Sankara Subramanian
      </h1>
      <h2>MERN Stack Developer</h2>
      <h3>I love turning ideas into beautiful, performant web apps.</h3>

      <p>
        I build modern, full-stack web applications using MongoDB, Express,
        React, and Node.js. Passionate about clean code, performance, and
        solving real-world problems.
      </p>
      <div className="image">
        <img src={profileImage} alt="Sankar" className="profile-image" />
      </div>
      <div className="home-buttons">
        <Link to="/projects">
          <button>
            View Projects
            <FaExternalLinkAlt className="button-icon" />
          </button>
        </Link>
        <Link to="/contact">
          <button>
            Contact Me
            <FaEnvelope className="button-icon" />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Home;
