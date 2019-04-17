import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ type, buttonStyle, children, handleBtnClick }) => {
	return (
		<button
			className={buttonStyle}
			type={type}
			onClick={handleBtnClick}
		>
			{children}
		</button>
	);
}

Button.propTypes = {
	type: PropTypes.string.isRequired,
	buttonStyle: PropTypes.string.isRequired,
	handleBtnClick: PropTypes.func
}

export default Button;
