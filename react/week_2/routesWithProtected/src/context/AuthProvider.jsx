import React, { createContext, useState } from "react";

const NeriyaAuth = createContext(null);
export function AuthProvider({ children }) {
  const [name, setName] = useState("");
  return <NeriyaAuth value={{ name, setName }}>{children}</NeriyaAuth>;
}

export { NeriyaAuth };
