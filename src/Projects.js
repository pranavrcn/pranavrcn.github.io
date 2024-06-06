import React from 'react';
import './Projects.css';

const projects = [
  {
    title: "Project One",
    technologies: "React, Node.js",
    date: "January 2023",
    description: "A web application built with React and Node.js."
  },
  {
    title: "Project Two",
    technologies: "Python, Django",
    date: "March 2023",
    description: "A robust backend application using Django."
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <div className="card-header">
            <h2 className="project-title">{project.title}</h2>
            <span className="project-technologies">{project.technologies}</span>
          </div>
          <span className="project-date">{project.date}</span>
          <p className="project-description">{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
