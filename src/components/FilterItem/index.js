import React, { Component } from 'react';
import './FilterItem.scss';
import * as GenresAPI from '../../api/genresApi';

class FilterItem extends Component {
	constructor(){
        super();
        this.state = {
            genres: []
        }
    }

    componentDidMount() {
	    let genresResponse = GenresAPI.getBookGenres()
	    this.setState({
            genres: genresResponse
        });
  	}

	render() {
		const {handleFilterChange} = this.props;
	    return (
	    	this.state.genres.map(genre => (
		    	<span className="filter-item" id={genre} onClick={handleFilterChange}>{genre}</span>
		 	))
	    );
	}
}

export default FilterItem;
