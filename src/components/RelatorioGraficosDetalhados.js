import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const GraficosDetalhados = () => {
    const dailySalesData = {
        labels: ['00h', '06h', '12h', '18h', '24h'],
        datasets: [
            {
                label: 'Vendas do Dia',
                data: [50, 100, 75, 120, 90],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
            },
        ],
    };

    const weeklySalesData = {
        labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
        datasets: [
            {
                label: 'Vendas da Semana',
                data: [400, 500, 450, 600, 700, 650, 620],
                borderColor: 'rgba(153, 102, 255, 1)',
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                fill: true,
            },
        ],
    };

    const monthlySalesData = {
        labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
        datasets: [
            {
                label: 'Vendas do Mês',
                data: [2000, 2500, 2200, 2800],
                backgroundColor: 'rgba(255, 159, 64, 0.6)',
                borderColor: 'rgba(255, 159, 64, 1)',
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
            <Link to="/relatorios" style={{ textDecoration: 'none', color: 'black', marginBottom: '5px', display: 'flex', alignItems: 'center', fontSize: '24px', fontWeight: 'bold' }}>
                <FaArrowLeft style={{ marginRight: '8px' }} />
                Voltar
            </Link>
            <h1 style={{ color: 'black', marginBottom: '5px' }}>Relatório de Vendas</h1>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', width: '80%', margin: '0 auto' }}>
                <div>
                    <h3>Vendas do Dia</h3>
                    <Line data={dailySalesData} />
                </div>
                <div>
                    <h3>Vendas da Semana</h3>
                    <Line data={weeklySalesData} />
                </div>
                <div>
                    <h3>Vendas do Mês</h3>
                    <Bar data={monthlySalesData} />
                </div>
                <div>
                    <h3>Vendas do Ano</h3>
                    <Bar data={annualSalesData} />
                </div>
            </div>
        </div>
    );
};

export default GraficosDetalhados;