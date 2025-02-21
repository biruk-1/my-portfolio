import React from "react";
import { motion } from "framer-motion";
import "../styles/About.css";
import profileImage from "../assets/image.png"; // Ensure this path is correct

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Animated Title */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="about-title"
        >
          About Me
        </motion.h2>

        <div className="about-content">
          {/* Profile Image with Animation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="about-image-container"
          >
            <motion.img
              src={profileImage}
              alt="Biruk Chali"
              className="about-image"
              whileHover={{ scale: 1.05, rotate: 2 }} // Interactive effect
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Animated Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="about-text"
          >
            <p className="about-description">
              I'm a **passionate software engineer** specializing in **full-stack and mobile app development**, particularly React Native and Redux. My goal is to create seamless, **user-friendly experiences** that drive innovation.
            </p>
            <p className="about-description">
              Currently, I'm pursuing my **BSc in Software Engineering at Adama Science and Technology University** (Graduating 2026). My expertise lies in **problem-solving, building intuitive user interfaces, and crafting high-performance applications**.
            </p>
            <motion.a
              href="#contact"
              className="about-button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Let's Connect
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
