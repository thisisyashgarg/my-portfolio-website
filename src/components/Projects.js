import React from "react";
import ProjectCard from "./ProjectCard";
import AOS from "aos";
import { useEffect } from "react";

const Projects = ({ projects }) => {
  useEffect(() => {
    AOS.init({
      once: false,
    });
  });

  return (
    <div>
      <h1 className="mt-8 text-2xl md:text-4xl text-center font-bold">
        My Projects
      </h1>
      {projects.map((project, index) => (
        <div data-aos="fade-up" data-aos-duration="400" data-aos-delay="600">
          <ProjectCard project={project} key={index} />
        </div>
      ))}
    </div>
  );
};

export default Projects;
