import Animal from "./Animal.js";

export default class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  speak() {
    return "Woof!";
  }
}
