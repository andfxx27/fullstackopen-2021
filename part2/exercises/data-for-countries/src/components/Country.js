import React from 'react'
import '../App.css'

const Country = (props) => {
  return (
    <div>
      <h2>{props.country.name}</h2>
      <p>capital {props.country.capital}</p>
      <p>population {props.country.population}</p>

      <h3>languages</h3>
      <ul>
        {props.country.languages.map(
          language => <li key={language.name}>{language.name}</li>
        )}
      </ul>
    </div>
  )
}

export default Country