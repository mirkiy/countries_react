import React, { useState, useEffect } from "react";
import Country from "../components/Country";
import CountryList from "../components/CountryList";

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


  const selectedCountry = countries.find(country => country.cca3 === selectedCountryCCA3Code)

  return (
    <>
      <h1>Countries Container</h1>

      <CountryList
        countries={countries}
        onCountrySelected={handleCountrySelected}
      />
      <Country country={selectedCountry}/>
    </>
  );
};
export default CountriesContainer;
