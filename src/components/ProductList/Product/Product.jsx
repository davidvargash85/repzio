import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./product.css";

const displayName = "product";

const Product = ({ ItemName, BasePrice, PhotoName, ProductID }) => {
  const imageUrl = `${PhotoName}?width=250&height=250`;
  const productUrl = `/repzio/products/${ProductID}`;

  return (
    <div className={displayName} key={ProductID}>
      <div className={`${displayName}-outer-image`}>
        <div className={`${displayName}-image`}>
          <Link to={productUrl}>
            <img src={imageUrl} alt={ItemName} />
          </Link>
        </div>
      </div>
      <div className="product-title">
        <Link to={productUrl}>{ItemName}</Link>
      </div>
      <div className="product-price">{`$ ${BasePrice.toFixed(2)}`}</div>
    </div>
  );
};

Product.propTypes = {
  ItemName: PropTypes.string,
  BasePrice: PropTypes.number,
  PhotoName: PropTypes.string,
  ProductID: PropTypes.number
};

PropTypes.default = {
  name: "",
  price: "",
  imageUrl: "",
  ProductID: ""
};

export default Product;
