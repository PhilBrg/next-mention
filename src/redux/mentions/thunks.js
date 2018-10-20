import { fetchMentions } from './actions'
import * as api from '@api/mentions'


export const FetchMentionsThunk = () => async (dispatch, getState) => {
  dispatch(fetchMentions.pending())
  try {
    const { data } = await api.fetchMentions()
    console.log(data.mentions[0]);
    dispatch(fetchMentions.success({ mentions: data.mentions }))
    return data.mentions
  } catch (e) {
    console.log(e)
    dispatch(fetchMentions.failure({ error: e }))
    return e
  }
}
