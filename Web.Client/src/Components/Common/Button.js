import React from 'react'

import './Buttons.css'

const Button = (props) => (
  <div onClick={props.onSubmit} className='btn btn-primary btn-lg mt-3 rounded-0' role='button'>
    <i className={props.symbol} />
    {props.value}
  </div>
)

export default Button
