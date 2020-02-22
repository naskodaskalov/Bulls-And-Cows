import React, { Component } from 'react'
import InputField from './Common/InputField'
import Button from './Common/Button'

import userActions from '../Actions/UserActions'
import userStore from '../Stores/UserStore'
import { withRouter } from 'react-router-dom'

import Helpers from '../Utilities/Helpers'

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
      error: ''
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
      let firstError = data.message
      if (data.errors) {
        firstError = Object
          .keys(data.errors)
          .map(k => data.errors[k])[0]
      }
      if (firstError.length) {
        this.setState({
          error: firstError
        })
      }
    } else {
      this.props.history.push('/login')
    }
  }

  formValidate () {
    var isFormValid = true
    var { username, password, email, confirmPassword } = this.state.user

    if (password !== confirmPassword) {
      isFormValid = false
    }

    if (username.length < 4) {
      isFormValid = false
    }

    if (email.indexOf('@') < 1) {
      isFormValid = false
    }

    return isFormValid
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
          type='text'
          name='username'
          value={this.state.user.username}
          placeholder='Потребителско име'
          onInputChange={this.handleInputChange}
        />
        <InputField
          symbol='fas fa-envelope'
          type='text'
          name='email'
          value={this.state.user.email}
          placeholder='E-mail'
          onInputChange={this.handleInputChange}
        />
        <InputField
          symbol='fas fa-lock'
          type='password'
          name='password'
          value={this.state.user.password}
          placeholder='Парола'
          onInputChange={this.handleInputChange}
        />
        <InputField
          symbol='fas fa-lock'
          type='password'
          name='confirmPassword'
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
