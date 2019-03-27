import React, { PureComponent } from 'react'

export default class CommentItem extends PureComponent {
  state = {
    x: 0
  }

  constructor(props) {
    super(props)
    console.log('child constructor')
  }

  // 这个钩子在props发生变化的时候触发，mounting 阶段 不触发
  // componentWillReceiveProps(nextProps) {
  //   console.log('child componentWillReceiveProps')
  //   // console.log(nextProps)
  // }

  // 根据变化返回一个新的状态，会merge 当前组件的state
  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps')
    if (props.title) {
      return {
        x: props.title
      }
    } else {
      return null
    }
  }

  // 性能优化的钩子
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('shouldComponentUpdate')
  //   console.log(this.props, nextProps)
  //   return this.props.title === nextProps.title ? false : true
  // }

  // componentWillUpdate() {
  //   console.log('child componentWillUpdate')
  // }

  // componentWillMount() {
  //   console.log('child componentWillMount')
  // }

  render() {
    console.log('child render')
    return (
      <div>
        item
        { this.state.x }
      </div>
    )
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    return 999
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('child componentDidUpdate')
    console.log(snapshot)
  }

  componentDidMount() {
    console.log('child componentDidMount')
  }
}
