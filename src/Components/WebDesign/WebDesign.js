import React from 'react';
import projectsData from "../data/projectData";
import '../WebDesign/WebDesign.css'

function WebDesign() {
  return (
    <div>
      <h1>Projects</h1>
      {projectsData.map((project, index) => (
        <div className="project-card" key={index}>
          <h2>{project.title}</h2>
          <img src={project.img} alt={`${project.title}`} />
          <p>{project.description}</p>
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
            GitHub Repository
          </a>
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
            Live Website
          </a>
        </div>
      ))}
    </div>
  );
};

export default WebDesign;
