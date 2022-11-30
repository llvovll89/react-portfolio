import React from 'react';
import './index.css';
import Header from './compontent/Header/Header';
import Home from './compontent/Home/Home';
import About from './compontent/About/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Project from './compontent/Project/Project';

function App() {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Header />
        <main className='main'>
          <Home />
          <About />
          <Project />
        </main>
      </Router>
    </>
  );
}

export default App;
