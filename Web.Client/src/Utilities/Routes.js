import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Homepage from '../Views/Homepage'
import RangingPage from '../Views/RangingPage'
import RulesPage from '../Views/RulesPage'
import LoginPage from '../Views/LoginPage'
import RegisterPage from '../Views/RegisterPage'
import GamePage from '../Views/GamePage'
import LogoutPage from '../Views/LogoutPage'

import PrivateRoute from './PrivateRoute'

class Routes extends Component {
  render () {
    return (
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/game/ranging' component={RangingPage} />
        <Route path='/rules' component={RulesPage} />
        <Route path='/login' component={LoginPage} />
        <Route path='/register' component={RegisterPage} />
        <PrivateRoute path='/game' component={GamePage} />
        <PrivateRoute path='/logout' component={LogoutPage} />

      </Switch>
    )
  }
}

export default Routes
