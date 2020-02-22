import React from 'react'

const InputWithButton = (props) => (
  <div className='input-group mb-3'>
    <input
      type='text'
      className='form-control'
      placeholder={props.placeHolder}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
    />
    <div className='input-group-append'>
      <button className='btn primary-btn' type='button' onClick={props.onSave}>{props.btnValue}</button>
    </div>
  </div>
)

export default InputWithButton
