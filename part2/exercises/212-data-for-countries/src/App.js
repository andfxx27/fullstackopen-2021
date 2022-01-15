import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Countries from "./components/Countries";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [showSingleCountry, setShowSingleCountry] = useState("");

  const handleSearchInputOnChange = (event) => {
    setSearch(event.target.value);
    setShowSingleCountry("");
  };

  const showSingleCountryOnClickHandler = (name) => {
    setShowSingleCountry(name);
  };

  useEffect(async () => {
    const result = await axios.get("https://restcountries.com/v3.1/all");
    const countries = result.data;
    setCountries(countries);
  }, []);

  return (
    <div>
      <h1>Countries information</h1>
      <p>Find countries</p>
      <input value={search} onChange={handleSearchInputOnChange} />
      <Countries
        countries={countries}
        search={search}
        showSingleCountry={showSingleCountry}
        showSingleCountryOnClickHandler={showSingleCountryOnClickHandler}
      />
    </div>
  );
};

export default App;
