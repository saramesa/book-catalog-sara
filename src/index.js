import 'react-app-polyfill/ie9';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import './index.scss';
import App from './components/App';
import Login from './components/LoginForm'
import Catalog from './components/Catalog'

const routing = (
  <Router>
  	<div>
        <Route path="/" exact strict component={Login} />
		<Route path="/main" exact component={Catalog} />
	</div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))
/*ReactDOM.render(
	<HashRouter>
		<App />
	</HashRouter>,
	document.getElementById('root')
);*/

