import React from 'react'
import '../App.css'

/**
 * Form component
 * 
 * Component for form used to add new phonebook entry
 * @param {*} props 
 * @returns JSX
 */
const Form = (props) => {
  return (
    <>
      <h2>Add new phonebook entry</h2>
      <form 
        onSubmit={props.onSubmit}
        className='form'>
        <label htmlFor='inputName'>Name</label>
        <input
          value={props.inputNameAttr.value}
          onChange={props.inputNameAttr.onChange}
          onFocus={props.inputNameAttr.onFocus}
          id='inputName'
        />

        <label htmlFor='inputPhoneNumber'>Phone</label>
        <input
          value={props.inputPhoneNumberAttr.value}
          onChange={props.inputPhoneNumberAttr.onChange}
          onFocus={props.inputPhoneNumberAttr.onChange}
          id='inputPhoneNumber'
        />

        <div>
          <button type='submit'>Add</button>
        </div>
      </form>
    </>
  )
}

export default Form