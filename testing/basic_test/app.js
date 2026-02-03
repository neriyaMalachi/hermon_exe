

export function subNumbers(num1, num2) {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    throw new Error("numbers not invalid");
  }

  return num1 - num2;
}
