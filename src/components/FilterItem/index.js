import React, { Component } from 'react';
import './FilterItem.scss';
import * as GenresAPI from '../../api/genresApi';

class FilterItem extends Component {
	render() {
		const {handleFilterChange, filtersChecked, genres} = this.props;
		console.log('this.props.genres ', this.props.genres);
	    return (
	    	genres.map(genre => (
		    	<span className="filter-item" key={genre} style={{backgroundColor: filtersChecked.includes(genre) ? '#2195BA' : 'white'}} id={genre} onClick={handleFilterChange}>{genre}</span>
		 	))
	    );
	}
}

export default FilterItem;
