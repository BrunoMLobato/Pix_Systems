import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './VendasDiarias.css';

const VendasDiarias = () => {
    // Dados fictícios com itens e seus totais
    const [vendas, setVendas] = useState([
        { id: 1, item: 'Produto A', total: 150 },
        { id: 2, item: 'Produto B', total: 200 },
        { id: 3, item: 'Produto C', total: 100 },
        { id: 4, item: 'Produto D', total: 250 },
    ]);

    // Calcula o total geral
    const totalGeral = vendas.reduce((acc, venda) => acc + venda.total, 0);

    return (
        <div className="vendas-diarias-container">
            <Link to="/relatorios" style={{ textDecoration: 'none', color: '#223350', marginBottom: '20px', display: 'flex', alignItems: 'center', fontSize: '24px', fontWeight: 'bold' }}>
                <FaArrowLeft style={{ marginRight: '8px' }} />
                Voltar
            </Link>
            <h1 className="vendas-diarias-title">Vendas Diárias</h1>

            {/* Tabela de vendas */}
            <table className="vendas-diarias-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Item</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {vendas.map((venda) => (
                        <tr key={venda.id}>
                            <td>{venda.id}</td>
                            <td>{venda.item}</td>
                            <td>R$ {venda.total.toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Total Geral */}
            <div className="vendas-diarias-total">
                <h2>Total Geral: R$ {totalGeral.toFixed(2)}</h2>
            </div>
        </div>
    );
};

export default VendasDiarias;