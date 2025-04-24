import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { NewPage } from './Component/NewPage';
import './App.css';

function HomePage() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/newpage');
  };

  return (
    <div className="container">
      <h1>Welcome to Basic React Spring-Boot App</h1>
      <button className="nav-button" onClick={handleNavigate}>
        Open New Page
      </button>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/newpage" element={<NewPage />} />
      </Routes>
    </Router>
  );
}

export default App;
