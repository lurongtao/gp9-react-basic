import React, { Component } from 'react'

import stickProps from './HigherOrderComponent'

class TestComponent extends Component {
  render() {
    return (
      <div>
        hello
      </div>
    )
  }
}

export default stickProps(TestComponent)

