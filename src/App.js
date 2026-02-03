import { useEffect, useState } from "react";
import axios from "axios";
import CountryCard from "./CountryCard";

function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://xcountries-backend.labs.crio.do/all")
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      })
      .finally(() => {
        setLoading(false);
      });
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
          key={index}
          name={country.name}
          flag={country.flag}
        />
      ))}
    </div>
  );
}

export default App;











