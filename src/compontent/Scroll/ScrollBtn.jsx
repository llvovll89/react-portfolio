import React from 'react';
import { Link } from 'react-router-dom';
import './ScrollBtn.css'

const ScrollBtn = () => {
  return (
    <>
    <Link className="back-btn" to="/home" 
    data-text="Click">
      Click
    </Link>
    </>
  );
};

export default ScrollBtn;
