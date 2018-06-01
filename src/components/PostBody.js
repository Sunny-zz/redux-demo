import React, { Component } from 'react'

class PostBody extends Component {
  render() {
    const { posts, id } = this.props
    const post = <div>{posts.find(t => t.id.toString() === id).title}</div>
    return post
  }
}

export default PostBody
