import React from 'react';
import { AiOutlineHtml5 } from 'react-icons/ai';
import {
  DiCss3Full,
  DiReact,
  DiJavascript1,
  DiMongodb,
  DiNodejsSmall,
} from 'react-icons/di';

function Information() {
  return (
    <div className="about-info grid">
      <div className="about-content">
        <h3 className="info-title">My_Skill</h3>
        <div className="info-sub">
          <span className="info-subtitle">
            Front
            <span className="info-icons">
              <AiOutlineHtml5 className="icons" />
              <DiCss3Full className="icons" />
              <DiJavascript1 className="icons" />
              <DiReact className="icons" />
            </span>
          </span>
          <span className="info-subtitle">Back
          <span className="info-icons">
            <DiMongodb className="icons" />
            <DiNodejsSmall className="icons" />
          </span>
          </span>
        </div>
      </div>
      <div className="about-content">
        <h3 className="info-title">Study..Ing</h3>
        <div className="info-sub">React-hoocks / Redux / Typescript 등,,,</div>
      </div>
    </div>
  );
}

export default Information;
