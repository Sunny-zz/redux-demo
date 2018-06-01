import React, { Component } from 'react'

class PostBody extends Component {
  render() {
    const { posts, comments, id } = this.props
    const post = (
      <div>
        {posts.find(t => t.id.toString() === id).title}
        <br />
        <span>{comments.length}</span>
      </div>
    )
    return post
  }
}

export default PostBody
