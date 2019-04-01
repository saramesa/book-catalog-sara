import 'react-app-polyfill/ie9';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.scss';
import App from './components/App';
import Login from './components/LoginForm'
const routing = (
  <Router>
    <div>
      <Login />
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

