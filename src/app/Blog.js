import React, {Component} from 'react'
import {connect} from 'react-redux'
import BlogItem from './blog/BlogItem.js'
import PageHeader from './components/PageHeader.js'
import PageContent from './components/PageContent.js';
import Loader from './components/Loader.js'
class Blog extends Component {
  render() {
    return (
      <div>
        <PageHeader color="is-info" title="Code Blog">
          Your standard JavaScript programming blog, albeit, probably not very good, but I
          will at least try to keep it entertaining. This blog is a chronological mix of
          random posts on Angular, React, Functional Programming, and my project
          walkthroughs.
        </PageHeader>
        {this.props.blog.loading
          ? <Loader className="has-text-primary"></Loader>
          : <PageContent>{this
              .props
              .blog
              .posts
              .map(({
                fields
              }, i) => <BlogItem key={i} {...fields}/>)}
          </PageContent>}
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {blog: state.blog}
}

export default connect(mapStateToProps)(Blog)