//! Callbacks

// function getMessageCallback(callback) {
//   console.log("inside getMessage function");
//   setTimeout(() => {
//     callback("Hello from Callback!");
//   }, 2000);
// }

// const getMessage = (message) => {
//   console.log(message);
// };

// getMessageCallback(getMessage);

//! Promise systax

// function getMessagePromise() {
//   return new Promise((resolve, reject) => {
//     console.log("inside the promise");
//     setTimeout(() => {
//       resolve("Hello from Promise!");
//       // reject("fuck off");
//     }, 2000);
//   });
// }

// getMessagePromise()
//   .then((message) => {
//     console.log(message); // Output after 2 sec: Hello from Promise!
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//! Asycn Await

// function getMessageAsync() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Hello from Async/Await!");
//     }, 2000);
//   });
// }

// async function showMessage() {
//   const message = await getMessageAsync();
//   console.log(message); // Output after 2 sec: Hello from Async/Await!
// }

// showMessage();
// console.log("hello bro");
