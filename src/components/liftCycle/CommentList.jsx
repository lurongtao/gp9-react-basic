import React, { PureComponent, Fragment } from 'react'

import CommentItem from './CommentItem'

export default class CommentList extends PureComponent {
  constructor(props) {
    super(props)
    console.log('constructor')

    this.state = {
      title: ''
    }

    this.changeTitle = () => {
      this.setState({
        title: 'hello'
      })
    }
  }

  // shouldComponentUpdate(nextProps, nextStates) {
  //   return nextStates.title === this.state.title ? false : true
  // }

  componentWillUpdate() {
    console.log('componentWillUpdate')
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  componentWillMount() {
    // console.log(this)
    console.log('componentWillMount')
  }

  render() {
    console.log('render')
    return (
      <Fragment>
        <CommentItem title={ this.state.title }></CommentItem>
        <button onClick={ this.changeTitle }>更新title</button>
      </Fragment>
    )
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }
}
