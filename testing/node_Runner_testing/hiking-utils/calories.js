export function caloriesBurned(weightInKg, distanceInKm) {
  if (typeof weightInKg !== "number" || typeof distanceInKm !== "number") {
    throw new TypeError("weightInKg and distanceInKm must be numbers");
  }
  if (Number.isNaN(weightInKg) || Number.isNaN(distanceInKm)) {
    throw new TypeError("Inputs must be valid numbers");
  }
  if (weightInKg <= 0) {
    throw new RangeError("weightInKg must be greater than 0");
  }
  if (distanceInKm < 0) {
    throw new RangeError("distanceInKm must be 0 or greater");
  }

  return weightInKg * distanceInKm * 1.036;
}