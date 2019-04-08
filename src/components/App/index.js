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
      		error: false,
      		filtersChecked: [],
      		bgColor: 'white',
      		isFilterClicked: false
		}
		this.handleFilterChange = this.handleFilterChange.bind(this);
		this.changeFilterBtnColor = this.changeFilterBtnColor.bind(this);
		this.filteredBooks = this.filteredBooks.bind(this);
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
			handleFilterChange,
			filtersChecked,
			bgColor,
			isFilterClicked
		} = this.state;
		return (
			<div className="App">
				<Header />
				<Content 
					books={books} 
					isLoaded={isLoaded}
					error={error}
					handleFilterChange={this.handleFilterChange}
					filtersChecked={filtersChecked}
					bgColor={bgColor}
					isFilterClicked={isFilterClicked}
				/>
			</div>
		);
	}

	handleFilterChange(e) {
		console.log('this.state.isFilterClicked ', this.state.isFilterClicked)
		let id = e.target.id;
		//this.changeFilterBtnColor()
		if (!this.state.filtersChecked.includes(id)) {
			this.state.filtersChecked.push(id)
		} else {
			const index = this.state.filtersChecked.indexOf(id);
			this.state.filtersChecked.splice(index, 1)
		}		
		Object.keys(this.state.books).filter(index => this.filteredBooks(this.state.books[index]));
	}

	filteredBooks(book) {
		let isGenrePresent = book.genre.every( genre => this.state.filtersChecked.includes(genre));
		if (isGenrePresent) {
			console.log('book ', book)
		}
	}

	changeFilterBtnColor() {
    	this.setState({
      		bgColor: 'blue'
   	 	})
	}
}

export default App;
