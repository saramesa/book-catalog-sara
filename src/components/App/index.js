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
      		originalBooks: [],
      		error: false,
      		filtersChecked: [],
      		bgColor: 'white',
      		isFilterClicked: false
		}
		this.handleFilterChange = this.handleFilterChange.bind(this);
		this.changeFilterBtnColor = this.changeFilterBtnColor.bind(this);
		this.mapIntoArray = this.mapIntoArray.bind(this)
	}

	componentDidMount() {
	    BookCatalogAPI.getBooksCatalog()
	   .then(
	      (result) => {
	        this.setState({
	          isLoaded: true,
	          books: this.mapIntoArray(result.catalog),
	          originalBooks: this.mapIntoArray(result.catalog)
	         });
	      }, (error) => {
	          this.setState({
	            isLoaded: true,
	            message: 'No Data Found'
	          })
	      }
	    )
  	}

  	mapIntoArray(result) {
  		let array = []
  		Object.keys(result).filter(index => array.push(result[index]))
  		return array
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
		let id = e.target.id;
		let array = [];
		//this.changeFilterBtnColor()
		if (!this.state.filtersChecked.includes(id)) {
			this.state.filtersChecked.push(id)
		} else {
			const index = this.state.filtersChecked.indexOf(id);
			this.state.filtersChecked.splice(index, 1)
		}
		this.state.originalBooks.filter(book => {
			if(book.genre.every( genre => {
				if(this.state.filtersChecked.length !== 0 && this.state.filtersChecked.includes(genre)) {
					array.push(book);
				}})) {
				
			}
		})
		
		if (array.length != 0) {
			this.setState({
      		books: array
   	 		})
		} else {
			this.setState({
      		books: this.state.originalBooks
   	 		})
		}
		
	}

	changeFilterBtnColor() {
    	this.setState({
      		bgColor: 'blue'
   	 	})
	}
}

export default App;
