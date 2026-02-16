import { useState, useEffect } from "react";

export default function Username() {
  const [name, setName] = useState("idan");
  let a = 0;
  
  useEffect(() => {
    console.log("a", a);
  }, [a]);

  return (
    <div>
      <input
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h3>Hello {name}</h3>
      <button onClick={()=>{
        console.log("asfd");
        
        a++
        console.log(a);
        
        }}>click</button>
    </div>
  );
}
