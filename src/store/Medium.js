//Medium Thunks//

import * as actions from './medium/actions'
import axios from 'axios'

const fetchPosts = () => axios.get(`https://cors.now.sh/https://us-central1-aaronklaser-1.cloudfunctions.net/medium?username=@jschoe04`)
const setPosts = ({data}) => Object
  .values(data.payload.references.Post)
  .map(({id, title, createdAt, virtuals, uniqueSlug}) => Object.assign({}, {
    title,
    createdAt,
    subtitle: virtuals.subtitle,
    image: virtuals.previewImage.imageId
      ? `https://cdn-images-1.medium.com/max/800/${virtuals.previewImage.imageId}`
      : null,
    url: `https://medium.com/@aaron.klaser/${uniqueSlug}`
  }))

export const loadMedium = () => async dispatch => {
  dispatch(actions.mediumLoading(true))
  const data = await fetchPosts()
  return dispatch(actions.loadMediumSuccess(setPosts(data)))
}