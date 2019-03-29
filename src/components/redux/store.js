import { createStore, applyMiddleware } from 'redux'

// redux-thunk redux-saga redux-promise

import thunk from 'redux-thunk'

const enhancer = applyMiddleware(thunk)

const defaultState = {
  commentlist: []
}

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'load': 
      return {
        commentlist: action.payload
      }
    case 'push':
      return {
        commentlist: [
          ...state.commentlist,
          action.payload
        ]
      }
    case 'splice': 
      let commentlist = [...state.commentlist]
      commentlist.splice(action.payload, 1)
      return {
        commentlist
      }
    default :
      return state
  }
}

const store = createStore(reducer, enhancer)

export default store