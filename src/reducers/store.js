import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import reducer from './reducer'

export function initializeStore (initialState = []) {
  return createStore(reducer, initialState, composeWithDevTools())
}
