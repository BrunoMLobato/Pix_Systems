import React from 'react';
import { FaHome, FaShoppingCart, FaBoxes, FaFileInvoice, FaChartBar, FaUsers, FaCog, FaSignOutAlt } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">PIXSYSTEMS</div>
      <ul className="menu">
        <li><FaHome /> Dashboard</li>
        <li><FaShoppingCart /> PDV</li>
        <li><FaBoxes /> Estoque</li>
        <li><FaFileInvoice /> NFs</li>
        <li><FaChartBar /> Relatórios</li>
        <li><FaUsers /> Clientes</li>
        <li><FaCog /> Configurações</li>
        <li><FaSignOutAlt /> Sair</li>
      </ul>
    </div>
  );
};

export default Sidebar;
