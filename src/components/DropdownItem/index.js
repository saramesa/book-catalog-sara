import React, { Component  } from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';


class DropdownItem extends Component {
  render() {
  	const { 
    genres
	} = this.props;
  console.log('this.props ', this.props);
    return (
      genres.map(genre => (
        <Dropdown.Item>
          {genre}
        </Dropdown.Item>
      ))
    );
  }
}

export default DropdownItem;
