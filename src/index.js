import 'react-app-polyfill/ie9';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import './index.scss';
import App from './components/App';
/*
const routing = (
  <Router>
  	<div>
        <Route path="/" exact strict component={Login} />
		<Route path="/main" exact component={Catalog} />
		<Route path="/edit" exact component={EditBookCatalog} />
	</div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))*/
ReactDOM.render(
	<HashRouter>
		<App />
	</HashRouter>,
	document.getElementById('root')
);

