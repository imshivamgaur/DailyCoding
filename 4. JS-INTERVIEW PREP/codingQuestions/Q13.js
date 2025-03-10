// higer order function -
//* which func taking function as a argument
//* which func returns a other function ---is know as higher order function

// example 1st

function calculate(num1, num2, callback) {
  return callback(num1, num2);
}

function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function multiple(num1, num2) {
  return num1 * num2;
}

const ans = calculate(2, 4, multiple);
console.log(ans);

// example 2

function higherOrderFunc() {
  return function () {
    console.log("Hello from inside");
  };
}

const message = higherOrderFunc();
message();
