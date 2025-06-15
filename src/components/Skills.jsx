import React from "react";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaPython, FaDatabase, FaGit } from "react-icons/fa";
import "../styles/Skills.css";

const Skills = () => {
  const skillsData = [
    { name: "HTML", icon: <FaHtml5 />, level: 95, category: "Frontend" },
    { name: "CSS", icon: <FaCss3 />, level: 90, category: "Frontend" },
    { name: "JavaScript", icon: <FaJs />, level: 85, category: "Frontend" },
    { name: "React", icon: <FaReact />, level: 90, category: "Frontend" },
    { name: "React Native", icon: <FaReact />, level: 85, category: "Frontend" },
    { name: "Node.js", icon: <FaNodeJs />, level: 80, category: "Backend" },
    { name: "Python", icon: <FaPython />, level: 75, category: "Backend" },
    { name: "MySQL", icon: <FaDatabase />, level: 80, category: "Databases" },
    { name: "MongoDB", icon: <FaDatabase />, level: 75, category: "Databases" },
    { name: "Git", icon: <FaGit />, level: 90, category: "Tools" },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title">Skills</h2>
        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="skill-card"
              data-category={skill.category}
            >
              <div className="skill-header">
                <div className="skill-icon">{skill.icon}</div>
                <h3 className="skill-name">{skill.name}</h3>
              </div>
              <div className="skill-progress">
                <div
                  className="skill-progress-bar"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <p className="skill-category">{skill.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;