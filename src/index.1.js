import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

import StoreContext from './components/redux/context'
import store from './components/redux/store'

const render = () => {
  ReactDOM.render(
    <StoreContext.Provider value={{store}}>
      <App title="hello" />
    </StoreContext.Provider>,
    document.querySelector('#root')
  )
}

render()

store.subscribe(render)

// setTimeout(() => {
//   ReactDOM.unmountComponentAtNode(document.querySelector('#root'))
// }, 2000)