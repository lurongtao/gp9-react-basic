import React, { Component } from 'react'

import { connect } from 'react-redux'

import CommentItem from './CommentItem'

const mapState = (state) => {
  return {
    commentlist: state.commentlist
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleDelete(index) {
      dispatch({
        type: 'splice',
        payload: index
      })
    },

    load() {
      dispatch(() => {
        fetch('https://api.myjson.com/bins/ii1aa')
          .then(response => response.json())
          .then(result => {
            console.log(result)

            dispatch({
              type: 'load',
              payload: result
            })
          })
      })
    }
  }
}

class CommentList extends Component {
  render() {
    return (
      <>
        {
          this.props.commentlist.map((value,index) => {
            return <CommentItem onDelete={this.props.handleDelete} index={index} key={ index } value={value}></CommentItem>
          })
        }
      </>
    )
  }

  componentDidMount() {
    this.props.load()
  }
}

export default connect(mapState, mapDispatch)(CommentList)
