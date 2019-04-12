import React, { Component } from 'react';
import './FilterItem.scss';
import * as GenresAPI from '../../api/genresApi';

class FilterItem extends Component {
	constructor(){
        super();
        this.state = {
            genres: [],
        }
    }

    componentDidMount() {
	    let genresResponse = GenresAPI.getBookGenres()
	    this.setState({
            genres: genresResponse
        });
  	}

	render() {
		const {handleFilterChange, filtersChecked} = this.props;
	    return (
	    	this.state.genres.map(genre => (
		    	<span className="filter-item" key={genre} style={{backgroundColor: filtersChecked.includes(genre) ? '#2195BA' : 'white'}} id={genre} onClick={handleFilterChange}>{genre}</span>
		 	))
	    );
	}
}

export default FilterItem;
