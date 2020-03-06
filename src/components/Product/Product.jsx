import React from "react";
import PropTypes from "prop-types";
import Image from "../Image";

import "./product.css";

const displayName = "product";

const Product = ({ name, price, imageUrl }) => {
  const dimensionsUrl = `${imageUrl}?width=200&height=160`;
  return (
    <div className={displayName}>
      <div className={`${displayName}-image`}>
        <Image src={dimensionsUrl} alt="Product" />
      </div>
      <h3 className="product-title">{name}</h3>
      <div className="product-x">{`$ ${price.toFixed(2)}`}</div>
    </div>
  );
};

Product.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  imageUrl: PropTypes.string
};

PropTypes.default = {
  name: "",
  price: "",
  imageUrl: ""
};

export default Product;
