// use strict in JS

// "use strict";

//* Undeclared variables
x = 10;
console.log(x); // ReferenceError: x is not defined





//* Read only property
const obj = { name: "shivam" };

Object.defineProperty(obj, "name", { writable: false });

obj.name = "ritik";
console.log(obj);



// Preventing New property Additions & Modifications
const obj3 = { name: "Shivam" };
Object.freeze(obj3); // ❄️ Freezes the entire object

obj3.name = "John"; // ❌ Error: Cannot assign to read-only property
obj3.age = 25; // ❌ Error: Cannot add new properties

console.log(obj3); // ✅ Output: { name: "Shivam" }



// Secure eval
eval("var x = 911");
console.log(x);