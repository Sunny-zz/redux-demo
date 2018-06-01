import React, { Component } from 'react'
import PostBody from './PostBody'
import PostComment from './PostComment'

class Post extends Component {
  render() {
    const { comments, match, posts } = this.props
    const { id } = match.params
    return (
      <div>
        <PostBody posts={posts} id={id} />
        <PostComment comments={comments} />
      </div>
    )
  }
}

export default Post
