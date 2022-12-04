import React from 'react'
import Header from '../Header/Header';
import Home from '../Home/Home';
import About from '../About/About';
import Project from '../Project/Project';
import Scroll from '../Scroll/Scroll';
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
    </>
  )
}

export default Main