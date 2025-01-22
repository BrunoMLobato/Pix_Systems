import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './VendasSemanais.css';

const VendasSemanais = () => {
    // Dados fictícios com itens e seus totais
    const [vendas, setVendas] = useState([
        { id: 1, item: 'Produto A', total: 300 },
        { id: 2, item: 'Produto B', total: 250 },
        { id: 3, item: 'Produto C', total: 200 },
        { id: 4, item: 'Produto D', total: 150 },
        { id: 5, item: 'Produto E', total: 100 },
        { id: 6, item: 'Produto F', total: 200 },
        { id: 7, item: 'Produto G', total: 250 },
        { id: 8, item: 'Produto H', total: 300 },
        { id: 9, item: 'Produto I', total: 400 },
        { id: 10, item: 'Produto J', total: 350 },
        { id: 11, item: 'Produto K', total: 200 },
        { id: 12, item: 'Produto L', total: 300 },
    ]);

    // Calcula o total geral
    const totalGeral = vendas.reduce((acc, venda) => acc + venda.total, 0);

    return (
        <div className="vendas-semanais-container">
            <Link to="/relatorios" style={{ textDecoration: 'none', color: '#223350', marginBottom: '20px', display: 'flex', alignItems: 'center', fontSize: '24px', fontWeight: 'bold' }}>
                <FaArrowLeft style={{ marginRight: '8px' }} />
                Voltar
            </Link>
            <h1 className="vendas-semanais-title">Vendas Semanais</h1>

            {/* Tabela de vendas */}
            <table className="vendas-semanais-table">
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
            <div className="vendas-semanais-total">
                <h2 style={{ fontSize: '28px' }}>Total Geral: R$ {totalGeral.toFixed(2)}</h2>
            </div>
        </div>
    );
};

export default VendasSemanais;