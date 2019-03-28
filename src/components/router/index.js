import React, { PureComponent } from 'react'

import './style.css'

import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch,
  withRouter
} from 'react-router-dom'

const Home = props => (
  <div>home</div>
)

const About = props => (
  <div>about</div>
)

const Topics = props => (
  <div>
    {/* <Link to="/topics/topic1?id=3#tag=5">topic1</Link> | <Link to="/topics/topic2">topic2</Link> | <Link to="/topics/topic3">topic3</Link> */}
    {
      <ul>
        <CustomNav />
      </ul>
    }
    <Switch>
      <Route path="/topics/other" component={ TopicOther }></Route>
      {/* <Route path="/topics/:topicId" component={ Topic }></Route> */}
      {/* <Route path="/topics/:topicId" render={ ({ match }) => (
        <div>{ match.params.topicId }</div>
      )}>
      </Route> */}
      <Route path="/topics/:topicId" children={ Topic }></Route>
      <Route component={ Page404 }/>
    </Switch>
    <Route path='/topics/children' children={TestChildren}/>
  </div>
)

const Topic = ({ match, location }) => {
  console.log(location)
  return (
    <div>{ match.params.topicId }</div>
  )
}

const TopicOther = () => (
  <div>other topic</div>
)

const Page404 = () => (
  <div>404.</div>
)

const CustomNav = withRouter((props) => {
  return ['topic1', 'topic2', 'topic3'].map((value, index) => {
    let name = props.location.pathname !== `${props.match.url}/${value}` ? value : `> ${value}`
    return (
      <li 
        key={ value }
        onClick={() => { props.history.push(props.match.url + `/${value}`) }}
      >{ name }</li>)
  })
})

const TestChildren = (props) => {
  let url = new URLSearchParams(props.location.search)
  console.log(url.get('id'))
  return (
    <>
      <div>test children</div>
      <div>
        <button onClick={() => {
          if(false) {
            props.history.push('/topics/topic1', {id: 2})
          }
        }}>click</button>
      </div>
    </>
  )
}

export default class TestRouter extends PureComponent {
  render() {
    return (
      <Router>
        <NavLink to="/" exact activeClassName="active">home</NavLink> 
        &nbsp;| <NavLink activeClassName="active" to="/about">about</NavLink>
        &nbsp;| <NavLink activeClassName="active" to="/topics">topics</NavLink>

        <Route exact path='/' component={ Home }/>
        <Route path='/about' component={ About }/>
        <Route path='/topics' component={ Topics }/>
      </Router>
    )
  }
}
