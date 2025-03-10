//^1.  What is javascript and where is it commonaly used?
/*
  Javascript is a high level programming language that is widly used
  to create a interactive effect within web browser.
  ---- A High level programming language is a human understandable 
  language. it is used to developing both web and mobile applications
*/

//^2. What is template literals in Javascript?
/*
  When we combine $ sign {}brackets and backticks (``). It helps to embed
  variable and expression directly to the string to makin the code 
  more readable and flexible

  example:-
  let a = 10;
  let b = 20;
  console.log(`Sum of ${a} and ${b} is ${a + b}`);
*/

//^3. What is hositing ? Give an example.

/*

 so in above we accessing the funtion before declaring in other langauge
 like python so, it will throw an error.
 --- But in JS it will execute and print the code. So this phenomena is 
 know as hoisting.

 Where variable and function is hoisted to the top of their scope before exectution.
 There are 2 types of hoisting - 
 1. variable hoisting

 console.log(a);
 var a = 5;   //undefined
  --- where the var keyword will give you unefined as output.
  where let and const will give throw a refrence error.

 2. function hoisting
Step 1: Creation Phase (Memory Allocation / Hoisting)
Before executing the code, JavaScript scans the entire script and does the following:

---Moves function declarations to the top of the scope with their complete definition.
---Moves var variables to the top but initializes them as undefined.
behind the scene:-

function greet() {
  console.log("Hello there 👋");
}

// Now, execution starts
greet(); // ✅ Function is accessible and executes properly


but it will throw error with ( funciton expression )
*/

//^4. Differnce between let var and const.

/*
function testScope() {
  if (true) {
    var a = "I am var";
    let b = "I am let";
    const c = "I am const";
  }

  console.log(a); // ✅ Works (var has function scope)
  console.log(b); // ❌ ReferenceError (let has block scope)
  console.log(c); // ❌ ReferenceError (const has block scope)
}
testScope();
  
*/

//^5. What are the data types available in Javscript.

/*
  Data types in js can be categorized as Primitve and Non-primitive.

  Primitive Data types-- It is immutable
  1. Number
  2. String
  4. Boolean
  5. undefined
  6. Null
  7. Symbol
  8. BigInt

  Non-Primitive Data Types-- It is mutable
  1. Object
  2. Array
  3. Function
  

  // Primitive Types
  let num = 42; // Number
  let bigIntNum = 9007199254740991n; // BigInt
  let str = "Hello, World!"; // String
  let isCodingFun = true; // Boolean
  let notAssigned; // Undefined
  let emptyValue = null; // Null
  let uniqueID = Symbol("id"); // Symbol
  
  // Non-Primitive Types
  let person = { name: "Shivam", age: 22 }; // Object
  let numbers = [1, 2, 3, 4]; // Array
  function greet() { console.log("Hi!"); } // Function
  
  console.log(typeof num); // "number"
  console.log(typeof bigIntNum); // "bigint"
  console.log(typeof str); // "string"
  console.log(typeof isCodingFun); // "boolean"
  console.log(typeof notAssigned); // "undefined"
  console.log(typeof emptyValue); // "object" (JavaScript quirk)
  console.log(typeof uniqueID); // "symbol"
  
  console.log(typeof person); // "object"
  console.log(typeof numbers); // "object"
  console.log(typeof greet); // "function"
*/
