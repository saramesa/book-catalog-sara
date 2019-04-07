import React, { Component } from 'react';
import './BadgeGenre.scss';
import Badge from 'react-bootstrap/Badge';

class BadgeGenre extends Component {

  render() {
    const {
      genres,
    } = this.props;
    console.log('genres en BadgeGenre ', genres)
    return (
      genres.map(genre => (
        <Badge variant="secondary" className="badge-genre">{genre}</Badge>
      ))
    )
  }
}

export default BadgeGenre;