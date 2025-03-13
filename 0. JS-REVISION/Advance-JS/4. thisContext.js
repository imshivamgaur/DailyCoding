const person = {
  name: "shivam",
  greet() {
    console.log(`Hi, i am ${this.name}`);
  },
};

person.greet();


const greetFunction = person.greet;
// greetFunction();      // Hi, i am undefined


// ================================================

/*
  bind() naya function return karta hai jisme
  this set ho jata hai, par function turant 
  execute nahi hota. balki function return krta
  hai
*/

const boundGreet = person.greet.bind({ name: "yoyo" });
console.log(boundGreet);


// =================================================

/*
  .call() function ko turant execute kar deta 
  hai aur this ko replace kar deta hai.
*/

const person2 = {
  name: "Shivam",
  greet(age) {
    console.log(`Hi, I am ${this.name} and I am ${age} years old.`);
  },
};

person2.greet.call({ name: "Yoyo" }, 25);



// ==============================================

/*
   .apply() bhi .call() jaisa hi hota hai, bas 
   arguments array ke form me pass hote hain.
*/

const person3 = {
  name: "Shivam",
  greet(age, city) {
    console.log(`Hi, I am ${this.name}, I am ${age} years old and I live in ${city}.`);
  },
};

person3.greet.apply({name: "shivam"}, [20, "noida"])
