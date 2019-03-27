import React, { PureComponent } from 'react'

import { MyContext } from './myConext'

export default class CommentForm extends PureComponent {
  static contextType = MyContext
  render() {
    return (
      <button 
        style={{color: this.context.state.color}}
        onClick={this.context.changeColor.bind(this, 'green')}
      >修改</button>
    )
  }
}