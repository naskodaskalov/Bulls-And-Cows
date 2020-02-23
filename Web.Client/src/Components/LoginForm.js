import React, { Component } from 'react'
import InputField from './Common/InputField'
import Button from './Common/Button'

import Helpers from '../Utilities/Helpers'
import toastr from 'toastr'

import Auths from '../Utilities/Auths'
import userActions from '../Actions/UserActions'
import userStore from '../Stores/UserStore'
import { withRouter } from 'react-router-dom'

class LoginForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      user: {
        email: '',
        password: ''
      },
      error: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleUserLogin = this.handleUserLogin.bind(this)

    userStore.on(
      userStore.eventTypes.USER_LOGGED_IN, this.handleUserLogin
    )
  }

  componentWillUnmount () {
    userStore.removeListener(
      userStore.eventTypes.USER_LOGGED_IN, this.handleUserLogin
    )
  }

  handleInputChange (e) {
    Helpers.handleFormChange.bind(this)(e, 'user')
  }

  handleFormSubmit (e) {
    e.preventDefault()
    userActions.login(this.state.user)
  }

  handleUserLogin (data) {
    if (!data.success) {
      this.setState({ error: data.message })
    } else {
      Auths.authenticateUser(data.token)
      Auths.saveUser(data.user)

      toastr.success(data.message)
      this.props.history.push('/')
    }
  }

  render () {
    return (
      <div>
        {this.state.error ? (
          <div className='alert alert-danger' role='alert'>
            {this.state.error}
          </div>
        ) : ''}
        <InputField
          symbol='fas fa-user'
          name='email'
          type='text'
          value={this.state.user.email}
          placeholder='E-mail'
          onInputChange={this.handleInputChange}
        />
        <InputField
          symbol='fas fa-lock'
          name='password'
          value={this.state.user.password}
          type='password'
          placeholder='Парола'
          onInputChange={this.handleInputChange}
        />
        <Button
          symbol='fas fa-sign-in-alt mr-2'
          value='Вход'
          onSubmit={this.handleFormSubmit}
        />
      </div>
    )
  }
}

export default withRouter(LoginForm)
