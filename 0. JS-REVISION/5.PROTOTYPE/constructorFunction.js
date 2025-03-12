function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Car(make, model) {
  this.make = make;
  this.model = model;
}

let myCar = new Car("Mahindra", "Thar");
// console.log(myCar);

let myNewCar = new Car("Tata", "safari");
// console.log(myNewCar);

function Tea(name) {
  this.name = name;
  this.describe = function () {
    return `this is a cup of ${this.name}`;
  };
}

let chai = new Tea("chai");
// console.log(chai);
// console.log(chai.describe());

function Animal(species) {
  this.species = species;
}

Animal.prototype.sound = function () {
  return `${this.species} make a sound`;
};

let pekachu = new Animal("pekachu");
// console.log(pekachu.sound());

function Drink(name) {
  if (!new.target) {
    throw new Error("Must be called with new Keyword");
  }
  this.name = name;
}

let chaiTea = Drink("chai");
console.log(chaiTea);
