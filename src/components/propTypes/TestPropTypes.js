import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TestPropTypes extends Component {
  static propTypes = {
    title: PropTypes.shape({
      color: PropTypes.string.isRequired,
      fontSize: PropTypes.number.isRequired
    }),

    customProp: function(props, propName, componentName) {
      // if (!/matchme/.test(props[propName])) {
      //   return new Error(
      //     'Invalid prop `' + propName + '` supplied to' +
      //     ' `' + componentName + '`. Validation failed.'
      //   );
      // }

      if (props.value === 'hello') {
        ;
      } else {
        return new Error('发生错误.')
      }
    }
  }

  render () {
    return (
      <div>
        { this.props.title.color }
      </div>
    )
  }
}

// TestPropTypes.propTypes = {
//   title: PropTypes.number
// }

export default TestPropTypes