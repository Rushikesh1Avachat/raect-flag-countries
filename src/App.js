import React, { useEffect, useState } from "react";
import { Grid, Card, CardContent, CardMedia, Typography, CircularProgress, Box } from "@mui/material";

const API_URL = "https://xcountries-backend.labs.crio.do/all";

 function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error("API Error");
        const data = await res.json();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching data:", error); // Cypress expects this
      } finally {
        setLoading(false); // ensures Loading... disappears
      }
    };

    fetchCountries();
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <CircularProgress />
        <Typography ml={2}>Loading...</Typography>
      </Box>
    );
  }

  return (
    <Box p={2}>
      <Grid container spacing={2}>
        {countries.map((country, idx) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={country.name + idx}>
            <Card data-testid="country-card">
              <CardMedia
                component="img"
                height="140"
                image={country.flag}
                alt={`Flag of ${country.name}`}
                sx={{ objectFit: "contain" }}
              />
              <CardContent>
                <Typography variant="h6" align="center">
                  {country.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
export default App
