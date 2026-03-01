import React from 'react'
import { useStore } from '../store';

function Number() {
  const number = useStore((state) => state.count);
console.log("number renter");

  return (
    <div>{number}</div>
  )
}

export default Number