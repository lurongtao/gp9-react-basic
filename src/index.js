import React from 'react'
import ReactDOM from 'react-dom'
import {
  Provider
} from 'react-redux'

import App from './App'

import store from './components/redux/store'

ReactDOM.render(
  <Provider store={store}>
    <App title="hello" />
  </Provider>,
  document.querySelector('#root')
)