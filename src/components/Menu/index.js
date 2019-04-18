import React from 'react';
import './Menu.scss'
import MenuItem from '../../components/MenuItem';

const Menu = () =>  {
	return (
		<nav className="nav-menu">
			<ul className="menu-list">
				<MenuItem title="Catalog" url="/" />
	       		<MenuItem title="Edit" url="/edit" />
       		</ul>
		</nav>
	);
}

export default Menu;
