import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import PropTypes from "prop-types";

const onSelectGenre = (genre, id, handleAddGenre) => {
  handleAddGenre(genre, id);
};

const DropdownItem = ({ genres, bookid, handleAddGenre }) => {
  return genres.map(genre => (
    <Dropdown.Item
      id={bookid}
      name={genre}
      key={genre}
      onClick={onSelectGenre.bind(this, genre, bookid, handleAddGenre)}
    >
      {genre}
    </Dropdown.Item>
  ));
};

DropdownItem.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  bookid: PropTypes.string
};

export default DropdownItem;
