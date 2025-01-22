import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { Bar } from 'react-chartjs-2';

const GraficosBarra = () => {
    const monthlySalesData = {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        datasets: [
            {
                label: 'Vendas do Mês',
                data: [3000, 2000, 5000, 4000, 6000, 7000, 8000, 5000, 4000, 3000, 2000, 1000],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const annualSalesData = {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        datasets: [
            {
                label: 'Vendas do Ano',
                data: [4000, 6000, 5000, 4500, 4200, 2000, 4000, 3000, 4000, 3500, 6000, 7000],
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
            },
        ],
    };

    return (
        <div style={{ marginTop: '5px' }}>
            <Link to="/relatorios" style={{ textDecoration: 'none', color: '#223350', marginBottom: '5px', display: 'flex', alignItems: 'center', fontSize: '24px', fontWeight: 'bold' }}>
                <FaArrowLeft style={{ marginRight: '8px' }} />
                Voltar
            </Link>
            <h1 style={{ color: '#223350', marginBottom: '20px' }}>Gráficos em Barra</h1>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', width: '80%', margin: '0 auto' }}>
                <div>
                    <h3 style={{ color: '#223350' }}>Vendas do Mês</h3>
                    <Bar data={monthlySalesData} />
                </div>
                <div>
                    <h3 style={{ color: '#223350' }}>Vendas do Ano</h3>
                    <Bar data={annualSalesData} />
                </div>
            </div>
        </div>
    );
};

export default GraficosBarra;