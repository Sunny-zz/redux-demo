import axios from 'axios'
export const addComment = comment => {
  return dispatch => {
    const uri = 'http://localhost:3008/comments'
    axios.post(uri, comment).then(res => {
      const comment = res.data
      dispatch({
        type: 'ADD_COMMENT',
        comment
      })
    })
  }
}

export const loadPosts = () => {
  return dispatch => {
    const uri = 'http://localhost:3008/posts'
    axios.get(uri).then(res => {
      const posts = res.data
      dispatch({
        type: 'LOAD_POSTS',
        posts
      })
    })
  }
}
export const loadComments = () => {
  return dispatch => {
    const uri = 'http://localhost:3008/comments'
    axios.get(uri).then(res => {
      const comments = res.data
      dispatch({
        type: 'LOAD_COMMENTS',
        comments
      })
    })
  }
}
