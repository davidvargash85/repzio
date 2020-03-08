import React from "react";
import ProductPage from './Pages/ProductPage';
import NotFoundPage from "./Pages/NotFound/NotFoundPage";
import Layout from "./components/Layout";
import ProductList from "./components/ProductList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Greetings from './components/Greetings';

import { Route, Switch } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Layout>
      <Layout.Header>
        <Header />
      </Layout.Header>
      <Layout.Body>
        <Greetings />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route exact path="/repzio" component={ProductList} />
          <Route path="/repzio/products/:id" component={ProductPage} />
          <Route path="/repzio/products/" component={ProductList} />
          {/* <Route path="*" component={NotFoundPage} /> */}
          <Route component={NotFoundPage} />
        </Switch>
      </Layout.Body>
      <Layout.Footer>
        <Footer />
      </Layout.Footer>
    </Layout>
  );
}

export default App;
