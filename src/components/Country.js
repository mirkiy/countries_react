import React from "react";

const Country = ({ country, onFavouriteToggle, addSpacesToNumber }) => {
  if (!country) {
    return null;
  }

  const handleClick = () => {
    onFavouriteToggle(country.cca3);
  };
  const favouriteBtnText = country.favourite
    ? "Remove from favourite"
    : "Add to favourite";

  const formattedPopulation = addSpacesToNumber(country.population);
  return (
    <div className="country">
      <h3>Name: {country.name.official}</h3>
      <img
        src={country.flags.png}
        alt={`Flag of ${country.name.official}`}
      ></img>
      <h4>Capital city: {country.capital}</h4>
      <h4>Population: {formattedPopulation}</h4>
      <button className="favBtn" onClick={handleClick}>
        {favouriteBtnText}
      </button>
    </div>
  );
};

export default Country;
