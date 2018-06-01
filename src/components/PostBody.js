import React, { Component } from 'react'

class PostBody extends Component {
  render() {
    const { posts, comments, id } = this.props
    const post = posts.length ? (
      <div>
        {posts.find(t => t.id.toString() === id).title}
        <br />
        <span>{comments.length}</span>
      </div>
    ) : (
      <div>请稍等</div>
    )
    return post
  }
}

export default PostBody
