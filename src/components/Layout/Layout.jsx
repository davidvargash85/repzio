import React from "react";
import Header from '../../components/Header'
import Footer from '../../components/Footer'

import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="app">
      <Header />
      <main className="main-container">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
