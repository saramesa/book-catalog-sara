import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ type, style, children, handleBtnClick }) => {
	return (
		<button
			className={style}
			type={type}
			onClick={handleBtnClick}
		>
			{children}
		</button>
	);
}

Button.propTypes = {
	type: PropTypes.string.isRequired,
	style: PropTypes.string.isRequired,
	handleBtnClick: PropTypes.func
}

export default Button;
