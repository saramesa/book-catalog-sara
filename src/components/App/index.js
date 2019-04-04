import React, { Component } from 'react';
import './App.scss';
import * as BookCatalogAPI from '../../api/bookCatalogApi';
import Header from '../Header';
import Content from '../Content'

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoaded: false,
      		books: [],
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
			isLoaded,
			error
		} = this.state;
		return (
			<div className="App">
				<Header />
				<Content 
					books={books} 
					isLoaded={isLoaded}
					error={error}
				/>
			</div>
		);
	}
}

export default App;
