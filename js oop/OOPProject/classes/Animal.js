
export default function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(`My name is ${this.name}`);
};


