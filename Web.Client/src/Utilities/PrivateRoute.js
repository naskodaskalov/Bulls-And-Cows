import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Auths from './Auths'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest} render={props => (
      Auths.isUserAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{
          pathname: '/login',
          state: { from: props.locatioin }
        }}
        />
      )
    )}
  />
)

export default PrivateRoute
