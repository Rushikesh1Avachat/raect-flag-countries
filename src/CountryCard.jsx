import { Card, CardContent, CardMedia, Typography } from "@mui/material";

function CountryCard({ name, flag }) {
  return (
    <Card
      data-testid="country-card"
      sx={{
        width: 150,
        textAlign: "center",
        borderRadius: 2,
        boxShadow: 3,
        m: "auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia
        component="img"
        image={flag}
        alt={`${name} flag`}
        sx={{
          height: 100,        // uniform flag height
          objectFit: "cover", // ensures flags fill the space without distortion
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
        }}
      />
      <CardContent sx={{ p: 1 }}>
        <Typography variant="body2" noWrap>
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CountryCard;

