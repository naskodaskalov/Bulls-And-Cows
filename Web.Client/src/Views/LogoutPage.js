import { Component } from 'react'
import Auths from '../Utilities/Auths'

class LogoutPage extends Component {
  componentWillMount () {
    Auths.deauthenticateUser()
    Auths.removeUser()
    this.props.history.push('/')
  }

  render () {
    return null
  }
}

export default LogoutPage
