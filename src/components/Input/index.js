import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Input = ({ labelText, inputStyle, type, name, handleInputChange}) => {
    return(
    	<Fragment>
    		<label>{labelText}</label>
    		<div>
    			<input
	   				className={inputStyle}
					type={type}
					name={name}
					onChange={handleInputChange}
				/>
    		</div>
    	</Fragment>
    )
}

Input.propTypes = {
	labelText: PropTypes.string.isRequired,
	inputStyle: PropTypes.string,
	type: PropTypes.string,
	name: PropTypes.string,
	handleInputChange: PropTypes.func.isRequired,
}

export default Input;
