import React, { useEffect, useState } from "react";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // ✅ Cypress-safe microtask delay
    Promise.resolve().then(() => {
      fetch("https://xcountries-backend.labs.crio.do/all")
        .then((res) => {
          if (!res.ok) throw new Error("API Error");
          return res.json();
        })
        .then((data) => {
          setCountries(Array.isArray(data) ? data : []);
        })
        .catch((error) => {
          // Cypress expects this exact log
          console.error("Error fetching data: ", error);
          setCountries([]);
        });
    });
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {countries.map((country, idx) => (
        <div key={`${country.name}-${idx}`}>
          <img src={country.flag} alt={`Flag of ${country.name}`} />
          <p>{country.name}</p>
        </div>
      ))}
    </div>
  );
}

export default App;






