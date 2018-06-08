//Blog Thunks//

import * as contentful from 'contentful'
import * as actions from './blog/actions'

const client = contentful.createClient({space: '2mvesjofoymx', accessToken: '263961428e3cbede5034d86bce47b122d1be0c19b0bd3ca837aaf3bc6c4a4f1d'})

export function loadBlog() {
  return dispatch => {
    dispatch(actions.blogLoading(true))
    return client
      .getEntries()
      .then(({items}) => {
        setTimeout(() => dispatch(actions.loadBlogSuccess(items)), 500)
      })
      .catch(error => {
        console.log(error)
        dispatch(actions.blogLoading(false))
      })
  }
}