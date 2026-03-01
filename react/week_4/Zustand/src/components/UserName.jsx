import React from "react";
import { useStore } from "../store";

function UserName() {
  const  name  = useStore((state) => state.name);
  console.log(name);

  return <div>UserName:{name}</div>;
}

export default UserName;
