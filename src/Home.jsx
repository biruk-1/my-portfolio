import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaReact, FaMobileAlt } from "react-icons/fa";
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
        <h1 className="home-title">Biruk Chali</h1>
        <p className="home-subtitle">Passionate Software Engineer</p>
        <div className="home-skills">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="home-skill"
          >
            <FaCode className="home-skill-icon" />
            <p>Full-Stack Development</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="home-skill"
          >
            <FaReact className="home-skill-icon" />
            <p>React & React Native</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="home-skill"
          >
            <FaMobileAlt className="home-skill-icon" />
            <p>Mobile App Development</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;