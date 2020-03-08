import React from "react";
import "./Layout.css";

const Layout = ({ children }) => <main className="app layout">{children}</main>
Layout.Header = ({ children }) => <header className="app layout__header">{children}</header>
Layout.Body = ({ children }) => <div className="app layout__body">{children}</div>
Layout.Footer = ({ children }) => <footer className="app layout__footer">{children}</footer>

export default Layout;
