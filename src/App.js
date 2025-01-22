import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import PDV from './components/PDV';
import Stock from './components/Stock';
import Relatorio from './components/Relatorio';
import VendasDiarias from './components/Vendasdiarias';
import VendasSemanais from './components/VendasSemanais';
import AdicionarProduto from './components/AdicionarProduto';
import Login from './components/Login';
import GraficosDetalhados from './components/RelatorioGraficosDetalhados';
import GraficosBarra from './components/RelatorioGraficoDeBarra';
import GraficosLinha from './components/RelatorioGraficoDeLinha';
import GraficosPizza from './components/RelatorioGraficoDePizza';
import VendasMensais from './components/VendasMensais';
import RelatorioCSV from './components/RelatorioCSV';
import RelatorioPDF from './components/RelatorioPDF';
import GerarNF from './components/GerarNF'; 


import './App.css';

// Função para verificar se o usuário está logado
const isLoggedIn = () => {
  return localStorage.getItem('isAuthenticated') === 'true'; // Verifica se o usuário está logado
};

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
        {/* Página de Login */}
        <Route path="/Login" element={<Login />} />

        {/* Página inicial - redireciona para o Login se o usuário não estiver logado */}
        <Route
          path="/"
          element={isLoggedIn() ? <Navigate to="/dashboard" /> : <Navigate to="/Login" />}
        />

        {/* Páginas com Sidebar e Header (só acessíveis se o usuário estiver logado) */}
        <Route
          path="/*"
          element={
            isLoggedIn() ? (
              <MainLayout>
                <Routes>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/pdv" element={<PDV />} />
                  <Route path="/estoque" element={<Stock />} />
                  <Route path="/relatorios" element={<Relatorio />} />
                  <Route path="/vendas-diarias" element={<VendasDiarias />} />
                  <Route path="/vendas-semanais" element={<VendasSemanais />} />
                  <Route path="/vendas-mensais" element={<VendasMensais />} />
                  <Route path="/adicionarproduto" element={<AdicionarProduto />} />
                  <Route path="/graficosdetalhados" element={<GraficosDetalhados />} />
                  <Route path="/graficosbarra" element={<GraficosBarra />} />
                  <Route path="/graficoslinha" element={<GraficosLinha />} />
                  <Route path="/graficospizza" element={<GraficosPizza />} />
                  <Route path="/relatorios-csv" element={<RelatorioCSV />} />
                  <Route path="/relatorios-pdf" element={<RelatorioPDF />} />

                  <Route path="/nfs" element={<GerarNF />} />
                </Routes>
              </MainLayout>
            ) : (
              <Navigate to="/Login" />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
