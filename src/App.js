import React, { 
  Component,
  // Fragment
} from 'react'

// import Comment from './components/Comment'
// import Jsx from './components/Jsx'
import TestPropTypes from './components/TestPropTypes';

// 函数式组件，无状态组件, 影子组件，傻瓜组件
// 性能好
// const App = function(props) {
//   const data = {
//     x: 0
//   }

//   const handleClick = () => {
//     data.x = 1
//   }

//   return (
//     <div title={props.title} className="cla">
//       <span>{data.x}</span>
//       <a href="#" onClick={handleClick}>baidu</a>
//     </div>
//   )
// }

// 类组件，有状态组件
class App extends Component {
  constructor() {
    // 为了获得this, 需要调用父类 constructor
    super()

    // 初始化状态
    this.state = {
      count: 0,
      msg: 'hi'
    }

    this.handleClick = this.handleClick.bind(this)
  }

  // 渲染函数
  render() {
    // let { title } = this.props
    // // div, button 叫做：React 元素，小写字母开头
    // // Frament 叫做：React 组件，必须大写字母开头
    // return (
    //   <Fragment>
    //     <div>{ this.state.msg }</div>
    //     <div title={title}>{ this.state.count }</div>
    //     <button onClick={ this.handleClick }>click</button>
    //   </Fragment>
    // )

    // return <Comment></Comment>

    // return <Jsx></Jsx>

    return <TestPropTypes customProp value="hell2" title={{ color: '#fff', fontSize: 10, fontWeight: 'bold' }}></TestPropTypes>

  }

  // 自定义一个函数
  handleClick() {
    // setState 函数的执行是异步的
    // 这里的状态是通过合并，再统一做一次修改
    // 不要重新定义 this.state = {}
    // 如果在调用setState时，使用了原来的state的值，需要给setState传递一个函数

    // setState 函数的执行是异步的，如果你想 在调用setState之后试图去哪最新的值，你会失望的
    // 解决方案是给 setState 传入第二个参数， 这个参数是一个回调函数

    // this.state.count += 1
    // this.state.msg = 'haha'
    // const tempState = {
    //   count: this.state.count + 1,
    //   msg: 'haha'
    // }
    // this.setState(Object.assign({}, tempState))

    this.setState(
      prevState => {
        return {
          count: prevState.count + 1
        }
      },
      () => {
        console.log(this.state.count)
      }
    )
    // console.log(this.state.count)
  }
}

export default App