import Animal from "./src/Animal.js";
import Dog from "./src/Dog.js";
import Cat from "./src/Cat.js";
import Zoo from "./src/Zoo.js";


const dog = new Dog("Rex");
const cat = new Cat("Mimi");
const animal = new Animal("Leo");

// polymorphism
console.log(dog.name, "says:", dog.speak());
console.log(cat.name, "says:", cat.speak());
console.log(animal.name, "says:", animal.speak());

console.log("\nEnergy before eating:", dog.getEnergy());
dog.eat(20);
console.log("Energy after eating:", dog.getEnergy());

// Create zoo
const zoo = new Zoo();
zoo.addAnimal(dog);
zoo.addAnimal(cat);
zoo.addAnimal(animal);

// Make all animals speak
console.log("\nZoo sounds:");
const sounds = zoo.makeAllSpeak();
console.log(sounds);

// Error example
console.log("\nTrying to add invalid animal:");
try {
  zoo.addAnimal("not an animal");
} catch (err) {
  console.log("Error caught:", err.message);
}

