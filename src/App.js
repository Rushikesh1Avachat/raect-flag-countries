import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  CircularProgress,
} from "@mui/material";

const API_URL = "https://xcountries-backend.labs.crio.do/all";

function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        const data = await res.json();
        setCountries(data);
      } catch (error) {
        // Crio test expects console.error with the error
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  if (loading)
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <CircularProgress data-testid="loading-spinner" />
        <Typography
          variant="h6"
          data-testid="loading-text"
          style={{ marginTop: "10px" }}
        >
          Loading...
        </Typography>
      </div>
    );

  return (
    <Grid container spacing={3} padding={3}>
      {countries.map((country, index) => (
        <Grid
          item
          xs={6}
          sm={4}
          md={3}
          lg={2}
          key={`${country.name}-${country.flag}-${index}`} // ensures unique keys
        >
          <Card data-testid="country-card" sx={{ textAlign: "center" }}>
            <CardMedia
              component="img"
              image={country.flag}
              alt={`${country.name} flag`}
              sx={{ width: "80px", height: "50px", margin: "10px auto" }}
            />
            <CardContent>
              <Typography variant="body1" fontWeight={500}>
                {country.name}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default App;









