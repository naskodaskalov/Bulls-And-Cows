import React from 'react'
import { NavLink } from 'react-router-dom'

import './Buttons.css'

const PrimaryLink = (props) => (
  <NavLink to={props.link} activeClassName='active' className={`btn btn-primary btn-lg mt-3 rounded-0 ${props.isButton}`}>
    {props.name}
  </NavLink>
)

export default PrimaryLink
