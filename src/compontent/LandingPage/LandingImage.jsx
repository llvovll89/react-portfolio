import React from 'react';
import './LandingImage.css';
import { motion } from 'framer-motion';

function LandingImage({classname, imgurl}) {
  return (
    <>
      <motion.div
        whileHover={{ scale: 1.1 }}
        drag={true}
        dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
        className="landing-box"
        >
      <img src={imgurl}  className={classname} alt="img"/>
        </motion.div>
    </>
  );
}

export default LandingImage;
