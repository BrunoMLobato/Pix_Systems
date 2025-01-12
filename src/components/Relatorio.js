import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Relatorio.css';

const Relatorio = () => {
    const navigate = useNavigate();

    const handleItemClick = (route) => {
        navigate(route);
    };

    return (
        <div className="relatorio-container">
            <h1 className="relatorio-title">Relatórios</h1>
            <div className="relatorio-cards">
                {/* Opções de Relatórios */}
                <div className="relatorio-card">
                    <h2 className="card-title">Opções de Relatórios</h2>
                    <ul className="card-list">
                        <li onClick={() => handleItemClick('/vendas-diarias')}>Vendas Diárias</li>
                        <li onClick={() => handleItemClick('/vendas-semanais')}>Vendas Semanais</li>
                        <li onClick={() => handleItemClick('/vendas-mensais')}>Vendas Mensais</li>
                        <li onClick={() => handleItemClick('/produtos-mais-vendidos')}>Produtos mais vendidos</li>
                    </ul>
                </div>

                {/* Gráficos Detalhados */}
                <div className="relatorio-card">
                    <h2 className="card-title">Gráficos Detalhados</h2>
                    <ul className="card-list">
                        <li onClick={() => handleItemClick('/graficos-barras')}>Gráficos em barras</li>
                        <li onClick={() => handleItemClick('/graficos-linhas')}>Gráficos em linhas</li>
                        <li onClick={() => handleItemClick('/graficos-pizza')}>Gráficos em pizza</li>
                    </ul>
                </div>

                {/* Relatórios Gerados */}
                <div className="relatorio-card">
                    <h2 className="card-title">Relatórios Gerados</h2>
                    <ul className="card-list">
                        <li onClick={() => handleItemClick('/relatorios-csv')}>Relatórios em CSV</li>
                        <li onClick={() => handleItemClick('/relatorios-pdf')}>Relatórios em PDF</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Relatorio;
