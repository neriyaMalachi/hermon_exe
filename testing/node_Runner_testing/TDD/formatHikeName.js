export function formatHikeName(name, location) {
  if (!name || !location) return "Invalid hike info";
  return `Hike: ${name} (${location})`;
}
