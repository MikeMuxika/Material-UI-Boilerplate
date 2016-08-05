import React from 'react';

// Material UI stuff
import injectTapEventPlugin from 'react-tap-event-plugin';

// Stores
var alt = require('../../alt');
import AltContainer from 'alt-container';

// Router context injection
import { withRouter } from 'react-router'
import BaseTheme from '../../BaseTheme';
import ContextProvider from '../../util/ContextProvider';

import ExampleComponent from '../../components/ExampleComponent';

class AppMainPage extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		return (

			<ContextProvider>
				<div style={{marginTop: '25px'}}>
					<ExampleComponent />
					<div style={{margin: '0px auto', maxWidth: '950px'}}>Repeating Example component to show how multiple components can be loaded into Page</div>
					<ExampleComponent />
				</div>
			</ContextProvider>
		);

	}
}

export default withRouter(AppMainPage);
