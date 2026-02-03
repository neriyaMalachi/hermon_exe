import { Car } from "./Car.js";

export function Tesla(brand) {
  // call parent constructor
  Car.call(this, brand);
}

// inheritance prototype
Tesla.prototype = Object.create(Car.prototype);

// fix constructor reference
Tesla.prototype.constructor = Tesla;

// override fuel()
Tesla.prototype.fuel = function () {
  console.log("charging battery...");
};





