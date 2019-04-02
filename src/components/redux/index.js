const redux = require('redux')

const defaultState = {
  count: 0
}

console.log(redux)

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

const store = redux.createStore(reducer)

store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch({
  type: 'increment',
  payload: 1
})

store.dispatch({
  type: 'increment',
  payload: 4
})

store.dispatch({
  type: 'decrement',
  payload: 2
})