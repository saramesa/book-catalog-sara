import React, { Component } from 'react';
import './BadgeGenre.scss';
import Badge from 'react-bootstrap/Badge';

class BadgeGenre extends Component {

  render() {
    const {
      genres,
    } = this.props;
    return (
      genres.map(genre => (
        <Badge variant="secondary" className="badge-genre" key={genre}>{genre}</Badge>
      ))
    )
  }
}

export default BadgeGenre;
