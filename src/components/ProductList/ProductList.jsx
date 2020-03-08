import React, { useState, useEffect } from "react";
import dataService from "../../services/dataService";
import Product from "./Product";

import "./ProductList.css";

const displayName = 'product-list';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    dataService.getProducts(setProducts);
  }, []);

  return (
    <div className={displayName}>
      {products.map(product =><Product { ...product } /> )}
    </div>
  );
};

export default ProductList;
