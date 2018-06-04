import React, { Component } from 'react'
import PostBody from './PostBody'
import PostComment from './PostComment'
import { getCurrentComments } from '../selectors'

class Post extends Component {
  render() {
    const { comments, match, posts, addComment } = this.props
    const { id } = match.params
    const currentComments = getCurrentComments(comments, id)
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
