import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Filters from '../../components/Filters';
import BookList from '../../components/BookList';
import EditBookCatalog from '../../components/EditBookCatalog';

class Content extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoaded: false,
      		books: []
		}
	}
	render() {
		const {
			show,
			close,
			books,
			isLoaded,
			error,
			handleFilterChange,
			handleDeleteBook,
			handleOnChangeEditBook,
			handleAddBook,
			filtersChecked,
			isFilterClicked
		} = this.props;
		const catalogContent = (
			<Fragment>
				<Filters 
					handleFilterChange = {handleFilterChange} 
					filtersChecked = {filtersChecked}
					isFilterClicked = {isFilterClicked}
				/>
				<BookList 
					books = {books} 
					isLoaded = {isLoaded}
					error = {error}

				/>
			</Fragment>
		);
		return (
			<main className="app-content">
				<Switch>
					<Route
						exact
						path="/catalog"
						render={() => catalogContent}
					/>
					<Route
						path="/edit"
						render={() => {
							return (
								<EditBookCatalog 
									show = {show}
									close = {close}
									books = {books} 
									handleDeleteBook = {handleDeleteBook}
									handleOnChangeEditBook = {handleOnChangeEditBook}
									handleAddBook={handleAddBook}
								/>
							);
						}}
					/>
				</Switch>
			</main>
		);
	}
}

export default Content;
