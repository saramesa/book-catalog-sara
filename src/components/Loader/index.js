import React from "react";
import config from "../../config/config";
import "./Loader.scss";

const Loader = () => (
	<div className="loader">
		<img alt="Loading" src={config.LOGO} />
	</div>
);

export default Loader;
