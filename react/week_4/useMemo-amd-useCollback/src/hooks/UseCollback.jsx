import { useState, useCallback } from "react";

export default function UseCollback() {
  const [count, setCount] = useState(0);

  const increase = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>Add</button>
    </div>
  );
}