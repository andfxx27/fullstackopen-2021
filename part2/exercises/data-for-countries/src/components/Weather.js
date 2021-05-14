import React from 'react'
import '../App.css'

const Weather = (props) => {
  if (Object.keys(props.weatherInfo).length === 0) {
    return null
  }

  return (
    <>
      <p>Temperature: {props.weatherInfo.current.temperature} Celcius</p>
      <img src={props.weatherInfo.current.weather_icons[0]} alt='weather icons' />
      <p>Wind: {props.weatherInfo.current.wind_speed} mph direction {props.weatherInfo.current.wind_dir}</p>
    </>
  )
}

export default Weather