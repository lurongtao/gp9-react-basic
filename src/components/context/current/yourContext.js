import React from 'react'

const state = {
  text: 'your item',
  color: '#000'
}

const YourContext = React.createContext({
  state,
  changeColor: function(){} //noop
})

export { YourContext, state }