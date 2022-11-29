import React from 'react'
import {Link} from 'react-router-dom';
import {CiDesktopMouse1} from 'react-icons/ci'
import {AiOutlineDown} from 'react-icons/ai';

function Scroll() {
  return (
    <div className="home-scroll">
        <Link to="/about" className="scroll-btn">
            <CiDesktopMouse1 className='icons scroll-icon'/>
            <span className='scroll-name'>Scroll-Down</span>
            <AiOutlineDown className='icons scroll-down'/>
            </Link>
    </div>
  )
}

export default Scroll