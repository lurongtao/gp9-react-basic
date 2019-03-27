import React, { PureComponent } from 'react'

import { MyContext } from './myConext'

// export default class CommentButton extends PureComponent {
//   static contextType = MyContext

//   render() {
//     return (
//       <div>
//         <button 
//           style={{color: this.context.state.color}}
//           onClick={this.context.changeColor.bind(this, 'blue')}
//         >{ this.props.children }</button>
//       </div>
//     )
//   }
// }

const CommentButton = function () {
  return (
    <div>
      <button>button</button>
    </div>
  )
}

export default CommentButton

