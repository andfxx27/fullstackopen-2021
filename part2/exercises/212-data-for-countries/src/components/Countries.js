import axios from "axios";
import React, { useEffect, useState } from "react";

const Countries = (props) => {
  const [weatherInfo, setWeatherInfo] = useState({});

  const defaultEmptyUi = <p>Start searching for countries information.</p>;

  const filteredCountries = props.countries.filter((country) => {
    const countryName = country.name.common.toLowerCase();
    const searchQuery = props.search.toLowerCase();
    return countryName.includes(searchQuery);
  });

  useEffect(async () => {
    if (filteredCountries.length == 1 || props.showSingleCountry != "") {
      let country;
      if (props.showSingleCountry != "") {
        country = filteredCountries.find(
          (country) => country.name.common == props.showSingleCountry
        );
      } else {
        country = filteredCountries[0];
      }

      const result = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`
      );

      console.log(result.data);

      setWeatherInfo({
        temp: result.data.main.temp - 273,
        wind: result.data.wind.speed,
      });
    }
  }, [props.countries]);

  if (props.search.length == 0) {
    return defaultEmptyUi;
  }

  if (filteredCountries.length == 0) {
    return defaultEmptyUi;
  }

  if (filteredCountries.length == 1 || props.showSingleCountry != "") {
    let country;
    if (props.showSingleCountry != "") {
      country = filteredCountries.find(
        (country) => country.name.common == props.showSingleCountry
      );
    } else {
      country = filteredCountries[0];
    }

    return (
      <>
        <h2>{country.name.common}</h2>
        <p>Capital {country.capital}</p>
        <p>Population {country.population}</p>

        <h3>Languages</h3>
        <ul>
          {Object.keys(country.languages).map((code) => {
            return (
              <li key={country.languages[code]}>{country.languages[code]}</li>
            );
          })}
        </ul>

        <img src={country.flags.png} />

        <h3>Weather in {country.capital}</h3>
        <p>
          <strong>Temperature: </strong>
          {weatherInfo.temp} Celcius
        </p>
        <p>
          <strong>Wind: </strong>
          {weatherInfo.wind} mph direction {"SSW"}
        </p>
      </>
    );
  }

  if (filteredCountries.length <= 10) {
    return (
      <ul>
        {filteredCountries.map((country) => {
          return (
            <li key={country.name.common}>
              {country.name.common}{" "}
              <button
                onClick={() => {
                  props.showSingleCountryOnClickHandler(country.name.common);
                }}
              >
                Show
              </button>
            </li>
          );
        })}
      </ul>
    );
  }

  if (filteredCountries.length > 10) {
    return <p>Too many matches, specify another filter.</p>;
  }
};

export default Countries;
