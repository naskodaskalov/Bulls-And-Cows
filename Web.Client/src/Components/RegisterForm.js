import React, { Component } from 'react'
import InputField from './Common/InputField'
import Button from './Common/Button'

export default class RegisterForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      username: '',
      password: '',
      email: '',
      confirmPassword: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleInputChange (e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleFormSubmit (e) {
    e.preventDefault()
    if (this.formValidate()) {
      console.log('Registered ', this.state.username)
    }
  }

  formValidate () {
    var isFormValid = true
    var { username, password, email, confirmPassword } = this.state

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
        <InputField
          symbol='fas fa-user'
          type='text'
          name='username'
          placeholder='Потребителско име'
          onInputChange={this.handleInputChange}
        />
        <InputField
          symbol='fas fa-envelope'
          type='text'
          name='email'
          placeholder='E-mail'
          onInputChange={this.handleInputChange}
        />
        <InputField
          symbol='fas fa-lock'
          type='password'
          name='password'
          placeholder='Парола'
          onInputChange={this.handleInputChange}
        />
        <InputField
          symbol='fas fa-lock'
          type='password'
          name='confirmPassword'
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
