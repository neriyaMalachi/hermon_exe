import { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";

export default function Dashboard() {
  const { user } = useContext(AuthContext);

  return (
    <div style={{ padding: 16 }}>
      <h2>Dashboard (Protected)</h2>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
    </div>
  );
}