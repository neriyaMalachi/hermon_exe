import test from "node:test";
import assert from "node:assert/strict";
import { kmToMeters } from "./distanceUtils.js";

test("kmToMeters converts km to meters", () => {
  assert.equal(kmToMeters(2), 2000);
});

test("kmToMeters handles zero", () => {
  assert.equal(kmToMeters(0), 0);
});

test("kmToMeters handles negative values", () => {
  assert.equal(kmToMeters(-1.5), -1500);
});
