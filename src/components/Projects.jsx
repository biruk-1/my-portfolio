import React, { useState } from "react";
import "../styles/Projects.css";
import alRajaaImage from "../assets/al-rajaa.png";
import castingImage from "../assets/casting.png";
import consultImage from "../assets/conseltuncy.png";
import convene from "../assets/convene.png";
import adminDashboard from "../assets/adminDashboard.png";
import tickets from "../assets/ticket.png";
import fitness from "../assets/fitness.png";
import cosmicAIImage from "../assets/cosmicai.png";
import coachAIImage from "../assets/coachai.png";
import hotelImage from "../assets/hotel.png";

const Projects = () => {
  const projectsData = [
    {
      title: "CosmicAI",
      description: "Full-stack astrology and psychic consultation app with real-time AI chatbot integration and location-based recommendations.",
      technologies: "React Native, Express.js, Supabase, RevenueCat, Expo, Expo Push Notifications",
      githubLink: "https://github.com/biruk-1/CosmicAI",
      demoLink: "https://cosmicai.vercel.app/",
      image: cosmicAIImage,
      featured: true
    },
    {
      title: "Coach AI",
      description: "Health and fitness mobile application connecting users with coaches nearby, featuring AI-guided fitness tips and real-time chat.",
      technologies: "React Native, Express.js, DigitalOcean, RevenueCat, Expo",
      githubLink: "https://github.com/biruk-1/CoachApp",
      demoLink: "https://coachai.vercel.app/",
      image: coachAIImage,
      featured: true
    },
    {
      title: "Hotel Management System Dashboard",
      description: "Comprehensive dashboard system with multi-role access for hotel staff like admin, waiter, cashier, and kitchen, including offline support.",
      technologies: "React, Express.js, SQLite, IndexedDB, cPanel",
      githubLink: "https://github.com/biruk-1/Hotel-Management-Dashboard",
      demoLink: "https://hotel-dashboard.vercel.app/",
      image: hotelImage,
      featured: true
    },
    {
      title: "Fitness Tracker App",
      description: "A React Native app offering BMI calculations, workout plans, and dietary recommendations.",
      technologies: "React Native, Redux, Django, MongoDB",
      githubLink: "https://github.com/biruk-1/fitness",
      demoLink: "#",
      image: fitness
    },
    {
      title: "Ticket App for Event Organizers",
      description: "A mobile app enabling event organizers to sell tickets, manage events, and track attendees.",
      technologies: "React Native, Firebase",
      githubLink: "https://github.com/biruk-1/my-ticket-app",
      demoLink: "#",
      image: tickets
    },
    {
      title: "Convene App",
      description: "An app for scheduling meetings and task management with real-time notifications.",
      technologies: "React Native, Node.js, MongoDB",
      githubLink: "https://github.com/biruk-1/Convene",
      demoLink: "#",
      image: convene
    },
    {
      title: "Competent Scholars Website",
      description: "A platform for students to find colleges and apply directly, with backend integration for analytics.",
      technologies: "React, Django, MySQL",
      githubLink: "https://github.com/biruk-1/conceltancyProject",
      demoLink: "#",
      image: consultImage
    },
    {
      title: "Casting Website",
      description: "A comprehensive platform that connects models and casting agencies.",
      technologies: "React, JSON",
      githubLink: "https://github.com/biruk-1/casting",
      demoLink: "https://casting-alpha.vercel.app/",
      image: castingImage
    },
    {
      title: "Casting Admin Dashboard",
      description: "The admin dashboard for managing subscriptions and analytics.",
      technologies: "React, JSON",
      githubLink: "https://github.com/biruk-1/castingAdmin",
      demoLink: "https://castingAdmin-alpha.vercel.app/",
      image: adminDashboard
    },
    {
      title: "Al-rajaa Recruitment Agency Website",
      description: "Website built for Al-rajaa Recruitment Agency with admin features.",
      technologies: "React, Firebase, ExpressJS",
      githubLink: "https://github.com/biruk-1/Al-rajaa-Workers",
      demoLink: "https://al-rajaa-workers.vercel.app/",
      image: alRajaaImage
    }
  ];

  const [showMore, setShowMore] = useState(false);
  const featuredProjects = projectsData.filter(project => project.featured);
  const otherProjects = projectsData.filter(project => !project.featured);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">Featured Projects</h2>
        <div className="featured-projects">
          {featuredProjects.map((project, index) => (
            <div key={index} className="featured-project-card">
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fab fa-github"></i> GitHub
                    </a>
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fas fa-external-link-alt"></i> Live Demo
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.split(", ").map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="projects-title">Other Projects</h2>
        <div className={`projects-grid ${showMore ? "expanded" : "collapsed"}`}>
          {otherProjects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fab fa-github"></i> GitHub
                    </a>
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fas fa-external-link-alt"></i> Live Demo
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.split(", ").map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {otherProjects.length > 6 && (
          <button className="show-more-button" onClick={() => setShowMore(!showMore)}>
            {showMore ? "Show Less" : "Show More"}
          </button>
        )}
      </div>
    </section>
  );
};

export default Projects;
