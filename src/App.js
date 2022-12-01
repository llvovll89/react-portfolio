import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from '../src/compontent/Main/Main';
import LandingPage from './compontent/LandingPage/LandingPage';

function App() {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <main className="main">
          <Routes>
            <Route path="/" exact element={<LandingPage />} />
            <Route path="/home" element={<Main />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
