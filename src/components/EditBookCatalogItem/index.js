import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './EditBookCatalogItem.scss';

class EditBookCatalogItem extends Component {

  render() {
  	const { 
		books
	} = this.props;
    return (
    	<li>
      	{Object.keys(books).map(book => (
      		<Row className="edit-container">
      			<Col className="col-3">
      				<img className="image-edit-book" alt="book-front" src={books[book].image}/>
      			</Col>
      			<Col className="col-8">
      				<label>Title:</label>
      				<input className="title-edit-book" type="text" value={books[book].title}></input>
      				<label>Price:</label>
      				<input className="title-edit-book" type="text" value={books[book].price}></input>
      				<label>Genres:</label>
      			</Col>
      			<Col className="col-1 fa-times-container">
      				<i className="far fa-times-circle fa-times-custom"></i>
      			</Col>     			
			</Row>
      	))} 
      	</li>
      );
    }
}

export default EditBookCatalogItem;
