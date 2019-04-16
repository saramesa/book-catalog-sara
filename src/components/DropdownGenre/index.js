import React, { Component  } from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownItem from '../../components/DropdownItem';


class DropdownGenre extends Component {
  render() {
  	const { 
		  book,
      genres,
      handleAddGenre,
      maxID
	  } = this.props;
    return (
      <DropdownButton id="dropdown-basic-button" className="dropdown-container" title="Seleccionar género" variant="secondary">
        <DropdownItem 
          genres = {genres}
          book = {book}
          maxID = {maxID}
          handleAddGenre = {handleAddGenre}
        />
      </DropdownButton>
    );
  }
}

export default DropdownGenre;

