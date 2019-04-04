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
      		error: false
		}
		this.handleFilterChange = this.handleFilterChange.bind(this);
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
			error,
			handleFilterChange
		} = this.state;
		return (
			<div className="App">
				<Header />
				<Content 
					books={books} 
					isLoaded={isLoaded}
					error={error}
					handleFilterChange={this.handleFilterChange}
				/>
			</div>
		);
	}

	handleFilterChange(e) {
		let id = e.target.id;
		console.log('handleFilterChange ', e.target.id)
	}
}

export default App;
