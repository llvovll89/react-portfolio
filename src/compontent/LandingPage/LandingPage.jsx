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
        delay: 0.5,
        ease: 'easeInOut',
      },
    },
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
      >
      </motion.div>

      <motion.div
        variants={fadeInLeft}
        initial="initial"
        animate="animate"
        className="landing-text"
      >
        <div className="maintext">
          <h3>I`m</h3>
          <span>Kim Geon Ho</span>
        </div>

        <div className="midtext">
          <h4>Front End</h4>
          <span>Developer</span>
        </div>
        <div className="social">
          <Link to="#" target="_blank" className="icons social">
            <AiOutlineInstagram className="social-icons" />
          </Link>
          <Link
            to="https://github.com/llvovll89/react-portfolio"
            target="_blank"
            className="icons social"
          >
            <AiOutlineGithub className="social-icons" />
          </Link>
          <Link to="#" target="_blank" className="icons social">
            <SiNotion className="social-icons" />
          </Link>
        </div>

        <Link className="link-btn" to="/home">
          <div className="link">Portfolio Go</div>
        </Link>
      </motion.div>
    </div>
  );
}

export default Main;
