import comments from './comments'
import posts from './posts'
import { combineReducers } from 'redux'
const rootReducer = combineReducers({
  comments,
  posts
})

export default rootReducer
