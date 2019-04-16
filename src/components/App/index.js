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
  		this.setState({
  			maxID: array.length
  		})
  		return array
  	}

	render() {
		const {
			books,
			maxID,
			genres,
			isLoaded,
			error,
			handleFilterChange,
			handleDeleteBook,
			handleAddGenre,
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
					maxID = {maxID} 
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

	handleFilterChange(e) {
		const { filtersChecked, originalBooks } = this.state;
		const id = e.target.id;
		if (!filtersChecked.includes(id)) {
			filtersChecked.push(id)
		} else {
			const index = filtersChecked.indexOf(id);
			filtersChecked.splice(index, 1)
		}
		const found = originalBooks.filter(book => 
			book.genre.some(genre => 
				filtersChecked.includes(genre))
		)
		if (found.length !== 0) {
			this.setState({
      			books: found
   	 		})
		} else {
			this.setState({
      			books: originalBooks
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
				if (book.id === bookID) {
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
