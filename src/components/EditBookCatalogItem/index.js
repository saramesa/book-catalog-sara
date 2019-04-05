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
      				<img className="image-edit-book" alt="image "src={books[book].image}/>
      			</Col>
      			<Col className="col-7"><span className="title-edit-book">{books[book].title}</span></Col>
      			<Col className="col-2">Delete</Col>
	      		
	      			
			</Row>
      	))} 
      	</li>
      );
    }
}

export default EditBookCatalogItem;
