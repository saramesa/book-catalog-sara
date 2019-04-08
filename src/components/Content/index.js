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
			books,
			isLoaded,
			error,
			handleFilterChange,
			filtersChecked,
			bgColor,
			isFilterClicked
		} = this.props;
		console.log('this.props ', this.props)
		const catalogContent = (
			<Fragment>
				<Filters 
					handleFilterChange={handleFilterChange} 
					filtersChecked={filtersChecked}
					bgColor={bgColor}
					isFilterClicked={isFilterClicked}
				/>
				<BookList 
					books={books} 
					isLoaded={isLoaded}
					error={error}

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
									books={books} 
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
