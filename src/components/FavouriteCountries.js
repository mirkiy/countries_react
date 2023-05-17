import React from "react";

const FavouriteCountries = ({ countries, onCountrySelected }) => {
  const favouriteCountries = countries.filter((country) => country.favourite);

  return (
    <div className="favouriteCountries">
      <h3>Favourite Countries:</h3>
      <ul>
        {favouriteCountries.map((country) => {
          return (
            <li key={country.cca3}  onClick={() => {
                  onCountrySelected(country.cca3);
                }}>
              {/* <button className="favCountry"
                onClick={() => {
                  onCountrySelected(country.cca3);
                }}
              > */}
                {" "}
                {country.name.official}
              {/* </button> */}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default FavouriteCountries;
