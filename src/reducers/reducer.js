import { handleActions } from 'redux-actions'
import { Constants } from '@actions'

export default handleActions({
    [Constants.FETCH_MENTION]: (state, action) => {
      return [...state, {
                  img: action.payload.img,
                  url: action.payload.url,
                  date: action.payload.date,
                  content: action.payload.content,
                  title: action.payload.title }];
                }
    },[]);
