import React from "react";

const CountryCard = ({ name, flag }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "10px",
        width: "150px",
        textAlign: "center",
      }}
    >
      <img
        src={flag}
        alt={name}
        style={{ width: "100px", height: "100px" }}
      />
      <h2>{name}</h2>
    </div>
  );
};

export default CountryCard;
