import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Para redirecionamento
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
import { FaTag, FaMoneyBillWave, FaChartLine, FaFileExport } from 'react-icons/fa';
import './Dashboard.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem('isAuthenticated'); // Verificar autenticação

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login'); // Redireciona para o login se não estiver autenticado
    }
  }, [isAuthenticated, navigate]);

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
      <h1 className="relatorio-title">Dashboard</h1>
      <div className="cards">
        <div className="card">
          <FaTag className="icon" /> 234 Vendas <FaMoneyBillWave className="icon-inline" /> R$ 2.121,00
        </div>
        <div className="card">
          <FaChartLine className="icon" /> Número de Transações <br /> 1512
        </div>
        <div className="card">
          <FaFileExport className="icon" /> Exportar dados
        </div>
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
            <div className="chart">
              <Bar data={data} options={options} />
            </div>
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
