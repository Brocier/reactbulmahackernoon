/**Blog Actions**/
import * as types from './types'

export function blogLoading(isLoading = true) {
  return {type: types.BLOG_LOADING, isLoading}
}

export function loadBlogSuccess(post) {
  return {type: types.LOAD_BLOG_SUCCESS, post}
}