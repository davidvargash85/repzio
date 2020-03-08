import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import dataService from "../../services/dataService";
import Image from "../Image";
import "./Header.css";

const displayName = "main-header";

const Header = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const setSalesRepInfo = salesRep => {
    const { FirstName, LastName, EmailAddress } = salesRep;
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
        <Link to="/repzio/products">
          <Image
            src="http://images.repzio.com/productimages/772/logo772_lg.jpg?width=60&height=60"
            alt="logo"
            width={60}
            height={60}
          />
        </Link>
      </div>
      <div
        className={`${displayName}-sales-rep`}
      >{`${firstName} ${lastName} - ${email}`}</div>
    </header>
  );
};

export default Header;
