import React, { Component } from 'react';
import './BookList.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import Loader from '../../components/Loader';

class BookList extends Component {

  render() {
    const {
      books,
      isLoaded,
      error
    } = this.props;
    //const { error, isLoaded, books } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <Loader />
    } else {
      return (
        <div>
          {Object.keys(books).map(book => (
          <ListGroup key={book}>
            <ListGroup.Item>
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
                  <Col>
                    <Badge variant="secondary">{books[book].genre}</Badge>
                  </Col>
                </Row>    
              </ListGroup.Item>
            </ListGroup>        
          ))}
        </div>
      );
    }
  }


  handleFilterClick(e) {
    console.log('e.target.id ', e.target.id)
  }
}

export default BookList;
