import { useState } from "react";
import * as z from "zod";

function App() {
  const User = z.object({
    name: z.number("no number"),
  });
  
  const [name, setName] = useState("9");
  const data = User.safeParse({ name: name });


  console.log(data.error.issues[0].message);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <p>{data.error.issues[0].message}</p>
    </div>
  );
}

export default App;
