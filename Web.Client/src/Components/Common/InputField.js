import React from 'react'

const InputField = (props) => (
  <div>
    <div className='input-group flex-nowrap input-group-lg mt-3'>
      <div className='input-group-prepend'>
        {props.symbol ? (
          <span className='input-group-text bg-transparent border-top-0 border-left-0 border-right-0 rounded-0'>
            <i className={props.symbol} />
          </span>
        ) : ''}
      </div>
      <input
        type={props.type}
        className='form-control border-top-0 border-left-0 border-right-0 rounded-0 '
        placeholder={props.placeholder}
        name={props.name}
        onChange={props.onInputChange}
        value={props.value}
      />
    </div>
    {props.error ? (
      <div className='alert alert-danger d-block' role='alert'>
        {props.error}
      </div>
    ) : ''}
  </div>
)

export default InputField
