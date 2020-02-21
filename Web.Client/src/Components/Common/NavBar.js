import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Link from './Link'

export default class NavBar extends Component {
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
              link='/ranging'
              name='Класиране'
            />
            <Link
              link='/rules'
              name='Правила'
            />
            <Link
              link='/auth'
              name='Влез'
              isButton='primary-btn'
            />
          </div>
        </div>
      </nav>
    )
  }
}
