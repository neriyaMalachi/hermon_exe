import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div
      style={{
        background: "silver",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <Link to={"/"}>home</Link>
      <Link to={"/login"}>login</Link>
      <Link to={"/contact"}>contact</Link>
    </div>
  );
}

export default Navbar;
