import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const API_URL = "https://xcountries-backend.labs.crio.do/all";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <Container maxWidth="lg" sx={{ marginTop: 4 }}>
      <Grid container spacing={3}>
        {countries.map((country) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={country.name}>
            <Card
              sx={{
                height: "100%",
                textAlign: "center",
                paddingTop: 2,
              }}
            >
              <CardMedia
                component="img"
                image={country.flag}
                alt={`${country.name} flag`}
                sx={{
                  height: 100,
                  objectFit: "contain",
                }}
              />
              <CardContent>
                <Typography variant="subtitle1" fontWeight="bold">
                  {country.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default App;

