import React, { Component, Fragment } from 'react'

import { MyContext, state } from './myConext'

import CommentItem from './CommentItem'
import CommentForm from './CommentForm'

export default class CommentList extends Component {

  static contextType = MyContext

  constructor(props) {
    super(props)
    
    this.state = {
      state,
      changeColor: (color) => {
        this.setState({
          state: {
            color,
            text: 'new item'
          }
        })
      }
    }
    
  }

  render() {
    return (
      // <MyContext.Provider value={this.state}>
      <Fragment>
        <div>{ this.context.state.text }</div>
        <CommentItem />
        <CommentForm />
      </Fragment>
      // </MyContext.Provider>
    )
  }
}
