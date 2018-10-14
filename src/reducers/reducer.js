import { handleActions } from 'redux-actions'
import { Constants } from '@actions'

export default handleActions({
    [Constants.FETCH_MENTION]: (state, action) => {
      return [...state, {
                  img: action.payload.img,
                  icon: action.payload.icon,
                  url: action.payload.url,
                  date: action.payload.date,
                  content: action.payload.content,
                  title: action.payload.title }];
    },

    [Constants.FETCH_SUCCESS]: (state, action) => ({
      isFetching: true
    }),
    [Constants.FETCH_ERROR]: (state) => ({
      isFetching: false,
      Error: true
    })
    },[]);
