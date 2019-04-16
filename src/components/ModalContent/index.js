import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './ModalContent.scss';
import Input from '../../components/Input';
import Button from '../../components/Button';
import DropdownGenre from '../../components/DropdownGenre';
import BadgeGenre from '../../components/BadgeGenre';

class ModalContent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			picture: "",
			author: "",
			title: "",
			price: "",
			genres: []
		}
	}

    render() {
    	const {
			handleClose,
			handleBtnClick,
			handleAddGenre, 
			genres,
			maxID
		} = this.props;
    	return(
    		<form onSubmit={handleBtnClick}>
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
		    				name="picture"
		    				labelText="Picture:"
		    				style="title-edit-book"
		    			/>
					</Col>		    	
		    	</Row>
		    	<Row>
		    		<Col md={12}>
		    			<Input 
		    				type="text"
		    				name="author"
		    				labelText="Author:"
		    				style="title-edit-book"
		    			/>
					</Col>		    	
		    	</Row>
	    		<Row>
	    			<Col md={12}>
	    				<Input 
		    				type="text"
		    				name="title"
		    				labelText="Title:"
		    				style="title-edit-book"
		    			/>
					</Col>	    		
	    		</Row>
	    		<Row>
	    			<Col md={12}>
	    				<Input 
		    				type="number"
		    				name="price"
		    				labelText="Price:"
		    				style="title-edit-book"
		    			/>
					</Col>	    		
	    		</Row>
	    		<Row>
	    			<Col>
	    				<DropdownGenre 
      						genres = {genres}
      						maxID = {maxID}
      						
		    			/>
	    			</Col>
	    		</Row>          	
	        	<Row>
	    			<Col md={12} className="text-right">
	    				<Button
	    					type="submit"
	    					style="filter-item"
	    				>Aceptar
	    				</Button>
					</Col>	    		
	    		</Row>
	        </form>
    	)
	}
}


export default ModalContent;
