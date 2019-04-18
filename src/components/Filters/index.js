import React from 'react';
import PropTypes from 'prop-types';
import './Filters.scss';
import FilterItem from '../../components/FilterItem';

const Filters = ({handleFilterChange, filtersChecked, isFilterClicked, genres}) => {
	return (
	  	<div className="filters-container">
	   		<FilterItem 
	   			genres = {genres}
	   			handleFilterChange = {handleFilterChange}
	   			filtersChecked = {filtersChecked}
	   			isFilterClicked = {isFilterClicked}
	   		/>
	 	</div>
	);
}

Filters.propTypes = {
	genres: PropTypes.arrayOf(
    	PropTypes.string
  	).isRequired,
  	handleFilterChange: PropTypes.func.isRequired, 
	filtersChecked: PropTypes.arrayOf(
    	PropTypes.string
  	).isRequired,
	isFilterClicked: PropTypes.bool 
}

export default Filters;
