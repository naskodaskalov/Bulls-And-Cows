import React, { Component } from 'react'
import LoginForm from '../Components/LoginForm'
import RegisterForm from '../Components/RegisterForm'

export default class AuthPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isLoginActive: true,
      isRegisterActive: false
    }

    this.handleShowLoginForm = this.handleShowLoginForm.bind(this)
    this.handleShowRegisterForm = this.handleShowRegisterForm.bind(this)
  }

  handleShowRegisterForm () {
    this.setState({ isRegisterActive: true, isLoginActive: false })
  }

  handleShowLoginForm () {
    this.setState({ isLoginActive: true, isRegisterActive: false })
  }

  render () {
    var loginFormActive = this.state.isLoginActive ? 'active-login-form' : ''
    var registerFormActive = this.state.isRegisterActive ? 'active-register-form' : ''

    return (
      <div>
        <div className='row no-margin-offset pt-5 text-center justify-content-center'>
          <div className='col-md-6 col-xs-6 text-right form-heading'>
            <h3 onClick={this.handleShowLoginForm} className={loginFormActive}>Вход за потребители</h3>
          </div>
          <div className='col-md-6 col-xs-6 text-left form-heading'>
            <h3 onClick={this.handleShowRegisterForm} className={registerFormActive}>Регистрация</h3>
          </div>
          <div className='col-md-6'>
            {this.state.isLoginActive ? <LoginForm /> : <RegisterForm />}
          </div>
        </div>
      </div>
    )
  }
}
