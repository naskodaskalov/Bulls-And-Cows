import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Homepage from '../Views/Homepage'
import RangingPage from '../Views/RangingPage'
import RulesPage from '../Views/RulesPage'
import AuthPage from '../Views/AuthPage'

class Routes extends Component {
  render () {
    return (
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/ranging' component={RangingPage} />
        <Route path='/rules' component={RulesPage} />
        <Route path='/auth' component={AuthPage} />
      </Switch>
    )
  }
}

export default Routes
