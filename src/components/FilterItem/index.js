import React, { Component } from 'react';
import './FilterItem.scss';

class FilterItem extends Component {
	render() {
		const {handleFilterChange, filtersChecked, genres} = this.props;
	    return (
	    	genres.map(genre => (
		    	<span className="filter-item" key={genre} style={{backgroundColor: filtersChecked.includes(genre) ? '#2195BA' : 'white'}} id={genre} onClick={handleFilterChange}>{genre}</span>
		 	))
	    );
	}
}

export default FilterItem;
