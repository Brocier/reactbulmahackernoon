/**Blog Reducer**/
import initialState from './../intitialState.js'
import * as types from './types'
import {createReducer} from './../Utilities'

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

// export default function blogReducer(state = initialState.blog, action) {
// switch (action.type) {     case types.BLOG_LOADING:       return { ...state,
//        loading: action.isLoading       }     case types.LOAD_BLOG_SUCCESS:
//    return {         ...state,         posts: action.post,         loading:
// false       }     default:       return state } }