class Person {
  constructor(name) {
    this.name = name;
  }
}

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

const person = new Person("shivam");
person.greet();