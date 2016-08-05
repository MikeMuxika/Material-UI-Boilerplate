import React from 'react';
import ReactDOM from 'react-dom';

// React Router
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

// Browser Compat Stuff
if (!window.fetch) window.fetch = require('fetch-ie8')
require('es6-promise').polyfill();

// Pages
import GenericIndexPage from './pages/shared/GenericIndexPage';
import AppMainPage from './pages/shared/AppMainPage';

var routerConfig =
<Router history={browserHistory}>

	{/* Main App Bundle */}
	<Route path="/" component={AppMainPage}></Route>
</Router>

ReactDOM.render(routerConfig , document.getElementById('reactApp'));
