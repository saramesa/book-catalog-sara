import React, { Component, Fragment } from 'react';
import './BookList.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import * as BookCatalogAPI from '../../api/bookCatalogApi';
import Loader from '../../components/Loader';

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      books: []
    };
    //this.handleFilterClick = this.handleFilterClick.bind(this);
  }

  componentDidMount() {
    BookCatalogAPI.getBooksCatalog()
   .then(
      (result) => {
        this.setState({
          isLoaded: true,
          books: result.catalog
         });
      }, (error) => {
          this.setState({
            isLoaded: true,
            message: 'No Data Found'
          })
      }
    )
  }

  render() {
    const { error, isLoaded, books } = this.state;
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
