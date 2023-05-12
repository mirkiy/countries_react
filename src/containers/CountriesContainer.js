import React, { useState, useEffect } from "react";
import CountryList from "../components/CountryList";

const CountriesContainer = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries();
  }, []);

  const getCountries = () => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((countriesData) => setCountries(countriesData));
  };

  console.log(countries);

  // const countryList = countries.map((country) => {
  //   return <li>{country.name.common}</li>;
  // });

  return (
    <>
      <h1>Countries Container</h1>
     
     <CountryList countries={countries}/>
      {/* <ul>{countryList}</ul> */}
    </>
  );
};
export default CountriesContainer;
