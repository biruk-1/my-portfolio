import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <img
              src="https://via.placeholder.com/400"
              alt="Biruk Chali"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8">
            <p className="text-lg mb-4">
              I am a passionate software engineer with expertise in full-stack and mobile app development, particularly React Native and Redux. I am dedicated to building innovative, user-focused solutions that drive technological progress and deliver real-world impact.
            </p>
            <p className="text-lg">
              I am currently pursuing a Bachelor of Science in Software Engineering at Adama Science and Technology University, with an expected graduation in 2026.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;