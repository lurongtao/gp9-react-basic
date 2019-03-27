import React, { Component, Fragment } from 'react'

import CommentList from './CommentList'
import CommentForm from './CommentForm'

class Comment extends Component {
  constructor() {
    super()
    this.state = {
      keywords: ''
    }

    this.handleReceive = this.handleReceive.bind(this)
  }

  render() {
    return (
      <Fragment>
        <CommentList keywords={this.state.keywords}></CommentList>
        <CommentForm onReceive={this.handleReceive}></CommentForm>
      </Fragment>
    )
  }

  handleReceive(keywords) {
    this.setState({
      keywords
    })
  }
}

export default Comment