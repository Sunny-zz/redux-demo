import React, { Component } from 'react'
import PostBody from './PostBody'
import PostComment from './PostComment'

class Post extends Component {
  render() {
    const { comments, match, posts, addComment } = this.props
    const { id } = match.params
    const currentComments = comments.filter(t => t.postId.toString() === id)
    return (
      <div>
        <PostBody posts={posts} id={id} comments={currentComments} />
        <PostComment
          comments={currentComments}
          id={id}
          addComment={addComment}
        />
      </div>
    )
  }
}

export default Post
