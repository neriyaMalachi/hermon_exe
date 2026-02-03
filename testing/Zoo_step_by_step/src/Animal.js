export default class Animal {
  name;
  #energy;

  constructor(name) {
    this.name = name;
    this.#energy = 100;
  }

  getEnergy() {
    return this.#energy;
  }

  eat(amount) {
    if (typeof amount !== "number" || amount <= 0) {
      throw new Error("amount must be a positive number");
    }

    this.#energy += amount;

    if (this.#energy > 100) {
      this.#energy = 100;
    }
  }

  speak() {
    return "sound";
  }
}
