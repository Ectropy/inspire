/* eslint-env browser */
// The above line stops eslint from showing an noundef error when using localStorage
import axios from 'axios'
import { browserHistory } from 'react-router'
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from './types'
import authReducer from '../reducers/reducer_auth'

// const ROOT_URL = 'http://rest.learncode.academy/api/paul';
const ROOT_URL = 'http://localhost:3000'
export const CREATE_POSTS = 'CREATE_POSTS'
const SELECT_BAND = 'SELECT_BAND'

export function authError (error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}

export function selectBand (band) {
  console.log('You have selected: ', band.name)
  // selectBand is an ActionCreator, it needs to return an ActionCreator
  // which is an object that must have a type property
  return {
    type: SELECT_BAND,
    payload: band
  }
}

export function createPost (props) {
  const request = axios.post(`${ROOT_URL}/posts`, props)
  return {
    type: CREATE_POSTS,
    payload: request
  }
}

export function signupUser ({email, password}) {
  return function (dispatch) {
    // Submit email/password to the server
    axios
    .post(`${ROOT_URL}/signup`, { email, password })
    .then(response => {
      dispatch({type: AUTH_USER})

      // update the token
      localStorage.setItem('token', response.data.token)
      browserHistory.push('/newItem')
    })
  }
}

export function signinUser ({ email, password }) {
  return function (dispatch) {
    axios
      .post(`${ROOT_URL}/signin`, { email, password })
      .then(response => {
        // This only occurs if the request was good.
        // We now update the state to indicate authenticated user
        dispatch({type: AUTH_USER})

        // Put the token in localStorage.
        localStorage.setItem('token', response.data.token)
        // This sends us to the /newitem view.
        browserHistory.push('/newitem')
      })
      .catch(respone => dispatch(authError('Bad login info')))
  }
}

export function signoutUser () {
  localStorage.removeItem('token')

  return {type: UNAUTH_USER}
}
