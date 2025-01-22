import React from 'react';
import './Header.css';
import logo from '../imgs/pixlogo.png';

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
        <span className="logo-text">PIXSYSTEMS</span>
      </div>
      <div className="user-info">
        <span>Fulano</span>
        <img src="https://pbs.twimg.com/profile_images/1602330408137506816/VYBXuMJV_400x400.jpg" alt="Avatar" className="avatar" />
      </div>
    </div>
  );
};

export default Header;
