import React, { Component } from 'react'
import store from '../store'
import shotrId from 'shortid'
class PostComment extends Component {
  state = {
    text: ''
  }
  handelChange = e => {
    this.setState({
      text: e.target.value
    })
  }
  addComment = () => {
    const { text } = this.state
    const comment = { id: shotrId(), body: text }
    store.dispatch({ type: 'ADD_COMMENT', comment })
  }
  render() {
    const { comments } = this.props
    const commentList = comments.map(comment => (
      <li key={comment.id}>{comment.body}</li>
    ))
    const { text } = this.state
    return (
      <div>
        <input type="text" value={text} onChange={this.handelChange} />
        <button onClick={this.addComment}>评论</button>
        <ul>{commentList}</ul>
      </div>
    )
  }
}

export default PostComment
