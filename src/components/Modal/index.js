import React from 'react';
import PropTypes from 'prop-types';
import AddNewBookForm from '../AddNewBookForm';
import './Modal.scss';

const Modal = ({handleClose, handleBtnClick, handleAddGenre, handleDeleteGenre, genres, maxID}) => {
    return(
	   	<section className="modal-main">
	   		<AddNewBookForm 
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

Modal.propTypes = {
	genres: PropTypes.arrayOf(
    	PropTypes.string
  	),
  	handleClose: PropTypes.func, 
	handleBtnClick: PropTypes.func,
	handleAddGenre: PropTypes.func,
	handleDeleteGenre: PropTypes.func,
	maxID: PropTypes.string 
}

export default Modal;
