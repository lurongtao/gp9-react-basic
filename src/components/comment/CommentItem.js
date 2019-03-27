import React, { Fragment } from 'react'

const CommentItem = (props) => {
  // return <div>{props.value}</div>
  if (props.value) {
    return (
      <Fragment>
        <div>{props.children ? props.children : props.value} <button onClick={() => { props.delete(props.index) }}>删除</button></div>
      </Fragment>
    )
  } else {
    // return <div>hello</div>
    return <Fragment></Fragment>
  }
}

export default CommentItem