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
    console.log('this.props.books en BookList ', this.props.books)
    //const { error, isLoaded, books } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <Loader />
    } else {
      return (
      <Row>
        <Col className="col-md-2"></Col>
        <Col className="col-md-8"><ul className="book-list">
          {Object.keys(books).map(book => (
          <li className="book-list-item" key={book}>
                <Row>
                  <Col xs={6} md={4} className="book__card-image-container">
                    <Image className="book__card-image" alt="image" rounded src={books[book].image} />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="book-card-title">{books[book].title}</div>
                  </Col>
                </Row>
                <Row>
                  <Col>{books[book].author}</Col>
                </Row>
                <Row>
                  <Col className="book-date">{books[book].date}</Col>
                </Row>   
                <Row>
                  <Col>
                    <BadgeGenre variant="secondary" genres={books[book].genre}></BadgeGenre>
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


  handleFilterClick(e) {
    console.log('e.target.id ', e.target.id)
  }
}

export default BookList;
