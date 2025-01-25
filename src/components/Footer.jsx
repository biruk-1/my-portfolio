import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://www.linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-blue-600"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-blue-600"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:birukchali86@gmail.com"
            className="text-2xl hover:text-blue-600"
          >
            <FaEnvelope />
          </a>
        </div>
        <p className="text-center text-gray-400">
          © 2024 Biruk Chali. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;