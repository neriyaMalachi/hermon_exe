import React, { useState } from "react";

export default function useToggle(defaulteValue) {
  const [value, setValue] = useState(defaulteValue);

  function toggle() {
    setValue(!value);
  }
  function setTrue() {
    setValue(true);
  }
  function setFalse() {
    setValue(false);
  }
  return { value, toggle, setTrue, setFalse };
}
