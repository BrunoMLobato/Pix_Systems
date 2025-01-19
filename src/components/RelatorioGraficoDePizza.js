import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

ChartJS.register(
    CategoryScale,
    LinearScale,
    ArcElement,
    Title,
    Tooltip,
    Legend
);

const GraficosPizza = () => {
    const pieData = {
        labels: ['Produto A', 'Produto B', 'Produto C'],
        datasets: [
            {
                label: 'Vendas por Produto',
                data: [300, 500, 200],
                backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)'],
                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
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
            <h1 style={{ color: 'black', marginBottom: '20px' }}>Gráficos em Pizza</h1>
            <div style={{ width: '30%', margin: '0 auto' }}>
                <h3>Vendas por Produto</h3>
                <Pie data={pieData} />
            </div>
        </div>
    );
};

export default GraficosPizza;