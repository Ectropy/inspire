import axios from 'axios';

// const ROOT_URL = 'http://rest.learncode.academy/api/paul';
const ROOT_URL = 'http://localhost:3000';
export const CREATE_POSTS = 'CREATE_POSTS';
const SELECT_BAND = 'SELECT_BAND';

export function selectBand (band) {
	console.log('You have selected: ', band.name);
	// selectBand is an ActionCreator, it needs to return an ActionCreator
	// which is an object that must have a type property
	return {
		type: SELECT_BAND,
		payload: band
	};
}

export function createPost (props) {
	const request = axios.post(`${ROOT_URL}/posts`, props);
	return {
		type: CREATE_POSTS,
		payload: request
	};
}

export function signinUser ({ email, password }) {
	return function (dispatch) {
		axios.post(`${ROOT_URL}/signin`, {email, password});
	};
}
