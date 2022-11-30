import React from 'react';
import './Scroll.css';
import { BiUpArrow } from 'react-icons/bi';
import { Link } from 'react-router-dom';

function Scroll() {
    window.addEventListener('scroll', ()=> {
        const scrollArrow = document.querySelector('.scroll-up');
        if(window.scrollY >= 560) {
            scrollArrow.classList.add('scrollup-show');
        } else {
            scrollArrow.classList.remove('scrollup-show');
        }
    })

    const topClick = () => {
        return window.scrollTo(0,0);
    }

  return (
    <Link to="#" className="scroll-up">
      <BiUpArrow className="icons" onClick={topClick}/>
    </Link>
  );
}

export default Scroll;
