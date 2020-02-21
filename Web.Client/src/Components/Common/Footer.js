import React from 'react'
import Link from './Link'

const Footer = () => (
  <div className='col-md-12 d-flex flex-row'>
    <div className='footer-navigation col-md-3'>
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
      />
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

export default Footer
