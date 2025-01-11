import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import PDV from './components/PDV';
import Stock from './components/Stock';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        {/* Sidebar e Header sempre visíveis */}
        <Sidebar />
        <div className="main-content">
          <Header />

          {/* Rotas para o conteúdo dinâmico */}
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} /> {/* Dashboard */}
            <Route path="/" element={<Dashboard />} /> {/* Dashboard */}
            <Route path="/pdv" element={<PDV />} /> {/* PDV */}
            <Route path="/estoque" element={<Stock />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
