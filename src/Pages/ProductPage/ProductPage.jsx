import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import dataService from "../../services/dataService";

import "./ProductPage.css";

const displayName = "product-detail";

const ProductPage = ({ match }) => {
  const [product, setProduct] = useState(undefined);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const id = match.params.id;
    dataService.getProductsById(id, setProduct);
  }, [match.params.id]);

  const getUrl = url => `${url}?width=480&height=480`;

  const getProduct = product => {
    const { ItemName, Description, Dimensions, BasePrice, PhotoName } = product;
    const imageUrl = getUrl(PhotoName);
    return (
      <div>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/repzio/products">All Products</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>{ItemName}</Breadcrumb.Item>
        </Breadcrumb>
        <section className={displayName}>
          <div className={`product-outer-image min-width`}>
            <div className={`${displayName}__img`}>
              <img src={imageUrl} alt={ItemName} />
            </div>
          </div>
          <div className={`${displayName}__content`}>
            <h1 className={`${displayName}__title`}>{ItemName}</h1>
            <div className={`${displayName}__price`}>{`$${BasePrice.toFixed(
              2
            )}`}</div>
            <div className={`${displayName}__item-number`}>
              <small>{`Item ID: ${match.params.id}`}</small>
            </div>
            <div className={`${displayName}__info`}>{Description}</div>
            <div
              className={`${displayName}__dimensions`}
            >{`Dimensions: ${Dimensions}`}</div>
          </div>
        </section>
      </div>
    );
  };

  return product ? getProduct(product) : <div>loading ...</div>;
};

export default withRouter(ProductPage);
