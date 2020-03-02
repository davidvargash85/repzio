import React from "react";
import Layout from "./hoc/Layout/Layout";
import ProductList from "./components/ProductList";
import ProductPage from "./components/ProductPage";
import Home from "./components/Home";
import { Route, Switch } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" exact component={ProductList} />
        <Route path="/products/:productId" component={ProductPage} />
      </Switch>
    </Layout>
  );
}

export default App;
