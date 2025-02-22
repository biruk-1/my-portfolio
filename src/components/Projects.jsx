import React, { useState } from "react";
import "../styles/Projects.css";
import alRajaaImage from "../assets/al-rajaa.png";
import castingImage from "../assets/casting.png";
import consultImage from "../assets/conseltuncy.png";
import convene from "../assets/convene.png";
import adminDashboard from "../assets/adminDashboard.png";
import tickets from "../assets/ticket.png";
import fitness from "../assets/fitness.png";

const Projects = () => {
  const projectsData = [
    { title: "Fitness Tracker App", description: "A React Native app offering BMI calculations, workout plans, and dietary recommendations.", technologies: "React Native, Redux, Django, MongoDB", githubLink: "https://github.com/biruk-1/fitness", demoLink: "#", image: fitness },
    { title: "Ticket App for Event Organizers", description: "A mobile app enabling event organizers to sell tickets, manage events, and track attendees.", technologies: "React Native, Firebase", githubLink: "https://github.com/biruk-1/my-ticket-app", demoLink: "#", image: tickets },
    { title: "Convene App", description: "An app for scheduling meetings and task management with real-time notifications.", technologies: "React Native, Node.js, MongoDB", githubLink: "https://github.com/biruk-1/Convene", demoLink: "#", image: convene },
    { title: "Competent Scholars Website", description: "A platform for students to find colleges and apply directly, with backend integration for analytics.", technologies: "React, Django, MySQL", githubLink: "https://github.com/biruk-1/conceltancyProject", demoLink: "#", image: consultImage },
    { title: "Casting Website", description: "A comprehensive platform that connects models and casting agencies.", technologies: "React, JSON", githubLink: "https://github.com/biruk-1/casting", demoLink: "https://casting-alpha.vercel.app/", image: castingImage },
    { title: "Casting Admin Dashboard", description: "The admin dashboard for managing subscriptions and analytics.", technologies: "React, JSON", githubLink: "https://github.com/biruk-1/castingAdmin", demoLink: "https://castingAdmin-alpha.vercel.app/", image: adminDashboard },
    { title: "Al-rajaa Recruitment Agency Website", description: "Website built for Al-rajaa Recruitment Agency with admin features.", technologies: "React, Firebase, ExpressJS", githubLink: "https://github.com/biruk-1/Al-rajaa-Workers", demoLink: "https://al-rajaa-workers.vercel.app/", image: alRajaaImage },
  ];

  const [showMore, setShowMore] = useState(false);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">Projects</h2>
        <div className={`projects-grid ${showMore ? "expanded" : "collapsed"}`}>
          {projectsData.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.image} alt={project.title} className="project-image" />
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <p className="project-technologies"><strong>Technologies:</strong> {project.technologies}</p>
              <div className="project-links">
                <a href={project.githubLink} className="project-link">GitHub</a>
                <a href={project.demoLink} className="project-link">Live Demo</a>
              </div>
            </div>
          ))}
        </div>
        <button className="show-more-button" onClick={() => setShowMore(!showMore)}>
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>
    </section>
  );
};

export default Projects;
