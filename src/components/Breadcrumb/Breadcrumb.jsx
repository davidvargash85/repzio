import React from 'react';
import './Breadcumb.css';

const Breadcrumb = ({children}) => <ul className="breadcrumb">{children}</ul>
Breadcrumb.Item = ({children}) => <li className="breadcrumb__item">{children}</li> 

export default Breadcrumb;