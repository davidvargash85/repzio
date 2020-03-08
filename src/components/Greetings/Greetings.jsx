import React, { useState, useEffect } from "react";
import dataService from "../../services/dataService";
import DOMPurify from 'dompurify'

import './Greetings.css';

const displayName = 'greetings';

const Greetings = () => {
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

  return (
    <section className="greetings">
      <header className={`${displayName}-company-name`}>
        <h1>{title}</h1>
      </header>
      <div className={`${displayName}-title-separator`} />
      <div
        className={`${displayName}-message`}
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(message) }}
      />
    </section>
  );
};

export default Greetings;
