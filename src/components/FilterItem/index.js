import React, { Component, Fragment } from 'react';
import './FilterItem.scss';
import * as GenresAPI from '../../api/genresApi';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
		const {handleFilterClick} = this.props;
	    return (
	    	this.state.genres.map(genre => (
		    	<span className="filter-item" id={genre} onClick={handleFilterClick}>{genre}</span>
		 	))
	    );
	}
}

export default FilterItem;
