import React, {Component} from 'react'
import PageHeader from './components/PageHeader'
import PageContent from './components/PageContent'
import MediumItem from './medium/MediumItem.js'
import axios from 'axios'

class Medium extends Component {

  state = {
    posts: []
  }

  componentDidMount() {
    this
      .fetchPosts()
      .then(this.setPosts)
  }

  fetchPosts = () => axios.get(`https://cors.now.sh/https://us-central1-aaronklaser-1.cloudfunctions.net/medium?username=@jschoe04`)

  setPosts = ({data}) => {
    const {Post} = data.payload.references
    const posts = Object
      .values(Post)
      .map(({id, title, createdAt, virtuals, uniqueSlug}) => Object.assign({}, {
        title,
        createdAt,
        subtitle: virtuals.subtitle,
        image: virtuals.previewImage.imageId
          ? `https://cdn-images-1.medium.com/max/800/${virtuals.previewImage.imageId}`
          : null,
        url: `https://medium.com/@jschoe04/${uniqueSlug}`
      }))
    this.setState({posts})
  }

  render() {
    return (
      <div>
        <PageHeader color="is-dark" title="Medium">
          Medium is where I do generic posting and story-telling.
          <br/><br/>
          <a
            className="button is-inverted is-outlined"
            href="https://medium.com/@jschoe04"
            target="_blank"
            rel="noopener noreferrer">
            View My Medium
            <span className="icon" style={{
              marginLeft: 5
            }}>
              <i className="fab fa-lg fa-medium"></i>
            </span>
          </a>
        </PageHeader>
        <PageContent>
          {this
            .state
            .posts
            .map((posts, i) => <MediumItem key={i} {...posts}/>)}
        </PageContent>
      </div>
    )
  }
}
export default Medium