import React, { Component } from 'react';
import './Filters.scss';
import * as GenresAPI from '../../api/genresApi';
import FilterItem from '../../components/FilterItem';

class Filters extends Component {
    componentDidMount() {
	    let genresResponse = GenresAPI.getBookGenres()
	    this.setState({
            genres: genresResponse
        });
  	}

	render() { 
		const {handleFilterClick} = this.props;
	    return (
	    	<div className="filters-container">
	    		<FilterItem handleFilterClick={handleFilterClick}/>
		 	</div>
	    );
	}
}

export default Filters;
