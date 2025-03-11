// Event Loop
console.log("1️⃣ Start");

setTimeout(() => console.log("5️⃣ setTimeout"), 0); // Macrotask

Promise.resolve().then(() => {
  console.log("2️⃣ Promise 1");
  Promise.resolve().then(() => console.log("3️⃣ Promise 2"));
});

console.log("4️⃣ End");

// How to Remember Priority?
// Microtasks always execute before Macrotasks.
// Promises (.then(), .catch()) are part of Microtask Queue, so they execute before setTimeout().
// If multiple Promises exist, they execute in the order they were added.
// If a new microtask is added inside another microtask, it runs before any macrotask.
