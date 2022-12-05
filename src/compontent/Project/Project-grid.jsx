import React from 'react';
import './Project-grid.css';

function Projectgrid({ imgurl }) {
  return (
    <section className="grid-container section">
      <div className="project-grid container">
        <div className="project-card">
          <img src={imgurl} alt="img,," />
          <div className="grid-desc">
            <p>React Project</p>
          </div>
        </div>
        <div className="project-card">
          <img src={imgurl} alt="img,," />
          <div className="grid-desc">
            <p>React Project</p>
          </div>
        </div>
        <div className="project-card">
          <img src={imgurl} alt="img,," />
          <div className="grid-desc">
            <p>React Project</p>
          </div>
        </div>
        <div className="project-card">
          <img src={imgurl} alt="img,," />
          <div className="grid-desc">
            <p>React Project</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projectgrid;
