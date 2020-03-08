import React, { useEffect, useState } from "react";
import dataService from "../../services/dataService";
import './Footer.css';

const displayName = 'main-footer';

const Footer = () => {
  const [city, setCity] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cell, setCell] = useState("");
  const [state, setState] = useState("");
  
  const setSalesRepInfo = salesRep => {
    const {
      FirstName,
      LastName,
      EmailAddress,
      Phone,
      City,
      State,
      CellPhone
    } = salesRep;
    setCity(City);
    setFirstName(FirstName);
    setLastName(LastName);
    setEmail(EmailAddress);
    setPhone(Phone);
    setCell(CellPhone);
    setState(State);
  };

  useEffect(() => {
    dataService.getSalesRepInfo(setSalesRepInfo);
  }, []);

  return (
    <footer className={displayName}>
      <div className={`${displayName}-contact-info`}>
        <address className={`${displayName}-v-card`}>
          <div className="v-card-name">{`${firstName} ${lastName}`}</div>
          <div className="v-card-separator" />
          <div className="v-card-email">{email}</div>
          <div className="v-card-phone">{`Phone: ${phone} - Cell: ${cell}`}</div>
          <div className="v-card-locality">{`${city}, ${state}`}</div>
        </address>
      </div>
    </footer>
  );
};

export default Footer;