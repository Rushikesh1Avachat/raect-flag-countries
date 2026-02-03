import React, { useEffect, useState } from "react";

const CountriesList = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          "https://xcountries-backend.labs.crio.do/all"
        );
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchCountries();
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
        gap: "20px",
        justifyItems: "center",
        padding: "20px",
      }}
    >
      {countries.map((country) => (
        <div
          key={country.abbr}
          style={{
            textAlign: "center",
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            backgroundColor: "#f9f9f9",
          }}
        >
          <img
            src={country.flag}
            alt={`${country.name} flag`}
            style={{ width: "80px", height: "50px", borderRadius: "4px" }}
          />
          <p style={{ marginTop: "8px", fontWeight: "500" }}>{country.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CountriesList;