import React from 'react';
import ProjectItem from './ProjectItem';
import './Project.css';
import img1 from '../../assets/image/project-1.png';

const Project = () => {
  return (
    <section className="project section" id="project">
    <div className="projeact-titlebox">
      <h2 className="project-title">Project</h2>
      <span className="project-subtitle">My-project</span>
      </div>
      <div className="project-container container grid">
        <div className="project-img">
          <img src={img1} alt="project-1" />
        </div>
        <ProjectItem />
      </div>
    </section>
  );
};

export default Project;
