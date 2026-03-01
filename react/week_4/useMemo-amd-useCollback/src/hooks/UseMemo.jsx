import React, { useMemo } from "react";
// save big calculate
function UseMemo() {
  const numbers = [1, 2, 3, 4, 5];
  const sum = useMemo(() => {
    return numbers.reduce((a, b) => a + b, 0);
  }, [numbers]);
  return (
    <div>
      <p>useMemo</p>
      <p>{sum}</p>
    </div>
  );
}

export default UseMemo;
