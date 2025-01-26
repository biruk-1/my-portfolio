import React from "react";
import "../styles/Experience.css";

const Experience = () => {
  const experienceData = [
    {
      company: "Kiburan Trading (Hybrid)",
      role: "Frontend Mobile Developer",
      duration: "Jun 2024 - Present",
      responsibilities: [
        "Enhanced frontend UI components for mobile apps using React and React Native.",
        "Collaborated on team projects to improve app functionality and user experience.",
      ],
    },
    {
      company: "Octanet (Remote)",
      role: "Python Web Development Intern",
      duration: "Oct 2023 - Dec 2023",
      responsibilities: [
        "Focused on backend integration and building responsive web applications.",
        "Strengthened problem-solving skills through Python scripting.",
      ],
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <h2 className="experience-title">Experience</h2>
        <div className="experience-list">
          {experienceData.map((exp, index) => (
            <div key={index} className="experience-card">
              <h3 className="experience-role">{exp.role}</h3>
              <p className="experience-company">
                <strong>{exp.company}</strong> | {exp.duration}
              </p>
              <ul className="experience-responsibilities">
                {exp.responsibilities.map((responsibility, i) => (
                  <li key={i}>{responsibility}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;