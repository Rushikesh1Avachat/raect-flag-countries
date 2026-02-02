import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";

const API_URL = "https://xcountries-backend.labs.crio.do/all";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        {countries.map((country) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={country.name}
          >
            <Card
              elevation={0}
              sx={{
                height: "100%",
                border: "1px solid #e0e0e0",
                borderRadius: "8px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: 2,
              }}
            >
              <Box
                sx={{
                  height: 100,
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <CardMedia
                  component="img"
                  image={country.flag}
                  alt={country.name}
                  sx={{
                    maxHeight: "100%",
                    maxWidth: "100%",
                    objectFit: "contain",
                  }}
                />
              </Box>

              <CardContent sx={{ paddingBottom: "16px !important" }}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontFamily: "serif",
                    fontWeight: 600,
                    textAlign: "center",
                  }}
                >
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

