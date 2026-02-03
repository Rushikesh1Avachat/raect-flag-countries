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
    fetch("https://xcountries-backend.labs.crio.do/all")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setCountries(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <CircularProgress />
        <Typography variant="h6" style={{ marginTop: "10px" }}>
          Loading...
        </Typography>
      </div>
    );
  }

  return (
    <Grid container spacing={3} padding={3}>
      {countries.map((country, index) => (
        <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
          <Card data-testid="country-card" sx={{ textAlign: "center" }}>
            <CardMedia
              component="img"
              image={country.flag}
              alt={`${country.name} flag`}
              sx={{
                width: "80px",
                height: "50px",
                margin: "10px auto",
              }}
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









