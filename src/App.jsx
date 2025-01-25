import React from "react";
import Home from "./Home.jsx";
import Navbar from "./components/Navbar";
import About from "./components/About.jsx";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";


const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;