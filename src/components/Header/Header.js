import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div>
      <h1>Welcome to shop</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/orderreview">Order Review</Link>
      </nav>
    </div>
  );
};

export default Header;
