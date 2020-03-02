import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import dataService from "../../services/dataService";
import Image from "../Image";

import "./ProductPage.css";

const ProductPage = ({ match }) => {
  const [product, setProduct] = useState(undefined);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  useEffect(() => {
    const id = match.params.productId;
    dataService.getProductsById(id, setProduct);
  }, [match.params.productId]);

  const getUrl = url => `${url}?width=300&height=300`;

  const getProduct = product => {
    const { ItemName, Description, Dimensions, BasePrice, PhotoName } = product;
    const url = getUrl(PhotoName);
    return (
      <div className="product-page">
        <div className="product-image">
          <Image src={url} alt={ItemName} />
        </div>
        <div className="product-info">
          <h1>{ItemName}</h1>
          <div className="product-description">{Description}</div>
          <div className="product-price">{`$ ${BasePrice.toFixed(2)}`}</div>
          <div className="product-dimensions">{`Dimensions: ${Dimensions}`}</div>
        </div>
      </div>
    );
  };

  return product ? getProduct(product) : <div>loading ...</div>;
};

export default withRouter(ProductPage);
