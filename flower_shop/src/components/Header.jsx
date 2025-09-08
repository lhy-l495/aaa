// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo"><Link to="/">花店</Link></h1>
        <nav>
          <ul>
            <li><Link to="/">首页</Link></li>
            <li><Link to="/products">鲜花</Link></li>
            <li><Link to="/cart">购物车</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;