import React from 'react';
import './Scroll.css';
import {CiDesktopMouse2} from 'react-icons/ci'


function Scroll() {
    window.addEventListener('scroll', ()=> {
        const scrollArrow = document.querySelector('.scroll-arr');
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
    <div className="scroll-arr" onClick={topClick}>
    <button className='scroll-up'><span className='scroll-text'>Top<CiDesktopMouse2 className='icons'/> </span></button>
    </div>
  );
}

export default Scroll;
