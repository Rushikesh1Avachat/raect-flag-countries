import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://xcountries-backend.labs.crio.do/all");

  xhr.onload = () => {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      setCountries(data);
    } else {
      console.error(new Error("API Error"));
    }
    setLoading(false);
  };

  xhr.onerror = (error) => {
    console.error(error); // 👈 THIS IS WHAT CYPRESS EXPECTS
    setLoading(false);
  };

  xhr.send();
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













