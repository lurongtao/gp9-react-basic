import React, { Component, Fragment } from 'react'

import CommentItem from './CommentItem'

export default class CommentList extends Component {
  constructor() {
    super()

    this.state = {
      commentList: []
    }

    this.handleDelete = this.handleDelete.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentWillReceiveProps(props) {
    // this.state.commentList.push(props.keywords)
    this.setState({
      commentList: [
        ...this.state.commentList,
        props.keywords
      ]
    }, () => {
      // console.log(this.state.commentList)
    })
  }

  render() {
    return (
      <Fragment>
        {
          this.state.commentList.map((value, index) => {
            // return <CommentItem key={ index } value={value} />
            return (
              <CommentItem 
                delete={ this.handleDelete } 
                key={ index }
                index={ index }
              >{value}</CommentItem>
            )
          })
        }
        <div>
          <button onClick={ this.handleChange }>changeValue</button>
        </div>
      </Fragment>
    )
  }

  handleDelete(index) {
    this.state.commentList.splice(index, 1)
    this.setState({})
  }

  handleChange() {
    this.state.commentList[0] = 'aaa'
    this.setState({})
  }
}