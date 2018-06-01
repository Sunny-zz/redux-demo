import React, { Component } from 'react'
import Main from '../components/Main'
import { connect } from 'react-redux'
import { loadPosts } from '../actions'
import axios from 'axios'
class App extends Component {
  // 组件内 ref 属性可以获取到真实的 dom 节点，ref 的值是一个箭头函数 函数内自带一个参数这个参数就是真实的 dom 节点，我们将这个参数赋值给组件的一个变量 我们就可以访问了
  componentDidMount() {
    const uri = 'http://localhost:3008/posts'
    axios.get(uri).then(res => {
      const posts = res.data
      this.props.loadPosts(posts)
    })
  }

  render() {
    return (
      <div>
        <Main />
      </div>
    )
  }
}

export default connect(null, { loadPosts })(App)
