import React from 'react';
import './Navbar.css'
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">OAG</div>
      <ul className="menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">Shop</a></li>
        <li><a href="#">Collections</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <div className="search-login">
        <span className="search-icon">🔍</span>
        <span className="login-icon">👤</span>
        <span className="cart-icon">🛒</span>
      </div>
    </nav>
  );
};

export default Navbar;
