import  { useState } from "react";

function useCalc(number) {
  const [value, setValue] = useState(number);
  function Sub5() {
    setValue(value - 5);
  }
  function Add5(a) {
    setValue(value + a );
  }
  function Reset() {
    setValue(number);
  }

  return { value, Sub5, Add5, Reset };
}

export default useCalc;
