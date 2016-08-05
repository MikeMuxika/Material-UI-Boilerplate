import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';

// import Paper from 'material-ui/Paper';
// import TextField from 'material-ui/TextField';
// import RaisedButton from 'material-ui/RaisedButton';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import BaseTheme from '../BaseTheme';

// Use this file for 'global variables through components'.
// Passing stores this way makes things nice and modular

// Stores
//var StoreName = require('../stores/StoreName');

// Actions
//var ActionsName = require('../actions/ActionsName');


class ContextProvider extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			stores: {
				//StoreName: StoreName
			},
			actions: {
				//ActionName: ActionName
			}
		}
	}

	getChildContext() {
		return {stores:this.state.stores, actions: this.state.actions}
	}

	render() {
		return (
			<MuiThemeProvider muiTheme={getMuiTheme(BaseTheme)}>
				<div>
					{this.props.children}
				</div>
			</MuiThemeProvider>
		)
	}
}


ContextProvider.childContextTypes = {
	stores: React.PropTypes.object.isRequired,
	actions: React.PropTypes.object.isRequired
}

export default ContextProvider;
