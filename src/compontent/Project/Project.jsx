import React, { useState } from 'react';
import ProjectItem from './ProjectItem';
import img1 from '../../assets/image/project-1.png';
import Slider from 'react-slick';
import Header from '../Header/Header';
import { motion } from 'framer-motion';
import Projectgrid from './Project-grid';
import Img1 from '../../assets/image/project-1.png';
import 'slick-carousel/slick/slick.css';
import './Project.css';

const Project = () => {
  const [view, setView] = useState(false);

  const fadeInLeft = {
    initial: {
      x: -350,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,

      transition: {
        duration: 1,
        delay: 1,
        ease: 'easeInOut',
      },
    },
  };

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleClick = () => {
    setView(!view);
  };

  return (
    <motion.section
      className="project section"
      id="project"
      variants={fadeInLeft}
      initial="initial"
      animate="animate"
    >
      <Header />
      <div className="projeact-titlebox">
        <h2 className="project-title">Project</h2>
        <span className="project-subtitle">My-project</span>
      </div>
      <Slider {...settings}>
        <div className="project-container container grid">
          <div
            className={
              view ? 'project-img scaleup mist' : 'project-img scaleup'
            }
            onClick={handleClick}
          >
            <img src={img1} alt="project-1" />
          </div>
          <ProjectItem
            num={'01'}
            classname={view ? 'project-content' : 'project-content off'}
          />
        </div>
        <div className="project-container container grid" onClick={handleClick}>
          <div
            className={
              view ? 'project-img scaleup mist' : 'project-img scaleup'
            }
          >
            <img src={img1} alt="project-1" />
          </div>
          <ProjectItem
            num={'02'}
            classname={view ? 'project-content' : 'off'}
          />
        </div>
        <div className="project-container container grid" onClick={handleClick}>
          <div
            className={
              view ? 'project-img scaleup mist' : 'project-img scaleup'
            }
          >
            <img src={img1} alt="project-1" />
          </div>
          <ProjectItem
            num={'03'}
            classname={view ? 'project-content' : 'off'}
          />
        </div>
      </Slider>
      <Projectgrid imgurl={Img1} />
    </motion.section>
  );
};

export default Project;
