import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaShoppingCart, FaBoxes, FaFileInvoice, FaChartBar, FaUsers, FaCog, FaSignOutAlt } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">PIXSYSTEMS</div>
      <ul className="menu">
        <li>
          <Link to="/"> {/* Link para Dashboard */}
            <FaHome /> Dashboard
          </Link>
        </li>
        <li>
          <Link to="/pdv"> {/* Link para PDV */}
            <FaShoppingCart /> PDV
          </Link>
        </li>
        <li>
          <Link to="/estoque"> {/* Exemplo de rota para Estoque */}
            <FaBoxes /> Estoque
          </Link>
        </li>
        <li>
          <Link to="/nfs"> {/* Exemplo de rota para NFs */}
            <FaFileInvoice /> NFs
          </Link>
        </li>
        <li>
          <Link to="/relatorios"> {/* Exemplo de rota para Relatórios */}
            <FaChartBar /> Relatórios
          </Link>
        </li>
        <li>
          <Link to="/sair"> {/* Exemplo de ação de sair */}
            <FaSignOutAlt /> Sair
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
