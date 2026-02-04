import { useState } from "react";

function App() {
  const [num, setNum] = useState(0);
  return (
    <div className="">
      <p>{num}</p>
      <button
        onClick={() => {
          setNum(num + 1);
          console.log(num);
        }}
      >
        num + 1
      </button>
    </div>
  );
}

export default App;
