import React, { Component, Fragment } from 'react';
import * as BookCatalogAPI from '../../api/bookCatalogApi';
import { Route, Switch } from 'react-router-dom';
import Loader from '../../components/Loader';
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
			books,
			isLoaded
		} = this.props;
		console.log('this.props ', this.props)
		const catalogContent = (
			<Fragment>
				<Filters />
				<BookList />
			</Fragment>
		);
		return (
			<main className="app-content">
				<Switch>
					<Route
						exact
						path="/main"
						render={() => isLoaded ? <Loader /> : catalogContent}
					/>
					<Route
						path="/edit"
						render={() => {
							return (
								<EditBookCatalog />
							);
						}}
					/>
				</Switch>
			</main>
		);
	}
}

export default Content;
