import React, { useState, useEffect } from "react";
import Product from "../Product";
import dataService from "../../services/dataService";

import { Link } from "react-router-dom";

import "./ProductList.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    dataService.getProducts(setProducts);
  }, []);

  // useEffect(() => {
  //   const f = x => x;
  //   dataService.getProductsById("a", f);
  // }, []);

  return (
    <div className="products-list">
      {products.map(product => {
        const {
          Dimensions,
          Description,
          ItemName,
          BasePrice,
          PhotoName,
          ProductID
        } = product;
        return (
          <Link
            key={ProductID}
            to={`/products/${ProductID}`}
            style={{ textDecoration: "none" }}
          >
            <Product
              name={ItemName}
              description={Description}
              dimensions={Dimensions}
              price={BasePrice}
              imageUrl={PhotoName}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default ProductList;
