import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  CircularProgress,
} from "@mui/material";

function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://xcountries-backend.labs.crio.do/all") // exact URL Cypress expects
      .then(res => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then(data => {
        setCountries(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
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
          key={`${country.name}-${country.flag}-${index}`} // unique keys
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









