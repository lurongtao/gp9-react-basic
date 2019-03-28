import React, { Component } from 'react'
import { connect } from 'react-redux'

const mapState = (state) => {
  return {
    count: state.count
  }
}

const mapDispatch = (dispatch) => {
  return {
    increment: () => {
      dispatch({
        type: 'increment',
        payload: 1
      })
    }
  }
}

class Counter extends Component {
  render() {
    return (
      <div>
        { this.props.count }
        <button onClick={ this.props.increment }> + </button>
      </div>
    )
  }
}

// export default Counter
export default connect(mapState, mapDispatch)(Counter)
