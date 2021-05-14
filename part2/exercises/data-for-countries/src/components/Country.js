import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../App.css'
import Weather from './Weather'

const Country = (props) => {
  const [weatherInfo, setWeatherInfo] = useState({})

  useEffect(() => {
    const params = {
      access_key: process.env.REACT_APP_WEATHERSTACK_API_KEY,
      query: props.country.capital
    }

    axios
      .get('http://api.weatherstack.com/current', {params})
      .then(response => {
        setWeatherInfo(response.data)
      })
  }, [props.country])

  return (
    <div>
      <h2>{props.country.name}</h2>
      <p>Capital {props.country.capital}</p>
      <p>Population {props.country.population}</p>

      <h3>Spoken languages</h3>
      <ul>
        {props.country.languages.map(
          language => <li key={language.name}>{language.name}</li>
        )}
      </ul>

      <img src={props.country.flag} alt={`${props.country.name} flag`} className='flag-img'/>

      <h3>Weather in {props.country.capital}</h3>
      <Weather 
        weatherInfo={weatherInfo}
      />
    </div>
  )
}

export default Country