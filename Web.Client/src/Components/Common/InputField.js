import React from 'react'

const InputField = (props) => (
  <div className='input-group flex-nowrap input-group-lg mt-3'>
    <div className='input-group-prepend'>
      <span className='input-group-text bg-transparent border-top-0 border-left-0 border-right-0 rounded-0'>
        <i className={props.symbol} />
      </span>
    </div>
    <input
      type={props.type}
      className='form-control border-top-0 border-left-0 border-right-0 rounded-0'
      placeholder={props.placeholder}
      name={props.name}
      onChange={props.onInputChange}
    />
  </div>
)

export default InputField
