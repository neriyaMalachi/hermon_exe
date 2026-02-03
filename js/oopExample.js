class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  describe() {
    return `${this.name} (${this.age})`;
  }
}

class Teacher extends Person {
  constructor(name, age, baseSalary) {
    super(name, age);
    this.baseSalary = baseSalary;
  }
  paySlip() {
    return `Teacher ${this.describe()} earns ${this.baseSalary}₪`;
  }
}

class Student extends Person {
  constructor(name, age, classes = []) {
    super(name, age);
    this.classes = classes;
  }
  addClass(cls) { this.classes.push(cls); }
  describe() {
    return `${super.describe()} | classes: ${this.classes.join(", ") || "none"}`;
  }
}

const t = new Teacher("Avi", 40, 12000);
const s = new Student("Noa", 18, ["Math"]);
s.addClass("JS");
console.log(t.paySlip());
console.log(s.describe());
