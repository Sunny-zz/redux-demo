import React, { Component } from 'react'
import PostBody from './PostBody'
import PostComment from './PostComment'

class Post extends Component {
  render() {
    const { comments } = this.props

    return (
      <div>
        <PostBody />
        <PostComment comments={comments} />
      </div>
    )
  }
}

export default Post
