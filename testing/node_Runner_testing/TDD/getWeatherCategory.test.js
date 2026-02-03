import test from "node:test";
import assert from "node:assert/strict";
import { getWeatherCategory } from "./getWeatherCategory.js";

test("10 is cold", () => {
  assert.equal(getWeatherCategory(10), "cold");
});

test("38 is hot", () => {
  assert.equal(getWeatherCategory(38), "hot");
});

test("-2 is freezing", () => {
  assert.equal(getWeatherCategory(-2), "freezing");
});

test("20 is cool", () => {
  assert.equal(getWeatherCategory(20), "cool");
});

test("30 is warm", () => {
  assert.equal(getWeatherCategory(30), "warm");
});
