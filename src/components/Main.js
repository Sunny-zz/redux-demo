import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomeContainer from '../containers/HomeContainer'
import PostContainer from '../containers/PostContainer'
class Main extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={HomeContainer} />
          <Route path="/post/:id" component={PostContainer} />
        </div>
      </Router>
    )
  }
}

export default Main
