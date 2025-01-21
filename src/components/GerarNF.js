import React, { useState } from 'react';
import './GerarNF.css';

const GerarNF = () => {
    const [nfData] = useState({
        numero: '12345',
        cliente: 'Cliente Exemplo',
        data: new Date().toLocaleDateString(),
        itens: [
            { id: 1, descricao: 'Produto A', quantidade: 2, preco: 50.0 },
            { id: 2, descricao: 'Produto B', quantidade: 1, preco: 100.0 },
        ],
    });

    const calcularTotal = () => {
        return nfData.itens.reduce((total, item) => total + item.quantidade * item.preco, 0).toFixed(2);
    };

    return (
        <div className="gerar-nf-container">
            <h1>Geração de Nota Fiscal</h1>

            <div className="nf-dados">
                <div>
                    <p><strong>Número NF:</strong> {nfData.numero}</p>
                    <p><strong>Cliente:</strong> {nfData.cliente}</p>
                </div>
                <div>
                    <p><strong>Data de Emissão:</strong> {nfData.data}</p>
                </div>
            </div>

            <table className="nf-itens">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Descrição</th>
                        <th>Quantidade</th>
                        <th>Preço Unitário (R$)</th>
                        <th>Subtotal (R$)</th>
                    </tr>
                </thead>
                <tbody>
                    {nfData.itens.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.descricao}</td>
                            <td>{item.quantidade}</td>
                            <td>{item.preco.toFixed(2)}</td>
                            <td>{(item.quantidade * item.preco).toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="nf-total">
                <span>Total:</span> R$ {calcularTotal()}
            </div>
        </div>
    );
};

export default GerarNF;
