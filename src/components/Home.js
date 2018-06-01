import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Home extends Component {
  render() {
    const { posts } = this.props
    const postList = posts.map(post => (
      <li key={post.id}>
        <Link to={`/post/${post.id}`}>{post.title}</Link>
      </li>
    ))
    return (
      <div>
        <ul>{postList}</ul>
      </div>
    )
  }
}

export default Home
