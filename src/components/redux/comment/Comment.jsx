import React, { Component } from 'react'

import CommentList from './CommentList'
import CommentForm from './CommentForm'

export default class Comment extends Component {
  render() {
    return (
      <>
        <CommentList></CommentList>
        <CommentForm></CommentForm>
      </>
    )
  }
}
