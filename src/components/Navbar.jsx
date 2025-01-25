import React from "react";
import { FaCode, FaHome, FaUser, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold text-blue-600">Biruk Chali</div>
        <ul className="flex space-x-6">
          <li>
            <a href="#home" className="flex items-center text-gray-700 hover:text-blue-600">
              <FaHome className="mr-2" /> Home
            </a>
          </li>
          <li>
            <a href="#about" className="flex items-center text-gray-700 hover:text-blue-600">
              <FaUser className="mr-2" /> About
            </a>
          </li>
          <li>
            <a href="#projects" className="flex items-center text-gray-700 hover:text-blue-600">
              <FaProjectDiagram className="mr-2" /> Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="flex items-center text-gray-700 hover:text-blue-600">
              <FaCode className="mr-2" /> Skills
            </a>
          </li>
          <li>
            <a href="#contact" className="flex items-center text-gray-700 hover:text-blue-600">
              <FaEnvelope className="mr-2" /> Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;