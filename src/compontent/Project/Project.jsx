import React, { useState } from 'react';
import ProjectItem from './ProjectItem';
import 'slick-carousel/slick/slick.css';
import './Project.css';
import img1 from '../../assets/image/project-1.png';
import Slider from 'react-slick';
import data from '../../db/data.json';

const Project = () => {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="project section" id="project">
    <div className="projeact-titlebox">
    <h2 className="project-title">Project</h2>
    <span className="project-subtitle">My-project</span>
    </div>
    <Slider {...settings}>
        <div className="project-container container grid">
          <div className="project-img scaleup">
            <img src={img1} alt="project-1" />
          </div>
          <ProjectItem num={"01"}/>
        </div>
        <div className="project-container container grid">
          <div className="project-img scaleup">
            <img src={img1} alt="project-1" />
          </div>
          <ProjectItem num={"02"}/>
        </div>
        <div className="project-container container grid">
          <div className="project-img scaleup">
            <img src={img1} alt="project-1" />
          </div>
          <ProjectItem num={"03"}/>
        </div>
      </Slider>
    </section>
  );
};

export default Project;
