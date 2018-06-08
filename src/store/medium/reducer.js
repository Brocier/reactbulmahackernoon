/**Medium Reducer**/
import initialState from './../intitialState.js'
import * as types from './types'
export default function mediumReducer(state = initialState.medium, action) {
  switch (action.type) {
    case types.MEDIUM_LOADING:
      return {
        ...state,
        loading: action.isLoading
      }
    case types.LOAD_MEDIUM_SUCCESS:
      return {
        ...state,
        posts: action.post,
        loading: false
      }
    default:
      return state
  }
}