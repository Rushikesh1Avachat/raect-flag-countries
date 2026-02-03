import React, { useEffect, useState } from "react";

const API_URL = "https://xcountries-backend.labs.crio.do/all";

const CountriesList = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(API_URL)
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
        // 🚨 EXACT string Cypress checks
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
        padding: "20px",
        justifyItems: "center",
      }}
    >
      {countries.map((country, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "12px",
            textAlign: "center",
            width: "150px",
          }}
        >
          <img
            src={country.flag}
            alt={`${country.name} flag`}
            style={{
              width: "80px",
              height: "50px",
              objectFit: "contain",
            }}
          />
          <p style={{ marginTop: "8px", fontWeight: "600" }}>
            {country.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CountriesList;
