import { useEffect, useState } from "react";
import { Grid, CircularProgress, Box } from "@mui/material";
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
        console.error("Error fetching data:", new Error(`Status ${xhr.status}`));
      }
      setLoading(false);
    };

    xhr.onerror = (error) => {
      console.error("Error fetching data:", error);
      setLoading(false);
    };

    xhr.send();
  }, []);

  if (loading)
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress />
      </Box>
    );

  return (
    <Box p={3}>
      <Grid container spacing={3}>
        {countries.map((country, index) => (
          <Grid item xs={6} sm={4} md={3} lg={2} key={`${country.name}-${index}`}>
            <CountryCard name={country.name} flag={country.flag} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default App;















