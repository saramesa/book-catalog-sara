import React, { Component } from 'react';
import '../../components/FilterItem/FilterItem.scss';
import './Button.scss';

class Button extends Component {
  	render() {
	    return (
	    	<button className="filter-item">
	    		<span>Add new book</span>
	    		<span className="add-new-book-icon"><i className="fas fa-plus-circle"></i></span>
	    	</button>
	    );
    }
}

export default Button;
