import React, { Component, Fragment } from 'react';
import './BookList.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import Loader from '../../components/Loader';

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

      componentDidMount() {
    fetch("https://cors-anywhere.herokuapp.com/https://saramesa-book-catalog.firebaseapp.com/api/catalog")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.catalog
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    console.log('this.state ', this.state)
    console.log('items ', items)
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <Loader />
    } else {
    
    return (
    <div>
      {Object.keys(items).map(item => (
      <ListGroup key={item}>
      <ListGroup.Item>
          <Row>
            <Col xs={6} md={4} className="book__card-image-container">
              <Image className="book__card-image" alt="image" rounded src={items[item].image} />
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="book-card-title">{items[item].title}</div>
            </Col>
          </Row>
          <Row>
            <Col>{items[item].author}</Col>
          </Row>  
          <Row className="book__card-labels">
            <Col>
              <Badge variant="secondary">{items[item].genre}</Badge>
            </Col>
          </Row>    
        </ListGroup.Item>
        </ListGroup>        
      ))}
    </div>
      );
    }
  }
}


export default BookList;
