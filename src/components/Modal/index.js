import React, { Component } from 'react';
import ModalContent from '../ModalContent';
import './Modal.scss';

class Modal extends Component {
    render() {
    	const {
			handleClose,
			handleBtnClick

		} = this.props;
    	return(
	    	<section className="modal-main">
	    		<ModalContent 
	    			handleClose = {handleClose}
	    			handleBtnClick = {handleBtnClick}
	    		/>
	        </section>
    	)
	}
}


export default Modal;
