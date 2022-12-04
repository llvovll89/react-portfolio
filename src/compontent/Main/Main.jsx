import React from 'react'
import Header from '../Header/Header';
import Home from '../Home/Home';
import About from '../About/About';
import Project from '../Project/Project';
import Scroll from '../Scroll/Scroll';
import Mode from '../Mode/Mode';
import Contact from '../Contact/Contact';

const Main = () => {
  return (
    <>
        <Header />
        <Home />
        <About />
        <Project />
        <Contact /> 
        <Scroll />
        <Mode /> 
    </>
  )
}

export default Main