import { useState } from "react";

function David() {
  const [username, setUserName] = useState("");
  return (
    <div>
      <p>{username}</p>
      <input type="text" onChange={(e) => setUserName(e.target.value)} />
    </div>
  );
}
    
export default David;
