import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://xcountries-backend.labs.crio.do/all")
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((error) => {
        console.error("Error fetching data: ", error);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      {countries.map((country, index) => (
        <CountryCard
          key={index}          // 👈 prevents duplicate key failures
          name={country.name}
          flag={country.flag}
        />
      ))}
    </div>
  );
}

export default App;











