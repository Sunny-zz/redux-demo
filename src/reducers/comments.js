const initialState = [
  {
    id: 1,
    body: '哈哈哈'
  },
  {
    id: 2,
    body: '哈'
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
