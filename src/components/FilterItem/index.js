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
		const {handleFilterChange, filtersChecked, bgColor,isFilterClicked} = this.props;
		// color:  this.props.filtersChecked.includes(genre) ? 'white' : '#44505B'
	    return (
	    	this.state.genres.map(genre => (
/*	    		const isClicked = this.props.filtersChecked.includes(genre);
	    		console.log('isClicked ', isClicked)*/
		    	<span className="filter-item" style={{backgroundColor: this.props.filtersChecked.includes(genre) ? '#2195BA' : 'white'}} id={genre} onClick={handleFilterChange}>{genre}</span>
		 	))
	    );
	}
}

export default FilterItem;
