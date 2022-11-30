import React from 'react';
import './index.css';
import Header from './compontent/Header/Header';
import Home from './compontent/Home/Home';
import About from './compontent/About/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Project from './compontent/Project/Project';
import Scroll from './compontent/Scroll/Scroll';
import Mode from './compontent/Mode/Mode';

function App() {

  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Header />
        <main className='main'>
        <Mode />
          <Home />
          <About />
          <Project />
          <Scroll />
        </main>
      </Router>
    </>
  );
}

export default App;
