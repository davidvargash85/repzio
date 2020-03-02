import React from "react";
import { Link } from "react-router-dom";
import Header from '../../components/Header'

import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="app">
      <Header />
      <aside>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </aside>
      <main className="main-container">{children}</main>
    </div>
  );
};

export default Layout;
