import { createAction } from 'redux-actions'

import Constants from '@actions/constants'

const Mention = {
  fetchMention: createAction(Constants.FETCH_MENTION),
  fetchSuccess: createAction(Constants.FETCH_SUCCESS),
  fetchFailure: createAction(Constants.FETCH_FAILURE)
}

export default Mention
