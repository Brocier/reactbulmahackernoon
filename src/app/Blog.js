import React, {Component} from 'react'
import * as contentful from 'contentful'
import BlogItem from './blog/BlogItem.js'
import PageHeader from './components/PageHeader.js'

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
        <PageHeader color="is-info" title="Code Blog">
          Your standard
          <strong>JavaScript</strong>
          programming blog, albeit, probably not very good, but I will at least try to
          keep it entertaining. This blog is a chronological mix of random posts on
          Angular, React, Functional Programming, and my
          <strong>project walkthroughs</strong>.
        </PageHeader>
        <br/> {this
          .state
          .posts
          .map(({
            fields
          }, i) => <BlogItem key={i} {...fields}/>)}
      </div>
    )
  }
}

export default Blog