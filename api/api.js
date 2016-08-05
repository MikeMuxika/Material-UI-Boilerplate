/* Venu API Routes */
var baseRoute = 'http://localhost/api/'

function doPost(route, payload) {
	return fetch(route, {
		method: 'post',
		body: JSON.stringify(payload),
		headers: new Headers({
			'Content-Type': 'application/json'
		})
	}).
	then(function(resp) {
		if (resp.status >= 200 && resp.status < 300) {
		    return resp.json();
		} else {
			return resp.json().then(Promise.reject.bind(Promise));
		}
	})
}

function doAuthPost(route, payload) {
	return fetch(route, {
		method: 'post',
		body: JSON.stringify(payload),
		headers: new Headers({
			'Content-Type': 'application/json',
			'Authorization': 'Bearer ' + localStorage.getItem('token'),
		})
	}).
	then(function(resp) {
		if (resp.status >= 200 && resp.status < 300) {
		    return resp.json();
		} else {
			return resp.json().then(Promise.reject.bind(Promise));
		}
	})
}

function doGet(route) {
	return fetch(route, {
		method: 'get'
	}).
	then(function(resp) {
		if (resp.status >= 200 && resp.status < 300) {
		    return resp.json();
		} else {
			return resp.json().then(Promise.reject.bind(Promise));
		}
	})
}


/* Routes */

// base/shows/shows_listing
module.exports.getShows = function() {
	return doGet(baseRoute+'shows/shows_listing');
}

module.exports.getAgentShows = function(payload) {
	return doPost(baseRoute+'shows/get_agent_show', payload);
}

module.exports.artistGetShowDetail = function(payload) {
	return doPost(baseRoute+'shows/artist_get_show', payload);
}

module.exports.agentGetShowDetail = function(payload) {
	return doPost(baseRoute+'shows/agent_get_show', payload);
}

module.exports.createShow = function(payload) {
	return doPost(baseRoute+'shows/create', payload)
}

module.exports.placeBid = function(payload) {
	return doPost(baseRoute+'shows/artist_place_bid', payload)
}

module.exports.makeOffer = function(payload) {
	return doPost(baseRoute+'shows/agent_send_offer', payload)
}


// Login
module.exports.loginUser = function(payload) {
	return doPost(baseRoute+'users/login', payload);
}

// Signup
module.exports.signupUser = function(payload) {
	return doPost(baseRoute+'users/register', payload);
}
