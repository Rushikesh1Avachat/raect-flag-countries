import React, { useEffect, useState } from "react";

const API_URL = "https://xcountries-backend.labs.crio.do/all";

function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

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
        console.error("Error fetching data: ", error);
        setCountries([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>; // ✅ Cypress waits for this
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
        gap: "20px",
        padding: "20px",
      }}
    >
      {countries.map((country, index) => (
        <div
          key={`${country.name}-${index}`}
          data-testid="country-card"
          style={{
            textAlign: "center",
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "10px",
          }}
        >
          <img
            src={country.flag}
            alt={`Flag of ${country.name}`}
            style={{ width: "80px", height: "50px" }}
          />
          <p>{country.name}</p>
        </div>
      ))}
    </div>
  );
}

export default App;








