import React, { Component } from 'react';
import './Menu.scss'
import MenuItem from '../../components/MenuItem';

class Menu extends Component {
	render() {
		return (
			<nav>
				<ul className="menu-list">
					<MenuItem title="Catalog" url="/main" />
	          		<MenuItem title="Edit" url="/edit" />
          		</ul>
			</nav>
		);
	}
}

export default Menu;
