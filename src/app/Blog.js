import React, {Component} from 'react'
import * as contentful from 'contentful'

class Blog extends Component {
  state = {
    posts: []
  }

  client = contentful.createClient({space: '2mvesjofoymx', accessToken: '263961428e3cbede5034d86bce47b122d1be0c19b0bd3ca837aaf3bc6c4a4f1d'})

  componentDidMount() {
    this
      .fetchPosts()
      .then(this.setPosts)
      .then(console.log("Posts set"))
  }

  fetchPosts = () => this
    .client
    .getEntries()

  setPosts = response => {
    this.setState({posts: response.items})
  }
  render() {
    return (
      <div>
        This is the Blog Page
      </div>
    )
  }
}

export default Blog