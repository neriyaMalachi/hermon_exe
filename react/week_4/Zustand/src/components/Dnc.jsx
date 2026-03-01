import { useStore } from "../store";

function Dnc() {
  const dnc = useStore((state) => state.dnc);

  return (
    <div>
      <button onClick={() => dnc()}>dnc</button>
    </div>
  );
}

export default Dnc;
