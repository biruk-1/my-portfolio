import React from "react";
import "../styles/Projects.css";

const Projects = () => {
  const projectsData = [
    {
      title: "Fitness Tracker App",
      description: "A React Native app offering BMI calculations, workout plans, and dietary recommendations.",
      technologies: "React Native, Redux, Django, MongoDB",
      githubLink: "#",
      demoLink: "#",
    },
    {
      title: "Ticket App for Event Organizers",
      description: "A mobile app enabling event organizers to sell tickets, manage events, and track attendees.",
      technologies: "React Native, Firebase",
      githubLink: "#",
      demoLink: "#",
    },
    {
      title: "Convenc App",
      description: "An app for scheduling meetings and task management with real-time notifications.",
      technologies: "React Native, Node.js, MongoDB",
      githubLink: "#",
      demoLink: "#",
    },
    {
      title: "Competent Scholars Website",
      description: "A platform for students to find colleges and apply directly, with backend integration for analytics.",
      technologies: "React, Django, MySQL",
      githubLink: "#",
      demoLink: "#",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">Projects</h2>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <p className="project-technologies">
                <strong>Technologies:</strong> {project.technologies}
              </p>
              <div className="project-links">
                <a href={project.githubLink} className="project-link">
                  GitHub
                </a>
                <a href={project.demoLink} className="project-link">
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;