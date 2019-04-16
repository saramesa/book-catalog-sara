import React, { Component  } from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';


class DropdownItem extends Component {
  constructor(props) {
    super(props);
    this.onSelectGenre = this.onSelectGenre.bind(this);
  }

  onSelectGenre(e) {
    const genre = e.currentTarget.name;
    const id = e.currentTarget.id;
    const { handleAddGenre } = this.props;
    handleAddGenre(genre, id)
  }

  render() {
  	const { 
    genres,
    book,
    handleAddGenre
	} = this.props;
    return (
      genres.map(genre => (
        <Dropdown.Item id={book.id} name={genre} key={genre} onClick={this.onSelectGenre}>
          {genre}
        </Dropdown.Item>
      ))
    );
  }
}

export default DropdownItem;
