import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaReact, FaMobileAlt } from "react-icons/fa";

const Home = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center bg-gradient-to-r from-primary to-secondary text-white">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-6xl font-bold mb-4">Biruk Chali</h1>
        <p className="text-2xl mb-8">Passionate Software Engineer</p>
        <div className="flex justify-center space-x-8">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex items-center"
          >
            <FaCode className="text-4xl mr-2" />
            <p>Full-Stack Development</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex items-center"
          >
            <FaReact className="text-4xl mr-2" />
            <p>React & React Native</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex items-center"
          >
            <FaMobileAlt className="text-4xl mr-2" />
            <p>Mobile App Development</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;