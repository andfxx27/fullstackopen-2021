import React from 'react'
import '../App.css'

/**
 * Filter component
 * 
 * Component for filtering phonebook entries by person's name
 * @param {*} props 
 * @returns JSX
 */
const Filter = (props) => {
  return (
    <>
      <label htmlFor={props.id}>Filter</label>
      <input
        value={props.value}
        onChange={props.onChange}
        onFocus={props.onFocus}
        id={props.id}
      />
    </>
  )
}

export default Filter