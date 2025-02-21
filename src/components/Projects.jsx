import React, { useState } from "react";
import "../styles/Projects.css";

const Projects = () => {
  const projectsData = [
    {
      title: "Fitness Tracker App",
      description: "A React Native app offering BMI calculations, workout plans, and dietary recommendations.",
      technologies: "React Native, Redux, Django, MongoDB",
      githubLink: "https://github.com/biruk-1/fitness",
      demoLink: "#",
    },
    {
      title: "Ticket App for Event Organizers",
      description: "A mobile app enabling event organizers to sell tickets, manage events, and track attendees.",
      technologies: "React Native, Firebase",
      githubLink: "https://github.com/biruk-1/my-ticket-app",
      demoLink: "#",
    },
    {
      title: "Convene App",
      description: "An app for scheduling meetings and task management with real-time notifications.",
      technologies: "React Native, Node.js, MongoDB",
      githubLink: "https://github.com/biruk-1/Convene",
      demoLink: "#",
    },
    {
      title: "Competent Scholars Website",
      description: "A platform for students to find colleges and apply directly, with backend integration for analytics.",
      technologies: "React, Django, MySQL",
      githubLink: "https://github.com/biruk-1/conceltancyProject",
      demoLink: "#",
    },
    {
      title: "Casting Website",
      description: "A comprehensive platform that connects models and casting agencies, allowing for direct applications and backend analytics integration, enabling casting agencies to seamlessly find suitable models, while film actors, actresses, and fashion designers can easily discover their perfect matches.",
      technologies: "React, Json",
      githubLink: "https://github.com/biruk-1/casting",
      demoLink: "https://casting-alpha.vercel.app/",
    },
    {
      title: "Casting Admin Dashboard",
      description: "The admin dashboard for the subscription-based platform provides a centralized interface for managing user accounts, monitoring subscriptions, analyzing performance metrics, and optimizing the casting process for models, casting agencies, and related professionals.",
      technologies: "React, Json,",
      githubLink: "https://github.com/biruk-1/castingAdmin",
      demoLink: "https://castingAdmin-alpha.vercel.app/",
    },
    {
      title: "Al-rajaa Recruitment Agenct Website",
      description: "This is a website I builted for a comoney called alrajaa recruitment Ageny for their HR as Admin Dashboard with 2 languages",
      technologies: "React, Firebase,expressJS",
      githubLink: "https://github.com/biruk-1/Al-rajaa-Workers",
      demoLink: "https://al-rajaa-workers.vercel.app/",
    },
  ];

  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">Projects</h2>
        <div className="projects-grid">
          {projectsData.slice(0, showMore ? projectsData.length : 3).map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image"> {/* Placeholder for project image */}</div>
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
        <button className="show-more-button" onClick={toggleShowMore}>
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>
    </section>
  );
};

export default Projects;
