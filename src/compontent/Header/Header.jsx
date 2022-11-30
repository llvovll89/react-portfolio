import React, { useState } from 'react';
import './Header.css';
// box icons
import {
  BiHomeHeart,
  BiUserCircle,
  BiMessageSquareCheck,
  BiImage,
} from 'react-icons/bi';
import {Gi3DGlasses} from 'react-icons/gi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { RiAppsLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

function Header() {
  const [showNav, setSHowNav] = useState(false);
  const toggleBtn = () => {
    setSHowNav(!false);
  };
  const closeBtn = () => {
    setSHowNav(false);
  };

  return (
    <header className="header">
      <nav className="nav container">
        <Link to="/" className="nav-logo">
          FrontEnd <br/> <span className="logo-eng">Developer</span>
        </Link>

        <div className={showNav ? 'nav-container show-nav' : 'nav-container'}>
          <ul className="nav-list grid">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <BiHomeHeart className="icons nav-icon" />
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/" className="nav-link">
                <BiUserCircle className="icons nav-icon" />
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/" className="nav-link">
                <Gi3DGlasses className="icons nav-icon" />
                Design
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/" className="nav-link">
                <BiImage className="icons nav-icon" />
                Projects
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/" className="nav-link">
                <BiMessageSquareCheck className="icons nav-icon" />
                Contact
              </Link>
            </li>
          </ul>

          <AiFillCloseCircle className="icons nav-close" onClick={closeBtn} />
        </div>

        <div className="nav-toggle" onClick={toggleBtn}>
          <RiAppsLine className="icons" />
        </div>
      </nav>
    </header>
  );
}

export default Header;