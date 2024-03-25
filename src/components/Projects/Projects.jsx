import React from "react";
import BasicPage from '../../global/components/BasicPage';
import ProjectCard from "./ProjectCard";
import './Projects.css';

function Projects() {
  return (
    <div>
      <BasicPage>
        <section id='projects'>
          <ProjectCard />
        </section>
        
      </BasicPage>
    </div>
  );
}

export default Projects;