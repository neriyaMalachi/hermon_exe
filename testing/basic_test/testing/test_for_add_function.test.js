import { subNumbers } from "../app.js";
import test from "node:test";
import assert from "node:assert/strict";




test("numbers: sub function test", () => {assert.equal(subNumbers("2", 2), 0);});

test("sum function test drope error", () => { assert.throws(() => subNumbers("2", 2));});
