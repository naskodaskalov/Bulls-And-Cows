import React from 'react'
import { NavLink } from 'react-router-dom'

import './Buttons.css'

const Link = (props) => {
  var isButton = props.isButton != null ? props.isButton : ''

  return (
    <NavLink to={props.link} activeClassName='active' className={`nav-link ${isButton}`}>
      {props.name}
    </NavLink>
  )
}

export default Link
