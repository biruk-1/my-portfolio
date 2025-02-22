import React, { useState, useEffect } from "react";
import { FaHome, FaUser, FaProjectDiagram, FaCode, FaEnvelope, FaMoon, FaSun, FaBars, FaTimes, FaDownload } from "react-icons/fa";
import "../styles/Navbar.css";
import logoImage from "../assets/myLogo.jpg";

const Navbar = () => {
  // Default to dark mode if no theme is stored
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") === "dark" : true
  );
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={`navbar ${menuOpen ? "menu-active" : ""}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-brand">
          <img src={logoImage} alt="Logo" className="my-logo" />
        </div>

        {/* Mobile Menu Toggle */}
        <button className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navbar Links */}
        <ul className={`navbar-links ${menuOpen ? "show" : ""}`}>
          <li><a href="#home" className="navbar-link"><FaHome /> Home</a></li>
          <li><a href="#about" className="navbar-link"><FaUser /> About</a></li>
          <li><a href="#projects" className="navbar-link"><FaProjectDiagram /> Projects</a></li>
          <li><a href="#skills" className="navbar-link"><FaCode /> Skills</a></li>
          <li><a href="#contact" className="navbar-link"><FaEnvelope /> Contact</a></li>
          <li>
            <a href="/my_cv.pdf" className="cv-button" download onClick={toggleMenu}>
              <FaDownload /> Download CV
            </a>
          </li>
        </ul>

        {/* Dark Mode Toggle */}
        <button onClick={toggleDarkMode} className="dark-mode-toggle">
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>

      {/* Fullscreen Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <ul className="mobile-menu-links">
          <li><a href="#home" onClick={toggleMenu}><FaHome /> Home</a></li>
          <li><a href="#about" onClick={toggleMenu}><FaUser /> About</a></li>
          <li><a href="#projects" onClick={toggleMenu}><FaProjectDiagram /> Projects</a></li>
          <li><a href="#skills" onClick={toggleMenu}><FaCode /> Skills</a></li>
          <li><a href="#contact" onClick={toggleMenu}><FaEnvelope /> Contact</a></li>
          <li>
            <a href="/my_cv.pdf" className="cv-button" download onClick={toggleMenu}>
              <FaDownload /> Download CV
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
