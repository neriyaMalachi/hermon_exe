import { useContext } from "react";
import { UserContext } from "../context/UserProvider";

export default function Navbar() {

  const {name} = useContext(UserContext);

  return (
    <header style={{ padding: 12, borderBottom: "1px solid #ddd" }}>
      <h2>Welcome, {name}</h2>
    </header>
  );
}
