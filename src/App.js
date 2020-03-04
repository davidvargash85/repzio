import React from "react";
import Layout from "./components/Layout";
import ProductList from "./components/ProductList";
import ProductPage from "./components/ProductPage";
import Home from "./components/Home";
import { Route, Switch } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/repzio/" exact component={Home} />
        <Route path="/repzio/products" exact component={ProductList} />
        <Route path="/repzio/products/:productId" component={ProductPage} />
      </Switch>
    </Layout>
  );
}

export default App;
