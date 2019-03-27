import React from 'react'

const state = {
  text: 'item',
  color: '#6435c9'
}

const MyContext = React.createContext({
  state,
  changeColor: function(){} //noop
})

export { MyContext, state }