import React, { Component } from 'react';
import './App.scss';
import * as BookCatalogAPI from '../../api/bookCatalogApi';
import * as GenresAPI from '../../api/genresApi';
import * as booksBackupAPI from '../../api/booksBackupApi';
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
      		genres: [],
      		maxID: ""
		}

		this.handleFilterChange = this.handleFilterChange.bind(this);
		this.mapIntoArray = this.mapIntoArray.bind(this)
		this.handleDeleteBook = this.handleDeleteBook.bind(this)
		this.handleOnChangeEditBook = this.handleOnChangeEditBook.bind(this)
		this.handleAddBook = this.handleAddBook.bind(this);
		this.handleDeleteGenre = this.handleDeleteGenre.bind(this);
		this.handleAddGenre = this.handleAddGenre.bind(this);
		this.setStateFilters = this.setStateFilters.bind(this);
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
		const genresBooks = GenresAPI.getBookGenres();
		const booksBackup = booksBackupAPI.getBooksBackup();
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
			        books: this.mapIntoArray(booksBackup),
			        originalBooks: this.mapIntoArray(booksBackup)
	   			})
	      	}
	    )
	   	this.setState({
           	genres: genresBooks,
           	maxID: this.mapIntoArray(booksBackup).length + 1
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
			maxID,
			genres,
			isLoaded,
			error,
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
					maxID = {(maxID).toString()} 
					genres = {genres}
					isLoaded = {isLoaded}
					error = {error}
					handleFilterChange = {this.handleFilterChange}
					handleDeleteBook = {this.handleDeleteBook}
					handleAddGenre = {this.handleAddGenre}
					handleAddBook={this.handleAddBook}
					handleDeleteGenre={this.handleDeleteGenre}
					handleOnChangeEditBook = {this.handleOnChangeEditBook}
					filtersChecked = {filtersChecked}
					isFilterClicked = {isFilterClicked}
				/>
			</div>
		);
	}

	handleFilterChange(genre) {
		const { filtersChecked, originalBooks } = this.state;
		if (!filtersChecked.includes(genre)) {
			filtersChecked.push(genre)
		} else {
			const index = filtersChecked.indexOf(genre);
			filtersChecked.splice(index, 1)
		}
		
		if (filtersChecked.length !== 0) {
			const found = originalBooks.filter(book => 
				book.genre.some(genre => 
					filtersChecked.includes(genre))
			)
			this.setStateFilters(found)
		} else {
			this.setStateFilters(originalBooks)
		}
	}

	setStateFilters(foundBooks) {
		this.setState({
      		books: foundBooks
   	 	})
	}

	handleDeleteBook(id) {
   	 	this.setState(prevState => {
   	 		const remainingBooks = prevState.books.filter(book => parseInt(book.id) !== parseInt(id))
			const newState = {
				books: remainingBooks,
				originalBooks: remainingBooks
			}
			return newState;
		})
	}

	handleAddBook(book) {
		this.setState(prevState => {
			const newBooksArray = prevState.books.concat(book)
			const newMaxID = prevState.maxID + 1
			const newState = {
				books: newBooksArray,
				originalBooks: newBooksArray, 
				maxID: newMaxID
			}
			return newState;
		})

	}

	handleDeleteGenre(deletedGenre, bookID) {
		this.setState(prevState => {
			const newBooks = prevState.books.map(book => {
				if (parseInt(book.id) === parseInt(bookID)) {
					const genres = book.genre.filter(bookGenre => bookGenre !== deletedGenre);
					book = {
						...book,
						genre: genres
					}
					return book;
				}
				return book
			})
			const newState = {
				books: newBooks,
				originalBooks: newBooks
			}
			return newState;
		})
	}

	handleAddGenre(addedGenre, bookID) {
		this.setState(prevState => {
			const newBooks = prevState.books.map(book => {
				if (parseInt(book.id) === parseInt(bookID) && !book.genre.includes(addedGenre)) {
					book.genre = book.genre.concat(addedGenre)
					return book
				} 
				return book
			})
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
				if (parseInt(book.id) ===  parseInt(id)) {
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
