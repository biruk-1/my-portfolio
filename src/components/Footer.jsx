import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import '../styles/Footer.css';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Footer Social Links */}
        <div className="footer-social">
          <a
            href="https://www.linkedin.com/in/biruk-tessema-105521231/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-icon"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/biruk-1"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-icon"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:birukchali86@gmail.com"
            className="footer-social-icon"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Footer Copyright */}
        <p className="footer-copyright">
          © 2024 <span className="footer-highlight">Biruk Chali</span>. All rights reserved.
        </p>

        {/* Optional: Footer Navigation Links */}
        <nav className="footer-nav">
          <a href="#about" className="footer-nav-link">About</a>
          <a href="#projects" className="footer-nav-link">Projects</a>
          <a href="#contact" className="footer-nav-link">Contact</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;