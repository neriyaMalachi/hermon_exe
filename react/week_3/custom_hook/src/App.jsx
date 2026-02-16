import { Counter } from "./hooks/useCounter";

export default function App() {
  const { count, increment, decrement, reset } = Counter(0);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}