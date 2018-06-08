import React, {Component} from 'react'
import {connect} from 'react-redux'
import PageHeader from './components/PageHeader'
import PageContent from './components/PageContent'
import MediumItem from './medium/MediumItem.js'
import Loader from './components/Loader.js'

class Medium extends Component {
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

        {this.props.medium.loading
          ? <Loader className="has-text-success"></Loader>
          : <PageContent>
            {this
              .props
              .medium
              .posts
              .map((posts, i) => <MediumItem key={i} {...posts}/>)}
          </PageContent>}
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {medium: state.medium}
}

export default connect(mapStateToProps)(Medium)