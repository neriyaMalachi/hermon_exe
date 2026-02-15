import { useState } from "react";
import { UserContext } from "./UserContext";

export default function UserProvider({ children }) {
  const [name, setName] = useState("neriya");

  return (
    <UserContext value={{name, setName}}>
      {children}
    </UserContext>
  );
}
