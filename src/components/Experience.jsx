import React from "react";

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
    <section id="experience" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Experience</h2>
        <div className="space-y-8">
          {experienceData.map((exp, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-2">{exp.role}</h3>
              <p className="text-gray-600 mb-2">
                <strong>{exp.company}</strong> | {exp.duration}
              </p>
              <ul className="list-disc list-inside text-gray-600">
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