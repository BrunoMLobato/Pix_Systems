import React from 'react';
import './RelatorioPDF.css'; // Importando o CSS do Relatório PDF

const RelatorioPDF = () => {
    const [pdfData] = React.useState({
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
        impostos: 20.0,
    });

    const calcularTotal = () => {
        const totalItens = pdfData.itens.reduce(
            (total, item) => total + item.quantidade * item.preco,
            0
        );
        return (totalItens + pdfData.impostos).toFixed(2);
    };

    const gerarPDF = () => {
        const { jsPDF } = require("jspdf");

        const doc = new jsPDF();
        doc.setFont('Poppins', 'normal');

        // Título
        doc.setFontSize(18);
        doc.setTextColor(0, 123, 158);
        doc.text('Relatório de Nota Fiscal', 105, 20, { align: 'center' });

        // Dados da empresa
        doc.setFontSize(12);
        doc.setTextColor(0, 0, 0);
        doc.text(`Número da NF: ${pdfData.numero}`, 20, 40);
        doc.text(`Data de Emissão: ${pdfData.data}`, 20, 50);
        doc.text(`CNPJ: ${pdfData.cnpj}`, 20, 60);
        doc.text(`Endereço: ${pdfData.endereco}`, 20, 70);
        doc.text(`Cliente: ${pdfData.cliente}`, 20, 80);
        doc.text(`Forma de Pagamento: ${pdfData.formaPagamento}`, 20, 90);
        doc.text(`Frete: ${pdfData.frete}`, 20, 100);
        doc.text(`Impostos: R$ ${pdfData.impostos.toFixed(2)}`, 20, 110);

        // Itens da NF
        doc.text('Itens:', 20, 120);
        let y = 130;
        pdfData.itens.forEach(item => {
            doc.text(`${item.id} - ${item.descricao}: ${item.quantidade} x R$ ${item.preco.toFixed(2)}`, 20, y);
            y += 10;
        });

        // Total
        doc.text(`Total a Pagar: R$ ${calcularTotal()}`, 20, y + 10);

        // Gerar PDF
        doc.save('relatorio_nota_fiscal.pdf');
    };

    return (
        <div className="relatorio-pdf-container">
            <h1>Relatório de Nota Fiscal</h1>
            <p>Confira os dados da nota fiscal e baixe o relatório em PDF.</p>
            <button onClick={gerarPDF}>Baixar Relatório em PDF</button>
        </div>
    );
};

export default RelatorioPDF;
