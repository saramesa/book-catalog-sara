import React, { Component  } from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownItem from '../../components/DropdownItem';


class DropdownGenre extends Component {

  render() {
  	const { 
		book,
    genres
	} = this.props;
  console.log('this.props ', this.props);
    return (
      book.genre.map(genre => (
        <div>
      	  <DropdownButton id="dropdown-basic-button" title={genre} id={genre} variant="secondary">
            <DropdownItem 
              genres = {genres}
            />
        	</DropdownButton>
          <span><i className="far fa-times-circle fa-times-custom"></i></span>
        </div>
      ))
    );
  }
}

export default DropdownGenre;

