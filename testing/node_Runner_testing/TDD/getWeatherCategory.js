export function getWeatherCategory(temp) {
  if (temp < 0) return "freezing";
  if (temp <= 15) return "cold";
  if (temp <= 25) return "cool";
  if (temp <= 35) return "warm";
  return "hot";
}
