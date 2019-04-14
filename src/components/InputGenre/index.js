import React, { Component  } from 'react';
import './InputGenre.scss';

class InputGenre extends Component {

  render() {
  	const { 
		  book
	  } = this.props;
    return (
    	book.genre.map(genre => (
        <div className="container-badge-delete">      		
          <input className="input-genre" defaultValue={genre}></input>
          <span><i className="far fa-times-circle fa-times-custom"></i></span>
        </div> 
      	))
      );
    }
}

export default InputGenre;
