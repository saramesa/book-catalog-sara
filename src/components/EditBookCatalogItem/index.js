import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './EditBookCatalogItem.scss';
import InputGenre from '../../components/InputGenre'

class EditBookCatalogItem extends Component {
  constructor(props) {
    super(props);
    this.onBookUpdate = this.onBookUpdate.bind(this);
    this.onDeleteBook = this.onDeleteBook.bind(this);
  }

  onBookUpdate(e) {
    const { value, name, id } = e.currentTarget;
    const { handleOnChangeEditBook } = this.props;
    handleOnChangeEditBook(value, name, id);
  }

  onDeleteBook(e) {
    const { id } = e.currentTarget;
    const { handleDeleteBook } = this.props;
    handleDeleteBook(id)
  }

  render() {
  	const { 
		books,
    handleDeleteBook,
    handleOnChangeEditBook
	} = this.props;
    return (
    	<li>
      	{books.map(book => (
      		<Row className="edit-container">
      			<Col className="col-3">
      				<img className="image-edit-book" alt="book-front" src={book.image}/>
      			</Col>
      			<Col className="col-8">
      				<label className="label-edit">Title:</label>
      				<input className="title-edit-book" type="text" id={book.id} name="title" value={book.title} onChange={this.onBookUpdate} />
      				<label className="label-edit">Price:</label>
      				<input className="title-edit-book" type="number" id={book.id} name="price" value={book.price} onChange={this.onBookUpdate} />
      				<label className="label-edit">Genres:</label>
              <InputGenre 
                book={book}
               />
      			</Col>
      			<Col className="col-1 fa-times-container">
      				<i className="far fa-times-circle fa-times-custom" id={book.id} onClick={this.onDeleteBook}></i>
      			</Col>     			
			    </Row>
      	))} 
      </li>
      );
    }
}

export default EditBookCatalogItem;
