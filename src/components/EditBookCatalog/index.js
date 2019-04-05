import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import EditBookCatalogItem from '../../components/EditBookCatalogItem';
import './EditBookCatalog.scss';

class EditBookCatalog extends Component {
  	render() {
  		const { 
			books
		} = this.props;
	    return (
	    	<ul className="edit-book-catalog-container">
		    	<Row>
		    		<Col md={2}></Col>
		    		<Col md={8}>
			    		<EditBookCatalogItem
		      				books={books}
		      			/>	
	      			</Col>
		    		<Col md={2}></Col>
		    	</Row>
	    	</ul>
	    );
    }
}

export default EditBookCatalog;
