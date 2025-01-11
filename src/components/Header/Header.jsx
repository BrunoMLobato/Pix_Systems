import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="home">Home</div>
      <div className="user-info">
        <span>Fulano</span>
        <img src="https://via.placeholder.com/40" alt="Avatar" className="avatar" />
      </div>
    </div>
  );
};

export default Header;
