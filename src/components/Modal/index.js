import React, { Component } from 'react';
import ModalContent from '../ModalContent';
import './Modal.scss';

class Modal extends Component {
    render() {
    	const {
			handleClose,
			handleBtnClick,
			handleAddGenre,
			handleDeleteGenre,
			genres,
			maxID
		} = this.props;
    	return(
	    	<section className="modal-main">
	    		<ModalContent 
	    			handleClose = {handleClose}
	    			handleBtnClick = {handleBtnClick}
	    			handleAddGenre = {handleAddGenre}
	    			handleDeleteGenre = {handleDeleteGenre}
	    			genres = {genres}
	    			maxID = {maxID}
	    		/>
	        </section>
    	)
	}
}


export default Modal;
