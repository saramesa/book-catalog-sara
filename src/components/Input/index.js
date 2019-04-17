import React, { Component, Fragment } from 'react';

class Input extends Component {
    render() {
    	const {
			labelText,
			inputStyle,
			type,
			name,
			example,
			handleInputChange
		} = this.props;
    	return(
    		<Fragment>
    			<label>{labelText}</label>
    			<div>
    				<input
	    				className={inputStyle}
						type={type}
						name={name}
						placeholder={example}
						onChange={handleInputChange}
					/>
    			</div>
    			
    		</Fragment>
    	)
	}
}


export default Input;
