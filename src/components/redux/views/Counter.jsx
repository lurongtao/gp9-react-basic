import React, { Component } from 'react'
import StoreContext from '../context'

export default class Counter extends Component {
  static contextType = StoreContext

  constructor(props) {
    super(props)
    
    this.increment = this.increment.bind(this)

    // this.state = {
    //   count: 0
    // }
  } 
  
  render() {
    this.store = this.context.store
    return (
      <div>
        { this.store.getState().count }
        <button onClick={ this.increment }> + </button>
      </div>
    )
  }

  componentDidMount() {
    // this.setState({
    //   count: this.store.getState().count
    // })
  }

  increment() {
    this.store.dispatch({
      type: 'increment',
      payload: 1
    })
    // this.setState({
    //   count: this.store.getState().count
    // })
  }
}
