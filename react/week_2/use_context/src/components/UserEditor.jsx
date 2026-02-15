import { useContext } from "react";
import { UserContext } from "../context/UserProvider";

export default function UserEditor() {
  const { name, setName } = useContext(UserContext);

  return (
    <div style={{ padding: 12, borderTop: "1px solid #ddd" }}>
      <h3>Edit User</h3>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: 8, marginRight: 8 }}
      />

      <button style={{ padding: "8px 12px" }}>Save Name</button>
    </div>
  );
}
