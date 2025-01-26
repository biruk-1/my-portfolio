import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaReact, FaMobileAlt, FaArrowDown } from "react-icons/fa";
import "./styles/Home.css";

const Home = () => {
  return (
    <section id="home" className="home-section">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="home-content"
      >
        {/* Animated Title */}
        <motion.h1
          className="home-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Biruk Chali
        </motion.h1>

        {/* Animated Subtitle */}
        <motion.p
          className="home-subtitle"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Passionate <span className="highlight">Software Engineer</span> &{" "}
          <span className="highlight">Problem Solver</span>
        </motion.p>

        {/* Skills Section */}
        <motion.div
          className="home-skills"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="home-skill"
          >
            <FaCode className="home-skill-icon" />
            <p>Full-Stack Development</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="home-skill"
          >
            <FaReact className="home-skill-icon" />
            <p>React & React Native</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="home-skill"
          >
            <FaMobileAlt className="home-skill-icon" />
            <p>Mobile App Development</p>
          </motion.div>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div
          className="scroll-down"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <FaArrowDown className="scroll-down-icon" />
          <p>Scroll Down</p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;