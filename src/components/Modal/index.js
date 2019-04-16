import React, { Component } from 'react';
import ModalContent from '../ModalContent';
import './Modal.scss';

class Modal extends Component {
    render() {
    	const {
			handleClose,
			handleBtnClick,
			handleAddGenre,
			genres,
			maxID

		} = this.props;
    	return(
	    	<section className="modal-main">
	    		<ModalContent 
	    			handleClose = {handleClose}
	    			handleBtnClick = {handleBtnClick}
	    			handleAddGenre = {handleAddGenre}
	    			genres = {genres}
	    			maxID = {maxID}
	    		/>
	        </section>
    	)
	}
}


export default Modal;
