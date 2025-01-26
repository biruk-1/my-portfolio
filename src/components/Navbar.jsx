import React, { useState } from "react";
import { FaHome, FaUser, FaProjectDiagram, FaCode, FaEnvelope, FaMoon, FaSun } from "react-icons/fa";
import "../styles/Navbar.css";
import logoImage from "../assets/myLogo.jpg";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <img src={logoImage}
          alt="my-logo"
          className="my-logo"/>
        </div>
        <ul className="navbar-links">
          <li>
            <a href="#home" className="navbar-link">
              <FaHome className="navbar-link-icon" /> Home
            </a>
          </li>
          <li>
            <a href="#about" className="navbar-link">
              <FaUser className="navbar-link-icon" /> About
            </a>
          </li>
          <li>
            <a href="#projects" className="navbar-link">
              <FaProjectDiagram className="navbar-link-icon" /> Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="navbar-link">
              <FaCode className="navbar-link-icon" /> Skills
            </a>
          </li>
          <li>
            <a href="#contact" className="navbar-link">
              <FaEnvelope className="navbar-link-icon" /> Contact
            </a>
          </li>
          <li>
            <button onClick={toggleDarkMode} className="dark-mode-toggle">
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;