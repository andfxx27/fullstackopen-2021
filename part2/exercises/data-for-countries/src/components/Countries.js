import React from 'react'
import '../App.css'
import Country from './Country'
import FilteredCountries from './FilteredCountries'

const Countries = (props) => {
  if (props.filter === '') {
    return (
      <p>Enter a search query first!</p>
    )
  }

  const filteredCountries = props.countries.filter(
    country => country.name.toLowerCase().includes(props.filter.toLowerCase())
  )

  // Show specific country for clicked filtered countries
  if (props.showSpecificCountry !== '') {
    const country = filteredCountries.find(
      country => country.name === props.showSpecificCountry
    )

    return (
      <Country
        country={country}
      />
    )
  }

  if (filteredCountries.length > 10) {
    return (
      <p>Too many matches, specify another filter!</p>
    )
  }

  if (filteredCountries.length <= 10) {
    // Filtered countries' length is between 2 and 10 countries
    if (filteredCountries.length > 1) {
      return (
        <FilteredCountries
          countries={filteredCountries}
          onClick={props.showSpecificCountryOnClick}
        />
      )
    }

    // Filtered countries' length is exactly 1
    if (filteredCountries.length === 1) {
      const country = filteredCountries[0]

      return (
        <Country 
          country={country}
        />
      )
    }
  }

  return (
    <p>No countries match the query.</p>
  )
}
  
export default Countries