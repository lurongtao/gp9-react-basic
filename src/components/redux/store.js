import { createStore } from 'redux'

const defaultState = {
  count: 0
}

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'increment' :
      return {
        count: state.count + action.payload
      }
    case 'decrement' :
      return {
        count: state.count - action.payload
      }
    default :
      return state
  }
}

const store = createStore(reducer)

export default store