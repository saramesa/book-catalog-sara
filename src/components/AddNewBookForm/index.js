import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './AddNewBookForm.scss';
import Input from '../../components/Input';
import Button from '../../components/Button';
import DropdownGenre from '../../components/DropdownGenre';
import BadgeGenre from '../../components/BadgeGenre';
import config from '../../config/config';

class AddNewBookForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			image: "",
			currency: "€",
			author: "",
			date: "",
			title: "",
			price: "",
			id: this.props.maxID,
			genre: [],
			showDeleteButton: true
		}
		this.onChangeField = this.onChangeField.bind(this);
		this.addGenreOnNewBook = this.addGenreOnNewBook.bind(this);
		this.deleteGenreOnNewBook = this.deleteGenreOnNewBook.bind(this);
		this.onAddBook = this.onAddBook.bind(this);
	}

	onChangeField(e) {
		const name = e.currentTarget.name;
		const value = e.currentTarget.value
		this.setState({
			[name]: value
		})
	}

	addGenreOnNewBook(genre) {
		const genreArr = this.state.genre;
		if (!genreArr.includes(genre)) {
			genreArr.push(genre)
			this.setState({
				genre: genreArr
			})
		}
	}

	deleteGenreOnNewBook(genre) {
		this.setState(prevState => {
			const newGenres = prevState.genre.filter(bookGenre => bookGenre !== genre);
			const newState = {
				genre: newGenres,
			}
			return newState;
		})
	}

	onAddBook(e) {
		e.preventDefault();
		const {  handleBtnClick } = this.props;
		const bookProps = this.state
		const book = {
			image: bookProps.image || config.DEFAULT_PICTURE,
			currency: bookProps.currency,
			author: bookProps.author,
			date: bookProps.date,
			title: bookProps.title,
			price: bookProps.price,
			id: bookProps.id,
			genre: bookProps.genre
		}
		handleBtnClick(book);
	}

    render() {
    	const {
			handleClose, 
			genres,
			maxID
		} = this.props;
    	return(
    		<div onSubmit={this.onAddBook}>
    			<Row>
    				<Col md={11}></Col>	
    				<Col md={1} className="text-right">
    					<i className="far fa-times-circle fa-times-custom" onClick={handleClose}></i>
					</Col>		    	
		    	</Row>
		    	<Row>
		    		<Col md={12}>
		    			<Input 
		    				type="text"
		    				name="image"
		    				labelText="Image:"
		    				inputStyle="label-edit"
		    				handleInputChange={this.onChangeField}
		    			/>
					</Col>		    	
		    	</Row>
		    	<Row>
		    		<Col md={12}>
		    			<Input 
		    				type="text"
		    				name="author"
		    				labelText="Author:"
		    				inputStyle="label-edit"
		    				handleInputChange={this.onChangeField}
		    			/>
					</Col>		    	
		    	</Row>
	    		<Row>
	    			<Col md={12}>
	    				<Input 
		    				type="text"
		    				name="title"
		    				labelText="Title:"
		    				inputStyle="label-edit"
		    				handleInputChange={this.onChangeField}
		    			/>
					</Col>	    		
	    		</Row>
	    		<Row>
	    			<Col md={12}>
	    				<Input 
		    				type="number"
		    				name="price"
		    				labelText="Price:"
		    				inputStyle="label-edit"
		    				handleInputChange={this.onChangeField}
		    			/>
					</Col>	    		
	    		</Row>
	    		<Row>
	    			<Col>
	    				<BadgeGenre 
                      		variant="secondary" 
                      		genres={this.state.genre}
                      		showDeleteButton={this.state.showDeleteButton}
                      		handleDeleteGenre={this.deleteGenreOnNewBook}
		    			/>
	    			</Col>
	    		</Row>
	    		<Row>
	    			<Col>
	    				<DropdownGenre 
      						genres = {genres}
      						bookid = {(maxID).toString()}
      						handleAddGenre = {this.addGenreOnNewBook}
		    			/>
	    			</Col>
	    		</Row>          	
	        	<Row>
	    			<Col md={12} className="text-right">
	    				<Button
	    					type="submit"
	    					buttonStyle="filter-item"
	    					handleBtnClick={(event) => { this.onAddBook(event); handleClose()}}
	    				>
	    				Aceptar
	    				</Button>
					</Col>	    		
	    		</Row>
	        </div>
    	)
	}
}


export default AddNewBookForm;
