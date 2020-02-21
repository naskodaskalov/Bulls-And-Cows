import React, { Component } from 'react'
import InputField from './Common/InputField'
import Button from './Common/Button'

export default class LoginForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      username: '',
      password: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleInputChange (e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleFormSubmit (e) {
    e.preventDefault()
    console.log(this.state.password)
    console.log(this.state.username)
  }

  render () {
    return (
      <div>
        <InputField
          symbol='fas fa-user'
          name='username'
          type='text'
          placeholder='Потребителско име'
          onInputChange={this.handleInputChange}
        />
        <InputField
          symbol='fas fa-lock'
          name='password'
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
