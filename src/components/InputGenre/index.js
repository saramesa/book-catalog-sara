import React, { Component } from 'react';
import './InputGenre.scss';

class InputGenre extends Component {

  render() {
  	const { 
		  book
	  } = this.props;
    return (
    		<input value={book.genre}></input>
      );
    }
}

export default InputGenre;
