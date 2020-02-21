import React from 'react'
import { NavLink } from 'react-router-dom'

const Link = (props) => (
  <NavLink to={props.link} activeClassName='active' className={`nav-link ${props.isButton}`}>
    {props.name}
  </NavLink>
)

export default Link
