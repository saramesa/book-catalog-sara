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
		
		const {handleFilterChange, filtersChecked, bgColor} = this.props;
		console.log('filtersChecked ', filtersChecked)
	    return (
	    	this.state.genres.map(genre => (
		    	<span className="filter-item" style={{backgroundColor:this.props.bgColor}} id={genre} onClick={handleFilterChange}>{genre}</span>
		 	))
	    );
	}
}

export default FilterItem;
