import { useContext } from "react";
import { UserContext } from "../context/UserProvider";

export default function Navbar() {
  const { age } = useContext(UserContext);
  console.log("age");

  return (
    <header style={{ padding: 12, borderBottom: "1px solid #ddd" }}>
      <h2>Welcome, {age}</h2>
    </header>
  );
}
