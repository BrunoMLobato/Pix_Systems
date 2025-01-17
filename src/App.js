import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import PDV from './components/PDV';
import Stock from './components/Stock';
import Relatorio from './components/Relatorio';
import VendasDiarias from './components/Vendasdiarias';
import AdicionarProduto from './components/AdicionarProduto';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <Header />
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/pdv" element={<PDV />} />
            <Route path="/estoque" element={<Stock />} />
            <Route path="/relatorios" element={<Relatorio />} />
            <Route path="/vendas-diarias" element={<VendasDiarias />} />
            <Route path="/AdicionarProduto" element={<AdicionarProduto />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
