import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Index from "../src/Pages/index";
import Card from "../src/Pages/card";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/card" element={<Card />} /> {/* Ensure Card is properly exported */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
