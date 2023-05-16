import React from "react";

const Country = ({country, onFavouriteToggle}) => {

if (!country) {
    return null
}

const handleClick = () => {
    onFavouriteToggle(country.cca3)
}
const favouriteBtnText = country.favourite ? "Remove from favourite" : "Add to favourite"

return (
    <>
    <h3>Name: {country.name.official}</h3>
    <img source={country.flags.png} alt={`Flag of ${country.name.official}`}></img>
   <h4>Capital city: {country.capital}</h4>
   <h4>Population: {country.population}</h4>
   <button onClick={handleClick}>{favouriteBtnText}</button>
    </>
)
}

export default Country;