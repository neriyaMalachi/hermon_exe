// example without useRef
// -------------------------------
// import { useState } from "react";
// import "./App.css";

// function App() {
//  const [count, setCount] = useState(0);

//   const handleClick = () => {
//     setCount(count + 1);
//     console.log("state:", count + 1);
//   };
//   return (
//     <div>
//       <h2>State count: {count}</h2>
//       <button onClick={handleClick}>Increase</button>
//     </div>
//   );
// }

// export default App;

// example with useRef
// -------------------------------
// import { useRef } from "react";
// import "./App.css";

// function App() {
//    const countRef = useRef(0);

//   const handleClick = () => {
//     countRef.current++;
//     console.log("ref:", countRef.current);
//   };

//   return (
//     <div>
//        <h2>Ref count: {countRef.current}</h2>
//       <button onClick={handleClick}>Increase</button>
//     </div>
//   );
// }

// export default App;
import David from "./david";

export default function App() {
  let count = 0;
  function handleClick() {
    count++;
    console.log(count);
  }

  return (
    <>
      <David />
      <button onClick={handleClick}>Click</button>
    </>
  );
}
