import React, { useEffect, useState } from "react";
import dataService from "../../services/dataService";
import './Header.css';

const displayName = 'main-header';

const Header = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  
  const setSalesRepInfo = salesRep => {
    const {
      FirstName,
      LastName,
      EmailAddress,
    } = salesRep;
    setFirstName(FirstName);
    setLastName(LastName);
    setEmail(EmailAddress);
  };

  useEffect(() => {
    dataService.getSalesRepInfo(setSalesRepInfo);
  }, []);


  return (
    <header className={displayName}>
      <div className={`${displayName}-logo`}>
        <img
          src="http://images.repzio.com/productimages/772/logo772_lg.jpg?width=120&height=80"
          alt="logo"
        />
      </div>
      <div className={`${displayName}-sales-rep`}>{`${firstName} ${lastName} - ${email}`}</div>
    </header>
  );
};

export default Header;
