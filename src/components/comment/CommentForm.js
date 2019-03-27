import React, { Component, Fragment } from 'react'

export default class CommentForm extends Component {
  constructor() {
    super()
    this.state = {
      keywords: 'ddd'
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  render() {
    // 受控组件
    return (
      <Fragment>
        <textarea name="" id="" cols="30" rows="10"
          value={this.state.keywords}
          onChange={this.handleChange}
        ></textarea><br/>
        <button onClick={this.handleSubmit}>提交</button>
      </Fragment>
    )
  }

  handleChange(e) {
    this.setState({
      keywords: e.target.value
    })
  }

  handleSubmit() {
    this.props.onReceive(this.state.keywords)
  }
}