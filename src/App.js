import React, { useEffect, useState } from "react";

const API_URL = "https://xcountries-backend.labs.crio.do/all";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) {
          throw new Error("API Error");
        }
        return res.json();
      })
      .then((data) => setCountries(data))
      .catch(() => {
        console.error("Error fetching countries");
      });
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: "16px",
        padding: "16px",
      }}
    >
      {countries.map((country) => (
        <div
          key={country.name}
          data-testid="country-card"
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "16px",
            textAlign: "center",
          }}
        >
          <img
            src={country.flag}
            alt="flag"
            style={{
              width: "100px",
              height: "60px",
              objectFit: "contain",
            }}
          />
          <h3>{country.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default App;
