export function kmToMeters(km) {
  if (typeof km !== "number" || Number.isNaN(km)) {
    throw new TypeError("km must be a valid number");
  }
  return km * 1000;
}