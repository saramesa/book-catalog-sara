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
      		bgColor: 'white'
		}
		this.handleFilterChange = this.handleFilterChange.bind(this);
		this.changeFilterBtnColor = this.changeFilterBtnColor.bind(this);
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
			bgColor
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
				/>
			</div>
		);
	}

	handleFilterChange(e) {
		let id = e.target.id;
		//this.changeFilterBtnColor()
		this.state.filtersChecked.push(id)
   	 	//const filtersChecked = items.filter(item => item !== valueToRemove)
   	 	console.log('this.props.filtersChecked ', this.state.filtersChecked)
		let filteredBooks = Object.keys(this.state.books).filter(index => this.state.books[index].genre == id);
	}


	changeFilterBtnColor() {
    	this.setState({
      		bgColor: 'blue'
   	 	})
	}
}

export default App;
