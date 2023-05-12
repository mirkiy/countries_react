import React from "react";

const CountryList = ({ countries }) => {
  const countryList = countries.map((country) => {
    return (
      <>
        <li>{country.name.official} (population: {country.population})</li>
        <h5>capital city: {country.capital}</h5>
      </>
    );
  });

  return <ul>{countryList}</ul>;
};

export default CountryList;
