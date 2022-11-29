import React from 'react';
import './index.css';
import Header from './compontent/Header/Header';
import Home from './compontent/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Header />
        <main className='main'>
          <Home />
        </main>
      </Router>
    </>
  );
}

export default App;
