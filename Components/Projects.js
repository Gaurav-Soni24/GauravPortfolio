// Projects.js
import React from 'react';
import ProjectCard from './ProjectCard';
import projectData from './projectData';
import './Style/Projects.css';

const Projects = () => {
  return (
    <section className="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <ProjectCard 
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
            liveLink={project.liveLink}
          />
        ))}
      </div>
      <div className="see-all-projects">
        <a href="/all-projects" className="btn">See All Projects</a>
      </div>
    </section>
  );
};

export default Projects;
