import React, { Component } from 'react'

import stickProps from './HigherOrderComponent'

class MyComponent extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this)
    return (
      <div>
        hi
      </div>
    )
  }
}

export default stickProps(MyComponent)
// export default MyComponent
