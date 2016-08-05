//Pasta into a new "ComponentName.jsx" file to quickly make new components.
import React from 'react';

import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

// Component Context injection
import ContextConnector from '../util/ContextConnector';


class ExampleComponent extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		//get a color: this.props.muiTheme.palette.primary1Color
		// color: this.props.muiTheme.blue
		return (
			<div style={{marginTop: '25px'}}>
				<Paper style={{padding: '25px', margin: '0px auto', marginBottom: '25px', maxWidth: '950px'}}>
					<h1 style={{marginTop: '0px'}}>Hello World</h1>
					<p>This is an example of a component using Material-UI!</p>
					<FlatButton
						label="Click Me"
						style={{marginRight: '25px'}}
					/>
    				<RaisedButton
						label="Click Me"
					/>
    			</Paper>
			</div>
		)
	}
}

export default ContextConnector()(ExampleComponent);
