/* Base API Routes */
/* Either use this or make a new access point to the api from here. */
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

/* Get route example */
// module.exports.getShows = function() {
// 	return doGet(baseRoute+'routeParentDirectory/route_name');
// }
