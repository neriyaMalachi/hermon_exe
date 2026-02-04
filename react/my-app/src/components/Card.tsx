import React from "react";

function Card({ children }) {
  return (
    <div
      style={{
        border: "2px solid #ddd",
        borderRadius: "12px",
        padding: "16px",
        maxWidth: "500px",
        margin: "20px auto",
      }}
    >
      {children}

    </div>
  );
}

export default Card;
