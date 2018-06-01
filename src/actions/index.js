import axios from 'axios'
export const addComment = comment => ({
  type: 'ADD_COMMENT',
  comment
})

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
