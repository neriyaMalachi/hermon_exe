import test, { describe } from "node:test";
import assert from "node:assert/strict";
import { caloriesBurned } from "./calories.js";

describe("caloriesBurned group", () => {
  test("caloriesBurned regular input", () => {
    const result = caloriesBurned(70, 5);
    // לא משווים float בדיוק מוחלט — עושים טולרנס קטן
    assert.ok(Math.abs(result - 362.6) < 0.0001);
  });

  test("caloriesBurned throws on zero weight", () => {
    assert.throws(() => caloriesBurned(0, 5));
  });

  test("caloriesBurned works with decimal distance", () => {
    const result = caloriesBurned(80, 3.5);
    assert.ok(Math.abs(result - 80 * 3.5 * 1.036) < 0.0001);
  });
});
