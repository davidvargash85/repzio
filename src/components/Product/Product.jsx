import React from "react";
import PropTypes from "prop-types";
import Image from '../Image'

import "./product.css";

const getDescription = d => d.length > 120 ? (`${d.substring(0, 120)}...`) : d;

const Product = ({ name, description, dimensions, basePrice, imageUrl }) => {
  const dimensionsUrl = `${imageUrl}?width=150&height=150`;
  return (
    <div className="product">
      <h3 className="product-title">{name}</h3>
      <div className="product-image">
        <Image src={dimensionsUrl} alt="Product" />
      </div>
      <div>
        <p className="product-description">{getDescription(description)}</p>
        <div className="product-dimensions">{`Dimensions: ${dimensions}`}</div>
        <div className="product-base-price">{basePrice}</div>
      </div>
    </div>
  );
};

Product.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  dimensions: PropTypes.string,
  basePrice: PropTypes.string,
  imageUrl: PropTypes.string
};

PropTypes.default = {
  name: "",
  description: "",
  dimensions: "",
  basePrice: "",
  imageUrl: ""
};

export default Product;
