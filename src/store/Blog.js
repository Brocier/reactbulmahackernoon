import * as contentful from 'contentful'
import * as actions from './blog/actions'

const client = contentful.createClient({space: '2mvesjofoymx', accessToken: '263961428e3cbede5034d86bce47b122d1be0c19b0bd3ca837aaf3bc6c4a4f1d'})

const error = error => console.log(error)

export function loadBlog() {
  return dispatch => client
    .getEntries()
    .then(({items}) => {
      dispatch(actions.loadBlogSuccess(items))
    })
    .catch(error)
}