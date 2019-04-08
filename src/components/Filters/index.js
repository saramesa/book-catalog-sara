import React, { Component } from 'react';
import './Filters.scss';
import FilterItem from '../../components/FilterItem';

class Filters extends Component {
	render() { 
		const {
			handleFilterChange,
			filtersChecked, 
			bgColor,
			isFilterClicked
		} = this.props;
	    return (
	    	<div className="filters-container">
	    		<FilterItem 
	    			handleFilterChange={handleFilterChange}
	    			filtersChecked={filtersChecked}
	    			bgColor={bgColor}
	    			isFilterClicked={isFilterClicked}
	    		/>
		 	</div>
	    );
	}
}

export default Filters;
