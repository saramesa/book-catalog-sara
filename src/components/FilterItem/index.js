import React from 'react';
import PropTypes from 'prop-types';
import './FilterItem.scss';

const onFilterChange = (genre, handleFilterChange) => {
  handleFilterChange(genre)
};

const FilterItem = ({handleFilterChange, filtersChecked, genres}) => {
	return (
	  	genres.map(genre => (
	    	<span className="filter-item" key={genre} style={{backgroundColor: filtersChecked.includes(genre) ? '#2195BA' : 'white'}} id={genre} onClick={onFilterChange.bind(this, genre, handleFilterChange)}>{genre}</span>
	 	))
	);
}

FilterItem.propTypes = {
	genres: PropTypes.arrayOf(
    	PropTypes.string
  	).isRequired,
  	handleFilterChange: PropTypes.func.isRequired, 
	filtersChecked: PropTypes.arrayOf(
    	PropTypes.string
  	).isRequired
}

export default FilterItem;
