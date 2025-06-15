import React, { useState } from "react";
import "../styles/Experience.css";

const Experience = () => {
  const [expanded, setExpanded] = useState(false);

  const experienceData = [
    {
      company: "Mona-Mary LLC",
      role: "Mobile App Developer and Full Stack Web Developer",
      duration: "Feb 2024 - Jun 2024",
      location: "Remote",
      responsibilities: [
        "Developed and maintained mobile applications using React Native",
        "Built responsive web applications using React.js and Node.js",
        "Collaborated with cross-functional teams to deliver high-quality products",
        "Implemented RESTful APIs and integrated third-party services"
      ]
    },
    {
      company: "Diamond Tech",
      role: "Full Stack Web Developer",
      duration: "March 2024 - Present",
      location: "On-site",
      responsibilities: [
        "Developed full-stack web applications using modern JavaScript frameworks",
        "Implemented responsive designs and optimized user experience",
        "Integrated backend services and databases",
        "Collaborated with UI/UX designers to implement design specifications"
      ]
    },
    {
      company: "Kiburan Trading",
      role: "Frontend Mobile Developer",
      duration: "Jun 2023 - Present",
      location: "Hybrid",
      responsibilities: [
        "Developed mobile applications using React Native",
        "Implemented responsive UI components and animations",
        "Worked with REST APIs and state management",
        "Collaborated with backend developers for API integration"
      ]
    },
    {
      company: "Octanet",
      role: "Python Web Development Intern",
      duration: "Oct 2023 - Dec 2023",
      location: "Remote",
      responsibilities: [
        "Developed web applications using Python and Django",
        "Implemented backend services and database operations",
        "Created RESTful APIs and integrated frontend components",
        "Participated in code reviews and team meetings"
      ]
    },
    {
      company: "WebSmart",
      role: "Website Developer & Tutor",
      duration: "Jan 2023 - Present",
      location: "Remote",
      responsibilities: [
        "Developed modern web applications using React and Node.js",
        "Conducted coding workshops and training sessions",
        "Mentored junior developers and provided technical guidance",
        "Created and maintained documentation for projects"
      ]
    },
    {
      company: "WebSmart",
      role: "Co-founder",
      duration: "Jan 2023 - Present",
      location: "Remote",
      responsibilities: [
        "Led the development and expansion of the company's digital presence",
        "Managed a team of developers and designers",
        "Developed business strategies and growth plans",
        "Handled client relationships and project management"
      ]
    },
    {
      company: "Study Abroad Consultants",
      role: "Educational Consultant",
      duration: "2023 - Present",
      location: "Remote",
      responsibilities: [
        "Assisted students with university applications and documentation",
        "Provided guidance on visa processes and requirements",
        "Coordinated with international universities and institutions",
        "Managed student records and application tracking"
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <h2 className="experience-title">Experience</h2>
        <div className={`experience-list ${expanded ? "expanded" : ""}`}>
          {experienceData.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="experience-header">
                <h3 className="experience-role">{exp.role}</h3>
                <span className="experience-location">{exp.location}</span>
              </div>
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
        {experienceData.length > 3 && (
          <button
            className="show-more-button"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Show Less" : "Show More"}
          </button>
        )}
      </div>
    </section>
  );
};

export default Experience;
