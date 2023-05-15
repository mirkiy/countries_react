import React from "react";

const Country = ({country}) => {

if (!country) {
    return null
}



return (
    <h3>Name: {country.name.official}</h3>
)
}

export default Country;