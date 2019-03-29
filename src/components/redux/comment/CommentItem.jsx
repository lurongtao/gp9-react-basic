import React from 'react'

export default function(props) {
  return (
    <div>
      <span>{ props.value.name }</span> &nbsp;
      <button onClick={ props.onDelete.bind(this, props.index) }>delete</button>
    </div>
  )
}