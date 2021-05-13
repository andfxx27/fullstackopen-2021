import React from 'react'
import '../App.css'

const Filter = (props) => {
  return (
    <>
      <label id='countryFilter'>Find countries</label>
      <input 
        value={props.value}
        onChange={props.onChange}
        id='countryFilter'
      />
    </>
  )
}

export default Filter