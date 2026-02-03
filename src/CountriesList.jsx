import React, { useEffect, useState } from "react";

const CountriesList = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://xcountries-backend.labs.crio.do/all")
      .then((res) => {
        if (!res.ok) {
          throw new Error("API Error");
        }
        return res.json();
      })
      .then((data) => {
        setCountries(Array.isArray(data) ? data : []);
      })
      .catch((error) => {
        // ✅ EXACT message Crio expects
        console.error("Error fetching data: ", error);
        setCountries([]);
      });
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
      {countries.map((country, index) => (
        <div
          key={`${country.name}-${index}`}   // ✅ unique key
          data-testid="country-card"        // ✅ REQUIRED by Cypress
          style={{
            textAlign: "center",
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            backgroundColor: "#f9f9f9",
            width: "150px",
          }}
        >
          <img
            src={country.flag}
            alt={`Flag of ${country.name}`}   // ✅ correct alt
            style={{
              width: "80px",
              height: "50px",
              objectFit: "contain",
              borderRadius: "4px",
            }}
          />
          <p style={{ marginTop: "8px", fontWeight: "500" }}>
            {country.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CountriesList;
