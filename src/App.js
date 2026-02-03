import { useEffect, useState } from "react";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // URL cleaned of leading spaces to ensure the Cypress request listener triggers
    fetch("https://xcountries-backend.labs.crio.do/all")
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((error) => {
        // Must use exact string "Error fetching data: " and console.error for test 4
        console.error("Error fetching data: ", error);
      });
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
  };

  return (
    <div style={containerStyle}>
      {countries.map((country) => (
        /* Using name as the key to avoid the 'xk' duplicate abbreviation error */
        <div key={country.name} style={cardStyle}>
          <img
            src={country.flag}
            alt={country.name} // Required for the alt-text test case
            style={imageStyle}
          />
          <p>{country.name}</p>
        </div>
      ))}
    </div>
  );
}

export default App;