import React from "react";
import { motion } from "framer-motion";
import "../styles/About.css";
import profileImage from "../assets/image.png"; // Import the image

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="about-title"
        >
          About Me
        </motion.h2>
        <div className="about-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="about-image-container"
          >
            <img
              src={profileImage} // Use the imported image
              alt="Biruk Chali"
              className="about-image"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="about-text"
          >
            <p className="about-description">
              I am a passionate software engineer with expertise in full-stack and mobile app development, particularly React Native and Redux. I am dedicated to building innovative, user-focused solutions that drive technological progress and deliver real-world impact.
            </p>
            <p className="about-description">
              I am currently pursuing a Bachelor of Science in Software Engineering at Adama Science and Technology University, with an expected graduation in 2026.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;