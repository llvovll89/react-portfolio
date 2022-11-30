import React from 'react';
import { GiClick } from 'react-icons/gi';
import { AiFillGithub } from 'react-icons/ai';
import {Link} from 'react-router-dom';

function ProjectItem() {
  return (
    <div className="project-content">
      <div className="project-title_box">
        <h3 className="project-maintitle">React-Movie</h3>
      </div>
      <div className="project-desc">
        <span className='project-desc-title'>React / Tmdb API </span>
        <p className='project-desc-p'>React를 사용하여 Tmdb APi를 Fetch를 통해 현재 미국에서 상영중인 Top20위
        영화와 / Searchbar 를 이용하여 검색 까지 기능을 구현하였습니다.</p>
      </div>
      <div className="project-btnbox">
        <Link className="project-btn">
          View More <GiClick className="icons project-icon" />
        </Link>
        <Link className="project-btn">
          View Sorce <AiFillGithub className="icons project-icon" />
        </Link>
      </div>
    </div>
  );
}

export default ProjectItem;
