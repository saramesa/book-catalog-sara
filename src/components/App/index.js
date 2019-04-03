import React, { Component } from 'react';
import './App.scss';
import * as BookCatalogAPI from '../../api/bookCatalogApi';
import Header from '../Header';
import Content from '../Content'
import LoginForm from '../LoginForm';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoaded: false,
      		books: []
		}
	}

	componentDidMount() {
	    BookCatalogAPI.getBooksCatalog()
	   .then(
	      (result) => {
	        this.setState({
	          isLoaded: true,
	          books: result.catalog
	         });
	      }, (error) => {
	          this.setState({
	            isLoaded: true,
	            message: 'No Data Found'
	          })
	      }
	    )
  	}

	render() {
		const {
			books,
			isLoaded
		} = this.state;
		console.log('entra en APP')
		return (
			<div className="App">
				<Header />
				<Content books={books}/>
			</div>
		);
	}
}

export default App;
