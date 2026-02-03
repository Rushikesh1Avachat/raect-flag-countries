function CountryCard({ name, flag }) {
  return (
    <div
      data-testid="country-card"
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "10px",
        width: "150px",
        textAlign: "center",
      }}
    >
      <img
        src={flag}
        alt={`${name} flag`}
        style={{ width: "100%", borderRadius: "4px" }}
      />
      <p>{name}</p>
    </div>
  );
}

export default CountryCard;
