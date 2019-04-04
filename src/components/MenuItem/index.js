import React from 'react';
import './MenuItem.scss'
import { Link } from 'react-router-dom';

const MenuItem = ({ title, url }) => {
  return (
    <Link to={url} className="menu__link">
      <li className="menu__item">{title}</li>
    </Link>
  );
}
	


export default MenuItem;
