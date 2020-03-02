import React from "react";
import './Header.css';

const Header = () => {
  return (
    <header className="app-header">
      <div className="main-header-logo">
        <img
          src="http://images.repzio.com/productimages/772/logo772_lg.jpg?width=40&height=40"
          alt="logo"
          className="logo"
        />
      </div>
    </header>
  );
};

export default Header;
