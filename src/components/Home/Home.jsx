import React, { useEffect, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Image from "../Image";
import dataService from "../../services/dataService";

const Home = () => {
  const [company, setCompany] = useState('');
  const [city, setCity] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [phone, setPhone] = useState('');
  const [state, setState] = useState('');

  useEffect(() => {
    dataService.getCompanyInfo(setCompany);
  }, []);

  const setSalesRepInfo = (salesRep) => {
    const {
      FirstName,
      LastName,
      EmailAddress,
      Phone,
      City,
      State,
      PostalCode
    } = salesRep;
    setCity(City);
    setFirstName(FirstName);
    setLastName(LastName);
    setEmail(EmailAddress);
    setZipCode(PostalCode);
    setPhone(Phone);
    setState(State);
  }

  useEffect(() => {
    dataService.getSalesRepInfo(setSalesRepInfo);
  }, []);

  const { CompanyName } = company;

  return (
    <div className="home">
      <div className="box welcome">
        <Image
          src="http://images.repzio.com/productimages/772/logo772_lg.jpg?width=150&height=150"
          alt="logo"
          className="logo"
        />
        <div>
          <h1>{CompanyName}</h1>
        </div>
        <section>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>
        <div className="inventory-link">
          <Link to="/products">Check our inventory</Link>
        </div>
      </div>
      <div className="box contact-info">
        <h3>Contact Info</h3>
        <address className="vcard">
          <div className="name">{`${firstName} ${lastName}`}</div>
          <div className="sales-rep">{email}</div>
          <div className="locality">{`${city}, ${state}`}</div>
          <div className="postal-code">{zipCode}</div>
          <div className="tel">Tel: {phone}</div>
        </address>
      </div>
    </div>
  );
};

export default Home;
