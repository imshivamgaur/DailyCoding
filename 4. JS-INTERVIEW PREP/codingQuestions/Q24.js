// Generator function
/*
1️⃣ You control execution – It only runs when .next() is called.
2️⃣ It pauses at yield and resumes from where it left off.
3️⃣ It can run infinitely if inside a loop (while (true)).
*/

function* myGenerator() {
  console.log("Before first yield");
  yield 1; // Pause here and return 1
  console.log("After first yield, before second yield");
  yield 2; // Pause here and return 2
  console.log("After second yield");
}

const gen = myGenerator(); // Creating the generator object

console.log(gen.next()); // Logs "Before first yield", { value: 1, done: false }
console.log(gen.next()); // Logs "After first yield, before second yield", { value: 2, done: false }
console.log(gen.next()); // Logs "After second yield", { value: undefined, done: true }

function* infiniteCounter() {
  let count = 1;
  while (true) {
    yield count++; // Pauses here until .next() is called
  }
}

const counter = infiniteCounter();

setInterval(() => {
  console.log(counter.next().value); // Keeps calling .next() every second
}, 1000);
