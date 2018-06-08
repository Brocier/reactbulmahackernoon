/**Medium Actions**/
import * as types from './types'

export function mediumLoading(isLoading = true) {
  return {type: types.MEDIUM_LOADING, isLoading}
}

export function loadMediumSuccess(post) {
  return {type: types.LOAD_MEDIUM_SUCCESS, post}
}