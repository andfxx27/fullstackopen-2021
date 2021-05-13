import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Filter from './components/Filter'
import Countries from './components/Countries'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')
  const [showSpecificCountry, setShowSpecificCountry] = useState('')

  const handleOnChange = (event) => {
    setFilter(event.target.value)
    setShowSpecificCountry('')
  }

  const handleShowSpecificCountryOnClick = (event) => {
    setShowSpecificCountry(event.target.value)
  }

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  return (
    <div>
      <h1>Countries</h1>

      <Filter 
        value={filter}
        onChange={handleOnChange}
      />

      <Countries 
        countries={countries}
        filter={filter}
        showSpecificCountry={showSpecificCountry}
        showSpecificCountryOnClick={handleShowSpecificCountryOnClick}
      />
    </div>
  )
}

export default App