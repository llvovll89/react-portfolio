import React from 'react';
import './Home.css';
import Homedata from './Homedata';
import Item from './Item';
import Scroll from './Scroll';
import { motion } from 'framer-motion';

function Home() {
  const fadeInUp = {
    initial: {
      x: 150,
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

  return (
    <section className="home section" id="home">
      <div className="home-container container grid">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="home-content grid"
        >
          <Item />

          <div className="home-img"></div>

          <Homedata />
        </motion.div>

        <Scroll />
      </div>
    </section>
  );
}

export default Home;
