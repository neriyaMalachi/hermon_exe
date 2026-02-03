export function Car(brand) {
  this.brand = brand;
}

// methods on prototype
Car.prototype.drive = function () {
  console.log("vrrroooomm");
};

Car.prototype.fuel = function () {
  console.log("putting gas...");
};

