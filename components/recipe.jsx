//Pasta into a new "ComponentName.jsx" file to quickly make new components.
import React from 'react';

// Component Context injection
import ContextConnector from '../util/ContextConnector';


class Recipe extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		//get a color: this.props.muiTheme.palette.primary1Color
		// color: this.props.muiTheme.blue
		return (
			<div>
				Content Goes here
			</div>
		)
	}
}

export default ContextConnector()(Recipe);
