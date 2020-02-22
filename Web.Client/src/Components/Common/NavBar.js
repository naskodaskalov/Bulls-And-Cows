import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Link from './Link'
import Auths from '../../Utilities/Auths'
import userStore from '../../Stores/UserStore'

export default class NavBar extends Component {
  constructor (props) {
    super(props)

    this.state = {
      username: Auths.getUser().name
    }

    this.handleUserLoggedIn = this.handleUserLoggedIn.bind(this)

    userStore.on(
      userStore.eventTypes.USER_LOGGED_IN,
      this.handleUserLoggedIn
    )
  }

  handleUserLoggedIn (data) {
    if (data.success) {
      this.setState({ username: data.user.name })
    }
  }

  render () {
    return (
      <nav className='navbar navbar-expand-lg navbar-light'>
        <div className='container'>
          <NavLink to='/'>
            <img src={require('../../Images/logo.png')} className='logo' alt='Bulls and Cows' />
          </NavLink>
          <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navigation' aria-controls='navigation' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse justify-content-end' id='navigation'>
            <Link
              link='/'
              name='Начало'
            />
            <Link
              link='/game/ranging'
              name='Класиране'
            />
            <Link
              link='/rules'
              name='Правила'
            />
            {Auths.isUserAuthenticated() ? (
              <Link
                link='/logout'
                name='Излез'
                isButton='primary-btn'
              />
            ) : (
              <Link
                link='/login'
                name='Влез'
                isButton='primary-btn'
              />
            )}
          </div>
        </div>
      </nav>
    )
  }
}
