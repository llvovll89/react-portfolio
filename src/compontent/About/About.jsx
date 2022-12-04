import React from 'react';
import './About.css';
import AboutImg from '../../assets/image/about.png';
import Information from './Information';
import { BsDownload } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function About() {
  const fadeRotate = {
    initial: {
      opacity: 0,
      scale: 0.5,
    },
    animate : {
      opacity: 1,
      scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0.5,
      delay: 2.5, 
    }
    }
  }

  return (
    <motion.section
      className="about section"
      id="about"
      variants={fadeRotate}
      animate="animate"
      initial="initial"
      transition="transition"

    >
      <div className="titlebox">
        <h2 className="about-title">About Me</h2>
        <span className="about-subtitle">My introduction</span>
      </div>
      <div className="about-container container grid">
        <img src={AboutImg} alt="about-img,," className="about-img" />

        <div className="aboutdata">
          <Information />

          <p className="about-desc">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse nisi,
            placeat fugiat perferendis voluptatem tenetur consequuntur similique
            fuga, necessitatibus adipisci neque consectetur iusto! Fugit iure,
            obcaecati atque dolorem libero magni.
          </p>

          <div className="about-btn">
            <Link to="/" className="btn-down">
              이력서
              <BsDownload className="icons download" />
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
