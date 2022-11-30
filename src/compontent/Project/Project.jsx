import React, { useState } from 'react';
import ProjectItem from './ProjectItem';
import './Project.css';
import img1 from '../../assets/image/project-1.png';
import img2 from "../../assets/image/김건호.jpg";

const Project = () => {
  // const [imgClick , setImgClick] = useState(false);
  // const handelClick = () => {
  //   setImgClick(!imgClick);
  // }

  return (
    <section className="project section" id="project">
    <div className="projeact-titlebox">
      <h2 className="project-title">Project</h2>
      <span className="project-subtitle">My-project</span>
      </div>
      <div className="project-container container grid">
        <div className="project-img scaleup">
          <img src={img1} alt="project-1" />
        </div>
        <ProjectItem />
      </div>
    </section>
  );
};

export default Project;
