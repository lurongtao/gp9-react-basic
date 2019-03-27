import React, { Component } from 'react'
import PropTypes from 'prop-types'

import CommentList from './CommentList'

export default class Comment extends Component {
  static childContextTypes = {
    text: PropTypes.string
  }

  getChildContext() {
    return {
      text: 'new item'
    }
  }

  render() {
    return (
      <CommentList></CommentList>
    )
  }
}
