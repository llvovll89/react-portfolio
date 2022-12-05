import React from 'react';
import './Project-grid.css';
import Img1 from '../../assets/image/project-1.png'

function Projectgrid() {
  return (
    <section className="grid-container section">
      <div className="project-grid container">
        <div className="project-card"><img src={Img1} alt="img,," /><div className="grid-desc"><p>React Project</p></div></div>
        <div className="project-card"><img src={Img1} alt="img,," /><div className="grid-desc"><p>React Project</p></div></div>
        <div className="project-card"><img src={Img1} alt="img,," /><div className="grid-desc"><p>React Project</p></div></div>
        <div className="project-card"><img src={Img1} alt="img,," /><div className="grid-desc"><p>React Project</p></div></div>
      </div>
    </section>
  );
}

export default Projectgrid;
