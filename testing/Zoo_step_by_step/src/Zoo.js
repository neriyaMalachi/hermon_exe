import Animal from "./Animal.js";

export default class Zoo {
  #animals;

  constructor() {
    this.#animals = [];
  }

  addAnimal(animal) {
    if (!(animal instanceof Animal)) {
      throw new Error("Only Animal instances can be added to the zoo");
    }

    this.#animals.push(animal);
  }

  makeAllSpeak() {
    return this.#animals.map((a) => a.speak());
  }
}
