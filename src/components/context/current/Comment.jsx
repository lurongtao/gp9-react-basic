import React, { Component } from 'react'

import CommentList from './CommentList'

import { YourContext, state } from './yourContext'

export default class Comment extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      state,
      changeColor: (color) => {
        this.setState({
          state: {
            color,
            text: 'your new item'
          }
        })
      }
    }
  }

  render() {
    return (
      <YourContext.Provider value={this.state}>
        <CommentList></CommentList>
      </YourContext.Provider>
    )
  }
}
