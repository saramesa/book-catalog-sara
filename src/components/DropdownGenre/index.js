import React from 'react';
import PropTypes from 'prop-types';
import DropdownButton from 'react-bootstrap/DropdownButton';
import DropdownItem from '../../components/DropdownItem';
import './DropdownGenre.scss';


const DropdownGenre = ({bookid, genres, handleAddGenre}) => {
  return (
    <DropdownButton id="dropdown-basic-button" className="dropdown-container" title="Seleccionar género" variant="secondary">
      <DropdownItem 
        genres = {genres}
        bookid = {bookid}
        handleAddGenre = {handleAddGenre}
      />
    </DropdownButton>
  );
}

DropdownGenre.propTypes = {
  bookid: PropTypes.string,
  genres: PropTypes.arrayOf(
    PropTypes.string
  ).isRequired,
  handleAddGenre: PropTypes.func
}

export default DropdownGenre;
