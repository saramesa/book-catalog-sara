import React, { Component } from 'react';
import './App.scss';
import Header from '../Header';
import LoginForm from '../LoginForm';

class App extends Component {

	render() {
		return (
			<div className="App">
				<Header />
				<LoginForm />
			</div>
		);
	}
}

export default App;
