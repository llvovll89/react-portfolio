import React from 'react';
import './LandingPage.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AiOutlineInstagram, AiOutlineGithub } from 'react-icons/ai';
import { SiNotion } from 'react-icons/si';

function Main() {
  const fadeInLeft = {
    initial: {
      x: -150,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,

      transition: {
        duration: 1,
        delay: 0.7,
        ease: 'easeInOut',
      },
    },
  };

  const list = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.3,
        delay: 1.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="landingpage" id="landingpage">
      <motion.div
        className="landing-img"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.2,
          delay: 1.2,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      ></motion.div>

      <motion.div
        variants={fadeInLeft}
        initial="initial"
        animate="animate"
        className="landing-text"
      >
        <motion.div
          className="maintext"
          variants={list}
          initial="hidden"
          animate="visible"
        >
          <motion.h3 variants={item}>I`m</motion.h3>
          <motion.span variants={item}>Kim Geon Ho</motion.span>
        </motion.div>

        <div className="midtext">
          <h4>Front End</h4>
          <span>Developer</span>
        </div>
        <div className="social">
          <Link to="#" target="_blank" className="icons">
            <AiOutlineInstagram className="social-icons" />
          </Link>
          <Link
            to="https://github.com/llvovll89/react-portfolio"
            target="_blank"
            className="icons"
          >
            <AiOutlineGithub className="social-icons" />
          </Link>
          <Link to="#" target="_blank" className="icons">
            <SiNotion className="social-icons" />
          </Link>
        </div>


        <Link className="link-btn" to="/home" data-text="Port-Folio Go">Port-Folio Go</Link>
        
      </motion.div>
    </div>
  );
}

export default Main;
