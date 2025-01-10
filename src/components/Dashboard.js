import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import './Dashboard.css';

// Registro dos módulos necessários para Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  // Dados do gráfico
  const data = {
    labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
    datasets: [
      {
        label: 'Vendas Diárias (R$)',
        data: [500, 1200, 900, 1500, 700, 1100, 1700],
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Opções de configuração do gráfico
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Gráfico de Vendas Diárias',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="dashboard">
      <div className="cards">
        <div className="card">234 Vendas<br />R$ 2.121,00</div>
        <div className="card">Número de Transações<br />1512</div>
        <div className="card">Exportar dados</div>
      </div>
      <div className="charts">
        <div className="sales-chart">
        <div className="chart-header">
  <div className="time-selector">
    <select className="time-dropdown">
      <option value="daily">Vendas Diárias</option>
      <option value="weekly">Vendas Semanais</option>
      <option value="monthly">Vendas Mensais</option>
    </select>
  </div>
</div>

          <div className="chart-container">
            {/* Gráfico de vendas diárias */}
            <div className="chart">
              <Bar data={data} options={options} />
            </div>
            {/* Últimas vendas à direita do gráfico */}
            <div className="recent-sales">
              <h3>Últimas vendas</h3>
              <ul>
                <li>CPF: 123.456.789-10 +R$1000,00</li>
                <li>CPF: 987.654.321-00 +R$500,00</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
