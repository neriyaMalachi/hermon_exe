import Animal from "./Animal.js";

export default class Cat extends Animal {
  constructor(name) {
    super(name);
  }

  speak() {
    return "Meow!";
  }
}
