import React from "react";
import PropTypes from "prop-types";
import logo from "../../assets/books-logo.png";
import "./Logo.scss";

const Logo = ({ size }) => {
	return (
		<div className={`logo__container ${size}`}>
			<img src={logo} alt="Logo" className="logo__image" />
		</div>
	);
};

Logo.propTypes = {
	size: PropTypes.string.isRequired
};

export default Logo;
