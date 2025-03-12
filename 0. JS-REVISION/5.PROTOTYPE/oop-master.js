let car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  start: function () {
    return `${this.make} car got started in ${this.year}.`;
  },
};

// console.log(car.start());

function Person(name, age) {
  this.name = name;
  this.age = age;
}

let shivam = new Person("shivam", 20);
// console.log(shivam);

function Animal(type) {
  this.type = type;
}

Animal.prototype.speak = function () {
  return `${this.type} makes a sound`;
};

const cat = new Animal("cat");
// console.log(cat.speak());

Array.prototype.shivam = function () {
  return `Custom method ${this}`;
};

let myArray = [1, 2, 3, 4];
// console.log(myArray.shivam());

let myNewArray = [1, 2, 3, 4, 5, 6];
// console.log(myNewArray.shivam());

// ==================== CLASS =====================

class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  // this start function is found in Vehicle.prototype
  start() {
    return `${this.model} is a car from ${this.make}`;
  }
}

const car2 = new Vehicle("Mahindra", "Thar");
// console.log(car2.start());

// console.log(car2.hasOwnProperty("start"));
// console.log(Vehicle.prototype.hasOwnProperty("start"));

// ========================= INHERITANCE =====================

class Car extends Vehicle {
  drive() {
    return `${this.make}: this is an inheritance exmaple`;
  }
}

let myCar = new Car("Toyota", "Corolla");
// console.log(myCar.start());
// console.log(myCar.drive());

let vehOne = new Vehicle("Toyota", "Corolla");
// console.log(vehOne.make);

// ===================== Encapsulation =======================

class BankAccount {
  #balance = 0;

  deposit(money) {
    this.#balance += money;
    return `$${money} has been deposited in your account `;
  }

  checkBalance() {
    return `Account Balance: $${this.#balance} `;
  }
}

const myBank = new BankAccount();
// console.log(myBank.deposit(200));
// // console.log(myBank.#balance)      // private not can be accessalbe
// console.log(myBank.checkBalance());

// ===================== Abstraction =======================

class CoffeeMachine {
  start() {
    return `Starting the machine...`;
  }

  brewCoffee() {
    return `Brewing the coffee`;
  }

  pressStartButton() {
    let mesgOne = this.start();
    let msgTwo = this.brewCoffee();

    return `${mesgOne}\n${msgTwo}`;
  }
}

let myMachine = new CoffeeMachine();
// console.log(myMachine.pressStartButton());

// ===================== Polymorphism =======================

class Bird {
  fly() {
    return `Flying....`;
  }
  eat() {
    return `Eating...`;
  }
}

class Penguin extends Bird {
  fly() {
    return `Penguins cann't fly`;
  }
}

let bird = new Bird();
let penguin = new Penguin();
// console.log(bird.fly());
// console.log(penguin.fly());
// console.log(penguin.eat());

// static method

class Calculator {
  static add(a, b) {
    return a + b;
  }
}

// let miniCal = new Calculator();
// console.log(miniCal.add(2, 34));    //thow error because static cann't be accessable.

// console.log(Calculator.add(2, 4));

// ================= Getter and Setter =====================

class Employee {
  #salary;

  constructor(name, salary) {
    if (salary < 0) {
      throw new Error("Invalid salary must be greater then 0");
    }
    this.name = name;
    this.#salary = salary;
  }

  get salary() {
    return `you are not allowed to see salary`;
  }

  set salary(value) {
    if (value < 0) {
      console.log("Invalid Salary from setter func");
    } else {
      this._salary = value;
    }
  }
}

let emp = new Employee("shivam", 50000);
console.log(emp.salary);     //getter
// emp.salary = -50000;      //setter
