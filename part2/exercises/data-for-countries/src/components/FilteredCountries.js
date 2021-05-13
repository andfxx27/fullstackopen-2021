import React from 'react'
import '../App.css'

const FilteredCountries = (props) => {
  return (
    <ul>
      {props.countries.map(
        country => {
          return (
            <div key={country.name}>
              <li>{country.name}</li>
              <button onClick={props.onClick} value={country.name}>Show</button>
            </div>
          )
        }
      )}
    </ul>
  )
}

export default FilteredCountries