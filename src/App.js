import React, { useEffect } from "react";
import "./App.css";
import About from "./components/About";
import Card from "./components/Card";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import data from "./assets/data";
import "aos/dist/aos.css";
import AOS from "aos";
import Experience from "./components/Experience";

function App() {
  useEffect(() => {
    AOS.init({
      once: false,
    });
  });

  return (
    <div className="min-h-screen py-10 px-3 sm:px-5 bg-gray-100">
      <div data-aos="fade-down" data-aos-duration="800">
        <Card name={data.name} title={data.title} social={data.social} />
      </div>

      <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="1000">
        <About title={data.about.title} description={data.about.description} />
      </div>

      <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="1000">
        <Skills skills={data.skills} />
      </div>

      <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="800">
        <Experience
          title={data.experience.title}
          companies={data.experience.companies}
        />
      </div>

      <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="1000">
        <Projects projects={data.projects} />
      </div>
      <Footer github={data.social.github} />
    </div>
  );
}
export default App;
