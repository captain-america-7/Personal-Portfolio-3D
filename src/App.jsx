import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Education from "./sections/Education";
import Skills from "./sections/Skills";
import Courses from "./sections/Courses";
import Extracurricular from "./sections/Extracurricular";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import Footer from './sections/Footer';

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Courses />
      <Extracurricular />
      <Experiences />
      <Testimonial />
      <Contact />
      <Footer/>
    </div>
  );
};

export default App;
