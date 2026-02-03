import Animal from "./Animal.js";

// Dog constructor function – called with `new`
export default function Dog(name) {

// Runs the Animal constructor on the Dog instance
// Equivalent to `super(name)`
  Animal.call(this, name);

}

// Sets up inheritance: Dog inherits from Animal
Dog.prototype = Object.create(Animal.prototype);

// Fixes the constructor reference back to Dog
Dog.prototype.constructor = Dog;

// Adds a Dog-specific method
Dog.prototype.bark = function () {
  console.log("Woof!");
};
