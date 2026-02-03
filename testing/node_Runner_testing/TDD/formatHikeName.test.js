import test from "node:test";
import assert from "node:assert/strict";
import { formatHikeName } from "./formatHikeName.js";

test("formats hike name correctly", () => {
  assert.equal(formatHikeName("Forest Loop", "Galilee"), "Hike: Forest Loop (Galilee)");
});

test("returns invalid when name is missing", () => {
  assert.equal(formatHikeName("", "Negev"), "Invalid hike info");
});

test("returns invalid when location is missing", () => {
  assert.equal(formatHikeName("Desert Trail", ""), "Invalid hike info");
});
