import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { Line } from 'react-chartjs-2';

const GraficosLinha = () => {
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

    return (
        <div style={{ marginTop: '5px' }}>
            <Link to="/relatorios" style={{ textDecoration: 'none', color: '#223350', marginBottom: '5px', display: 'flex', alignItems: 'center', fontSize: '24px', fontWeight: 'bold' }}>
                <FaArrowLeft style={{ marginRight: '8px' }} />
                Voltar
            </Link>
            <h1 style={{ color: '#223350', marginBottom: '20px' }}>Gráficos em Linha</h1>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', width: '80%', margin: '0 auto' }}>
                <div>
                    <h3 style={{ color: '#223350' }}>Vendas do Dia</h3>
                    <Line data={dailySalesData} />
                </div>
                <div>
                    <h3 style={{ color: '#223350' }}>Vendas da Semana</h3>
                    <Line data={weeklySalesData} />
                </div>
            </div>
        </div>
    );
};

export default GraficosLinha;