import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './EditBookCatalogItem.scss';
import InputGenre from '../../components/InputGenre'

class EditBookCatalogItem extends Component {

  render() {
  	const { 
		books,
    handleDeleteBook
	} = this.props;
    return (
    	<li>
      	{books.map(book => (
      		<Row className="edit-container">
      			<Col className="col-3">
      				<img className="image-edit-book" alt="book-front" src={book.image}/>
      			</Col>
      			<Col className="col-8">
      				<label>Title:</label>
      				<input className="title-edit-book" type="text" value={book.title}></input>
      				<label>Price:</label>
      				<input className="title-edit-book" type="text" value={book.price}></input>
      				<label>Genres:</label>
              <InputGenre 
                book={book}
               />
      			</Col>
      			<Col className="col-1 fa-times-container">
      				<i className="far fa-times-circle fa-times-custom" onClick={handleDeleteBook}></i>
      			</Col>     			
			    </Row>
      	))} 
      </li>
      );
    }
}

export default EditBookCatalogItem;
