import React from "react";
import PropTypes from "prop-types";
import "./BadgeGenre.scss";
import Badge from "react-bootstrap/Badge";

const deleteGenre = (genre, bookid, handleDeleteGenre) => {
  handleDeleteGenre(genre, bookid);
};

const BadgeGenre = ({
  genres,
  showDeleteButton,
  bookid,
  handleDeleteGenre
}) => {
  return genres.map(genre => (
    <div key={genre}>
      <Badge variant="secondary" className="badge-genre" key={genre}>
        {genre}
      </Badge>
      {showDeleteButton ? (
        <span>
          <i
            className="far fa-times-circle fa-times-custom"
            id={genre}
            onClick={deleteGenre.bind(this, genre, bookid, handleDeleteGenre)}
          />
        </span>
      ) : null}
    </div>
  ));
};

BadgeGenre.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  showDeleteButton: PropTypes.bool,
  bookid: PropTypes.string,
  handleDeleteGenre: PropTypes.func
};

export default BadgeGenre;
