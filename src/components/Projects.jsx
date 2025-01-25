import React from "react";

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
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <p className="text-gray-600 mb-4">
                <strong>Technologies:</strong> {project.technologies}
              </p>
              <div className="flex space-x-4">
                <a
                  href={project.githubLink}
                  className="text-blue-600 hover:underline"
                >
                  GitHub
                </a>
                <a
                  href={project.demoLink}
                  className="text-blue-600 hover:underline"
                >
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