import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
// import {composeWithDevTools} from 'react'
import employeeReducers from './employeeReducers'

const store = createStore(employeeReducers,applyMiddleware(thunk))

export default store;

console.log("The initial stor",store.getState())