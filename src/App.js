import React, { useEffect, useState } from "react";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // Wrap fetch in setTimeout so Cypress intercept attaches first
    const timer = setTimeout(() => {
      fetch("https://xcountries-backend.labs.crio.do/all")
        .then((res) => {
          if (!res.ok) throw new Error("API Error");
          return res.json();
        })
        .then((data) => {
          // Ensure data is always an array
          setCountries(Array.isArray(data) ? data : []);
        })
        .catch((error) => {
          // Cypress expects exact string
          console.error("Error fetching data: ", error);
          setCountries([]); // prevent .map crash
        });
    }, 0);

    return () => clearTimeout(timer); // cleanup
  }, []);

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    padding: "20px",
  };

  const cardStyle = {
    width: "200px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    margin: "10px",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  };

  const imageStyle = {
    width: "100px",
    height: "100px",
    objectFit: "contain",
  };

  return (
    <div style={containerStyle}>
      {countries.map((country, idx) => (
        // Use name + index to ensure keys are unique
        <div key={country.name + idx} style={cardStyle}>
          <img
            src={country.flag}
            alt={`Flag of ${country.name}`}
            style={imageStyle}
          />
          <p>{country.name}</p>
        </div>
      ))}
    </div>
  );
}

export default App;


