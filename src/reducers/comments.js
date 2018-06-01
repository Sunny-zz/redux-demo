const initialState = [
  {
    id: 1,
    body: 'git 呜哈哈',
    postId: 1
  },
  {
    id: 2,
    body: 'react 很不错',
    postId: 2
  }
]
const comments = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [...state, action.comment]
    default:
      return state
  }
}
export default comments
