import { createContext, useState } from "react";

const UserContext = createContext();

function UserProvider({ children }) {
  const [name, setName] = useState("neriya");
  const [age, setAge] = useState(25);

  return (
    <UserContext value={{ name, setName, age, setAge }}>{children}</UserContext>
  );
}

export { UserContext, UserProvider };
