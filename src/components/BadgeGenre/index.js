import React, { Component } from 'react';
import './BadgeGenre.scss';
import Badge from 'react-bootstrap/Badge';

class BadgeGenre extends Component {constructor(props) {
    super(props);
    this.deleteGenre = this.deleteGenre.bind(this);
  }

  deleteGenre(e) {
    const genre  = e.currentTarget.id;
    const { handleDeleteGenre, bookid } = this.props;
    handleDeleteGenre(genre, bookid)
  }

  render() {
    const {
      genres,
      bookid,
      showDeleteButton,
      handleDeleteGenre
    } = this.props;
    return (
      genres.map(genre => (
        <div key={genre}>
          <Badge variant="secondary" className="badge-genre" key={genre}>{genre}</Badge>
          { showDeleteButton? <span><i className="far fa-times-circle fa-times-custom" id={genre} onClick={this.deleteGenre}></i></span> : null }
        </div>
      ))
    )
  }
}

export default BadgeGenre;
