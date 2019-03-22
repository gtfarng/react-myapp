import React, { Component } from 'react';
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import axios from 'axios'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'

import './App.css';
import Bears from './Bears'
import Github from './Github';


export const getBearsSuccess = (bears) => ({  type: 'GET_BEARS_SUCCESS',  bears});
export const getBearsFailed = () => ({ type: 'GET_BEARS_FAILED' });
export const getBears = () => async (dispatch) => {
  try {
    console.log('get-bear')
    const response = await axios.get(`http://gtfarng-restful.ddns.net:8003/api/bears`)
    const responseBody = await response.data;
    console.log('response bear: ', responseBody)
    dispatch(getBearsSuccess(responseBody));
  } catch (error) {
    console.error(error);
    dispatch(getBearsFailed());
  }
}
export const bearReducer = (state = 0, action) => {
  switch (action.type) {
    case 'GET_BEARS_SUCCESS':
      console.log('action bear: ', action.bears)
      return action.bears
    case 'GET_BEARS_FAILED':
      console.log('action bear: Failed')
      return action.bears
    default:
      return state
  }
}

export const getGithubSuccess = (github) => ({  type: 'GET_GITHUB_SUCCESS',  github});
export const getGithubFailed = () => ({ type: 'GET_GITHUB_FAILED' });
export const getGithub = (USER) => async (dispatch) => {
  try {
    console.log('get Github')
  //  const response = await axios.get(`https://api.github.com/users/${USER}`)
    const response = await axios.get(`https://api.github.com/users/gtfarng`)
    const responseBody = await response.data;
    console.log('response github: ', responseBody)
    dispatch(getGithubSuccess(responseBody));
  } catch (error) {
    console.error(error);
    dispatch(getGithubFailed());
  }
}
export const githubReducer = (state = 0, action) => {
  switch (action.type) {
    case 'GET_GITHUB_SUCCESS':
      console.log('action github: ', action.github)
      return action.github
    case 'GET_GITHUB_FAILED':
      console.log('action github: Failed')
      return action.github
    default:
      return state
  }
}


export const rootReducer = combineReducers({ bears: bearReducer,github:githubReducer })
export const store = createStore(rootReducer, applyMiddleware(logger, thunk))



export default class App extends Component {
  state = {
    user: 'gtfarng',
    data: []
}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>My_React-APP</h1>
          <h4>frontend (axios, react-redux, redux, redux-thunk, redux-logger)<br/>
          backend (express, body-parser, router, cors)</h4>
        </header>

        <Provider store={store}>

          <Bears />
          <Github />

        </Provider>

      </div>
    );
  }
}


