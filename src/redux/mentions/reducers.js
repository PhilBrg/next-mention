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

const markMentionAsRead = (state, { payload }) => {
  return Object.assign({}, state, {
    cache: state.cache.map(mention => {
      if (mention.id === payload.id) {
        return Object.assign({}, mention, {
          read: !mention.read
        })
      }
      return mention
    })
  })
}

const reducer = {
  [types.FETCH_MENTIONS_PENDING]: fetchMentionsPending,
  [types.FETCH_MENTIONS_FAILURE]: fetchMentionsFailure,
  [types.FETCH_MENTIONS_SUCCESS]: fetchMentionsSuccess,
  [types.MARK_MENTION_READ]: markMentionAsRead
}

export default handleActions(reducer, initialState)
