import React from "react";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaPython, FaDatabase, FaGit } from "react-icons/fa";

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
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-3xl text-blue-600 mr-4">{skill.icon}</div>
                <h3 className="text-2xl font-semibold">{skill.name}</h3>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <p className="text-gray-600 mt-2">{skill.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;