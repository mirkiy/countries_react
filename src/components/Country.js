import React from "react";

const Country = ({country}) => {

if (!country) {
    return null
}



return (
    <>
    <h3>Name: {country.name.official}</h3>
    <img source={country.flags.png} alt={`Flag of ${country.name.official}`}></img>
   <h4>Capital city: {country.capital}</h4>
   <h4>Population: {country.population}</h4>
    </>
)
}

export default Country;