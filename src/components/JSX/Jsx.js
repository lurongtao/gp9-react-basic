import React, { Component, Fragment } from 'react'

import './style.css'

class Jsx extends Component {
  constructor() {
    super()
    this.state = {
      msg: '<b>hello</b>'
    }
  }

  render () {
    return (
      <Fragment>
        <div className="myDiv" dangerouslySetInnerHTML={{__html: this.state.msg}}></div>
        <label htmlFor="surname">
          姓名：
          <input type="text" id="surname" value="felixlu"/>
        </label>
        {/* <div>{ this.state.msg }</div> */}
      </Fragment>
    )
  }
}

export default Jsx