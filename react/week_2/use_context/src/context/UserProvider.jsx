import { createContext, useState } from "react";

const UserContext = createContext();

function UserProvider({ children }) {
  const [name, setName] = useState("neriya");

  return (
    <UserContext value={{ name, setName}}>
      {children}
    </UserContext>
  );
}

export { UserContext, UserProvider };
