import React, { useState } from 'react';
import './GerarNF.css';

const GerarNF = () => {
    const [nfData] = useState({
        numero: '12345',
        cliente: 'Cliente Exemplo',
        cnpj: '12.345.678/0001-90',
        endereco: 'Rua Exemplo, 123, Bairro, Cidade, Estado, CEP 12345-678',
        data: new Date().toLocaleDateString(),
        itens: [
            { id: 1, descricao: 'Produto A', quantidade: 2, preco: 50.0 },
            { id: 2, descricao: 'Produto B', quantidade: 1, preco: 100.0 },
        ],
        formaPagamento: 'À Vista',
        frete: 'Gratuito',
        impostos: 20.0,  // Agora o imposto é um número
    });

    const calcularTotal = () => {
        const totalItens = nfData.itens.reduce((total, item) => total + item.quantidade * item.preco, 0);
        return (totalItens + nfData.impostos).toFixed(2);  // Incluindo o imposto no cálculo do total
    };

    return (
        <div className="gerar-nf-container">
            <h1>Geração de Nota Fiscal</h1>

            <div className="nf-dados-header">
                <div>
                    <p><strong>Número da NF:</strong> {nfData.numero}</p>
                    <p><strong>Data de Emissão:</strong> {nfData.data}</p>
                </div>
                <div className="nf-empresa">
                    <p><strong>Nome da Empresa:</strong> Empresa Exemplo LTDA</p>
                    <p><strong>CNPJ:</strong> {nfData.cnpj}</p>
                    <p><strong>Endereço:</strong> {nfData.endereco}</p>
                </div>
            </div>

            <div className="nf-dados-cliente">
                <p><strong>Cliente:</strong> {nfData.cliente}</p>
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

            <div className="nf-dados-adicionais">
                <p><strong>Forma de Pagamento:</strong> {nfData.formaPagamento}</p>
                <p><strong>Frete:</strong> {nfData.frete}</p>
                <p><strong>Impostos:</strong> R$ {nfData.impostos.toFixed(2)}</p>
            </div>

            <div className="nf-total">
                <span>TOTAL A PAGAR:</span> R$ {calcularTotal()}
            </div>
        </div>
    );
};

export default GerarNF;
