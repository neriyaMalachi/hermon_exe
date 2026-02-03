import test from "node:test";
import assert from "node:assert/strict";

import Animal from "../src/Animal.js";
import Dog from "../src/Dog.js";
import Cat from "../src/Cat.js";
import Zoo from "../src/Zoo.js";

test("Animal.eat() increases energy but never above 100", () => {
  const a = new Animal("Leo");

  a.eat(50);
  assert.equal(a.getEnergy(), 100);

  assert.throws(() => a.eat(-5));
  assert.throws(() => a.eat("10"));
});

test("Dog.speak() returns Woof! and Cat.speak() returns Meow!", () => {
  const d = new Dog("Rex");
  const c = new Cat("Mimi");

  assert.equal(d.speak(), "Woof!");
  assert.equal(c.speak(), "Meow!");
});

test("Zoo.addAnimal() throws error when adding non-Animal", () => {
  const zoo = new Zoo();

  assert.throws(() => zoo.addAnimal({ name: "Fake" }));
  assert.throws(() => zoo.addAnimal("not an animal"));
});

test("Zoo.makeAllSpeak() returns correct array in order", () => {
  const zoo = new Zoo();

  zoo.addAnimal(new Dog("Rex"));
  zoo.addAnimal(new Cat("Mimi"));

  const sounds = zoo.makeAllSpeak();
  assert.deepEqual(sounds, ["Woof!", "Meow!"]);
});
