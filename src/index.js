import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

ReactDOM.render(
  <App title="hello" />,
  document.querySelector('#root')
)

// setTimeout(() => {
//   ReactDOM.unmountComponentAtNode(document.querySelector('#root'))
// }, 2000)