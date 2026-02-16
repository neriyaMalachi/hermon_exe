import { createContext, useState } from "react";
import { fakeUsers } from "./fakeUsers";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  function login(email, password) {
    const found = fakeUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (found) setUser(found);
    return found; 
  }

  function logout() {
    setUser(null);
  }

  return (
    <AuthContext value={{ user, login, logout }}>
      {children}
    </AuthContext>
  );
}
export {AuthContext}
