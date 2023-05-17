import React, { useState, useEffect } from "react";
import Country from "../components/Country";
import CountryList from "../components/CountryList";
import FavouriteCountries from "../components/FavouriteCountries";

const CountriesContainer = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountryCCA3Code, setSelectedCountryCCA3Code] = useState("");

  useEffect(() => {
    getCountries();
  }, []);

  const getCountries = () => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((countriesData) => setCountries(countriesData));
  };

  console.log(countries);

  const handleCountrySelected = (cca3) => {
    setSelectedCountryCCA3Code(cca3);
  };

  const totalPopulation = countries.reduce((total, country) => {
    return total + country.population;
  }, 0);

  const selectedCountry = countries.find(
    (country) => country.cca3 === selectedCountryCCA3Code
  );

  const handleFavouriteToggle = (cca3) => {
    const updatedCountry = countries.map((country) => {
      if (country.cca3 === cca3) {
        country.favourite = !country.favourite;
      }
      return country;
    });
    setCountries(updatedCountry);
  };
  return (
    <div className="mainContainer">
    <div className="heading">
      <h1>Countries Container</h1>
      <p>Total population: {totalPopulation}</p>
      </div>
      <CountryList
        countries={countries}
        onCountrySelected={handleCountrySelected}
      />
      <Country
        country={selectedCountry}
        onFavouriteToggle={handleFavouriteToggle}
      />
      <FavouriteCountries
        countries={countries}
        onCountrySelected={handleCountrySelected}
      />
    </div>
  );
};
export default CountriesContainer;
