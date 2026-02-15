import { useContext } from "react";
import { UserContext } from "../context/UserProvider";

export default function Profile() {
  const {name} = useContext(UserContext);

  return (
    <div style={{ padding: 12 }}>
      <h3>User Profile</h3>
      <p>
        <b>Name:</b> {name}
      </p>
   
    </div>
  );
}
