import useCalc from "./hooks/useCalc";

export default function App() {
  const { value, Sub5, Add5, Reset } = useCalc(10);

  return (
    <div>
      <section style={{ border: "1px solid" }}>
        <p>calc hook</p>
        <h2>{value}</h2>
        <button onClick={() => Add5(2)}>add + 5</button>
        <button onClick={Sub5}>sub - 5</button>
        <button onClick={Reset}>reset</button>
      </section>
    </div>
  );
}
