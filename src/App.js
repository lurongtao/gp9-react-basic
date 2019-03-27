import React, { 
  Component
} from 'react'

// import CommentList from './components/context/current/CommentList'

import MyComponent from './components/higherOrderComponent/MyComponent'
import TestComponent from './components/higherOrderComponent/TestComponent'


class App extends Component {
  render() {
    return (
      <>
        <MyComponent></MyComponent>
        <TestComponent></TestComponent>
      </>
    )
  }
}

export default App