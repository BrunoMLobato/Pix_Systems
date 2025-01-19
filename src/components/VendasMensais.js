import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './VendasMensais.css';

const VendasMensais = () => {
    // Dados fictícios com itens e seus totais ajustados para totalizar 10 mil
    const [vendas, setVendas] = useState([
        { id: 1, item: 'Produto A', total: 1000 },
        { id: 2, item: 'Produto B', total: 900 },
        { id: 3, item: 'Produto C', total: 800 },
        { id: 4, item: 'Produto D', total: 700 },
        { id: 5, item: 'Produto E', total: 600 },
        { id: 6, item: 'Produto F', total: 900 },
        { id: 7, item: 'Produto G', total: 800 },
        { id: 8, item: 'Produto H', total: 700 },
        { id: 9, item: 'Produto I', total: 600 },
        { id: 10, item: 'Produto J', total: 1000 },
        { id: 11, item: 'Produto K', total: 1000 },
        { id: 12, item: 'Produto L', total: 1000 },
    ]);

    // Calcula o total geral
    const totalGeral = vendas.reduce((acc, venda) => acc + venda.total, 0);

    return (
        <div className="vendas-mensais-container">
            <Link to="/relatorios" style={{ textDecoration: 'none', color: 'black', marginBottom: '20px', display: 'flex', alignItems: 'center', fontSize: '24px', fontWeight: 'bold' }}>
                <FaArrowLeft style={{ marginRight: '8px' }} />
                Voltar
            </Link>
            <h1 className="vendas-mensais-title">Vendas Mensais</h1>

            {/* Tabela de vendas */}
            <table className="vendas-mensais-table">
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
            <div className="vendas-mensais-total">
                <h2>Total Geral: R$ {totalGeral.toFixed(2)}</h2>
            </div>
        </div>
    );
};

export default VendasMensais;