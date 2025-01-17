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
import Login from './components/Login';
import './App.css';

const MainLayout = ({ children }) => {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Header />
        {children}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Página de Login (Sem Sidebar e Header) */}
        <Route path="/Login" element={<Login />} />

        {/* Páginas com Sidebar e Header */}
        <Route
          path="/*"
          element={
            <MainLayout>
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/" element={<Dashboard />} />
                <Route path="/pdv" element={<PDV />} />
                <Route path="/estoque" element={<Stock />} />
                <Route path="/relatorios" element={<Relatorio />} />
                <Route path="/vendas-diarias" element={<VendasDiarias />} />
                <Route path="/AdicionarProduto" element={<AdicionarProduto />} />
              </Routes>
            </MainLayout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
