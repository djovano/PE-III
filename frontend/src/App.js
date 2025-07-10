import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar';
import AnimaisPage from './pages/animalPage';
import VacinasPage from './pages/vacinaPage';
import './App.css';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ marginLeft: '220px', padding: '20px', flex: 1 }}>
          <Routes>
            <Route path="/" element={<AnimaisPage />} />
            <Route path="/vacinas" element={<VacinasPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
