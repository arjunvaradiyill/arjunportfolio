import React from 'react';
import './Projects.css';
import project1 from '../assets/project1.png'; // Replace with your project image
import project2 from '../assets/project2.png'; // Replace with your project image

const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: "Project 1",
      image: project1,
      description: "A brief description of Project 1 with key features.",
      github: "https://github.com/username/project1",
      demo: "https://project1-demo.com",
    },
    {
      id: 2,
      title: "Project 2",
      image: project2,
      description: "A brief description of Project 2 with key features.",
      github: "https://github.com/username/project2",
      demo: "https://project2-demo.com",
    },
    // Add more projects here if necessary
  ];

  return (
    <div className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-container">
        {projectData.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                GitHub
              </a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link live-demo">
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
