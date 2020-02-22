import React, { Component } from 'react'
import Link from './Link'
import Auths from '../../Utilities/Auths'
import userStore from '../../Stores/UserStore'

export default class Footer extends Component {
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
      <div className='col-md-12 d-flex flex-row'>
        <div className='footer-navigation col-md-3'>
          <Link
            link='/'
            name='Начало'
          />
          {Auths.isUserAuthenticated() ? (
            <Link
              link='/game'
              name='Нова игра'
            />
          ) : (
            ''
          )}
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
            />
          ) : (
            <Link
              link='/login'
              name='Влез'
            />
          )}
        </div>
        <div className='col-md-6 p-2'>
          <p>&copy; 2020 - Designed and Developed by:</p>
          <p><a href='http://developine.eu' className='nav-link' target='_blank' rel='noopener noreferrer'>Nasko Daskalov | developine.eu</a></p>
          <div className='social-links'>
            <a href='https://www.facebook.com/nasko.daskalov' className='nav-link d-inline' target='_blank' rel='noopener noreferrer'>
              <i className='fab fa-facebook-square' />
            </a>
            <a href='https://www.linkedin.com/in/nasko-daskalov-a7731a117/' className='nav-link d-inline' target='_blank' rel='noopener noreferrer'>
              <i className='fab fa-linkedin' />
            </a>
            <a href='https://www.twitter.com/naskodaskalov' className='nav-link d-inline' target='_blank' rel='noopener noreferrer'>
              <i className='fab fa-twitter-square' />
            </a>
          </div>
        </div>
      </div>
    )
  }
}
