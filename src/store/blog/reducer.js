/**Blog Reducer**/
import initialState from './../intitialState.js'
import * as types from './types.js'
import {createReducer} from './../Utilities.js'

export default createReducer(initialState.blog, {
  [types.GET_BLOG_ASYNC.PENDING](state) {
    return {
      ...state,
      loading: true
    }
  },
  [types.GET_BLOG_ASYNC.SUCCESS](state, action) {
    return {
      ...state,
      posts: action.posts,
      loading: false
    }
  },
  [types.GET_BLOG_ASYNC.ERROR](state) {
    return {
      ...state,
      loading: false
    }
  }
})
