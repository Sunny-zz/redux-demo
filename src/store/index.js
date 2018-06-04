import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
const store = createStore(rootReducer, applyMiddleware(logger, thunk))
export default store

// action 添加请求   在 App 发请求获取数据目的是将数据写入 store 修改reducer 组件中使用数据
