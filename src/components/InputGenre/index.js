import React, { Component } from 'react';
import './InputGenre.scss';

class InputGenre extends Component {

  render() {
  	const { 
		  book
	  } = this.props;
    return (
    	book.genre.map(genre => (
      		<input className="title-edit-book" value={genre}></input>
      	))
      );
    }
}

export default InputGenre;
