import { handleActions } from 'redux-actions'
import * as types from './types'

const initialState = {
  cache: [],
  status: {
    fetching: false,
    error: null
  }
}

const fetchMentionsPending = (state, { payload }) => ({
  ...state,
  status: {
    ...state.status,
    fetching: true,
    error: null
  }
})

const fetchMentionsSuccess = (state, { payload }) => ({
  ...state,
  cache: [
    ...state.cache,
    ...payload.mentions
  ],
  status: {
    fetching: false,
    error: null
  }
})


const fetchMentionsFailure = (state, { payload }) => ({
  ...state,
  status: {
    ...state.status,
    fetching: false,
    error: payload.error,
  }
})

const reducer = {
  [types.FETCH_MENTIONS_PENDING]: fetchMentionsPending,
  [types.FETCH_MENTIONS_FAILURE]: fetchMentionsFailure,
  [types.FETCH_MENTIONS_SUCCESS]: fetchMentionsSuccess
}

export default handleActions(reducer, initialState)
