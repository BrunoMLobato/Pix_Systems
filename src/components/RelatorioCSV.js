import React, { useState } from 'react';
import './RelatorioCSV.css';  // Certifique-se de criar um arquivo CSS apropriado para esse componente

const RelatorioCSV = () => {
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

    // Função para gerar o CSV
    const gerarCSV = () => {
        // Cabeçalhos do CSV
        const cabecalhos = [
            "Número da NF", "Data de Emissão", "Nome da Empresa", "CNPJ", "Endereço", "Cliente", "Forma de Pagamento", "Frete", "Impostos"
        ];

        // Itens da nota fiscal
        const itensCabecalho = [
            "ID", "Descrição", "Quantidade", "Preço Unitário (R$)", "Subtotal (R$)"
        ];

        // Dados da nota fiscal
        const dadosNF = [
            nfData.numero,
            nfData.data,
            "Empresa Exemplo LTDA",  // Nome da empresa
            nfData.cnpj,
            nfData.endereco,
            nfData.cliente,
            nfData.formaPagamento,
            nfData.frete,
            nfData.impostos.toFixed(2)
        ];

        // Dados dos itens
        const itensDados = nfData.itens.map(item => [
            item.id,
            item.descricao,
            item.quantidade,
            item.preco.toFixed(2),
            (item.quantidade * item.preco).toFixed(2)
        ]);

        // Montando o conteúdo do CSV
        let csvContent = "data:text/csv;charset=utf-8,";
        
        // Adicionando cabeçalhos
        csvContent += cabecalhos.join(",") + "\r\n";

        // Adicionando dados da NF
        csvContent += dadosNF.join(",") + "\r\n";

        // Adicionando cabeçalhos dos itens
        csvContent += "\r\n" + itensCabecalho.join(",") + "\r\n";

        // Adicionando dados dos itens
        itensDados.forEach(item => {
            csvContent += item.join(",") + "\r\n";
        });

        // Criando o link para download
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", `relatorio_nf_${nfData.numero}.csv`);
        link.click();
    };

    return (
        <div className="relatorio-csv-container">
            <h1>Relatório CSV da Nota Fiscal</h1>

            <button onClick={gerarCSV}>Baixar Relatório em CSV</button>
        </div>
    );
};

export default RelatorioCSV;
