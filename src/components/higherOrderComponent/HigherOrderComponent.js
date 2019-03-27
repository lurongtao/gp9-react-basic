import React from 'react'

const stickProps = (Component) => {
  class TempComponent extends React.PureComponent {
    render() {
      return (
        <React.Fragment>
          <div>aaa</div>
          <Component title="hello" id={3}></Component>
        </React.Fragment>
      )
    }
  }

  return TempComponent
}

export default stickProps