import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import EditBookCatalogItem from '../../components/EditBookCatalogItem';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import './EditBookCatalog.scss';

class EditBookCatalog extends Component {
	constructor(props) {
		super(props);
		this.onAddBook = this.onAddBook.bind(this);
		this.showModal = this.showModal.bind(this);
		this.state = {
			showModal: false
		}
	}

	showModal() {
		this.setState({
			showModal: true
		})
	}

	onAddBook(e) {
		console.log('e', e)
		const {  handleAddBook } = this.props;
		const formData = new FormData(e.target)
   		const book = {}
   		e.preventDefault()

   		for (let entry of formData.entries()) {
       		book[entry[0]] = entry[1]
   		}
   		console.log('book en EditBookCatalog ', book)
		handleAddBook(book);
	}

	hideModal = () => {
    	this.setState({ showModal: false });
  	};


  	render() {
  		const { 
  			books,
  			genres,
			handleDeleteBook,
			handleOnChangeEditBook
		} = this.props;
	    return (
	    	
	    	<ul className="edit-book-catalog-container">
		    	<Row>
		    		<Col md={2}></Col>
		    		<Col md={8}>
		    			<div className="add-new-book-container">
		    				<Button	
		    					type = "button"
		    					style = "filter-item"
		    					handleBtnClick={this.showModal}
		    				> 	Add New Book
		    					<span className="add-new-book-icon"><i className="fas fa-plus-circle"></i></span>
		    				</Button>
		    			</div>
			    		<EditBookCatalogItem
			    			handleDeleteBook = {handleDeleteBook}
			    			handleOnChangeEditBook = {handleOnChangeEditBook}
		      				books = {books}
		      				genres = {genres}
		      			/>	
		      			{ this.state.showModal ? <Modal 
		      					handleClose = {this.hideModal} 
		      					handleBtnClick = {this.onAddBook}
		      					/> : null }
	      			</Col>
		    		<Col md={2}></Col>
		    	</Row>
	    	</ul>
	    );
    }
}

EditBookCatalog.propTypes = {
	handleOnChangeEditBook: PropTypes.func.isRequired,
	handleAddBook: PropTypes.func.isRequired,
	handleDeleteBook: PropTypes.func.isRequired,
}

export default EditBookCatalog;
