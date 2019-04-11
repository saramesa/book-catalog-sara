import React, { Component } from 'react';
import './BookList.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Loader from '../../components/Loader';
import BadgeGenre from '../../components/BadgeGenre';

class BookList extends Component {

  render() {
    const {
      books,
      isLoaded,
      error
    } = this.props;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <Loader />
    } else {
      return (
      <Row>
        <Col className="col-md-2"></Col>
        <Col className="col-md-8"><ul className="book-list">
          {books.map(book => (
          <li className="book-list-item">
                <Row>
                  <Col className="book__card-image-container">
                    <Image className="book__card-image" alt="image" rounded src={book.image} />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="book-card-title">{book.title}</div>
                  </Col>
                </Row>
                <Row>
                  <Col>{book.author}</Col>
                </Row>
                <Row>
                  <Col className="book-date">{book.date}</Col>
                </Row>   
                <Row>
                  <Col>
                    <BadgeGenre variant="secondary" genres={book.genre}></BadgeGenre>
                  </Col>
                </Row>    
            </li>        
          ))}
        </ul></Col>
        <Col className="col-md-2"></Col>
      </Row>
        
      );
    }
  }

}

export default BookList;
