import React from "react";
import PropTypes from "prop-types";
import "./BookList.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Loader from "../../components/Loader";
import BadgeGenre from "../../components/BadgeGenre";

const BookList = ({ books, isLoaded, error }) => {
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <Loader />;
  } else {
    return (
      <Row>
        <Col className="col-md-1" />
        <Col className="col-md-10">
          <ul className="book-list">
            {books.map(book => (
              <li className="book-list-item" key={book.id}>
                <Row>
                  <Col className="book__card-image-container">
                    <Image
                      className="book__card-image"
                      alt="image"
                      rounded
                      src={book.image}
                    />
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
                  <Col>
                    <span>{book.price}</span>
                    <span>{book.currency}</span>
                  </Col>
                </Row>
                <Row>
                  <Col className="book-date">{book.date}</Col>
                </Row>
                <Row>
                  <Col>
                    <BadgeGenre variant="secondary" genres={book.genre} />
                  </Col>
                </Row>
              </li>
            ))}
          </ul>
        </Col>
        <Col className="col-md-1" />
      </Row>
    );
  }
};

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoaded: PropTypes.bool,
  error: PropTypes.bool
};

export default BookList;
