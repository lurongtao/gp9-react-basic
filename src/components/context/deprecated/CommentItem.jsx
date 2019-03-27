import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class CommentItem extends Component {
  static contextTypes = {
    text: PropTypes.string
  }

  render() {
    console.log(this)
    return (
      <div>
        { this.context.text }
      </div>
    )
  }
}
