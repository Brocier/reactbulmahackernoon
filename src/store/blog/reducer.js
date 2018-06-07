/**Blog Reducer**/
import initialState from './../intitialState.js'
import * as types from './types'
export default function blogReducer(state = initialState.blog, action) {
  switch (action.type) {
    case types.LOAD_BLOG_SUCCESS:
      return {
        ...state,
        posts: action.post
      }
    default:
      return state
  }
}