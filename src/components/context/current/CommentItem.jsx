import React, { PureComponent, Fragment } from 'react'

import { YourContext } from './yourContext'
import { MyContext } from './myConext'

export default class CommentItem extends PureComponent {
  // static contextType = YourContext

  render() {
    return (
      <Fragment>
        <YourContext.Consumer>
          {
            (function(value) {
              return (
                <Fragment>
                  <div>{ value.state.text }</div>
                  <div>
                    <button style={{color: value.state.color}}>button</button>
                  </div>
                  <MyContext.Consumer>
                    {
                      (function (value) {
                        return (
                          <div>
                            <button style={{color: value.state.color}}>button</button>
                          </div>
                        )
                      })
                    }
                  </MyContext.Consumer>
                </Fragment>
              )
            })
          }
        </YourContext.Consumer>
      </Fragment>
    )
  }
}
