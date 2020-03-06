import React, { useState, useEffect } from "react";
import dataService from "../../services/dataService";
import DOMPurify from 'dompurify'
import ProductList from "../ProductList";

import "./Home.css";

const displayName = 'home';

const Home = () => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const setCompanyInfo = ({
    CompanyName,
    Message
  }) => {
    setTitle(CompanyName);
    setMessage(Message);
  };

  useEffect(() => {
    dataService.getCompanyInfo(setCompanyInfo);
  }, []);

  useEffect(() => {
    const f = (x) => (x);
    dataService.getProductsById('a', f);
  }, []);

  return (
    <div className={displayName}>
      <header className={`${displayName}-company-name`}>
        <h1>{title}</h1>
      </header>
      <div className={`${displayName}-title-separator`} />
      <div className={`${displayName}-message`}
       dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(message)}} />
      <ProductList />
    </div>
  );
};

export default Home;
