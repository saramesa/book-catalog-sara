import React, { Component } from 'react';
import './App.scss';
import * as BookCatalogAPI from '../../api/bookCatalogApi';
import * as GenresAPI from '../../api/genresApi';
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
      		isFilterClicked: false,
      		isShowing: false,
      		genres: []
		}

		this.handleFilterChange = this.handleFilterChange.bind(this);
		this.mapIntoArray = this.mapIntoArray.bind(this)
		this.handleDeleteBook = this.handleDeleteBook.bind(this)
		this.handleOnChangeEditBook = this.handleOnChangeEditBook.bind(this)
		this.handleAddBook = this.handleAddBook.bind(this);
		this.handleDeleteGenre = this.handleDeleteGenre.bind(this);
	}

   	openModalHandler = () => {
        this.setState({
            isShowing: true
        });
    }

    closeModalHandler = () => {
        this.setState({
            isShowing: false
        });
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
	            message: 'No Data'
	          })
	      }
	    )
	   	const genresBooks = GenresAPI.getBookGenres()
	   		this.setState({
            	genres: genresBooks
        	});
  	}

  	mapIntoArray(result) {
  		let array = []
  		Object.keys(result).filter(index => array.push(result[index]))
  		return array
  	}

	render() {
		const {
			books,
			genres,
			isLoaded,
			error,
			handleFilterChange,
			handleDeleteBook,
			filtersChecked,
			isFilterClicked
		} = this.state;
		return (
			<div className="App">
				<Header />
				<Content
                    show = {this.state.isShowing}
                    close = {this.closeModalHandler}
					books = {books} 
					genres = {genres}
					isLoaded = {isLoaded}
					error = {error}
					handleFilterChange = {this.handleFilterChange}
					handleDeleteBook = {this.handleDeleteBook}
					handleAddBook={this.handleAddBook}
					handleDeleteGenre={this.handleDeleteGenre}
					handleOnChangeEditBook = {this.handleOnChangeEditBook}
					filtersChecked = {filtersChecked}
					isFilterClicked = {isFilterClicked}
				/>
			</div>
		);
	}

	handleFilterChange(e) {
		const { books, filtersChecked } = this.state;
		let id = e.target.id;
		let array = [];
		if (!filtersChecked.includes(id)) {
			filtersChecked.push(id)
		} else {
			const index = filtersChecked.indexOf(id);
			filtersChecked.splice(index, 1)
		}

		books.filter(book => {
			if(book.genre.every( genre => {
				console.log('genre ', genre);
				if(filtersChecked.length !== 0 && filtersChecked.includes(genre)) {
					array.push(book);
				}}
			));
		})
		if (array.length !== 0) {
			this.setState({
      			books: array
   	 		})
		} else {
			this.setState({
      			books: this.state.originalBooks
   	 		})
		}
	}

	handleDeleteBook(id) {
   	 	this.setState(prevState => {
   	 		const remainingBooks = prevState.books.filter(book => book.id !== id)
			const newState = {
				books: remainingBooks,
				originalBooks: remainingBooks
			}
			return newState;
		})
	}

	handleAddBook(book) {
		console.log('add Book');
		console.log('book ', book);
/*		this.setState(prevState => {
			const newBooksArray = prevState.books.concat(book)
			const newState = {
				books: newBooksArray,
				originalBooks: newBooksArray
			}
			return newState;
		})*/
	}

	handleDeleteGenre(deletedGenre, bookID) {
		this.setState(prevState => {
			const newBooks = prevState.books.map(book => {
				if (book.id === bookID) {
					const genres = book.genre.filter(bookGenre => bookGenre !== deletedGenre);
					book = {
						...book,
						genre: genres
					}
					console.log('book ', book)
					return book;
				} else {
					return book
				}
			})
			console.log('newBooks ', newBooks)
			const newState = {
				books: newBooks,
				originalBooks: newBooks
			}
			return newState;
		})
	}

	handleOnChangeEditBook(value, name, id) {
		this.setState(prevState => {
			const changedBook = prevState.books.map(book => {
				if (book.id === id) {
					book = {
						...book,
						[name]: value
					}
				}
					return book;
			})
			const newState = {
				books: changedBook,
				originalBooks: changedBook
			}
			return newState;
		})
	}
}

export default App;
