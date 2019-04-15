import React, { Component  } from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownItem from '../../components/DropdownItem';


class DropdownGenre extends Component {
  render() {
  	const { 
		  book,
      genres,
	  } = this.props;
    return (
      <DropdownButton id="dropdown-basic-button" className="dropdown-container" title="Seleccionar género" variant="secondary">
        <DropdownItem 
          genres = {genres}
          book = {book}
        />
      </DropdownButton>
    );
  }
}

export default DropdownGenre;

