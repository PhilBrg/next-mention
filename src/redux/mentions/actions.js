import { createAction } from 'redux-actions'
import * as types from './types'

export const fetchMentions = {
  pending: createAction(types.FETCH_MENTIONS_PENDING),
  success: createAction(types.FETCH_MENTIONS_SUCCESS),
  failure: createAction(types.FETCH_MENTIONS_FAILURE)
}
