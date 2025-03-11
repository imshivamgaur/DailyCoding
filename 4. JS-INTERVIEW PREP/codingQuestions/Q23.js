// Curring in JavaScript

// first example
function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(add(2)(3)(5)); //10

// second example
function sendAutoMail(to) {
  return function (subject) {
    return function (body) {
      console.log(`Sending messing to ${to} with subject ${subject}: ${body}`);
    };
  };
}

// let result = sendAutoMail("ritik")("greet")("hello bro, fuck you!");

let step1 = sendAutoMail("shivam@gmail.com"); // this is static for next step
let step2 = step1("New Order Confirmation"); // this is also static for next step
let step3 = step2("Hey there, you just ordered a keyboard");
