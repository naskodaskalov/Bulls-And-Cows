import React, { Component } from 'react'
import InputField from './Common/InputField'
import Button from './Common/Button'

import userActions from '../Actions/UserActions'
import userStore from '../Stores/UserStore'
import { withRouter } from 'react-router-dom'

import Helpers from '../Utilities/Helpers'
import toastr from 'toastr'

class RegisterForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      user: {
        username: '',
        password: '',
        email: '',
        confirmPassword: ''
      },
      errors: {
        username: '',
        password: '',
        email: '',
        globalError: '',
        confirmPassword: ''
      }
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)

    this.handleUserRegistration = this.handleUserRegistration.bind(this)

    userStore.on(
      userStore.eventTypes.USER_REGISTERED,
      this.handleUserRegistration)
  }

  componentWillUnmount () {
    userStore.removeListener(
      userStore.eventTypes.USER_REGISTERED,
      this.handleUserRegistration)
  }

  handleInputChange (e) {
    Helpers.handleFormChange.bind(this)(e, 'user')
  }

  handleFormSubmit (e) {
    e.preventDefault()
    if (!this.formValidate()) {
      return
    }

    userActions.register(this.state.user)
  }

  handleUserRegistration (data) {
    if (!data.success) {
      Helpers.GetServerError.bind(this)(data)
    } else {
      toastr.success(data.message)
      this.props.history.push('/login')
    }
  }

  formValidate () {
    var isFormValid = true
    var errors = {}
    var { username, password, email, confirmPassword } = this.state.user

    if (password !== confirmPassword) {
      isFormValid = false
      errors.confirmPassword = 'Password and confirm password do not match.'
    }

    if (password.length < 4) {
      isFormValid = false
      errors.password = 'Password must have at least 4 characters.'
    }

    if (username.length < 4) {
      isFormValid = false
      errors.username = 'Username must have at least 4 characters.'
    }

    if (email.indexOf('@') < 1) {
      isFormValid = false
      errors.email = 'Please provide a correct email address.'
    }
    this.setState({ errors })
    return isFormValid
  }

  render () {
    return (
      <div>
        {this.state.errors.globalError ? (
          <div className='alert alert-danger' role='alert'>
            {this.state.errors.globalError}
          </div>
        ) : ''}
        <InputField
          symbol='fas fa-user'
          type='text'
          name='username'
          error={this.state.errors.username}
          value={this.state.user.username}
          placeholder='Потребителско име'
          onInputChange={this.handleInputChange}
        />
        <InputField
          symbol='fas fa-envelope'
          type='text'
          name='email'
          error={this.state.errors.email}
          value={this.state.user.email}
          placeholder='E-mail'
          onInputChange={this.handleInputChange}
        />
        <InputField
          symbol='fas fa-lock'
          type='password'
          name='password'
          error={this.state.errors.password}
          value={this.state.user.password}
          placeholder='Парола'
          onInputChange={this.handleInputChange}
        />
        <InputField
          symbol='fas fa-lock'
          type='password'
          name='confirmPassword'
          error={this.state.errors.confirmPassword}
          value={this.state.user.confirmPassword}
          placeholder='Потвърди парола'
          onInputChange={this.handleInputChange}
        />
        <Button
          symbol='fas fa-user-plus mr-2'
          value='Регистрация'
          onSubmit={this.handleFormSubmit}
        />
      </div>
    )
  }
}

export default withRouter(RegisterForm)
