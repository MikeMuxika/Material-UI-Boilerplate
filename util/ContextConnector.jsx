import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import AltContainer from 'alt-container';
import { withRouter } from 'react-router'

export default function ContextConnector() {

  	return (Component) => {
    	const NewComponent = (props, context) => {
    		return (
				<AltContainer stores={context.stores} actions={context.actions} >
    				<Component {...props} />
    			</AltContainer>
			);
      	}

	   	NewComponent.contextTypes = {
	    	stores: React.PropTypes.object.isRequired,
	    	actions: React.PropTypes.object.isRequired
	    };

	    return withRouter(muiThemeable()(NewComponent));

	};

}
