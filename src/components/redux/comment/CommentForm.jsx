import React, { Component } from 'react'

import { connect } from 'react-redux'

const mapDispatch = (dispatch) => {
  return {
    handleSubmit: (value) => {
      dispatch({
        type: 'push',
        payload: value
      })
    }
  }
}

class CommentForm extends Component {
  constructor(props) {
    super(props)
    
    this.handleChange = this.handleChange.bind(this)
    
    this.state = {
      keyword: ''
    }
  }
  render() {
    return (
      <>
        <textarea value={this.state.keyword} onChange={this.handleChange} name="" id="" cols="30" rows="10"></textarea> <br/>
        <button onClick={ () => {this.props.handleSubmit(this.state.keyword)} }>提交</button>
      </>
    )
  }

  handleChange(e) {
    this.setState({
      keyword: e.target.value
    })
  }
}

export default connect(null, mapDispatch)(CommentForm)