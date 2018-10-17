import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import thunkMiddleware from 'redux-thunk'
import reducer from './mentions/reducers'

const reducers = combineReducers({
  mentions: reducer
})

export function initializeStore (state) {
  return createStore(reducers, state, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}
