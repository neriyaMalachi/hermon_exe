import { useStore } from "../store";

function Inc() {
  const inc = useStore((state) => state.inc);

  return (
    <div>
      <button onClick={() => inc()}>inc</button>
    </div>
  );
}

export default Inc;
